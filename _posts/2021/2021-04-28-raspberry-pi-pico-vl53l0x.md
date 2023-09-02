---
date: '2021-04-28'
description: Get an optical laser based distance sensors or two working with the Raspberry
  Pi Pico
layout: post
published: true
tags:
- raspberry pi
- raspberry pi pico
- raspberry pi pico projects
- micropython
- programming
- electronics
- microcontroller
- sensors
- learn robotics at home
title: Raspberry Pi Pico with the VL53L0x Distance sensor
using_mathjax: false
---
This weekend, I got an optical laser based distance sensors or two working with the Raspberry Pi Pico with Micropython. I managed to get a single one working, after some frustration with the XSHUT pin, and then I managed to get 2 of the devices working. Some GPIO trickery with the XSHUT pin, and there are multiple VL53L0x sensors working.

First I got them working on 2 separate i2c buses, and then both running on a single bus. A pair of these will be perfect on my next robot build.

<iframe width="560" height="315" src="https://www.youtube.com/embed/XQrxPcq2tZ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="True"></iframe>

[The VL53L0X Raspberry Pi Pico Code](https://github.com/orionrobots/vl53l0x)

## Robotics at Home with Raspberry Pi Pico

This post was based on research I did for the book [Robotics at Home with Raspberry Pi Pico](https://packt.link/5swS2) which is available now.

<a href="https://packt.link/5swS2" title="Learn to build and Program Robots using Robotics at Home with Raspberry Pi Pico">{% img_responsive "galleries/2023/Robotics-at-Home-with-Raspberry-Pi-Pico-banner.png", "Learn to build and Program Robots using Robotics at Home with Raspberry Pi Pico" %}</a>
