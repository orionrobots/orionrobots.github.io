---
title: My Raspberry Pi computer vision robot Skittlebot works!
date: 2017-05-14
tags: [robot building, piwars, opencv, electronics, power, raspberry pi robotics project, raspberry pi opencv project, gpiozero robotics project]
thumbnail: content/2017/05/14-skittlebot-video/skittlebot-working-screenshot.png
---
I now have my Raspberry Pi based  computer vision demonstration robot working! This is a big step forwards, as I can start looking at more interesting projects and competitions with it.

## Specifications

- 4Tronix PiCon Zero
- Raspberry Pi 3
- V1 Camera module
- 4Tronix Initio chassis
- Logic power is a USB power bank
- Motor power is 6xAA batteries
- Raspberry Pi image created with PiBakery - and using precompiled NUmpy and OpenCV libraries
- Programmed in Python

## Updates since last time

I've rewired to use the PiCon Zero instead of the L298n and all that point to point wiring. This has made it a lot neater, and there's less to debug.

I've also separated the Raspberry Pi power out to a USB power bank. This means I can run the Pi without the motors, and I can also run the motors without the Pi. This is a good thing, as it means I can debug the motors without the Pi crashing. It also means that large current issues won't reset the Raspberry Pi.

## Video

The Skittlebot video tells the story of it's creation, and adaptation from the Arduino robot, along with the first tests of the computer vision system.

<iframe width="560" height="315" src="https://www.youtube.com/embed/z14HcflsRW0" frameborder="0" allowfullscreen></iframe>

Skittlebot was built when I found that armbot was too big to come to PyCon Uk 2016. It uses a camera and visual processing to locate coloured objects, and knock them over. See how I built it, see it running, why I made it and how the code was written.

The video mixes footage that was unreleased from multiple sessions, and includes the point where I'd shaved my head for a while!

## Code

The software uses PiCamera, Python and OpenCV.

The code is at <https://github.com/orionrobots/skittlebot>.
