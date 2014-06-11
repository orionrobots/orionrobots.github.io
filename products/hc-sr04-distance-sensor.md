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
---
{% include social-sharing %}

{% assign zg_gallery=page.gallery %}
{% include zoom_gallery %}

This is a simple but capable distance sensor - able to sense a 30 degree range, using 2 IO pins on your microcontroller.

Like all the products on the Orionrobots shop - this requires no soldering to get it working, and it comes with 4 simple hookup cables to connect it directly to the Arduino so you can get trying distance measurement really quickly. It uses 5v logic.

Contents:

* The HC-SR04 Sensor board
* A ribbon of 4 male-female breadboard connectors.

This is what can be done with 2 of these, a few spare bits and an Explorer 1 kit:

{% assign yt_width="300" %}
{% assign yt_height="169" %}
{% assign youtube_id="ElXsXAcqrUE" %}
{% include no_iframe_youtube %}

Read this to work with it and an Arduino: [Arduino Basics: HC-SR04 Ultrasonic Sensor](http://arduinobasics.blogspot.co.uk/2012/11/arduinobasics-hc-sr04-ultrasonic-sensor.html)

[HC-SR04 Datasheet](HCSR04.pdf)