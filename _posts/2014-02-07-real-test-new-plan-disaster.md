---
title: CNC - Some new ideas, a plan, disaster!
description: An exciting day, but going to need to replace a part of it
tags: [cnc projects, electronics, cnc control box]
layout: default
---
## Recap

Today's plan was to get a number of test items, and start using them to test actually milling.
It would be awesome to see some actual routing done.

I went into town, and bought a few items. But first my ideas...

## Arduino board

I decided that at some point it will seem cumbersome to keep the point to point wiring I've set up for the Arduino GRBL ports to the system.
My initial idea is to take a protoboard, and solder a DB25 plus appropriate connections on it.

## The Camera Plan

I have a mad idea that I could use a simple web cam mounted rigidly onto the Z gantry to seek some fiducial marks. This fiducial mark would be a simple concentric circle pattern with a symbols to indicate fixed positions.

First I'd use one type to indicate a position on the bed, and secondary to indicate a position on the job.
This way, homing/centring could be done with the camera.

This would mean some kind of PC or rPi based tool to seek the fiducials by reading the camera.
This software would stream relative gcode to grbl to get it lined up.
It could then hand control to a standard gcode streamer tool instead to start a job.

Even better - if the fiducials could be made so on a pcb it went all the way through, the board could be flipped and lined up again on the other side.
This would give the precision to do double sided and through holes/vias without trouble.

## The shopping

I bought myself a bag of balsa bits and some sheets of foamcore from the Hobbycraft.
They had other woods or plastics, but this would be a start.

At the local Maplin, I got a cheap USB webcam, some heavy duty cable ties to strap it on, an arduino protoshield, a DB25 connector, some single sided, and double sided copper-clad board.

I won't use it all in one session - but clearly enough to have fun with.

## The test

### Starting up

I started with a balsa block as stock.

I needed to select the right kind of tooling.
The CnC documentation suggested a fluted bit for wood, although it may be overkill for the balsa.

Attaching the bit was a little tricky but I got that to work.
The next thing (and I've done this in the wrong order) was clamping the stock...

### Clamping

I had a bit of trouble clamping the piece to the T-Slots of the machine.
The nuts supplied did not fit at all in the T-slots and they couldn't be slid in.
I used the plates slotted around to hold the part firmly, but I will have to find some T-slot nuts of better fit or quality to replace those in the box.

### Disaster

I positioned the spindle manually over the job, then connected it up to the computer, powered it up and started the gcode streamer.
I loaded the file ready to send.
I was going to use the circle test I had yesterday and let it cut a small circle out of the balsa.

I powered up the spindle leaving it on the lowest setting, and then it stopped turning at all.
Then there was smoke and the horrible smell of burning electronics.

I quickly disconnected the PC, then the power and turned it all off.
Somehow the spindle had blown something. Perhaps the slow speed meant it wasn't turning and was current shunting.
It had blown a fuse in the main board, and replacing that still didn't get the spindle going.
The steppers and their controllers seem fine.

I now need some other way to control the spindle or to replace that power board.
Time to take a little break and think, I can always solder together that Arduino shield too.

The next step is to test which part in the spindle speed controller is damaged and replace that.
The most likely candidate is the FET transistor that switches the power to the spindle.
