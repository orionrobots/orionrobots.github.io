---
layout: page
title: WiFi
tags: [computing, robot building]
date: 2005-05-28 17:08:35
---
This is a system used for short to medium range radio communications between local computer systems. It is actually an umbrella term, used for a number of ISO standards 802.11a,b and g.

It has a fairly high rate of 11Mbps - which is faster than some wired [LAN](/wiki/lan.html "Local area network") systems.

The system can use security keys to ensure only desired machines can connect to the network, or it an be left open to allow anyone to connect.

A [wireless](/wiki/wireless.html "Wireless") network can be made of ad hoc devices which are all peers, or an Infrastructure system with access points and a central router.

In [robotics](/wiki/robotic.html "Robotic"), this can mean you could program a controller, or control a bot from a PC without the usual line of site in [IR](/wiki/ir.html "Acronym for Infra Red") systems like the [Lego RCX](/wiki/rcx.html "The Lego RCX") and the limitations of having a wired [serial](/wiki/serial_data_stream.html "Serial Data Stream") or [parallel](/wiki/parallel_port.html "Parallel Port") connector like the [OOPic](/wiki/oopic.html "OOPic").

One nice thing about this, is once all the keys and connection is established, then TCP/IP is layered on top so normal network apps can sit on it fairly easily. This means your code can be tested on a wired communication system first, and keeps it quite simple.
