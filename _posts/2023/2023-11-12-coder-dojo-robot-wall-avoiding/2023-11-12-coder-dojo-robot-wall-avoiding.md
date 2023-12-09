---
title: Coder Dojo Robot Wall Avoiding
tags: [robot building, robotics at home, robot programming, micropython, coder dojo robots]
date: 2023-11-12
author: Danny Staple
thumbnail: _posts/2023/2023-10-14-coder-dojo-robot-part-choices/rcwl-1601-distance-sensors.png
---
In this tutorial, I will show how to use a pair of distance sensors for wall avoiding.
This is a common task for robots, and is a good way to get started with sensors.
We will build this with a simple "Bang bang" algorithm.

This is part of a series of tutorials on building and programming robots for my local Coder Dojo.

We will be using Thonny to write this code.

## The robot

The robot we are using is a simple two wheeled robot, with a caster wheel at the front. See [Raspberry Pi Pico Line Follower](/2023/08/05/raspberry-pi-pico-line-follower/) for details on how to build the robot.

We will be adding some further components:

- 2 x RCWL-1601 distance sensors. These are 3v3 compatible, so good for Raspberry Pi's and Raspberry Pi Pico's. They are cheap, and easy to program as HC-SR04 (a common distance sensor) code works with them.
- Some way to attach them or strap them to the robot. For the coder dojo robots I used cable ties, for my Piwars robots I've used 3D printed mounts. Note that these do not fit HC-SR04 brackets and are slightly smaller.

## Attaching the sensors

The sensors should be at the front of the robot, with the two large cans facing forward. Place one on the left side, and one on the right. They can be facing slightly outward, but not by more than around 10 degrees.

{% img_responsive "_posts/2023/2023-10-14-coder-dojo-robot-part-choices/rcwl-1601-distance-sensors.png", "2 RCWL-1601 sensors attached to robot" %}

## Wiring

The RCWL-1601 sensors are 3v3 compatible, so we can connect them directly to the Raspberry Pi Pico. The sensors have 4 pins:

{% img_responsive "_posts/2023/08/15/RCWL-Pinout.png", "RCWL-1601 Pinout" %}

We will wire it to the Raspberry Pi Pico as follows:

{% img_responsive "_posts/2023/08/15/Raspberry-Pi-Pico-W-Pinout-for-Coder-dojo-robot.png", "Raspberry Pi Pico Pinout with our sensors" %}

The sensors are connected to the following pins:

<style>
table {
    width: 100%;
}

/* add a shaded background to the thead cells */
table thead tr th {
    background: #666;
    color: #fff;
}

/* cell borders - add horizontal borders between rows */
table tr th,
table tr td {
    border-bottom: 1px solid #ddd;
}

/* Align pin name columns (2 and 3) to middle */
table tr th:nth-child(2),
table tr th:nth-child(3),
table tr td:nth-child(2),
table tr td:nth-child(3) {
    text-align: center;
}

/* Place a stronger border between the left and right sensor row groups (between 4th and 5th row) */
table tr:nth-child(5) th,
table tr:nth-child(5) td {
    border-top: 2px solid #000;
}

.power {
    background-color: #dc322f33;
    /* border-left: 4px solid #dc322f; */
}

.ground {
    background-color: #002b3633;
    /* border-left: 4px solid #002b36; */
}

.data {
    background-color: #85990033;
    /* border-left: 4px solid #859900; */
}

/* Can I put white table spacing between rows */
table tr th,
table tr td {
    padding: 0.5em;
}
</style>

<table>
    <thead>
        <tr>
            <th>Sensor</th>
            <th>Sensor Pin</th>
            <th>Raspberry Pi Pico Pin</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Left</td>
            <td class="power">VCC</td>
            <td class="power">3V3</td>
        </tr>
        <tr>
            <td>Left</td>
            <td class="ground">GND</td>
            <td class="ground">GND</td>
        </tr>
        <tr>
            <td>Left</td>
            <td class="data">Trig</td>
            <td class="data">GP4</td>
        </tr>
        <tr>
            <td>Left</td>
            <td class="data">Echo</td>
            <td class="data">GP5</td>
        </tr>
        <tr>
            <td>Right</td>
            <td class="power">VCC</td>
            <td class="power">3V3</td>
        </tr>
        <tr>
            <td>Right</td>
            <td class="ground">GND</td>
            <td class="ground">GND</td>
        </tr>
        <tr>
            <td>Right</td>
            <td class="data">Trig</td>
            <td class="data">GP6</td>
        </tr>
        <tr>
            <td>Right</td>
            <td class="data">Echo</td>
            <td class="data">GP7</td>
        </tr>
    </tbody>
</table>

## Code for Robot.py

We depend on code that has:

- A `robot` module with a `set_speed` function that accepts a motor number and a speed between `-1.0` and `1.0` like the code from my book _Robotics at Home With Raspberry Pi Pico_. You can also adapt this for your own motor control code.
- The `robot` module should also have a `stop` function that will stop all the motors.

This has been explained in previous tutorials. Here is the code for robot.py (micropython) so you can get started:

