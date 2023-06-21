---
layout: page
title: Headbots
tags: [robot building, beam robotics, hacking, servo, microcontroller, electronics]
date: 2005-11-30 19:38:01
---
A headbot is basically a study of sensors. In the [BEAM Robots](/wiki/beam_robots.html "Biology, Electronics, Aesthetics and Mechanics") definition, they consist of a [Servo](/wiki/servo_motor "Servo Motor") controlled head, which scans until it can find equilibrium on a given sensor condition - typically light, but it could be used with a sonar distance sensor to find which direction yields the nearest wall or similar.

It is basically a feedback loop, where the sensor(or sensors) produce an error code to instruct the Servo to turn further in a particular direction. As it moves, it is still sensing, and so the change of conditions will change the error code. The interesting thing about this, is that a process similar to this is already occurring inside the Servo as it finds the position it was instructed to.

By connecting a simple feedback loop like this together, then have an angle sensor, and overall light sensor, then a [MicroController](/wiki/microcontroller.html) could play [Horse and rider](/wiki/horse_and_rider.html "One system takes high-level control of a lower level system"), and simply tell the head to look for the bright light, then when the angle sensor settles down a little, take those readings to get the direction with the brightest light. During this process, the controller need not be very involved, and might just enable the heads motion, leave it for a second or so, then query it to see if its settled.
