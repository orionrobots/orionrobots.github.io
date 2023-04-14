# orionrobots.github.io

Orion Jekyll Site

CC BY SA 3.0 - <http://creativecommons.org/licenses/by-sa/3.0/>
Creative Commons By Attribution Share-Alike v3.0

Build:

```bash
    $ docker build . -t orionrobots:builder
    $ docker run --rm -it -p 4000:4000 -v $(pwd):/srv/jekyll orionrobots:builder bash
    # jekyll build (or serve)
```

## Using Prose to edit

Edit/make posts for authenticated users: https://prose.io/#orionrobots/orionrobots.github.io

Authenticate with github before trying to edit a post - it otherwise makes you refresh the page with the work!

The title is the post title, not the file name, it will slugify for you.

Don't forget to enable the published flag - easy to forget this!

Known bugs - the tags look quite broken as it quotes them, I've had to go back and edit in github.

## Github action to post

There's a github action to create a post - which has it's own bugs and is less user friendly than prose. Still yet to figure that out.

## Please suggest

The site is jekyll. And the fact that it's harder for me to write to here than insert_any_social_media is considered bug number1 for orionrobots (and probably any other jekyll site). Looking to fix this in the name of 20 second rule - reaching to write on my own site should be the easiest path, even from my smartphone!
