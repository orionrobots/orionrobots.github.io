---
layout: post
title: Getting a quick ESP8266 build environment
tags: [esp8266, micropython, microcontrollers, programming]
---
The ESp8266 is currently my favourite toy right now. I've mostly been using NodeMCU, but also experimented with Micropython.

I started thinking about making a development environment for the device that was easy to replicate.

There are a couple of ways to do this.
First is ansible/puppet/chef or similar systems to setup all the packages. This is okay, but it gives no isolation -
and when you cross compile for different devices, this can make things complicated and lead to unexpected results.

The others are Vagrant, and Docker - vagrant creates a VM - a whole OS on a virtual machine,
and Docker - a container - which isolates the processes and filesystems.

I made a docker image for building micropython - which I've added in a branch of the micropython
<https://github.com/orionrobots/micropython/tree/master/esp8266>.
It's not ideal - it's a slow build, and probably makes a larger image than is needed.

I also asked on twitter to see who had done something similar:

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/orionrobots">@orionrobots</a> <a href="https://twitter.com/ESP8266">@ESP8266</a> <a href="https://twitter.com/micropython">@micropython</a> Vagrant box: <a href="https://t.co/oBkqis80Js">https://t.co/oBkqis80Js</a>. Just run: `PROJECT=micropython vagrant up`</p>&mdash; slaff2 (@slaff2) <a href="https://twitter.com/slaff2/status/672398877777989633">December 3, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

These should make it easier for someone who is using micropython on the esp8266 and wants to
contribute/make fixes or changes to it to get started building, so they can get to the bit they meant to -
testing and building their changes, not just trying to get it to compile.
