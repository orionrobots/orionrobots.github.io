---
layout: page
title: Adapting Lego RCX Stud Style Connectors
tags: [electronics]
---
## Overview

First - please note that this only applies to the "Stud" style connector, and not the old train 3-pin connector or the new RJ style connectors used on the [NXT](/wiki/nxt.html "Lego's NeXT generation robotics kit"). It is expected that the RJ connectors may be orderable, and simply crimped.

These stud connectors can be used with Lego motors, sensors, the [RCX](rcx.html) and [Cybermaster](cybermaster.html), as well as the Technic Control Centre and any other Lego part using the stud connector.

Before you proceed with anything like this, bear in mind that you must still think safely. If you have not already done so, read [Robot Building Safety](robot_building_safety.html) now.

There are two basic ways to do this, the first is to cut into an original cable, and the second is to modify a brick to make your own connector.

## Modifying an original cable

### Overview

The most simple way to hook something into a Lego electronic device (like the Lego RCX), is to slice a lego cable, and then splice your device into the cable. Since you are cutting a connector in half, you get two adaptors this way.  The cables themselves are multicore, so you will probably need to tin them, and maybe even crimp them into a connector.

### Materials Required

* Original Lego stud based power cable
* (Optional) 2 pin crimpable connector of your choice
* (optional) Electrical Insulating Tape

### Tools Required

For finding and selecting tools. please read [Robot Tools](/wiki/robot_tools.html "Tools that are often required to get started in robot building")

* Safety Goggles
* Wire Cutters
* Wire Strippers
* (Optional) Soldering Iron + Stand + Solder to tin cable
* (Optional) Helping Hands adjustable hobby clamp
* (Optional) Crimping tool
* (Optional) Sharp Craft Knife and Cutting mat
* Electrical Insulation Tape or heat shrink.

### Method

First, please wear your goggles, and make sure you are doing this on a well lit bench. If you intend to solder you must have ventilation, and a soldering stand.

Select a Lego cable, probably one of the shorter ones will do (since the long ones are less common and pretty useful intact). Cut it roughly in half.

* You may optionally split the two lines a little using the craft knife and cutting mat by pushing it down point first between the cables with the blade parallel to their length, about 20mm from the ends, and pulling it through, away from your body. You must be careful here not to bare the inside of one of the cables.
* Wrap both sides a little with the electrical tape to be sure there are not any exposed parts in the area you pulled it apart. You should probably put a small band of electrical tape around the neck of the split to prevent it splitting further up. If you are going to be using a connector, this step may be mandatory.
* Strip 5mm bare on each cable. For safety, try to push the tool away from you, not towards you when you do so.
* Put a few twists in each bared section.
* (Optional) Tin the bared wired to keep them from tarnishing and make them easier to connect with other things. Tinning requires a soldering iron and a little solder, make sure you are still wearing goggles, and that you have a soldering stand before doing so, then melt a little solder on the tip of the iron. Clamp the wire into the helping hands, with the end free, then melt a little around the stripped part of the wire, taking care not to touch the tip of the soldering iron to the insulation - which will really smell if melted.
* If you wish to crimp it, then place each core into the crimpable connector, and crimp firmly with a suitable tool.
* Depending on the type of connector, use heat shrink or tape to insulate the ends.

## Modifying a Lego Electrical Plate

### Overview

This gives a nice finish, and may be both cheaper and more flexible. However using real Lego parts gives good compatibility. This does require soldering, and can be a little tricky as you are soldering onto very fine exposed metal areas and run the risk of melting plastic, which smells very bad.

## Modifying a basic brick

### Overview

As 2x2 Basic bricks are abundant, this is the cheapest method. This can be achieved with stiff wire or 4mm cheese head screws, but they are more fiddly than this method. This method involves salvaging tin from a biscuit tin, and actually modifying the studs, so the potential for compatibility problems is increased.

## PCB Method

### Overview

MindSensors also have an elegant method using a [PCB](/wiki/pcb.html) designed to fit over the contact studs. If you can design it, one of the many PCB services will be able to produce this for you. With a few surface mount components - tiny and flexible Lego compatible circuits can be made.

### Other methods

There are probably plenty more methods, and variations on these. [Tweet Us](https://twitter.com/orionrobots)  your comments or links to this page if you have another method, or enhancements to a method here.

## Considerations

Be aware, that as these Lego connectors are not polarised - you may(or may not) wish to add diodes to maintain the correct polarity.  You can use a single diode to allow one way only usage, or use a [Diode Bridge](diode_bridge.html) to allow any orientation.
