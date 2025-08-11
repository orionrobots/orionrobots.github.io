# orionrobots.github.io

Orionrobots website source

CC BY SA 3.0 - <http://creativecommons.org/licenses/by-sa/3.0/>
Creative Commons By Attribution Share-Alike v3.0

## Project tooling strategy

This project takes a docker compose first strategy. This is to ensure that the environment things are built in is consistent, and the commands used to build, test and verify in are consistent docker compose variations too.

Some of the tooling is in python, but the majority is in JS with Node. Since the front end is mostly JS, tooling should aim to be written with this.

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

## Running Tests

This project uses BDD (Behavior-Driven Development) tests with Gherkin syntax powered by Cucumber.js.

### Running Integration Tests

To run the BDD integration tests:
```bash
docker compose run test
```

The tests are located in `tests/staging/features/` and use Gherkin feature files to describe expected behavior.

## Preparing to contribute

This project uses the following tools for development:

- Docker compose to run the development environment
- pre-commit to run checks before committing changes
    - You will need to install pre-commit on your local machine with pip/pipx in a python environment.

You should create a named branch for your changes, before committing, as using PR's to contribute is preferred.

```bash
git checkout -b my-feature-branch
```

## Current project structure

Note - the goal is to arrive at a better structure, that is a work in progress.

- .github/ -> github workflows, linter configurations, utility scripts (including desk ones - not ideal)
- _data -> json file for eleventy data
- _drafts -> WIP posts, old content that should be completed, or pulled and should be on another blog. It has some utility scripts and tools that should not be here.
- _image_sources -> SVG files, high resolution images before processing, XMP or image process data files. Should not be uploaded to the site. Candidate for LFS.
- _includes -> liquid include files carried from jekyll into 11ty. They are still very much in use - templates, layouts, render components and utilities.
- _posts -> json data for the list of blog posts. Might be redundant, the state of that json file needs checking and moving/removal if it's not in use.
- admin -> netlify admin tools, intended for an easy way to add/edit posts without being directly in github. Not currently working, but has worked before.
- assets -> a mixutre of style assets (logos and tools), downloadable file assets, and images for posts or wiki pages. Ideally - it should only be the style assets with the other parts in galleries.
- content -> Currently all blog posts, wiki and pages are here, with some exceptions. Eventaully, all site rendered markdown and images should be in this structure and not the root folder.
- error_pages -> Landing pages for 404's and similar
- galleries -> Where pictures to be served on the site, and files for downloads should be. Should be under the content folder.
- navigation and indexes -> archive, rss feeds, sitemap pages. Should also be under content. Has site build js which should be in the src folder?
- products -> content for the old shop. Still in some wiki page references, and device specifications - which should go to the wiki. Anything relating to price, shipping should be removed. This folder should be removed.
- src -> Eleventy etensions in JS, scss style stuff. All used in site generation
- / - config scripts for eleventy, tools, linters, readmes. Dockerfiles for serving, some utility tools. It has the main content index and favicon, which should not be there.

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

The staging test environment uses Docker Compose to run the built site with Apache configuration that mirrors the hosting environment. This environment:

- Tests the site with Apache configuration that mirrors the hosting environment
- Validates that htaccess rules work correctly  
- Ensures the site serves properly before deployment

### Running the Staging Environment

To run the staging environment locally using Docker Compose:

```bash
# Build the site first (if not already built)
docker compose up --build dist

# Start the staging service
docker compose up --build staging
```

The staging service will be available at http://localhost:8080

The staging environment automatically uses the consolidated `httpd_serve` Docker stage from the main Dockerfile, ensuring consistency between development and CI/CD environments.

The staging tests run automatically in CI/CD workflows when changes are pushed to the master branch or in pull requests.

