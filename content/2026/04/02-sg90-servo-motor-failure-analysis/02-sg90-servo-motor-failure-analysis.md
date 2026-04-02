---
title: "Another SG90 Servo Failed: Heat, Clicking, and a Likely Gear Jam"
description: "Notes from diagnosing a failed SG90 micro servo that made an unusual low-pitch whirring noise, got hot, drew high current, and ended up beyond economical repair."
author: Danny Staple
date: 2026-04-02
tags:
  - robotics
  - servo
  - sg90
  - debugging
  - hardware
thumbnail: /content/2026/04/02-sg90-servo-motor-failure-analysis/gearchain-on-servo.jpg
---
Another SG90 servo failed on me today.

This one appeared to have an official **Tower Pro** sticker, so it was not obviously a no-name oddity from the outset. The failure mode was different from the last bad SG90 I had, where the issue turned out to be damaged wiring.

## What happened

While running, the servo made a very unusual noise — a whirr dropping right down in pitch — as though it had got stuck and was trying to torque its way out of the problem. It then got very hot and stopped responding properly, although it was still clicking.

At the same time, the **Inventor HAT Mini** driving it also got hot, and current draw was noticeably high.

I could smell that something was wrong almost immediately.

## First observations

I disconnected the servo straight away.

After that:

- the output spindle no longer turned normally
- the smell of burnt electronics was quite strong
- even the cat noticed the funny smell

{% img_responsive "content/2026/04/02-sg90-servo-motor-failure-analysis/gearchain-on-servo.jpg" "The SG90 servo with the gear train visible. The final output gear is the one on the top left, which also couples into the potentiometer." %}
*Inside the SG90 after opening it. Unlike a previous failed servo, the wiring looked intact and there was no immediately obvious broken lead.*

Unlike the last failed servo, the cables looked intact, so this did not seem to be a wiring fault.

## Opening it up

I opened the servo carefully with my tiny toolkit while it was still a bit warm.

Inside:

- the wiring appeared intact
- the gear train did not look obviously broken
- the potentiometer still moved
- there was no obvious visible damage on the chips

However, the overall smell strongly suggested that the electronics had been badly stressed, and possibly that some of the magic smoke had already made its escape.

One especially useful clue was that the gear train felt **stiff by hand** once I had it apart. Even with the motor/pot/electronics effectively out of the picture, the mechanism did not feel free in the way it should.

Another useful detail is that the final output gear/shaft also couples to the potentiometer via a small flat-ended interface. That makes it part of both the output drive path and the position feedback system, so I took a close-up photo of that gear in particular.

{% img_responsive "content/2026/04/02-sg90-servo-motor-failure-analysis/servo-geartrain.jpg" "The SG90 servo gear train. It's not meshing very well." %}
*The SG90 gear train. The gear train did not look obviously shattered, but the mechanism felt stiffer than it should by hand.*

## Likely failure mode

My best guess is:

1. something in the plastic gear train jammed or bound up
2. the servo tried to torque through the jam
3. current draw rose sharply
4. heat built up in both the servo and the controller
5. the electronics were stressed or partially damaged

That would explain:

- the unusual low-pitch whirring noise
- the heat
- the high current draw
- the clicking
- the burnt-electronics smell

{% img_responsive "content/2026/04/02-sg90-servo-motor-failure-analysis/output-gear.jpg" "The final output gear also couples into the potentiometer via a flat-ended interface, making it part of both the mechanical output path and the position feedback system." %}
*The final output gear also couples into the potentiometer via a flat-ended interface, making it part of both the mechanical output path and the position feedback system.*

The exact failure mode is not perfectly certain, but this looks much more like a **mechanical jam leading to electrical distress** than a simple wiring issue.

## Repair or replace?

For these relatively cheap SG90 servos, this is usually beyond economical repair.

If the problem is a broken lead or damaged wiring, a repair can be worthwhile. In this case, though, replacement is the sensible remedy.

So the practical fix here is simply to replace it with a new SG90.

## Takeaway

If an SG90 suddenly:

- makes an odd low-pitch whirring noise
- gets hot
- causes the controller to get hot
- draws unusually high current
- starts clicking instead of moving normally
- and smells burnt

then it is worth suspecting a jammed or binding gear train, even if the gears do not look visibly shattered at first glance.

Sometimes the cheapest robot parts fail in the most educational ways.
