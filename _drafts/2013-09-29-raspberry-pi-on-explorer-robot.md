---
created: 2013-09-29 13:00:00
description: Raspberry Pi On The Orion Explorer 1
tags:
    -robotics
    -orion explorer 1
    -raspberry pi
    -linux
    -python
    -bluetooth
    -pycon uk 2013
title: Orion Explorer Raspberry Pi
---
This year, I attended PyCon Uk, the Uk Python convention.
The last time I attended it was the inspiration needed to turn the robot ideas I had, into the robot shop with the Orion Explorer 1.

This year, while there, I made time to do a Raspberry Jam. This was playing with Raspberry Pi's with a group of Raspberry Pi tinkerers.
We did some fun stuff with minecraft, completely unrelated to robots, until one group linked a quad copter with it!

I started tinkering with an rPi on the robot, and another pycon attendee.
We first got it all plugged in with a usb power pack I'd picked up in a local Maplin as the Raspberry Pi needs separate power. the Raspberry Pi is a bit of a hog, and more sensitive to noise than the Arduino.
I then wired it in to the motor controller, and pre-emotively, two sonar distance sensors.

<img src="https://elinux.org/images/2/2a/GPIOs.png" height="200" align="left" style="left-padding: 4px"/>
We then got a bit stuck on getting the Bluetooth serial adaptor to work with it. This is a problem I remedied offline later
Using the <a href="https://elinux.org/RPi_Low-level_peripherals">rPi gpio diagrams</a>, gpio code ref and my Arduino motor control code, we got the wheels turning.
Note that the image PIN numbers are for BCM mode.

Although tethered, getting it moving was good fun, and once I'd done the wiring, letting someone else play with the code was good fun too.

Following Pycon UK, I started tinkering with the frustrating Bluetooth module.
I learned a trick where jumpering the rx and rx pins gives an echo, so I was able to independently verify that the Bluetooth module worked, and the UART pins on the Pi worked.

I spent time tinkering with level converters, although I'd read that this module should directly work with the 3v range of the Pi.
The breakthrough came when I reread the full data sheet for the Bluetooth module. It boots at 9600, regardless of the rate you connect from the other end.
I was expecting 115200 throughout. Once I switched the Pi to expect 9600, then I easily got a Linux terminal connection to it. This meant I could untether it!

## Turtle Api

I expanded the simple motor control code to more fun Turtle style code, although turning is in seconds and not degrees. I was then able to shoot this video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/U8458u-jilI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true></iframe>

Yes it was tricky trying to film the robot and laptop at the same time.

Here is a close up of the wiring and which I've used. <close up where?>
Although the breadboards make it look complex, I've just used them to account for the gender of the jumpers and simplify it, yet again popping a label on the breadboard with the PIN numbers.
<Close up of the label. - where?>

I've also been experimenting with the distance rangers, more on that in another blog post.
