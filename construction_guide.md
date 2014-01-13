---
layout: page
title: Orion Explorer 1 Construction Guide
description: Building The Explorer 1 Robot
asset_location: /assets/construction_guide
---
{% include JB/setup %}
# Building the Orion Explorer 1

![The Assembled Robot]({{ page.asset_location }}/IMG_1118.jpg)
## An Intro to the Parts in the kit

![The Parts In The Kit]({{ page.asset_location }}/all_parts_small.jpg)

The kit should have all of the components shown. The Blue Board is the Arduino - brains of the robot.

The Red Board is the Motor Control board.

Two platforms.

Four motors - (which may already been attached to a platform).

4 wheels.

You should have a USB cable, battery box, 3 posts, a number of screws and nuts and at least 16 sticky pads.
Please check that all parts are present before starting to assemble the robot.
There will be additional screws please save them for later projects.
Remove all the packaging.

## Tools

### Required

![Tools Required]({{ page.asset_location }}/small_tools.jpg)
* A small flat bladed screwdriver - jewellers size.
* A computer with a USB port and internet connection.
* 6 x AA batteries.


### Optional

* A few blobs of Sticky Tac.

## Step 1 - Preparing the Chassis

### Adding the motors

If your platform already has motors attached - please skip to <a href="#routing">Routing the Cables</a>.

First you will need to connect the motors to the bracket. You will need the two long bolts, two nuts, a motor and a
bracket for each. Ensuring the two holes in the bracket are facing the top - screw the bracket into the motor.
Make 2 pairs of these- one left handed and one right handed.

![Step 0]({{ page.asset_location }}/RobotExplodedStep0.png)
![Step 1]({{ page.asset_location }}/RobotExplodedStep1_small.png)

For each of these, take two short screws and attach them to the platform.

On the platform, look for the 4 sets of 2 holes close together. These are the motor mounts.

Take a motor, and line up its metal bracket so the two holes are lined up with a set of two holes on the platform,
the motor should be mounted so the cables face backwards. Screw the motor in using 2 screws.

Repeat this for all four motors.

### Routing the cables

![Step 2 small]({{ page.asset_location }}/AssemblyStep2_small.png)
![Step 1 chassis]({{ page.asset_location }}/step_1_chassis.jpg)
In this step we will be routing the motor cables through the chassis.

Collect up the cables from one side and bunch them together.

You should find that there are 2 black cables and 2 red cables on each side.

Then Push them through these holes in the picture.

![]({{ page.asset_location }}/step_1_2.jpg)
![]({{ page.asset_location }}/step_1_3.jpg)

Completing Step 1

![]({{ page.asset_location }}/step_1_4.jpg)
![]({{ page.asset_location }}/step_1_5.jpg)

## Step 2 - The Motor Control Board

### Stopping it running away

![]({{ page.asset_location }}/step_2_1_a.jpg)

Lift this tiny green jumper and move it across one pin.
This step "disarms" the robot so when you program it, it doesn't immediately run off the table.
When the robot is built - you can use this as an off switch (or connect a switch to these two pins)

![]({{ page.asset_location }}/step_2_1_b.jpg)
![]({{ page.asset_location }}/step_2_1_c.jpg)

### Installing The Board
![]({{ page.asset_location }}/step_2_2_a.jpg)
![]({{ page.asset_location }}/step_2_2_b.jpg)

Turn the motor board upside down, and stick 5 of the sticky pads to the bottom of it.

![]({{ page.asset_location }}/step_2_2_c.jpg)
![]({{ page.asset_location }}/step_2_2_d.jpg)

Remove the backing and stick down where shown

![]({{ page.asset_location }}/step_2_2_e.jpg)
![]({{ page.asset_location }}/step_2_2_f.jpg)

### Connecting The Motors

The blue parts with screws are called terminals. We will be connecting the motors to these.
First loosen all the screws in the terminals - only a little - don't completely unscrew them.

![]({{ page.asset_location }}/step_2_3_a.jpg)

Now collect up the red cables on the left hand side. Twist the metal ends together.
Push the red cables into the "motor B" inside terminal.

![]({{ page.asset_location }}/step_2_3_b.jpg)
![]({{ page.asset_location }}/step_2_3_c.jpg)

Screw down the terminal. Repeat - bunch, twist, insert and screw down for the black cables on the left side.

![]({{ page.asset_location }}/step_2_3_d.jpg)
![]({{ page.asset_location }}/step_2_3_e.jpg)

