---
created: 2007-01-10 15:19:38
description: OSX, NXT, BlueTooth and Ruby - A match made in byte heaven?
tags: [robots, programming, bluetooth, lego, nxt]
title: OSX, NXT, BlueTooth and Ruby - A match made in byte heaven?
layout: post
---
Ruby, if you have never come across it, is an interpreted language which is [object oriented](/wiki/object_oriented.html "Object Oriented"), very easy to write and understand, and has some very good roots, such as Perl, and [Smalltalk](/wiki/smalltalk.html "An Object Oriented Programming Language"), with some aspects that are similar to the best of Java and [Python](/wiki/python.html "Python"). It is a very forgiving language to program in, and the kind where 5 lines of Ruby can do what may take 500 lines of Java or [C](/wiki/c_language.html "A very common and popular programming language") code.

Now some clever NXT'er (is that a word?), Tony Buser, has now put together a Ruby module for communicating with the [NXT](/wiki/nxt.html "Legos NeXT generation robotics kit") via [bluetooth](/wiki/bluetooth.html "Bluetooth"). This control set up is in a kind of macromode, where the PC is using bluetooth to read sensors, and set actuators, but may also be adapted just to provide prompts to a program on the machine. It is not however, a Ruby interpreter that runs on the NXT. It is in many ways a similar setup to Microsoft Robotics Studio (MSRS).

It runs nicely in OSX, and probably Linux, once you have paired your NXT and setup a bluetooth serial port connection in /dev. I cannot say what its compatibility in Windows would be like, as although Ruby runs in Windows, the serial port and bluetooth may be much harder to deal with. Windows does not have any structure equivalent to /dev.

I am not yet sure of how Tony intends to license the project going forward, but I will be watching this one with interest. Its definitely usable, although there are a few things that may need to happen before prime time, including documentation.

## Links

* <https://github.com/zuk/ruby-nxt> - The current module source for browsing
* <http://news.lugnet.com/robotics/nxt/?n=58> - Announcement of this project on [lugnet](/wiki/lugnet.html "Lego Users Group Network")

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&language=en_GB&marketplace=amazon&region=GB&placement=B082WD5YV9&asins=B082WD5YV9&linkId=e40e6e6802507d8646f3131923f1dea1&show_border=true&link_opens_in_new_window=true"></iframe><!-- lego mindstorms review 2021 -->
