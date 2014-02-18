---
created: 2006-06-23 13:56:11
description: Microsoft Robotics Studio cool, but not quite there yet
tags: [robotics, csharp, lego, rcx, nxt, vex, microsoft]
title: Microsoft Robotics Studio cool, but not quite there yet
---
There has been a fair amount of noise this week about Microsoft's Robotics Studio, announced as a common robotics development platform. Now this seems fairly cool, as the general idea is to be able to use .net - C# or VB(please use C#!) to program robots. Unfortunately, this is let down heavily by the fact that (and I quote) "The other thing to clarify is that we have no intention of running our bits on MCSs in general." - that is, that the robot will have to be controlled remotely (via whatever protocol it already has) from a Windows machine.

It is worth noting, that beyond the hype, this announcement is actually on an incremental improvement on previously released stuff, and not a new thing. Still, it has certainly brought to the foreground something which has gone fairly quietly by until now.

It has been made clear that this will (via a remote control method) work with the [Lego](Lego "The best known construction toy")
  [RCX](RCX "The Lego Robot Command Explorer"), [NXT](NXT "Legos NeXT generation robotics kit"), VEX  and the [FischerTechnik](FischerTechnik "FischerTechnik") Robo Interface as well as many others. Now what would be interesting is to know if any  of this (along with the required IO devices) could be ported to smaller platforms like Pocket PC's and other WinCE/Windows Embedded systems. They can run the .net platform, but I have not had a lot of luck getting that kind of [IO](IO "Input Output") from the devices themselves.

Now if MS were to announce that they could compile down to native bytecode for the microcontrollers and let them then run standalone this would be much cooler - maybe in a couple of years that may be the case. Until then, may I suggest robot c (covered in [Beta C Programming Solution For NXT announced](/_posts/2006-06-18-beta-c-programming-solution-for-nxt-announced.md) ) and SDCC  as alternatives that both use C, and compile to bytecode on multiple targets, with the RCX, NXT and VEX on the former, and [PIC](PIC), 8051, Atmel AVR on the latter.

What is still very cool is that MS are sponsoring Carnegie Mellon University, who
  are relatively prolific in this field.

# Links
* [Video Footage of this in action](http://channel9.msdn.com/ShowPost.aspx?PostID=206574) - Although the demo is rudimentary joystick control
* [Microsoft Robotics Studio Press Release](http://www.microsoft.com/presspass/press/2006/jun06/06-20MSRoboticsStudioPR.mspx)
* <http://msdn.microsoft.com/robotics/learn/setuphdwr/default.aspx> - Information from MSDN on hardware setup, which also reveals supported platforms.
* [Robotics Studio on MSDN](http://msdn.microsoft.com/robotics/default.aspx)
* [Microsoft Communities Discussion on Robotics Studio](http://www.microsoft.com/communities/newsgroups/en-us/default.aspx?dg=microsoft.public.msroboticsstudio&amp;cat=en_US_8C6248FF-7269-A8D9-32F8-30501C8289A0&amp;lang=en&amp;cr=US) - A heated debate on the Announcement
* [Lugnet Announcement Thread started by Dick Swan](http://news.lugnet.com/robotics/?n=26107) - Dick Swan is the creator of fast RCX firmware.
* [The obligatory cynic thread also on Lugnet](http://news.lugnet.com/robotics/?n=26104) - Quite amusing though!
