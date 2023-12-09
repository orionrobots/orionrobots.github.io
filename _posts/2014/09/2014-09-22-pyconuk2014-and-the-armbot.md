---
layout: post
title: PyCon Uk 2014 and the Armbot
tags: [python, pycon, armbot, eeebot, i2c bus, raspberry pi, micropython, robot building, robotics at home]
todo: photos, check links, github links, split into smaller stories.
---
As I have done since 2012, I went to [Pycon Uk](http://pyconuk.org) this year, and brought a robot along with me.

PyConUk is a Coventry based Python conference, with an education track that has grown year on year, and is possibly one of the most fun bits of the conference.

## Micropython

While there, I saw the [Micropython](http://micropython.org) presented by Damien George of George Robotics.
This looks like a perfect microcontroller for building robots at home.
There were a few talks about the device, its capabilities, and Damien is looking for developers, hobbyists and educators for ideas and cool stuff to do with the board.

Damien George had time to give me a demo and show me more about the board.
It boots straight into python with a Python REPL (Read Eval Print Loop) available via the Micro USB port, so you can plug it into a computer, and start typing commands directly on the microcontroller in python.
You don't need any kind of development environment on the computer.
This makes Micropython perfect for laptop robotics, or a Raspberry Pi based lesson.

The device also has a small flash system and a micro-sd card slot.
You can drop files on there for use as or in programs, and you can pop a main python file that will be started on boot.
The SD slot mounts as a removable device when the micro is plugged in to a computer.

The micropython is a beautiful little controller based on an Arm cortex M4 (I think), with an accelerometer on board and a shield concept called "skins".
It has a symmetry in its pin layout so you can put two skins directly on the board, and since Damien is designing them using the i2c bus, you can stack them too, so plenty of room for expansion.

There are GPIO pins, and although it is a 3v3 device, it is 5v tolerant.
It has some onboard led's and a user programmable button which are handy for demo and debug purposes.

You can set up timers and interrupts that call python functions.
With SPI, I2c, USB host mode (with an OTG on-the-go adaptor), UARTs and proposed CAN bus too, it can be used in many places where other microcontrollers can.

It aso has power characteristics similar to the Arduino, making it light enough to use where you would use the Arduino or an AVR.

The only real catch though is that it was a kickstarter project, and he (with his crew) have fulfilled the original backers but still have some work to do and probably need a breather, so it may a short while before you or I can get our hands on one.
There are projects using the micropython code so this work may cause a proliferation of devices like these.

I really can't wait to get my hands on some, and build some robots with them on board.

## The Education Track

I'll talk a bit more about it on my [personal blog](http://dannystaple.github.io), but the Education track was really amazing.
For a start a number of people from the Raspberry Pi foundation were there, and I got to see sessions with Carry-Anne Philbin (aka geekgurl on youtube), Ben Nutall, and Alex Bradbury.
I also had a little debug session with Alex, getting USB bluetooth going as a Pi Serial console, and saw Carry-Anne's neat biscuit-bot.

There were the QuadCopters, brought by sponsors, developers and teachers and flown with code.
What I really loved to see were the physical computing sessions, where a Raspberry Pi was used with the Pibrella board to show how it could be used in the classroom lighting LED's, and spinning a pinwheel on a motor.
This was all really good fun.

There were robot arms (including my Armbot), Lego EV3/mindstorms sessions and kids bringing their own awesome Raspberry Pi projects on the saturday Kids day.

## My Armbot robot

People who have followed my exploits for a while may remember my EEEbot.
EEEBot was an EEEpc based robot where the tiny laptop could be mounted, hooked up with a motor controller and drive around.
It was based on the very beefy RD-01 robot drive system with the MD25 controller.

I have long taken off the EEEpc (and given it to my kids to play on), and this time I have mounted a bunch of new hardware.

The starting point:

* RD01 Drive system - big motors, big wheels, built in encoders and the MD25 controller in I2c mode.
* A battery pack - 8xAA batteries giving 12v.
  The MD25 has an onboard regulator for 5v, and drives the motors with 12v.
* A switch from a local hardware shop.
* A thick bit of foam board - easily drilled/milled but strong enough.
* Lots of screws and hot-glue holding it together.

What I added last week just in time for PyCon:

* A Raspberry Pi (B2 but will soon be a B+) as the main processor - connected to the mD25 with I2c.
* A phone topup battery for powering the Pi.
* A USB hub - powered - to assist connecting the PI to other gear.
* A wifi dongle and bluetooth dongle (connected to the hub).
* A Pi Camera.
* The uFactory uArm I backed on kickstarter - solidly mounted and connected to the pi with USB, with motor power from the md25.

It was Thursday night in the hotel that the final screws mounting the arm onto the chassis went on, and the arm will have to come off again for travel.
On Friday, I arrived at Pycon with this robot with no code, the idea being "I am built, now program me minion!".
The Ibis hotel staff were helpful in that they lent me a bigger screwdriver when I needed it to bolt the arm in place properly.

After going to the conference opening, and a few sessions, I brought the robot over to the Simulation Centre where the education track was starting up, and this is where the fun really starts.

## The MD25 Robot Drive

First I adapted the MD25 code I used with the EEEpC to the Raspberry Pi, and was able to get motors turning and read back battery condition.

To get started, I needed the SMBus libraries installed on the Pi, which are in the Raspbian repo, and then to run:

```bash
    sudo i2cdetect -y 0
    sudo i2cdetect -y 1
```

I found the MD25 on address 0x58 on bus 1.
I then picked up my old code from github, and made a new version using SMBus.
Barring a few silly typos, this worked very quickly.
I removed the wheels for testing of course.

## Bluetooth serial terminal

I then started trying to get a bluetooth serial console (TTY) since a keyboard/mouse and monitor are not so easily available when out and about.
The theory being that with a login console on bluetooth, I could reach the Pi from my laptop and putty, and then it would be perfectly capable of running what I needed it to.

This turned into a rabbit hole.
I got bluez installed, and had `rfcomm` watching for connections and trying to start `agetty`, but didn't quite get it working.
I had a bit of help from Alex Bradbury of the Raspberry Pi Foundation, and we had some response, enough to know that we were close.
I've left an open stack exchange question, and I've since been talking with a colleague who has got this to work in Debian.
Currently I've not sorted this, but a bit of work and I'll get there.

## The Robot Arm

While at PyCon, I then started writing code to make the arm move.

Each arm joint consists of a servo motor, with the potentiometer sense signal exposed to read the angle.

The first thing I tried was to put an Arduino IDE on the Raspberry Pi, which while successful, was quite slow to download on the conference wi-fi.
I ended up doing its dependencies in chunks, and it really does need far too many.
I think it'd be nice to have a lightweight set of buttons paired with leafpad for this.

I got frustrated with how slow the IDE was. The simple GUI, and any attempts to compile and upload were too slow.
So I continued by using the version on my laptop instead of the Raspberry Pi.

My plan then was to set up a simple serial protocol on the arm's Arduino, so I could then talk to it from the Pi.

The protocol was simple:

command      | description
-------------|------------
`P<n>,<pos>` | Position motor at joint N to pos. Where pos is a servo angle
`?<n>`       | Query the position at joint N
`A<n>`       | Attach motor n
`D<n>`       | Detach motor n
`;`          | Added later to terminate a command (so serial.parseInt doesn't wait for 1 second)

Attaching and detaching will respectively send the servo signal, and relax the servo.
You cannot move an attached arm so you must detach to try any recording.
The position query would return the raw analogRead value, and the P pos command was the first implemented.

I got a simple version of P only working in time for the kids day, and showed some kids how to work it using the Arduino serial console to send commands.
At this point there were no software motor limits, so we had to learn where they were.
The older boy (who also built an amazing Raspberry Pi arcade machine), quickly got the hang of it.
I scribbled out a quick hand drawn sketch showing joint numbers, and wrote some limits as we found them on the axes.

He then taught another younger boy how to interact with the arm, and they made a game of moving stuff between two cups using the arm!
Awesome.

However, without a backend on the Pi or laptop, they were only issuing single commands.
So later I started to build a python back end for it.
This was initially python2 (but later I've made it work in 3 - with a little coaxing).
The python backend uses PySerial, and forms commands to send over, with wrappers to set motors and get position.
I baked some limits right into that code.
I was able to test the basics with single movements and even attempted to get some reads.
It was at this point I added the attach and detach code too.
It was here I remembered to ensure that I set the timeout on the pyserial library, so it doesn't wait forever.
I had to kill a few sessions because of that.

On the last day of the conference, I did a robot sprint (more about that below) and I then tried to issue a set of commands.
I quickly found that there was a 1 second delay between one movement and another.
In theory - with the servo library, two rapid servo commands to different joints should happen in parallel.

We (me and 2 other python/robot sprinters) first started thinking that the servo library may be doing something - like interfering with serial.
So we instrumented the code on the both sides with timestamps.
It looked like most stuff was being sent at once, although it was not getting final responses.
There was a consistent 1 second delay in timing before the second motor stuff went.

We made a silly mistake by diving deep into the servo code and servo library.
We tried using beeps as debug markers.
After a long period of total frustration, we started commenting out all the servo code, to see how it behave without it.
It still paused...

At this point - we knew that the servo code wasn't the problem, and something was wrong in serial.
It took a bit of reading to find that `serial.parseInt` would wait a bit of time for further digits if it didn't find a non-digit character in the buffer.
And the default timeout... 1 second!

My fix was to modify the little protocol so that an optional No-op semicolon could be sent at the end of a command, which would then immediately terminate the parseInt.

I'll put this code onto github shortly.

## Robot Sprint

The robot building sprint had me with the armbot, debugging the problem above.

Another chap had brought along a Cybot (from The Real Robots partwork magazine), modified to have a MicroPython connected to the original motor board, which was pretty cool.
It was early days for this bot, but he was getting motor movement.
I would love to find more of his exploits with it.

Also at the sprint was Carry-Anne Philbin, of the Raspberry Pi foundation, with a rather neat looking robot named "Biscuit Bot". It had tank tracks below, and a body/head made of a big biscuit tin, with arms holding a little tray.

The sprint was the last part of Pycon, apart from a little tidy up and the goodbyes at the end.
