---
layout: post
title: Building An Experimenting Parallel Cable
date: 2004-11-30 19:51:56
tags: [parallel port, pc]
---
# Introduction

When you are experimenting and attaching to the <a href="/wiki/parallel_port.html" title="Parallel Port">Parallel Port</a>, you probably do not want to buy many DB25s, but rather connect to them easily and effectively.

<img class="img-responsive" src="/galleries/gallery-1-common-images/119-parallel.gif"/>

Soldering directly to the DB25 pins on a Male connector is a bad idea, they are not too cheap, and there is no point throwing one away after making one test circuit. This would also mean that you need to reach behind your PC every time you want to experiment.

Our solution is to build a small cable between a 26 pin ribbon connector (aka IDC Socket) and the DB25. I recommend using the push down types which bite into the cable - soldering this all would be far too fiddly (fancy making 50 connections?), and crimping can be a pain too.

This cable was used for the [Simple Parallel Port LED Board](/2004/11/05/simple-parallel-port-led.html) and can be used for  and further projects.

Please read the <a href="/wiki/robot_building_safety.html" title="Building robots can be dangerous - tips to help your safety">Robot Building Safety</a> guide, and then the <a href="/wiki/robot_tools.html" title="Tools that are often required to get started in robot building">Tools</a> guide before continuing.

# Required Tools

*  A Soldering Iron
*  Solder
*  Small Clamp or Helping Hands
*  Safety Goggles
*  Clothes you don't mind getting solder on
*  A good workspace with good lighting.
*  A <a href="/wiki/multimeter.html" title="MultiMeter">Multimeter</a>

# Required Parts

*  One DB25 Male socket - preferably the push down type for ribbon cables. They normally give an easier, and neater result than soldering.
*  One 26 or more pin IDC socket - again - get the push down solder free type.
*  One 26 core ribbon cable - preferably in single colour with one Red Line for pin1.


# Building the hardware

This is very simple, you take the ribbon cable, and line up the Red Wire with pin 1 on the DB25. Then push down the DB25 making the connection. You then line up the IDC socket on the other end, and push down too. Try to make sure the ribbon strands are lined up well with the teeth of the push down connectors.

# Testing it

Okay - this can be tedious, but is very much worth it before you plug anything into your relatively expensive computer. Using the <a href="/wiki/multimeter.html" title="MultiMeter">multimeter</a>, systematically test the pins on the DB25 making sure that none of them are shorting with any neighbours. Then testing that each pin on the DB25 links to a corresponding pin on the IDC.
