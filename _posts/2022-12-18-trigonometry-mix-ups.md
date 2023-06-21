---
layout: post
published: true
using_mathjax: true
title: Geometry and Trigonometry mix ups
description: Geometry and trigonometry
category: robot building
tags: [learn robotics at home, robotics, mathematics, robotics programming]
---
## Trigonometry in robotics

Robotics doesn't need trig (those cos, sin and tan functions and related pythagoras) to get started, and you can get a long way without them, but there are definitely scenarios where it starts to be very useful.

Where you are tracking robot positions, drawing fancy displays, estimating arm movements, decoding sensor data this will be useful.

## Geometry mix ups

The sin and cos mathematical functions are used a lot when projecting some length in some angle or direction (call it theta $\theta$).

However, there are two ways to use this, and while one may be _mathematically correct_ it may not match how sensors and other parts work.
Getting these mixed, or using both without thinking about it can lead to weird behaviour.

Lets take the intention as calculating the x and y displacement of a line of length $r$ in direction $theta$.

### Scenario 1 "Standard position"

$$x = cos(\theta) * r$$

$$y = sin(\theta) * r$$

In this case, the heading $theta=0$ will be pointing to the right, facing East.
A positive change in theta would move the point around anticlockwise around the starting point.
This is the orientation considered mathematically correct.

### Scenario 2 "True bearing"

$$x = sin(\theta) * r$$

$$y = cos(\theta) * r$$

Now the heading $\theta=0$ will be point North, straight up (or forward).
A positive change in theta will move the point around clockwise around the starting point.

It's not hard to see how mixing these up will lead to completely odd behaviour.
If the angles form a sensor are in terms of heading up, clockwise positive theta, while all your other calculations work the other way, you are going to get some odd behaviour from the robot.

This orientation seems intuitive to people as it matches compass headings instead.

## SOHCAHTOA

In terms of this, it's just about right angled triangles.
It makes no determination really about which orientation the system is add. Recall though that by having an x offset, y offset and length r, we are talking about a right angled triangle.
The length r is the hypotenuse - the longest side of the triangle.

If we go with standard position, then the X offset will be the Adjacent length, invoking CAH, and the Y, projected at the end of the line, would be the Opposite length, invoking SOH.

In a true bearing, this is inverted, such that the Y offset is now the Adjacent and the X, would become the opposite.

## What about other functions

This comes into interactions all over.
There's interactions with sensors, code that assumes a system, then other trig functions like the tangent.
Which has been a bit of headache. First is to ensure you've understood which way up they think it will be, and then when you are clear on that (leave yourself comments in the code for when you forget), make sure you have good ways to convert.

The tangent can be determined by going back to SOHCAHTOA, with standard position, X is adjacent, Y is opposite, so $tan(o/a) = tan(dy/dx)$ which you would mostly expect.
However, with a true bearing, you'll need to reverse this, so $tan(o/a) = tan(dx/dy)$.

I have confirmed that the euler angles returned by the BNO055 IMU sensor definitely expects North = 0, and is definitely clockwise from here.

## Conversion from true bearing to standard position

My preferred approach will be to adopt standard position throughout the code, and convert to/from it where needed (at least before it needs optimising).

Converting this can be done with subtracting the true bearing from 90 (or $2/pi$), then taking back to the nearest +/- 180.

$$\theta_{sd}=90-\theta_{tb}$$

## Don't get hung up on the symbols

Theta sounds scary, but theta is really just a name for a heading angle. The fancy greek lettering $\theta$ is a shorthand for the heading angle.
An awful lot of my robotics thinking takes place with a biro and a scrap of paper.
When scribbling these on the back of an envelope, the theta symbol is easier than writing the word "heading" every time.
Doubly so if you've seen my handwriting.

## Robotics at Home with Raspberry Pi Pico

This post was based on research I did for the book [Robotics at Home with Raspberry Pi Pico](https://packt.link/5swS2) which is available now.

<a href="https://packt.link/5swS2" title="Learn to build and Program Robots using Robotics at Home with Raspberry Pi Pico"><img src="/galleries/2023/Robotics-at-Home-with-Raspberry-Pi-Pico-banner-2048.jpg"
  alt="Learn to build and Program Robots using Robotics at Home with Raspberry Pi Pico"
  sizes="(min-width: 1200px) 1140px, (min-width: 1000px) 940px, (min-width: 800px) 720px, 93.75vw"
  srcset="/galleries/2023/Robotics-at-Home-with-Raspberry-Pi-Pico-banner-720.jpg 720w, /galleries/2023/Robotics-at-Home-with-Raspberry-Pi-Pico-banner-1140.jpg 1140w, /galleries/2023/Robotics-at-Home-with-Raspberry-Pi-Pico-banner-1280.jpg 1280w"></a>
