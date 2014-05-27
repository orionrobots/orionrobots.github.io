---
created: 2013-11-14 12:00:00
description: The Explorer Wall Avoider Kit Now On the Shop
tags: [robotics, orion explorer 1, arduino, distance sensor, robot building, robot kit, arduino kit]
title: The Explorer Wall Avoider Kit Now On the Shop
layout: post
---
{% include JB/setup %}

The Orionrobots shop now has a new product bundle. [The Orion Explorer 1 Wall Avoider kit.](http://shop.orionrobots.co.uk/products/orion-explorer-1-complete-wall-avoider-robot)

The kit takes the Explorer 1 kit, and adds sensors and a breadboard - making it more expandable and fun. Robots are far more interesting when you add sensors to them!

* <a href="#first-steps-with-thekit">Building it</a>.
* <a href="#programming-the-robot---how-to-make-it-avoidwalls">Programming it</a>.

So you can use this kit to make wall avoiding behaviour - making a robot turn away from any object too close. It uses ultrasonic sensors, which in practice tend to work with hard surfaces better than fabrics or plush surfaces. Things which scatter and diffuse sound will be hard, things that reflect it will work fantastically.

The code possibilities are many, and you can chose to use one sensor at each end, both at the front - and which angle. You can plug them directly into the breadboard, or find ways to stick them to the bumpers of the robot.

Here is a video of me experimenting before making it into this kit:

<div style="display: inline-block; width: 300px; vertical-align: top;"><iframe src="//www.youtube.com/embed/ElXsXAcqrUE" allowfullscreen="allowfullscreen" frameborder="0" height="315" width="560"></iframe>
Orion Explorer 1 Robot Avoiding Walls with distance sensor
<a href="http://www.pinterest.com/pin/create/button/
        ?url=http://orionrobots.co.uk/blog/explorer_wall_avoider_kit.html
        &amp;media=/assets/youtube_thumbs/ElXsXAcqrUE.jpg
        &amp;description=Orion Explorer 1 Robot Avoiding Walls with distance sensor" data-pin-do="buttonPin" data-pin-config="above"> <img src="http://assets.pinterest.com/images/pidgets/pin_it_button.png" /> </a></div>

# First Steps with the kit

The basic avoiding behaviour with two sensors out front is this: drive forwards, read each sensor, and if either is closer than some threshold, then turn away from the closer one, then carry on driving forwards.
# Building it

Start with the <a href="/construction_guide.html">Explorer 1 construction guide</a>. Attach the breadboard to the robot - you can pull off the backing paper and use the self adhesive strip, or save it for later and just use some sticky tak. Stick it to the top - near the front, in front of the cable hole.

<p style="text-align: left;"><img src="/assets/2013-11-14-explorer-wall-avoider-kit/close_up_of_breadboard_connections_grande.jpeg" /></p>
<p style="text-align: left;"> </p>

The green lines over this image show the connected pins. Note that the main part of the board has a different orientation from the top and bottom rails. All breadboards (including the two types we have) follow the same basic idea. The sensors will plug into the front end of the pins on the vertical rails.

Then look at the pin labels printed on the back of the sensors. Each will have:

* Gnd - Device ground
* Trig - Trigger a ping
* Echo - Detects the echo response.
* <span class="caps">VCC</span> - Device power

Plug a sensor into the board at each side - with the ultrasonic transducers (big round metal bits) facing forwards.

<p style="text-align: left;"><img alt="Close Up Image of sensors plugged into breadboard" src="/assets/2013-11-14-explorer-wall-avoider-kit/close_up_of_sensors_in_breadboard.jpg" /></p>

If you inspect the breadboard - on some versions there are some coloured rails top and bottom - each having one red, and one blue. Convention is that the red one is used for power, and the blue for ground.

Using the male-to-male cables, Wire the <span class="caps">VCC</span> from each sensor to the red rail at the back of the breadboard. Remember the pins are connected along the green lines in the diagram above. Then wire the Gnd from each sensor to the blue rail at the back of the board.

For the left sensor:

* Trig -&gt; 11
* Echo -&gt; 12

For the right sensor:

* Trig -&gt; 6
* Echo -&gt; 7

Finally connect a wire from the blue rail to a <span class="caps">GND</span> pin on the Uno board, and from the red rail to the IORef (a voltage supply pin) on the Uno board. These connections mean you are ready to program the sensor robot.

The diagram below shows the connections. The sensors are at the top - with their pins labelled. The connections in blue are those you’ve already made in constructing the robot. Those in green connect the Arduino to the breadboard and those in yellow are on the breadboard only.

<img src="/assets/2013-11-14-explorer-wall-avoider-kit/wall_avoider_diagram_bb_48b11cd2-300a-4bf2-981e-360bc8ea6513_large.png" style="display: block; margin-left: auto; margin-right: auto;" />

# Programming the robot - How to make it avoid walls

First lets look at the high level code:

<script src="https://gist.github.com/dannystaple/7578133.js?file=high_level.pseudo.ino"></script>

This code can use a turtle library, where high level commands like:

<script src="https://gist.github.com/dannystaple/7578133.js?file=turtle_lib_example.ino"></script>

And we can also use a high level sensor library with:

<script src="https://gist.github.com/dannystaple/7578133.js?file=sensor_lib_example.ino"></script>

Note that the specific sensor type here is <span class="caps">SR04</span> - so we will be using the <span class="caps">SR04</span> device in our code.

This makes the code above easy to turn into real code. :

<script src="https://gist.github.com/dannystaple/7578133.js?file=wall_avoider.ino"></script>

Make a new sketch in the Arduino <span class="caps">IDE</span> and paste this in. Now how about the two libraries?

In the Arduino <span class="caps">IDE</span> - there is a drop down arrow to the right of the typing area - pull this down, and click “New Tab”. We’ll put each of the libraries in its own tab. Name this “TurtleMotors.h”. This will consist of two parts. First the low level Motor type. It will need to store the pins it uses for enable, 1 and 2. With the motor controller in the Explorer, the in1 and in2 pins set the direction, and enable turns it on or off. The speed setting will mean enable is turned on and off very fast, and sets how rapidly it is turned on and off. Maximum speed is the value 255.

<script src="https://gist.github.com/dannystaple/7586031.js?file=TurtleMotors.h_first"></script>

On top of this, a high level turtle library can be used to control the motors a bit. It needs to handle two motors turning, and automatically turn off after a time step. Since the automatic and turn off stuff is common - we’ll make a function for it and use it a few times. Put this also in TurtleMotors.h:

<script src="https://gist.github.com/dannystaple/7586031.js?file=TurtleMotors.h_second"></script>

The full source for that part is at <a href="https://gist.github.com/dannystaple/7586031#file-turtlemotors-h">https://gist.github.com/dannystaple/7586031#file-turtlemotors-h</a>

Finally we’ll need a distance sensor library. The comments in the code explain its operation. In short it triggers a ping, then times the return pulse, and uses the speed of sound to get the length. Put the following in a new tab called “DistanceSensor.h”:

<script src="https://gist.github.com/dannystaple/7578133.js?file=DistanceSensor.h"></script>

You should now be able to compile it and send it to your robot. It will do a fairly good job of avoiding walls, but it will be easily confused when it gets caught in a corner.

In a later blog - I will look at ways to avoid the confusion - readers can also ponder this and write their own - let me know how you got on!