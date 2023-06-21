# orionrobots.github.io

Orion Jekyll Site

CC BY SA 3.0 - <http://creativecommons.org/licenses/by-sa/3.0/>
Creative Commons By Attribution Share-Alike v3.0

Serve only:

```bash
docker compose up web
[+] Running 1/0
 ⠿ Container orionrobotsgithubio-web-1 Created       0.0s
Attaching to orionrobotsgithubio-web-1
orionrobotsgithubio-web-1  | ruby 3.1.1p18 (2022-02-18 revision 53f5fc4236) [x86_64-linux-musl]
```

Run a shell to debug:

```bash
    $ docker compose run --rm shell
    bash5.1 #
```

You can use `jekyll build --profile` to diagnose build speed issues.
You can also pass `-d /tmp/_site` to jekyll build in the session to speed up build times, if you do not intend to keep the site output.

## Github action to post

There's a github action to create a post - which has it's own bugs and is less user friendly than prose. Still yet to figure that out.
