---
title: Metric Dimensions for the RCWL-1601 Ultrasonic Sensor
date: 2025-02-12
tags: [3d cad, robotics cad, robot building, robotics at home, robot sensors, ultrasonic distance sensors]
description: Metric dimensions for the RCWL-1601 ultrasonic sensor
thumbnail: content/2025/02/12-rcwl-1601-dimensions/rcwl-1601-distance-sensor-dimensions.png
---
These are surprisingly hard to find. So I've made measurements using my digital calipers.

The RCWL-1601 is an ultrasonic distance sensor, which can use the same protocol as the HC-SR04 (but also has i2c and UART modes). It's dimensions do not match the HC-SR04, especially the big cans up front.

So I've modelled in FreeCAD. Here are the dimensions:

![Dimensioned drawing of the RCWL-1601 sensor](/2025/02/12-rcwl-1601-dimensions/rcwl-1601-distance-sensor-dimensions.png)

There are a few caveats to note here:

- I've not drawn the tiny corner holes, they are too small to sensibly use for mounting.
- My dimensions may not be perfect. I've probably made errors.
- I've made the board thickness account for the components on the board, so it's a little thicker than the actual board.
- I've similarly gone for a block for the connectors at the back, which includes space for a connector to be inserted.

Their cans are around 12mm deep, their centres are 22mm apart, and they have a diameter of 16mm.

I hope this is useful to other robot builders out there!
