---
layout: bs_default
title: Welcome to Orionrobots
---
At Orionrobots, Danny builds robots, electronics, gadgets and stuff that moves. I get kids like my regular helpers Jonathan and Helena to join in, and occasionally others too.
I aim to make some of the cool robotics things easy for anyone to build, and push the boundaries of what is easy. Oh and just to have lots of fun doing it too...

You can support my work at [Orionrobots on Patreon](https://patreon.com/orionrobot)s where there are also previews, polls and other perks for supporters.

You can see my latest videos on [Orionrobots Youtube](https://youtube.com/orionrobots).

You can reach me on twitter [@orionrobots](https://twitter.com/orionrobots)


# Recent Posts


<ul class="posts">
  {% for post in site.posts %}{% if forloop.index < 4 %}
        <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a><p class="clearfix">{{ post.excerpt }}<a href="{{ BASE_PATH }}{{ post.url }}">more...</a></p><p class="clearfix"></p></li>
  {% endif %}{% endfor %}
</ul>

{% assign image="/assets/construction_guide/RobotExplodedStep0.png" %}
{% assign thumb="/assets/construction_guide/RobotExplodedStep0.png" %}
{% assign description="Building The Orionrobots Explorer Robot kit" %}
{% assign link_url="/construction_guide.html" %}
{% include pin_image_link.html %}
{% assign image='/galleries/2013-11-14-explorer-wall-avoider-kit/close_up_of_sensors_in_breadboard.jpg' %}
{% assign thumb='/galleries/2013-11-14-explorer-wall-avoider-kit/close_up_of_sensors_in_breadboard.jpg' %}
{% assign description='How to build a wall avoiding robot' %}
{% assign link_url='/2013/11/14/explorer-wall-avoider-kit' %}
{% include pin_image_link.html %}
{% assign youtube_pinterest="true" %}
{% assign description="Adding a robot to a raspberry pi" %}
{% assign youtube_id="U8458u-jilI" %}
{% include youtube_link %}
{% assign image="/assets/2013-05-23-building-a-bump-sensor/13-IMG_4874.CR2_compact.jpg" %}
{% assign thumb="/assets/2013-05-23-building-a-bump-sensor/13-IMG_4874.CR2_compact.jpg" %}
{% assign description="Building a bump sensor for the Explorer Robot Kits" %}
{% assign link_url="/2013/05/23/building-a-bump-sensor" %}
{% include pin_image_link.html %}

# Events

[Robot Events](wiki/robot_events.html)

# Policies

<a href="/Terms+And+Conditions" title="Terms And Conditions">Terms And Conditions</a>