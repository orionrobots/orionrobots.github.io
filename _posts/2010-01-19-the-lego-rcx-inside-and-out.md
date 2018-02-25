---
created: 2010-01-19 06:44:06
description: The Lego RCX, Inside and Out
tags: [robots, robotics, lego, rcx, mindstorms, microcontroller, ir, technic]
title: The Lego RCX, Inside and Out
layout: post
---
Since I have written plenty on the Lego RCX, I have decided to distil the many different articles into one article in one place.

This contains info on programming an RCX, buying a Mindstorms Kit, adding your own sensors and powered devices, opening the RCX up, getting the RIS software and IR tower working on newer OS's and I will be collecting up and adding more in the next few weeks.

# Collected Details For Using The Lego RCX

<img src="/galleries/2010-01-19-the-lego-rcx-inside-and-out/lens8960751_1328563452-Lego-RCX-In-Use.jpg" class="pl-spacing" alt="">

The Lego RCX is a superb microcontroller, genre defining- and this is all about the amazing things you can do with the device and building awesome stuff (like robots!) with Lego. Find out here to get up close and inside the RCX.

Included is some basic info on the RCX device - what it looks like, what kits it was part of, and why I think Lego Mindstorms was genre defining.
Also is information on programming and my personal favourite way to program the RCX.

I have included information on opening up the RCX so you can get inside it and see what makes it tick - this can serve either as clear instructions on taking a look and putting it back together, or taking a look at the closeups and chip identifications to save you having to butcher your own RCX. Since they have become rare, there is some info and links to places to buy an RCX so you can reproduce the experiments here and generally have fun playing with it.

On the more advanced side here, there are circuit diagrams for interfacing with the RCX for getting power from both motor and sensor ports, and also for building active sensors. Finally there are links to other sites and books with a great deal more information to get the best out of this cool toy.

Although it is dated, succeeded by the NXT, it can be remembered as one of the great things created by Lego.</div>

## Lego RCX Basic Details

<img class="pl-spacing" src="/galleries/2010-01-19-the-lego-rcx-inside-and-out/draft_lens8960751module78783391photo_1328563575-building-robot-with-lego.jpg" alt="" title="">
The RCX (Robot Command eXplorer) is a Lego computer, capable of controlling 3 Motors, or more with some tricks, and respond to inputs from a 3 or more sensors.

The version 1.0 RCX has Lego part number 884u and houses a Hitachi H8 microcontroller.

It comes as part of the Robot Inventor Sets (RIS 1.0, 1.5 and 2.0), which included an IR computer connection (9-pin Serial or USB), many technic building bricks, motors, sensors, robot building instructions, a test mat and full windows Mindstorms software to program it.

It was also sold in multiple packs as Lego DACTA sets intending the RCX for use in classrooms.

The V1.0 came with an external 9v power jack, that was later ditched. I have seen this used with other kinds of battery packs – thus allowing the bottom panel to be empty. This can lead to better even distribution of weight and other advantages.

In addition to the default programming language, XCode, the RCX could be programmed with Robolab (provided by Lego for DACTA users), NQC, Lejos and other hobbyist languages.

## Lego RCX Books and Gear

The Lego RCX is no longer available, but there are many books on the subject worth reading, as well as accessories, and even some to allow the newer NXT controller to be used with kit from the RCX generation.

### Classic Lego Mindstorms Projects and Software Tools: Award-Winning Designs from Master Builders

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&marketplace=amazon&region=GB&placement=159749089X&asins=159749089X&linkId=2f96480b45a8b0c87b5bdaf794f1177f&show_border=true&link_opens_in_new_window=true"></iframe>
Stacked with ideas to get more from an RCX kit with concepts that translate to later revisions and other Lego kits.

### The Lego mindstorms Ev3

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&marketplace=amazon&region=GB&placement=B00BMKLVJ6&asins=B00BMKLVJ6&linkId=150dcd300a737e91832bad75c7cd1d82&show_border=true&link_opens_in_new_window=true"></iframe>
This is the current generation in awesome Lego robot and contraption building kits.

