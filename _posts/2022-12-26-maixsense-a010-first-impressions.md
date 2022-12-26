---
layout: post
title: Maixsense A010 first impressions
date: 2022-12-26T13:36:05.072Z
description: Getting started with a Maixsense depth camera
tags:
  - robot-building
  - learn-robotics-at-home
  - electronics
  - sensors
  - range-finding
category: robot building
---
The Sipeed Maixsense A010 is a 200x200 depth camera/sensor - using optical time-of-flight (TOFL) to get a picture that represents a depth field view of a room. This is a pretty exciting idea to me - it's inexpensive (less than £100), solid state - not spinning, and small.

![MaixSense A010 Sensor in box](/galleries/img_6958.jpeg)

It should also work with visual processing techniques if the output is a 2D field like a camera. Although it arrived a while ago, I gave myself a small break from my obligations (it's Christmas) to play with it. I did try the Product Unpacking guide suggested, and was expecting the Power-Up preview part to work.

![MaixSense A010 Powered up](/galleries/img_6962.jpeg)

So far when I connect it, I do not get an image on it's screen, however, there is a serial port. The two buttons are not doing a lot yet. I did once see the Sipeed logo on the screen, but not on subsequent power ups - so that is a bit odd.

When I connect it to the Macbook via USB (there's a USb-C to USB-A cable in the box), I see two serial ports appear on the mac. So something in it is alive. The screen is powered, just with nothing to display.

The provided software (Comtool) seems to be Windows oriented, with a small linux tools too. there is a tool in python that might work on the mac?

My thought is to connect to these ports and try and send commands/get data. I'll start with just the Mac, then later try it on a Raspberry Pi 4. I've a couple of robots to try it on after that.

## Trying the Comtool

Comtool had windows binaries, but is also open source at <https://github.com/sipeed/MetaSense-ComTool>. Going to try and git clone this, and see if it works on the mac. 

* Clone it
* Make a python virtual env \`python3.9 -mvenv .venv\`, install requirements.
* \`pip install -e .\`
* Run it and see what it picks up.

It launched - I saw a Sipeed logo and this interface:

![Sipeed comtool for Maixsense A010](/galleries/screenshot-2022-12-26-at-15.16.23.png)

After this launches, I was able to select the serial port, add the graph tool they suggested, and click open. I had to try both before one worked.

![Multiple serial ports](/galleries/screenshot-2022-12-26-at-15.26.34.png)

This connected. I tried the graph thing. The next frustrating issue is that the window is too small and cannot be dragged out.

However the bigger issue is that I am not receiving data from the device. I tried an AT+OK/r and other ideas - but literally getting nothing back. I think there's a fault with it.

## Links

* [MaixSense-A010 Hardware Wiki](https://wiki.sipeed.com/hardware/en/maixsense/maixsense-a010/maixsense-a010.html)