---
layout: post
title: Using multiple VL53L type sensors
date: 2023-01-26T12:37:36.167Z
description: Using multiple optical distance sensors
tags:
  - robot building
  - raspberry pi pico
  - robot electronics
  - robotics sensors
  - optical sensors
  - distance sensor
  - i2c bus
  - robotics at home
category: robotics-at-home
thumbnail: /galleries/vl53l0x-distance-sensors-on-pico.jpeg
---
The VL53LnX series sensors from ST are popular distance sensors.

They are small compared with the HC-SR04 distance sensors, and faster being based on light instead of sound for ranging. They are cheaper than LIDAR sensors, but also come with versions that can range from multiple points. they are also supported on a number of devices, including the Raspberry Pi Pico and Arduino, with plenty of example code.

The devices connect via I2C, and I2C normally allows multiple devices to share a bus, keeping pin usage low. However, one common problem for the VL53 series is that they all come with a single preprogrammed I2C address. Lets see some solutions for this.

<iframe width="560" height="315" src="https://www.youtube.com/embed/XQrxPcq2tZ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"allowfullscreen="true"></iframe>

## Getting a single sensor working

If you are yet to get one of these working, I suggest taking a look at [Raspberry Pi Pico & VL53L0X for MicroPython](https://www.youtube.com/watch?v=YBu6GKnN4lk) where Kevin McAleer explains how to get one of these working with a Raspberry Pi Pico.

## Simple solution - 2 I2C buses

Some microcontrollers, like the Raspberry Pi Pico have multiple I2C buses. If you need only 2 sensors, or less than the number of I2C buses you can connect a device to each bus.

## Hardware solution - I2C Multiplexer

One solution is to buy and use additional electronics to manage them. The TCA9548A chip is an I2C multiplexer, which behaves as if there are multiple I2C busses. This may require some software changes to ensure that this device is managed to send data to/switch outgoing I2C bus before commands intended for the VL53 device.

The additional hardware can also add to the size and cost of your robot.

## Software/Hardware solution - XShut pins

This needs an additional GPIO pin per device (but can be reduced with an IO multiplexer or shift register). This would be the number of devices - 1. You connect those to the X-SHUT pins on them.

In software, during start up, use the X-SHUT pins to disable all but one device on startup. Then reassign the I2C address on the first, enable the second, assign it's address and so on up to the number of devices you have.

## Robotics at Home with Raspberry Pi Pico

This post was based on research I did for the book [Robotics at Home with Raspberry Pi Pico](https://packt.link/5swS2) which is available now.

<a href="https://packt.link/5swS2" title="Learn to build and Program Robots using Robotics at Home with Raspberry Pi Pico">{% img_responsive "galleries/2023/Robotics-at-Home-with-Raspberry-Pi-Pico-banner.png", "Learn to build and Program Robots using Robotics at Home with Raspberry Pi Pico" %}</a>
