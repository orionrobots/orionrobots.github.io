---
layout: page
title: Servo Motor
tags: [electronics, robot building]
date: 2005-08-03 23:16:58
---
When you build robots, you will often need precision control.

One way to do this is through [feedback](/wiki/feedback.html "A method of detecting changes resulting from an action - for example how far an arm moves when a motor is activated").

If you move a limb, and you want it position and a precise location, you would probably employ a method involving a [MicroController](/wiki/microcontroller.html "A programmable digital controller"), a [motor](/wiki/motor.html "Motor") and some sort of device to say how far from the target the motor is.

A Servo Motor is precisely these things wrapped up in one package. All you need to do, is tell it where you want it to be. This is normally done by sending some sort of time-based signal using [PWM](/wiki/pwm.html "Pulse Width Modulation").

There is a common method in robotics of modifying servos to get constant speed from them for drive motors. The reason for doing that is that most [microcontrollers](/wiki/microcontroller.html "A programmable digital controller") have [PWM](/wiki/pwm.html "Pulse Width Modulation") controllers built in - and it is a much better method of controlling motors than simply lowering the voltage or putting a [resistor](/wiki/resistor.html "Resistor") with it.

Decent servos are often found in RC Cars and Futaba seems to be the favourite brand. Hobby magazines for Aircraft and boat modelling often have catalogue sections with many good prices for Servos.

Most servos come in a package with the geared motor and a control circuit with a sensory device. They normally have three connections - two for the power (positive and ground) and one signal line. There are two main varieties - analogue - which use the signals duty ratio to determine their position, and fully digital ones which actually employ a [serial](/wiki/serial_data_stream.html "Serial Data Stream") protocol allowing for easy digital control, and may even allow a [MicroController](/wiki/microcontroller.html "A programmable digital controller (or ") to read back the position of them.
