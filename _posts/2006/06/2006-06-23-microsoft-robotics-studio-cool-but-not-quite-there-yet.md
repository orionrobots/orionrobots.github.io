---
date: 2006-06-23 13:56:11
description: Microsoft Robotics Studio cool, but not quite there yet
tags: [robotics, robot news, robot building, programming, lego nxt]
title: Microsoft Robotics Studio cool, but not quite there yet
layout: post
---
There has been a fair amount of noise this week about Microsoft's Robotics Studio, announced as a common robotics development platform. Now this seems fairly cool, as the general idea is to be able to use .net - C# or VB(please use C#!) to program robots. Unfortunately, this is let down by the fact that (and I quote) "The other thing to clarify is that we have no intention of running our bits on MCSs in general." - that is, that the robot will have to be controlled remotely (via whatever protocol it already has) from a Windows machine.

It is worth noting, that beyond the hype, this announcement is actually an incremental improvement on previously released stuff, and not a new thing. Still it has certainly brought to the foreground something which has gone fairly quietly by until now.

It has been suggested that this will (via a remote control method) work with the [Lego](/wiki/lego.html "The best known construction toy")
[RCX](/wiki/rcx.html "The Lego Robot Command Explorer"), [NXT](/wiki/nxt.html "Legos NeXT generation robotics kit"), VEX  and the [FischerTechnik](/wiki/fischertechnik.html "FischerTechnik") Robo Interface as well as many others. Now what would be interesting is to know if this (along with the required IO devices) could be ported to smaller platforms like Pocket PC's and other WinCE/Windows Embedded systems. They can run the .net platform, but I have not had a lot of luck getting [GPIO](/wiki/io.html "Input Output") from the devices themselves.

Now if MS were to announce that they could compile down to native bytecode for the microcontrollers and let them then run standalone this would be much cooler - maybe in a couple of years that may be the case. Until then, may I suggest robot c (covered in [Beta C Programming Solution For NXT announced]({% post_url 2006-06-18-beta-c-programming-solution-for-nxt-announced %}) and SDCC as alternatives that both use C, and compile to bytecode on multiple targets, with the RCX, NXT and VEX on the former, and [PIC](/wiki/pic.html), 8051, Atmel AVR on the latter.

Also great is that Microsoft are sponsoring Carnegie Mellon University, who are relatively prolific in this field.

## Links

* [Robotics Studio on Wikipedia](https://en.wikipedia.org/wiki/Microsoft_Robotics_Developer_Studio)
* [Lugnet Announcement Thread started by Dick Swan](http://news.lugnet.com/robotics/?n=26107) - Dick Swan is the creator of fast RCX firmware.
* [The obligatory cynic thread also on Lugnet](http://news.lugnet.com/robotics/?n=26104) - Quite amusing though!

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&language=en_GB&marketplace=amazon&region=GB&placement=B082WD5YV9&asins=B082WD5YV9&linkId=e40e6e6802507d8646f3131923f1dea1&show_border=true&link_opens_in_new_window=true"></iframe><!-- lego mindstorms review 2021 -->
