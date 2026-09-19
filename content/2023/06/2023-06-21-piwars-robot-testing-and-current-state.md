---
layout: post
title: Current state of the 2024 PiWars robot
description: Assessing the robot I'll be entering into PiWars 2024
tags: [robotics at home, piwars 2024, robot building, raspberry pi, robotics competitions, rover, piwars]
thumbnail: galleries/2023/piwars-robot-info/piwars-robot-power-pack.JPG
date: 2023-06-21
---
The robot "Big Ole Yellow" has been sat on a shelf since Piwars 2019 gathering dust. That means none of it has been powered on, so some inspection and testing is needed before we can start working on it. The [current initiatives](/2023/06/14/piwars-robot-character-card.html#initiatives) list has Up and Running as the first step.

Today was getting some basics in place to start testing this.

## Wifi

The WiFi settings were still for another network. I needed to change them. Using the same headless techniques as shown in [Learn Robotics Programming 2nd Edition](http://packt.live/2XccaKe) I took out the micro-sd from the robot, and using my laptop, added a file called `wpa_supplicant.conf` to the boot partition with my new network settings. When the Raspberry Pi boots, it will use this to replace the existing settings.

## Operating system refresh

I've opted for now not try and refresh the operating system, although I will set up scripts to populate packages on the SD card if that still works.

The thoughts on this are:

- The picamera package changes make this sound like it will be a drag on time. I will eventually need to cross this bridge though.
- I may find my hand forced by package downloads.
- If I need to, I'd love to make time to go down the packer route and programmatically build the image.

This may be premature, as I need to verify the hardware and software onboard are mostly working first.

## Power

Next - can I charge the USB battery pack. This robot uses a bright red [Anker PowerCore 10000 (paid link)](https://www.amazon.co.uk/Anker-PowerCore-Ultra-Compact-Fast-Charging-Technology/dp/B019GJLER8?crid=31PKOUTOSN0LQ&keywords=Anker+Powercore+10000&qid=1687525429&sprefix=anker+powercore+10000%2Caps%2C112&sr=8-3&linkCode=ll1&tag=orionrobots-21&linkId=fb48706399efb5a7bbcfaed13202ad62&language=en_GB&ref_=as_li_ss_tl). It charges via a USB micro. It has 4 level indicator lights.

Plugging it in shows 2 fully lit lights, the 3rd blinking, so it could still charge.

After 24 hours, it charged to the full 4 lights, so this power pack is still good.

{% image "galleries/2023/piwars-robot-info/piwars-robot-power-pack.JPG", "Anker PowerCore 10000 fully charged", "720, 940, 1140" %}

## Next Steps

Tomorrow I want to get into the electronics on this robot. I'll verify them and the connections before trying to turn any of it on.

[See the rest of my 2024 piwars blogs](/tags/piwars-2024/)
