---
title: FreeCAD notes - working in the new assembly workbench
tags: [FreeCAD, 3D CAD]
date: 2025-07-05
thumbnail: content/2025/07-05-freecad/knolling-freecad-assembly.png
---
I've been slowly getting my head around the new (FreeCAD 1.0) assembly workbench, and using it to create exploded diagrams for my upcoming book, Learn Robotics Programming Third Edition. 
hese are some notes and observations while doing so.

I'd previously used the exploded assembly workbnehc and others, but the new assembly workbench is rather good.
It uses joint/constraint based assembly with a resolver.

A critical note in FreeCAD - save your work very often, it does crash or hang sometimes.

## Knolling before the assembly

When you make the assembly in FreeCAD, you insert parts from your open documents into it.
Initially they all are inserted at the origin (0, 0, 0).
What I like to do is drag them out as I place them.

For the photos I use in my books, I lay parts that I would assemble on a workbench (trying to find a good white surface for photos), so they can all be clearly seen and the quantity.
This technique is known as knolling, and creates quite pleasing assembly instructions.

![Using Knolling for a Raspberry Pi HAT assembly](/2025/07-05-freecad/knolling-raspberrry-pi-hat-assembly.png)

The same technique is handy when making FreeCAD assemblies, making the parts easier to assemble into place with joints/constraints afterwards:

![Knolling an asssembly in FreeCAD](/2025/07-05-freecad/knolling-freecad-assembly.png)

You can do this by using the drag handles on the parts when you've added them.
If you lose the drag handles, while still in the add parts mode, you double click a part to get them back.

## Trying the Parts workbench

For some reason, in FreeCAD, I'd largely been using the Part Design workbench, perhaps because it is hte defualtr you start with.
I've been using the Part workbench instead for a week, after seeing a video on the subject.
Much of my workflow - draw sketches, extrude them and draw more, is the same.

However, operations like being able to mirror, cut parts and use boolean combinations (union, subtraction) are more accessible in this workbench.
I'll keep going and see where I get to.

I use boolean operations a lot in my Inkscape 2D drawing workflow, to construct shapes, so it is nice to have them in FreeCAD too.

## Creating exploded diagrams

You can explode an assembly by selecting an assembly in the workbench, and pressing "E", or finding Exploded Assembly in the menu.

My technique is to CTRL-select groups of bolts together and lift them out of the assembly, just remember to give clearance for other parts to come off too.

![Exploded assembly in FreeCAD](/2025/07-05-freecad/freecad-exploded-assembly.png)
