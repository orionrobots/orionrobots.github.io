---
layout: page
title: Stepper Motors
date: 2007-01-28 16:24:57
---
<p>A stepper motor is a motor that is designed to be pulsed and move in defined repeatable steps. Its use is in situations where accurate positioning is needed.
</p>
<p>They will usually have 4 sets of coils, and therefore 4 signal lines, and one common connector. The common may be positive or negative, and sometimes they have built in <a href="/wiki/diode.html" title="Diode">diodes</a> to enforce this.
</p>
<p><img class="img-responsive" src="image138"/>
</p>
<p>As you pulse the coils in order, the motor will rotate a small fixed distance. This diagram simplifies things greatly, as each set of coils may have many coils.   Many motors have around 120 increments per rotation.
</p>
<p>Be aware of the fact that a stepper is an inductive load, and draws a fairly large current. They should not be used directly with a <a a="" brain="" for="" href="/wiki/microcontroller.html" robot="" title="A programmable digital controller (or ">microcontroller</a>, and should have some sort of power transistor circuit between them.
</p>
<h1 id="Uses">Uses</h1>
<p>They are often used in disk drives, and are quite useful in robot arms, although in that field <a href="/wiki/servo_motor.html" title="A motor with built in positioning control - easily interfaced with digital systems">servo motors</a> are rapidly becoming more common.
</p>
<p>Almost every printer, scanner or plotter is probably based on stepper motors to manouvre their heads. This is not surprising, as these devices are probably the most common household robots.
</p>
<p>It is not advised to use stepper motors for driving wheels, although they give a great deal of control, they would overheat, and be slow. A modified servo makes a much better locomotion motor. if you want exact positioning - remember that a wheel may loose traction and slip, so a stepper motor cannot really even guarantee that. Having <a href="/wiki/odometry.html" title="Measurement of distance through step/rev counting">odometry</a> systems is a far better solution.
</p>
<h1 id="Related_notes">Related notes</h1>
<p><a href="/wiki/using_the_rcx_with_stepper_motors.html" title="Using The RCX With Stepper Motors">Using The RCX with Stepper Motors</a>
</p>
