---
layout: post
title: "Use OWI Edge Maplin USB robot arm with the Raspberry Pi"
description: "How to use the Raspberry Pi to drive the Maplin USB Robot Arm"
tags: [robotics, robot arm, raspberry pi, raspberry pi projects, raspberry pi 3 projects, maplin usb arm, owi edge robot arm, raspberry pi zero w projects]
---
If you bought one of those cheap (£30) robot arms from Maplin a few years back (when there still was a Maplin) or find yourself in possession of one now, changes to Windows have made it feel like a bit of a paperweight.

I've put together setup scripts, along with a video guide on using a Raspberry Pi (Zero W, but any Pi will do, especially best are those with WiFi) to drive it.

Once you are on the Pi, most of the magic is done with a one liner command:

    curl https://raw.githubusercontent.com/orionrobots/python_usb_robot_arm/master/setup_arm.sh | sudo bash

I am assisted by my brilliant lab helper Helena, demonstrating this setup and showing the arm in action in the following video. Enjoy!

<div class="embed-responsive embed-responsive-16by9">
<iframe width="560" height="315" src="https://www.youtube.com/embed/MQ6MhoB3PEU" frameborder="0" allowfullscreen="True"></iframe>
</div>

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&language=en_GB&marketplace=amazon&region=GB&placement=B00OXL0VUQ&asins=B00OXL0VUQ&linkId=c603178eab5389be7f58af05e79fa487&show_border=true&link_opens_in_new_window=true"></iframe>

## The Headless Pi Setup

The Raspberry Pi used is headless, a technique I've used extensively in [Learn Robotics Programming](https://amzn.to/2RZqPIy), my book on the subject. The Bonjour/mDNS/Zeroconf system is used to find the Raspberry Pi on a local network without needing to know it's IP address.
