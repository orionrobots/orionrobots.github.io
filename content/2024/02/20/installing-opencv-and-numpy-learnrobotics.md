---
title: Learn Robotics Programming 2nd Edition - update for installing OpenCV and Numpy
tags: [robotics programming, robotics books, raspberry pi]
date: 2024-02-20
description: An update for the Learn Robotics Programming 2nd Edition book, for installing OpenCV and Numpy on the Raspberry Pi.
---
Since the second edition of Learn Robotics Programming was published the Raspberry Pi operating system has moved on. This means that the instructions for installing OpenCV and Numpy are out of date. Here's the updated instructions for installing OpenCV and Numpy on the Raspberry Pi.

The first thing to know is that successful installation did change between OS versions.

## TLDR For Bullseye

When installing numpy, and openCV, skip the installations in the book and do only the following:

```bash
$ sudo apt-get install python3-numpy python3-opencv
$ sudo apt-get install opencv-data
$ find /usr -name "haarcascade_frontalface_default.xml"
./share/opencv4/haarcascades/haarcascade_frontalface_default.xml
```

## About the Raspberry Pi OS featured in the book

Learn Robotics Programming 2nd Edition was based on Raspberry Pi OS Lite, released in 2020-09-20. I used the 32 bit version, and always recommend the Lite build since we do not use a desktop environment for the robot. So to investigate this, I brought out the test and build robot I used when writing the book.
This robot has not been in use for a while, so I need to check it's still working. Alarmingly, there's a loose wire, however, it's clearly for one of the encoder sensors. This does not however mean that other wires are in order - be especially careful here around any ground or power wires. When unboxing a robot that's not recently been used, an inspection is always a good idea before turning anything on! I used circuit diagrams from the book to check the wiring before powering on. Including replacing the loose wire.
There is an SD card in the Raspberry Pi 3A on board, so this should still have the image I used back then.

I've also moved house, so I may need to reconfigure the WiFi on the robot with a fresh wpa_supplicant.conf file. I'll need to do this to connect to the robot over SSH.

I've no idea what state the batteries are in, so I use a USB desktop supply for the Raspberry Pi, and a bench power supply for the motor board. There is a green light on the motor board, and the green light on the Raspberry Pi is moving, so it's booting up.

In theory, I can reach the SD card on it and verify this over SSH. The robot should be set to myrobot.local if it's matching the book, however, I'm not finding it on the network. So, I'll use my network router to explore this - which isn't letting me in today.

I tried pinging raspberrypi.local instead, which responded, but may mean that the SD card in there was used for further experimentation, and I'll need to re-flash it, with an old image.

## Installing with apt get

The current recommended way is to use the apt packages:

```bash
$ sudo apt-get install python3-numpy python3-opencv
:
:
```

Now because the robot had not been in use for some time I needed:

```bash
apt-get update --allow-releaseinfo-change
```

These allowed the following session:

```bash
pi@raspberrypi:~ $ python3
Python 3.7.3 (default, Jul 25 2020, 13:03:44)
[GCC 8.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import cv2
>>> import numpy
>>>
```

I was trying this in Buster, however, a reader was also doing this in bullseye. So to help them out, I need to do a couple of things:

- Establish which way around bullseye and buster are in terms of releasing order, I think bulls eye is newer, but I need to check.
- Make an SD card with bullseye for Raspberry Pi on it.
- Install the packages on that, and see if it works.

### Getting version information

You can get version information with the following command:

```bash
$ cat /etc/os-release
PRETTY_NAME="Raspbian GNU/Linux 10 (buster)"
NAME="Raspbian GNU/Linux"
VERSION_ID="10"
VERSION="10 (buster)"
VERSION_CODENAME=buster
ID=raspbian
ID_LIKE=debian
HOME_URL="http://www.raspbian.org/"
SUPPORT_URL="http://www.raspbian.org/RaspbianForums"
BUG_REPORT_URL="http://www.raspbian.org/RaspbianBugs"
```

The customers bullseye reports the following:

```bash
$ cat /etc/os-release
PRETTY_NAME="Raspbian GNU/Linux 11 (bullseye)"
NAME="Raspbian GNU/Linux"
VERSION_ID="11"
VERSION="11 (bullseye)"
VERSION_CODENAME=bullseye
ID=raspbian
ID_LIKE=debian
HOME_URL="http://www.raspbian.org/"
SUPPORT_URL="http://www.raspbian.org/RaspbianForums"
BUG_REPORT_URL="http://www.raspbian.org/RaspbianBugs"
```

That makes the ordering clear, Bullseye is newer than Buster.

### Making an SD card with bullseye

Im still yet to find the place where I stored all the SD cards and reader. Although I've bought a new reader for the lab, there's a tiny bag somewhere with a bunch of micro-SD's and a reader. I found them eventually, but it's clearly an issue that it's taken me so long to find them. I need to sort out my storage.

Before I erase cards, I like to verify what is on them. The best way was to plug it into this Pi over USB, and ls.

I created a fresh SD Card, and gave it the hostname `bullseye-learnrob2.local` to avoid confusion, and booted it. I wonder about putting a txt file in the boot folder with the hostname, that would make it easy to see. This, enabling ssh and sending keys is easier these days with the current Raspberry Pi imager. That capability wasn't around at the time the second edition of Learn Robotics Programming was written.

Anyway - lets try the install process.

```bash
$ sudo apt-get update -y && sudo apt-get upgrade -y
:
:
$ sudo apt-get install -y git python3-pip python3-smbus i2c-tools
:
# I tried i2cdetect and saw all the devices here...
:
$ pip3 install RPi.GPIO gpiozero
:
:
$ sudo apt-get install python3-matplotlib
:
# This replaces the libatlas3-base, lib-fortran and pip install matplotlib from the book
:
danny@bullseye-learnrob2:~ $ python
Python 3.9.2 (default, Mar 12 2021, 04:06:34)
[GCC 10.2.1 20210110] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import matplotlib
>>>
```

So we have matplotlib and i2c detecting working. Let's carry on. Instead of the massive library drop in chapter 13, lets try the simplest way:

```bash
$ sudo apt-get install python3-numpy python3-opencv
:
After this operation, 477 MB of additional disk space will be used.
# oof? That is a lot...
# this took between 5 to 10 minutes to install
:
$ python3
Python 3.9.2 (default, Mar 12 2021, 04:06:34)
[GCC 10.2.1 20210110] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import cv2, numpy
>>>
```

Ok, it loads. What about the models for the Haar Cascades?

```bash
$ cd /usr
danny@bullseye-learnrob2:/usr $ find . -name "haarcascade_frontalface_default.xml"

$
```

Ahh... lets try python3-opencv-apps.

```bash
$ sudo apt-get install python3-opencv-apps
:
:
# Nope...
$ sudo apt-get install opencv-data
$ find . -name "haarcascade_frontalface_default.xml"
./share/opencv4/haarcascades/haarcascade_frontalface_default.xml
```

We have a working OpenCV and Numpy on the Raspberry Pi, and the Haar Cascades are in the right place.

Let's try getting a camera image. I started `raspiconfig`, and interfacing options, enabled legacy camera. This required a reboot.

I was then able to run raspistill, and get the image it produced via SFTP.

I hope this information will help out readers of the book and other Raspberry Pi, Python and OpenCV users.
