---
date: '2022-02-08'
description: Quick tips for Raspberry Pi Pico
layout: post
tags:
- raspberry pi pico
- robot building
- rp2040
- electronics
- robotics at home
title: Raspberry Pi Pico USB tip
---
If you are doing a lot of programming with the Raspberry Pi Pico, especially with a mobile platform like a robot, then you will be frequently unplugging your Pico.

It uses a USB Micro port, which can start to feel less like a positive connection.

There are a few ways to make this easier:

## Unplugging from USB to reset

You need not unplug the Pico to reset it.
You can add a button between pin 30, the RUN pin and Ground, and press this to reset Raspberry Pi Pico. One neat way to do this is the Captain Resetti accessory from Pimoroni, cheap and easy to solder on as a shim to a Pico setup.
In a pinch, you can just have a breadboard wire you connect between the RUN pin and ground.

## Unplugging for movement

If you need to unplug so you can move the robot around, or you have stateful sensors you need to reset, consider adding a USB-C female to USB-micro male adaptor.
The USB-C connector will be changed more often than the Pico, and means the Pico does not wear out.

This does feel nice and convenient, however has a couple of downsides:

- These adaptors are priced fairly similarly to the Raspberry Pi Pico itself. However, once you've added headers, uploaded your code and made it your own it isn't quite so expendable.
- It will add a few centimeters to the port of the Pico so it will stick out more.
