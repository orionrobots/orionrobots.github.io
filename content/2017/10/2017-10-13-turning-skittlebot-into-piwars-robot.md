---
title: Turning Skittlebot into a PiWars Robot
date: 2017-10-13
tags: [robot building, piwars, opencv, electronics, power, raspberry pi robotics project, raspberry pi opencv project, gpiozero robotics project, piwars, robotics competitions]
---
Skittlebot based on the Initio chassis may actually be a little slow to be a piwars bot, but it's certainly a great platform to get the basics down.

So the plan is a set of experiments, to get the code going, get the Raspberry Pi and power in a good state, then look at making it all faster and lighter.

this plan is likely optimistic, but lets get as many ideas down as we can first.

## Major areas to cover

* Remote - I have a Playstation Six Axis controller. Getting this paired with the device, and repeatable so I have code + PiBakery recipe is expected.
* Straight Line autonomous - build a rig similar to the straight line at piwars - get SkittleBot good at touching no sides and going as fast as it can along the line - not that there IS a line to follow on the floor too - which may be easier than other sensors.
* Camera - the over the rainbow challenge, and the rear ultrasonic sensor.
* Spec out replacement chassis - customised:
    * 3D printed, off the shelf, toy hack or CNC carved?
    * Faster motors.
    * Line follower modules.
    * Power - separate Pi and motor (as SkittleBot already does).
    * Make the bottom half only first - get this right, with a simple bracket for the pan/tilt mechanism I already have.
* Test driving WS2801's from a Raspberry Pi.
* Replacement top
    * Get styling here - something unique to orionrobots - possibly doing a few thick structural 3D print areas, but many thin/hollow areas that are purely for style.
    * Consider the WS2801 6 Status LED's at this point.

## Remote

The SixAxis controller is Bluetooth. There is a [PiBorg guide](https://www.piborg.org/rpi-ps3-help) on connecting them up. Lets follow that - and get it driving over bluetooth.

Consider the inputs library? <https://pypi.python.org/pypi/inputs>

A bit less heavy than pygame - but not sure it'll work with the ps3 sixaxis. This library has come from Zeth, a rather instrumental part of PyCon UK!

The PyGame route: [PS3 controller with PYGAME](https://www.raspberrypi.org/forums/viewtopic.php?f=32&t=147234)
