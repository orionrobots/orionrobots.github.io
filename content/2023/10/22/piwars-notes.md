---
title: Making a shim for the Pimoroni Explorer Hat Pro
tags: [robotics at home, raspberry pi, motor controller, electronics, python, programming, piwars, robot building]
date: 2023-10-22
thumbnail: content/2023/10/22/explorer-hat-shim.png
---
My student arrived with a few things to fix up. At the last session, we had been trying to get the Adafruit Cricket to work, but had experienced an issue with i2c communication errors throughout. I will take a closer look, but so my student can continue, we swapped that out for a Pimoroni Explorer Hat Pro.

The motor terminals on this are 2.54mm Dupont female connectors. The motors in use were DFRobot FIT0450's, which have Dupont male endings for the encoders, but just bare wires for the motor. We had a couple of options for connecting it.

1. Crimp some ends on. We could crimp some male Duponts onto the motor wires. the drawback here is that many other motor boards use screw terminals, so we'd have to swap them out again. We were trying to keep options open.
2. Solder a small shim.

We discussed the shim design, going from some tiny 2.54mm screw terminals, to male pin headers, and then soldering this onto a small board. In my stock, at this size, I had some small lengths of PerfBoard. We chose one of these and figured out how to connect it.

This is a rough plan:

{% img_responsive "content/2023/10/22/explorer-hat-shim.png", "Shim for the Explorer Hat Pro Motor Terminals" %}

I was able to use some component legs to make the connections, as it isn't strip-board. I used BlueTac as to hold the connectors in place, while using a Stick-Vise to hold the whole assembly.

{% img_responsive "content/2023/10/22/real-shim-hat-side.JPG", "Shim for the Explorer Hat Pro Motor Terminals" %}

{% img_responsive "content/2023/10/22/real-shim-side-view.JPG", "Shim for the Explorer Hat Pro Motor Terminals" %}

I soldered using the whole length of perf-board, and cut it to size with a hacksaw after we tested the connections with a multimeter.

My student was able to plug this into the top of their Explorer Phat board, and screw the motors in, so the motor wires stayed in securely.