![]({{ page.asset_location }}/step_2_3_f.jpg)
![]({{ page.asset_location }}/step_2_3_g.jpg)

Repeat with the motor A terminal for the right hand cables.

Remember to have the black cables on the outside.

## Step 3 - Adding the Battery Box

![]({{ page.asset_location }}/step_3_1_a.jpg)

Stick on pads, and peel off the backing.
![]({{ page.asset_location }}/step_3_1_b.jpg)
![]({{ page.asset_location }}/step_3_1_c.jpg)
![]({{ page.asset_location }}/step_3_1_d.jpg)
![]({{ page.asset_location }}/step_3_1_e.jpg)

Stick the battery box onto the chassis
It should be at the front, in the middle of the chassis as shown.
Ensure that the cables are on the robots right hand.

![]({{ page.asset_location }}/step_3_1_f.jpg)

### Wiring The Battery Box

![]({{ page.asset_location }}/step_3_2_a.jpg)

Thread the	black and red wires from the battery box under the right hand motor cables.
Screw in the cables

![]({{ page.asset_location }}/step_3_2_b.jpg)

The red cable from the batteries should be screwed into the terminal marked "VMS"
![]({{ page.asset_location }}/step_3_2_c.jpg)

The black cable should be screwed into the terminal "GND"
Tidy up the motor cables

![]({{ page.asset_location }}/step_3_3_a.jpg)

Push a sticky pad down on the right hand of control board.
![]({{ page.asset_location }}/step_3_3_b.jpg)

Remove the backing

![]({{ page.asset_location }}/step_3_3_c.jpg)

Stick the cables onto it.

## Step 4 - Adding The Posts for Top Deck
![]({{ page.asset_location }}/step_4_0_parts_a.jpg)

You'll need the posts and screws.
### Rear Post
![]({{ page.asset_location }}/step_4_1_a.jpg)

Push a screw from beneath into the middle hole behind the motor control board.

![]({{ page.asset_location }}/step_4_1_b.jpg)

Screw a post into the top of this by hand.

### Front Posts

![]({{ page.asset_location }}/step_4_2_b.jpg)

Push the first front screw in from under the circled hole.
![]({{ page.asset_location }}/step_4_2_c.jpg)
Screw a post into this by hand.

### Left Hand Front Post

![]({{ page.asset_location }}/step_4_3_a.jpg)
![]({{ page.asset_location }}/step_4_3_b.jpg)

Push in a screw underneath at the indicated hole.
Screw in a post.

## Step 5 - Adding the Connecting Cable

![]({{ page.asset_location }}/step_5_0_a.jpg)

First Peel off a ribbon of 8 cables. The colours are random here.

### Motor Board Connector

![]({{ page.asset_location }}/step_5_1_a.jpg)

Inspect the board. There are 3 logical groups of pins here.

* ENA, IN1 and IN2 control motor port A
* ENB, IN3 and IN4 control motor port B
* GND and 5v provide power to the Arduino which will be added later

It helps to Use some sticky-tac or a label to group them together.

![]({{ page.asset_location }}/step_5_1_b.jpg)
Corresponding to the pin groups - group together the female connector ends as shown in the image - groups of 3, 3
and 2 respectively. You cable colours will be different.

![]({{ page.asset_location }}/step_5_1_c.jpg)
Group the cable the same way on the male end. Ensure that the groups match at both ends.
### Now plug the female connectors in as shown below.

![]({{ page.asset_location }}/step_5_2_a.jpg)
![]({{ page.asset_location }}/step_5_2_b.jpg)
![]({{ page.asset_location }}/step_5_2_c.jpg)

## Making it easy to turn on

Peel off two of the cables, and attach them where the green jumper was, you will now be able to pop this
through the upper deck, and place the green jumper on them to turn the robot on or off.

## Step 6 - Bringing the two decks together

![]({{ page.asset_location }}/step_6_1.jpg)
The Two decks should now look like this.

![]({{ page.asset_location }}/step_6_2.jpg)
Push both of the ribbon cables through the port (big hole) in the top deck.

![]({{ page.asset_location }}/step_6_3.jpg)
Place the top deck over the posts
### And screw it down
![]({{ page.asset_location }}/step_6_4_a.jpg)
![]({{ page.asset_location }}/step_6_4_b.jpg)
![]({{ page.asset_location }}/step_6_4_c.jpg)
![]({{ page.asset_location }}/step_6_4_d.jpg)

<a href="construction_guide_part2.html">Next Page</a>