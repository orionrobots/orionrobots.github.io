---
created: 2007-04-08 15:48:14
tags: [robots, robotics, lego, mindstorms, nxt]
title: NXT - Building the Arm
---
I have continued my exploration of the NXT kit, and the instructions within. This part gets interesting with a robot arm.

# Disassembling the Tribot

The first task is to disassemble the Tribot - which takes a bit longer than the studded models, and takes a fair bit more dexterity.

Axles and pins can start to be annoying when pulling many out of a beam, and I have heard tips about using marigolds or a little strip of rubber to grip them and save your fingers.

For the axles, the Flexible Axle part discussed on my blog <a href="http://orionrobots.co.uk/blogs/1/132" >Saturday 11th Jan</a> can be used - note they are all currently used in the ball holder. You should also use the push through technique with another axle. I am not sure about marigolds - they will limit my movement, and may make it difficult - but there's time to give them a go.

I start by removing the NXT itself, and the cables. I got stuck in, and as it turned out, the only real tool I needed was an Axle to push out pins and axles - this took me only a few minutes.

# Building the RoboArm T-56

<img src="http://orionrobots.co.uk/image447"/>

Now this is where the build starts to get really interesting, and my use of studless techniques will begin to be tested.

I got stuck into the arm. This took a little longer, and initially, it is not much like an arm. But it has enough to rotate into position and touch things, along with two hand cranks on the sides to manually override it. The arm itself cannot be positioned without the cranks because it uses a worm gear based drive. This also means that it is pretty slow, even on full power. However, it is also steady.

# Programming it

I tried the simple initial program. I had to reduce the given values a little, as my bot tended to push down hard enough on the touch to either bowl the ball off or lift the arms base. A reduction to 9 rotations on the initial downward position did the trick.

# Building the hand

<img src="http://orionrobots.co.uk/image448"/>

Well the arm is not much fun without a hand. A hand will be useful to pick up a ball and move it. Jumping ahead - I suspected that to be the challenge.

It was an interesting build - the use of the knob wheel again. I really have not used these all that much at all. On the second set of claws, I actually put the ball pin in before the knob wheels - as it looked like it would be a better plan.

Also, if it looks like this part of the arm is not quite coming together, have a bit of faith and carry on -it does work. Wire routing is much easier here than for the buggy, but for the stuff going under the [NXT](NXT "Legos NeXT generation robotics kit") I had to remove the clips on one side, to lift it up a little to get the RJ plug through.

# Programming the hand

This was a more interesting program - the switch block (or If block - as it is only really if/else and not multi-case) was introduced.

Again, after trying it out in a vanilla version, I had to tweak values when testing to make sure it did not overshoot. It may have been more clever to use a wait until touched for the downward movement, but since [OR](OR "OR") blocks have not been introduced, it could have got messy when it couldn't go any further.

Even with much tweaking, it either grabs the pedestal with the ball. knocks the pedestal over before getting the ball, or knocks it over when it gets the ball. It also tends to knock over the other pedestal when dropping the ball. But at least it did pick the ball up and move it. I managed to reorganise the program so the arm lifted a little after machine the grab, and then moved, thus not knocking the pedestals over when it did so.

# Fitting the light sensor

This will be used for sensing colour. It is a small build, but manoeuvring in the sensor assembly is a little tricky.

I also reduced the pedestal height from a 12 axle to a 10, which helps to get the arm over the pedestal without knocking it over.

In programming it, I again started with all the recommended values, but had to tweak the light sensor to the right threshold to stop them all coming out as "blue". The sound (speech) was pretty meek, so I upped it to 100%. And even with the reduction in height of the pedestal, the grab still seems to knock the pedestal over most times. Oh well.

The map tab (for the extents of the NXT G-Code) is beginning to show its limits, and some normal scroll bars would be welcome here. My laptops touchpad can be configured to scroll horizontally with such bars.

After all the tweaking, the identification works, and it will move the red ball to another location as expected, if still occasionally knocking over the pedestals.

# What is next

Well - in the NXT guide, we have animals next - the scorpion - Spike.. Cool..

# Links
# <a href="NXT _ The Ultrasonic Sensor Tutorial.html">Previously - NXT - The Ultrasonic Sensor Tutorial</a>
# <a href="NXT _ The Grabber.html">NXT - The Grabber</a>
# <a href="Getting Stuck into the NXT.html">Getting Stuck into the NXT</a>
# <a href="Orionrobots gets our first NXT.html">OrionRobots gets our first NXT</a>
# [NXT](NXT "Legos NeXT generation robotics kit")
# [Lego](Lego "The best known construction toy")
# [Mindstorms](MindStorms "A Robotic construction toy system from Lego")
# <a href="http://www.mindstorms.com" >http://www.mindstorms.com</a>
