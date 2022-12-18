---
layout: post
published: true
using_mathjax: true
title: 2022-12-18-trigonometry-mix-ups
description: Geometry and trigonometry
category: robot building
tags: learn robotics at home, robotics, mathematics, programming
---
## Trigonometry in robotics

Robotics doesn't need trig (those cos, sin and tan functions and related pythagorus) to get started, and you can get a long way without them, but there are definitely scenarios where it starts to be very useful.

Where you are tracking robot positions, drawing fancy displays, estimating arm movements, decoding sensor data this will be useful.

## Geometry mix ups

The sin and cos mathematical functions are used a lot when projecting some length in some angle or direction (call it theta $\theta$).

However, there are two ways to use this, and while one may be _mathematically correct_ it may not match how sensors and other parts work. Getting these mixed, or using both without thinking about it can lead to wierd behaviour.

Lets take the intention as calculating the x and y displacement of a line of length $r$ in direction $theta$.

Scenario 1:
$$x = cos(\theta) * r$$
$$y = sin(\theta) * r$$

In this case, the heading $theta=0$ will be pointing to the right. A positive change in theta would move the point around anticlockwise around the starting point. This is the orientation considered mathematically correct.

Scenario 2:
$$x = sin(\theta) * r$$
$$y = cos(\theta) * r$$

Now the heading $\theta=0$ will be point straight up (or forward). A positive change in theta will move the point around clockwise around the starting point.

It's not hard to see how mixing these up will lead to completely odd behaviour. If the angles form a sensor are in terms of heading up, clockwise positive theta, while all your other calculations work the other way, you are going to get some odd behaviour from the robot.

This orientation seems intuitive to people as it matches compass headings instead.

## What about other functions

This comes into interactions all over. There's interactions with sensors, code that assumes a system, then other trig functions like the tangent. WHich has been a bit of headache. First is to ensure you've understood which way up they think it will be, and then when you are clear on that (leave yourself comments in the code for when you forget), make sure you have good ways to convert.

## Dont get hung up on the symbols

Theta sounds scary, but it's really just a name for a heading angle. The fancy greek lettering $\theta$ is a shorthand for it, and when scribbling these on a  back of an envelope (an awful lot of my robotics thinking takes place with a biro and a scrap of paper), is easier than writign the word "heading" every time. Doubly so if you've seen my handwriting.


