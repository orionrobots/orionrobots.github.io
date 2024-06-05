---
title: Piwars 2024 progress - a right angled USB cable
tags: [piwars 2024, robot building, electronics]
date: 2024-01-29 00:00:00
description: USB cable change for the Piwars 2024 robot
thumbnail:  content/2024/01/29/piwars-robot-usb-connection-after.JPG
---
Our robot for Piwars 2024, Big Ole Yellow, has a USB cable between the Raspberry Pi and the Pimoroni Yukon, for programming and communicating with the Micropython code running on the RP2040.

The original cable had two issues:

- First I had no free USB-A to USB_C cables that were short enough, and carried data lines. The USB tester revealed many were power only, and that wasted time earlier in the project. I used a USB-A to Micro USB cable plus a Micro USB to USB-C adapter. This worked, but was a bit of a bodge:

{% img_responsive "content/2024/01/29/old-usb-cable-removed-from-robot.JPG", "The old USB cable from the robot" %}

- Secondly, the cable stuck out of the side of the robot for both devices. There is no room for that, especially if we want to put a shell on the robot:

{% img_responsive "content/2024/01/29/piwars-robot-usb-connection-before.JPG", "The original USB cable on the robot" %}

I decided to go shopping, and found some right angled USB-C to USB-A cables of the right size.

## Types

There is a selection of such USB cables on Amazon. I was initially thinking those with a side turn, but getting the exact right length was going to be tricky. I then found cables with a vertically right angled connector:

{% img_responsive "content/2024/01/29/right-angle-usb-c-to-usb-a-cable.JPG", "The right angled USB cable" %}

USB-C is reversible, but USB-A is not, so it mattered to make sure I had the right orientation for UP/down. It also mattered that it was short, around 30cm or so.

The USB-A Connector:

{% img_responsive "content/2024/01/29/right-angled-usb-a-end.JPG", "The right angled USB A connector" %}

The USB-C Connector:

{% img_responsive "content/2024/01/29/right-angled-usb-c-end.JPG", "The right angled USB C connector" %}

## Testing before fitting

Before I fit this cable and recycled the packaging, I used my USB cable tester to ensure that power and data lines were all functioning. This has now become an important step in my lab. Although I admit to buying a second USB cable tester, as my first was lost during the move to the new house.

{% img_responsive "content/2024/01/29/testing-data-lines-on-new-usb-cable.JPG", "The USB cable tester" %}

This tester is simple, you plug each end of the cable under test in, provide power, and it shows an LED for each working line.
The cable checked out, with all the lines. All that remained is to attach it to the robot.

## Fitting the cable

The cable went in, perhaps still a little long, but otherwise makes for a much cleaner result.

{% img_responsive "content/2024/01/29/piwars-robot-usb-connection-after.JPG", "The new USB cable on the robot" %}

The team are still yet to design and make a shell for this robot, but this takes us one step closer.

Cabling like this may seem trivial, but getting it right, but in terms of reliability and also space usage is important in a robot or gadget build. I  am happy with this result.
