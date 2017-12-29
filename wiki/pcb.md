---
layout: page
title: Printed Circuit Board
---
A Printed Circuit Board is the normal system for holding components together in a circuit.

They serve a more permanent way to build a circuit than a breadboard.

When made for application specific purposes, they can allow circuits to be fit into very compact spaces, using small devices and fit an exact envelope.

# Generic Type PCB's

There are generic types of PCB to solder circuits into.

Perfboard is just a board with holes at regular spacing. They usually have copper plated rings on one or both sides for soldering.

Stripboard or veroboard has copper strips, spaced generally at 2.54mm apart. Components are soldered into the strips, and a tool can be used to cut tracks. 

PC Board and prototyping boards then exist following breadboard layouts, or with other interesting layouts.

# Breakout board PCB's

There are PCB's designed to mount common surface mount or unusually shaped components, and with standard 2.54mm headers for PCB mounting, or for use with Dupont jump cables.

# Specific PCB's

PCB's can be laid out for a complete task and then made in a variety of ways.

## Layers

It's worth mentioning that PCB's can be made with different numbers of layers.

PCB's for simple applications are made with just a single layer, and the components soldered either through to that layer (if they are through hole) or on to that layer (surface mount).

2 layer PCB's mean copper on both sides. As circuits become more complex, and parts with large pin counts are used, multilayer boards with inner layers of copper can be used - including 4, 8 and more layers.

On the outermost layers, "Pads" refer to the spaces where components are expected to be soldered. Tracks join pads, and sometimes there are "fills" for larger areas - like ground planes or high current sections.

Along with these layers, there is also a solder mask - which is placed on the outer layers, and ensures that solder doesn't run between pads. This can also be used to add colouring to a board - and where green, blue, purple, orange, red or black PCB colourings come from.

On the outer layers, above the solder mask there can also be a "silk screen" layer, used to place component numbers, values, types and outlines, labels and information for the use or assembly of the board. 

Another part of PCB's are via's - links from one side of the board to the other, along with holes needed for any through hole components.

The outer layers of copper, soldermask and silkscreen can be used together to great effect to make very smart and even artistic looking boards. For my favourite example, see the SpeakerPHAT by Pimoroni.

## Designing PCB's

They can be designed by hand, and used to be done using transfers - this is rarely used these days, but has a distinct look seen on older boards.

Most PCB's are designed using CAD software - which can be a simple drawing application, or a complete electronic design system. These generate files which can be manufactured.

The simplest way to manufacture PCB's now is to send them to one of the many inexpensive board houses, who will manufacture multilayer boards with full soldermask and silkscreen. They will also make sure that any via's, holes and cuts are made - and plated so there is copper through them. Board houses can deal with multiple boards - and do any routing, or VScores to make boards easy to separate from a sheet.

However, PCB's can also be manufactured by a hobbyist in their own workshop. The process involves a resist and an etching fluid. PCB's clad in copper are given a resist layer to show where they will not be etched, then bathed in the etching fluid.

There are resist pens, but resists are more often made using UV. This involved printing or drawing onto a transparent sheet, then placing this onto a  board prepared with a photosensitive resist compound. This is then exposed to UV, so the the photosensitive area reacts with the UV, and only the intended areas are etched away. 

There may be issues if the board is left for too long in the etch, or not long enough.

The hobbyist will then need to cut and drill any holes needed. Two layer boards can be made - but registration for this gets somewhat harder. 


