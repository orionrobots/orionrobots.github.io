---
created: 2005-06-05 18:22:13
description: Building an amplified signal generator
tags: [electronics, soldering, maker, robotics tools]
title: Building an amplified signal generator
layout: post
---
I have been building a number of electronics items and projects recently - and once I have tested it thoroughly I will be post my instructions on freeforming a diode rectifier bridge.
Here's a quick walk through what I've been playing with recently.
Soldering iron, rectifier bridge and Signal Generators.

I treated myself to a nice new [Soldering](/wiki/soldering) Iron this week - a temperature controlled model from Maplin as well as a set of universal test leads which have already come in handy.
The new iron makes desoldering when salvaging components a great deal easier!

I have also decided to put together a signal generator, using a number of the Velleman kits from Maplin electronics.
They have a simple signal generator kit (MK105), that can produce a Sine, Sawtooth, Triangle and Square wave signals at a fixed frequency.
After building this (with my new soldering iron), I tested it and the output is pretty stable - although it is at only around 200mv.
So I then went and bought a universal 7W mono amplifier kit(K4001), which I will assemble, but I am new designing a container for them.

The nice thing is, as well as the [PCB](/wiki/pcb), all components, and building instructions, they also come with full schematics - making it an easy job to hack them.
One criticism of the K4001 is tht it fails to suggest goggles in the "right tools" section.
They have obviously not read our [Safety guide](/wiki/robot_building_safety "Robot Building Safety").
It is worth having goggles when cutting legs from components, as this is more safe and effective than just pointing things away.
Equally, PCB clamps, or "helping hands" clamps are highly recommended when soldering in components.

The idea of the container is to have the amplifier and the signal generator in one unit.
Rather conveniently - the signal generator comes with a transparent plastic carry box.

I am going to place a 9v battery compartment inside this plastic carry box along with a cigar style 2.5mm power adaptor.
I'll then add a set of 3 speaker terminals.
The speaker terminals are easy to connect with jump leads, and have clear polarity indicators.

So I can still use the amp in standalone mode, I chose not to internally wire the generator to the amp. The case exposes the generator output, leaving the amp inputs and outputs accessible too.
This gives maximum flexibility.

I will replace the volume control trimpot on the signal with a nice potentiometer and a knob on the outside of the case.
The choice of signals is currently set with a jumper, which I will replace with a 4 way dip switch or slider switch mounted on the case.
I also intend to introduce a method of altering the frequency and duty ratio of the signals.

This project cost around £40 or £50 in total, which is significantly cheaper than a commercial function generator (which are easily a few hundred pounds).
The project is much simpler (and safer) than using a PC sound card.

I have been using [CAD](/wiki/cad "Computer Aided Design") to plan the location of the external components - I have got the internals worked out already.
Once I have it completed, I will post the photographs.
