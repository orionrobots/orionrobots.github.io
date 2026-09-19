---
layout: page
title: Diode
tags: [electronics, robot building]
date: 2005-12-02 21:33:44
---
A diode is an electronic component that allows current to only flow in only one direction.

Depending on the diode, they will only allows current to flow if the voltage is greater than a threshold, for example 0.6 volts.

The current may flow in another direction if it exceeds the breakdown voltage of the diode - this is generally a bad thing, and implies damage. There is however the special case Zener Diode - where this is an integral part of the design, and the breakdown voltage can be used for voltage regulation applications.

Diodes are often cylinders with a wire at each end. They tend to be either black, or transparent, with a single band at one end indicating the [Cathode](/wiki/cathode.html "The Negative Electrode"). They are based on a PN Junction using either doped silicon, or germanium. Germanium diodes are used in a Crystal Radio Set to allow the currents induced in the coil to actually power the device.

More commonly diodes are used in regulating power flow direction in a [Diode Bridge](/wiki/diode_bridge.html "Diode Bridge") and maintain polarity.

Zener diodes are often used for limiting voltages - where they are placed in parallel to a sensitive circuit in the reverse direction - so if the voltage exceeds their breakdown voltage, they will conduct away the voltages and sparing the sensitive circuit from harm. They are used in many DC voltage regulation or reduction circuits.

There are specialist diodes like [LED](/wiki/led.html "Light Emitting Diode")'s and Photo Diodes although generally most diodes in transparent cases are slightly light sensitive, and also slightly temperature sensitive (like any silicon based device).

## Diode water diagrams

I will use water flow diagrams to try and explain all the behaviours of a diode, so that readers may gain an understanding of them and their use

All diodes have a minimum operating voltage, before which they will not conduct, this is represented by the spring in the diagram, and currently the water flow is not enough to overcome the spring. Typically this is around 0.6 volts in a diode.

In this diagram, there is enough water pressure to overcome the barrier, and it is allowed to flow.

Here there is a small reverse flow - which is not allowed, and the barrier remains closed.

This final diagram is what happens when the reverse flow is too much, the barrier is opened the opposite way, and the voltage is allowed to flow. Now this may actually have cause permanent damage to the diode if the reverse bias was strong enough.

In the case of the zener diode, it is part of its intended design that it can deal with a reverse flow without becoming damaged, and the breakdown would simply be a stronger spring in the other direction on the barrier.

## Links

* [Discrete Semiconductor Kit Identification Guide](https://learn.sparkfun.com/tutorials/discrete-semiconductor-kit-identification-guide/diodes)
