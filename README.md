# orionrobots.github.io

Orionrobots website source

CC BY SA 3.0 - <http://creativecommons.org/licenses/by-sa/3.0/>
Creative Commons By Attribution Share-Alike v3.0

Serve only:

```bash
npm install
npm run serve
```

For an experience closer to hosting, use docker compose:

```bash
docker compose up web
[+] Running 1/0
 ⠿ Container orionrobotsgithubio-web-1 Created       0.0s
Attaching to orionrobotsgithubio-web-1
orionrobotsgithubio-web-1  | ruby 3.1.1p18 (2022-02-18 revision 53f5fc4236) [x86_64-linux-musl]
```

## Running serve and build in docker

```bash
docker compose run  --interactive --rm serve npm install
docker compose run --interactive --rm  serve npm run dev
docker compose up serve
```

Get a bash prompt with `docker compose run --interactive serve bash`

