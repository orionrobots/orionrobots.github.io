---
layout: page
title: Using The RCX With Stepper Motors
date: 2005-10-03 15:44:31
---
<h1 id="Introduction">Introduction</h1>
<p>This little tutorial applies not just to the <a class="wiki" href="/wiki/lego_rcx.html" title="The Lego RCX">Lego RCX</a>, but should in fact serve any other application where you would like to convert <a class="wiki" href="/wiki/pwm.html" title="Pulse Width Modulation">PWM</a> signals to drive stepper motors. It is a bit of a kludge, and you may be better off using a microcontroller with a digital output to send step signals. In some applications, including the <a class="wiki" href="/wiki/lego_rcx.html" title="The Lego RCX">Lego RCX</a>, <a class="wiki" href="/wiki/pwm.html" title="Pulse Width Modulation">PWM</a> outputs is all you might have free.
</p>
<p>Please click any image for an enlarged view.
</p>
<h1 id="Recap">Recap</h1>
<p>First a Recap on <a class="wiki" href="/wiki/stepper_motors.html" title="Stepper Motors">Stepper Motors</a>.
</p>
<p>A stepper motor is a multiple coil motor(often 4), which moves a very short distance for each step - corresponding with the coil energised.
</p>
<p><img class="img-responsive" src="image138"/>
</p>
<p>The coils normally have a common connection, and multiple signal connections.  It is by signalling those in sequence, that you can move the motor.  To reverse the motor, you reverse the sequence - "not the polarity".
</p>
<h1 id="How_to_do_it">How to do it</h1>
<p>To get outputs from the <a class="wiki" href="/wiki/lego_rcx.html" title="The Lego RCX">Lego RCX</a> to do this, you need to bear a few things in mind.  Check the voltage requirements of the Stepper, because of the control circuitry, and its requirements - you will need an external power supply (9-12v). This supply will need to be constant. We could not really use a sensor port - as although this may be enough for the control circuits, it would not be able to safely deliver the current required by the coils of the stepper. So we may need to use another output port. The problem being that even at full power- it is still PWM, so you will require a smoothing cap, and a voltage regulator for the control circuits.
</p>
<p><img class="img-responsive" src="image139"/>
</p>
<p>Activating the coils will require a shift register, which allows a roll - or carry operation when shifting, and is reversible - with two clock inputs.
</p>
<p>
<br/>Now the PWM output from the controlling port can be used as a clock pulse for the circuit - but should probably be scaled down to a handle-able voltage of around 5v for the logic inputs - and in such a way that if it is positive it activates one input, and if negative - it activates another. The could be acheived with two transistors - one  with a pull-down output, and the other a pull-up output. These outputs then go to the clock lines.
</p>
<p><img class="img-responsive" src="image140"/>
</p>
<p>The shift register will need to be initially loaded with a one to shift, and the clear line on it should be held low. This will mean it will require a priming method. The method I will go with is that if all the outputs are 0 - then prime it with a 1. A four input NOR will do this.
</p>
<p>The outputs of the shift register should then go to the power transistors, and not directly to the coils.
</p>
<p>Bringing all together we have the following diagram. It has no component values.
</p>
<p><img class="img-responsive" src="image141"/>
</p>
<p>The shift register IC providing the services we want may not actualy exist, but it could be constructed from others fairly simply. When I next update this artical - I will have researched these...
</p>
<h1 id="Conclusions">Conclusions</h1>
<p>Looking at the circuit above - it means we will not actually be able to pulse the motor forward once or backward once - given that we really cannot control the actual <a class="wiki" href="/wiki/pwm.html" title="Pulse Width Modulation">PWM</a> outputs that finely. I am not sure if we can actually control the rate of them using that circuit either - as changing the power output changes the <a class="wiki" href="/wiki/pwm.html" title="Pulse Width Modulation">PWM</a> on to off ratio, and not the clock cycle speed. There are a few single chip products on the market that work in exactly this way from the <a class="wiki" href="/wiki/pwm.html" title="Pulse Width Modulation">PWM</a>.
</p>
<p>For more accurate control - single stepping, we would probably require a serial stepper controller linked to an <a class="wiki" href="/wiki/infra_red.html" title="A type of EM radiation commonly used for digital communications">Infra Red</a> receiver connected to the RCX.
</p>
<p>However - if you are finding you want to do this a lot, then it might be time to consider using a less limited <a a="" brain="" class="wiki" for="" href="/wiki/microcontroller.html" robot="" title="A programmable digital controller (or ">microcontroller</a>.
</p>
<p>{GOOGLEBAR(pub=pub-1306094303661715)/}
</p>