## Programming The Lego RCX with NQC

<a href="http://bricxcc.sourceforge.net/nqc/" target="_blank">
<img class="text_img_right" src="/galleries/2010-01-19-the-lego-rcx-inside-and-out/draft_lens8960751module79322281photo_1325684837-lego-rcx-nqc-logo.gif" alt="NQC" title="NQC"></a>

There are many programming languages for the RCX. While I was using it a great deal, I found NQC made the most sense to me.

NQC is an acronym for “Not Quite C”. It is a C-Like programming language, API and compiler toolkit aimed at Lego’s range of Programmable Bricks. Being an embedded C programmer by trade, it was an obvious choice for me.

Learning a more advanced language like this is a vital step in working with Lego Robots as it gives you a great deal more control and flexibility than the supplied MindStorms, CyberMaster or SpyBotics software. It gives access to more programming concepts than the construction toy style SDK’s provided. On the downside, it could be more complicated for those not familiar with C, and for those who are, its differences (the not-quite aspects) may be a little frustrating.

The language draws highly from C, although some concepts, like the way tasks are handled are fairly specific to the language. It has a few caveats – like not being able to return arguments from subroutines and having a limit of subroutines (which is governed by the target – RCX 1.0, RCX 2.0 etc.). These limitations mean that you will often need to use global variables.

    task main()
    {
        OnFwd(OUT_A);
        OnFwd(OUT_C);
        Wait(200);
        Off(OUT_A + OUT_C);
    }

NQC is a command line compiler, and not a development environment, so I suggest using it with a text editor – for example Gedit on Linux, Notepad++ on Windows or Textmate on the Mac. The NQC website has the details for installing it on windows, although it is a bit more involved on the Mac and Linux. NQC does not require the original RCX software to be installed to run.

Some other advanced systems for programming Lego P-Bricks are LegOS and BrickOS. NQC is the easiest, but the others are also worth a look.

### NQC Links

I used the NQC language on the RCX enough to collect a few good links.

