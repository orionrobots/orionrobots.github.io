---
title: Say Hello to the Raspberry Pi 5!
tags: [raspberry pi, robot building, robotics at home]
date: 2023-09-29
description: The Raspberry Pi 5 is here! What does this mean for robotics at home?
---
Say hello to the Raspberry Pi 5!

What would we do with a Raspberry Pi 5? Build a robot of course.
With the two ports, the home robot builder could add sophisticated stereoscopic vision. This is going to be somewhat easier than the previous routes of two Raspberry Pi's or a StereoPi with a compute 4 module.

With the PCIe port, a robot builder can consider adding a GPU to help process that stereoscopic input, perform Monte Carlo localisation, or crunch machine learning data. I'm not sure yet how it would compete with a TPU (tensor processing unit). This would be an expensive option, but it's good to have this for when more extensive processing is needed. GPU's now are more relevant to these tasks than raw CPU.

The Pi 5 looks like it will need a larger power supply, which on a small home built robot could present a problem. There are 30 Watt USB power banks like the Anker Nano 30w power bank, or the Belkin Portable Charger, or of course one could go down the Lithium ion  maybe a 30w plus supply so bigger power banks.

The power management IC looks really handy. I've questions about if in a power delivery application, how much current one can get from that supply, especially in the type of robot-related Raspberry Pi hats/breakouts that use the 5v line as the motor power supply too.

The power button is really handy. In too many home built robots, I end up needing to pull the USB cable out. Some of my robots use the Pimoroni On/Off shim, but it's nice to have this built right in.

Another big feature, beyond dual camera and GPU possibilities, is that it's all SMD construction, which should hopefully make them easier to supply. Raspberry Pi's have been hard to get for a while now, but IMHO are still one of the best single-board-computing platforms for hobby robotics due to the power, processing capability, software support, size and cost factors. Anywhere you need more than a microcontroller (like an Arduino, ESP32 or Pico) the Raspberry pi seems a good fit.

I do not yet have a Raspberry Pi 5 to experiment with, but looking forward to getting it soon and building it into a robot platform.

In terms of things I would change so far? I'd love to have a version of this without the POE, Ethernet, and maybe only 1 USB port. I'd still want the power button (or button header?), camera and PCIe. It might be a bit cheaper and lighter, perhaps like the 3a+ form factor.

I can't wait to make something with one! Now I've just gotta get my hands on one...
