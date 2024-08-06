---
layout: index
title: Welcome to Orionrobots
pin_links:
  - image: /galleries/2023/Robotics-at-Home-with-Raspberry-Pi-Pico-banner-2048.png
    thumbnail: /galleries/2023/Robotics-at-Home-with-Raspberry-Pi-Pico-banner-2048.png
    description: Learn to build and Program Robots using Robotics at Home with Raspberry Pi Pico
    link: https://www.amazon.com/Robotics-Home-Raspberry-Pi-Pico/dp/1492079941
tags: [robot building, robotics at home, making robots]
eleventyImport:
  collections: ["all"]
eleventyExcludeFromCollections: true
---
At Orionrobots, Danny and his team build robots, electronics, gadgets and stuff that moves.
We aim to make robots easy for anyone to build, and push the boundaries of what is easy. Oh and just to have lots of fun doing it too!

<a href="https://packt.link/5swS2" title="Learn to build and Program Robots using Robotics at Home with Raspberry Pi Pico">{% img_responsive "galleries/2023/Robotics-at-Home-with-Raspberry-Pi-Pico-banner.png", "Learn to build and Program Robots using Robotics at Home with Raspberry Pi Pico" %}</a>

Discuss [robot building on Our Discord Server](https://discord.gg/sMnPxFhAe2)!

You can see my latest videos on [Orionrobots Youtube](https://youtube.com/orionrobots).

You can reach me on Facebook, Discord and LinkedIn as #orionrobots on all platforms.

## Recent Posts

<ul class="posts">
  {% assign posts = collections.all | reverse | with_explicit_date %}
  {% for post in posts limit: 6 %}
    <li class="post media d-flex">
      <a class="media-left" href="{{ BASE_PATH }}{{ post.url }}">{% thumbnail_for_post post %}</a>
      <div class="flex-grow-1 ms-3">
        <div class="media-heading"><span class="post_date">{{ post.date | date: '%d %b %Y' }}</span> &raquo;
          <a class="post_title" href="{{ BASE_PATH }}{{ post.url }}">{{ post.data.title }}</a>
        </div>
          <div class="post_excerpt">
            {{ post | excerpt | strip_html }}
            <a href="{{ BASE_PATH }}{{ post.url }}">more...</a>
          </div>
      </div>
    </li>
  {% endfor %}
</ul>

## Events

[Robot Events](wiki/robot_events.html)

## Policies

<a href="/wiki/terms_and_conditions.html" title="Terms And Conditions">Terms And Conditions</a>
