---
layout: post
title: Creating Custom Sensors For The Lego RCX
date: 2004-11-16 21:01:45
tags: [robots, robot building, electronics, lego technic, mindstorms, lego rcx, sensors]
---
The process of making your own home-made sensors for the Lego RCX is not only possible, but a well-documented and well-walked path.

[Interfacing with Stud Based Lego Electronic Adaptors](/wiki/adapting_lego_connectors.html)

There are two main types active and passive. You need to choose which type of sensor you will require fairly early in your design.

## Passive Sensors

A simple sensor like a touch sensor or variable resistance type of sensor.

For passive sensors - you simply need to construct the right connectors. Other than that- you may want to use a combination of resistors to scale and calibrate your sensor.

## Active Sensors

An active sensor actually requires power for IC's and intelligent circuits. As such they are somewhat more complex to build.

The Lego RCX sensor pads have only 2 connections. In the passive sensor - one is the sensor input, and the other the output, but you cannot get a constant voltage - as you require power, ground and signal connectors. What the RCX does is to use one line for both power, and signal - by alternating rapidly between the two uses.

You will need a capacitor to store power, and an output channel going back down the power channel between phases.

The best explanation is probably at <http://www.philohome.com/sensors/legorot.htm>.

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&language=en_GB&marketplace=amazon&region=GB&placement=B082WD5YV9&asins=B082WD5YV9&linkId=e6031a2f307d66e1f776c2f804796727&show_border=true&link_opens_in_new_window=true"></iframe>
