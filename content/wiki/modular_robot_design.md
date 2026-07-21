---
layout: page
title: Modular Robot Design
tags: [robot building]
date: 2005-10-11 23:39:35
---
There are many advantages to be had by using modular design and building techniques with robots.

## Reusability

First is the advantage of reusing resources. Some electronic, mechanical and other parts are expensive so [Part Reuse](/wiki/part_reuse.html "Part Reuse") is a desirable property.

If you spend time designing a system to perform a task, and you are aware (with some forethought) that you may use this component of the design again, try to modularise it. This is a concept common in software design, and applies just as well to hardware.

## Upgrade, Replace and Repair

Modules should be designed so they has some generic properties which would allow another module of a different kind to be substituted. This allows you to upgrade, repair and modify modules easily.

## Design and Building

While it is true that modularising might increase the complexity, it may actually help the other way. It is often easier to deal with a number of well defined connected systems, than one large unwieldy bulk of a system.

Think of bite-sized pieces. Designing a small power board, then a motor board, then a sensor board is easier than designing a power/motor/sensor board.

As well as simpler design, it will also make for simpler assembly. This mensa you can build each section as the complete module. You can test them as separate parts, and if things don't work out, you will probably only need change one modules as opposed to many.

## Considerations

When building modules think about how they will connect. If it is electronic or mechanical try to use readily available connectors which can be easily disconnected provided they have enough friction to hold when needed.

It will help to start with a block diagram of different electronic, and mechanical systems. Parts of this block diagram may be enlarged and further detailed in other places. This means that a larger module may well be composed of some smaller ones.

A system or larger module will have some specific parts as well as modules, don't be afraid to do that, but when you start building 5 similar robots with minor variances, then perhaps you can take the similar sections and make this a module.

Ensure that the electronic interfaces are kept as simple as possible, over-complicating modules will mean it becomes much harder to use them in future. It is often a good plan to use well known and standardised connection systems and protocols, for example [RS232 Serial](/wiki/serial_data_stream.html "Serial Data Stream"), or [Universal Serial Bus](/wiki/universal_serial_bus.html "Universal Serial Bus"). This goes for mechanical connections too.

If you are making a mechanical connection, for example a driving shaft, consider what forces it may undergo. Not just the rotation (in this example), but any shearing or bending stresses it may endure in normal use. This could be the difference between two sections holding well, or flying apart as the axle breaks.

[Lego](/wiki/lego.html "The best known construction toy") and other Construction Toys are excellent modular building systems. You can use them to build larger modules and further embody this concept.

## Disadvantages

The big disadvantage of modules is that they require a great deal more forethought, research and design. But these are key qualities a good robot builder should be fostering anyway.

Another consideration are that module interfaces may add unnecessary weight and complication. But good design should keep you away from that.

## When not to use modules

If you are building a very simple or small robot, with few parts then obviously you do not need to go full on into a module. However, as soon as you find that you need block diagrams, then you probably have modules.

[Building Tips](/wiki/building_tips.html "Hints and helpers for actually building robots, and other stuff.")
