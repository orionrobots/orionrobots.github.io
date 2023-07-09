---
date: '2013-05-18'
layout: post
tags:
- arduino
- distance sensor
- orion explorer 1
- raspberry pi
- robots
- sensor
title: Friday Mailbag - Pi Camera, Pi expansion boards
---
This week I had a rather nice mailbag of cool robotic and electronic parts.
The Coocox Embedded Pi, Raspberry Pi Camera and Dual Sensor progress.

{:leftimg: style="width: 160px; float: left; margin-left: 4px; margin-right: 4px;"}
{%assign gallery="/galleries/2013-05-18-mailbag-pi-camera-pi-expansions" %}

## Embedded Pi

![Embedded Pi](../{{gallery}}/embedded_pi.jpg){.leftimg}
First up is the Element 14/Coocox embedded Pi board. I am currently looking at ways to embed the Raspberry Pi on my robots - eventually there will be an Orion Explorer robot kit that includes this. The Embedded Pi extends the Pi by adding Arduino shield compatible IO, and it has standalone functionality by having a 32 bit Arm Cortex M3 Microcontroller onboard which can be programmed with a free IDE.

It has on board logic level shifters, so shields and parts that are 5v will work with this. The shifter used on it is the [TXS0108EPWR](http://www.ti.com/lit/ds/symlink/txs0108e.pdf) - a device similar to others I am looking at.

I intend to experiment with the Pi on a robot using this, and with this as a standalone controller. It will be fun, and shield compatibility is neat, however, the next two items may mean that it wouldn't be required as part of a kit.

## Logic Level Shifters

![Logic Shifter](../{{gallery}}/logic_shifter.jpg){.leftimg}
Interfacing with the Pi is different from the Arduino for a few reasons. A key one is the voltages of the IO pins. The Pi presents logic at 3.3v, and a number of IO systems require this to be at 5v.

To experiment with this, a colleague has lent me a 74HC125b1 DIP chip and I've bought 5 MAX3377E chips. The former is a single directional shifter, and the MAXIM chip is bidirectional - making the latter perfect for sensors.

I will write up more as I actually play with them.

## Raspberry Pi Camera

![Raspberry Pi Camera](../{{gallery}}/raspberry_pi_camera.jpg){.leftimg}
This is definitely the most awesome item in the lot. I can see the possibility of using OpenCV (Computer Vision project) with the rPi on a robot for some advanced play - ahem - experimentation. It has a ribbon connector that goes straight into the Pi.

It has been long anticipated - and I made sure to order in the first round. This can mean that I may end up with one with problems that are later fixed, but it also means I get to play with it early.

I'll be trying this out after doing the stuff with the level shifting above. Expect to see this mounted on an Explorer 1 robot.

## Dual Sensor Progress

A final note on the dual Sonar distance board. I've already found manufacturers for the board, but I'm now planning to revise the initial design to incorporate a level shifter, making it compatible with both the Arduino, the Raspberry Pi, and most other controllers on the market. More on this when the design is closer to completion. I expect it to be on the store in around a month, accompanied with code for the Arduino, and later similar code for the Pi.
