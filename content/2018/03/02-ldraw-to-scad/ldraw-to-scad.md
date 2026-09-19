---
title: LDraw to OpenSCAD Tool
tags: [lego ldraw, lego technic, lego robotics, lego rcx, lego mindstorms, python programming, openscad, lego cad, robotics cad, 3d cad, cad, cad-software]
date: 2018-03-02
thumbnail: content/2018/03/02-ldraw-to-scad/openscad-adder-subtractor-buggy.png
---
I wanted to look at some of my older Lego robotics projects and work again, and perhaps render or interact with them in a different way. I've been using OpenSCAD for a while, and I wanted to see if I could convert some of my LDraw files to OpenSCAD. This was also related to adding Lego assemblies to non-Lego robots for some modular robot designs.

I wanted to also go further, and animate my Lego builds.

I build a Python based tool to manage this, and I'm quite pleased with the results.

## Getting it

The project is all Open source, on [GitHub](https://github.com/orionrobots/ldraw-to-scad). It requires Python3 to run.

You will also need an LDraw library, and OpenSCAD installed.

## What features does it have?

This converts the LDRaw model to an OpenSCAD model.
The submodules and parts become OpenSCAD modules. The comments are also converted to OpenSCAD comments.
Colour files are also supported.

It's not quick, as it does need to go through the library of parts. It's also not perfect, as it doesn't handle all the LDraw features.

## Do you have screenshots?

Yes, a few models that have come from the Orionrobots archives are here, in OpenSCAD! These are before the colour fixes.

### 4744 Lego Brick

![4744 Lego Brick](/2018/03/02-ldraw-to-scad/openscad-4744-lego-brick.png)

The first thing was to get a single Lego brick working. In the LDraw world this is already multiple files, making use of the primitives. This is a simple brick, but it's a good test.

The code shows the named primitives and subparts being sensible named modules in the OpenSCAD code, and the LDraw comments being preserved as OpenSCAD comments.

### RCX Double sensor pad

![RCX Double sensor pad](/2018/03/02-ldraw-to-scad/openscad-rcx-double-sensor-pad.png)

This model was a simple two sided bumper for a Lego RCX based robot buggy. It contained multiple elements, so was a good test over the single brick.

It is using a reference colour here, as the colour files are not yet fully implemented. It's clear from the render that the parts, including features like studs are represented.

### Lego Adder Subtractor Buggy

![Lego Adder Subtractor Buggy](/2018/03/02-ldraw-to-scad/openscad-adder-subtractor-buggy.png)

This is the [Adder Subtractor buggy](wiki/adder_subtractor_drive.html), a Lego RCX based robot that uses the adder subtractor drive for steering - it mechanically eliminates some of the motor differences, so the robot can drive straight.

This complex demonstration is a larger assembly with multiple LDraw parts files, a multi-part-data or MPD file. It took 26 seconds to render in OpenSCAD, as it's quite a large file.

It may be possible to optimise the output and flatten some of the primitives in a later version - but at this point, it is all like-for-like. The OpenSCAD file has 38k lines of code!

## Ideas for improvement

We could consider substituting primitives for OpenSCAD primitives, like stud curves that are approximated by lines being substituted for real curves.

Eg, for the 4-4cyli ldraw primitive something like this:

```openscad
$fn=20; 
rotate([-90, 0, 0]) 
{ 
    render(convexity = 2) difference() {
        cylinder(1, r=1, [0, 0, 0], center=true);
        cylinder(1.2, r=0.9, [0, 0, 0], center=true);
    };
};  
```

This needs testing, and makes the project more complex.

## What's next?

This project was a bit of a test, and for me to specifically get an animation working. I don't currently have long term plans, however, members of the github community have taken an interest in this, and I am happy to support them improving this tool!

However, I've also found a [Blender export/importer for LDraw](https://github.com/TobyLobster/ImportLDraw), which I will look at next as it may be a good fit for me getting animations.


## Helpful links for building this

- [The OpenSCAD cheatsheet](https://openscad.org/cheatsheet/) incredibly helpful when building this. OpenSCAD is a very interesting CAD system, especially for programmers. This LDraw-to-scad project is effectively a transpiler for it.
- [The LDraw file format](https://www.ldraw.org/article/218.html) - this is the file format I am converting from.
- [LDraw multi-part files](https://www.ldraw.org/article/47.html) - The multi part files are a further specification.
- [OpenSCAD Includes](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Include_Statement) - this may be a way to reduce the duplication. Currently it generates a single big file. It could generate a library.
