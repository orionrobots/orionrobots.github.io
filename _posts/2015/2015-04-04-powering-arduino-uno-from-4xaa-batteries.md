---
date: '2015-04-04'
layout: post
tags:
- arduino
- electronics
- servo motor
- robots
title: Powering An Arduino Uno and Servo from 4xAA 6v Batteries
---

I started this by wanting to test all my servo motors, to see that they worked, and if any in my robot cupboard had been modified for continuous rotation. None had. However, I had a 6v, 4xAA power supply that I intended for use in building a robot with the esp8266.  After demonstrating the motors, my little one asked "why does it need to be connected to the laptop if it already has batteries?"

I had a think about this. The regulator onboard the Arduino and a 7805 will not deal with 6v. It is too high to safely use unregulated with the 328 without damaging it, and too low for the 7805 to regulate - it wants about 7v. Awkward. I could go on the internet, and buy a boost-buck regulator, although it would be pricey, and not quite satisfy the immediate gratification.

<div class="embed-responsive embed-responsive-16by9">
<iframe width="560" height="315" src="https://www.youtube.com/embed/GdwwRB3dKKE?rel=0" frameborder="0" allowfullscreen="True"></iframe>
</div>

I looked around my store cupboard, and seeing the bag of diodes, it hit me that I could probably use a couple of diode drops to get close enough for it to work. Each diode, these are 1n4007's, will drop about 0.6v. Two of them makes 1.2v.

6v - 1.2v = 4.8v

See the video for more information on it, and to see it working.

![Arduino with AA batteries](/galleries/2015-04-04-powering-arduino-uno-from-4xaa-batteries/arduino4xAA6v_bb_small.png){:class="img-responsive"}

The supply works, however, I later found some issues with the noise from the Servo motors - which I'll discuss in another video.
