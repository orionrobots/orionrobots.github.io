---
date: '2020-08-24'
description: Parts needed for Chapter 6 in the book
layout: post
tags:
- robotics
- raspberry pi
- raspberry pi projects
- raspberry pi 3 projects
- robot
- electronics
title: Parts for Learn Robotics Programming Chapter 6
---
I have been asked by some readers of my book, Learn Robotics Programming (first edition), what parts I've specifically used for chapter 6.
I will start out by saying that the full intent of the book is that a reader learns how to find parts, including alternative ones,
and adapt them to their robot. But I also understand that can be overwhelming for a first build.

So what is in Chapter 6? It's titled Robot Building Basics. It talks about Wheels, Power and Wiring. It is the chapter where the reader is encouraged to choose a motor controller, look at how to power the robot, conduct a test fit of parts, and then assemble the base for their robot.

So what parts do I use? (Amazon links here are paid links)

* The Raspberry Pi 3b+.
* The chassis kit - the model I used specifically is listed as a ["2WD Robot Smart Car Chassis"](https://amzn.to/2YLyYlp).
    * Any 2WD platform with motors you can drive at 5-7v which is big enough will do.
    * Some may require you to solder on the leads.
* [AA battery box](https://amzn.to/3gmI25X)
    * This is the 4xAA type. Cables are pre-attached, and it is the reduced space kind.
    * The chassis kits come with AA battery boxes, but they are usually the kind that need more space.
* USB Battery pack - I use the [Anker power core 10000mAh](https://amzn.to/3hrHRrh).
    * Used in a few of my robots.
* Motor controller: this is trickier to find.
    * A completely compatible board is available at:
        * <https://amzn.to/34G4ll9>
        * <https://amzn.to/3aUCQFa>
    * The Servo motor ports are out to one side.
    * The code in the book is compatible with PCA9685 based boards.
* [Stand off kit](https://amzn.to/3lgYU1w)
    * Contains M2, M2.5 and M3 stand offs and spacers.
* [Dupont Jumper wire kit](https://amzn.to/2EczdyN) - Pimoroni jumper jerky is great here too.
* [Hook and loop tape](https://amzn.to/2CV7cLj)

## Why the Raspberry Pi 3b+?

What about the 3a+ and the 4?

The book has been written with this Raspberry Pi model in mind. A 3a+ (released after the chapter was finalised)
 will work fine. Chapter 3 discusses other models like the Zero W, which may be a bit underpowered for some later chapters.  The Pi 4 was also not released when the book was written. It will have the raw processing power for the robot, but may give less play
 time as it gets through more batteries.
