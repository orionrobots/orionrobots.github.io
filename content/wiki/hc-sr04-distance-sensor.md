---
gallery:
    parent: /galleries/hc-sr04-distance-sensor/
    initial: hc-sr04-distance-sensor.jpg
    width: 400px
    height: 300px
    images:
        -
            src: hc-sr04-distance-sensor.jpg
            alt: HC SR04 Distance Sensor
layout: page
title: HC SR04 Distance Sensor
tags: [arduino, distance sensor, microcontroller, robot building at home, robotics at home, sonar ranger module, raspberry pi, raspberry pi pico]
date: 2014-11-06
---
The HC-SR04 is a simple but capable distance sensor. It is able to sense a 30 degree range, using 2 IO pins on your microcontroller. They are sensitive from 4cm's to around 3 meters, with sub-centimeter measuring accuracy.

It requires no soldering to get it working, and it needs 4 dupont cables to connect it directly to the Arduino so you can get trying distance measurement really quickly. There are 5v logic models which work directly with Arduino type controllers, butt require level shifting to work with 3.3v logic like the Raspberry Pi, the Pico and esp32. There are also HC-SR04P models that can operate at 3.3v logic.

With two HC-SR04 sensors you can make robots that can avoid obstacles directionally, and get around 90 degrees of coverage. With more, a robot with the right code could start to map it's surroundings.

This is what can be done with 2 of these, a few spare bits and an Explorer 1 kit:

{% include youtube_responsive, src:"https://www.youtube.com/embed/ElXsXAcqrUE" %}

Read this to work with it and an Arduino: [Arduino Basics: HC-SR04 Ultrasonic Sensor](http://arduinobasics.blogspot.co.uk/2012/11/arduinobasics-hc-sr04-ultrasonic-sensor.html)
