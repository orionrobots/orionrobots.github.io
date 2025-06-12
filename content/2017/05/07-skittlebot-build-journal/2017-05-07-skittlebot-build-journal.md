---
title: Skittlebot build journal, 7th May 2017
date: 2017-05-07
tags: [robot building, piwars, opencv, electronics, power, raspberry pi robotics project, raspberry pi opencv project, gpiozero robotics project]
thumbnail: content/2017/05/07-skittlebot-build-journal/skittlebot-chassis-thumb.png
---
Skittlebot is designed using the 4Tronix initio robot base. It is built around a Raspberry Pi for remote control, and for experiments with computer vision.

I'd built this initially as a simple Arduino robot in 2016, but now it is time to make it something far more exciting. It's called Skittlebot because it's original goal was to follow a plastic, brightly coloured skittle (bowling pin) around. 

It is being prepared for possible entry into the PiWars 2018 competition.

This setup used VNC to control the robot and see the output of the camera. The camera is a Raspberry Pi camera module.

## Progress so far - OpenCV colour tracking

Last night the opencv work to track colour was finally attempted right on the robot itself.

I was able to get the output I wanted - console output, and the display (via vnc) of the tracking, with the tuning parameters.

However, vnc is a little bit iffy here, and stops actually doing screen updates.

I then started to combine it with code to drive the motors.
The motors and the shared power were unplugged, with the Pi running off a USB  supply while I was working on it.

I also seem to have destroyed a memory card yesterday on this set up.

When it tried to drive, the system reset - after a tiny movement of motors.

So - the next step is to look for power issues.

The power issues could be:

- Low batteries - check them all - should add to more than 6.6v.
- Bad connections - check these - I did undo wiring.
- The UBEC could actually have gone wrong, as I had USB voltage while the UBEC still present. lets hope not.
- Under-volting as motor current makes the system drop - the UBEC should help, but it drops at 6.6v.

## Batteries

This is unloaded voltages on an array of 8 AA batteries - these are high voltages for NiMH.

- 1.363
- 1.364
- 1.365
- 1.365
- 1.365
- 1.365

About 8v. They are dead or dying alkaline batteries.

## Wiring

Nothing there seems to be wrong, or shorting.
Lets put batteries in again.

Measure this, and try the simple motor test code.
-8.18? probes are right. Battery box red terminal on red probe. Whaaat?

Okay - just confusing wiring.
Powers up - motors turn until I disable motor controller
Lets see the Raspberry Pi come up...

VNC has reconnected.

Lets try initialising it (I should initialise to stopped early)
Can I measure the battery output now? 7.34 - still good. (no it wasn't, they were dead)

## Testing

Using gpiozero robot object in the code.

- Initialised.
- Motor power enabled.
- Lets try forwards.
- Reset? Or non responsive after enabling power. Lets switch from vnc to putty.
- It's not reset - uptime 5 minutes.
- Just vnc..

Okay it moves.
So that is not the reset.

- `robot.forward()` was fine.
- `robot.left()` was a reset!

Why is that?

- Uptime confirms it is a reset
- Backwards is fine.
- Right is ALSO a reset. Is this a big current pull trying to turn? Can we reduce current by reducing speed? The l298 is famously not too clever about this overcurrent stuff.

## Making a lower power board

Lets rejig power:

Ubec to Pi and for L298 digital side. Only motors go from battery directly.
Create a lower power distribution board (regardless of battery/usb it makes sense).

From bottom to top deck we need:

1.  +5v
2.  gnd
3.  line - right - signal
4.  line - mid - signal
5.  line - left - signal
6.  motor left a
7.  motor left b
8.  motor right a
9.  motor right b
10. motor sense left a
11. motor sense left b
12. motor sense right a
13. motor sense right b

call it 14 (extra one for a sensor?)

Then we bring up 2 sets of 7.

### Right side

Pi Power is here

1. +ve
2. gnd
3. motor right a
4. motor right b
5. odometry right a
6. odometry right b
7. line sense right

### Left side

1. unusued
2. line sense middle
3. motor left a
4. motor left b
5. odometry left a
6. odometry left b
7. line sense left

Wiring is getting too messy.
Lets swap it out for a picon zero - sounds better.

## Next steps

- Get the wiring working and reliable.
- Get the power sorted.
- Make a video of this in action
