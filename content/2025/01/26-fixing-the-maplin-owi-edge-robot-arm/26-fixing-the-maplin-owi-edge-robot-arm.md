---
title: Fixing the Maplin OWI Edge Robot Arm - Powering and Circuits
date: 2025-01-26
tags: [robot electronics, maplin usb robot arm, robot building, owi edge robot arm]
thumbnail: content/2025/01/26-fixing-the-maplin-owi-edge-robot-arm/owi-edge-board-power-input.jpg
description: How I powered my Maplin/OWI Edge USB controlled robot arm, and how I traced the power circuits on the board.
---
I've been fixing up my Maplin/OWI Edge USB controlled robot arm. Here's what I've been doing with it.

People do dig out these arms, they do sell on eBay. While they are fun, if you can I would advise a robot arm like the MeArm instead. However, I still want my arm to work, and my code to useful to people with one of these arms.

## The new workshop

Today was a successful day in the workshop. I've been starting to use my workshop more, but after having a combined office and workshop/lab for some time, it's taken me a while to get used to using it.

It is in theory where all the tools are, and most of the robots are. However, because I didn't have a computer there in a good state, and was missing adapters to use the old monitor there with a Raspberry Pi, I'd not been able to sue it for some projects.

The laptop there is an older laptop, which has a Quattro graphics card, but some serious stability issues and runs frequently into thermal shutdowns. I'd not got it properly setup for my way of working.

I also still frequently use the office for all the book writing due to the more powerful computer and better keyboard up there. I do a lot of illustrating alongside the writing and code. The old Dell laptop does not handle the graphics tools or CAD tools well and is likely to shutdown if I try to use them.

I needed a few things to get the lab computer resources set up:

- A Raspberry Pi 5 power supply - I have one in the office that I frequently use for my book robot work, so I needed another one for the lab.
- HDMI to VGA adaptors. The monitor in the lab is old - it has VGA and DVI inputs. It's a bit unbelievable that I needed new cables for it
- Inkscape on the Laptop - I will need to draw some things, but easy does it as I don't want it to crash.
- WSL - It's a windows laptop. My comfort zone for coding is Vscode + Git + WSL. I like my bash scripting, and I like Linux filesystems. Windows may still be a good idea in case Lab hardware only has windows software (ancient microcontrollers for example).
- A copy of my notes and journal.
- Git configured for my github account.
- Credentials for the Raspberry Pi 5 so I could ssh into it.

One I got all of this, the I could start using the workshop to test this arm.

## Arm problems

The repository had a very bad case of bit-rot, when old code goes stale, and no longer works.

My github repository with the USB robot arm has code that's over 10 years old. In my previous post, I had to [contact github for help with repository movement](/2025/01/04-thanks-to-github.html). This meant I could start supporting problems people had with this code:

- The script to install this on Debian/Raspberry Pi no longer works - this script is OLD, and will not work in bookworm. It installed into the system python.
- The setup.py name and folder names didn't agree. let's bve honest `usb_arm` is far too generic a name for this thing.
- Not all the demos worked any more - they didn't match the named parts of the library, or didn't use other libraries right.
- There were tests (I discovered), linked to github workflows, but none of it had run since I'd renamed the main branch a few years back. Said test would have highlighted some of the issues above.
- Some people had arms that didn't move.

However, I had my own problems with the arm:

- I'd destroyed the board and motors on my arm, by over-volting it when trying to unpack after we arrived at our new home in 2023 - and I'd left it broken on a shelf since.
- I am not easily able to get D-Cells - can I power this from a bench power supply?

While the problems with the code were annoying, the hardware issues were more pressing. I needed to get the arm moving again. Otherwise I have nothing to test with. So initial problems:

1. Replacing the board (or getting one)
2. Powering the board

## Replacements

Before I could fix any software issues, I needed to address the first hardware issue. The overvolting had blown the original control board (and maybe some motors). I ordered a whole "old new stock" robot arm from eBay for only £20 delivered.

This old/new stock came with the parts still on sprues, and the motors and controller wrapped up. All the parts seemed to be the same though. I inspected this board thoroughly.

![The back of the OWI Edge USB Robot arm control board with the ICs](/2025/01/26-fixing-the-maplin-owi-edge-robot-arm/owi-usb-board-rear-chips.jpg)

You can see the motor control chips here - 2 double H-bridges, a single H-bridge, and a big USB microcontroller.

Before I swapped in the board, my first quest was to power it.

## Powering the board

The boards power is a bit confusing. The front of the board has many connections, and it's not obvious what they do.

![The front of the OWI Edge USB Robot arm control board](/2025/01/26-fixing-the-maplin-owi-edge-robot-arm/owi-usb-board-front.jpg)

However, the diagram below should help explain it a little. I spent a few hours tracing what was connected to what, and what was powered by what.

![Incomplete OWI Edge USB Robot Arm Board circuit diagram](/2025/01/26-fixing-the-maplin-owi-edge-robot-arm/owi_edge_circuit_diagram_incomplete.png)

This is a circuit diagram of the board, it's definitely incomplete, but a good start to understanding the board.

The logic is powered via USB, through the switch on the 5V rail.

The motors are powered via batteries, through a switch using 3V. Although there are 4 batteries, only 2 are actually connected. Confusingly, there is a dead connection from the positive terminal of the 4 batteries in series.

There's a 2 pin connector from the middle of the 4 batteries to the board. This is the 3V supply for the motors. See the picture below:

![Power connections for the OWI Edge USB Robot Arm](/2025/01/26-fixing-the-maplin-owi-edge-robot-arm/owi-edge-board-power-input.jpg)

The orange cable is 3V in supply for the motors, and the black should be the ground for this supply.

With this 3V rail, I can use a bench power supply for the motors. One future extension I can consider here is using a single 18650 cell to power the motors, which should tolerate the 3.7v, and then add a USB charger to the robot to charge the cell - in the large battery space.

## Next

The next stage is getting this wired to some parts of the arm, and connected to my computer, and test out my code. Let's get the arm to talk to me again!
