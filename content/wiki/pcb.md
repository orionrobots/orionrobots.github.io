---
layout: page
title: Printed Circuit Board
date: 2017-12-29
tags: [electronics, robot building]
---
A Printed Circuit Board is the normal system for holding components together in a circuit.

They serve a more permanent way to build a circuit than a breadboard.

When made for application specific purposes, they can allow circuits to be fit into very compact spaces, using small devices and fit an exact envelope.

## Generic Type PCB

There are generic types of PCB to solder circuits into.

Perfboard is just a board with holes at regular spacing. They usually have copper plated rings on one or both sides for soldering.

Stripboard or veroboard has copper strips, spaced generally at 2.54mm apart. Components are soldered into the strips, and a tool can be used to cut tracks.

PC Board and prototyping boards then exist following breadboard layouts, or with other interesting layouts.

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&language=en_GB&marketplace=amazon&region=GB&placement=B0875P5475&asins=B0875P5475&linkId=f08e5c7fad46289b24d228a4a6893892&show_border=true&link_opens_in_new_window=true"></iframe>

## Breakout board PCB

There are PCB's designed to mount common surface mount or unusually shaped components, and with standard 2.54mm headers for PCB mounting, or for use with Dupont jump cables.

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&language=en_GB&marketplace=amazon&region=GB&placement=B085LC6ZSY&asins=B085LC6ZSY&linkId=5ee177d23535d719006c52f300631478&show_border=true&link_opens_in_new_window=true"></iframe>

## Specific PCB

A PCB can be laid out for a complete task and then made in a variety of ways.

### Layers

It's worth mentioning that PCBs can be made with different numbers of layers.

PCBs for simple applications are made with just a single layer, and the components soldered either through to that layer (if they are through hole) or on to that layer (surface mount).

2 layer PCB's mean copper on both sides. As circuits become more complex, and parts with large pin counts are used, multilayer boards with inner layers of copper can be used - including 4, 8 and more layers.

On the outermost layers, "Pads" refer to the spaces where components are expected to be soldered. Tracks join pads, and sometimes there are "fills" for larger areas - like ground planes or high current sections.

Along with these layers, there is also a solder mask - which is placed on the outer layers, and ensures that solder doesn't run between pads. This can also be used to add colouring to a board - and where green, blue, purple, orange, red or black PCB colourings come from.

On the outer layers, above the solder mask there can also be a "silk screen" layer, used to place component numbers, values, types and outlines, labels and information for the use or assembly of the board.

Another part of PCB's are vias - links from one side of the board to the other, along with holes needed for any through hole components.

The outer layers of copper, soldermask and silkscreen can be used together to great effect to make very smart and even artistic looking boards. For my favourite example, see the SpeakerPHAT by Pimoroni.

### Designing PCB's

They can be designed by hand, and used to be done using transfers - this is rarely used these days, but has a distinct look seen on older boards.

Most PCB's are designed using CAD software - which can be a simple drawing application, or a complete electronic design system. These generate files which can be manufactured.

The simplest way to manufacture PCB's now is to send them to one of the many inexpensive board houses, who will manufacture multilayer boards with full solder mask and silkscreen. They will also make sure that any vias, holes and cuts are made - and plated so there is copper through them. Board houses can deal with multiple boards - and do any routing, or VScores to make boards easy to separate from a sheet.

However, PCB's can also be manufactured by a hobbyist in their own workshop. The process involves a resist and an etching fluid. PCB's clad in copper are given a resist layer to show where they will not be etched, then bathed in the etching fluid.

There are resist pens, but resists are more often made using UV. This involved printing or drawing onto a transparent sheet, then placing this onto a  board prepared with a photosensitive resist compound. This is then exposed to UV, so the the photosensitive area reacts with the UV, and only the intended areas are etched away.

There may be issues if the board is left for too long in the etch, or not long enough.

The hobbyist will then need to cut and drill any holes needed. Two layer boards can be made - but registration for this gets somewhat harder.

## Making PCB's

If you are new to this, although it may be cheaper to make your own, it is recommended you use an online supplier. It is a lot less messier - for advanced boards, or any quantity - you will definitely find them cheaper.

If you are set on making your own at home, please read the [Safety Guide](/wiki/robot_building_safety.html "Building robots can be dangerous - tips to help your safety") first.

To create a PCB, you need to apply an etch-mask to a copper clad board. An etch mask basically stops the etching fluid from working on covered areas of the board.

There are a number of methods, varying in expense and flexibility. The simplest is to use a permanent marker and hand draw the design on the board - I really do not recommend this, although simple - it is not really much of a gain over hand wiring.

There are also transfers you can use with standard lines, corners, pads etc. Again - you will need to line these up by hand. They are useful for accurately marking component pads when manually drawing the mask.

There are systems where you can print onto special paper - which you then iron-on to the PCB to transfer it. These are quite neat - cheap and hobbyist friendly. You will often need to fill in a few gaps manually with a marker - make sure all of the mask is firmly down - otherwise the etch fluid will get under it.

Many people use Photo-etching, where a board is primed with a photo-sensitive resistive mask. By exposing the mask to [UV](/wiki/uv.html "Ultra Violet Light"), it then can be etched underneath. You print your design onto OHP slides, then project a [UV](/wiki/uv.html "Ultra Violet Light") light through them onto the PCB. You can then continue to etch normally. This can be expensive - but also gives the best results.

You will also require a Pillar Drill and clamping table for it- as you will accurately need to drill vias (where the one layer crosses to the other) and connection holes for components and cables. I recommend still using sockets for ICs where possible, and going with headers for all cables - allowing some amount of modularity in your designs.
