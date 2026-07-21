----
title: What to do you when you've lost your Pi-Top power supply
date: 2024-06-01
tags: [pi-top, pi-top power supply, raspberry pi]
description: How to find out what power supply I need for your Pi-Top
---
We moved home about a year ago. Since then, I've not been able to tell which power supply was for the Pi Top. I have a drawer full of them, and the back of the Pi Top is unmarked. The Pi Top I have is an original green clamshell laptop style, with a Hub 2 inside. Today I wanted to revive it - partially to investigate a filesystem on a Raspberry Pi SD car - with unknown content.

After some internet research, I was able to find out it's an 18 V 2.5 A power supply. I wasn't clear on the polarity though. I used my multimeter in continuity mode to check the polarity of the power supply. The inner pin is positive, and the outer is negative.

Specs:
- 18 V
- 2.5 A
- Inner pin positive

I then found that I had the supply in a drawer, it uses a figure-of-8 type AC input, and has the following markings:

- Model: XH1800-2500
- Input: 100-240 VAC 50/60 Hz 1.5 A
- Output: 18.0 V at  2.5 A.
- Manufacturer: Xiamen Xunheng Electronics Tech Co., Ltd

To confirm, this does charge the Pi Top.

Note the Pi top power supply charges an 18 v battery inside the Pi Top that powers the electronics inside it.

Now to figure out my next problem, where the PiTop OS sd card went...