* [NQC - Not Quite C website](http://bricxcc.sourceforge.net/nqc/) - The home of the NQC programming language for the RCX and is maintained by its author. This contains all the downloads and the documentation to use the software.
* [Lego MindStorms: Programming with NQC - O'Reilly Media](http://www.oreillynet.com/pub/a/network/2000/02/25/mindstorms/NQC.html) -  This is a superb illustrated guide to getting started using NQC to program your Mindstorms RCX.
* [Advanced Programming With NQC](http://www.eng.iastate.edu/twt/Courses/Undergrad/packet/appendix/advanced.htm) - course notes from a university module covering robots, where NQC has been used by the students to program their RCX's. It explains each of the elements of the NQC language.
* [Lego Robot Pages - NQC Tutorials](http://people.cs.uu.nl/markov/lego/) - a set of NQC tutorials translated into many human languages.

### Even more NQC info

NQC is a deep a powerful tool for the RCX. While a subset of the C language, it has enough to accomplish fairly complicated tasks with the robot kit. However, getting the best of it requires either great experience, or having a good book to use as a guide, a tutorial or just a reference to keep handy.

Little beats being able to go step by step through a book, or rifle through to find exactly what you needed to solve a problem.

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&marketplace=amazon&region=GB&placement=B01FKUQIT6&asins=B01FKUQIT6&linkId=84378ce1de12720bc48dcd701f108a2e&show_border=true&link_opens_in_new_window=true"></iframe>

## LeJOS - A Java based Lego RCX System

LeJOS is available on both the RCX and NXT, with some differences in capability.
LeJOS is a TinyVM based Java programming language and API for the RCX. It is well documented, and has been used a great deal.

Here is an example of some simple LeJOS code:

    import josx.platform.rcx.Motor;
    import java.lang.Thread;

    public class SimpleBot {
        public static void main() {
            Motor.A.setPower(3);
            Motor.A.forward();
            Thread.sleep(1000);
            Motor.A.stop();
        }
    }

This would cause motor A to start at power 3, go forward for 1 second, then stop.

I would recommend you start with [The LeJOS Tutorial](http://lejos.sourceforge.net/tutorial/index.html#basic_trails). For those who already know Java, follow the start of the tutorial to get it installed and uploading to your RCX, then skip to the API documentation.

## Low friction RCX rotation sensor

### A simple way to build an additional RCX sensor from existing kit parts.

The RCX has an optional rotation sensor that could be bought for it, but they are now fairly difficult to get hold of. They also used a brushed contact based system for sensing, so could be prone to wear and introduce friction into your drive chain. On the positive side, the RCX could have its sensor ports set into a mode that would automatically count the revolutions based on the sensors encoding.

I investigated ways to make a friction free sensor, and while it requires a little more programming than using the rotation sensor, it also has the benefit of being able to be constructed from parts shipped with the Robotic Invention System (the basic RCX kit).

The animation below shows the basic construction, which can be altered to suit your model, but the important thing is that the light sensor is close to a pulley wheel, with light and dark round studs pressed into it to give a readable pattern to show rotation.

<iframe width="560" height="315" src="https://www.youtube.com/embed/O6GP4LHynok" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>

## Classic Lego Mindstorms on eBay

Lego is expensive, and older rare Lego, like the original Mindstorms kits are hard to come by.
Ebay has been a great source of older Lego sets for me - Lego themselves only stock their current season, which they rotate all the time.

Sets to look out for on eBay - first is the RIS - The Robotic Invention System - the kit that features the RCX and gets you started on robot building in Lego - many other kits are expansions to this. The NXT - this is the NeXT generation Lego robotic system - far more capable, but arguably harder to use, partially because of the studless construction system. The Mars Rover expansion set - this is good fun, and has many extra elements. Another really amazing find is a Cybermaster kit - an RF based programmable brick which also comes with one of those brilliant Technic figures.

The Explorer and Droid developer kits I think are not so interesting, as they are not at all as capable as the RCX, NXT and Cybermaster. The Technic Control centre (the kit with many motors and a big control deck with lots of buttons and a record/playback system) is good fun, but is possibly going a little too far back in Lego robotics. The bar code based "CodePilot" was innovative, but also very limited.

Top find - a complete, even better MISB (mint in sealed box) RIS 1.0 set.

## The RCX Specifications

### The Lego specifications first:

Its part number is 586346. There are two types of version 1- one with, and one without an external DC power input. The DC power input was a useful expansion.

| Specification      | Value                                         |
| -------------      | --------------------------------------------- |
| Max Length         | 12 Studs (Approx 95mm)                        |
| Max Width          | 8 Studs (Approx 63mm)                         |
| Max Height         | 4 Bricks/12 plates/40 mm(including top studs) |
| Weight(with Batts) | Approx 250g                                   |

It uses 6 AA batteries – with a combined voltage output of 9v.

It has three input(sensor) pads, and three output motor pads – all using the Lego stud type connector.

It has an LCD display, capable of displaying 5 digits(with a little walking man between them).

Internally it uses a Hitachi “H8/3292″ MicroController.

The output ports can output 9v, and use PWM techniques to control motors speeds. It does not adjust the actual voltage output – so take this into account when driving circuits from it.
It uses three MLX10402CA motor controller chips(one for each port).

## Inside The RCX

### Photos of The Innards

<!-- TODO: Photo carousel? -->
![A close up of the Motor Driver Chip used on the RCX](/galleries/gallery-1-common-images/121-motor-chip.JPG)
![The RCX Mainboard](/galleries/gallery-1-common-images/123-rcx-mainboard-with-pointers.gif)
![Closeup of the Hitachi/Renasys H8 Processor on the Lego RCX mainboard](/galleries/gallery-1-common-images/122-h8.JPG)
![The H8 Pin Diagram](/galleries/gallery-1-common-images/125-rcxh8pins.gif)

## Lego RCX - The Genre Defining Robot Toy

### This Kit Changed the Game

The RCX was truly genre defining. Although there were robotic controllers available before, even those that interfaced with construction toys, this was an accessible, easily programmable, versatile controller. The RCX came with all the kit needed to build quite sophisticated robots, wheels, gears, axles. It also came with all the programming software and leads needed (often an extra for other kits).

The RCX came with plenty of information and instructions and the software was not a dry language IDE, but a full interactive introduction to the kit. The RCX and Mindstorms was available to the consumer as well as schools, at a reasonably affordable price. Mindstorms has an online community maintained by Lego, and made it easy to become a member of the community.

Designs and programs are still being swapped now. It was the RIS - Robotic Invention System kit, and the accessory or lightweight kits like the Droid developer kit, the Mars Mission kit, Vision Command (which included a web cam and computer vision software), that started a new glut of hobby robotics. The introduction of the Mindstorms system hit a few years before robot wars, and resulted in things like the “Real Robot Magazine”. Other toys started to catch on, but still, none have the versatility or accessibility that the Lego ones do.

The Lego RCX, combined with the Lego Robotics Construction Kit that it was sold to in retail, brought many people who had though they had grown out of Lego back to buying and using Lego. It also brought many others into building robotics.

The RCX has been used in schools and extra-curricular childrens clubs, including one I ran myself from 2004 to 2005. Mindstorms can be used to teach children engineering principles, mechanical concepts, control engineering and programming, about the use of sensors and motors and many other useful lessons. Lego is also great fun to tinker with.


<!-- ignore for now - but links to other articles to convert
## Related Articles

### Other robot kits for kids

The Lego mindstorms kits are a little pricey, so if you are looking for alternatives as gifts for kids (or big kids!), then please take a look at my robot kits gift guide!

### Five Amazing Educational robot kits for kids

Some children are into robot stuff, some all things mechanical, some anything they can build, and others anything that moves. Robot kits will delight these children.

-->

## Opening An RCX

![The RCX mainboard and components](/galleries/gallery-1-common-images/123-rcx-mainboard-with-pointers.gif)

If you are very technically minded, as I am, you may be the sort that would like to open an RCX, just see what is inside it. I have provided plenty of information to help you get a lot from it without needing to, but sometimes if you have that itch, you just have to try it.

I will start by making it clear that this is not something you want to do unless you really know what you are doing. If you do try this – I can offer no warranties for broken or non-working RCX’s as a result.

This said – there may be benefits from this. First – you can get a better idea of the innards of the beast. Secondly – you may wish to wire it to an external power source, or use it to power other devices, although the better method for this is to make a simple battery box insert with a notch for the first, and use a brick style connector for the latter.

If you are really determined to disassemble your RCX, please read the safety guide and continue. Please note that after doing this you will need to re-flash the firmware and upload your programs again.

### Safety Requirements

You will be prying the plastic case of the RCX open, so please wear goggles as things may ping up at your face while doing this.
Please work in a well lit desk area – this will minimize your chances of breaking something, loosing something, or injuring yourself with a prying tool.
The voltages in the RCX are low, and you will remove the batteries, so there are no special considerations needed there.
That said, you may wish to wear an anti static band to reduce your the low chance that you might fry the circuits on board.

### Tools and Items recommended For Opening The RCX

These items will help you to open up and look inside an RCX. Make sure you don't skimp on the tools, or the safety gear.

<table class="prodtable">
<tr><td><a target="_blank"  href="https://www.amazon.co.uk/gp/product/B002V4ULHU/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B002V4ULHU&linkCode=as2&tag=orionrobots-21&linkId=a0e6b9f5a63d4cd7359653d5f44159a4"><img border="0" src="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B002V4ULHU&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=orionrobots-21" ></a><img src="//ir-uk.amazon-adsystem.com/e/ir?t=orionrobots-21&l=am2&o=2&a=B002V4ULHU" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /></td><td><h3> A flat-head jewellers screwdriver. </h3>
here are some very fiddly screws when opening devices like this, once you've levered off the case. These Jewellers sets are just the trick to do so.
</td></tr>
<tr><td><a target="_blank"  href="https://www.amazon.co.uk/gp/product/B006RAW942/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B006RAW942&linkCode=as2&tag=orionrobots-21&linkId=3aa2eba96d9dfeb27421db256278f7a9"><img border="0" src="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B006RAW942&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=orionrobots-21" ></a><img src="//ir-uk.amazon-adsystem.com/e/ir?t=orionrobots-21&l=am2&o=2&a=B006RAW942" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /></td><td><h3>Safety Goggles</h3>
As you pull things like this apart, tiny plastic bits can sometimes ping off, and if you are unlucky, you may get one in the eye - ouch! A reasonable pair of goggles is highly recommended when getting into the innards of any gadgets- because for the extra time, money and inconvenience, none of them outweigh the value of your eyes.
</td></tr>
<tr><td><a target="_blank"  href="https://www.amazon.co.uk/gp/product/B00Y7PB1NY/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B00Y7PB1NY&linkCode=as2&tag=orionrobots-21&linkId=36b87b3cbc03d96f98b3eeb6d9f57d26"><img border="0" src="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B00Y7PB1NY&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=orionrobots-21" ></a><img src="//ir-uk.amazon-adsystem.com/e/ir?t=orionrobots-21&l=am2&o=2&a=B00Y7PB1NY" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /></td>
<td><h3>A positionable lamp</h3>
A good lamp makes working with these things far easier - otherwise you find yourself holding it closely to your eyes and angling it to the light just to find something. With a good light - you just wont need that. A good thing too - as poor lighting may lead to you taking of goggles as you pry at the fiddly parts. Get a good desk lamp!
</td></tr>
<tr><td><a href="https://www.amazon.co.uk/Anti-Static-Wristband-Discharge-Prevents-Electricity/dp/B004TQRFPE/ref=as_li_ss_il?ie=UTF8&qid=1519600714&sr=8-1&keywords=anti+static+wrist+straps&linkCode=li2&tag=orionrobots-21&linkId=9045a58e324487ccb99630b4e13b5468" target="_blank"><img border="0" src="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B004TQRFPE&Format=_SL160_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=orionrobots-21" ></a><img src="https://ir-uk.amazon-adsystem.com/e/ir?t=orionrobots-21&l=li2&o=2&a=B004TQRFPE" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /></td>
<td><h3>An Antistatic Wrist Strap</h3>
While some recommend this, as your contact may cause some devices to malfunction, I rarely, if ever use a wrist strap. You may be carrying a charge - especially if you are wearing woolly jumpers or other static build clothes. However, instead of a strap, tapping on an earthed device may be just as useful.</td></tr></table>

### Steps

First you will need to remove the battery box, and all batteries.

Then lift one side of the battery holder carefully, and observe two slots, using a fine flat head screwdriver(or jewellers screwdriver) – insert into one of the slots, keeping the cover face down, and click the PCB off the clip holding it to the yellow front cover. Repeat on the other side. These clips connect the PCB to the input/output pads so do not damage these.

Keep it face down – so stuff like the pads and buttons do not fall out. At this point, you should have a PCB clipped to the battery holder. There are clips keeping the two together – which can be undone by rotating the PCB carefully clockwise, and sliding it out from these.

To reassemble – follow the same steps backwards. You may need to lightly bend the power clips down before popping the board back into place.

[More on Dissassembling the RCX](http://www.crynwr.com/lego-robotics/disassembling.html)

## Details on the Hitachi H8

![H8 Pinout](/galleries/gallery-1-common-images/125-rcxh8pins.gif)

The Hitachi H8 (now Renasys) is the microcontroller serving as the main processor on board the RCX. NQC is one way of compiling code for it.

Specifications:

| Spec                 | Value                             |
| -------------------- | --------------------------------- |
| Lego Chip Exact Name | HD6433292VF10                     |
| Clock Speed          | 10Mhz                             |
| ROM                  | Mask ROM (As opposed to a PROM )  |
| Internal ROM         | 16 kb                             |
| Internal RAM         | 512 bytes                         |
| Registers            | 8 16-bit or 16 8-bit              |
| Package              | 64-Pin QFP (FP-64A)               |

The H8 operates in three modes, The three modes are:

| Mode 1 | Expanded Mode with on-chip ROM disabled  |
| Mode 2 | Expanded Mode with on-chip ROM enabled   |
| Mode 3 | Single-chip mode                         |

## Getting Hold of an RCX on Ebay

The RCX is quite hard to find, especially at a good price, and while the more recent NXT has a lot to offer, this is still a classic kit. Especially if you like to do Lego robotics but with classic studded Technic beam construction. It is worth asking a seller if the RCX can come with a DOA guarantee so you will get it in working order.

Look for listings that show a display on the LCD. Beware that the original CD's are almost certainly not going to work with a modern PC, so you are probably expecting to use NQC or an alternative firmware.

Beware that motors, and the motor driver chips on an RCX can both not be working. When you get it, try making sure each motor port goes in both directions, to try
each motor, and then validate the sensors and sensor ports too.

This should also mean having tried the IR tower and connection to the RCX - which can also fail.

## What is Lego Dacta? 

![Lego Dacta Logo](/galleries/2010-01-19-the-lego-rcx-inside-and-out/draft_lens8960751module78784701photo_1263338163dacta.gif)

Now known as Lego Education, Lego DACTA is the School consortium branch of the Lego company. It is sold through a number of outlets, and some of the older kits may be available via Bricklink or eBay.

The Dacta range includes some excellent robot building kits- including multiple Lego RCX kits, and Robolab software, as well as specialist stuff like the Lego energy centre “eLab” including the Lego Solar Panel. There is an up-to-date range now for the NXT and Power Functions sets.

A number of UK Redistributors are prepared to sell this to hobbyists and small Lego clubs or groups. It is also a good way to get bulk sets.

## Getting Power From an RCX Sensor Port

![RCX Power Circuit Diagram](/galleries/2010-01-19-the-lego-rcx-inside-and-out/draft_lens8960751module78790281photo_1263426243-rcx-Output-Power.png)

This is an advanced section for people attempting to make their own custom accessories for the motor ports.

When powering some devices from the port that are not motors, you may require a smooth current that is not pulsed

Normal operation of the RCX motor ports produces a PWM – Pulse Width Modulated signal, where the power is turned off many times a second, and it is the ratio of on power to off power that will determine the speed of a motor. This signal is not suitable for more sensitive electronic devices.Also, as the Lego connectors are multi-way, you will want to rectify it for a circuit that will only take power one way

A circuit is required to smooth and rectify this signal

This can be done in a simple way by using a diode bridge to enforce the polarity, and a capacitor to smooth it. This will give an almost constant voltage. There will be some ripples

The diodes will drop the voltage by about 0.6v each

By setting the output on full, you can leave out the capacitor – but this still means at any orientation you will have two diodes in series, one at at the positive and negative terminals for your circuit, so you will have a current drop of around 1.2v – and end up with a total output of 7.8v

The circuit diagram is simple, and used with a Lego connector will allow you to use it with the RCX and also the Cybermaster devices.

## Building a Powered Sensor For The Lego RCX

This advanced technique allows you to build custom sensors that require power.

![Active sensor power](/galleries/2010-01-19-the-lego-rcx-inside-and-out/draft_lens8960751module78790291photo_1263426533-rcx-active-sensor-power-.jpg)

The RCX supports two modes of sensor, passive sensors, which allow simple devices like switches and resistors, or active sensors. Active sensors can draw power and return a signal.

This active mode drives the sensor port in a cycle, where one part of the cycle is power, and the other part of the cycle is used to read from the sensor.

You can either use this to drive your own sensors, or power other devices. Note that the output current here is pretty low at only around 50mA. Also you will only get around 7v with this circuit. This is more than enough for a number of recent electronic devices where 5v can power them.

D1 to D4 should generally be low power diodes – such as the 1N4148.

Changing R1 will change the characteristic of the output curve from any connected sensor. Recommended resistances are 1k, 2.2k or 4.7k.

## Getting The RCX Software Running On Newer Machines

This section will need to be retested and updated as Windows moves. It's not always possible to run old programs on modern computers.

![The RCX IR Tower](/galleries/2010-01-19-the-lego-rcx-inside-and-out/draft_lens8960751module79685391photo_1328563774-rcx-IR-tower.jpg)

Computers are now running Windows 10. The Lego Mindstorms software for the RCX with the original Robotics Invention System is now nearly 20 (as of 2018) years old and will not always run on them. With a little perseverance, and a few patches, there are many ways to get the RCX working.

It is one thing to get the RCX running with the likes of NQC and Lejos, but the original experience is fun and inspiring still with the original CD and its presentations. The original software not only requires somewhat dated driver interfaces, but also an old version of flash, in some areas that are no longer backwards compatible.

The first way is to consider using Virtual Box. This allows you to forward USB ports and serial ports to a virtual machine, in which you can then run an older version of Windows and then run the original Mindstorms disks as is.

You may get somewhere in using an older version of Quicktime to prevent errors in the default software. The exact version needed is 6.5.2 for the RIS 2.0 software (the most recent). This can be downloaded from <a href="http://www.oldversion.com/download_QuickTime_6.5.2.html" target="_blank">Oldversion.com</a>.

Virtual Box is freely downloadable at <a href="http://www.virtualbox.org/" target="_blank">Virtualbox.org</a>. You will just need a version of Windows – I recommend 98 (which dates the RCX!) as there are no patches needed for it. Just make sure you use it only for Mindstorms and do not go on the net with it.

In Windows 7, with the more expensive editions (which you can purchase through an Anytime upgrade), you get a version of Virtual PC, with an older version of Windows running in it, for just this kind of compatibility problem. However that is XP, and the compatibility patches that Lego were hosting have long since been removed.

Unfortunately, Lego do not support the consumer RCX so much any more, and the downloads have now also gone from their education site.

For a simpler route in terms of drivers and so on, you may find <a href="http://bricxcc.sourceforge.net/nqc/" target="_blank">NQC</a> and <a href="http://bricxcc.sourceforge.net/" target="_blank">Bricx Command Centre</a> easier, although programming them takes more work and patience.

## More RCX, Mindstorms and Lego Information

![RCX Jonny Five](/galleries/2010-01-19-the-lego-rcx-inside-and-out/draft_lens8960751module78790311photo_1328564356-rcx-jonny-five.jpg)

While there is plenty here about interfacing with the RCX and what is inside it, there are also many good sites and discussions on the internet about this genre defining device.

You are welcome to tweet me your own Lego Mindstorms Robotics site here as long as it is relevant to this page.

* [RCX Internals](http://www.mralligator.com/rcx/)
* [Upgrading Lego Mindstorms RIS 1.0?](https://www.boards.ie/b/thread/2055747086?mode=linear)
* [RCX 1.0 Case Disassembly | iFixit](https://www.ifixit.com/Guide/Disassembling-RCX-1-0-Case/4352/2) - iFixit - Disassembling RCX 1.0 Case: How to access the RCX's circuit board.
* [Bricklink Catalog Entries for the RCX](https://www.bricklink.com/catalogList.asp?q=RCX)
* [Lego Dimensions and Measurements](https://www.cailliau.org/Lego/Dimensions/zMeasurements-en.xhtml) - When interfacing stuff with Lego, knowing conversions to MM from the Lego Units can be very handy.
* [My shortlived Lego only blog](https://dannys-lego.blogspot.co.uk/)