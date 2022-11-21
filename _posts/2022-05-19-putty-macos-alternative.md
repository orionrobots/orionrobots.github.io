---
layout: post
title: "Learn Robotics Programming Second Edition errata - PuTTY"
description: "PuTTY is no longer working on MacOS"
category: "robot building"
tags: [raspberry pi, robot building, ssh, learn robotics programming, headless, learn robotics at home]
---
My robotics/Raspberry Pi books Learn Robotics Programming, and [Learn Robotics Programming - Second Edition](https://packt.link/NMtxp) takes the approach that using a network to connect to a robot makes it easier to program, configure or update it, also freeing the robot from being tethered to a screen, keyboard and mouse.

## SSH and headless Raspberry Pi usage

This approach also leads to being able to do interesting things like automation (not covered in the book, but I can make some posts or videos on this), and encourages a robot builder to keep their files somewhere other than the robot, so if there are issues with the robot and it's SD card, you don't lose the work.

For the connection, the books use the SSH system, a secure, passworded shell level access to Linux systems like the Raspberry Pi, which is also ubiquitous in the world of server management. It allows you to send commands to the Raspberry Pi and run them in the shell there, and also comes with file transfer capabilities.

It also used to be the case that the application PuTTY offered a universal friendly way to connect to this from Windows, Linux and MacOS.

## Problems on MacOS

Currently in 2022, PuTTY on MacOS no longer works - when installed on Big Sur or later, you get some of the command line tools like plink and puttygen, but the main PuTTY program, with it's SSH window (also useful for managing serial devices) is not installed. It seems to be that certain underlying libraries no longer work.

## The proposed solution

MacOS already comes with built in ssh clients. Open a terminal (typing `term` in spotlight will get you there), and you can type `ssh raspberrypi.local` or the name of your Raspberry pi to get there. I use this approach frequently on MacOS. It will also work on Linux, and recent versions of windows support this too. It allows you to specify a username in the command - `ssh pi@raspberrypi.local` along with other options, and opens the door to more interesting things like automation via ssh.

## About Learn Robotics Programming - Second Edition

In [Learn Robotics Programming - Second Edition](https://amzn.to/37XPYfO), a reader is shown how to build a Raspberry Pi based small robot. The little wheeled robot is programmed in Python, and the reader is shown how to add sensors, like encoders to track wheel movement and make accurate turns, distance sensors to detect walls and avoid collisions, an Inertial Measurement Unit to track compass headings.

Later in the book, the reader adds a camera, and can use it to track faces and follow objects. The reader is shown how to make a web service so they can drive the robot from their phone, while seeing from the camera as the robot sees. A voice control agent is added, so they can instruct the robot just through talking.

This is all done in a step-by-step approach with demonstrations the reader can try out and is invited to expand upon.
