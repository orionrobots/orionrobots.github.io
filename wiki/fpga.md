---
layout: page
title: FPGA
tags: [electronics]
date: 2005-10-06 18:08:32
---
Otherwise known as Field Programmable Gate Arrays - this takes the concept of [Deferred Design](/wiki/deferred_design.html "Deferred design") much further than a [MicroController](/wiki/microcontroller.html "A programmable digital controller").

It is the term "Field Programmable" that refers directly to [Deferred design](/wiki/deferred_design.html "Deferred design"), that is that these could be reprogrammed in the field, after leaving the manufacturer.

The thing about a MicroController is that you are designing a program to deal with things, which of course you may revise, and debug later. But if you have something that is incredibly simple in hardware, but difficult in code, and you _still_ want deferred design - then these are the way forward.

The concept of actually designing hardware -control lines, gates, switches etc with a simple programming language, and being able to rewrite it when necessary - is very powerful. The nice thing about hardware is you can create dedicated pathways, or more powerful constructs.

There is very little to stop you designing a small MicroController on your FPGA. Indeed there are some places with [open source](/wiki/open_source.html "Products and packages which are generally free.") patterns for exactly that purpose.

You may program these devices using a language called Verilog. One important thing to remember- is this is not a sequential language like C, but a hardware system - where every line is functioning at once.

It can be fairly interesting sequencing something, but there are methods to achieve that.

Expect to see these cropping up in PC hardware, where as well as flashing [firmware](/wiki/firmware.html "Software burned into a non volatile memory chip") in a device, you may also flash the FPGA and alter it a little more fundamentally. This ability may drive down pricing, and allow for upgrades down the pipe. Beware though - this may lead to bugs being rolled out and fixed later.
