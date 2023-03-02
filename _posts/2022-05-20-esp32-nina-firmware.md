---
layout: post
title: "Adafruit Airlift ESP32 NINA Firmware"
description: "More on the wireless CircuitPython and Raspberry Pi Pico"
category: "robot building"
tags: [esp32, wireless, wifi, arduino, cpp, robot building, robotics programming, adafruit, circuitpython, electronics]
---
The NINA firmware allows an ESp32 to act as a Wireless bridge/network interface for any SPI connected microcontroller, for example a Raspberry Pi Pico, or an Arduino.
Following from my last post [Raspberry Pi Pico Wifi and Wireless]({% post_url 2022-04-08-pico-wireless %}), I needed to dive into the NINA firmware and debug there.

![The Adafruit Airlift ESP32 On a Raspberry Pi Pico Robot](/galleries/2022/05-20-esp32-airlift-firmware/IMG_5921.jpeg)

NINA Firmware is written in C++, and looks like it started as an Arduino build for the ESP32, but is now built independently of the Arduino environment.
NINA has been adapted by Adafruit for their [Airlift](https://www.adafruit.com/product/4201) product.
CircuitPython and other clients connect via a CircuitPython bus and send byte commands over to NINA to ask it to perform Wireless network operations (and can incidentally control IO pins, so there's a possibility that three LED lights on the AirLift can be brought to life).

Where I'd last got to was that the power system had been a problem, but after fixing this, I would sse stability issues after many requests.

## Exception handling

The first stability issue was around how exceptions are handled in CircuitPython, both in my loop code and in the ESP32SPI socket, control and WSGI code.
My code was taking any error from the libraries, and taking this as a reason to reset the ESP32. These could be genuine failures to connect through SPI, but could be that a WiFi client connection was dropped, an error in a handler function or a network timeout - all which could be retried.
Resetting the ESP32 is a bit of a strong option as it takes 6-12 seconds to start up and reconnect again.

Part of the problem here was that nearly all errors from the ESP32 SPI code were RuntimeErrors.
I made a Pull Request on github to Adafruit using the OSError hierarchy (as in [PEP-3151](https://peps.python.org/pep-3151/)) - which is still under review.
This PR should report ConnectionErrors, TimeoutErrors for those type of problems, and ValueErrors when invalid parameters are supplied.

My code and the Adafruit sample code can then be updated not to try to reset on all errors, and be a bit more selective about what can be a reset, what can be just a retry, and what may mean the code is just broke.

## SPI instability

However, there's still a problem.
My code created a server on the Pico/Airlift combination.
This would serve a web page, that through D3.js, would request updates frequently from the server, and display the result in a text box.
I made code with just a counter so I could see how many requests would be made.

Eventually, after a varying number requests, there would an SPI timeout or communication problem between the host microcontroller running ESP32 SPI library, and the ESP32 running the NINA code.
I tried the latest version of the NINA-FW, [flashing this onto the Airlift](https://learn.adafruit.com/adafruit-airlift-breakout/upgrade-external-esp32-airlift-firmware) to see if it resolved the problems, it did not.
I had already been using the most recent CircuitPython firmware on the Pico and the CircuitPython libraries.
This didn't work at all.

This will need more debugging, and may mean I need to dive deep into the code and interactions between CircuitPython's ESP32SPI library and the NINA firmware.
Which led me down to a week or so of interesting integration problems.
