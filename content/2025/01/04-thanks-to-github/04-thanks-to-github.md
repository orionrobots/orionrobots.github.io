---
title: Thanks to Github for fixing a problem
date: 2025-01-04
tags: [github, robot arm, python code, maplin usb robot arm, owi edge robot arm]
author: Danny Staple
thumbnail: content/2025/01/04-thanks-to-github/github-repo-screenshot.png
---
My python library for the Maplin USB robot Arm has been reasonably popular over the years. However, at one point several years ago, I wanted to move the repository from my dannystaple account into the orionrobots org, so other people in orionrobots, students or helpers, could contribute, review and so on.

## What is this code

This is a python library to control the Maplin/OWI robot arm via USB. It works well on Linux and Raspberry Pi, but needs a bit more coaxing on Windows and Mac due to the OS trying to be careful with hardware security. It allows the user to combine bit-patterns to control the different aspects of the arm.

## How did I try to move it?

I was less experienced with the ways of Github admin, so I forked my repository, and created a fresh one in the new organisation at [orionrobots/python_usb_robot_arm](https://github.com/orionrobots/python_usb_robot_arm).

I then deleted the original repository (it was dannystaple/robot_arm). This was still considered the upstream of the new repository. This had some unfortunate effects:

- Some other fork of my repository (tazjel/robot_arm) was now considered the upstream. Of course - thank you for there interest in my arm, but this isn't really the correct attribution.
- All pull requests were being automatically routed to that upstream.

I was frustrated, but left it for a few years. However, I have support requests for this library.

## Support requests?

Every few years, the way to get it to work on windows or Mac changes. These arms are no longer sold new, but people dust them off and have a go again, often finding parts don't quite work.
This time, I added debug logging to the library, so with python logging turned on, you can be sure USB messages are being sent to the robot.

However, that PR was routed to the new repo, reminding me again of the problem.

## How did I resolve it

GitHub help said I could recreate a repository, by doing a git clone, then pushing it to a new repo. However, this repository has stars, issues, pull requests that I didn't want to lose. So I contacted GitHub support. 

I am really happy with them, within a few hours, they had this fixed, with the repository now considered the root of the fork network, and keeping all it's issues/prs and stars. The stars on the original one I forked from (my dannystaple one) were gone forever, but at least the parts of this were preserved.

Well done and thank you GitHub support!

## How would I do it right in future?

There's a change ownership of repository button in the admin section, this is the correct way to do this.

## Other problems with the Arm

Sadly, my Maplin Arm is dead. After we moved house, I tried to plug it in, and broke it, letting the magic smoke out of one of the motor control chips, by trying to power it differently... I've ordered a replacement on eBay, a whole arm that I can use for spares and repairs to keep it going. Perhaps when my SMD skills are better, I could replace the specific motor chip I blew too. I didn't keep notes on how exactly I broke it, probably because we were moving house. Suffice to say, it added to the list of stressful things at the time. But once the new parts arrived, I'll repair it and get it running again.

![Blown chip on my Maplin USB Robot Arm board](/2025/01/04-thanks-to-github/usb-arm-chip-damage.jpg)

The photo is a touch blurry, but the indicated chip is blown. Based on <https://kyllikki.github.io/EdgeRobotArm/> the blown chip is an ST1151A single channel motor controller. The board could be repaired, but fro now I'll swap the board out as that will get me up and running sooner.

I've still got someone I've been supporting whose arm isn't moving at all. With mine up and running, I'll perhaps be able to better troubleshoot his for him.
