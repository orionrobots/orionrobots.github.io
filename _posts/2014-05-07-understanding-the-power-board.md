---
title: Understanding the CNC Power Board
layout: post
tags: [cnc projects, electronics, power-board, soldering]
---
![]({{ site.baseurl }}/galleries/inside__control_box/images/img_3027.jpg)

## The Fix

There is far more to this story, and I will get the details down.
In short after probing, tracing and then making experimental versions of the blocks on the CNC power board, I determined that the 555 had been destroyed.
This was destroyed because the motor speed potentiometer had gone, and shorted all three parts without much resistance.
The potentiometer didn't always do it, but as you sweep the dial, every now and again the part would fail like this.
This catastrophic failure caused a cascade, with far too much current through the motor, destroying the FET which failed conducting, then caused far too much current across the 555 taking it out, and once that fails it dead shorts the regulator so that blew.

So I bought replacement parts, and found a new potentiometer.
Unfortunately none were a fit for the front panel area, however, I found a hole on the rear panel which I have now used for the pot.

I re-soldered the other parts, and made it work again.
There are photos and video to follow of the process.
I now understand that CNC power board fairly intimately and have the schematics for it.

## Links

I have come across a number of sites with people spending time on this machine

<http://lab.whitequark.org/notes/2014-02-11/cnc3020t-fixing-power-supply/>
