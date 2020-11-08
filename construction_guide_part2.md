---
layout: page
title: Orion Explorer 1 Construction Guide | Page 2
description: Building The Explorer 1 Robot | Page 2
asset_location: /assets/construction_guide
---
<a href="construction_guide.html">Construction Guide | First Page</a>

# Building the Orion Explorer 1 | Page 2

## Step 7 - Adding the Arduino

![]({{ page.asset_location }}/step_7_0.jpg)

### Turn it upside down, stick on the pads, and remove the backing

![]({{ page.asset_location }}/step_7_1_a.jpg)
![]({{ page.asset_location }}/step_7_1_b.jpg)
![]({{ page.asset_location }}/step_7_1_c.jpg)

### And stick it down on the top deck

![]({{ page.asset_location }}/step_7_2.jpg)

## Step 8 - Wiring up the Arduino

The are 3 groups of connections to make on the Arduino, which should already be grouped from Step 5.
The colours make them easy to follow from the bottom to the top. Leave the two pin connector for
switching on unconnected.
![]({{ page.asset_location }}/step_8_1.jpg)

Motor A should be connected to Digital pins 3, 4 and 5. ENA should correspond to pin 3.

![]({{ page.asset_location }}/step_8_2.jpg)

Motor B should be connected to Digital Pins 8, 9 and 10. ENB should correspond to pin 10.

![]({{ page.asset_location }}/step_8_3.jpg)

The 5v and Ground pins are located together at the other end of the board. Be sure that 5v from the motor board goes
to 5v on the robot. Check this before going to the next step.

## Step 9 - Pop in the batteries and plug it in

![]({{ page.asset_location }}/step_9_1.jpg)
Put six AA batteries in the holder. Be careful to get the right polarity.

### Plug in the Robot

![]({{ page.asset_location }}/step_9_2.jpg)
Use the included USB cable. Connect on end to your PC.

![]({{ page.asset_location }}/step_9_3.jpg)
The Robot should light up. There should be a blinking LED on the Arduino.

## Step 10 - Running your first program on it

* Do not put the wheels on the robot yet!
* Download the <a href="https://www.arduino.cc/en/Main/Software">Arduino app</a> on your computer from
  
* Follow the On-site instructions to install it. This works for Linux, Mac and Windows
* For Windows 8 users: <a href="https://www.youtube.com/watch?v=CdE72XUYC7k">Installing the Arduino
UNO under Windows 8</a>. Other OS's will not require this

### The Arduino IDE loaded

![]({{ page.asset_location }}/step_10_1.png)
You should see something a bit like this when you've completed the above.

### Get My Starting Code

The basic code for getting the robot running is on Github.
<a href="http://github.com/dannystaple/OrionExplorerOneBasic/archive/june_2013.zip">Download the current release.</a>
Unzip this. Then open SimpleMotorBot/SimpleMotorBot.ino in the Arduino app.

![]({{ page.asset_location }}/step_10_2.png)
* Click the highlighted button to send it to your robot.
* The motors will turn on for a few seconds and then stop.
* If you were impatient and put the wheels on the robot be prepared to catch it!
* You can now unplug the robot

## Step 11 - Putting The Wheels On

![]({{ page.asset_location }}/step_11_0.jpg)
Put the robot on its side.

![]({{ page.asset_location }}/step_11_1.jpg)
Push on the first wheel.

![]({{ page.asset_location }}/step_11_2.jpg)
Note the axles on the motor and the hole are circles with two flattened edges.

![]({{ page.asset_location }}/step_11_3.jpg)
Line it up, and push it on – it takes a pretty good push.

### Push on the other wheels

![]({{ page.asset_location }}/step_11_4_a.jpg)
![]({{ page.asset_location }}/step_11_4_b.jpg)

![]({{ page.asset_location }}/step_11_4_d.jpg)

## Step 12 - Final Step - Starting it up

![]({{ page.asset_location }}/step_12_1.jpg)
Put the robot on the floor.

Locate the green jumper - and place it over BOTH pins of the on connector.
The robot should start to move!

## It moves! Where to go from here...

The robot is now ready for you to start playing with the program, or adding sensors.
The <a href="/getting_started">Getting Started</a> section has more.
