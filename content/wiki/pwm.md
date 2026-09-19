---
layout: page
title: PWM - Pulse Width Modulation
tags: [electronics, robot building]
date: 2005-08-25 21:50:17
---
Pulse Width Modulation is a method of controlling powered devices like motors by using pulses of power. By varying the ratio of length of On pulses to Off Pulses, a more efficient method of controlling motors can be achieved. The other big benefit of this is that it is often easier for a digital machine to switch things on and off than control a continuously varying (analogue) signal. If simply flipping one [bit](/wiki/bit.html "Binary Digit") over a time base is used, control becomes fairly easy electronically, and more advanced circuits like a H-Bridge could be used.

<div class="embed-responsive embed-responsive-16by9">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/8_mZwEw8ivY" frameborder="0" allowfullscreen="True">
</iframe>
</div>

The technique of PWM relies of the concept of persistence. If you are controlling a motor, then its inertia will keep it turning, if you are controlling a lamp, then the lamps fade time, and human persistence of vision will mean you can rapidly turn it on and off. This is sometimes the best way of dimming the perceived brightness of an [LED](/wiki/led.html "Light Emitting Diode") where simply adjusting the voltage will cause it turn off as [LEDs](/wiki/led.html "Light Emitting Diode") have a threshold. With a motor, using a volume dial style control method that constantly varies would mean that first a lot of power is wasted as heat by the [resistor](/wiki/resistor.html "Resistor"), and also as the power drops, the chance of the motor stalling is greater, than if the coils are energised rapidly at a higher voltage.

Do not confuse Pulse Width Modulation with Frequency Modulation (FM). In FM, the frequency, that is, the length of a cycle or the timebase is changed, but in PWM it is constant. So the clock itself stays the same. The voltage and current of each pulse is also constant.

Look at the following diagram. In each graph, take 1 as power on, and 0 as power off. The top graph shows a trace of the signal for a medium speed. Consider this also the signal for the clock, or timebase for the PWM controller. The middle diagram shows a lower speed - note that the actual pulses are shorted, and the gaps between them are longer, but each whole cycle still matches those of the graph above. The last graph shows something being driven for higher speed (or brightness). Note again that each whole cycle is the same as the top graph, but that the up pulses are now much longer - meaning that for each cycle, the motor gets more power, and turns further or faster.

An H-Bridge is essentially a digital device, and is often vital when controlling a motor that potentially needs to go both ways. It takes fewer components to allow an H-Bridge simply to turn each side on or off rather than constantly varying them, and is much simpler or easier to control. So where it is not practical to use analogue control, a digital method is required - and for this PWM is ideal.

This is just as well, because analogue control would also require any [microcontrollers](/wiki/microcontroller.html "A programmable digital controller (or ") to use D to A's, which are expensive and take up a lot of output ports.
