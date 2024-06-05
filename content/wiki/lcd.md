---
layout: page
title: LCD
tags: [electronics]
date: 2005-07-14 12:29:54
---
This is a common type of flat display, used often in Phones, Digital Cameras, Calculators, wristwatches and more recently desktop computer flat screens.

## Using them in robotics

There are a number of commonly available modules, usually serial controlled, on the market. They can be bought from Maplin, RS and a other electronic part retailers.

Some are simply based upon [RS232](/wiki/rs232.html "A serial communication standard") serial, and more advanced ones use [I2C](/wiki/i2c.html "Inter Integrated Circuit bus") bus connectors.

When you are purchasing one, you need to consider carefully the requirements - how big the display is, in rows and columns of letters, or in pixels (picture cells) if you are displaying images. You need to take into account the viewing angle - many of these only display anything if you are in the range of view.

Think through if you are going to need backlighting, or more expensive reflective systems. The backlight is an additional weight, and power concern - and you may be able to design it out of the system, or use a bright white [LED](/wiki/led.html "Light Emitting Diode") instead.

As always in robotics, the three major factors are weight, power consumption and cost. In most cases - these are simply used during debugging/development, and need not be in the robot on the field. Maybe then you are better off just using a serial link with a terminal.

(paid links)

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&language=en_GB&marketplace=amazon&region=GB&placement=B07PWWTB94&asins=B07PWWTB94&linkId=80b7c5aae6535d1c57e0923aa93c3be8&show_border=true&link_opens_in_new_window=true"></iframe>

## Alternatives

There are similar flat screen devices like TFT - Thin Film Transistor, Plasma displays and the emerging OLED technology. If you are simply displaying numeric, or alpha-numeric, it might be easier just to use an LED display.

(paid links)

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&language=en_GB&marketplace=amazon&region=GB&placement=B076BJZ42H&asins=B076BJZ42H&linkId=53f94746de85517a5a76e8a5fb513142&show_border=true&link_opens_in_new_window=true"></iframe>
<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&language=en_GB&marketplace=amazon&region=GB&placement=B0777HHQDT&asins=B0777HHQDT&linkId=be137443ac55d764d0d07910b861cf8e&show_border=true&link_opens_in_new_window=true"></iframe>
<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&language=en_GB&marketplace=amazon&region=GB&placement=B07D9NVJPZ&asins=B07D9NVJPZ&linkId=54d73924ae895ccbf7c2f3b98c31392d&show_border=true&link_opens_in_new_window=true"></iframe>

## How these work

It consists of a panel of a particular arrangement of crystals. They are designed so they are polarised - that is they let light waves through in only one orientation. If you take two pieces of polarised glass, and place them at right angles, the result will be totally opaque - you could not see through it at all. The polarised crystals change their orientation when an electrical current is applied - so this means you end up with opaque, and transparent areas. Against a background, and when controlled - these areas make up the digits, or pixels of an LCD display.

A basic colour LCD display is simply the same system, but with a background consisting of a repeating pattern of red, green and blue areas under the Liquid Crystal - which then are shown or hidden, and the eye mixes these - and sees full colour - this is exactly the same principle as a colour CRT television.
