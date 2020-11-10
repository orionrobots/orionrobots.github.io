---
layout: page
title: Servo Motor
date: 2005-08-03 23:16:58
---
<p>When you build robots, you will often need precision control.
</p>
<p>One way to do this is through <a href="/wiki/feedback.html" title="A method of detecting changes resulting from an action - for example how far an arm moves when a motor is activated">feedback</a>.
</p>
<p>If you move a limb, and you want it position and a precise location, you would probably employ a method involving a <a a="" brain")="" for="" href="/wiki/microcontroller.html" robot"="" title="A programmable digital controller (or ">MicroController</a>, a <a href="/wiki/motor.html" title="Motor">motor</a> and some sort of device to say how far from the target the motor is.
</p>
<p>A Servo Motor is precisely these things wrapped up in one package.  All you need to do, is tell it where you want it to be. This is normally done by sending some sort of time-based signal using <a href="/wiki/pwm.html" title="Pulse Width Modulation">PWM</a>.
</p>
<p>There is a common method in robotics of modifying servos to get constant speed from them for drive motors.  The reason for doing that is that most <a a="" brain")="" for="" href="/wiki/microcontroller.html" robot"="" title="A programmable digital controller (or ">microcontrollers</a> have <a href="/wiki/pwm.html" title="Pulse Width Modulation">PWM</a> controllers built in - and it is a much better method of controlling motors than simply lowering the voltage or putting a <a href="/wiki/resistor.html" title="Resistor">resistor</a> with it.
</p>
<p>Decent servos are often found in RC Cars and Futaba seems to be the favourite brand. Hobby magazines for Aircraft and boat modelling often have catalogue sections with many good prices for Servos.
</p>
<p>Most servos come in a package with the geared motor and a control circuit with a sensory device. They normally have three connections - two for the power (positive and ground) and one signal line. There are two main varieties - analogue - which use the signals duty ratio to determine their position, and fully digital ones which actually employ a <a href="/wiki/serial_data_stream.html" title="Serial Data Stream">serial</a> protocol allowing for easy digital control, and may even allow a <a a="" brain")="" for="" href="/wiki/microcontroller.html" robot"="" title="A programmable digital controller (or ">MicroController</a> to read back the position of them.
</p>
<p>{TECHTAG(tag=robot)/} {TECHTAG(tag=servo)/} {TECHTAG(tag=motor)/} {TECHTAG(tag=microcontroller)/}
<br/>{TECHTAG(tag=electronics)/} {TECHTAG(tag=hacking)/} {TECHTAG(tag=PWM)/}
</p>
