---
date: '2022-10-30'
description: A problem with FreeCAD topological renaming
layout: post
tags:
- robotics
- electronics
- freecad
title: FreeCAD topological renaming issues
---
Arg, in FreeCAD I split 2 edges in a sketch and hit what I assume is a topological renaming nightmare. Happened 3 or 4 times this week. My workflow has been sheet to master sketches, to shapebinders in bodies, to pads.

In FreeCAD items are referenced by others by name. When you change an item further up the tree, those names change, which then causes the references to no longer make sense. This is the topological naming problem. It can be a nightmare to fix. I know that there are people in the FreeCAD community working on improving this.

![The FreeCAD Model Tree](/galleries/2022/10-30-freecad-problems/FgVF2RPX0AInqvN.png)

The image shows the state of the model tree. There's a spreadsheet, a set of master sketches. There's a hidden walls Part, then a Base part. The bodies in the base part all have a recalculating tick. Each body has a shapebinder (referencing the BaseSketch) and each pad has a red circle, because the recompute failed. Each pad fails because the wires are no longer closed, because splitting 2 wires has caused all of them to rename.
The rename means the shapebinders now all refer to the wrong edges.

I saw this with a few operations. Either splitting a line, which would create 2 lines and so logically cause renaming, however, I also saw this when only changing the constraints on a sketch. Which led to multiple objects to rebuild. This is not fun. I'm using FreeCAD 0.20.

While this is frustrating, to learn robotics at home, CAD is an essential skill. FreeCAD is the leading open source CAD tool, and it's getting better all the time. I'm going to keep using it, and keep reporting bugs.
