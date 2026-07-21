---
title: Preparing for the coder dojo
date: 2025-06-07
tags: [coder-dojo, robot programming, micropython, raspberry pi pico, rp2040]
thumbnail: content/2025/06/07-preparing-for-the-coder-dojo/usb-charging-many-robots.jpg
---
Last night, I got some preparation for today's Coder Dojo KU Python Robotics activity. These are MicroPython robots based on an RP2040 (the Raspberry Pi Pico chip). The activity is aimed at kids learning to code. I have a fleet of 10 robots, plus 1 more as a demo/test model. It uses some of the principles from my books. These autonomous car type robots are built around the Cytron MakerPi RP2040 control board, with a dual RCWL-1601 sensor for obstacle avoidance, a Maker Line 5-sensor array, and a mini-3 round chassis. The code is written in MicroPython, and the kids write their own code to control them, with us providing activity sheets, reference cards, and helping out if they run into problems.

## 3D Printing more parts

We needed to print some parts for the robots, which I managed to get all on one print bed. For my BambuLabs A1 Mini, this is the most parts I've got on a bed, so it was a bit of a challenge to get the layout right. The parts were:

- Some robot stands - We were 2 robot stands short. The stands are helpful to prop up robots from the table, so learners have somewhere to test code without the robot (wheeled type) driving off the table.
- A spare set of cover and stand off plates, which adapt a mini-3 round chassis to the dual RCWL1601 sensors, the Cytron MakerPi RP2040 control board, and also cover the wiring up. This set was for the Coder Dojo organiser who is also building one of these robots at home.

{% img_responsive "content/2025/06/07-preparing-for-the-coder-dojo/3d-printing-robot-parts.png", "3D Printing robot parts" %}

It all printed out perfectly, and I was able to take them off the print bed just after a Friday night movie finished, great timing.

## Charging the robots

With 11 robots, I needed to charge them all. The Cytron MakerPi RP2040 control board has a built-in USB-C charging circuit and each robot has an 18650 LiIon battery. I have a 5 port USB charger, and my neighbour, also a robot builder and mentoring with me, charged 6 more robots.

{% img_responsive "content/2025/06/07-preparing-for-the-coder-dojo/usb-charging-many-robots.jpg", "My charger quickly charging 5 robots" %}

{% img_responsive "content/2025/06/07-preparing-for-the-coder-dojo/six-more-robots-charging.jpg", "My neighbour charging 6 more robots" %}

## Final checks

A couple of robot needed some bolts tightening. The bolts come loose, especially around the spacers. Some bolts are trickier to access and needed some disassembly to get to the bolt heads. One had fallen off and was in the box, but all have been tightened up.

This is likely to be a regularly maintenance activity, along with checking the wiring.

The wiring uses grove ports, and a JST style connector for the batteries too, which keeps it quite tidy and prevents them coming loose. The front and rear covers also keep the wiring tucked away while they are being transported.

## Ready for the Coder Dojo

The robots are charged and ready to go. Today will be their third outing into a dojo, and I'm hoping it goes as well as the last one - with some fun directed chaos. Kids asking "What happens if I turn on every IO pin in a for loop?" Go try it. Or seeing it drive off, and noticing the veer (we talked about encoders). Or setting up code for avoiding with robots avoiding each other, but finding the tuning and what was too late to turn. Or playing with the LEDs and animating them in different ways. Great fun!
