---
date: 2018-2-26 22:01:01
tags: [robots, robotics, raspberry pi, piwars, 4tronix, piconzero]
title: 2018-02-26-piwars-robot-status
layout: post
---
## PiWars 2018 Robot Status

Orionrobots are currently reserves for the PiWars 2018 competition in Cambridge, Uk in April 2018.

We are building a robot to take with us there, which could compete if needed, or if not, would still be fun and interesting to show.

## Ideas

First we came up with ideas. Helena was keen on something Meerkat themed. While that will be fun, we probably need to get something that drives going first. Jonathan wants lights.

Danny suggested we start with the 4Tronix chassis, in fact, start with Skittlebot - which was already some way towards doing the [Over the Rainbow challenge](http://piwars.org/2018-competition/challenges/somewhere-over-the-rainbow/) challenge with a camera and it's [skittle tracking behaviour](https://www.youtube.com/watch?v=z14HcflsRW0&t=25s).

{% include youtube_responsive src="https://www.youtube.com/embed/z14HcflsRW0" %}

## Enhancements

To make this robot into one that could be used - we'd need to give it a bit of an overhaul. Starting with needing some distance sensors. We have bags of them in the lab. However, mounting them nicely would need some brackets.

Danny started coming up with designs for these in Fusion - and printing prototypes, this was just as we suffered a failure in our 3D printer (z axis bracket failing). Since this was going to be a while before it was fixed, it was time to consider the other issues.

## Drive chain

Skittlebot has a major weakness. It's drive chain is just fine on a bit of board, or laminate flooring. However, it was useless on a carpet and refused to go through turns. It was based on the 4tronix initio chassis - basically unmodified at this point. It was also using the 4Tronix PiConZero board.

We like the Initio chassis - it has a battery box, power switch, motors, encoders for those, wheels, two platforms, and a neat grid system for laying out boards on top. However, it was also a little basic looking.

Danny had a bit of a brainwave. One of the previous builds Danny had made was TankBot - a modified toy chassis he'd got cheap, running a Raspberry Pi zero and PiConZero, plus a servo to make the turret turn.

{% include youtube_responsive src="https://www.youtube.com/embed/6BK1TG_CZkQ" %}

A brief interlude - Helena finds Danny's naming rather hilarious - Skittlebot, Tankbot and Armbot - so this new robot may yet need a new name. She wasn't keen on MeerkatBot either. Btu we digress, back to the idea.

Danny's idea was to buy a larger tracked RC toy cheaply from the internet, and modify that.

<a href="https://www.amazon.co.uk/Top-Functional-Excavator-Electric-Construction/dp/B00AG573L8/ref=as_li_ss_il?ie=UTF8&qid=1519683404&sr=8-3&keywords=RC+excavator&linkCode=li2&tag=orionrobots-21&linkId=1c11d22b0a53789a561e0d478e2d673e&language=en_GB" target="_blank"><img border="0" src="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00AG573L8&Format=_SL160_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=orionrobots-21&language=en_GB" ></a><img src="https://ir-uk.amazon-adsystem.com/e/ir?t=orionrobots-21&language=en_GB&l=li2&o=2&a=B00AG573L8" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /><img src="https://ir-uk.amazon-adsystem.com/e/ir?t=orionrobots-21&l=li2&o=2&a=B00AG573L8" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

His choice was this <a href="http://amzn.to/2EVvPDy">Top Race 7 Channel RC Excavator (paid link)</a> - it had RC, motors, tank tracks. It was definitely looking like it would do the business, but wasn't too expensive to feel bad about tearing it apart to make something else.

Each set of tracks is independently controlled from the two sticks, the Turntable can be turned, and an additional function makes the buckets move. There are lights that move in response to the actions, and the remote makes sound effects (this is quickly a bit annoying).

The item arrived before the 3D printer repairs did. Danny attempted to get a video of the toy working before- which we may publish, but has no audio (whoops - should've done a sound check!). What he did manage to test is if it drove on carpet - it drove great on carpet, it turned and the excavator happily climbed over stuff, so this must be a great thing to convert.

Danny then started to pull it apart. Inside the main body section, there is a single board controlling everything with 3 chips. None of the numbers on them are identifiable, presumably a 2 channel motor controller, a 1 channel motor controller and an RC/Microcontroller for the rest of the board. Danny was hoping to repurpose this stuff with a Pi in the middle - but settled for just the chassis plus motors.

## Fitting the Initio platform

Danny did a bit of squaring up - and managed to rig the Initio platform - the grid with holes for fitting many different board, onto the upper turntable section of the toy.

He attached a Pi, a USB power supply, used the original battery pack from the Toy + a PiConZero motor controller, and got the robot to drive using the PiConZero code already on the Pi.

{% include youtube_responsive src="https://www.youtube.com/embed/TwRw6XGqJmI" %}

Sadly - the excavator chassis has nowhere near the power and ability on the carpet that the original did. It's squealing and getting stuck when trying to turn. It's fine on the wooden floor though.

Although untested since moving it, there is still code from Skittlebot here to use the PiCamera for OpenCV analysis, and also code to work with a Playstation Joypad wirelessly.

Danny is trying to determine - is this that the batteries were low on charge, if there was something wrong with the tracks or if the bot is just too heavy. The last option would be bad news - as sensors aren't even on it yet.

We determined that one axis on a motor had been bent, but even with a fresh charge - while slightly better, it still struggled to turn. However, the robot was able to climb things.

At this point Danny is retrofitting it to a single set of AA batteries instead of the original battery pack + USB power pack it had before.

This should be lighter, provide a bit more voltage.

## Wiring

The robot's wiring is a bit of a mess - but Danny has use chop blocks and Wago connectors to separate the Bottom section (under the turntable), from the middle part - the upper turntable with the power switch, and then the Initio plate on top. It may be erring on too many connectors - but this should make disassembly easier.

There is an issue with disassembly - in that to remove the top deck from the lower one, the turntable must be disassembled from below. Danny is going to try and find better spacer parts to remedy that.

In terms of power conversion and distribution - the motor power is handled through the 4tronix. The Pi Power is handled through the nice new Pimoroni Wide Input shim. The shim is loosely on the robot - and may need a dab of solder or something to hold it on better - still something to think about. Hopefully this will behave in a similar way to a UBEC, but targeted at the Pi.

The Pi is held onto the chassis in a PiBow case - this had to be modified, rather brutally with cutters, to accommodate the shim.

## Remaining issues

First - to retrofit the AA battery set is part way through - annoyingly, and for the second time, one of the tiny wires going to the motors snapped off. Danny has soldered another back on already with some heat shrink - so this should be an easy job - Helena may want a go at that.

As mentioned above, the Wide Input Shim is only loosely held on.

The Wago connectors are too bulky.

The upper deck is a pain to separate from the lower deck and needs some spacers.

The camera, and ultrasonic sensors need to be fitted. This means a bunch of 3D printing.

The whole thing needs to be test driven, and the code pared down to the specific event challenges.

Helena wants the meerkat look - we considered the idea of doing a tiny one in a drivers seat stuck on top, with Jon's light around it. The lights can be some Neopixel types - handy for some diagnosis/debug/feedback lights as well.

So there is plenty to do to this robot, and only a month or so to do it in. Getting it to reliably drive and turn is clearly the most important bit, with the sensors and test drive going.
Stuff like the bulky connectors, deck maintenance issues and meerkat looks can come later.

## Helena Learning 3D printing

Danny has been teaching Helena some 3D printing basics. She has been using BlocksCAD for designs. Before trying to print those - she has also downloaded a simple Heart STL from Thingiverse, and is learning how to use Cura to slice and print it. There will be a video of her first attempts.
