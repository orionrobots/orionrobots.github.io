---
layout: post
title: "Raspberry Pi Pico with the VL53L0x Distance sensor"
description: "Get an optical laser based distance sensors or two working with the Raspberry Pi Pico"
category: 
tags: [raspberry pi, raspberry pi pico, raspberry pi pico projects, micropython, programming, electronics, microcontroller, sensors, robotics]
---
{% include JB/setup %}

This weekend, I got an optical laser based distance sensors or two working with the Raspberry Pi Pico. I managed to get a single one working, after some frustration with the XSHUT pin, and then I managed to get 2 of the devices working. Some GPIO trickery with the XSHUT pin, and there are multiple VL53L0x sensors working.

First I got them working on 2 separate i2c buses, and then both running on a single bus. A pair of these will be perfect on my next robot build.

<iframe width="560" height="315" src="https://www.youtube.com/embed/XQrxPcq2tZ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="True"></iframe>

[The VL53L0X Raspberry Pi Pico Code](https://github.com/orionrobots/vl53l0x)
