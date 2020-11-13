---
layout: page
title: Stepper Motors
date: 2007-01-28 16:24:57
---
A stepper motor is a motor that is designed to be pulsed and move in defined repeatable steps. Its use is in situations where accurate positioning is needed.

They will usually have 4 sets of coils, and therefore 4 signal lines, and one common connector. The common may be positive or negative, and sometimes they have built in [diodes](/wiki/diode.html "Diode") to enforce this.

![](/galleries/gallery-1-common-images/138-steppermotor.png)

As you pulse the coils in order, the motor will rotate a small fixed distance. This diagram simplifies things greatly, as each set of coils may have many coils. Many motors have around 120 increments per rotation.

Be aware of the fact that a stepper is an inductive load, and draws a fairly large current. They should not be used directly with a [microcontroller](/wiki/microcontroller.html "A programmable digital controller (or "), and should have some sort of power transistor circuit between them.

## Uses

They are often used in disk drives, and are quite useful in robot arms, although in that field [servo motors](/wiki/servo_motor.html "A motor with built in positioning control - easily interfaced with digital systems") are rapidly becoming more common.

Almost every printer, scanner or plotter is probably based on stepper motors to manouvre their heads. This is not surprising, as these devices are probably the most common household robots.

It is not advised to use stepper motors for driving wheels, although they give a great deal of control, they would overheat, and be slow. A modified servo makes a much better locomotion motor. if you want exact positioning - remember that a wheel may loose traction and slip, so a stepper motor cannot really even guarantee that. Having [odometry](/wiki/odometry.html "Measurement of distance through step/rev counting") systems is a far better solution.

# Related notes

[Using The RCX with Stepper Motors](/wiki/using_the_rcx_with_stepper_motors.html "Using The RCX With Stepper Motors")
