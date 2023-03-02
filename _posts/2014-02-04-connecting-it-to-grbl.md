---
title: Connecting my CnC 3020 to grbl
description: Connecting my CnC 3020 to grbl
tags: [cnc projects, arduino, grbl, electronics, parallel port]
layout: default
---

## Connections

The Machine came with little more than a single sheet and a CD full of Chinese versions of Mach3 and drivers for that. See [Unboxing and setup]({% post_url 2014-02-03-unboxing-and-setup %}) for what else was in the device. The eBay auction also had a link to a MS Word document, which importantly had some of the pin connections so mach3 could be configured. I could cross ref this with the [grbl connections](http://github.com/grbl/grbl/wiki/Connecting-Grbl) to create a wiring plan for attaching it to my machine.

I flashed grbl onto an Arduino Uno R3 compatible board, using the hex file and the recommended windows file to upload this. I was able to use putty to talk to grbl and get responses from it.

I wired this into the parallel connector at the back of the control box, and started up the machine.
Grbl resets when the machine is powered on - however, putty is still connected - this may mean some power related fluctuation - I had also connected the Arduino to what I think was a ground on that port too - for the signals to make sense - they needed a common ground.

Arduino Pin | Parallel port CnC Pin
----------- | -----------------------
A0          | Stop/Emergency reset 10
2           | Step Pulse X 2
3           | Step Pulse Y 4
4           | Step Pulse Z 6
5           | Step Dir X 3
6           | Step Dir Y 5
7           | Step Dir Z 7
Ground      | Ground 18-25

I then proceeded to check the grbl settings.
I was able to leave them at the defaults as they looked close to the mach3 settings in the screenshots from the manual.

I then issued my first attempt at a gCode command ```G00 X 50``` which I think should make the X axis move from where it is now (an assumed zero/home point).

Nothing happened on the router, it stayed motionless.
I knew from unboxing it that the stepper controllers were talking to the steppers, and I had been able to power up the spindle.
I was able to use the ```?``` command in grbl to see that it was trying to move.

I've am both awaiting a tiny mini-itx based pc to try with, and going to teardown/diagnose the controller to understand what is in it.
A closer look can show me what I am doing wrong.

Thoughts - the reset may mean I had the wrong pin as ground - not a ground. Perhaps I have managed to offset or reverse stuff?
