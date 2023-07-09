---
layout: post
title: MaixSense A010 Day 2 - Sipeed Support
date: 2022-12-27T12:47:10.295Z
description: Getting the MaixSense depth sensor working
tags:
  - robot building
  - sensors
  - learn robotics at home
  - time of flight
  - distance sensor
category: robot-building
thumbnail: /galleries/focus_stacked_a010_and_robot-med.jpg
---
In yesterday's [Maixsense A010 post](/robot%20building/2022/12/26/maixsense-a010-first-impressions.html) I had reached a block, and it hadn't worked either standalone, or via the serial port.

I contacted Sipeed (the manufacturer) for help via twitter, and their Indigogo campaign. They responded within 24 hours, and suggested I try a USB power supply (no computer). I tried a simple 5v 2.4a USB power supply, and it worked - I got a display.

This led me to questioning the power supply from the port I was using on my Macbook. This was a Mokin dock, which must have not been supplying enough current for it to start up correctly. 

I tried a different dock on the Macbook, which works! I was now able to see output on the sensors screen while connected to my laptop.

![The MaixSense A010 sensor sensing depth of a robot](/galleries/focus_stacked_a010_and_robot-med.jpg)

## Comtool

Yesterday, I'd set up comtool. Today I tried again, the graph screen was still left from before. I connected to the second serial port from the device, set the header, unticked and reticked USB and I started getting data from the device:

![Screenshot of the comtool](/galleries/screenshot-2022-12-27-at-12.45.09.png)

The screenshot shows Comtool with an image capture (continuous) from the sensor. There's a robot with messy wiring in shot. The hue of the picture shows the depths.

Now I've seen it work, I can consider how to use this in robot code. My thinking is this might be in ROS on a Raspberry Pi 3 or 4.
