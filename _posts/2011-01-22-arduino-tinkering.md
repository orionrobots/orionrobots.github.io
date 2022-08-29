---
layout: post
title: "Arduino tinkerings"
description: "Tinkering with Arduino and LoginWay PIC-01 Board"
category: "robot building"
tags: [arduio, electronics, robot building]
gallery:
    - file: freecad-assembly4-broken-link.png
      title: FreeCAD Assembly4 Broken Link
asset_dir: galleries/2011
thumb: /galleries/2011/thumbnails/25012011148.jpg
---
The Loginway PIC-01 board is a handy board for developing microcontroller projects. By it's name, it's clearly intended for a microchip PIC. It has LEDs, buttons, a serial port, potentiometer, LCD screen (hitachi type interface) and a big chunk of breadboard. Great for just trying out bits of code and learning microcontroller stuff with.

I paired it with an Arduino UNO to get to know the Hitachi LCD display output, but connecting other stuff like LEDs was good fun anyway.

![Arduino wired into LoginWay PIC-01 board](galleries/2011/25012011148.jpg)

The other experiment I tried today was a USB-I2C converter from active-robots. This had, in addition to the I2C, a couple of GPIO pins, so I wired one into a pair of LED's - red/green to indicate True, False and drive those on a breadboard.

![USB-I2C converter GPIO driving LEDS](galleries/2011/22012011146.jpg)
