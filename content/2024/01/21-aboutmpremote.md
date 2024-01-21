---
title: About the MPRemote command
tags: [mpremote, micropython, python, robotics at home, robot building, raspberry pi pico, robot programming]
description: A command line tool to interact with Micropython and CircuitPython boards
date: date: 2024-01-21
---
If you've not come across it, there's a neat command line tool for working with Micropython and CircuitPython boards called [MPRemote](https://docs.micropython.org/en/latest/reference/mpremote.html) - the MicroPython remote control.

This tiny tool lets you do a few things:

- Copy files to and from the board
- Reset the board
- Interact with the REPL
- Run a script on the board directly from the command line

This means you can use the Pico or other boards from an IE of your choice, and automate interaction for it from within VSCode, vim, or any editor you might choose. It could also be used as part of a toolchain for deploying more out to robot, like I have in my Piwars 2024 robot, with PyInfra deploying code to the Raspberry Pi, and then using MPRemote to deploy it to the Yukon.
Qu
