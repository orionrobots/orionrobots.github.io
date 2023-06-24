---
date: 2023-06-24
title: Block Diagrams of Electronics for the Piwars 2024 Robot
description: Block diagrams of the electronics for the Piwars 2024 robot
tags: [piwars, robotics at home, electronics, big ole yellow, robot building, raspberry pi]
thumbnail: galleries/2023/piwars-robot-info/block-diagram.excalidraw.png
---
Today I took the diagrams I made over the past few days and put them into a block diagram. I used [Excalidraw](https://excalidraw.com/) to make the diagram.

{% image "galleries/2023/piwars-robot-info/block-diagram.excalidraw.png", "Piwars 2024 starting point robot diagram", "720, 940, 1140" %}

The purple blocks are the Raspberry Pi (a 3a+) and 4Duino Pro with the i2c link between them. In black are the power blocks, with AA batteries for the motors, and a USB power bank for the Pi.

In orange are the sensor blocks, showing which controller connects to them. I2c for the line sensor connected to the 4Duino, and the encoders connect to it using simple digital pins. The ultrasonic distance sensors are connected to the Pi using the GPIO pins, and there's a camera connected to the Raspberry Pi too.

The green circles are the motors, with the 4Duino's on board motor controller driving them. This is a map of what it should be doing now. Next I can add some batteries to it and power it all up.
