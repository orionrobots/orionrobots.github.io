---
title: Learn Robotics Programming - Navigating Power and Connection Challenges with the Inventor Hat Mini
date: 2024-03-19
tags: [robotics, motor hat, raspberry pi, robotics at home]
----
This week, I've been working on the code for chapter 10 of an upcoming Learn Robotics Programming 3rd edition,
where I get into connecting servo motors to the Raspberry Pi via the Inventor Hat Mini. Servo motors can be used to move things on a robot, and can have their position set specifically. They are great for things like arms or a pan/tilt mechanism for a camera.

The [Inventor Hat Mini](https://shop.pimoroni.com/products/inventor-hat-mini?variant=40588023464019) is a breakout motor control board from Pimoroni,
which I rather like due to its simplicity to get started with and wide availability.
And while it can be modified (with soldering) to accept external power, it can run directly from the power supplied to the Raspberry Pi.
The power supply I am using is a [USB power bank](https://shop.pimoroni.com/products/nanowave-3-5000mah-usb-c-a-power-bank?variant=39701956558931), again, using a fairly easily available part.

Code-wise, adding the servo motors was easy,
integrating the well thought out Pimoroni Inventor Hat library with the MQTT python service I'd built to control the DC Motors and LED's was very few lines of code! MQTT is a way to pass messages between different software components.
As I'd already integrated a joystick into the phone app to control the wheels via MQTT,
making a second joystick to control the pan and tilt of the servo was also relatively little code.
There is something satisfying about using two on screen joysticks to control the wheels and make the Pan/Tilt "look" at things while I drive it, it makes the robot feel life like!

Everything has been going well, until trying to use the servo motors, and DC motors together.

## Problems with the I2C Connection

The Inventor Hat Mini is connected electronically to the Raspberry Pi via the I2C bus, a common way to connect devices to a Raspberry Pi.
When I'd run both servo and DC motors together, I'd seen the Inventor Hat Mini stop responding to the Raspberry Pi.

At this point, I saw some problems with the Inventor Hat Mini,
in that when running both DC motors (wheels) and the servo motors (a pan tilt mechanism) together,
the code running on the Raspberry Pi lost contact with the Inventor Hat Mini.
Frustratingly, after a weekend of trying this, and seeing if fewer motors would do,
I reached a point where the original Inventor Hat Mini was no longer responding at all, even after a power cycle.

Now the original one, used for my research, had been roughly handled (by me).
I'd broken the top of the QW/ST port which does have a distance sensor connected, and may have been somewhat responsible for I2C glitches.
I may have once plugged things into it incorrectly during early wiring attempts.
I've even a suspicion that it will work fine again now I've replaced it, which I will need to verify.

However, it was time to order a new one. Pimoroni were out of stock, but I was able to get one from the Pi Hut.
I've attached the replacement, and wired everything back in, and it's working fine.

For now, I'm able to drive the robots motors together using the phone app I've been developing for the book.
I just have to watch out for further controller issues.

## Alternative Power supplies

I have been reconsidering the power supply for this, there's a [WaveShare UPS 3S power supply](https://www.waveshare.com/wiki/UPS_Module_3S), using 3 x 18650 LiIon cells, and can output 5v at 5a. The power supply that I have there at present will only supply 5v at 2.1A, which may have been the cause of the problem.

This should be able to better handle the servo motors and DC motors at the same time, although my new concern then would be that if passing that kind of current through the Raspberry Pi, where the USB C port is plugged in could cause problems. I will be experimenting with this, and now have those cells on charge beside me at my desk. I may be swapping the current USB power bank out for this if it proves effective.

Do readers any suggestions for portable 5A capable power supplies for the Raspberry Pi? I'd be interested to hear them (@orionrobots on twitter, youtube, facebook or on my discord server).

## Verifying or tracking power supply problems

I'd like to keep an eye on this problem, and I may have a few ways to do so:

1. The Raspberry Pi has sensors, which could indicate low voltage.
2. The Inventor Hat Mini also has sensors for voltage and current, which I could monitor.
3. I could use a multimeter, but this is tricky inline with a USB power supply.
4. I have a [USB-C power tester](https://amzn.to/3TKZXdH) that I could put between the power supply and the Raspberry Pi to see what is going on.

The 4th option is the easiest with an external supply, but I'll need a longer cable to try it on battery power. I'll rule out option 3 for now. Options 1 and 2 could be made as additional MQTT sensors, and I could use the phone app or [mqttgui](https://github.com/EdJoPaTo/mqttui) to monitor them.

Using the new replacement board, and the power tester, what do I get operating all motors simultaneously?

| State | Voltage | Current |
| --- | --- | --- |
| Pi booting | 5.196 V | 383mA |
| Pi Idle, 1 LED powered | 5.209v | 228mA |
| DC motors running | 5.16 V | peak 700mA |
| Servo motors moving | 5.2 V | peak 640mA |
| Both | 5.17 V | peak 1.08 A |
| Distance sensor | 5.19 V | 391 mA |
| Distance + DC motors | 5.16 | peak 837mA |
| Dist + Both | 5.15 V | peak 800mA |
| Software Power Off | 5.213 V | 191 mA |

The first observation is that the Raspberry Pi pulls more current while booting. However, a further observation is that the current of these running together (while receiving MQTT messages) is not over the 2.1 A current capacity of the battery.

What about if I start the distance sensor going? What about if I don't stop the service, and then launch motors?
In previous experiments, I have observed lag when running distance sensor plotting and then using the joystick to control the motors. And unfortunately, during this testing, that presented again.
Which meant that the test with both produced a smaller peak, possibly because I couldn't get it all going simultaneously.

The software power off is interesting, it's lower than idle, but not totally stopped. That may be due to 2 LED's still being lit though.

However, none of these take the power above the capacity of the battery, which leaves me suspecting the rough handling or the now dodgy I2C connection more than the power input.

## Conclusion

This has reinforced not jumping to conclusions when problem solving, and to come up with plans on testing and verifying my assumptions. Perhaps readers have similar experiences of problem solving, and finding that their earlier assumptions were wrong?

There's not a clear smoking gun here, only that me and my kids were driving the robot and the servo motors around having fun when it went wrong. Which meant that a number of factors could have caused it. I had assumed it was the power supply, but some more investigation and testing has shown that it is less likely to be the case. I had perhaps reacted early by buying a bigger power supply, however that will find usage in a future Raspberry Pi 5 based robot.

It also highlights that I may need to consider the lag problem in the future. The distance sensor service sends a lot of MQTT data, so in future testing, I may need to check if that is overwhelming the MQTT bus, or it there's I2C bus contention, or some other reason I see that lag. Stay tuned to see more problem solving, or what I build with the spare parts I now have in my lab!
