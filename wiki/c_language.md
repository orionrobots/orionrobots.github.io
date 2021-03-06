---
layout: page
title: C Language
tags: [computing, programming]
date: 2007-01-01 15:49:24
---
C is probably one of the most popular Programming Languages, and is almost considered a lowest common denominator. It is used heavily in embedded systems like [robotics](/wiki/robotic.html "Robotic"), even simple [microcontrollers](/wiki/microcontroller.html "A programmable digital controller (or ") like the [PIC](/wiki/pic.html "PIC") and the [RCX](/wiki/rcx.html "The Lego Robot Command Explorer") can be made to support it. It was developed in 1972, by Dennis Ritchie at Bell Labs, and went hand in hand with Unix. It still retains a good relationship with modern related systems like Linux, Solaris and BSD.

C offers many concepts like procedural programming, that is, allowing a coder to group together statements into reusable functions, and libraries of functions. C has structures allow variables to be collected together, both for convenience in storage and manipulation, as well as being able to use those structures to closely reflect the structure of hardware registers. C headers can be used to prototype or specify the details of a functions type before the function is implemented. C also offers preprocessing so that files may be included, and macros may be created and expanded. This preprocessor is powerful enough that it allows for conditional compilation - the concept that in different compiling circumstances, only some parts of the code are actually compiled.

C has a standard library of routines for basics like memory allocation, IO, threading, mathematics and string handling. Note that this standard library may not be available on every platform, and platform designers and third parties may provide replacement libraries as well as additional library functions.

Strings are not it's strongest point, and C is still best suited to low level functionality - that is, the code that needs to sit closest to the machine. It has been referred to as portable or readable assembly code. C is statically typed, and is generally a compiled language, compiled down to machine code binary, or some intermediate bytecode format.

The death of C has been predicted many times, although it has a habit of living on for it's sheer flexibility and being so close to the system. Indeed, it may outlive it's successor C++, as while C++ is superseded by further higher level languages, there is nothing quite like C when low level interaction is required.

C programs can often be made of many different C files, and good programming practice normally means separating a group of regularly occurring or similar actions into functions, and then grouping related functions into their own C source files with headers to match them. This will then mean that more than one file needs to be compiled. [IDE's](/wiki/idetool.html "Integrated Development Environment") for C often have their own project system which allows many files to be compiled from one build operation, and there is also the common makefile system which uses a file to instruct the system what needs to be built and when.

If you would like to use GCC on your system, it is highly recommended that you do not purchase a [PIC](/wiki/pic.html "PIC") and look around at alternatives like the Atmel AVR, or the 8051.

# Related

- [NQC](/wiki/nqc.html "Not Quite C - A Lego PBrick Programming Language") - Not Quite C - a C like programming system for the [Lego RCX](/wiki/rcx.html "The Lego RCX")
- [BrickOS](/wiki/brickos.html "An entire Embedded OS for the RCX") - Another way to program C with a Unix like OS for the [RCX](/wiki/rcx.html "The Lego Robot Command Explorer")

# Links

- [The C programming Language on Wikipedia](http://en.wikipedia.org/wiki/C_%28programming_language%29)
- [Small Device C Compiler](http://sdcc.sourceforge.net/) - Open Source Embedded Device C Compiler
- [PIC micro and C FAQ - Microchip](http://www.microchipc.com/HiTechCFAQ/)
- [PlatformIO - Platform for embedded development](https://platformio.org)
