---
date: '2020-09-16'
description: Getting the ReSpeaker 2 Mic audio Hat for the Raspberry Pi to work with
  Mycroft, a voice assistant
layout: post
tags:
- robotics
- raspberry pi
- raspberry pi projects
- raspberry pi 3 projects
- raspberry pi 4 projects
- robot
- electronics
title: How to use the ReSpeaker 2 mic Hat with Mycroft
---

Voice Assistants like Mycroft are a cool bit of technology, and running them on the Raspberry Pi seems like a great fit. The Seeed Studio ReSpeaker hat, and it's clones seem to be an inexpensive way to get this running, however, none of the instructions I found on the web got this to work. So here I document how I made this device work.

![ReSpeaker hat on a Raspberry Pi 4](/galleries/2020-09-16-respeaker/20200918_134629.jpg)

## Intro

I am currently updating and refreshing content for a second edition of [Learn Robotics Programming](http://packt.live/2XccaKe). One of the areas I was never happy with was the installation of this sound device.

This is specifically for the ReSpeaker 2 Mic hat, which uses a WM8960 codec. It will not work for the other ReSpeaker devices.

Installing sound drivers is not a core message for the book, so I've put this here to help anyone struggling to get this sound card to work. One thing that was annoying was that the default instructions required you to downgrade your linux kernel - not a satisfactory thing to do.

This content assumes you are familiar with Raspberry Pi, Linux and editing files. There will be a couple of reboots - sorry.

Let's get into it.

## Setup Steps

* Have a Raspbian SD card with Picroft set up.
* Choose the USB defaults when Picroft asks for a device to use.
* Use ctrl-c to get to a bash prompt when at the sound test stage.
* Update Raspbian with `sudo apt update -y && sudo apt upgrade -y`, then `sudo reboot`.
* Use the repo  <https://github.com/waveshare/WM8960-Audio-HAT.git>. Clone this on the Raspberry Pi and run the `install.sh` script in it.

```bash
    git clone https://github.com/waveshare/WM8960-Audio-HAT.git
    cd WM8960-Audio-HAT
    sudo ./install.sh
```

* This will require a reboot to work, however, you can preconfigure Mycroft to work once this is ready. Edit `/etc/mycroft/mycroft.conf`.
* Where the file references `hw:0,0`, replace with `playback`.

Reboot your Pi with `sudo reboot` and Mycroft should be able to use this device.

## Explanation

You must have the kernel up to date for this, as the Waveshare installer compiles modules for it, but will download the most recent kernel source and headers first. If your kernel doesn't match those, you are in for a rough ride. Yes - their installation could be fixed to use `uname` to get the right kernel.

The Seeed repo on github has an old version of this code, which has not been updated for recent kernels. However, Waveshare, who make clones of the hat, have a repo with updated drivers. This Waveshare repo does get updated. It would be great if the Seeed repo accepted pull requests, or better yet, if Seeed and others worked on putting these drivers upstream into the Linux Kernel. For now, I'll stick with the Waveshare version.

Most other guides for setting up this card with Mycroft suggest referencing the hardware 1 (`hw:1,0`) device, without going through the ALSA plugins for mixing and playback. Using `hw:1,0` makes it incapable of playing sound files with different channel counts.  When connecting to ALSA it definitely makes sense to go through the mixers.

The default guides for MyCroft actually recommend using Pulse audio, and wrapping ALSA where needed. However, for this card, it created an odd interaction with the Pulse/ALSA bridge code breaking, something related to changing the playback rate and putting that wrapper module into suspend mode. While I did look at that code a little, my time is constrained for this activity, so ALSA was the easier route.
