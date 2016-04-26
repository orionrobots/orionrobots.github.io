---
layout: post
tags: [robots, esp8266, l298n, lua, nodemcu]
title: Esp8266 nodemcu simple robot
---
This week I built a simple robot base using a NodeMCU V3 dev board - an ESP8266 based board broken out for use with a breadboard,
and with on board 3v voltage regulation. Since it's using the NodeMCU firmware, it can be programmed in LUA.

The robot has two motorized wheels, and a castor.

{% assign youtube_id="ZYZelug2SW0" %} 
{% assign description="Esp 8266 Flashing LED" %}
{% include youtube_link %}

In this videeo - I get the robot going through basic modes, with simple code.

For build instructions go here:
<https://github.com/orionrobots/esp8266_video_series/tree/master/esp_motor_bot>

The robot has potential - there are many unused IO pins, and I've not started seeing what I can do with wifi on it. 
I will start playing more with it for the next few videos.