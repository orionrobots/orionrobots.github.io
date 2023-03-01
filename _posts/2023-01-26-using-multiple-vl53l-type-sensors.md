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
category: robotics-at-home
---
The VL53LnX series sensors from ST are popular distance sensors. 

They are small compared with the HC-SR04 distance sensors, and faster being based on light instead of sound for ranging. They are cheaper than LIDAR sensors, but also come with versions that can range from multiple points. they are also supported on a number of devices, including the Raspberry Pi Pico and Arduino, with plenty of example code.

The devices connect via I2C, and I2C normally allows multiple devices to share a bus, keeping pin usage low. However, one common problem for the VL53 series is that they all come with a single preprogrammed I2C address. Lets see some solutions for this.

See  <https://www.youtube.com/watch?v=XQrxPcq2tZ8&lc> for accompanying video content.

## Simple solution - 2 I2C buses

Some microcontrollers, like the Raspberry Pi Pico have multiple I2C buses. If you need only 2 sensors, or less than the number of I2C buses you can connect a device to each bus.

## Hardware solution - I2C Multiplexer

One solution is to buy and use additional electronics to manage them. The TCA9548A chip is an I2C multiplexer, which behaves as if there are multiple I2C busses. This may require some software changes to ensure that this device is managed to send data to/switch outgoing I2C bus before commands intended for the VL53 device. 

The additional hardware can also add to the size and cost of your robot.

## Software/Hardware solution - XShut pins

This needs an additional GPIO pin per device (but can be reduced with an IO multiplexer or shift register). This would be the number of devices - 1. You connect those to the X-SHUT pins on them.

In software, during start up, use the X-SHUT pins to disable all but one device on startup. Then reassign the I2C address on the first, enable the second, assign it's address and so on up to the number of devices you have.
