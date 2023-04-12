---
layout: post
title: Armbot Follow Up
tags: [armbot, pycon, raspberry pi, robot arm, robot building]
todo: github code link, youtube link.
date: 2014-09-24 12:00:00
---
After Pycon UK, I continued work on armbot. Armbot needed reassembling, as being so big, it has to have the wheels and arm unbolted for transporting.

Once put together, my first thing was to get armbot on python3. I'd been doing stuff in 2.7 before, but freshly inspired, I may try to convert many of my projects to 3.

This was not without a bit of discovery. I use pyserial to communicate with the arm. Pyserial in python2 allows you to send strings, because in python 2, the difference between characters and the bytes representing them is unclear (and frankly a bit iffy). In python3, it is made clear. You have to encode a character string to a `bytearray` to serialise it to any kind of device or many output stream types, including the pyserial connection.

I made a wrapper for the write that took the string, encoded in utf-8 (my habit when using encodings, use utf-8 and you probably don't have to consider it), and a similar wrapper for reading back and decoding. This worked nicely.

I then started trying to get simultaneous movements, and added some demo functions to the arm library. I used the demo to get it to pick up and grab an object.

Next step will be to get this code running on the Raspberry Pi - which should be fairly simple. I should soon be able to coordinate arm and wheel movements together!

I am still not using the ability of the arm to self calibrate, and the open feedback. Although I've created functions to get it, I'm yet to do this properly. One thing I am worried about is that battery condition may affect this loop adversely - although hopefully the regulator on the md25 is stable enough with a dropout curve to make this totally obvious and not gradual decline.
