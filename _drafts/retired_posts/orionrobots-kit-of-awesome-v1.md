---
title: The Orionrobots Kit Of Awesome -  5 Electronics Modules for the Arduino
layout: page
---
{% assign gallery="/galleries/orionrobots-kit-of-awesome-v1" %}
{% assign yt_width="300" %}
{% assign yt_height="169" %}
{:leftimg: style="float: left; width: 100px; margin-right: 4px"}
{:imgtitle: style="clear: both"}

If you have an Arduino, PIC or Raspberry Pi and you want some sensors and stuff to try it with, buy the Kit Of Awesome to add Voice Control, distance sensing, Bluetooth and an LED display. All come with headers/breakouts presoldered. NO SOLDERING REQUIRED!

# In the kit

![]({{gallery}}/mid/kit-of-awesome.jpg){.style="float: right; width: 100px"}

* 2 Distance sensors - avoid walls, follow stuff, react when someone gets too close!
* A Bluetooth module - Control your project with your laptop or phone.
* A Voice Control Module - Speak and have your gadget move on your command.
* An 8x8 LED Matrix Module - Show feedback, silly faces, arrows, graphs or whatever you can come up with.

# 2 Distance Sensors
{.imgtitle}

![]({{gallery}}/mid/hc-sr04-distance-sensor.jpg){.leftimg}

These are the popular HC-SR04 ultrasonic ranging module, which can be used to make wall avoiding or wall following robots They can be used to make art projects that react to proximity too. Sensing things by using sound bounced of an object, they can measure with a range of a few centimetres up to a few meters. You use the IO pins on your controller to send an initiation pulse, and the SR04 will respond with a timed pulse for the measurement.

* [Sample Code For Dual Sensor Robot with Smiley Face](https://github.com/orionrobots/explorer_face_wall_avoider)
* [HC-SR04 Detailed Tutorial](http://arduinobasics.blogspot.co.uk/2012/11/arduinobasics-hc-sr04-ultrasonic-sensor.html)

# Bluetooth Module
{.imgtitle}

![]({{gallery}}/mid/bt-front.jpg){.leftimg}
This Bluetooth slave module connects to the serial pins on your microcontroller (Tx/Rx) and allows you to create a serial connection to an Arduino from a compatible laptop, phone or other device. Use this to make remote control/phone driven robots, to return collected data to a PC. This is an HC05 module in slave mode, fully mounted on a breakout board so no soldering is required.

* [Bluetooth Module with Robot - wiring and Sample Code](/2013/11/30/bluetooth-with-the-orionrobots-explorer1-robot/)

{% assign youtube_id="SpMrGylvcs0" %}
{% include no_iframe_youtube %}

# Voice Control Module
{.imgtitle}

![]({{gallery}}/mid/voice-module-close.jpg){.leftimg}
This module is also connected to the serial port. It can record 3 banks of 5 commands, giving a total of 15 commands. You record your own commands, and each produces a different serial signal when spoken. You select a single bank at a time, although with some programming, a voice command can be used to switch to another bank. This means you can have your robot or Arduino project respond to your voice! It does not understand full speech, only simple commands, and they must be phonetically distinct (ie "right", "bright" and "white" would probably confuse it). Like the others selected for this box, the module is well documented and has been used in many Arduino projects.

{% assign youtube_id="0Zjdu_HSr00" %}
{% include no_iframe_youtube %}

* [Voice Control Module Manual](http://www.elechouse.com/elechouse/images/product/Voice%20Recognition%20Module/Manual.pdf)
* [Voice Control Module Example Code](https://github.com/orionrobots/RecordVoiceModule)

# 8 x 8 Matrix Module on Driver PCB
{.imgtitle}

![]({{gallery}}/mid/led_display_8x8.jpg){.leftimg}
This module has a brightness controlled 8x8 matrix of red LED's and a controller chip allowing you to interface with an Arduino, PIC or Raspberry Pi (note - do not power this board from the Raspberry Pi 5v). Using a 3 pin control interface, the 64 LED's can be made to display characters/letters or have each dot controlled. These make for great debug and feedback when building robots with sensors, and it is fun to have a big bright display on the project too. I've used them to great effect - with a face on a robot that winces when it senses an imminent collision.

This is based on the MAX7219 chip.

* [LED 8x8 Matrix Sample Code](https://github.com/orionrobots/explorer_face_wall_avoider)
