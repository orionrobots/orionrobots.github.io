---
title: Managing a Raspberry Pi with PyInfra
date: 2023-11-20T19:28:00.000Z
description: Using PyInfra to manage a Raspberry Pi
tags: [raspberry pi, pyinfra, python, devops, robot programming, piwars 2024]
thumbnail: _posts/2023/11/20/pyinfra-raspberrypi.png
---
Today, I trialled PyInfra2 for managing the packages and files on a Raspberry Pi.

## Why?

SD Cards fail. When I build a robot, or revive an old one, being able to push a standard loadout, plus the code onto it is a lot more convenient than doing it all by hand, or making SD card clones (especially really old ones). It also means that my changes are in my code, so that "what did I do to make that work" feeling is minimised - you can see the changes.

The Raspberry Pi configuration is captured as code (IAC).

## Previous technologies

I've done this with SD backups, shell scripts, ansible and fabric.
Shell scripts work, but only on some systems (not windows), plus they rerun everything every time, what if I only want to perform the necessary changes?

Fabric2 lets me manage packages and run commands remotely on the Pi from Python, and runs everywhere, but has poor support for syncing directories, and will also make all changes. You could wrap in something that detects changes.

Ansible is a great solution if you are on a mac or on Linux, it supports "idempotency" - you code the state you want, and when you run it, it will make the changes to arrive at that state, and no more, or no changes if the state is already present. It doesn't support windows very well. It requires lots of YAML, and if you want reusable parts, it can be a bit heavyweight.

## PyInfra2

I came across PyInfra2 yesterday. It seems to solve many of the problems. It builds upon concept in ansible - inventories of hosts (maybe just 1, or an inventory of robots), idempotent tasks, and you declare the state you want.

However, this is all in Python. Which means you can create inventories in python, you can abstract, or provide data in python, perhaps sharing configuration for this with other python tools or systems.

Being based only in python, it is a pip-install away, and works on Windows, Linux and MacOS.

I've only used it for a day - so a bit early, but I'm enjoying it so far. I've been able to create a simple inventory, and a simple task to install a bunch of apt and pip packages on a Raspberry Pi along with configuring stuff like i2c and it works.

I'll be considering this tool in future for managing my robots. I'm using my Piwars 2024 disaster zone robot as a testbed for this.

{% img_responsive "_posts/2023/11/20/pyinfra-raspberrypi.png", "PyInfra managing a Raspberry Pi" %}

## Links

- [PyInfra](https://docs.pyinfra.com/en/2.x/index.html)
