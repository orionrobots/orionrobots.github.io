---
layout: post
tags: [robots, electronics, arduino, 4tronix, jonathan, servo]
title: Building a 4tronix UnoTron Robot
---

The 4tronix Unotron robot is an unusual but fun design for a robot chassis. It uses a DC motor for one wheel at the back, and has 
two front wheels mounted on a servo plate - which is turned to provide steering.

The robot was a kit I bought some time ago - from ebay some time in 2013. I have a collection of various robot things to assemble 
and build - and this one I let my son Jonathan build with me. In this he gets handy with a screwdriver, and also finds yet more laser-cut backing to remove.

The kit is normally used with an Arduino Uno and a motor shield. However, I went a bit different and used an 
[Elechouse 15a Motor Driver](http://www.elechouse.com/elechouse/index.php?main_page=product_info&cPath=74&products_id=2240) board.
This board mounts an Arduino Nano, it has 2 DC motor control channels with a 16Amp current per channel, an I2C breakout. All the Arduino IC pins 
are broken out as GVS - Ground, Volt, Signal - an arrangement very handy for Servo motors and some sensor types. It has screw terminal inputs 
for the battery voltage. 

![Elechouse Board close up](http://www.elechouse.com/elechouse/images/product/wifi%20car%20driver/inter.jpg)

Jon's main understanding is that he was building a robot, which he finds fun.

See the build below.

<div class="embed-responsive embed-responsive-16by9">
<iframe width="560" height="315" src="https://www.youtube.com/embed/HXp9rlYAJKk" frameborder="0" allowfullscreen="True"></iframe>
</div>