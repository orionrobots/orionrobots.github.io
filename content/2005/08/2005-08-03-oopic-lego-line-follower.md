---
title: Idea for an ooPIC based line follower robot
date: 2005-08-03
description: Idea for an ooPIC based line follower robot
tags: [robot building, oopic, line following, lego mindstorms, lego technic]
---
I had an idea for building an ooPIC based line follower. I'd not had time to build it, but here are the concepts.

For the chassis, use Lego Technic, with the motors, gears and wheels. This is a good way to get started quickly, and to get a good chassis. It also means that you can easily add other Lego parts to the chassis, such as sensors, or other Lego parts. I also happen to have a lot of Lego Technic parts, including Mindstorms parts. However, the ooPIC is a more capable controller than the Mindstorms RCX controller, with more IO.

The next part I'd need is a battery box. A Lego 9v battery box might do just fine, although I could also adapt a standard 4xAA type, and bolt it onto a Technic beam, then pin that to the chassis.

Next, I'll need two H-bridges for the motors, L298n's will do it, although I'll need to build a board around them, or see if I can salvage them from another project. Robobricks are making Lego technic capable parts for use with bring-your-own microcontroller, so they might work.

I can then build Lego technic power adaptors for linking to the motors, the battery box and maybe Lego sensors. This would be 2x2 plate sized breadboards, with through plated holes that can fit over Lego studs with conductors.

I would use an array of photo-transistors on a PCB for a line following array (3 or 5 might do it), and if I'm lucky they will be just the right size to fit in Technic holes, if not, find a way to secure them to a through-hole PCB, with some pin holes to clip it to the Technic beams either side. This just needs a pin header, perhaps right angled, to connect back to the controller. The basic idea would be the pin header has voltage, ground, and then a bunch of inputs, one for each photo-transistor. This might need an infra-red LED to shine on the line too, and if I'm being fancy, an input pin to enable/disable that.

The wheel arrangement would be two wheels at the front, just behind the line array. Lego do not really do castor wheels/balls. So I could build one around a freely pivoting wheel.

This is all conceptual, no drawings or pictures yet.
