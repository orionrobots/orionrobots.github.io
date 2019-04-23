---
created: 2019-02-15 08:04:30
tags: [robotics, piwars, raspberry pi, piconzero, book]
title: Using The PiConZero with Learn Robotics Programming - Part 1
layout: post
---
![Title image](/assets/2019-04-09-piconzero-book-part-1/IMG_20190409_213027.jpg){: class="img-responsive"}
When writing the book [Learn Robotics Programming](https://amzn.to/2RZqPIy), I took the reader through choosing a motor controller, so they would be able to pick their own. I then made a recommendation for the Full Function Motor Hat - a motor hat available from Alibaba, eBay and Amazon from time to time. This hat is internationally available, but my preferred motor controller board, if you can purchase it is the 4Tronix PiConZero.

In this first part, I want to cover getting the board connected, adapting from chapter 7 in the book, and getting the part running like the motor hat shown.

In the posts following todays, I will look at getting it connected to sensors - part 2, and getting it connected to servo motors - part 3.

# A bit of background

![PiConZero Close Up](/assets/2019-04-09-piconzero-book-part-1/piconzero-sequence-drawio.png){: class="img-responsive"}

When working with the Raspberry Pi, a hat is a board that you attach to it to extend the pi's functionality, perhaps connecting GPIO pins to external devices.

When building a robot, the fairly standard way to start is a small wheeled rover robot. To drive those wheels, you need motors. You cannot directly connect the Raspberry Pi to motors, so a motor control board, or motor control hat is necessary. The PiConZero is such a motor control hat. The block diagram in the section "Connecting the motors to the Raspberry Pi" illustrates this well.

# Physical Connection

The PiConZero is a hat that fits directly over the Pi - it can be slotted straight onto the GPIO pins, exactly as the Motor board used in chapter 7. You should be able to following along with the section "Connecting the motors to the Raspberry Pi" in Chapter 7 of Learn Robotics Programming with a few modifications.

If you are using the Raspberry Pi 3B+, along with the detailed square of insulating tape as shown in the book, I recommend using a standoff shim packaged with the PiConZero.

![Steps for Stacking The PiConzero With The Pi](/assets/2019-04-09-piconzero-book-part-1/stacking-the-piconzero.jpg){: class="img-responsive"}

1. For the 3A+ you'll need the PiConZero, the Raspberry Pi 3A+ and some insulating tape. I've put a bit of tape on the USB socket, to stop the PiConZero catching it.
2. Push the Pi and the hat's together
3. And the PiConZero should be covering the Raspberry Pi Like So
4. Alternatively, for a Raspberry Pi 3B+, there is an additional header shipped with the PiConZero. Put it between the two as shown.

# Wiring In

You will need to then wire in the PiConZero as shown:

![Connecting The PiCon Zero to the Raspberry Pi](/assets/2019-04-09-piconzero-book-part-1/connecting_motor_wires_to_piconzero_drawio.png){: class="img-responsive"}

# Preparing The Pi

## Installing the PiConZero libraries

SSH into the Raspberry Pi. To get the library onto the Pi use this code (from 4tronix):

	wget http://4tronix.co.uk/piconz.sh -O piconz.sh
	bash piconz.sh

Running the command should create a subdirectory called piconzero with its source in it.

## Test - finding the motor hat

The steps for finding the motor hat are the same as the book, other than when running `i2cdetect -y 1`, the PiConZero is at address 22 and not 6f.

    pi@myrobot:~ $ sudo i2cdetect -y 1 
         0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f
    00:       -- -- -- -- -- -- -- -- -- -- -- -- --
    10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
    20: -- -- 22 -- -- -- -- -- -- -- -- -- -- -- -- --
    30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
    40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
    50: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
    60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
    70: -- -- -- -- -- -- -- --

# The Code

In the book, I emphasise the importance of having a robot layer for your code to work with, and the example code shown is set up to work with the Full Function Motor Hat. However, if we are to build the same robot layer, compatible with the same behaviours, how would we adapt this for the PiConZero?

We can start with the simple code for Chapter 7. The resulting system is in the GitHub repo for the book. <todo>
The testing motors experiments are some of the earliest that get your robot moving.

## Test - the motors move

The source file test_motors.py is a little different with the PiConZero, but helps you get used to switching out motor controllers.  The piconzero is a bit easier to work with than the Raspi_MotorHAT in that you don't need the `.run` calls. test_motors.py:

    import piconzero as pz

    import time
    import atexit

    atexit.register(pz.stop)

    pz.setMotor(0, 127)
    pz.setMotor(1, 127)

    time.sleep(1)

Upload this to the pi. Before running this, a quirk of the PiConZero code that means you need to add it into the PYTHONPATH. When running the code, use the following line:

    PYTHONPATH=~/piconzero python test_motors.py

The same troubleshooting steps apply. With this additional one:

If you see:

    $ python test_motors.py 
    Traceback (most recent call last):
    File "test_motors.py", line 1, in <module>
        import piconzero as pz

You need to make sure that you have installed piconzero - see Installing The PiConZero libraries above, you also need to ensure you start the code with the PYTHONPATH in front:

    PYTHONPATH=~/piconzero 

## Test - spinning backwards

To go backward on the PiConZero, set the motors speed to a negative value:

    pz.setMotor(0, 127)
    pz.setMotor(1, -127)

This code makes the right motor go backward, so the robot spins.

# Putting The PiConZero Into The Robot Object

The robot.py is a little different for this board, as it is for each motor controller. I put this in pz_robot.py

    import piconzero as pz

    import atexit

    class Robot(object):
        def __init__(self):
            pz.init()
            atexit.register(self.stop_motors)
            
        def stop_motors(self):
            pz.stop()

In behavior_path.py, we still need piconzero at the moment.

    from pz_robot import Robot
    import piconzero as pz
    from time import sleep

    r = Robot()
    pz.setMotor(0, 127)
    pz.setMotor(1, 127)
    sleep(1)

To further separate our motor board implementation from our behaviours, we need some code to convert the speed. In robot.py, inside the **Robot** class add:

    def convert_speed(self, speed):
		return (speed * 127) // 100

You'll notice the double slash. That is so this produces an integer (whole number) value only.

You can then modify behaviour_path.py to use 0-100% values for speeds.

    import robot
    from Piconzero import pz
    from time import sleep

    r = robot.Robot()
    pz.setMotor(0, r.convert_speed(100))
    pz.setMotor(1, r.convert_speed(100))
    sleep(1)

That code still uses the pz.setMotor call, which is specific to the PiConZero. We can roll that, along with the speed conversion into our robot class.

    class Robot(object):
        .	
        .
        .
        def set_left(self, speed):
            pz.setMotor(0, self.convert_speed(speed))

        def set_right(self, speed):
            pz.setMotor(1, self.convert_speed(speed))

We don't need the complication of a run mode here, as the piConZero motors don't need it. We also do not need the abs, or the int - the speeds go negative to go backwards, and the double slash creates integers for us.

We can now make a smaller and simply behaviour_path.py:

    from pz_robot import Robot
    from time import sleep

    r = Robot()
    r.set_left(80)
    r.set_right(80)
    sleep(1)

You can use this robot class from here for the other parts of the book.

In the next part, we'll look at adapting the sensor connections for this board.

## Example Code

Code for this article can be found at https://github.com/PacktPublishing/Learn-Robotics-Programming/tree/python3/chapter15/full_system/piconzero_example. Going up from there shows the full Python 3 examples.
This code should work in both python3 and python2 versions.
