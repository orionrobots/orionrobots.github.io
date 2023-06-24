---
layout: post
title: CircuitPython Ulab arrays and data transmission size
date: 2023-01-28T19:33:01.011Z
description: Small note on CircuitPython ulab
tags:
  - circuitpython
  - raspberry pi pico
  - robot programming
  - python
  - microcontroller
  - learn robotics at home
  - bluetooth ble
category: robot-programming
thumbnail: /galleries/raspberry-pi-pico-circuitpython-msg-size_thumb.png
---
Using a Bluefruit BLE UART Friend (Bluetooth BLE) is a handy way to add Bluetooth BLE to a project, with support in a Bluefruit Connect App to visualise data.

It does however come with some problems around data.
I am using it CircuitPython.

![The Adafruit Bluefruit BLE Friend](/galleries/adafruit_bluefruit_ble_uart_friend.jpeg "The Adafruit Bluefruit BLE Friend")

One of the is efficiently sending arrays over the slow 9600 baud rate of this UART.
The baud rate could be increased, but having already seen some errors across this UART using simple Dupont leads, I didn't want to push my luck here.
One answer could be to buy the SPI Bluefruit BLE Friend, which might be faster, but that is spending more money on a device I've already bought and integrated.

![Sending data from a Raspberry Pi Pico on a robot via Bluetooth BLE to a computer](/galleries/raspberry-pi-pico-circuitpython-msg-size.png "The bluetooth BLE use case")

You can build this robot yourself using [Robotics at Home with Raspberry Pi Pico](https://amzn.to/3ZBxtDr) available from the 17th March 2023! Build autonomous robots with the versatile low-cost Raspberry Pi Pico controller and Python.

So the other answer is to see what I can fix in software.
I can probably use fewer bytes to send the same data, with savings that might be quite significant.

My use case involves largish ulab arrays of data to send.

Ulab is an implementation of parts of Numpy and SciPy for microcontroller Python interpreters, like CircuitPython and Micropython.

The arrays I am using contain floats.
What I wanted to check was the overheads, in complexity, and size of sending base64 encoded bytes, instead of a JSON list.

## The JSON List

The JSON list has a clear advantage in readability, although I intend to let code consume the data received, I can easily glance at debug data, although for large lists that utility is of less value.

## Base64 encoding

Numpy (or ulab) arrays can be converted to and from a binary bytes representation.
This representation is going to be the array header data plus the raw array buffer.
The bytes representation is efficient.

Base64 encodes this back into string data, effectively using 64 printable characters.
These are the lowercase letters, uppercase letter, numbers 0-9 and the '+' and '/' characters.

## Comparing their code

Lets see the code to check both types.
I am doing this in a CircuitPython REPL via serial.

We start with some imports:

```python
>>> from ulab import numpy as np
>>> import random
>>> import json
>>> import binascii
```

I could probably use `from` imports to make the next bit smaller, but these will do.

Now I set up a test subject array, using random data:

```python
>>> d = np.array([random.uniform(0, 1) for n in range(200)], dtype=np.float)
>>> d
array([0.587398, 0.72429, 0.226611, ..., 0.515096, 0.333402, 0.378693], dtype=float32)
```

This is 200 items of data between 0 and 1.
They are all floating point.
Floating point numbers use 4 bytes per item.

We can now see the size of this list in JSON as an array:

```python
>>> len(json.dumps(d.tolist()))
2003
>>> json.dumps(d.tolist())
'[0.587398, 0.72429, 0.226611,...
0.515096, 0.333402, 0.378693]'
```

I've abridged the output.
But it is around 2Kb.
It converts the ndarray to a standard python list, then dumps it.

Let's try with tobytes.

```python
>>> len(json.dumps(
...   binascii.b2a_base64(d.tobytes())
... ))
1072
```

This bytes version is around half the size, with a little overhead.
It's wrapped in JSON again, so there's no unfair advantage there.
We have to convert the np array to bytes, then to base64, then this would be wrapped in our json data.

## What about integers?

I would expect the savings here to be less.
For example, a 16 bit integer is only going to have up to 5 digits, so this may be more about the list representation overhead.

Setting up the list:

```python
>>> d = np.array([int(random.uniform(0, 65535)) for n in range(200)], dtype=np.uint16)
>>> d
array([34024, 3334, 44281, ..., 2270, 64406, 56325], dtype=uint16)
```

Trying the json:

```python
>>> len(json.dumps(d.tolist()))
1369
>>> json.dumps(d.tolist())
'[34024, 3334, 44281, ... ]'
```

And in base64:

```python
>>> len(json.dumps(
...   binascii.b2a_base64(d.tobytes())
... ))
540
>>> json.dumps(
... binascii.b2a_base64(d.tobytes())
... )
'"6IQGDf
...==\\n"'
```

At 540 bytes, it is still roughly holding to being half the size.
So likely still worthwhile if size is the primary concern.
I've abridged the output data.

## Converting it back

None of these tests show me retrieving values back on the computer Python Numpy.
Does this work?

Going to try with uint16 first, then the float.

### Uint16 converting back

Lets try this on a python3, assuming Numpy is installed:

```python
>>> import numpy as np
>>> import json
>>> import base64
>>> data = '"6IQGDf
...==\\n"'
```

We've got the imports ready.
Let's make a conversion:

```python
>>> raw_bytes = base64.b64decode(json.loads(data))
>>> d = np.frombuffer(raw_bytes, dtype=np.uint16)
>>> d
array([34024,  3334, 44281 ... ])
```

Yes!
These values are the right values.
A float might be trickier.

Let's get a fresh set of floats on the CircuitPython side:

```python
>>> d = np.array([random.uniform(0, 1) for n in range(200)], dtype=np.float)
>>> d
array([0.295353, 0.967459, 0.759637, ..., 0.217624, 0.99465, 0.875593], dtype=float32)
```

Now encode it:

```python
... binascii.b2a_base64(d.tobytes())
... )
'"jDiXPmirdz+Yd..."'
```

And load the other side:

```python
>>> data = '"jDiXPmirdz+Yd..."'
>>> raw_bytes = base64.b64decode(json.loads(data))
>>> d = np.frombuffer(raw_bytes, dtype=np.float32)
>>> d
array([0.2953533 , 0.9674592 , 0.75963736 ... ])
```

It looks good.
Note that the PC is displaying a few more significant figures, but it's the same data.

## Further investigations to try

I should investigate with 2 dimensional arrays and see how those differ.
Loading them might be trickier as this assumes 1 dimension in from buffer.

## Robotics at Home with Raspberry Pi Pico

This post was based on research I did for the book [Robotics at Home with Raspberry Pi Pico](https://packt.link/5swS2) which is available now.

<a href="https://packt.link/5swS2" title="Learn to build and Program Robots using Robotics at Home with Raspberry Pi Pico"><img src="/galleries/2023/Robotics-at-Home-with-Raspberry-Pi-Pico-banner-2048.jpg"
  alt="Learn to build and Program Robots using Robotics at Home with Raspberry Pi Pico"
  sizes="(min-width: 1200px) 1140px, (min-width: 1000px) 940px, (min-width: 800px) 720px, 93.75vw"
  srcset="/galleries/2023/Robotics-at-Home-with-Raspberry-Pi-Pico-banner-720.jpg 720w, /galleries/2023/Robotics-at-Home-with-Raspberry-Pi-Pico-banner-1140.jpg 1140w, /galleries/2023/Robotics-at-Home-with-Raspberry-Pi-Pico-banner-1280.jpg 1280w"></a>
