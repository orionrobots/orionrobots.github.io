---
layout: post
title: Making a simple 3.3v Supply
tags: [power supply, electronics, esp8266]
---
If you are working with small devices, you will need power supplies for them. 5v is generally easily supplied by a USB port (be careful here - get it wrong, and you may damage your laptop). 3.3v holds a few more challenges.

I wanted to power the esp8266, and it took a few attempts to get it right. 
I've got footage, circuit diagrams and datasheets for each attempt, the limitations of it, and details of what worked brilliantly.

# Using the TS2950CT
First up - the TS2950CT - capable of 150mA max (this was the flaw).
This is an easy to use regulator in a small TO92
 
 Making a 100-150mA max 3.3v supply based upon the TS2950CT regulator and a 3.3uF cap. Source is 4xAA batteries. The LED is driven through a 100R resistor. An update about the 5v supply with the Arduino + Servo. The supply is underpowered for the esp8266. I'll add a later video on finding that.

Datasheet for TS2950CT: http://www.farnell.com/datasheets/50395.pdf