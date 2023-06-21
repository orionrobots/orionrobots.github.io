---
title: About the Arduino
layout: page
date: 2014-05-27
tags: [electronics, robot building]
---
![Arduino Leonardo](/galleries/orion-explorer1-robot/ArduinoLeonardoFront_2_200px.jpg)
{.style="float: left" }
The Arduino is the simplest control board to get your robot up and running. The boards we use are all fully assembled with headers and can be used in a solderless setting. We only use boards that can be programmed using a USB cable (included) and a simple bit of software that is freely available with a thriving community of hobbyists, robot builders and backyard scientists. This works on Windows, Linux and Mac.

It easy to find sample code and simple diagrams so an Arduino can interact with the real world. It is great to start customizing and making your ideas come to life.

At the heart of these boards is an Atmel AVR microcontroller - the very capable [ATMEGA 328](http://www.atmel.com/dyn/resources/prod_documents/doc8161.pdf) running at 16Mhz. On the Leonardo and Uno boards, the boards can also be used for other USB communications - to connect USB peripherals, or behave as a USB device. Handy for connecting with a Raspberry Pi or PC.

The normal Arduino layout has 14 digital input/output pins and 6 analog inputs. 6 digital pins can be used as PWM outputs and are suitable for controlling motor speed with a motor drive (like the L298N Board) - these are used for this in the Orion Explorer 1 robot kits.

## Technical Specifications

| MCU | Atmel 328 or 168 |
| Operating Voltage | 5v |
| Input Voltage | 6-12V via the regulator, 5v via USB |
| IO Pins | 14 digital, 6 Analog, 6 PWM |
| Memory | Depends on the board - The Uno has 32k of flash memory |

The Arduino community can be found at <https://www.arduino.cc/en/>, where there is advice, full specs, circuit diagrams, sample projects, a full programming guide and reference.
