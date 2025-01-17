---
title: PiWars 2018 Robot - getting the camera and sensors working again
date: 2018-04-06
tags: [robot building, piwars, opencv, electronics, power, raspberry pi robotics project, raspberry pi opencv project, python, raspberry pi camera]
---
After changes to the robot hardware, a new software SD card image and lots of work on the robot, I needed to get the camera going again. It seems that the parts I'd not been paying attention to were now broken.

## Getting the camera working

* I need the picamera python library:

```bash
pip install picamera
```

* Now try my `skittletrack` code - which has had a tiny bit of python 3 adapting.
* No module gpiozero - do we really use it? No - removed.
* We then need the camera enabled:

```log
picamera.exc.PiCameraError: Camera is not enabled. Try running 'sudo raspi-config' and ensure that the camera has been enabled.
```

* Tried enabling it in raspi config. Nope. AH - it's not plugged in. Shutdown and fix that.

## After refitting and rebooting

Try again - get it running.

Yes - it works - and tracks!

We have working tracking - for random objects. Need to find HSL values for stuff, but this is a good start.

## Single distance sensor

It looks like this can be done with rpi gpio (as in Piconzero datasheet) or perhaps with gpiozero.

It was a dependency of the `skittlebot` class in the code.

## Multiple sensors

This is going to get interesting. I had a chat with @4tronix and asked for some ideas for using multiple distance sensors with the PiConZero.
The PiConZero itself wouldn't be able to, but additional GPIO boards could. So the options are:

* creating a shim to attach to sensors.
* Finding an IO extender/interceptor board.
