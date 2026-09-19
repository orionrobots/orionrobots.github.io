---
title: Pi Wars 2018 Robot - Visual processing interface design
date: 2018-04-05
tags: [robot building, piwars, opencv, electronics, power, raspberry pi robotics project, raspberry pi opencv project]
---
Now that the controller is working, we need to have a rough plan on how we want the buttons to control the robots behaviour.

So the plan will be this:

* The mode button switches from manually driving the tracks to enabling Camera auto-track.
* When in camera mode
    * The coloured buttons switch the primary colour - just print the change when it occurs.
    * The joysticks adjust the Saturation and Value.
    * For now - serial will display the output. Later that could be two light strips.
    * Use Xserver to do the OpenCV.
* Mode button to exit.
