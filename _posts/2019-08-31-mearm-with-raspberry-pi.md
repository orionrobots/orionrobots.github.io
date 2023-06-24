---
date: '2019-08-31'
description: Connecting a MeArm to the Raspberry Pi
layout: post
tags:
- robotics
- robot arm
- raspberry pi
- raspberry pi projects
- raspberry pi 3 projects
- mearm
- Laser Cut robot arm
- raspberry pi zero w projects
- robotics at home
title: Connecting a MeArm to the Raspberry Pi
---
## Building the Arm

In my last few posts I've been playing with robot arms. In a recent video, I built the MeArm robot kit and thoroughly enjoyed doing so. In rather nice Nuke Cola blue laser cut plastic, it went together very nicely. It is cheap enough and simple enough for learning robotics at home with.

<div class="embed-responsive embed-responsive-16by9">
<iframe width="560" height="315" src="https://www.youtube.com/embed/OY8Aq9rou3k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
</div>

In the next video I wire it up and then connect it to a Raspberry Pi

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&language=en_GB&marketplace=amazon&region=GB&placement=B01680T1B4&asins=B01680T1B4&linkId=ac32535aaf16558ce7e44901d580f9b2&show_border=true&link_opens_in_new_window=true"></iframe>

## Connecting it to a Raspberry Pi

In the most recent video, this arm is connected to the Raspberry Pi

<div class="embed-responsive embed-responsive-16by9">
<iframe width="560" height="315" src="https://www.youtube.com/embed/_63Iw9JOUjQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
</div>

## Wiring It Up

I used a MeArm wiring guide at [Pinout XYZ](https://pinout.xyz/pinout/mearm_pi) to wire it in, with a tiny breadboard for handling the power connections to the Servo motors. The servo's run of their own 6v battery pack, but share a ground with the Raspberry Pi, with the signal cables going to specific pins on my Raspberry Pi, in this case a 3A+.

## Preparing the Pi

First have a Raspberry Pi setup with Raspbian. I prefer a headless setup but it doesn't really matter.

It should have python3. You should be able to get to a command line on it.

## Installing the python packages

From a command line:

    sudo apt-get update
    sudo apt install python3-gpiozero pigpio python3-pigpio

## Enabling the daemon

    sudo systemctl enable pigpiod
    sudo systemctl start pigpiod

## How to connect GPIOzero to the MeArm

[GPIOZero](https://gpiozero.readthedocs.io) is my favourite way currently of using Python to talk to hardware connected to one of my Raspberry Pis.

This can be tried in a python3 repl (terminal session) then put into a file.
You must have followed the setting up steps first.

    $ python3
    >>> from gpiozero.pins.pigpio import PiGPIOFactory
    >>> gpiozero.Device.factory = PiGPIOFactory()
    >>> base = gpiozero.Servo(4)

Python may grumble here, stuff about Fallback. Ignore it.

Set up the other servos:

    >>> gripper = gpiozero.Servo(10)
    >>> right = gpiozero.Servo(17)
    >>> left = gpiozero.Servo(22)

Or you can go better and call left elbow and right shoulder.

## Interacting with the servos

These are using the [Servo](https://gpiozero.readthedocs.io/en/stable/api_output.html#servo) object from GPIOZero.

You can set the middle with:

    >>> base.mid()

This should set the rotation of the arm (shoulder) to the middle.
And go to extents with:

    >>> base.min()
    >>> base.max()

You can also set .value to vary this:

```python
    >>> base.value = 0.7
```

This should be a value between -1.0 and 1.0 with 0 being the middle.
Left and right should be elbow and shoulder angles.

## Making servo sweeps

The sweeps are using Python for loops, to incrementally change the value of a servo. You can change the sleep time - the smoothness is inverse to the time taken to move, with the time there to allow the servo to find a position before sensing the next update.

```python
>>> import time
>>> for n in range(0, 100):
...   base.value = n/200
...   time.sleep(0.01)
```

This could be made into a function:

```python
def servo_sweep(servo, min_range, max_range, steps, seek_time):
    step_size = (max_range - min_range) / steps
    for n in range(0, steps):
        servo.value = min_range + n * step_size
        time.sleep(seek_time)
```

This means you could sweep from and start to end item. Seek_time is used to specify how long to give a servo to move between steps.
