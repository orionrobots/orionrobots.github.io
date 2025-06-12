# orionrobots.github.io

Orionrobots website source

CC BY SA 3.0 - <http://creativecommons.org/licenses/by-sa/3.0/>
Creative Commons By Attribution Share-Alike v3.0

## Running serve and build in docker

```bash
docker compose up dist
docker compose run --interactive --rm serve npm run dev
docker compose up serve
```

Get a bash prompt with `docker compose run --interactive serve bash`

## Preparing to contribute

This project uses the following tools for development:

- Docker compose to run the development environment
- pre-commit to run checks before committing changes
    - You will need to install pre-commit on your local machine with pip/pipx in a python environment.

You should create a named branch for your changes, before committing, as using PR's to contribute is preferred.

```bash
git checkout -b my-feature-branch
```

## Running locally

You may need to determine dependencies - the docker method is preferred.

Serve only:

```bash
npm install
npm run serve
```

## If you make changes to htaccess

For an experience closer to hosting, use docker compose:

```bash
docker compose up web
[+] Running 1/0
⠿ Container orionrobotsgithubio-web-1 Created       0.0s
Attaching to orionrobotsgithubio-web-1
orionrobotsgithubio-web-1  | ruby 3.1.1p18 (2022-02-18 revision 53f5fc4236) [x86_64-linux-musl]
```

## If you make changes to css bundle content

You will need to rerun the dist task:

```bash
docker compose up --rm dist
```
