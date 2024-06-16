---
title: Raspberry Pi Camera Compatibility RpiCam
date: 2024-06-04
tags: [raspberry-pi, camera]
description: What Raspberry Pi models and cameras are compatible with each other?
thumbnail: content/2024/06/04-raspberry-pi-camera-compatibility/raspberry-pi-lined-up-for-testing.jpg
---
I started with what seemed like a simple question: "What Raspberry Pi models and cameras are compatible with each other?" given the context of using the current libcamera/rpicam stack. I found that there was no straight answer on the internet. I went to ask twitter, and nobody came back with a simple answer. So I decided to do some research and write this article to answer this question.

## The Compatibility Table

If you are here for the straight answer so far, here is the compatibility table:

| Raspberry Pi Model | Zero W | Zero 2 W | 3A+ | 3B+ | 4   | 5   |
| ------------------ | ------ | -------- | --- | --- | --- | --- |
| Camera module 1    |        |          |     |     |     |     |
| Camera module 2    | Yes    | Yes      | Yes | Yes | Yes | Yes |
| Camera module 3    | Yes    | Yes      | Yes | Yes | Yes | Yes |

I do not have a Camera module 1 to test with, and did not test the older Raspberry Pi versions. If you have tested them, please let me know so I can update this table.

## The research plan

For each Raspberry Pi:

- Find an SD card
- Install Raspberry Pi OS - full fat
- Ensure libcamera is ready to roll
For each combination:
- Plug in the Camera
- Start the Pi
- Try to get a still image with the libcamera command
- Fill in the chart

{% img_responsive "content/2024/06/04-raspberry-pi-camera-compatibility/raspberry-pi-lined-up-for-testing.jpg", "Raspberry Pi models and Camera modules lined up for testing" %}

I used the current Raspberry Pi OS in full desktop version. This is Debian Bookworm. 32 Bit - "Linux Version 6.6.20+rpt-rpi-v8".

## Getting started

After gathering all the materials, and finding an SD card that wasn't in a project, I started with the Zero 2 W. I'm using a full desktop Raspberry Pi OS - . This is taking a while to boot....
It's connected to a camera, and for convenience I'm using the Kano keyboard + Touchpad combo.
A good few minutes...

I was going to use the Browser to look things up on the Pi, however "Chromium is not supported on Raspberry Pi Zero". And then I realise, this is a Zero W. Not a Zero 2 W. Probably a bit old for this test - but I might as well try it...

For documentation, I started at <https://www.raspberrypi.com/documentation/computers/camera_software.html>, and that is when I spotted that the tools are now named rpicam and not libcamera or raspistill. If you are not familiar with the hardware, I also recommend reading <https://www.raspberrypi.com/documentation/accessories/camera.html>.

The Zero W works perfectly with the Raspberry Pi Camera module 2. I get the preview. I then power own, to try the module 3. I've been watching Kevin McAleer in the background - the [BASIC games in Python were fun](https://www.youtube.com/live/82Rb3HbkD_E?si=y2Ql0PhAK0S63Dw3)!

Back around the boot loop again with the module 3... - 3 or 4 minutes. `rpicam-hello` works, but very, very slowly. So yes, but not quite coping. Let's try a lower resolution. I tried `rpicam-hello --help` which gave me some helpful info.

{% img_responsive "content/2024/06/04-raspberry-pi-camera-compatibility/raspberry-pi-zero-test-setup.jpg", "Raspberry Pi Zero W with Camera Module 3" %}

Lets try a mode... `--mode width:heigh:bit-depth:packing`. Lets try `"640:480:24:P"`. That performed better. Nice. It was here I found out about the `-t` timeout command. The default 5s is a bit low, let's try 30s. So `--timeout 30sec`. 7.5/10 FPS. And it eventually hung... Hmm. Ok. It's rather hot. Also - the hang may also have been the wireless keyboard going to sleep.

Table filled though. I need to find a Zero 2 W somewhere. But for now - move to the 3A+.

## The Rpi 3a+

Can I just use the same card to boot the next pi? Dunno - let's try. It feels much faster - only 1 minute. I tried the we browser - it's taking a long time though... Whoops. There are updates available.
Chromium - having some problems rendering. It might have overheated and hangs. I added a heatsink, as it is far too hot. I need to come back to this - it keeps freezing up. At this point, I had more SD cards arrive, so it was a bit easier to swap them out.

## The Rpi Zero 2 W

I found the Raspberry Pi Zero 2 W, and while digging around, I learned that I could use `rpicam-hello -t 0` to get no timeout. I also found that I didn't need X windows/wayland at all? Not sure about that.
The camera module 2 was no trouble at all.
It seemed much quicker than the 3a+ - but I did move that SD card between PI's which could have lead to trouble. I'm just gonna try a fresh SD card ( I ordered 5 spares). Yes- 3A+ works! And with the camera 3 - a faster frame rate of 30!
Getting similar on the Rpi Zero 2W

I got the 3b done nice and quick with no incident and filled the table in. I then moved onto the Raspberry Pi 4.

## Raspberry Pi 4

I have one Raspberry Pi 4 that isn't tied up in a robot project. So I put in an SD card and tried to boot it - nothing was happening. I am using a micro-hdmi to HDMI lead, but no signal. I tried swapping which HDMI port I used, and power off and tried again with the camera. I then note that I don't know what is on the card there. Time to flash a fresh Micro SD and see if that was the problem - as it's not alive.
It is getting warm. I am using a recommended Raspberry Pi Power supply with USB-C for the 4.

Before I clobber the SD content, lets try mounting that. I'm in Windows with WSL, so there must be a way to mount this? - Nope, not the Ext partition. Hmm, try that later. It might not be the card.

I try a fresh card with the same Rpi and see no output. There's activity lights, but no video, perhaps my video setup is incorrect? Nope - turned out my capture card (wired to OBS) needed to have OBS closed, be reseated and OBS started again.

Once up and running, the speed difference was clear. 30 FPS from the camera 2! With a power off and swapping the camera module 3, the test on the Raspberry Pi 4 worked well too. I was starting to get a routine to testing these now.

## The Raspberry Pi 5

This is my first time driving a Raspberry Pi 5. It has an official Raspberry Pi fan module I bought and attached. The camera port is now the same as the Raspberry Pi Zero series.

{% img_responsive "content/2024/06/04-raspberry-pi-camera-compatibility/raspberry-pi-5-test-setup.jpg", "Raspberry Pi 5 with Camera Module 3" %}

The Raspberry Pi 5 is really quick to boot! It does complain about the power supply, an official Raspberry pi USB-C Power supply, but perhaps intended for a Raspberry Pi 4. It said the power supply was not capable of supplying 5a, so some hardware would be restricted.

However, this all works really well, and oth the camera modules tested fine getting video for each. I am happy.

Throughout my tests, I've been seeing some tearing in my OBS capture. Setting a higher framerate in OBS, which I'm using to preview it fixed the tearing. Both the camera and my capture settings were at 30 FPS, which would naturally make for a poor display.

## Table filled

The table has now been filled. I thought I had a Raspberry Pi Camera Module 1 - but checking the robots with camera's, none appear to be older than a Camera module 2. So no table content for that.
In general, for the Camera Module 2 and 3, on a current OS, all are compatible with rpicam-hello. Which means all can capture video and stills.

I hope this is a useful resource for others with Raspberry Pi's and cameras.
