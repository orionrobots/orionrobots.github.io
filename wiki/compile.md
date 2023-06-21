---
layout: page
title: compile
tags: [programming, computing]
date: 2006-08-22 09:17:48
---
In many computer languages, the programs come in a form known as "Source Code". This code is (mostly) human readable, but not directly usable by the computer.

A compiler, which is often part of an [IDE](/wiki/idetool "Integrated Development Environment"), takes this code, and performs a set of operations on the code to turn it into executable (runnable) software.

It is worth dividing the lifecycle of a compiled piece of software between compile time and run time. Compile time refers to processes which occur during compilation, and thus never need to occur when the software is started. Run-time refers to operations which occur when the program has been compiled, and is now running. Run-time operations will occur every time the software is run, and compile-time operations will occur only when the software is compiled.

This normally consists of a set of processes

- Preprocessing - Many languages have a method of defining strings that will be replaced at this stage. Any constant math operations will be simplified and possibly resolved. Also many languages have an option to include source code from other files.
- Generation of object code - Creation of intermediate code, or object code. In a project with many sources, this is the part that allows each individual source to be compiled, but any external references are still not linked.
- Linking - At this point the object code file(s) are now linked together into an executable, and possibly some libraries. Some parts may be statically linked and included in the executable output file, and some may be dynamically linked, and farmed out to libraries which are loaded at run time.
- Optimisation - This may take place during object generation and linking, or as a separate step. Here the code is optimised to take advantage of processor quirks, as well as spotting structures which the compiler thinks could achieve the same result in a more efficient manner. This part of the process is almost a field of computer science all to itself, and there has been a lot of change in the last decade or so. This means that there is a lot of debate over how much hand optimisation of the source code is appropriate.

The exact operation of these steps may be different depending on the brand of compiler, or the language being used. For example, the Java compiler does no Linking, and not a lot of Optimisation, and does not really have a preprocessing step, as everything in Java is dynamically linked. A lot of these operations therefore occur at run time, although parts of the code may be optimised during run time.

The classic example for compilation is the C language. Most C compilers will go through all the above steps. Probably the best known C compiler is GCC, and because of its OSS nature, curious readers can actually examine the code and see how it does these things. One very curious thing, is that GCC can, and is used to compile GCC from its source.
