---
layout: post
title: Cheeky focus stacking
date: 2022-12-27T13:33:46.374Z
description: Cheeky focus stacking using GIMP
tags:
  - robot-photos
  - robot-blogging
  - robot-content
  - image-editing
category: robot-content
---
When taking photos of robots, nearly everything is Macro - that is, every shot is fairly close up. What this often means is that I get focus issues.

Today's [post about the MaixSense A010](/robot%20building/2022/12/27/maixsense-a010-day-2-sipeed-support.html) had an issue that I had one shot with the sensor in focus, and the subject of the sensor blurry, and another shot the opposite.

![Shots with different blurry areas to combine](/galleries/2022-12-27-shots_to_combine.jpg)

I had heard fo focus stacking, using multiple photos to get things in focus. Two photos is not really a lot to go on, but in my case I could definitely improve the output by combining them.

## Process

First I copied the photos over from my phone (in my case, that is exporting from MacOS Photos to the file system).

I then opened the first photo in GIMP (the Gnu IMage Processor I think).

After this I dragged in the second image, which became another layer. The layers have one small issue - the photo was taken without any kind of tripod, and I was also holding the sensor in front. So they didn't quite match in location.

I added a layer mask to one of the images (the one with the smaller subject). the red outlines in the screenshot below show the layer mask on the layer, and the layer mask options in the context (right click) menu on the layer.

![Layer mask selection in GIMP](/galleries/screenshot-2022-12-27-at-13.43.29.png)

I then edited the layer mask and painted this layer mask over the original image. A combination of the selection tool to clear large sections, then using the paintbrush or erase brush to clear up the edges made this pretty good.

The result is limited by the original photo quality, but I am pleased with it. Both the robot (the sensor subject) and the sensor are now in focus - even if there are some rough edges.

![Combined image result](/galleries/focus_stacked_a010_and_robot-med.jpg)