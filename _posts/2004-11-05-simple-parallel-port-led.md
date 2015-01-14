---
layout: post
title: Simple Parallel Port LED
tags: [electronics, led, parallelport]
comments: true
disqus_url: http://orionrobots.co.uk/Simple+Parallel+Port+LED+Board
gallery: /galleries/2004-11-05-simple-parallel-port-led
---
# Intro

![Parallel Cable With LED]({{ page.gallery }}/thumb_cable-with-led.jpg){: style="float:left"}
Plugging things into your desktop PC is neat - there is a great feeling of satisfaction when you can program even the simplest of hand made peripherals to light up. This project tutorial will start you with basic interfacing with your computer. Beware that you must be a little careful here, as shorting pins on your parallel port could be very bad for your computer. Also - as this project requires a Soldering Iron - please read the Robot Building Safety guide, and the Robot Tools guide before using any of these potentially dangerous tools.
 
This very simple project gives you a starting point, and allows you to think of other ways to use this port.
 
A small application of the basic single LED version is an Apache Monitor With Python and An LED.
 
The first thing to do is revise the LED. The Light Emitting Diode draws very little current, and some can be lit at low voltages like 0.6v. As they draw so little current, you will not need an external power supply. It is worth stating that anything motorised will require an external power supply and should not be powered from the port. As an LED cannot handle a great deal of current, you should always put a resister in Series with it. We will use 470 Ohm resistors for this.
 
Another thing about LED's are their polarity. LED's being diodes will only allows current to pass one way, and as such will only light one way. There is an exception to this - a breakdown voltage where they pass current another way. This is unlikely to happen in this simple project. The two electrodes of the LED are known as the Anode and the Cathode.
 
A standard parallel port has up to 12 outputs and 5 inputs (excluding extended modes etc). If you need a voltage large enough to drive an LED you may simply hold one of these outputs high. For now we will be ignoring the inputs, and for this project they are simply NC - Not Connected.
 
You will need to build an Experimenting Parallel Cable before starting this project.

# Required Tools

For all of this project, - you will need the following tool set up:
 
* A Soldering Iron
* Solder
* Small Clamp or Helping Hands
* Safety Goggles
* Side cutters
* Wire Strippers
* A well lit desk.
* A PC with Parallel Port
* A Multimeter - if you are connecting anything to your PC, you really should make sure it is safe to connect it first.

# Simple LED

The first block we will build is single directional LED lamp. This will light if there is a positive signal on one of the outputs.

## Required Parts

* One 470 Ω resistor
* One small LED
* A DB25 Female Socket
* A small length of Jumper wire

## Building the hardware

First take the LED and locate the flat edge. The cable below this is your cathode - the negative side of the LED. Bare the ends of a jumper wire of about 3cm long. Using the Clamp or Helping hands, Solder one end of this to the LED's cathode.
 
Next solder one side of the resistor to the anode of the LED. You then solder the jumper to the other leg. Plug the resistor end into pin 5, and the other side into pin 18.
 
You have now built your first basic LED interface and can program it...

# Programming the port

For now we will go with python as our language of choice for this. It is very simple, and with the PyParallel extension - it can be run on any platform. Although there are low level ways of hitting hardware ports, I see no reason why we should use that when we can spend more time building robots.
 
PyParallel details can be found here:
http://pyserial.sourceforge.net/pyparallel.html - It is very simple to install on any machine by following the instructions there. You will require Python above version 2.0.
 
The other good thing about this, is unlike a C program you would need to compile, you can try and interface with your port directly from the python command line. Start up python, and type:

    import parallel
    
Now - You must get access to the parallel object, and turn on your LED by flipping the corresponding bit:

    p = parallel.Parallel()
    p.setData(1 << 4)
    
Let me explain this. parallel.Parallel() gets us an interface to the default port. This interface we assign to p. We then call p.setData to set the data register (d0-d7) on the parallel port. Working out the correct number is a bit of binary magic. We are taking the number 1(the root of all binary numbers), and shifting it left 4 - which means we are now addressing bit d4 of the port. Take note that this is a read only port, if you want to store it, you can store the current status yourself.

    p = parallel.Parallel()
    dReg = 1 << 4
    p.setData(dReg)
    print dReg
    
