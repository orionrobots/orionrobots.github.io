---
title: tinkering with a Gyroscope
description: Getting a Gyroscope working - part one
date: 2013-08-13
tags:
    - robots
    - electronics
    - Arduino
---
A couple of weeks ago, I had an Explorer One robot running with an HC-06 bluetooth module in such a way that I could remote control it from my phone

I recently purchased a Gyroscope module on eBay - with a view to interfacing it with the Explorer 1 Robot kit, and placing the same type on the shop once I had it all working.

- Structure
    - The stuff with the Arrow keys/bluetooth - the fact that I spotted the veer - no odometry
    - Bought it on eBay
    - Got it home - downloaded what I thought was the right library - nothing...
    - Tried using a USB-I2C debugger.
    - Stared at the datasheet
    - Tried many things - including reversing data and clock lines...
    - Then got the schematic/pcb and started measuring voltages - and then noticed the components were off..
    - Had I bought myself a non functional ebay fake? Go back - check the place I bought it - and bang - it was actually a different model...
    - the fact that there are two similar models - and how to identify them
    - Worked like a treat with the Arduino as soon as I had the right library with the right device addresses.
    - Biggest mistake - assuming that there was only one model by this name and not subtly different ones.
    - Plan to carry on - actually seeing if it can measure the veer.
    - Building a simple step-by-step guide to get it working.
