---
title: How to reassign OpenWeb UI chat users
description: Learn how to reassign OpenWeb UI chat users to another user.
date: 2024-10-12
tags: ["OpenWeb UI", "Ollama", "ai", "sqlite3"]
---
I have always had an interest in AI. I've been running a local OpenWebUi with a local Ollama for a while now, hosting my own AI's so I can use them with my notes. I'm a long term fan of the Zettlekasten method of note taking and linking, a second brain if you will, so tying that to an AI as RAG (Retrieval Augmented Generation) is a natural fit.

This howto comes with assumptions and warnings:

- You are the admin and owner of the system
- You are comfortable with SQL and databases
- You can take a backup of the sql and restore it
- You don't try this while other users (especially the targeted users) are using the system

## Reassigning users

So I had a bit of a problem. I'd made some chats as myself, and some as the admin user - which I shouldn't really other than test stuff. I wanted to reassign the chats to my user. The user interface didn't readily show a way to do this, so I had to dig into the database. I am assuming here you are admin and this is your system.

First I start a sqlite docker mounting the same place (you could install sqlite3 locally, but I like to keep my system clean):

`docker run -it --rm -v /home/danny/ai/webui-settings:/data alpine-sqlite sh`

Then I make a backup of the database (always a good idea if you are fiddling):
`cp /data/webui.db /data/webui.db.bak`

Then I connect to the database:

`sqlite3 /data/webui.db`

Now you are ready to try this:

## Step 1: find the User IDs

You want the user the chat is currently stored at and your user id:

```sql
> SELECT id, name FROM user;
b06fefb8-xxxx-xxxx-xxxx-xxxxxxxxxxxx|Admin
cc8c052f-xxxx-xxxx-xxxx-xxxxxxxxxxxx|Danny Staple
```

## Step 2: Find the Chat ID

Now we can use the user we are moving from to find the chat ID:

```sql
> SELECT id, title FROM chat_id WHERE user_id = '<the original user id>';
bdce723c-xxxx-xxxx-xxxx-xxxxxxxxxxxx|Llava test
a3626190-xxxx-xxxx-xxxx-xxxxxxxxxxxx|LLM Model Comparison 💡
```

We now have Chat Id's to move.

## Step 3: Update the chat

We might want to update a single chat:

```sql
> UPDATE chat SET user_id = '<your user id>' WHERE id = '<chat id>';
```

Or we might want to update all chats from one user to the other. In my case, I wanted to move all chats from the admin user to my user:

```sql
> UPDATE chat SET user_id = 'cc8c052f-xxxx-xxxx-xxxx-xxxxxxxxxxxx' WHERE user_id = 'b06fefb8-xxxx-xxxx-xxxx-xxxxxxxxxxxx';
```

## How do I have LLM locally?

There was a great couple of articles over on TheRegister on this. I started with [
How to run an LLM on your PC, not in the cloud, in less than 10 minutes[(https://www.theregister.com/2024/03/17/ai_pc_local_llm/). This lets you have single chats with an LLM. Depending on your hardware, it can also be pretty quick, or quick enough.

This has no UI however, it's just a plain command line, or REPL to whichever LLama model you started. That's when I found [OpenWebUI](https://github.com/open-webui/open-webui).

I use WSL on windows plus docker desktop to run this as a docker image. I have the following script locally for updating it:

```bash
docker rm -f open-webui || true
VERSION=V0.3.32
docker run -d \
  -p 3000:8080 \
  --add-host=host.docker.internal:host-gateway \
  -v /home/danny/ai/webui-settings:/app/backend/data \
  -e WEBUI_AUTH=True \
  --name open-webui \
  --restart always "ghcr.io/open-webui/open-webui:${VERSION}"
```

I save this as ai/start_webui.sh in my user, and chmod +x. Once I run it, until I update the version, docker will keep it alive, and I can log in on port 3000.
I think there was an OLLama setting needed also to allow that local access via IP.

## Finding my sqlite3 solution

How did I figure this out? first, I used my AI and sent it my system status, that I knew a bit of sql. At this point, it was almost like an interactive notebook.
I asked the specific sqlite3 equivalent to list tables (I'm more familiar with the mysql way). It shared the `.tables` command. It also shared a probable solution with the wrong table names , however if you regularly work with LLMs this is kinda expected.

I used it's suggestion to list the tables:


```sql
sqlite> .tables
alembic_version  config           knowledge        prompt
auth             document         memory           tag
chat             file             migratehistory   tool
chatidtag        function         model            user
```

It was kinda obvious perhaps that the chat and user tables looked good. I'd let the LLM search the web, and linked it the OpenWebUI github URL, so it was also confirming that this looked good.
I described the tables, starting with chat:

```sql
sqlite> .schema chat
CREATE TABLE IF NOT EXISTS "chat" ("id" VARCHAR(255) NOT NULL, "user_id" VARCHAR(255) NOT NULL, "title" TEXT NOT NULL NOT NULL, "chat" TEXT NOT NULL, "share_id" VARCHAR(255), "archived" INTEGER NOT NULL, "created_at" DATETIME NOT NULL NOT NULL, "updated_at" DATETIME NOT NULL NOT NULL);
CREATE UNIQUE INDEX "chat_id" ON "chat" ("id");
CREATE UNIQUE INDEX "chat_share_id" ON "chat" ("share_id");
```

From here, I could see the chats id, user_id and title fields. We probably don't want the bit chat blob, so I knew the select needed to name fields.

Similarly for user:

```sql
sqlite> .schema user
CREATE TABLE IF NOT EXISTS "user" ("id" VARCHAR(255) NOT NULL, "name" VARCHAR(255) NOT NULL, "email" VARCHAR(255) NOT NULL, "role" VARCHAR(255) NOT NULL, "profile_image_url" TEXT NOT NULL NOT NULL, "api_key" VARCHAR(255), "created_at" INTEGER NOT NULL NOT NULL, "updated_at" INTEGER NOT NULL NOT NULL, "last_active_at" INTEGER NOT NULL NOT NULL, "settings" TEXT, "info" TEXT, "oauth_sub" TEXT);
CREATE UNIQUE INDEX "user_api_key" ON "user" ("api_key");
CREATE UNIQUE INDEX "user_id" ON "user" ("id");
CREATE UNIQUE INDEX "user_oauth_sub" ON "user" ("oauth_sub");
```

Again, we don't need all the detail, so selecting id and name was enough.

I sent this back, along with listings to the LLM (Llama3), which dutifully came back with an update command. It was updating one chat by it's ID. I did one, and reloaded web UI, which worked.
I then came up with the moving the rest of the chats by user id which worked great. closing the loop was that the very chat I was in was moved, and I could continue it in the other user seamlessly.

It was a great collaboration. I'm not sure I'm 100% aboard with all the emoji it likes to use though! 😂
