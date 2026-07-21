---
title: Tips for the spreadsheets in FreeCAD
tags: [freecad, robot design]
date: 2024-03-11
thumbnail: content/2024/03/11/freecad-sheet-with-aliases.png
---
I've been doing a lot of FreeCAD work, including a frustrating case of rebuilding a chassis base, the base of my CAD models, because the original was from a STEP import, and had two major issues:

- The holes were not aligned properly in the original.
- The orientation is off by default. Which seemed minor, until it cause some workbenches to misbehave.

As part of this work, I've been doing lots of analysis of the part, both the real part, embedded in my real robot, and the old SEP digital twin. I could use measurements to redraw as a sequence of sketches and FreeCAD features.

The physical twin has meant using calipers and marking the numbers into a spreadsheet as parameters for my drawing.
However, with some holes totally covered, my option are full disassembly, or using the existing digital twin. There is a measurement tool built into the Part Design Workbench, and for harder things like cylinder diameters, there's a caliper tool in the Manipulator workbench.

My sheet habit is to have a measurement name, followed by the value. Or a column of labels, then values, with me copying the label into the cell alias by hand.

Today I learned of the [EasyAlias macro](https://wiki.freecad.org/Macro_EasyAlias) for the sheet. This lets me make a selection, and see the labels copied into the adjacent value cells. It's a small thing, but a time saver when using sheets this way.

{% img_responsive "content/2024/03/11/freecad-sheet-with-aliases.png", "FreeCAD sheet showing aliases in use" %}

A tip I've not said enough, learn the shortcuts. They have changed in FreeCAD, but it's still worth getting to know them for the amount of time they save.
