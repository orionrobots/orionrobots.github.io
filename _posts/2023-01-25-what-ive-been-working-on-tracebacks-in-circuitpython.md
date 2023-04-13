---
layout: post
title: What I've been working on - tracebacks in circuitpython
date: 2023-01-25T10:52:56.883Z
description: Tracebacks for error handling in circuitpython
tags:
  - circuitpython
  - raspberry-pi-pico
  - python
  - error-handling
  - robotics-at-home
category: robot-building
---
What have I currently been working on? As part of my work on [Robotics at Home with Raspberry Pi Pico](https://packt.link/5swS2) I discovered a problem in CircuitPython with the traceback module, although i was perhaps more of a misunderstanding on my part.

## What is the traceback module?

By default in python any exception not caught, will print itself and the traceback to a console as the program exits due to an error. This is great if you are connected to a console. However, on a robot, or a headless server, you might wish to do something with that information other than on the console. That console might not actually go anywhere.

In my case, the code was already sending JSON, so wrapping an error and traceback in JSON and sending it seemed convenient.

The traceback module lets you get information about an exception, and the code leading to it. The function `traceback.format_exception` lets you put this into a string.

## How would you use format exception?

The format_exception function is documented as just needing the caught exception itself, so you could make a try/except handler that catches the exception and sends it:

```
try:
  ...
except Exception as exc:
  send_json({"error": tb.format_exception(exc)})
  raise
```

This catches the exception, and stores it in the variable `exc`. In true python style, an exception is an object that can be stored in a variable.

This would be passed through format_exception, producing a string, which we then put into a small dictionary and pass into a send_json function.
 
There's still a `raise` at the end, this lets the exception bubble up. In the robot case, you want motors to stop doing something if there's a problem as carrying on could be a bad idea.
 
## Where was the problem?

CircuitPython is undergoing very active development. This is actually one of the great things about it - it's not stagnant, and watching the speed at which the Adafruit team and community are making changes and fixes to improve it is great.

However, this meant that the documentation had moved ahead of the stable version. In the unstable, development version of CircuitPython the format_exception function needs only the exception parameter as shown above. Very handy. This is also what the current latest documentation shows. 

However, the stable (released) version of CircuitPython, 7.3.x still expects 3 parameters for format_exception. So the above code will raise a TypeError.

I raised this in https://github.com/adafruit/circuitpython/issues/7482, and had the unstable/stable versions pointed out to me.

There are two fixes I can use now. Each with their trade offs.

## Option 1 - Use the unstable version of CircuitPython

This is easy in that my code won't need to change, I just flash the Pico with this version (8.x) and go. 

It may just work, and by the time this is published, unstable may be the stable release. 

However, if it is still unstable, depending on the level of changes and testing, theres a possibility that the unstable may have other new and interesting bugs for the reader to find.

## Option 2 - Use the more complex current form of format_exception

This is required to stick with the 7.3.x stable Pico CircuitPython. 

This would look like:
`send_json({"exception": traceback.format_exception(exc, exc, exc.__traceback__)})`.

This is a bit more code, however, we are just pulling items out of the existing exception object.

This, like most version related recommendations in a book, could be outdated by the time it's in print and distributed and that unstable version has become stable.

For now, my decision will be to make it work with the current stable version, as the new version will not be incompatible with it. No doubt, some readers will spot that a simpler version can be used when unstable becomes stable.
