---
layout: post
title: "Learn Robotics Programming 2nd Edition - Hardware Shopping List"
description: "A shopping list for Learn Robotics Programming, Second Edition"
tags: [robotics, raspberry pi, robot, robot book, python]
---
{% include JB/setup %}

The [second edition of Learn Robotics Programming]() is now for sale. Readers have been asking for a shopping list for this book. This is for the robot hardware components. I can follow up with a tools article if necessary.

I'll try to pick outlets that ship internationally, although I am aware that many countries may have local vendors that can get far better deals. Let me know [on twitter]().

I have chosen to put the parts through the book with buying options shown so readers learn how to evaluate parts for their further robots, however, feedback has suggested a buying list would be helpful.

So I'll make a buying list, with links to buy these parts, with the proviso that the reader should still engage in the sections on specifying and making trade-offs with parts.

One part not listed is a Raspberry Pi capable USB-micro power supply. I recommend buying that in the same country to safely work with local electrical connections and voltages.

## Part List

These are arranged roughly in the order you will require them in the book.

* [Raspberry Pi Model 3a+](https://thepihut.com/products/raspberry-pi-3-model-a-plus) -> This is the main controller for the robot. 3a+ is both slim and powerful. 
* [2x16 Gb SD Cards](https://thepihut.com/products/noobs-preinstalled-sd-card) -> One for the main controller, one for the speech recognition system.
* [A Raspberry Pi Micro USB Power Supply 2.1Amps](https://thepihut.com/products/official-raspberry-pi-universal-power-supply) -> needed for the early installation of the Pi and later for the speech assistant. Be sure to get the one with teh correct specification for your country.
* [Hook and Loop tape](https://thepihut.com/products/hook-loop-tape-2cm-x-100cm) - not conductive -> A quick and simple way to attach removable or irregular shaped parts.
* [Nylon Standoff/Fastner Kit with m2.5 and M3 standoffs](https://www.aliexpress.com/item/33055524686.html) -> This should come with screws, nuts, and standoffs going from a female thread to a male thread at different lengths. Nylon to keep it non-conductive. used for mounting electronics onto the robot. You won't use the whole kit, but this is the kind of consumable item you'll want in a robotics lab.
* [Black Insulation Tape](https://thepihut.com/products/electrical-tape) -> This is used for securing a wire in the early stages of the robot, and also for making lines to follow. It's also an item a robot builder should have around.
* [2Wd chassis with motors and a roller ball](https://www.aliexpress.com/item/1005001594088733.html). I have a particular laser cut type I suggest in the book, however any sufficiently large 2wd chassis should be Ok. The motors should be gear motors, and they should have encoder wheels and slots. The chassis should have holes cut in its plate to mount electronics and sensors. Unfortunately I'm no longer able to find the models with presoldered motor wires.
* [Motor Board Supporting DC motors, Servo Motors and Passthrough GPIO](https://www.aliexpress.com/item/32551319506.html) -> The motor board should ideally be i2c, passing through the other GPIO pins, allow for separate motor and logic power, have PWM servo connections, and DC motor drivers. The chosen board also has an I2c breakout on the side. It must have a camera cable cut-out too.
* [USB Power Bank 10000mAh](https://amzn.to/3q5NArp) -> This is constrained by size, something to fit in the chassis. It should support 2.1 amps to power the Raspberry Pi and sensors. The Anker powerbank has been reliable in a number of my robots now. Bigger mAH means more time between recharges.
* [4xAA Battery Box - 2 up/2 down configuration](https://www.aliexpress.com/item/32971481065.html) -> You may need to adapt this to the chassis type, but the 2 up 2 down fits nicely between the electronics stack and the USB power bank.
* [2 x 3v3 HC-Sr04 Compatible Distance Sensors](https://www.aliexpress.com/item/32862319574.html) -> Make sure these state that they are able to go down to 3.3v power.
* [Breadboard 400x tie point Self Adhesive](https://thepihut.com/products/raspberry-pi-breadboard-half-size) -> Some of the Connections need a breadboard. This "half-size" type is adequate for most wiring needs, while not being too big for the robot. These also come with sticky foam to attach them to the robot.
* [PreCut breadboard Jumper Wire Kit](https://thepihut.com/products/jumper-wire-kit-140-piece) -> To make those connections some wires are needed. This is enough for a few robot projects.
* [Breadboard Friendly Switch](https://thepihut.com/products/breadboard-friendly-spdt-slide-switch) -> This is useful for turning off motor power.
* [Male to Female Jumper wire Ribbon](https://thepihut.com/products/premium-female-male-extension-jumper-wires-20-x-6) -> Male to female is good for connecting between the Pi and the Breadboard, and the sensors. The ribbons are useful because you can the peel off a number of connectors for different sensors, while they are still held together keep things tidy.
* [2 x HC SR-04 bracket](https://www.aliexpress.com/item/1005001291276347.html) -> These are used to mount the distance sensor onto the robot.
* [A Pimoroni LED Shim](https://thepihut.com/products/led-shim) -> This is a neat way to control a row of LED's for debug and display purposes. It makes use of the I2C pins, keeping other things free and doesn't require soldering.
* [Pan And Tilt Kit](https://www.aliexpress.com/item/1623404058.html) -> We use this to mount a movable camera, and for a sonar scan demo too.
* [2 x Speed Sensor/Photo Interruptor](https://thepihut.com/products/photo-interrupter-sensor) -> This sensor can detect the movement of our robots main wheel motors, to approximate how far the robot has moved each wheel.
* [ ICM20948 Breakout board with headers - Pimoroni PIM448](https://thepihut.com/products/icm20948-9dof-motion-sensor-breakout) -> This is the IMU board used to approxmimate the robots orientation.
* [Raspberry Pi Camera 2.1](https://thepihut.com/products/raspberry-pi-camera-module) -> The camera module is used for visual processing.
* [300mm Camera Cable](https://thepihut.com/products/flex-cable-for-raspberry-pi-camera-or-display-300mm-12) -> The standard camera cable is a bit short and can restrict connections on a robot. This longer one alleviates that.
* [Raspberry Pi Model 3 or 4](https://thepihut.com/products/raspberry-pi-4-model-b?_pos=1&_sid=36b755587&_ss=r) -> This second Raspberry Pi is for the speech recognition assistant. This can be a larger and more powerful desktop version.
* [2 mics Respeaker hat (voice bonnet should work too)](https://thepihut.com/products/respeaker-2-mics-phat?_pos=1&_sid=c030729ab&_ss=r) -> This microphone and speaker output combination is used for the speech control assistant.
* [Small speaker](https://thepihut.com/products/mono-enclosed-speaker-3w-4-ohm) -> A small speaker like this is ideal for the speech contra assistant to talk back to you.

This list has some recommended links, but you are encouraged to shop around in your country for the same product/model.
