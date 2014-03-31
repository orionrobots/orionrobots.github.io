---
layout: post
title: Stuff in the Orionrobots lab - Experimenting using a servo + single sonar
tags: [arduino kit, contest, distance sensor, robot building, robot kit, robotics, sensor, servo]
---
I bought a robot kit with pan servo sensor mechanism - I built it, and started playing with it in my lab to see what I make of it.

Using a single sensor on a servo driven head should give a way to improve the flexibility versus a two sensor robot - but the trade offs are:

* it costs more - you need a pan mechanism and servo motor.
* it is mechanically more assembly
* the software is more complicated

Pros are:
* It needs one fewer digital IO pin
* It can sweep - and take more readings than the 3 sensor version
* You get to play with servo motors - I've done so before, and they are fun.

I want to give this a go, play with the code, and once happy, turn my findings into a tutorial (coming later).
First - I bought a robot kit with such a mechanism on board - "Build a robot from scratch kit" available from suppliers in china.

The kit is a two wheeled robot kit, with line following sensors, a Sensor Shield (reducing the wiring needed for the Arduino), and the same L298 motor control board I have. However - it also has lithium batteries and a specialised charger - a design aspect I'm not keen on.

I assembled this - and immediately went to play with the servo mechanism.

The first trick was just to take the servo sample from the Arduino IDE examples - the sweep program - and easily saw the servo going through it's sweep happily. However - my first problem was noting that the head was not in the middle.
# Servo Positioning

My solution was this - set the servo position to 90 - doing this in setup, and clearing the loop. I can then dissassemble the pan mechanism enough to re-centre the device. This was easy work with a screwdriver. I am not sure you can assume the position of a servo when you receive it - so this may be the only precise way to calibrate it - i may be missing a trick here..

I can see no markings on the servo spindle. Now even having attached it as close to the centre as I could - it didn't seem to be quite right - so I wrote a simple bit of code to read a number from serial, and set the servo to this as the position - finding in my case that 103 was about bang on. The spindle had 8 or 10 sides making it hard to get this perfect without using software adjustments to it. That is a 13 degree variance on this for now.

<a href="https://gist.github.com/dannystaple/8159506">Code for the servo position from serial tool.</a>

# Plan for sense and drive code

Instead of grabbing code from the web - I'll see what I cook up. I can then take a look at the others when I've got something working.

The next thing is to figure out how I'd do my sensing - my first plan is this:

* Start driving
* Put the sensor in the middle
* Read the distance
* then go n degrees left and read,
* n degree right and read.
* when any is below the threshold, read the other two quickly and drive to the furthest
* if all are below some threshold - turn 270 degrees and try again - to the left.

So we have 2 modes:
* Drive and scan
* Avoid

Detail:
* Drive and scan - going forward, while scanning a few different set places
* Avoid - turning away to furthest location then go back forward drive.

I'll structure this as functions that the loop can call. A switch is unnecessary - I can just store and call a function - it'd need no params - so it would be quite easy.

In the drive and scan mode -

A current scan location should be used so it can be incremented, along with a timer or some way to keep time on when to switch and read. This could simply be done every loop - I'll take that...

Don't forget that reading the sensor itself introduces a delay. I can use my old code for that.
Store a reading for each position. I can have perhaps a couple of arrays - one constant one for the positions (so I can fiddle), and one for the most recent readings.

In the avoid mode -

take the position readings-  start to turn away from closest. turn until above the threshold.
Switch back to drive mode.
