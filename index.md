---
layout: index
title: Welcome to Orionrobots
pin_links:
  - image: /assets/construction_guide/RobotExplodedStep0.png
    thumb: /assets/construction_guide/RobotExplodedStep0.png
    description: Building The Orionrobots Explorer Robot kit
    link_url: /construction_guide.html
  - image: /galleries/2013-11-14-explorer-wall-avoider-kit/close_up_of_sensors_in_breadboard.jpg
    thumb: /galleries/2013-11-14-explorer-wall-avoider-kit/close_up_of_sensors_in_breadboard.jpg
    description: How to build a wall avoiding robot
    link: /2013/11/14/explorer-wall-avoider-kit
  - image: /galleries/2023/Robotics-at-Home-with-Raspberry-Pi-Pico-banner.png
    thumb: /galleries/2023/Robotics-at-Home-with-Raspberry-Pi-Pico-banner.png
    description: Learn to build and Program Robots using Robotics at Home with Raspberry Pi Pico
    link: https://www.amazon.com/Robotics-Home-Raspberry-Pi-Pico/dp/1492079941
---
At Orionrobots, Danny builds robots, electronics, gadgets and stuff that moves. I get kids like my regular helpers Jonathan and Helena to join in, and occasionally others too.
I aim to make some of the cool robotics things easy for anyone to build, and push the boundaries of what is easy. Oh and just to have lots of fun doing it too...

[![Learn to build and Program Robots using Robotics at Home with Raspberry Pi Pico](/galleries/2023/Robotics-at-Home-with-Raspberry-Pi-Pico-banner.jpg)](https://packt.link/5swS2)

Discuss [robot building on Our Discord Server](https://discord.gg/sMnPxFhAe2)!

You can see my latest videos on [Orionrobots Youtube](https://youtube.com/orionrobots).

You can reach me on twitter [@orionrobots](https://twitter.com/orionrobots)

## Recent Posts

<ul class="posts">
  {% for post in site.posts limit: 6 %}
    <li class="post media">
      {% if post.thumb %}
        <a class="media-left" href="{{ BASE_PATH }}{{ post.url }}"><img alt="{{ post.title }}" class="media-object index_post_thumb" src="{{ post.thumb }}"></a>
      {% endif %}
      <div class="post-content media-body">
        <div class="media-heading"><span class="post_date">{{ post.date | date_to_string }}</span> &raquo;
          <a class="post_title" href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a>
        </div>
        {% if post.excerpt %}
          <div class="clearfix post_excerpt">
            {{ post.excerpt }}<a href="{{ BASE_PATH }}{{ post.url }}">more...</a>
          </div>
        {% endif %}
      </div>
        <p class="clearfix"></p>
    </li>
  {% endfor %}
</ul>

## Events

[Robot Events](wiki/robot_events.html)

## Policies

<a href="/wiki/terms_and_conditions.html" title="Terms And Conditions">Terms And Conditions</a>
