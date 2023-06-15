---
layout: index
title: Welcome to Orionrobots
pin_links:
  - image: /galleries/2023/Robotics-at-Home-with-Raspberry-Pi-Pico-banner-2048.png
    thumb: /galleries/2023/Robotics-at-Home-with-Raspberry-Pi-Pico-banner-2048.png
    description: Learn to build and Program Robots using Robotics at Home with Raspberry Pi Pico
    link: https://www.amazon.com/Robotics-Home-Raspberry-Pi-Pico/dp/1492079941
tags: [robot-building, robotics-at-home, making-robots]
---
At Orionrobots, Danny and his team build robots, electronics, gadgets and stuff that moves.
We aim to make robots easy for anyone to build, and push the boundaries of what is easy. Oh and just to have lots of fun doing it too!

<a href="https://packt.link/5swS2" title="Learn to build and Program Robots using Robotics at Home with Raspberry Pi Pico"><img src="/galleries/2023/Robotics-at-Home-with-Raspberry-Pi-Pico-banner-2048.jpg"
  alt="Learn to build and Program Robots using Robotics at Home with Raspberry Pi Pico"
  sizes="(min-width: 1200px) 1140px, (min-width: 1000px) 940px, (min-width: 800px) 720px, 93.75vw"
  srcset="/galleries/2023/Robotics-at-Home-with-Raspberry-Pi-Pico-banner-720.jpg 720w, /galleries/2023/Robotics-at-Home-with-Raspberry-Pi-Pico-banner-1140.jpg 1140w, /galleries/2023/Robotics-at-Home-with-Raspberry-Pi-Pico-banner-1280.jpg 1280w"></a>

Discuss [robot building on Our Discord Server](https://discord.gg/sMnPxFhAe2)!

You can see my latest videos on [Orionrobots Youtube](https://youtube.com/orionrobots).

You can reach me on twitter [@orionrobots](https://twitter.com/orionrobots)

## Recent Posts

<ul class="posts">
  {% for post in collections.recent_posts limit: 6 %}
    <li class="post media">
      {% if post.data.thumb %}
        <a class="media-left" href="{{ BASE_PATH }}{{ post.url }}"><img alt="{{ post.data.title }}" class="media-object index_post_thumb" src="{{ post.data.thumb }}"></a>
      {% endif %}
      <div class="post-content media-body">
        <div class="media-heading"><span class="post_date">{{ post.date | date_to_string }}</span> &raquo;
          <a class="post_title" href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a>
        </div>
          <div class="clearfix post_excerpt">
            {% capture post_excerpt %}{% excerpt post %} {% endcapture %}
            {{ post_excerpt | strip_images | strip_links | strip_decorators }}<a href="{{ BASE_PATH }}{{ post.url }}">more...</a>
          </div>
      </div>
        <p class="clearfix"></p>
    </li>
  {% endfor %}
</ul>

## Events

[Robot Events](wiki/robot_events.html)

## Policies

<a href="/wiki/terms_and_conditions.html" title="Terms And Conditions">Terms And Conditions</a>
