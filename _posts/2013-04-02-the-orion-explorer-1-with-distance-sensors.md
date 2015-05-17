---
layout: post
title: The Orion Explorer 1 Robot with Distance Sensors
tags: [arduino, arduino kit, distance sensor, orion explorer 1, robot, robot building, robotics]
---
I've now got some footage of the Explorer 1 using a pair of sonar distance modules (HC-SR04's) to avoid walls and drive around the floor. This is just experimentation, so they are mounted with sticky tac, and wired in with some odd bit of breadboard I had, but it was working brilliantly here. The robot has an Arduino and uses AA batteries.

<div class="embed-responsive embed-responsive-16by9">
<iframe src="//www.youtube.com/embed/ElXsXAcqrUE" allowfullscreen="allowfullscreen" frameborder="0" height="315" width="560"> </iframe>
</div>

The 2 sensors give it directional sensing - which means it can avoid obstacles from either side.

The algorithm here is quite simple. If the left sensor, or right is less than a threshold distance, then turn away from the closer one until both are clear, otherwise move forward.

It took some tinkering to get right. I am still playing with the sensor thresholds in the code, along with the angle and distance apart for them. The next behaviour will be more interesting - following things. I'd like to have this robot following objects while keeping a distance from them - I've done the crude follow until it collides, but the following with a bit of distance is much more interesting behaviour indeed.

I'd love to get this into some kind of maze to see how well it avoids - although it is a bit large for Micromouse - and doesn't have a solving strategy - it does get into a feedback oscillation faced with a corner or walls either side.

This will eventually be a kit including some brackets and simplified solder free wiring on my Uk robotics shop.
