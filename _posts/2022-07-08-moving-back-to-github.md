---
title: Moving Orionrobots back to github
date: 2022-07-08T20:31:39
tags: [github, cicd, jekyll]
---
I've been trying to make it easier for me to post to the site. Putting it on Github workflows lets me improve this process.

How?

Well I've wanted to have quick web templates for posts with the simple structure for some time. This a easy to doo with IDE templates, but I wanted to be able to drop posts here even from my phone. I am note there yet, but there are some significant steps.

By being on Github flows, I can add a manual workfow with inputs as shown at https://docs.github.com/en/actions/learn-github-actions/contexts#inputs-context. This manual flow takes a title, filename slug and content. It can then write them out in template form and add them in the jekyll `_posts` path.

Jekyll is the static site generator I use for the orionrobots site.

Aside: A slug is a version of a title made easy to use in descriptive, searchable filenames. My convention is loower case and  dashes, but it's not enforced by the form.

It uses a little shell script to write the parts into the post, forming a basic starter. It then adds iit into git and pushes it. Because the content is just put into the file, markdown can be used, but I've not found a way to let it take multiline text, so consider it a starting line.

I could add tags (with an if check), but as it is, it's already going to be useful. Other Jekyll users can take a look at my github workflow files for ideas. https://github.com/orionrobots/orionrobots.github.io

I know it works, as this post was made using the tool!
