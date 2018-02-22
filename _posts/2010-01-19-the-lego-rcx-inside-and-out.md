---
created: 2010-01-19 06:44:06
description: The Lego RCX, Inside and Out
tags: [robots, robotics, lego, rcx, mindstorms, microcontroller, ris, ir, technic]
title: The Lego RCX, Inside and Out
layout: post
---
Since I have written plenty on the Lego RCX, I have decided to distil the many different articles into one article in one place.

This contains info on programming one, buying one, adding your own sensors and powered devices, opening the RCX up, getting the RIS software and IR tower working on newer OS's and I will be collecting up and adding more in the next few weeks.

# Collected Details For Using The Lego RCX

<img src="./The Lego RCX, Inside And Out_files/lens8960751_1328563452-Lego-RCX-In-Use.jpg" class="pull-left lens_intro_img" alt="">

The Lego RCX is a superb microcontroller, genre defining- and this is all about the amazing things you can do with one, getting hold of one, and building awesome stuff (like robots!) with Lego. Find out here to get up close and inside the RCX.

Included is some basic info on the device - what it looks like, what kits it was part of, and why I think it was genre defining.
Also is information on programming and my personal favourite way to program it.

I have included information on opening up the RCX so you can get inside it and see what makes it tick - this can serve either as clear instructions on taking a look and putting it back together, or taking a look at the closeups and chip identifications to save you having to butcher your own RCX. Since they have become rare, there is some info and links to places to buy an RCX so you can reproduce the experiments here and generally have fun playing with it.

On the more advanced side here, there are circuit diagrams for interfacing with the RCX for getting power from both motor and sensor ports, and also for building active sensors. Finally there are links to other sites and books with a great deal more information to get the best out of this cool toy.

Although it is dated, succeeded by the NXT, it can be remembered as one of the great things created by Lego.</div>

## Lego RCX Basic Details

<img class="text_img_right" src="./The Lego RCX, Inside And Out_files/draft_lens8960751module78783391photo_1328563575-building-robot-with-lego" alt="" title="">
The RCX (Robot Command eXplorer) is a Lego computer, capable of controlling 3 Motors, or more with some tricks, and respond to inputs from a 3 or more sensors.

The version 1.0 RCX has Lego part number 884u and houses a Hitachi H8 microcontroller.

It comes as part of the Robot Inventor Sets (RIS 1.0, 1.5 and 2.0), which included an IR computer connection (9-pin Serial or USB), many technic building bricks, motors, sensors, robot building instructions, a test mat and full windows Mindstorms software to program it.

It was also sold in multiple packs as <a rel="nofollow" href="http://www.squidoo.com/collected-info-on-the-lego-rcx#module78784701">Lego DACTA</a> sets intending the RCX for use in classrooms.

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
<img class="text_img_right" src="./The Lego RCX, Inside And Out_files/draft_lens8960751module79322281photo_1325684837-lego-rcx-nqc-logo.gif" alt="NQC" title="NQC">

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

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&marketplace=amazon&region=GB&placement=159749089X&asins=159749089X&linkId=2f96480b45a8b0c87b5bdaf794f1177f&show_border=true&link_opens_in_new_window=true"></iframe>

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

