---
layout: page
title: BrickOS
date: 2006-05-30 23:19:21
---
BrickOS was a small [OS](/wiki/os.html "An Operating System") for the [Lego RCX](/wiki/rcx.html "The Lego RCX"). It is an [Open Source](/wiki/open_source.html "Products and packages which are generally free.") project and allows fairly advanced programming of the brick with a full C and C++ programming environment using the gcc/g++ toolchain.

## How advanced?

Normally RCX code is actually interpreted with a firmware system into code to run on the Hitachi HC-8 microcontroller - see [RCX Specifications](/wiki/rcx_specifications.html "RCX Specifications"). This however can be slow, and even [NQC](/wiki/nqc.html "Not Quite C - A Lego PBrick Programming Language") relies on this. There is an accelerated firmware from Dick Swan to help this - but it is still not as fast as running real native code.

BrickOS actually allows you to compile binaries to run on the [Lego RCX](/wiki/rcx.html "The Lego RCX") so you get a level of speed and control not available from the other microcontrollers.

This may come at the cost of increased complexity, but if you are already a seasoned C/C++ coder, you may find this more comfortable than trying to learn one of the other syntaxes or programming systems for the [RCX](/wiki/rcx.html "The Lego Robot Command Explorer").

If you are a Java programmer, you could consider [LeJOS](/wiki/lejos.html "A Java Based Lego RCX OS") instead.

## Links

- <http://brickos.sourceforge.net/> - BrickOS home
