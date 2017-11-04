---
created: 2006-02-24 10:00:00
description: RCX Switches can be used as analogue actuators
tags: [rcx,lego,mindstorms,robotics,electronics]
title: RCX Switches can be used as analogue actuators
layout: post
---
Even though I have used the RCX for many years, there are still new things I am learning about it.

In a recent discussion on [lugnet.robotics](http://news.lugnet.com/robotics), the original touch sensors for the RCX are revealed as not being entirely [binary](/wiki/binary.html) but actually having an analogue range of values. This in an interesting development. It may be that this is simply an accident caused by the switches manufacture, and that it should be just on or off, but Philo (Phillipe Hurbaine) has actually put together an experiment to test its sensitivity. Note - this is a bit speculative, the discussion was about multiplexing them based on resistance.

<img src="/galleries/2006-02-24-rcx-switches-used-analog/touchtest1.jpg">

<center>The touch sensor test RIG</center>

This test allowed Philo to gain fine control of the placement of the threaded axle. Note there is a manual handle, linked to one worm gear, which turns a pinion (8t gear) which is linked to a further worm gear, giving a massive gear reduction. While this may allow fine control - at this level of granularity, gear lash (the amount of "play" you have between the gears where the teeth do not entirely meet) can be a major problem.

<img src="/galleries/2006-02-24-rcx-switches-used-analog/touchtest2.jpg">

<center>A Closeup of the RIG</center>

If you look at the closeup, there is a nut (threaded bush) on the threaded axle here, and this can be adjusted to a point where it is just touching, but not yet compressing the switches actuator.

<img src="/galleries/2006-02-24-rcx-switches-used-analog/resist_vs_displ.gif">

<center>Graph of results</center>

It is a neat setup, and allowed Philo to generate a graph, showing the results of the experiment, with different switches used in the rig. It is interesting to note that the different sensors for [cybermaster](cybermaster.html) have very varied ranges - these are the ones which each included a resistor which gave them different values. What would equally interest me would be if the sensitivity of these would appear different on different RCX models, and also the other programmable bricks with compatible ports, and how much the port setup affects the sensitivity. Note also that two RCX switches were tested, with slight different results. This means that to use them effectively, you may have to calibrate individual switches.

The sensitivity curve here shows clearly that the Red cybermaster switch has the best curve, and would be easiest to calibrate. There is sensitivity in all of them to detect pressure changes, although sometimes it is too minimal to be useful. You would need some clever mechanical linkages to scale movements down enough to make these into serious analog sensors, but it certainly could be done.

On this note, I may revisit my Lego scales, and see if they can be built to take advantage of this, it would be interesting to be able to create a set of sensitive digital scales with the basic [RIS](ris.html) kit.

On a further note, Philo also has his own observations on this at <http://news.lugnet.com/robotics/rcx/?n=2191>.
