---
layout: post
tags: [electronics, raspberrypi, lights-up, code, programming]
title: Pi Bakery and Scroll Phat
---
In March 2017, I attended the Raspberry Pi Birthday party in Cambridge. While there, all attendees got a goodie bag each day. In my goodie bag was the rather awesome Pimoroni Scroll PHat - a Raspberry Pi Zero sized hat which uses an I2C chip to control a grid of LED's, allowing you to scroll messages or graphical stuff across them.

One of the issues I find with the Raspberry Pi is the requirement for a Mouse, Monitor and Keyboard - KVM. Which if you are on the go, or looking to reduce setup time, is a little inconvenient. So I was scouring for a way around it. In theory, if you can get networking going by mounting the SD card, then find your Pi by having set it's hostname, or by logging into your router to get it's IP, you may be able to use it headlessly.

At the PiParty however, I spotted people at the RealVNC stand with a Raspberry Pi Zero connected via a USB cable to a PC. I should explain at this point that the Raspberry Pi Zero does not have an ethernet adaptor, and before the Pi Zero W, did not have WiFi. However, they had clearly linked this up to a demonstration laptop, showing VNC controlling a widget connected to it via a gui.

<div class="embed-responsive embed-responsive-16by9">
<iframe width="560" height="315" src="https://www.youtube.com/embed/MAqpEKMTPKs" frameborder="0" allowfullscreen="True"></iframe>
</div>
