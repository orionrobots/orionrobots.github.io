# orionrobots.github.io

Orionrobots website source

CC BY SA 3.0 - <http://creativecommons.org/licenses/by-sa/3.0/>
Creative Commons By Attribution Share-Alike v3.0

## Running serve and build in docker


### Recommended: Using Docker Compose

Build the dist and serve:
```bash
docker compose up --build --remove-orphans
```

Get a bash prompt in the serve container:
```bash
docker compose run shell
```

**Note:** `node_modules` are managed inside the container. You do not need to run `npm install` on your host.

### Link Checking

The project includes integrated link checking to detect broken links, with a focus on images:

```bash
# Run link checker locally
./scripts/local_linkcheck.sh
```

For more details, see [linkchecker/README.md](linkchecker/README.md).

**GitHub Actions Integration:**
- Nightly automated link checks on production
- PR-based link checks when labeled with `link-check`
- Detailed HTML reports with categorized results

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

You may need to determine dependencies - the docker method is preferred. Direct `npm` usage on the host is discouraged to avoid version mismatches.

## If you make changes to htaccess

For an experience closer to hosting, use docker compose:

```bash
docker compose up web
[+] Running 1/0
⠿ Container orionrobotsgithubio-web-1 Created       0.0s
Attaching to orionrobotsgithubio-web-1
orionrobotsgithubio-web-1  | ruby 3.1.1p18 (2022-02-18 revision 53f5fc4236) [x86_64-linux-musl]
```

## Staging Test Environment

The staging test environment is located in `.github/scripts/staging/` and contains Docker configuration files used for testing the built site before deployment. This environment:

- Tests the site with Apache configuration that mirrors the hosting environment
- Validates that htaccess rules work correctly
- Ensures the site serves properly before deployment

The staging tests run automatically in CI/CD workflows when changes are pushed to the master branch or in pull requests.

