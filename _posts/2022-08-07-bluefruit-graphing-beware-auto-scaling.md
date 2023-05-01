---
layout: post
using_mathjax: false
published: true
title: Bluefruit graphing - beware auto scaling
description: Dealing with an issue with graph output from encoders
tags: [raspberry pi pico, circuitpython, bluetooth le, bluefruit le connect, robot building,
  plotting, robotics programming]
category: robot building
---
## Bluefruit app

For my upcoming Raspberry Pi Pico robotics book, I make use of Bluetooth and the [Adafruit Bluefruit LE Connect App](https://github.com/adafruit/Bluefruit_LE_Connect_v2) which lets me interact over BLE UART, and plot data from it. Awesome.

While I'll go into specifics in the book, I thought this particular adventure, a little too anecdotal for that book, would make for an interesting blog entry.

## Story

I was debugging an encoder problem.
I thought it was my code doing something janky, when measuring speed (distance/time, with a ticks to mm conversion) I got this kind of graph:

![Bluetooth plot of encoder speed - looking very rough]({{site.baseurl}}/galleries/Pasted image 20220807115307.png)

I thought I had some stability issue in my encoder reading, or the PIO code I'd written to sample the encoder was wrong. So I went from the d/t to simply plotting encoder counts on a line:

![Bluetooth plot of encoder counts]({{site.baseurl}}/galleries/Pasted image 20220807115906.png)

This led to see there's nothing wrong with the encoders.
And then it dawned on me - the scale was different.
The top graph didn't start at 0 - the tiny variations (which might do horrid things for a derivative without an LPF) were amplified over this scale because the speed was actually stable in a fairly small range.

Adding a 0 in:
```uart.write(f"{left_speed:.3f},{right_speed:.3f},0\n".encode() )``` allows me to anchor the graph at 0, and see that the encoders are very stable.

![Bluetooth plot of encoder speed with a 0 anchor]({{site.baseurl}}/galleries/Pasted image 20220807120614.png)

Always be aware of graph anchoring and scaling - it can definitely send you on a wild goose chase.

## Robotics at Home with Raspberry Pi Pico

This post was based on research I did for the book [Robotics at Home with Raspberry Pi Pico](https://packt.link/5swS2) which is available now.

<a href="https://packt.link/5swS2" title="Learn to build and Program Robots using Robotics at Home with Raspberry Pi Pico"><img src="/galleries/2023/Robotics-at-Home-with-Raspberry-Pi-Pico-banner-2048.jpg"
  alt="Learn to build and Program Robots using Robotics at Home with Raspberry Pi Pico"
  sizes="(min-width: 1200px) 1140px, (min-width: 1000px) 940px, (min-width: 800px) 720px, 93.75vw"
  srcset="/galleries/2023/Robotics-at-Home-with-Raspberry-Pi-Pico-banner-720.jpg 720w, /galleries/2023/Robotics-at-Home-with-Raspberry-Pi-Pico-banner-1140.jpg 1140w, /galleries/2023/Robotics-at-Home-with-Raspberry-Pi-Pico-banner-1280.jpg 1280w"></a>
