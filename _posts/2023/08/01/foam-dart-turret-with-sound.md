---
title: Making a robotic foam dart turret with sound effects
tags: [robotics at home, servo motor, rp2040, raspberry pi pico, python, micropython, foam dart, turret, sound effects]
thumbnail: /_posts/2023/08/01/foam-dart-screenshot.png
description: Programming a robot dart to fire with sound effects
date: 2023-08-01
author: Danny Staple
---
Today I took the Foam Dart turret I made for my 2020 Piwars robot "Bangers and Bash", which had some problems around power handling, and having attached it to a Pimoroni Yukon, got it to make sound effects before firing a spread of 5 foam darts. Not sure it is perfect for mowing down Piwars targets in a challenge as the spread is not so much aimed but uniform.

This was built with help from Pimoroni and Youtube user "Little French Robot", whose 3D printable design was modified into this.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Sx7Wl15f0gM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>

## How it is done

The turret robot is built using 3 servo motors:

- One for Yaw
- One for Tilt
- One for the firing pin

There are then two roller motors. They spin up, and the firing pin pushes a foam dart into the path of the rollers, which then fire it out. They have a diode so they'll only spin in one direction.

The Pico will instruct the tilt to raise the turret, then wait for a button before playing a sound through a speaker. After that, it will move the yaw a little to the left, start the rollers, and then fire all its darts, sweeping a little each time until it's pointing a little to the right.

The servo angle is set with a simple calculation:

```python
DARTS_TO_FIRE = 7
SWEEP_ANGLE = 60
angle_step = SWEEP_ANGLE / DARTS_TO_FIRE
```

When it comes to firing, we run a loop:

```python
yaw_servo.angle = 90 - SWEEP_ANGLE / 2
for _ in range(DARTS_TO_FIRE):
    firing_servo.angle = FIRE_ANGLE
    sleep(0.3)
    firing_servo.angle = RETRACT_ANGLE
    sleep(0.3)
    yaw_servo.angle += angle_step
```

## Original turret project

I adapted this turret to fit on a robot, but the original designs and plans are at [Little French Kev | Bluetooth Nerf Turret](https://www.littlefrenchkev.com/bluetooth-nerf-turret).

Tips for this:

- I found the band for keeping the darts down breaks frequently.
- Take extra care with motor polarity - don't have it going backwards.
- Depending on how you are driving the motors, you may need noise suppression capacitors.
- Check the motors first - I had one where the coils were gone and shorting out - it took a chunk of investigation to find that.
- For maintenance, it's quite handy to pop the roller assembly off.
- Spiral wire wrap is great for keeping those wiring tidy and routing down to the robot. I used different electronics, with none mounted on the turret.
- Control wise - spin up the turrets, then fire.
