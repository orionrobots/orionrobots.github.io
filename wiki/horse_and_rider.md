---
layout: page
title: Horse And Rider
date: 2005-12-01 00:31:51
---
<h1 id="Introduction">Introduction</h1>
<p>When building robots there are many schools of thought. It could be too easy to start by keeping the simplest mechanics and tieing all IO to one single microcontroller. Thus this controller is exepcted to do all the work.
</p>
<p>All the work, all threads of activity are then expected to be coordinated together with a single program. Indeed, very few microcontrollers are easily programmed to handle multithreaded activity. Programs are created for things more easily acheived with simple analogue electronics or mechanics. This situation can mean things soon out to be a great deal more difficult and time consuming than the proposition of "let the cpu handle it" sounded.
</p>
<p>The way out of this is the horse and rider strategy. It is a design pattern in electro-mechanical devices that means you have any number of low level systems, with a very high level system controlling it. The low level systems could be as simple and as complex as you like, but they offer simple interface to the high level controller.
</p>
<h1 id="Examples">Examples</h1>
<p>Imagine you build a walking robot. You have a chassis with six, multi-jointed legs. You could just connect the 18 required servos (3 per servo, 6 legs) to the single microcontroller. You then need to write you program to handle walking forward. Suddenly you realise that all of the processing power of the CPU is now dedicated to simply moving legs. Once you want to introduce legs that have touch sensitive feet, feedback on their position, as well as positional or other sensor information from the robots environment, you are pushing the controller to its limit, and probably your programming skills.
</p>
<p>Now it is a well known design fact, that if you bite things into simple chunks, you can get them to work in a much simpler way. Now imagine you had a system that was just for the legs, and another system to actually cordinate other sensors, and then a brain box providing high-level instructions
</p>
<h1 id="Detail">Detail</h1>
<p>So horse and rider is a technique used in many ways. A very good use is with <a href="/wiki/beam_robots.html" title="Biology, Electronics, Aesthetics and Mechanics">BEAM Robots</a>, where the BEAM technology can handle "Walk forward" using simple bicore oscillators, and this could even handle foot placing. You would then have a <a a="" brain="" for="" href="/wiki/microcontroller.html" robot="" title="A programmable digital controller (or ">microcontroller</a> like the <a href="/wiki/oopic.html" title="OOPic">ooPIC</a> which can determine that the robot wants to walk forward for 2 minutes then turn left 90 degrees, and walk forward for another minute - or some other higher level function. Note here, the PIC does not have to actually position any feet, or deal with smaller obstacles which can be walked over or may effect foot placement.
</p>
<p>Horse and rider can be used where a mechanical solution is intelligent, and takes some of the complex calculations in code, or electronics where the mechanical solution is simpler.
</p>
<p>Another way to use it, which works in our walking example (its a good example) is with <a href="/wiki/pneumatic.html" title="Use of air to operate and power actuators">pneumatic</a> systems, where pneumatic logic can deal quite well with compliant and obstacle surmounting walking. A few simple <a href="/wiki/solenoid.html" title="Solenoid">solenoid</a> valves can be used to enable an air supply to different inputs to the logic systems, instructing it to walk forward etc.
</p>
<p>This method works well in with <a href="/wiki/rodney_brooks.html" title="Rodney Brooks">Rodney Brooks</a> subsumption architecture, as once you have subdivided all but the most menial tasks, then an <a href="/wiki/ai.html" title="Artificial Intelligence">AI</a> comparable to a computer game AI may be good enough to control the robot.
</p>
