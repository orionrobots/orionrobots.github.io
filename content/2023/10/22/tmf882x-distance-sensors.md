---
title: TMF882x Distance Sensors
tags: [robotics at home, electronics, sensors, robot building]
description: A look at the TMF882x distance sensors
date: 2023-10-22
---
Today I've come across the TMF882x distance sensor series from AMS. I was exploring [SparkFun](https://www.sparkfun.com/) for some sensors for a project.

I use distance sensors in most of my robots, and my attention has recently been on the VC53LC5X ToF imager. What that sensor does is uses light based time-of-flight to sense distances, but it can sense a grid of distances, behaving like an array of sensors.

The TMF882x series offer a similar capability, with i2c letting a user get distance information. They also have different sized sensor array grids, and come in at a similar price to the VL53 series, perhaps a little cheaper. Their documentation comes with register maps and descriptions, making them friendlier for implementation.

These TMF882x are direct competitors to the ST VL53 series. Which I think is great as competition should lead to innovation in this space.

I tend to buy breakout modules for sensors, so I can directly connect them to a Raspberry Pi, which then makes this easy for students/learners or readers to follow along. They may not have experience designing a PCB, mounting a bare SMD sensor on it, or instructing a PCBA service, so breakout modules allow them access to these sensor to explore the code and i2c aspects of them.

## Problems so far

It's quite early days for these sensors, and I've not yet got hold of one.

### Availability

I can get TMF8820 modules in the UK, but not the more capable TMF8821 or TMF8828. I'll keep an eye on their availability. I'll initially get hold of a [TMF8821 module](https://www.sparkfun.com/products/19451), but my eyes are on the 8828 with an 8 by 8 imaging grid.

### Code

Another issue is that since the VL53Lx series have been around longer, there is sample code using them, including Raspberry Pi Python, CircuitPython and MicroPython.

A quick search of GitHub for examples of TMF8820/1/8/x shows a SparkFun Arduino library, but nothing in the Python/Micropython world. Python wrappers to the C interface is a possibility, and I'm sure it's only a matter of time.

## Links

- Take a look at their data sheet [https://cdn.sparkfun.com/assets/learn_tutorials/2/2/8/9/TMF882X_DataSheet.pdf]. Use the PDF contents menu to navigate. There's a great register description, and a lot of detail on how to use the sensor.
- [Sparkfun's Arduino Library for tmf822x](https://github.com/sparkfun/SparkFun_Qwiic_TMF882X_Arduino_Library)
- [Sparkfun's Open Hardware Design](https://github.com/sparkfun/SparkFun_Qwiic_dToF_Imager-TMF882X) - This is awesome, sparkfun have all their boards and schematics available here too.
