---
layout: page
title: Projects
---
# What are we working on?

## Esp 8266

My current project is called "Bounce!" - a visual programming language based on Block.ly for the esp8266 - a wifi enabled microcontroller. I am of course connecting to it to as many robtos and sensors as I can get my hands on - there is a lot of related esp8266 video content.

## The CNC Machine

We bought a CnC Machine, intending to use it to prototype new robot stuff, and because prototype fabrication is a fun use of robotics.

[CnC Machine](cnc_notes.html)

## The Orion Explorer 1

This is my own robot kit - which was sold in 2014. It is no longer being worked on.

{% assign pages_list=site.tags["orion explorer 1"] %}
<ul class="posts">
  {% for node in pages_list %}
    {% if forloop.index < 5 %}
      {% if node.title != null %}
        {% if group == null or group == node.group %}
          {% if page.url == node.url %}
            <li class="active"><a href="{{ BASE_PATH }}{{node.url}}" class="active">{{node.title}}</a></li>
          {% else %}
            <li><a href="{{ BASE_PATH }}{{node.url}}">{{node.title}}</a></li>
          {% endif %} {% comment %}pagurl{% endcomment %}
        {% endif %} {% comment %}group{% endcomment %}
      {% endif %} {% comment %}node title{% endcomment %}
    {% endif %} {% comment %}forloop index{% endcomment %}
  {% endfor %}
</ul>
<a href="/tags.html#orion explorer 1-ref">More...</a>

## Raspberry Pi Explorer

I've built an Explorer 1 based around the Raspberry Pi instead of the Arduino. I am yet to write up the detail of the working robot, and turn it into a kit (there were modifictions needed). Here is some video of it working:

{% assign image='/assets/youtube_thumbs/U8458u-jilI_thm.jpg' %}
{% assign thumb='/assets/youtube_thumbs/U8458u-jilI.jpg' %}
{% assign description="Adding a robot to a raspberry pi" %}
{% assign link_url="http://www.youtube.com/watch?v=U8458u-jilI" %}
{% include pin_image_link.html %}

## Sweeping Sensor Explorer

After ordering some other robot kits to play with, I wanted to try putting a sweeping sensor using a servo motor on an Explorer 1 as another kit was using. This was a single HC-04 distance sensor instead of two - in theory this allows for a wider or more precise sweep - with the robot following through.
