---
title: Adapting different Raspberry Pi motor drivers for Piwars 2024
tags: [robotics at home, raspberry pi, motor controller, electronics, python, programming, piwars, robot building, piwars 2024]
description: An adaptation layer I've been working on
date: 2023-10-18
thumbnail: _posts/2023/2023-10-18-adapting-different-pi-motor-controllers/robot_motor_driver_common_code.png
---
A common chore I find myself doing (and I imagine anyone who has built a few robots) is adapting code they've written to many different motor driver or main breakout boards.

{% img_responsive "_posts/2023/2023-10-18-adapting-different-pi-motor-controllers/robot_motor_driver_common_code.png", "The motor driver adaptor file tree so far" %}

I am embarking on a few different and related pursuits - writing a new robotics book, building out the PiWars robot and building a few other robots. I often have a few different motor drivers and breakout boards I want to use, and I want to be able to use them interchangeably.

I've been working on a Python layer for a common interface to different breakout boards. I've based it on the [GPIOZero robot](https://gpiozero.readthedocs.io/en/stable/api_boards.html#robot) interface - which is two motors set up as the main drive. This interface is fairly simple. It's not got all the functions some robot board interfaces do, I am consider how to address capabilities like that.

I've also accompanied each with a Fabric based installation file too. This means they can be installed on a Raspberry Pi over SSH with a single command. This means that I can then write my robot code based on this layer. Each board also has notes, with links to their respective code and documentation that I consulted when writing the adaptor. I've also been getting my robotics student involved with writing adaptors for the motor board they are using, so they can learn this technique too.

See this code in my [Piwars 2024 GitHub Repository](https://github.com/orionrobots/piwars_2024_disasterzone).

## Adapting the RedRobotics Redboard+

Last week I adapted the RedRobotics Redboard+ to it.

{% img_responsive "_posts/2023/2023-10-18-adapting-different-pi-motor-controllers/redrobotics_redboard_on_a_robot.JPG", "The RedRobotics Redboard+ on a SparkFun Shadow Chassis robot" %}

This one was a bit tricky to adapt, as in theory it's a phase + PWM pin motor type, which is one of the GPIOZero defaults. However, I ran into a few issues.

The first is that the RedBoard needs a somewhat higher voltage, so I used two 18650 3.7v batteries. When freshly charged, they output 4.2v each, so it was running on 8.4v. This is a bit higher than the 6v the motors I was using (DFRobot FIT0450 motors) liked, so they were running a bit fast, and I definitely got burning carbon smells. i had to tone the PWM down a lot. So it's worth noting that the Redboard+ is more suitable for larger motors with a higher voltage. Note that the DFRobot FIT0450 motors are rated at 3-7.5v, so this was a bit high.

My test code was setting a speed value in each call, however, this problem led me to quickly setting an overall speed for the test, with the redboard being a 0.4! This might be an additional property to add to my library, an overall scaling factor.

Next - motors were going the wrong way. With some boards, you'd swap the motor pins in software, but if using the Phase/PWM pins, this doesn't make sense. So I needed to swap output wires.

The test code I use, does a turn left, turn right, forward, backward sequence with stops. The left/right instructions, based on the GPIOzero interface, do a rotation on the spot, turning both motors. So if one is incorrectly wired, it will go forward instead.

This lead to much confusion with me swapping wires, that is - swapping which was left/right (in code) and swapping which way up the motor leads went in. In hindsight, this would be less confusing if I just tested each motor in isolation, before driving both any which way.

My Piwars 2024 robot has larger 12v motors, so this might be a perfect board for that.

## Boards currently supported

I've currently got the following boards supported and tested:

- RedRobotics Redboard+
- Gravity TB6612FNG plugged into a Gravity IO Expansion board
- Pimoroni Inventor Hat

I've not yet fully tested:

- Adafruit Stepper Motor Hat
- Adafruit Cricket

Although there's code to try them. We ran into difficulty with the Cricket with i2c connectivity issues, so I need to revisit that.

I want to make this a fair collection of motor boards, including the PiConZero, and the Explorer Hat Pro.

## motor driver comparison

- The Redboard+, because it uses a higher voltage, makes tt-motors really quick, but smelt like burning.
- The Adafruit Cricket - a bit fussy about power. Not sure if you an route the 5v output back into it's input.
- The Inventor hat mini - once past the motor connector faff, it's easy to swap motors, and works nicely over i2c - first time. LED's mean you gotta run that code with sudo though.
- DFRobot gravity - too many wires, but very flexible. Works easily - can be the L298n breakout.
- Adafruit stepper hat - does nearly everything, if you solder for it.
- PiConZero - still one of my favourite boards, with the one shortcoming that it doesn't expose i2c pins and covers access to them on the Pi.
- Generic stepper hats - look, they do a lot, and work. However, they are inconsistent at best, making them a good choice if you get hold of one that matches the spec.
