---
date: '2020-03-01'
description: Explorer Hat Pro Part For Kicad
layout: post
tags:
- robotics
- raspberry pi
- raspberry pi projects
- raspberry pi 3 projects
- piwars
- robot
- kicad
title: 'Piwars 2020: Kicad Part For the Pimoroni Explorer Hat Pro'
---
My Piwars 2020 robot, Bangers 'N Bash, is built around a Raspberry Pi 3A+ sporting a Pimoroni Explorer Hat Pro on top. I've been building a Nerf turret and attached it to the top of the robot. However, this comes with some electronic considerations.

The Nerf turret has two counter rotating rollers, which compress the dart and fling it through the turret barrel. The motors for these rollers are likely to have quite a high current spike when the dart fires. There are also 3 servo motors, for Pan, tilt, and a shoot motor to push the dart into the rollers. The turret is based on a design from [little french kev](https://www.littlefrenchkev.com/bluetooth-nerf-turret), but with some modifications to stuff it onto a robot.

In the course of designing this, I made a Kicad part for the Explorer Hat Pro. The picture below shows the part in use.

![Picture Of Explorer Hat Kicad Part](/assets/kicad-library-parts/explorerhatpro.png){.class="img-responsive"}

I'm still gaining Kicad skills, so I expect the part not to be perfect, however I think it would be useful to other people building stuff with the Explorer Hat.

Download the files below:

* [explorerhatpro.lib](/assets/kicad-library-parts/explorerhatpro.lib)
* [explorerhatpro.dcm](/assets/kicad-library-parts/explorerhatpro.dcm)

![Nerf Gun On the Robot](https://pbs.twimg.com/media/ERVTiHkU8AER8cU?format=jpg&name=large){.class="img-responsive"}
