---
date: '2015-12-03'
layout: post
tags:
- esp8266
- micropython
- microcontrollers
- programming
title: Getting a quick ESP8266 build environment
---
The ESp8266 is currently my favourite toy right now. I've mostly been using NodeMCU, but also experimented with Micropython.

I started thinking about making a development environment for the device that was easy to replicate.

There are a couple of ways to do this.
First is ansible/puppet/chef or similar systems to setup all the packages.
This is okay, but it gives no isolation -
and when you cross compile for different devices, this can make things complicated and lead to unexpected results.

The others are Vagrant, and Docker - vagrant creates a VM - a whole OS on a virtual machine,
and Docker - a container - which isolates the processes and filesystems.

I made a docker image for building micropython - which I've added in a branch of the micropython
<https://github.com/orionrobots/micropython/tree/master/esp8266>.
It's not ideal - it's a slow build, and probably makes a larger image than is needed.

I also asked to see who had done something similar and found this esp8266 @micropython Vagrant box: <https://github.com/slaff/esp8266.dev.box>. Just run: `PROJECT=micropython vagrant up`.

These should make it easier for someone who is using micropython on the esp8266 and wants to
contribute/make fixes or changes to it to get started building, so they can get to the bit they meant to -
testing and building their changes, not just trying to get it to compile.
