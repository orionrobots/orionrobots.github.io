---
title: Trying out Assemblies in FreeCAD 1.0.0
date: 2025-02-12
tags: [3d cad, robotics cad, robot building, robotics at home]
description: Using the FreeCAD Assembly workbench in FreeCAD 1.0.0
thumbnail: content/2025/02/12-freecad-assemblies/robot-chassis-front-assembly.png
---
I've been working on a robotics mentoring project for [Coder Dojo KU](https://www.coderdojoku.org/). There will be a fleet of 10 of these robots. The current task is to model a sensor bracket that I can print for some RCWL-1601 ultrasonic distance sensors.

The specific sensors are always 3.3v compatible, and quite cheap. Awkwardly, they do not fit where the more frequent HC-SR04 ultrasonic sensors fit. So I'm designing a bracket to hold them in place on the Adafruit Mini-3-round chassis that I'm using as a base for the robot.

I wanted to ensure it fit, and modelled part of this chassis in FreeCAD. I've been using FreeCAD for years, but today I got into what the 1.0.0 version could do for me.

## Fasteners workbench

The first thing is to try the Fasteners workbench if you haven't. Screws and standoffs are there, and people who know my building style know that I like to use PCB standoffs for lots of construction since they are cheap and fairly easy to get hold of.

If you want to model nuts, bolts and washers, this is the workbench for you.

The stand-offs are in a slightly odd selection in the workbench - look under the "Inserts" toolbar section for them. You can then set a standard diameter (M3 or M2.5 are what I use) and length.

## Assembly workbench

I've been burned a bit by FreeCAD assemblies workbenches - with assembly 2, 3, and 4 all behaving very differently, being incompatible, and a bit unstable.

This one however, has been a joy to use.
I provoked one crash sadly, probably by trying to do too much and change things while inside a mate dialog.
A top tip is to save often, and finish a dialog based step before doing anything else.

### Adding parts

You can create an assembly, and starting adding parts. The transform UI appears after adding one in, so you can put it close to where you might need it.

![Placing a fastener in the assembly](/2025/02/12-freecad-assemblies/placing-screw-for-assembly.png)

I tend not to try moving them exactly into place, but give them the right orientation, but clearance to access the features needing to mate the parts together.

### Mating parts

![The Fixed Joint icon in the Assembly workbench in FreeCAD](/2025/02/12-freecad-assemblies/fixed-joint-freecad-assembly-icon.png)
I was most often able to use the simple Fixed Joint style to mate items together.

![Selection ready to join together](/2025/02/12-freecad-assemblies/fastener-hole-selection-ready-to-assemble.png)

I select one parts feature - this case the top round edge of a screw hole on the chassis (the part that will remain still), and then a round edge of the part that would move, the lower rim of the screw head. When I then select fixed joint, that screw will be aligned so that the head is touching the chassis, and the screw is aligned with the hole.

This seems far simpler than linking in separate documents, making reference geometry everywhere and aligning their axes.

## The current result

I'm first making a reference assembly to see that my design for the sensor will fit.

![Reference assembly of the front of the robot](/2025/02/12-freecad-assemblies/robot-chassis-front-assembly.png)

I've only modelled the front of the robot chassis and it's holes, a little lazy, but it's all I need for this current step. I'll be then adding in the sensor bracket, and making a low-effort model of the sensor itself to see that it fits well.
