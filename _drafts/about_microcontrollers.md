---
layout: page
title: About Microcontrollers
tags: [arduino, microcontrollers, electronics, programming, robotics at home]
description: About Microcontrollers
---
The Orion Explorer 1 robot kit came with an Arduino Microcontroller board.

Just what is a microcontroller, and what can you do with it?

It helps to think of electronics as a set of building blocks that you put together to make a finished item, like a
robot, a washing machine, a TV remote or a mobile phone. The microcontroller is a fairly widely used block - and it is
found in all the above things and many more electronic items.

## Plug it in

In your kit - you will have an Arduino UNO R3 board, and a USB cable. If you have already assembled the robot - you may
want to remove the wheels first.

Take the USB cable, plug one end into your Arduino, and the other into your computer.

It will light up - and it is now ready to be programmed.

All microcontrollers can run (also known as execute) a program. A program is a series of instructions which tell it
what to do.

### Playing programming

Required - you, a friend and a bit of imagination.
Find a simple and safe task - like walking through a door.

### Calling Each Instruction

You, the "robot", can only do what you are told to do by your friend - and the instructions they can use are:

Instruction     | Description
--------------- | -------------------------------------------------------------------------
Turn Left/Right | You must start turning in the direction they say
Forward/Back    | You must start walking in the given direction
Stop            | You must stop. Continue doing other instructions until you here this one.

Your friend, the "programmer" will call the instructions until you are done.
It is good fun, and may take a bit of practice - so walk slowly so you don't get hurt. Feel free to make silly noises
if they walk you into a wall or a door frame. You can then reverse the game - so you say the instructions, and they
carry them out.

### Handing Over A Set of Instructions

You will require a bit of paper and a pen for this one.

Now the game gets a bit more complicated. I'll introduce one more instruction:

Instruction         | Description
------------------- | ----------------------------------------------------------------
Continue For 1 Step | Continue the previous instruction for the number of steps given.

The "robot" should try to keep their steps or turning steps the same length for this.
The "programmer" should now try to write down the instructions needed to get you to the door on the paper.
The "robot" should follow the instructions on the paper, until either you've done it, or it's gone wrong.
You may need a bit of practice to get this right. Again - play, and swap roles with it.
Awesome - you can now both program!

## Programming the Arduino

So how can we start to turn what you saw in the game into something real on the robot?
In this exercise, you'll need the Arduino plugged into the PC as above, access to the internet, and a little bit
of time.

The Arduino is designed primarily for running programs - and you'll use the PC to get a program - a set of written
down instructions, into it.

Please download and install the [Arduino software](http://www.arduino.cc/en/Main/Software).

Start the Arduino software, and you'll see something like this:
![The Arduino IDE](/assets/construction_guide/step_10_1.png)

It is here that you will start typing instructions for your Arduino.

Lets try a first program. Making an LED turn on. On the Arduino board - there are a few LED lights. One of them is
labelled "L" and it is this one you will be able to play with.

In the Arduino App, go to the menu and click: File->Examples->01.Basics->Bare Minimum

You should see the following:

```c++
    void setup() {
      // put your setup code here, to run once:

    }

    void loop() {
      // put your main code here, to run repeatedly:

    }
```

What you have here is the skeleton of an Arduino program. There are two "comments" - these aren't instructions but
explanations for you or another programmer to say what your program means. These are inside "functions" - blocks
of program that you put instructions in. We will put our new instructions (or new 'code') into the setup function,
because we only want to run once when the reset button is pressed.

The LED is on an "IO" pin - an Input/Output pin. When you use a pin for information/changes coming out of the
microcontroller this is output. The Pin this LED is connected to is 13 (they are all numbered).
So lets set this to an output in the setup function:

```c++
    void setup() {
      // put your setup code here, to run once:
      pinMode(13, OUTPUT);
    }
```

What you are doing here is sending the "pin mode" instruction for pin 13 with mode OUTPUT.
The instructions for the Arduino are written this way - with some information in the brackets "()" and a semicolon ";" to
end each one.

The LED pin is now an output, and it is a digital output. We now want to make sure we write/put a "HIGH" or "ON" level on
it to turn the light on:

```c++
    void setup() {
      // put your setup code here, to run once:
      pinMode(13, OUTPUT);
      digitalWrite(13, HIGH);
    }
```

The code here is using a "digitalWrite" instruction for pin 13 with the information HIGH.
Leave the "loop" function alone. We can talk about the other parts later.

Lets run this on the Arduino - hit the button highlighted in the picture to send your code to the Arduino.
When you've sent it, which will take half a minute or so (lights will flicker on the Arduino while you are
sending the program), that light will turn on and stay on. This is your first program!

![Use the play button in Arduino to run your code](/assets/construction_guide/step_10_2.png)

Lets add a little more to make the light blink. We'll use what you've already seen here and in the game before.

What we'll do is set it HIGH (on), then wait a second, set it LOW, wait, and then HIGH again.
The instruction to wait is "delay" - and the information for it is in milliseconds (1000th of a second), so use 1000 to
wait a whole second:

```c++
    void setup() {
      // put your setup code here, to run once:
      pinMode(13, OUTPUT);
      digitalWrite(13, HIGH);

      delay(1000);
      digitalWrite(13, LOW);
      delay(1000);
      digitalWrite(13, HIGH);
    }
```

Now send the code to the Arduino to run it - and each time you reset it should blink once and then stay off.

## What is in a microcontroller?

All microcontrollers have the following properties:

* inputs - that is, places to receive information. You can connect them to input electronics like switches and sensors.
* outputs - places to send information. These can go to output electronics like lights, motor controllers.
* Running instructions - you can store a set of instructions, a list of things to do with the inputs and outputs. This
is otherwise known as a program.
* Some memory - some to store the program, and some to remember some information while the program is running.

They also usually require:

* A power supply - of course, a controller needs power to function.
* A clock - some input that generate a regular tick, like the second hand on a clock or a metronome. They need this to
work through the list of instructions.

In essence - it is a tiny computer, designed to interact with other hardware.

Some controllers do not have the memory internally and would have it as an external chip. Also most require some method
to program them - a computer like a PC or a laptop with the correct kind of cable or device.

For inputs - there are two major kinds on a controller:

* Digital - These can accept 1s or 0s - they can be on or off. States may have to be indicated through a series of
pulses on these pins if they are more complicated.
* Analog - These pins can accept a varying input from 0 to 5v and produce a value depending on them.

## What is the Arduino then?

The Arduino is a board with a microcontroller on board (the Atmel AVR 8-bit 328), with a set of supporting instructions
and circuitry. On board, there is already a programming device that requires only a USB cable, and the software to
program it is freely downloadable.

There is a clock, power pins and a number of Input and Output pins. These are often referred to as IO pins.
