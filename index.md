---
layout: page
title: Welcome to Orionrobots
---
{% include JB/setup %}

I am Danny Staple, Orionrobots is my investigations and projects with robotics, electronics and stuff that moves. I aim to make some of the cool robotics things easy for anyone to build, and push the boundaries of what is easy. Oh and just to have lots of fun doing it too...

# Recent Posts

<ul class="posts">
  {% for post in site.posts %}
    {% if forloop.index < 4 %}
        <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a><p class="clearfix">{{ post.excerpt }}<a href="{{ BASE_PATH }}{{ post.url }}">more...</a></p><p class="clearfix"></p></li>
    {% endif %}
  {% endfor %}
</ul>

# The Orion Explorer 1 Robot Kit

My <a href="products/orion-explorer-1-robot-kit.html">Orion Explorer 1 Robot Building Kit</a> requires no soldering and comes as a complete robot building kit with full online step-by-step instructions.
It is fully programmable and very expandable.

{% assign image="/assets/construction_guide/RobotExplodedStep0.png" %}
{% assign thumb="/assets/construction_guide/RobotExplodedStep0.png" %}
{% assign description="Building The Orionrobots Explorer Robot kit" %}
{% assign link_url="/construction_guide.html" %}
{% include pin_image_link.html %}
{% assign image='/assets/2013-11-14-explorer-wall-avoider-kit/close_up_of_sensors_in_breadboard.jpg' %}
{% assign thumb='/assets/2013-11-14-explorer-wall-avoider-kit/close_up_of_sensors_in_breadboard.jpg' %}
{% assign description='How to build a wall avoiding robot' %}
{% assign link_url='/2013/11/14/explorer-wall-avoider-kit' %}
{% include pin_image_link.html %}
{% assign image='/assets/youtube_thumbs/U8458u-jilI_thm.jpg' %}
{% assign thumb='/assets/youtube_thumbs/U8458u-jilI.jpg' %}
{% assign description="Adding a robot to a raspberry pi" %}
{% assign link_url="http://www.youtube.com/watch?v=U8458u-jilI" %}
{% include pin_image_link.html %}
{% assign image="/assets/2013-05-23-building-a-bump-sensor/13-IMG_4874.CR2_compact.jpg" %}
{% assign thumb="/assets/2013-05-23-building-a-bump-sensor/13-IMG_4874.CR2_compact.jpg" %}
{% assign description="Building a bump sensor for the Explorer Robot Kits" %}
{% assign link_url="/2013/05/23/building-a-bump-sensor" %}
{% include pin_image_link.html %}

What is easy about it?

* Easy to build - No soldering needed
* Priced within your means
* Easy to program
* Easy to have fun with it, explore with it, expand it and do more than the basics.
* Did I say that there is no solder needed?

You can get your kids started on a robotics project for fun, or you can finally start your own robot project with grand ambitions. A uni student can get the basics off the ground in the first day, and spend the rest of an assignment extending the robot to do more.

<a href="/getting_started.html">Getting Started</a>

# Other Robot Kits

If you are after a kit or set for your kid or husband (big kid), then take a look at this list: <a  href="http://www.squidoo.com/educational-robot-kits-for-kids">Educational Robot Kits For Kids</a>.

# Policies

<a href="/Terms+And+Conditions" title="Terms And Conditions">Terms And Conditions</a>

<a href="/privacy_and_cookies.html" title="Privacy Policy">Privacy Policy</a>

