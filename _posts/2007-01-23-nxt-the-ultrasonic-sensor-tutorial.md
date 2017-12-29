---
created: 2007-01-23 15:42:27
tags: [robots, robotics, nxt, rcx, lego, mindstorms, ultrasonic]
title: NXT - The Ultrasonic Sensor Tutorial
layout: post
---
I am now well underway with my work on the NXT. I have built and programmed the grabber bot, and have it driving to and picking up a ball on command via hand claps.

I had a brief play with NXT-G to see if I could program a light/dark line follower, but ended up a little frustrated with variables and scope, and decided to carry on through the tutorials, and try again later when I have more NXT-G experience. After all, the only other similar language I used was [RCX](/RCX "The Lego Robot Command Explorer") code, and pretty much mostly used  [NQC](/NQC "Not Quite C - A Lego PBrick Programming Language") for my [RCX](/RCX "The Lego Robot Command Explorer") programming. Despite not being a fan of these kind of languages, I am determined to get the hang of NXT-G coding before falling back to the more familiar comforts of c.

# Adding the Ultrasonic sensor to Tribot

Now next in the tutorial is adding an Ultrasonic sensor. This is where we are really stepping beyond what the [RCX](/RCX "The Lego Robot Command Explorer") was able to do with the (unexpanded) RIS, and start getting some of the new stuff.

<img src="/image419"/>
First a little bit of building - I can see a lot of design went into making this bot modular and expandable. I appreciate that somewhat. For the step pulling out an axle, you may find it easier to use another axle to push it through initially. You don't need to pull the axle all the way out, just enough for the gap between the beams in the middle to be clear. I also chose to use the much shorter cable for this, as there was no need to the 35 cm one. I found that as the bottom of the sensor was not secured - it seems to look up under the weight of the cable. I placed an additional bush-pin in to secure it (inset).

# Programming it

I decided to follow the beaten trail here, and work within the tutorial. I did however work in metric not inches, and spotted the rather nice conversion feature. If you type a value in inches into the Ultrasonic distance value, then switch units, the NXT programming interface will convert for you. I also used the value 0.4 for the closing of the arms, so they were not quite so violent, but then had a neater idea - 90 degrees is enough to open them. I also find the way they do the turning here, and in the light sensitive code to be quite unusual. My light sensor code use both wheels in opposite directions - turning on a penny...

# Out of memory

Anyway- after completing the program, I found the [NXT](/NXT "Legos NeXT generation robotics kit")  was out of memory, and had to clear a few things from it. The memory manager only showed me the "good job" sound, to clear. I did not see any NXT code uploads to clear though in it - how strange. I then noted that the percentage bar had a clickable "program" area. This showed all the programs I had loaded in. While browsing this, the NXT timed out and shut off - and the display just cleared. You would think that keep-alive messages would be sent to the nxt while using this dialogue. At least for a while..

The Touch sensor and grabber programs were using a rather large 12Kb each. Now I know using embedded c on my day job that you can build whole suites of quite complex software in 12k - there were only about 9/10 blocks, so those must expand to quite a lot of code. I suspect the blocks in the "Common Blocks" tab are very high level blocks of many more blocks. I wander if it is the number of blocks, or the number of different types of blocks which contributes to size - this would be down to how much is duplicated, and how much is simply referenced. Something to investigate later.

Clearing a whole bunch of my programs left 55.5Kb free. Should be more than enough to keep on going.

# Testing this code

I cleared my test pad, bar a few paperweights in the corners, ensuring that there was enough clearance for the Ultrasonic not to pick up anything (since it was 50cm, I cleared 80+). It ran OK. I have to admit, the tutorials turning made it look more natural than my two motor spin.

My degrees thing works, but it has the proviso that if the arms are not open far enough, it will not reach 90 degrees and then stop. Maybe a more complex block (to come later) would be a good move - IE to turn the motor until it stops turning. This is probably why Lego chose a time in seconds instead.

# What now?

This seems to be all of the vehicles section in the Robo Center. There is a picture of 4 wheeler on the thing, but no four wheeler in the section - so far only the Tribot. I don't know it this could be expanded with a SWF presentation of something to add additional robots in for teaching purposes, and I know this has been mentioned by other blogs. Drawing your own digital instructions would probably involve using [LDraw](/LDraw "The LDraw Lego CAD System") at the moment, and LPub
  to create images from the LDraw instructions, then placing those into an SWF movie.

I am really not entirely done with the Tribot. Although I will disassemble it to try the other tutorials, I will probably build it again to try some ideas of my own - it is not a bad simple little platform to play with and code on.

# Machines

The next tempting section is machines with an arm. This is looking exciting. I am going to go build them now, and report later. Come back and read about it.

# Links

* <a href="NXT _ The Grabber.html">NXT - The Grabber</a>
* <a href="Getting stuck into the NXT.html">Getting stuck into the NXT</a>
* <a href="OrionRobots gets our first NXT.html">OrionRobots gets our first NXT</a>
* [NXT](/NXT "Legos NeXT generation robotics kit")
* [Lego](/Lego "The best known construction toy")
* [Mindstorms](/wiki/mindstorms "A Robotic construction toy system from Lego")
* <a href="http://www.mindstorms.com" >http://www.mindstorms.com</a>
