---
layout: post
published: false
using_mathjax: false
title: Debugging motion data
---
I am currently working on a motion model for a robotics localisation system, more details of which will be in an upcoming book.

While working on it, I've been scratching my head (or bashing my head) against confusing motion behaviour for the best part of 4 weeks.

However, I've made 2 breakthroughs in the last few days. One of them you've seen [Geometry and Trigonometry mix ups](/robot%20building/2022/12/18/2022-12-18-trigonometry-mix-ups.html). The other I am still getting to the bottom of.

## Motion data?

The robot has a series of guesses on where it will be, in the form of poses. Each pose is a x and y coordinate, plus a heading. 


## How do you debug motion data?

The robot system in question outputs data wirelessly so it can be plotted in real time with matplotlib. This is just the x and y coordinates, and was showing some strange things happening. Like the robot going in a roughly straight line, and poses going in circles. This meant none of the rest of what I wanted to do with the data made any sense at all.

I was able to dump the extended pose data with raw encoder sensor data, and then that sensor data converted into rotation1, translation, rotation2 form.

