---
date: '2022-02-08'
description: Quick tips for Raspberry Pi Pico
layout: post
tags:
- raspberry pi pico
- robot building
- rp2040
- electronics
- robotics at home
title: Raspberry Pi Pico USB tip
---
If you are doing a lot of programming with the Raspberry Pi Pico, especially with a mobile platform like a robot, then you will be frequently unplugging your Pico.

It uses a USB Micro port, which can start to feel less like a positive connection.

There are a few ways to make this easier:

## Unplugging from USB to reset

You need not unplug the Pico to reset it.
You can add a button between pin 30, the RUN pin and Ground, and press this to reset Raspberry Pi Pico. One neat way to do this is the Captain Resetti accessory from Pimoroni, cheap and easy to solder on as a shim to a Pico setup.
In a pinch, you can just have a breadboard wire you connect between the RUN pin and ground.

## Unplugging for movement

If you need to unplug so you can move the robot around, or you have stateful sensors you need to reset, consider adding a USB-C female to USB-micro male adaptor.
The USB-C connector will be changed more often than the Pico, and means the Pico does not wear out.

This does feel nice and convenient, however has a couple of downsides:

- These adaptors are priced fairly similarly to the Raspberry Pi Pico itself. However, once you've added headers, uploaded your code and made it your own it isn't quite so expendable.
- It will add a few centimeters to the port of the Pico so it will stick out more.

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&language=en_GB&marketplace=amazon&region=GB&placement=B071W8WQBD&asins=B071W8WQBD&linkId=05784ed0397ffa0baa914c4d6fec9e10&show_border=true&link_opens_in_new_window=true"></iframe>
