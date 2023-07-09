---
layout: post
title: "Controlling a OWI Edge Robot Arm with Bluetooth"
description: "Controlling a OWI Edge Robot Arm with Bluetooth"
tags: [robot arm, usb arm, owi edge arm, python programming, maplin arm, raspberry pi, raspberry pi zero, bluetooth, blue dot, robotics at home]
date: 2021-01-23 12:00:00
---
Today I attended the fantastic Pi Wars Conference 2021, and among the talks was Martin O'Hanlon with the [Bluedot](https://bluedot.readthedocs.io/en/latest/dotapi.html) project. I followed along, had a few problems, and created two versions of a controller for the arm.

I'll add a link to Martin's talk here when it is published.

Some background - I had a Raspberry Pi Zero W set up with WiFi and Raspberry Pi OS Lite. I could already hit it with SSH and copy files over. I'll suggest that this will be easier if you install the full Raspberry Pi OS, however this guide is for a headless Pi.

All code for this tutorial is at <https://github.com/orionrobots/python_usb_robot_arm/tree/main/demos/bluedot>.

## Getting the basics to work

After logging in, I just installed Bluedot with pip:

```bash
pip3 install bluedot
```

Martin started with a simple hello world type example, printing text when buttons were pressed:

```python
from bluedot import BlueDot
bd = BlueDot()
bd.wait_for_press()
print("Pressed!")
```

I uploaded this to the Pi, and tried to run it with python3. Upon doing so, I received an Access Denied Error from DBUS. I found these commands helped:

```bash
sudo usermod -G bluetooth -a pi
sudo apt install bluetooth pi-bluetooth bluez
```

The first puts the user `pi` in the bluetooth group so it has access. The second prepares all the dependencies.
After this, I needed to pair the phone. If you are on the command line, the instructions are at <https://bluedot.readthedocs.io/en/latest/pairpiandroid.html#using-the-command-line>.

Now I was able to run the app, connect my phone to is and see a blue dot! Pressing it will show the text on the console. Hooray!
I worked through the additional ideas martin gave, but going for print statements - trying out two dots, and position sensing, and the grid of coloured dots making a button display.

## Preparing the robot arm

This robot arm plugs in Via USB, as I used a Pi Zero I needed an OTG adaptor.

I built a [Python usb robot arm](https://github.com/orionrobots/python_usb_robot_arm/) library to communicate with the Maplin/OWI edge USB arm back in 2012. It's a bit tricky on Windows and Mac due to wanting raw access to a USB device. However, it turned out to be a perfect library for the Raspberry Pi, and over the years that turned into the primary target for the library.

This library needs a few device permissions and dependencies, so the best way to install it on the Raspberry Pi is with a shell script:

```bash
curl https://raw.githubusercontent.com/orionrobots/python_usb_robot_arm/master/setup_arm.sh | sudo bash
```

This is a good time to turn the arm on, and then try some of the demo code in the repository README, to ensure the arm is functional. I find that if it's been in a cupboard for a while, I have to reseat the jumper cables for it.

## Linking with the arm

### Demonstration

This video demonstration shows me controlling the arm from the app. In this case, I'd made it functional, but not very pretty.

<iframe width="560" height="315" src="https://www.youtube.com/embed/qy1u0NPmMwM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>

### Design

I'd decided for this design to split buttons by position to control things like grippers closing/opening or joints going up/down.
That meant having 6 buttons, or 3 columns by 2 rows.

|         |          |        |
| ------- | ------   | ------ |
| gripper | led      | wrist  |
| elbow   | shoulder | base   |

The LED needs only to turn on/off, so it only needs to handle being pressed. Lets get that working first.

### Handling the LED

Taking a look at how. First I start by importing bluedot, the arm and signal pause (so the code waits for button presses). I also initialise the arm here:

```python
from bluedot import BlueDot
from signal import pause
import usb_arm

arm = usb_arm.Arm()
```

We'll start with the simplest case of the LED. This needs a pressed handler:

```python
def led_pressed():
    arm.tell(usb_arm.LedOn)
```

An important handler, perhaps the most important, is the stop handler:

```python
def stop():
    arm.tell(usb_arm.Stop)
```

In the arm library, the constants LedOn and Stop represent patterns of bits to be sent to the arm controller. The method arm.tell sends a bit pattern to the arm. Bit patterns (Actually 3 sets of bits) can be OR'd together, but I'm yet to add other bitwise operators.

We now need to set up bluedot to control this. Lets start it up, create our grid, and make a variable for the LED button.

```python
bd = BlueDot(cols=3, rows=2)
led = bd[1, 0]
```

We want to ensure that when any button is released, the arm stops, and the LED button turns the LED on.

```python
bd.when_released = stop
led.when_pressed = led_pressed
```

We can finish this with the pause directive, so the code will wait for button presses. We also want to ensure that if the system is disconnected, everything stops.

```python
bd.when_client_disconnects = stop
pause()
```

You can see this code on github at <https://github.com/orionrobots/python_usb_robot_arm/blob/main/demos/bluedot/led_only.py>.

If you run this, you'll see a 2x3 grid, but only the top middle button will do anything - it'll turn the LED on while it is pressed.

### Adding the other buttons

The other buttons in this grid would be made position sensitive.

That means they need slightly smarted handlers. Which I put after defining the arm, but before setting up BlueDot.
For example, here is the code for the grips:

```python
def grip_pressed(pos):
    if pos.top:
        arm.tell(usb_arm.GripsClose)
    if pos.bottom:
        arm.tell(usb_arm.GripsOpen)
```

The rest follow the same pattern - this needs to be repeated for each motor. I set up the full grid of buttons. This replaces the single LED definition:

```python
grip = bd[0, 0]
led = bd[1, 0]
wrist = bd[2, 0]
elbow = bd[0, 1]
shoulder = bd[1, 1]
base = bd[2, 1]
shoulder_base = bd[2,1]
```

And then we want to connect this two ways - both pressing, and moving:

```python
grip.when_pressed = grip_pressed
led.when_pressed = led_pressed
wrist.when_pressed = wrist_pressed
elbow.when_pressed = elbow_pressed
shoulder.when_pressed = shoulder_pressed
base.when_pressed = base_pressed

grip.when_moved = grip_pressed
led.when_moved = led_pressed
wrist.when_moved = wrist_pressed
elbow.when_moved = elbow_pressed
shoulder.when_moved = shoulder_pressed
base.when_moved = base_pressed
```

This extends the original code. And is available at <https://github.com/orionrobots/python_usb_robot_arm/blob/main/demos/bluedot/simple_grid.py>.

This is a complete working control, but I'll admit I'm not 100% happy with this control surface - I find it a bit cumbersome and it's easy to press the button for the wrong motor.

So I plan to come back and make a more intuitive control panel now I've got one working.
