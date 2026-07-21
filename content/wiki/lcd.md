---
layout: page
title: LCD
tags: [electronics]
date: 2005-07-14 12:29:54
---
This is a common type of flat display, used often in Phones, Digital Cameras, Calculators, wristwatches and more recently desktop computer flat screens.

## Using them in robotics

There are a number of commonly available modules, usually serial controlled, on the market. They can be bought from Maplin, RS and a other electronic part retailers.

Some are simply based upon [RS232](/wiki/rs232.html "A serial communication standard") serial, and more advanced ones use [I2C](/wiki/i2c.html "Inter Integrated Circuit bus") bus connectors.

When you are purchasing one, you need to consider carefully the requirements - how big the display is, in rows and columns of letters, or in pixels (picture cells) if you are displaying images. You need to take into account the viewing angle - many of these only display anything if you are in the range of view.

Think through if you are going to need backlighting, or more expensive reflective systems. The backlight is an additional weight, and power concern - and you may be able to design it out of the system, or use a bright white [LED](/wiki/led.html "Light Emitting Diode") instead.

As always in robotics, the three major factors are weight, power consumption and cost. In most cases - these are simply used during debugging/development, and need not be in the robot on the field. Maybe then you are better off just using a serial link with a terminal.

## Alternatives

There are similar flat screen devices like TFT - Thin Film Transistor, Plasma displays and the emerging OLED technology. If you are simply displaying numeric, or alpha-numeric, it might be easier just to use an LED display.

## How these work

It consists of a panel of a particular arrangement of crystals. They are designed so they are polarised - that is they let light waves through in only one orientation. If you take two pieces of polarised glass, and place them at right angles, the result will be totally opaque - you could not see through it at all. The polarised crystals change their orientation when an electrical current is applied - so this means you end up with opaque, and transparent areas. Against a background, and when controlled - these areas make up the digits, or pixels of an LCD display.

A basic colour LCD display is simply the same system, but with a background consisting of a repeating pattern of red, green and blue areas under the Liquid Crystal - which then are shown or hidden, and the eye mixes these - and sees full colour - this is exactly the same principle as a colour CRT television.
