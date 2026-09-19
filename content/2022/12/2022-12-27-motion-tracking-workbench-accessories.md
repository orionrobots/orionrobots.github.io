---
layout: post
title: Motion tracking workbench accessories
date: 2022-12-27T14:43:36.558Z
description: Ideas for a motion tracking workbench helper
tags:
  - robot building
  - robotics tools
  - learn robotics at home
  - robot videos
  - robotics blogging
  - robotics content
category: robot-building
---
Maker [Rue Mohr](http://ruemohr.org/) recently suggested building a motion tracking workbench lamp. This is a great idea, as if you are moving around on the bench, and you need light focusing on where you are working, you could have the device adjust the focus for you.

I also see how this would be useful for taking photos or making videos, where the camera could track the position of your motion. For example, when filming  me using hand tools or breadboarding, it's far too easy to find myself out of shot. The usual answer to stay in shot is to work through the camera viewfinder, however, that can be very tricky indeed, with all kinds of hand-eye coordination made harder than usual. For a fiddly job, very frustrating.

## Basic parts

To make something like this work, I came up with a list of parts (hardware and software) for it.
- A Raspberry Pi as a controller.
- A Raspberry Pi HQ Camera (assuming the pictures are high quality).
- An LED filming lamp - light, but good enough for both the work and the camera.
- A gantry or arm, with 2 stepper motors.
- Mounts for the camera and light on the gantry/arm.
- Cable guides/protection for the assembly.
- Maybe a distance sensor or proximity so it doesn't zoom at your head (ouch!), unless it could be suspended a little higher.
- Code wise - OpenCV, tracking PID loops and a bit of python.

Suspending it high would probably mean you'd occasionally get the top of my head if I peer too closely - so it won't resolve all photo/video issues.

This is a great idea. Not something I'd have time short term to build, but a great thing to consider.
