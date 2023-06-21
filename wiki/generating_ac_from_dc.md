---
layout: page
title: Generating AC From DC
date: 2004-11-16 14:55:37
---
If you have a DC supply or power source, and wish to generate AC, you must first consider your needs.

Please read the [Robot Building Safety](/wiki/robot_building_safety.html "Building robots can be dangerous - tips to help your safety") guide first.

Get 250v AC from a 12v DC battery is possible - with the use of an Inverter. These come in a number of flavours - but normally cannot supply high power applications like heaters and kettles very well. Things like TV, radio and small PC's are more suited to this.

Be aware that many devices - notably PC's convert the AC back to DC internally - and you may be better off customizing its internals to bypass the two conversions.

If after all of this - this is still the correct route - you need to build a rough Oscillator - this can be done with two [transistors](/wiki/transistor.html "Transistor"), [capacitors](/wiki/capacitor.html "Capacitor") and a few [resistors](/wiki/resistor.html "Resistor") quite simply (I will come back to this), a 555 (But this generates a square wave - and not a sine wave), and a few other purpose built generators.

It is worth understanding a little about waveforms - a square wave in fact can be broken down to many sine waves in supposition played at different frequencies, offsets and durations in the form. This means that by filtering frequency ranges (with a capacitor or inductor) you can end up with a real sine wave and use this for your AC - it is down to the device on how well it will respond to a square wave, or if a real sine is needed.

Following on from the wave generator stage, you will then need an Electric Transformer, stepping up the 12v AC to 240v before going to the output stage.

It is unlikely this will be used often in [Robotics](/wiki/robotic.html "Robotic") - and I very much advise you to purchase a purpose built device.
