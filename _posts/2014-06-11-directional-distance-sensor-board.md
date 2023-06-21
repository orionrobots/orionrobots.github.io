---
title: Idea - a directional distance sensor board
tags: [sensors, arduino, orion explorer 1, i2c bus, robotics at home, robot kit]
layout: post
---
I've been toying with different ways to make adding the sensor to the robots easier.
While a breadboard is flexible, the wiring is complicated for less experienced users, and its a bit tricky to get the angles right.
Distance sensors don't operate best when both facing forward.

I've designed a circuit board just to assist with this.
It would be designed for solderless connections based on the 2.54mm/0.1inch standard seen on breadboards, headers and the Arduino.

I plan to tie pins together to reduce IO, and included in a voltage shifter so it will work with 3.3v and 5v controllers.

I could go further, and use an AT Tiny to reduce to an i2c connection, which as long as I have the sample code around would work.
In the case of trying the sonar with Raspberry Pi, this would help as the Raspberry Pi doesn't really have the interrupt on IO capability needed to be precise with it.

I've played with the designs in KiCAD PCB, and once I am happy I am probably going to place them on github.
I am not sure how much interest the community has in the board as its mostly a wiring and mechanical helper.
I'll only consider physically making any other than my own sample board if there are enough takers.
It would probably make sense as a kit with 2 sonar distance sensors to attach.

So leave comments, would you be interested in it?

I'll provide some proof of concept images to give an idea of the board soon.
