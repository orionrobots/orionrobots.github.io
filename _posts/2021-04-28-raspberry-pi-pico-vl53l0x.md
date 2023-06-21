---
layout: post
title: Raspberry Pi Pico with the VL53L0x Distance sensor
description: >-
  Get an optical laser based distance sensors or two working with the Raspberry
  Pi Pico
tags: [raspberry pi,raspberry pi pico,raspberry pi pico projects,micropython,programming,electronics,microcontroller,sensors,learn robotics at home]
published: true
using_mathjax: false
---
This weekend, I got an optical laser based distance sensors or two working with the Raspberry Pi Pico with Micropython. I managed to get a single one working, after some frustration with the XSHUT pin, and then I managed to get 2 of the devices working. Some GPIO trickery with the XSHUT pin, and there are multiple VL53L0x sensors working.

First I got them working on 2 separate i2c buses, and then both running on a single bus. A pair of these will be perfect on my next robot build.

<iframe width="560" height="315" src="https://www.youtube.com/embed/XQrxPcq2tZ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="True"></iframe>

[The VL53L0X Raspberry Pi Pico Code](https://github.com/orionrobots/vl53l0x)

## Robotics at Home with Raspberry Pi Pico

This post was based on research I did for the book [Robotics at Home with Raspberry Pi Pico](https://packt.link/5swS2) which is available now.

<a href="https://packt.link/5swS2" title="Learn to build and Program Robots using Robotics at Home with Raspberry Pi Pico"><img src="/galleries/2023/Robotics-at-Home-with-Raspberry-Pi-Pico-banner-2048.jpg"
  alt="Learn to build and Program Robots using Robotics at Home with Raspberry Pi Pico"
  sizes="(min-width: 1200px) 1140px, (min-width: 1000px) 940px, (min-width: 800px) 720px, 93.75vw"
  srcset="/galleries/2023/Robotics-at-Home-with-Raspberry-Pi-Pico-banner-720.jpg 720w, /galleries/2023/Robotics-at-Home-with-Raspberry-Pi-Pico-banner-1140.jpg 1140w, /galleries/2023/Robotics-at-Home-with-Raspberry-Pi-Pico-banner-1280.jpg 1280w"></a>
