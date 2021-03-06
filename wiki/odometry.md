---
layout: page
title: odometry
tags: [robots, robotics, robot building sensors]
date: 2006-07-10 12:38:08
---
When working out how far a robot has gone, or where it needs to stop, simply timing the length of time the motor is turned on is a very simplistic approach, and does not take into account any variations in battery output, or terrain, or even if the robots wheels were simply stalled.

Odometry is the technique of measuring how many revolutions a wheel has turned, or how many steps have been made (okay that's actually pedometry, but it is very similar). This can be applied to a drive wheel, but that does not take into account that a wheel may have turned in vain, and may be more effectively applied to a free-spinning wheel with high friction.

That way, the amount of distance travelled can be measured.

[Lego](/wiki/lego.html "The best known construction toy") have provided a rotation sensor for the [RCX](/wiki/rcx.html "The Lego Robot Command Explorer"), and all of the [NXT](/wiki/nxt.html "Legos NeXT generation robotics kit") motors have the ability to sense how far they have moved too. The RCX rotation sensor has only accuracy to 90 degree, and probably uses some form of quadrature encoding.

## Contact vs contactless

 The Lego sensor, and some others, use rotating metal slips with brushes, however, these introduce friction into the system,and may also wear away. They would be a point of failure in a system. A more intelligent approach is contactless.

This can be achieved via a few ways, the most common being optical, followed also by magnetic.

### Encoder Wheel

 This term is referred to a specially patterned or prepared wheel which rotates in the system. This wheel will have encoding holes, contacts, magnets or whatever else is used to detect the rotation as part of its attributes.

### Optical

 Optical setups often use interrupters to break a light beam. This technique is very common, and is used in computer mice and trackballs. [Salvage](/wiki/salvage_tips.html "Tips on pulling stuff apart to build robots. How, where and what.") builders look to mice for both the optical elements, and also the encoder wheels which are patterned. Another very advanced optical setup is the method used by purely optical mice. The best way to take advantage of that may be to take such a mouse, and try and interpret the PS2 signals from it.

It is possible to create an optical based odometry sensor with Lego by using the Light Sensor, and a pulley wheel. The pulley wheels holes are filled using alternate white and black round 1 stud plates. This however, relies upon the reflection of the light, and not interruption.

### Magnetic

The magnetic methods generally involve a Hall effect sensor, Reed switch or Inductive pickup of some sort which will change its output depending on the presence of a magnetic field. The encoder wheel can then contain a set of magnets.

### Precision

The precision of an odometry setup can be increased by using gears to multiply the number of turns of the odometry sensor in relation to the wheel being tested, which would then be able to give you more positions per rotation.

In robots which have a very large range of speeds, when it is too fast, the microcontroller may not be able to keep up with the pulses, and when it is too slow the precision is too low. This may be tackled by either using dedicated counter hardware, which may still suffer from resolution problems at high speeds, or possibly by having a set of different gear systems. Another way to tackle it may be a set of encoder wheels and sensors, with the microcontroller choosing which to read depending on the resolution it requires - this may be much like the "dots" seen on the outer edge of vinyl record players used by professional DJ's.

It is worth pointing out that odometry is still a best guess measurement, and does not give the assurance that a GPS system might give. But it is considerably cheaper and easier to implement.

### Use in BEAM robotics

It also appears in recent news, that ants use it, and possibly other life, which means that it may be a valid method to use in [BEAM](/wiki/beam_robots.html "Biology, Electronics, Aesthetics and Mechanics") robots.

This could be achieved by incorporating a digital counter, but perhaps a more biological approach would be to use a capacitor, with each counter pulse giving a burst of charge to it, topping it up, and then its discharge time would then be relative to the number of pulses. Better still, depending on the discharge curve, the robot could then use this to control a locomotive system (perhaps to return to base), and as the curve progresses, slow down its approach to the target. This would emulate the recent experiments with ants, in that if you then changed the replay parameters or wheel diameter, the robot would most likely overshoot its target.

It is also possible, taking this concept further, that a relatively simple network of capacitors, resistors and transistors could be triggering each other in sequence, and be used to memorise, and then replay a series of movements.
