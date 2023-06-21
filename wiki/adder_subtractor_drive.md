---
layout: page
tags: [lego technic, lego robotics, robotics]
title: Adder Subtractor Drive
date: 2015-09-03
---
A problem with [Skid Steering](/wiki/skid_steering.html "Skid Steering") is that that two motors of the same model, from the same company, and even in the same batch, may still not be identical. This can make robots veer off course. For more on motor differences try [The Brick Bakery: Analysis of Motor Speeds for Geared Motors.](https://sjbaker.org/steve/lego/motor_speed.html)

This can be compensated for with sensors and code to keep the robot on track. This can be inefficient as the robot is constantly having to correct itself. You can also use mechanical methods to solve the problem.

If you have an [LDraw](/wiki/ldraw_system.html "The primary system for CAD representation of Lego parts") reader, please take a look at this file [AdderSubtractorBuggy.dat](/assets/downloads/AdderSubtractorBuggy.dat).

This system uses sets of two differential gears to input power. There are motors A and B, and output shafts L and R. The behaviour of the drive is such that:

* L=A+B
* and R=A-B

Motor A controls/powers the forward/backward motion of a vehicle, and is usually a more powerful motor. Motor B sets the difference so the robot can turn. When A=1 and B=1, R will be 0 and L will be 2. When A=0 and B=1 - you can turn on the spot.

The code to drive this is different from skid steer. An issue is housing this drive in a robot.

## How Can You Build this?

![Adder subtractor gear chain schematic](/galleries/gallery-1-common-images/172-addersubtractor.png)

The system is made up of two differentials (populated), then link gears between them so that on one side they are both driven in the same direction, and on the other side they are driven in opposite directions. The outputs come from the output axles of one of the differentials. You then input by actually driving the differentials input teeth on each one.

## Links

* <a href="https://sjbaker.org/steve/lego/motor_speed.html">The Brick Bakery: Analysis of Motor Speeds for Geared Motors.</a>
* <a  href="http://www.mapageweb.umontreal.ca/cousined/lego/1-Varia/Adder/adder.html" rel="external" target="_blank">http://www.mapageweb.umontreal.ca/cousined/lego/1-Varia/Adder/adder.html</a> - Adder Subtractor Drives in Lego
