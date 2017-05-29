---
layout: post
tags: [microcontrollers, electronics, code, esp8266, nodemcu]
title: Attaching a Joystick or 2 Analog Sensors to a Nodemcu
---
The ESP8266 is one of my favourite devices. I wanted, for various projects, to attach a Joystick to it. However, the joystick has 2 analog outputs, and the Esp8266 
has only 1 ADC (analog to digital converter). Clearly I'd have to be a bit sneaky if I wanted to interface them.

<div class="embed-responsive embed-responsive-16by9">
<iframe width="560" height="315" src="https://www.youtube.com/embed/c7jLPN8uqz8" frameborder="0" allowfullscreen="True"></iframe>
</div>

So here are detailed notes on the build. First - the joystick, as a circuit diagram, ignoring the switch, looks like this:

![Joystick](https://raw.githubusercontent.com/orionrobots/esp8266_video_series/master/multiple_analog_inputs/joystick-innards.png)

Using this, we are able to establish that ground and voltage on the outputs are shared, so we need someway to selectively consider one output, while not being effected by the other.
I looked at some other options (discussed in the video) and my simplest was to use 2 transistors. Note - another method using 2 resistors and a bit of calibration has also been proposed by a viewer.

![Circuit Diagram](https://raw.githubusercontent.com/orionrobots/esp8266_video_series/master/multiple_analog_inputs/circuit-diagram-fritzing.png)

The diagram is somewhat after the fact, I had the idea and built it to experiment with it. 

I've made a Fritzing version of the breadboard so a reader can reproduce my result:

![Breadboard View](https://raw.githubusercontent.com/orionrobots/esp8266_video_series/master/multiple_analog_inputs/circuit-breadboard-fritzing.png)

As suggested in the video any NPN transistor will do - I used C series TO92 transistors for this. The point being it's working in a low voltage - 3.3v, and the 
switching speed is not particularly demanding either.

The To92 recommendation is only because they are nice for breadboarding.

The file [https://raw.githubusercontent.com/orionrobots/esp8266_video_series/master/multiple_analog_inputs/circuitjs_example.txt](circuitjs_example.txt) can be used in CircuitJS to simulate the transistor behaviour. 
CircuitJS can be found at http://www.falstad.com/circuit/circuitjs.html and is a rather awesome toy to play with.