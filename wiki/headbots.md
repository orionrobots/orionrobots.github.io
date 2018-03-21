---
layout: page
title: Headbots
tags: robots, BEAM, hacking, Servo, microcontoller, electronics
date: 2005-11-30 19:38:01
---
A headbot is basically a study of sensors. In the <a class="wiki" href="/wiki/beam_robots.html" title="Biology, Electronics, Aesthetics and Mechanics">BEAM Robots</a> definition, they consist of a <a class="wiki" href="/wiki/servo_motor" title="Servo Motor">Servo</a> controlled head, which scans until it can find equilibrium on a given sensor condition - typically light, but it could be used with a sonar distance sensor to find which direction yields the nearest wall or similar.

It is basically a feedback loop, where the sensor(or sensors) produce an error code to instruct the Servo to turn furthar in a particular direction. As it moves, it is still sensing, and so the change of coniditons will change the error code. The interesting thing about this, is that a process similar to this is already occuring inside the Servo as it finds the position it was instructed to.

By connecting a simple feedback loop like this together, then have an angle sensor, and overall light sensor, then a <a class="wiki" href="/wiki/microcontroller.html">MicroController</a> could play <a class="wiki" href="/wiki/horse_and_rider.html" title="One system takes high-level control of a lower level system">Horse and rider</a>, and simply tell the head to look for the bright light, then when the angle sensor settles down a little, take those readings to get the direction with the brightest light. During this process, the controller need not be very involved, and might just enable the heads motion, leave it for a second or so, then query it to see if its settled.
