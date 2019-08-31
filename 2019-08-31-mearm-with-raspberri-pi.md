---
layout: post
title: "Connecting a MeArm to the Raspberry Pi"
description: "Connecting a MeArm to the Raspberry Pi"
tags: [robotics, robot arm, raspberry pi, raspberry pi projects, raspberry pi 3 projects, mearm, Laser Cut robot arm, raspberry pi zero w projects]
---
{% include JB/setup %}
# Building the Arm

In my last few posts I've been playing with robot arms. In a recent video, I built the MeArm robot kit and thoroughly enjoyed doing so. In rather nice Nuke Cola blue laser cut plastic, it went together very nicely.

<div class="embed-responsive embed-responsive-16by9">
<iframe width="560" height="315" src=" https://www.youtube.com/watch?v=OY8Aq9rou3k" frameborder="0" allowfullscreen="True"></iframe>
</div>

In the next video I wire it up and then connect it to a Raspberry Pi

# Connecting it to a Raspberry Pi


## Wiring It Up

I used a MeArm wiring guide at [Pinout XYZ](https://pinout.xyz/pinout/mearm_pi) to wire it in, with a tiny breadboard for handling the power connections to the Servo motors. The servo's run of their own 6v battery pack, but share a groud with the Raspberry Pi, with the signal cables going to specific pins on my Raspberry Pi, in this case a 3A+.

## Preparing the Pi

First have a Raspberry Pi setup with Raspian. I prefer a headless setup but it doesn't really matter.

It should have python3. You should be able to get to a command line on it.

## Installing the python packages 

From a command line:

    $ sudo apt-get update 
    $ sudo apt install python3-gpiozero pigpio python3-pigpio

## Enabling the deamon

    $ sudo systemctl enable pigpiod
    $ sudo systemctl start pigpiod

# How to connect GPIOzero to the MeArm

[GPIOZero](https://gpiozero.readthedocs.io) is my favourite way currently of using Python to talk to hardware connected to one of my Raspberry Pi's.

This can be tried in a python3 repl (terminal session) then put into a file.
You must have followed the setting up steps first.

    $ python3
    >>> from gpiozero.pins.pigpio import PiGPIOFactory
    >>> gpiozero.Device.factory = PiGPIOFactory()
    >>> base = gpiozero.Servo(4)
    
Python may grumble here, stuff about Fallback. Ignore it.

Set up the other servos:

    >>> gripper = gpiozero.Servo(10)
    >>> right = gpiozero.Servo(17)
    >>> left = gpiozero.Servo(22)
    
## Interacting with the servos

These are using the [Servo](https://gpiozero.readthedocs.io/en/stable/api_output.html#servo) object from GPIOZero. 

You can set the middle with:

    >>> base.mid()

This should set the rotation of the arm (shoulder) to the middle.
And go to extents with:

    >>> base.min()
    >>> base.max()
    
You can also set .value to vary this:

    >>> base.value = 0.7
    
This should be a value between -1.0 and 1.0 with 0 being the middle.
Left and right should be elbow and shoulder angles. I need to check which way up they are.

