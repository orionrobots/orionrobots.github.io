---
layout: page
title: DC Motor
tags: [electronics, robots, robotics, robot building]
date: 2007-01-28 22:03:50
---
This is a basic spinning [motor](/wiki/motor.html "Motor"). It might be referred to as a "Fixed Magnet DC Motor" as there are other motors which run on DC - this is just what is commonly meant when people simply say a motor or DC motor, although they may also be referring to gear motors, where the spindle speed has been reduced by a gear chain.

It is operated by a [Direct Current](/wiki/direct_current.html "Direct Current") and rotates in a direction set by the polarity of the current. Using [PWM](/wiki/pwm) with an h-bridge is a great to control the speed of DC motors.

## Components of a DC Motor

The basic design of a DC motor requires an outer stator, a holder for the rotor axle, and brushes to pass electricity to the rotor.

The rotor - rotating part has at least three electromagnets(more mean smoother operation) around a central axle.  The central axle also has a small ring with three(or more) contacts known as commutators (see title below).  As the motor rotates - the brushes on the stator connect with the commutator - and the motor changes polarity when the motor has turned - so the electromagnets polarities will change - this will attract them to the other stator magnet.

<img class="img-responsive" src="/galleries/gallery-1-common-images/222-motorworkings.png"/>

The demonstration two electromagnet design is simple, and has limited efficiency and stability - professional motors are often a great deal more complex than this.

Carbon is commonly used to lubricate the brushes on the commutators - as it is conductive (under some circumstances) while also being fairly hard wearing and not as messy as oil.

### Stator

A DC motor or generator commonly has a static/stationary set of two or more permanent magnets or coils - these are referred to as the stator.

Depending on their design, they may actually be on the inside, or the outside of the motor.

### Commutators

Commutators are the curved copper plates around the armature of a DC Motor - with insulating material between them. They are also used in Generators, and some older switching systems(though those may have been replaced by solid state gear).

These plates are in contact with the brushes which allow them to transmit power from the source to the coil windings.

In a DC Motor, as the commutators move past the brushes their polarities change, therefore changing the polarity of the magnetic fields of the coils.

## Control Systems

DC motors may be crudely controlled by a switch and a <a href="/wiki/variable_resistor.html" title="A Resistor Which Can Be Controlled In Situ">Variable Resistor</a> - which will actually waste power as heat, or more efficiently by <a href="/wiki/pwm.html" title="Pulse Width Modulation">PWM</a> which is easily generated by a <a href="/wiki/microcontroller.html">MicroController</a>.

If you want a simple direct control system, you may wish to consider [Servo Motors](/wiki/servo_motor) instead.

## Smoothing

When using DC motors with more complex control circuits, you may observe erratic or difficult to control behaviour. This is due to one of two factors.

* DC Motors draw a lot of current, especially when starting up - this may actually drain it from the control circuitry, and starve it. It is therefore recommended you have a separate power supply for these, and use a H-Bridge or <a href="/wiki/electronic_relay.html" title="An electrically activated switch">Electronic Relay</a> to control them.
* DC Motors may also introduce noise to a circuit - so it is recommended you use a <a href="/wiki/capacitor.html" title="Capacitor">Capacitor</a> in parallel to smooth the high frequency signals from the motor. This is even more critical in radio control applications where they can generate a lot of ambient noise. Be aware that if you are using <a href="/wiki/pwm.html" title="Pulse Width Modulation">PWM</a> to control the motor, then you must calculate the capacitance so as to damp noise, but not actually impede the <a href="/wiki/pwm.html" title="Pulse Width Modulation">PWM</a> signal.

If you are using motors on a device with ultrasonic sensors, the motors may also introduce a great deal of high frequency vibration - it is worth considering using suspension or damping foam around the Ultrasonic transducers to ensure it does not interfere with them.

## Gearing

Standard DC motors are in no way geared, and this may mean that their output may be too fast with very low torque. You should probably gear them down a few times. This may be your problem if you attached your wheels directly to the motor shaft.

<a href="/wiki/lego.html" title="The best known construction toy">Lego</a> have both geared, and non-geared motor varieties.