```python
from machine import Pin, PWM
PWM_MAX = 65025

class Motor:
    def __init__(self, pin1, pin2):
        self.pin1 = Pin(pin1, Pin.OUT)
        self.pin2 = Pin(pin2, Pin.OUT)
        self.m1 = PWM(self.pin1)
        self.m2 = PWM(self.pin2)

    def stop(self):
        self.m2.duty_u16(0)
        self.m1.duty_u16(0)

    def drive(self, speed):
        if speed > 0:
            self.m1.duty_u16(int(PWM_MAX * speed))
            self.m2.duty_u16(0)
        if speed < 0:
            self.m2.duty_u16(int(PWM_MAX * -speed))
            self.m1.duty_u16(0)

motors = [
    Motor(0, 1),
    Motor(2, 3)
]

def set_speed(motor, speed):
    motors[motor].drive(speed)

def stop():
    for motor in motors:
        motor.stop()
```

## Quick note on what the sensors do

These sensors are ultrasonic.
They emit sounds that are a higher pitch than most humans can detect in small bursts.
They then measure how long it takes for that sound to echo back to the sensor.

If you've ever seen a submarine in a movie with a "ping" sound, that is what is happening here.

rcwl_1601.py:

```python
from machine import Pin, time_pulse_us
from utime import sleep_us

class RCWL1601:
    def __init__(self, trigger_pin, echo_pin):
        self.trigger_pin = Pin(trigger_pin, Pin.OUT)
        self.echo_pin = Pin(echo_pin, Pin.IN)
        self.trigger_pin.value(0)

    us_to_cm = 0.0343 / 2

    def distance_cm(self):
        # Send a pulse
        self.trigger_pin.value(1)
        sleep_us(10)
        self.trigger_pin.value(0)
        # Measure the time it takes to get a pulse back
        return_time =  time_pulse_us(self.echo_pin, 1, timeout_us=100000)
        if return_time == -2:
            return 100

        # Now we have the time, we can calculate the distance
        return return_time * self.us_to_cm
```

Setting the trigger pin high for 10 microseconds, then low again triggers a sound pulse.
The sensor then waits for the echo to come back. This could time out, if we get -2, return 100cm as a distance.

Because we measure the time, to make a distance, we use the speed of sound. The speed of sound is 343 meters per second.
We divide this by 100 to get centimeters per second, 0.0343.

The sound pulse makes a round trip to the object and back, so we'd end up with twice the distance.
We divide by 2 to get the right distance. We can store 0.0343 / 2 as a constant, and use that in our code.

Let's try this out in a simple test.

```python
import rcwl_1601
import time

left_sensor = rcwl_1601.RCWL1601(4, 5)
right_sensor = rcwl_1601.RCWL1601(6, 7)

while True:
    left_value = left_sensor.distance_cm()
    right_value = right_sensor.distance_cm()
    print("Left: ", left_value, "Right: ", right_value)
    time.sleep(0.01)
```

Run this code, and you can wave your hand in front of the sensors. If all is well, you should see the distance change being printed out in the thonny console.

{% img_responsive "_posts/2023/2023-11-12-coder-dojo-robot-wall-avoiding/distances-plotted.png", "Distance plots" %}


If you see errors and timeouts, check the code first, then check the wiring and pin numbers. It works well with reflective surfaces, but not so well with soft surfaces like curtains.

Let's use this to make a robot that avoids walls!

## Code for wall avoiding

This code makes decisions based on a value going over a limit. Let's make something.

You can save this to the robot as main.py so it will run when the robot starts.

```python
import robot
import rcwl_1601
import time

left_sensor = rcwl_1601.RCWL1601(4, 5)
right_sensor = rcwl_1601.RCWL1601(6, 7)


speed = 0.5
turn_distance_cm = 20

try:
    while True:
        if left_sensor.distance_cm() < turn_distance_cm:
            robot.set_speed(0, speed)
            robot.set_speed(1, -speed)
        elif right_sensor.distance_cm() < turn_distance_cm:
            robot.set_speed(0, -speed)
            robot.set_speed(1, speed)
        else:
            robot.set_speed(0, speed)
            robot.set_speed(1, speed)
        time.sleep(0.01)
finally:
    robot.stop()
```

For a first test, I suggest propping the robot to make sure it runs, and iron out any issues.
This code makes the robot move forward at a slowish speed, you can increase the speed variable if you like.
When it gets closer than 5cm to a wall, it will turn away from the wall. It checks the left sensor first, and if that is clear, it checks the right sensor.
If both are clear, it will go forward.

The whole thing is wrapped in `try..finally` to ensure that even if there is an error, the robot will stop.

Send this to the robot, and let it go. It should avoid walls. However, it can get quite close and ride up a wall, or stuck in a corner. You can set that turn distance to a larger value if you like. There are other algorithms that can be used to make the robot avoid walls better, but this is a good start.

## Learning more

You can learn more about building robots to avoid walls, follow objects or determine their location in space with my book [Robotics at Home With Raspberry Pi Pico](https://packt.link/5swS2), where you can learn to build a chassis using CAD, adapt to CircuitPython, and add sensors to your robot.


<a href="https://packt.link/5swS2" title="Learn to build and Program Robots using Robotics at Home with Raspberry Pi Pico">{% img_responsive "galleries/2023/Robotics-at-Home-with-Raspberry-Pi-Pico-banner.png", "Learn to build and Program Robots using Robotics at Home with Raspberry Pi Pico" %}</a>
