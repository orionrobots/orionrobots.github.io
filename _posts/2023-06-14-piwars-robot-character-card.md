---
layout: post
title: Specification card for my PiWars 2024 entry
description: A look at the robot I'll be entering into PiWars 2024
tags: [robotics at home, robot building, raspberry pi, robotics competitions, rover, robot building, piwars]
date: 2023-06-14T20:51:00.000Z
thumbnail: galleries/2023/piwars-robot-info/2023-big-ole-yellow-robot-card.png
---
I thought it would be fun to make a specs card for the robot I am entering into Piwars 2023.

{% image "galleries/2023/piwars-robot-info/2023-big-ole-yellow-robot-card.png", "PiWars 2023 robot character card", "720, 940, 1140, 1280, 2048" %}

Dimensions without attachments:

- Length: 260mm
- Width: 223mm
- Height: 130mm (some wiring sticking out a bit)
- Weight: 1.5kg

## Plan for piwars

There are a few things we are going to need to do with this robot to get it ready for PiWars 2024.

### Initiatives

- Power - the power system might be need replacing, and we might be able to make it lighter.
- Software - the Raspberry Pi will have an old distribution. A newer one may have some issues around the camera code though.
- PiNoon mount - it's high enough to interfere with the camera a bit, print a version to lower it. Some CAD work needed.
- Distance sensors - we've got two. A few more might be good.
- Electronics - make some more combined electronics boards, so they are tidier. Fewer things to fall out.
- Line follower - the line follower didn't connect properly to the Pi - we need to fix that.
- Traction - can we add rubber to the tracks to improve traction?
- Gearbox - we had slipping gears - can we fix that?
- Tracks loose - the tracks are a bit loose, can we tighten them up?
- Turret - fitting a turret (attachment) to shoot the zombies.
- Barrel - an attachment to grab/lift/move barrels for Eco Disaster
- Headlights - we have space for them, should make the camera better. Two big white LEDs, and a FET+resistor to switch them on and off.
- Transporting the robot - not an afterthought, how do we get it to the competition in one piece?
- Algorithms and arenas
    - Line follower (Lava Palava) - we need to get the line follower working, and tune it.
    - Zombie apocalypse - make a tower and 3d print some zombies, practice the shots manually. We could try for automating this later.
    - Escape Route - a maze - this should be an interesting arena to make, and yet again, we'll need to figure out the algorithms.
    - Eco Disaster - make an arena, 3d print some barrels figure out algorithms.
    - Minesweeper - we'll need camera mount changes, then figure out the algorithms
    - For the temple of doom - an obstacle course, we'll try many slopes and check the agility of the robot - manual driving practice.
- PiNoon - lots of practice driving. I can set up another robot to practice with, and let different team members try driving on it.
- Style - maybe a shell or cover for the top, it's all a bit loose wires. Something disaster movie themed.

We'll need to refine, and pick some of these to work on. I've possibly missed some things too.

### Up and running

The next step is to get the robot up and running.

This robot has not been powered up for a few years, since 2019. It might work? We need to put some batteries in it, as it is, and charge up the USB power pack. We'll also need to change the WiFi configuration to connect to our new network on the Raspberry Pi.

We want to see if we can reach the Pi, and can still drive the motors, with the camera. This allows me to gauge any repairs, but cross reference this with the list above, so I don't do work that I'd need to undo. I also need to find all the existing code and design files for the robot.

The 3D printed parts were designed in Fusion 360.
