---
title: Learn Robotics Programming, 3rd Edition is published tomorrow
date: 2026-05-28
thumbnail: 2026-05-28 Learn robotics 3rd edition cover.png
tags: [learn robotics programming, robotics books, raspberry pi, python, robot building, mqtt, opencv, computer vision, voice recognition, monte carlo localisation, pyinfra, robot power]
---
Tomorrow my book, **Learn Robotics Programming, 3rd Edition**, is published, and I am properly excited about this one.

{% img_responsive "2026-05-28 Learn robotics 3rd edition cover.png", "The cover for Learn Robotics Programming, 3rd Edition", "100vw", "img-responsive float-start me-2 mb-2 w-33" %} This book has always been about building a real robot, not just reading about robotics. You start with a Raspberry Pi, Python, motors, sensors, wiring, power and a small rover platform. Then you gradually turn that into something more capable: a robot you can control from a phone, a robot that can sense the world around it, and a robot that can run more intelligent behaviours.

For the third edition, I wanted to do more than update a few screenshots and swap in newer parts. I wanted to rebuild the project around the way I now think small robots should be structured.

## A bigger rebuild than it might look

The second edition was based around an object-oriented robot codebase. That worked, and it was a good step up from a single script driving motors, but it still had a lot of the robot tied together inside one program.

In the third edition, the robot moves to an **MQTT-based bus architecture**. Different parts of the robot can run as services, sending and receiving messages. Motor control, sensors, behaviours, vision, voice and interfaces can be treated as connected parts of a system.

That matters because it is much closer to how larger robot systems are built. A robot is not just a program. It is hardware, power, sensors, software, deployment, perception, control and behaviour all working together.

## Local AI on the robot

This edition also adds more local AI capability.

The robot can use **Vosk** for local speech recognition and **Piper** for speech synthesis. That means voice features can run on the robot without needing to send everything to a cloud service.

For vision, the book moves from the older Haar cascade approach to **YuNET face detection in OpenCV**. It is still practical and approachable, but it gives the robot a more modern computer vision pipeline.

The goal is not to pretend a small rover is suddenly a general-purpose AI robot. The goal is to show how neural network based tools can be used practically on a Raspberry Pi, as part of a working robot project.

## Better sensing, motion and power

The hardware has had a serious rethink too.

This edition uses an **optical distance sensor array** instead of the pair of ultrasonic sensors used in the previous edition. It also moves to **magnetic quadrature encoders**, instead of simpler optical count-only encoders.

Those changes give the robot better information about its environment and its own motion. That becomes important when the book gets into behaviours like localisation.

The power system has also been revised around a **single rechargeable battery based design**. Power is one of those parts of robot building that can easily be underplayed, but it has a huge effect on how reliable and usable a robot feels.

## Localisation and smarter behaviours

One of the additions I am happiest about is **Monte Carlo localisation**.

It is a classic robotics algorithm, but it is also a very visual and satisfying one to experiment with. You get to see the robot maintain a belief about where it is, update that belief from motion and sensing, and gradually make sense of its position.

That is the kind of thing I love in robotics: code, maths, sensors and real-world messiness all meeting in one place.

## Deployment matters too

Another major change is the use of **Pyinfra** for automated, code-driven Raspberry Pi and robot configuration.

This is partly my DevOps background showing. When you are building a robot, setup and deployment are not side issues. If the robot depends on services, configuration files, Python packages, system packages and startup behaviour, then you need a reliable way to reproduce that setup.

The third edition treats deployment as part of the robot, not as an afterthought.

## What the book is really about

At its heart, the book is still about learning by building.

You wire the robot. You write the Python. You get the motors running. You add sensors. You make mistakes. You debug them. You add phone control, voice, vision, localisation and behaviours. By the end, you have not just followed instructions, you have built up a working robot system piece by piece.

That is what I want readers to take away from it.

Not just “I copied a robot project”, but:

“I understand how this robot works, and I can change it.”

## Where to get it

You can find **Learn Robotics Programming, 3rd Edition** here:

[Packt](https://www.packtpub.com/en-us/product/learn-robotics-programming-9781803246987)

[Amazon](https://www.amazon.com/Learn-Robotics-Programming-cutting-edge-Raspberry/dp/1803246987/)

I am really looking forward to seeing what people build with it.
