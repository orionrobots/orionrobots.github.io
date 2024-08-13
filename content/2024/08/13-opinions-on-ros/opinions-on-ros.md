---
title: Danny's opinions on ROS
tags: [robot software, ROS, Raspberry Pi]
date: 2024-08-13
description: Danny's opinions on ROS
---
I have a complex relationship with ROS, the Robotic Operating System. But let's start by looking at what it is. For this articles purposes, ROS and ROS 2 are considered as versions of the same basic idea.

## What is ROS?

ROS is an Open source system, with patterns and tools for connecting and building robotics systems. It also has a collection of tools and components. The system is brought together in a Linux distribution, which needs to run on a computer (including single board computers like the Raspberry Pi).

The components are made in C++ and Python, although other languages are probably welcome.

## Underlying pattern - message bus

ROS uses a message bus, where messages can be published and subscribed to by various components. This allows multiple services to communicate with different underlying implementations. It has the great advantage that by supporting the same message structure, you can swap out a component for another component, for example different motor driver layers.

I rather like this pattern, and I've built robots based around a similar architecture, using either Rabbit MQ or MQTT messages. These are using JSON, but could use a binary protocol like protobuffers.

I find compiling the message handling a little bit awkward, however, it is building stubs for Python and C++ then, so is worthwhile.

This is overall great though,a nd language agnosticism is a great thing.

## A collection of tools and components

ROS has a huge collection of tools. When you are writing robotic systems, being able to pull together PIDs, libraries for hardware, sensor fusion  or probabilistic robotic algorithms without needing to write the whole thing from scratch is a huge benefit.

This open source and community aspect is amazing. Visualisation and simulation tools like rViz and Gazebo with links for representing a robot in a virtual environment or reflect the real one are something a single person would spend years trying to make.

This also serves as a place for reference source on how to build certain things for non-ROS robotics projects too with concrete examples in code. I love this aspect.

## Shipping a whole OS

ROS ships as an Ubuntu OS, including a flavour for the Raspberry Pi. I find this problematic, as depending on other hardware or software integrations I want in the OS, it can be a little unpalatable to install a whole distribution. I'd rather have a set of libraries and tools that I can install on a base OS as packages.

On the Raspberry Pi, this means it's a departure from the Raspberry Pi OS, which means that official integrations, options and advice may nto work here.

On the desktop, it means I'd need to dual boot or run inside a container/VM. At the time of writing, although there are some solutions, the visualisation and simulation tools do not run particularly well inside either VM's or containers. I'm definitely not a fan of Dual booting my OS, and it would be expensive to have one computer set aside for robotics dev and simulation only.

## Requiring a computer

For some of my robots, they have a Raspberry Pi, or even older ones had a small netbook. This makes ROS potentially viable on them as a solution. However, many others are based on microcontrollers.

Microcontrollers I use range from the Arduino (328), the ESP8266, or Raspberry Pi Pico. While they are capable of doing plenty, none will run ROS. There's ROS micro frameworks, but from what I understand, this runs a subsection on the microcontroller with the heavy lifting still done by a computer or SBC. This would not be my choice for tiny or lightweight robots, especially if they meant to run independently.

## How I work with it

I dip my toes frequently into it. I try the various ways to integrate parts of ROS, or learn from it. I've built systems around message buses and other design patterns, and spent time programming robots built with it and simulations. However, I find it a little too heavy for my needs, and I prefer to build my own systems from scratch, using some of the patterns and tools I've learned from ROS.

One potential future of ROS is a rebrand to "Robot Open Source", and perhaps turning into that installable framework. I think I'd make more use of it then. I'd also love to see a ROS-lite, with a smaller set of tools and libraries that I can install on a base OS.
