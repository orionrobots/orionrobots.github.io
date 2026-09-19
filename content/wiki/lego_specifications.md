---
title: Lego Specifications
date: 2005-06-24 19:41:28
tags: ["lego technic dimensions", "lego technic dimensions mm", "lego technic specifications", lego robotics, "technic lego", "lego measurements", "afol", stem, lego technic,
"lego engineering", "lego technic gears"]
using_mathjax: true
---
When building machines and robots with Lego, dimension specifications for the standard bricks are handy. This will help designing models, and interfacing Technic Lego with other materials. This article contains paid links.

## Lego Brick and Plate Ratios

* Brick Height to Stud Width: 6/5
* Brick Height to Plate Height: 3/1

## Lego Brick Measurements

![Lego brick dimensions](/galleries/lego-dimensions/lego-dimensions-thumb.jpg)

If you want to put Lego bricks into another cad system (ie FreeCAD/Fusion 360/SolidWorks) - you will find the following helpful along with the formula table below:

|  Description             | Short name | Size in mm |
|--------------------------|------------|------------|
| Spacing of stud centers  | stud_spacing        | 8          |
| Diameter of studs        | stud_diameter        | 5          |
| Height of block          | block_height      | 9.6 (48/5 mm )  |
| Height of studs          | stud_height        | 1.7        |
| Plate Height             | plate_height         | 3.2mm (16/5 mm) |
| Thickness of brick walls | wall_thickness        | 1.5        |
| Outer diameter of cylinders (found on underside of bricks) | cyl_outer_diam | 6.31 |
| Thickness of cylinder walls | cyl_thickness   | 0.657       |

Note that the cylinders under a standard 2x2 and 2x4 brick are the same diameter as the technic holes for beams and pins.

## Making Your Own Measurements

Although measurements on the web are useful when making CAD designs or drawings, it's always a smart idea to make further measurements of your own. You may also want to measure things you'll interface with Lego and 3D printed parts so you understand what margin of error you have.

An absolutely essential tool for this is a set of digital calipers. They need not be expensive ones, although paying more will give more precision, even a basic set will let you make precise measurements.

### Formulas for CAD Constraints

When you are constraining and defining parts to interface with Lego - you may find these definitions/calculations using the above symbols useful:

| Symbol | Calculation to derive from others |
|--------|-----------------------------------|
| block_height     | `stud_spacing * 6 / 5`     |
| wall_thickness    | `(stud_spacing - stud_diameter) / 2` |
| stud_height    | `block_height / 3 - wall_thickness`    |
| cyl_outer_diam  | `sqrt(2) * stud_spacing - stud_diameter` |
| cyl_thickness  | `(cyl_outer_diam - stud_diameter) / 2` |

### Lego measurements in detail

Although studs are the standard unit of Lego measure- to interface with other systems, and for some more complex models, it is useful to have them in standard measurements. The goal is to represent brick heights and plate heights in millimetres. We will refer to gears using the number of teeth(ie 24t) - although the diameter of the holes, wheels and studs is also significant.

According to [Steve Baker](https://sjbaker.org/steve/lego/dimensions.html "The Brick Bakery:Lego Dimensions") the distance between 2 Studs is 8mm. This is verified as Stud pitch = 7.985mm on Lugnet - although 8mm is commonly used.

Plate height(according to Lugnet) is 3.194 mm, although 3.2 mm or 16/5 mm are commonly used.

### Lego Brick height

Approximations of 9.582 mm, and 9.6 mm or 48/5 mm are commonly used.

The ratio of the height of standard beams, to the width of studs is 5:6 - which can make for some trickiness when doing perpendicular mounts.

Calculating:

$$\begin{align*}
= 8:48/5 && \text{take the 5 over} \\
= 5\times8:48 && \text{factor 8 from 48} \\
= 5\times8:6\times8 && \text{cancelling} \\
= 5:6 \\
\end{align*}$$

### Lego Plate Height

Plates (thin bricks) are 1/3 standard bricks tall. This is 16/5 mm, or 3.2 mm.

Calculating:

$$\begin{align*}
16/5:48/5 \\
= 16:48 \\
= 1*16:3*16 \\
= 1:3
\end{align*}$$

Building 5 plates high matches 2 studs wide.

### LDU (LDraw Units)

In LDU (LDraw units), the measurements are:

* 1 LDU = 0.4 mm
* Brick height = 24
* Plate height =  8
* Stud pitch   = 20

## Lego Technic Gears

In the Lego system, Technic gears have a ratio that the number of teeth are 8 times the diameter, or 16 times the radius in stud pitch. Conveniently - the number of studs, and Diameter in Millimetres seem to be the same. These gears have a metric module of 1.

| Teeth | Diameter       |    |
|-------|----------------|----|
|       |Studs(by pitch) | mm |
|-------|----------------|----|
| 8t    | 1              | 8  |
| 16t   | 2              | 16 |
| 24t   | 3              | 24 |
| 40t   | 5              | 40 |

More info on mounting these can be found at [The Brick Bakery](http://sjbaker.org/steve/lego/gearpairs.html "The Brick Bakery:Gear Mounting & Ratios").

## Lego Brick Materials

Most Lego bricks use high quality ABS plastic - which is slightly elastic.

| Property                 | Value       |
|--------------------------|-------------|
| Specific Gravity/Density | 1.05 g/cm^3 |
| Tensile Strength         | 44 MPa      |
| Elongation At Break      | 23-25 %     |

## Other related specifications

[RCX Specifications](/wiki/rcx_specifications.html)

[CyberMaster](/wiki/cybermaster.html)

[Lego Wheel Traction Specifications - A study by Phillippe Hurbain](http://philohome.com/traction/traction.htm "Wheels, Tyres and Traction")
