---
created: 2019-02-01 08:04:30
tags: [robotics, book, raspberry-pi]
title: Learn Robotics Programming On The Raspberry Pi 3a+
layout: post
---
My [Learn Robotics Programming](https://amzn.to/2RZqPIy) book was written around the Raspberry Pi 3b+, however it did note that other Pi's would work. 
Since the publishing of Learn Robotics Programming, the Raspberry Pi 3a+ board has been released.

![My Piwars Robot So Far With The Raspberry Pi 3a+](/galleries/camera_lens_holding_on_piwars_bot.jpg){:class="img-responsive pull-left"}

I am basing my Piwars 2019 robot build around the 3a+, as it is not only cheaper than the 3b+, but it has a smaller form factor with a lot of the ports removed. This saves a load of space, which in a robot build tends to be vital.

## Power Play

The 3a+ also has a lower current consumption than the 3b+, as shown by [Raspi TV - How much Power Does The Raspberry Pi 3a+ Use](https://raspi.tv/2018/how-much-power-does-raspberry-pi-3a-plus-use). This should mean a bit more play time from the batteries, or smaller batteries. Perhaps not as small as a Pi Zero, but still a good saving in space. 

## PoE Headers Gone

The 3a+ also doesnt have those tricky PoE (power over ethernet) headers. These were introduced on the 3b+, but caused a few issues with hats and PHats, needing longer standoffs or insulating tape. The 3a+ therefore remains simpler.

## Cool Runnings

The lower power is coupled with the better thermal management in the 3+ series, which makes the use a heatsink optional. Heatsinks make it trickier to use hats, so making them optional helps in space.

## Does Everything work?

The 3a+ has less RAM, however none of the Python robot code from Learn Robotics Programming, even the OpenCV visual processing, needs that much RAM for this to be a problem.

The only catch so far, is for the MyCroft Voice Control section. In the book, this uses a second Pi. Currenty the PiCroft distribution has worked, but may not yet be officially supported on the 3a+. Given that this is a secondary controller, and not on the robot, the Raspberry Pi 3b+ is still the most suitable board for the MyCroft assistant.

## Conclusion

The Raspberry Pi 3a+ is definitely my new recommendation for building a robot, and suitable for all the examples in Learn Robotics Programming. So if you are just starting out, go ahead, save yourself a bit of money, and make the test fit/build a little easier with a smaller Pi!

### About The Book

<a href="https://www.amazon.co.uk/Learn-Robotics-Programming-autonomous-Raspberry-ebook/dp/B07DT9R42B/ref=as_li_ss_il?ie=UTF8&linkCode=li1&tag=orionrobots-21&linkId=4f408506c16858434100eba00eb4f647&language=en_GB" class="pull-left" target="_blank"><img border="0" src="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07DT9R42B&Format=_SL110_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=orionrobots-21&language=en_GB" ></a><img src="https://ir-uk.amazon-adsystem.com/e/ir?t=orionrobots-21&language=en_GB&l=li1&o=2&a=B07DT9R42B" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
[Learn Robotics Programming](https://amzn.to/2RZqPIy) shows you how to build and program a Raspberry Pi based robot with Python in your own time. The book takes you through selecting the parts, assembling them into a robot, and then how to write Python code to make the robot do interesting things. What kind of things? Line following, object avoidance for a start. Or computer vision tasks like following a coloured object and looking at human faces. 

The programming sections are step by step, and does not assume more than elementary programming skills (written a few lines of code? Know how to work with if statements and for loops?). This is a great way to get started on a robotics hobby!

