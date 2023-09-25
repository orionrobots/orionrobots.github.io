---
layout: page
title: Universal Serial Bus
tags: [electronics, computing]
date: 2007-01-28 16:14:59
---
Otherwise known as USB, this has become a very simple and well developed
way of connecting computer devices. From the name, you may deduce that
it operates with a [Serial Data Stream](/wiki/serial_data_stream.html "Serial Data Stream") protocol.

USB has a fairly detailed standard, and beginners should probably start
with all-in-one chipsets and consider Jan Axelson's "USB Complete".

A connection following the USB standard dictates that one end will be a
"host" and the other a "device". Only a host may have devices connected
to it. For example, a PC is a host, and a USB hard drive would be a
device. It is for this reason that the [Lego](/wiki/lego.html "The best known construction toy")
[NXT](/wiki/nxt.html "Legos NeXT generation robotics kit") cannot be
connected to a USB 2 hard drive. If a connection with a protocol that
treats devices as peers is required, USB is not suitable.

One big advantage to USB is that it was designed to be [Hot Pluggable](/wiki/hot_pluggable.html "Hot Pluggable") though do not
presume every device works this way. Some operating systems will offer
to restart when you plug in a new device anyway.

USB Standards stipulate the basics of the electronic connection, timing,
power, device identification and the signalling. It also has standards
for Disk-like devices, and human-interface devices like keyboards and
mice. By producing hardware that conforms to these standard
specifications, a manufacturer can save time by not needing to produce
drivers. This is useful to a robot builder, because it means a lot of
assumptions can be made about a device if it conforms.

## Phidgets

Phidgets are a range of actuators that can be connected directly to a
computer. They could be used with a laptop or MiniMac to produce a
rather large and expensive robot. While they are handy, and simple, they
are very costly, and require an on board computer.

With no exceptions, a
[microcontroller](/wiki/microcontroller.html "A programmable digital controller")
and a set of servo's and motors is a more flexible, smaller and cheaper
(by orders of magnitude) option, although they do take a little more
effort. That even includes kits as extensive as the [Lego](/wiki/lego.html "The best known construction toy") [NXT](/wiki/nxt.html "Legos NeXT generation robotics kit").

## USB and Microcontrollers

When evaluating [microcontrollers](/wiki/microcontroller.html) that
boast USB, be clear on whether that is USB host, or USB device. Only a
host may have devices attached to it, and most controllers are merely
devices. As mentioned above, the [NXT](/wiki/nxt.html "Legos NeXT generation robotics kit") allows a PC
to upload to it, or control it via USB, but would not be usable with Phidgets.
