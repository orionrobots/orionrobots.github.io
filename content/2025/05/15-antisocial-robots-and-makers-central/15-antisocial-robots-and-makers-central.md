---
title: Antisocial robots and Makers Central
date: 2025-05-15
draft: true
tags: [robotics, events, makers, neural networks, opencv, raspberry pi, raspberry pi pico]
thumbnail: content/2025/05/15-antisocial-robots-and-makers-central/fleet-of-coder-dojo-robots.JPG
---
This week I've been having fun, and with a weekend of Makers Social, I've more to come.

## Robots at the Coder Dojo

I mentor at Coder Dojo KU, a coding club for kids.
I've been working for a while (with help!) on a fleet of Micropython based robots based on the Raspberry Pi Pico.
Last Saturday was their second outing, and they were a hit.
Kids got them to follow lines, avoid obstacles, or asking the question "what if I turn on every IO pin in a for loop?"

All the robots survived, the kids had fun, and I'm looking forward to next months dojo.
There are discussions afoot on making an up to date bill-of-materials for the robots, and maybe even a kit.

{% img_responsive "content/2025/05/15-antisocial-robots-and-makers-central/fleet-of-coder-dojo-robots.JPG", "Fleet of Coder Dojo Robots" %}

## Antisocial robots

This week I've been playing with Neural Network detection systems on a robot.
I was able to use OpenCV on a Raspberry Pi with a detection deep learning model, loading a Yunet face detection model.
I got a reasonable frame rate, and had the code outputting face locations via MQTT.

I then built a behaviour to consume these messages, and drive a pan/tilt servo mechanism to point a camera at the detected face.
A small error in my code however meant that the camera would be avoiding faces.
If you put a face in front, it would try to look away.
With multiple faces, it was amusing to watch it try to find somewhere to look.
The fixes were simple - the error input to the PID was inverted.
I've kept this code though since the behaviour was fun, quirky and gave it some personality.

{% img_responsive "content/2025/05/15-antisocial-robots-and-makers-central/antisocial-robot.JPG", "Antisocial Robot" %}

## Makers Central

This weekend I will be at Makers Central in Birmingham at the NEC
I am there as a punter only, but happy to talk about robotics with anyone with ears!
I'll be there on both days, with a bright red hat.
