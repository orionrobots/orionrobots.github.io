---
layout: page
title: Horse And Rider
tags: [robot building]
date: 2005-12-01 00:31:51
---
## Introduction

When building robots there are many schools of thought. It could be too easy to start by keeping the simplest mechanics and tying all IO to one single microcontroller. Thus this controller is expected to do all the work.

All the work, all threads of activity are then expected to be coordinated together with a single program. Indeed, very few microcontrollers are easily programmed to handle multithreaded activity. Programs are created for things more easily achieved with simple analogue electronics or mechanics. This situation can mean things soon out to be a great deal more difficult and time consuming than the proposition of "let the cpu handle it" sounded.

The way out of this is the horse and rider strategy. It is a design pattern in electro-mechanical devices that means you have any number of low level systems, with a very high level system controlling it. The low level systems could be as simple and as complex as you like, but they offer simple interface to the high level controller.

## Examples

Imagine you build a walking robot. You have a chassis with six, multi-jointed legs. You could just connect the 18 required servos (3 per servo, 6 legs) to the single microcontroller. You then need to write you program to handle walking forward. Suddenly you realise that all of the processing power of the CPU is now dedicated to simply moving legs. Once you want to introduce legs that have touch sensitive feet, feedback on their position, as well as positional or other sensor information from the robots environment, you are pushing the controller to its limit, and probably your programming skills.

Now it is a well known design fact, that if you bite things into simple chunks, you can get them to work in a much simpler way. Now imagine you had a system that was just for the legs, and another system to actually coordinate other sensors, and then a brain box providing high-level instructions

## Detail

So horse and rider is a technique used in many ways. A very good use is with [BEAM Robots](/wiki/beam_robots.html "Biology, Electronics, Aesthetics and Mechanics"), where the BEAM technology can handle "Walk forward" using simple bicore oscillators, and this could even handle foot placing. You would then have a [microcontroller](/wiki/microcontroller.html "A programmable digital controller (or ") like the [ooPIC](/wiki/oopic.html "OOPic") which can determine that the robot wants to walk forward for 2 minutes then turn left 90 degrees, and walk forward for another minute - or some other higher level function. Note here, the PIC does not have to actually position any feet, or deal with smaller obstacles which can be walked over or may effect foot placement.

Horse and rider can be used where a mechanical solution is intelligent, and takes some of the complex calculations in code, or electronics where the mechanical solution is simpler.

Another way to use it, which works in our walking example (its a good example) is with [pneumatic](/wiki/pneumatic.html "Use of air to operate and power actuators") systems, where pneumatic logic can deal quite well with compliant and obstacle surmounting walking. A few simple [solenoid](/wiki/solenoid.html "Solenoid") valves can be used to enable an air supply to different inputs to the logic systems, instructing it to walk forward etc.

This method works well in with [Rodney Brooks](/wiki/rodney_brooks.html "Rodney Brooks") subsumption architecture, as once you have subdivided all but the most menial tasks, then an [AI](/wiki/ai.html "Artificial Intelligence") comparable to a computer game AI may be good enough to control the robot.
