---
title: Piwars 2018 Robot - Panic Sets In
date: 2018-04-18
tags: [robot building, piwars, opencv, electronics, power, raspberry pi robotics project, raspberry pi opencv project, python, raspberry pi camera]
---
As we realise how close we are to going to the event, panic Sets In. 2 days before we leave! Our robot should be ready for the 22nd of April - not everything works!

We have a task list, but it's too far from realistic. this is a mix of things we've done, and what we were hoping to do. We have a lot of work to do.

* Finish the code conversion to the method for HC-04 used in the piconzero library. - done
* Finish assembling the motors. - done
* Test each distance sensor in it's enclosure on the Tester made with the microview - ensure there isn't any weird values.
    * Check that that breadboard is wired correctly. -done
    * Left - done
    * Right - done
    * Front - done
    * Conclusion - the 3d printed cases are not a problem.
    * Try three together on multiple microviews. - nah - lets not.
    * Fix the distance code - the GpioZero is the wrong way to do it for now - done.
* Test the motors with keypad drive. - done
* Test the distance code again.
* Find out why the lights aren't working - get them working.
    * Use a microview with some code to test that first strip and connector
    * Replace that connector if I need it.
    * Now try to get at least one light under pi control, can I use my logic analyser to see if anything is coming out on that SPI output bus I made?
* Finish the MENU module - and blend it with drive - so menu is Manual Drive and launch auto.
* Write the sysv/systemd script to launch this as user Pi when powered up.
* Make the rainbow module - give it the sequence of colour hues - test with skittles.
        * It is the hue divided by 2 to fit in the range.
    * Find the hue for red - range -15 - 15,
    * hue range green - 45 - 75
    * hue range blue  - 80 - 145
    * hue range yellow - 20 - 40
    * Create code to go through the sequence: red, blue, yellow, green
        * Drive up.
        * Pull back.
        * Next
        * When done - exit back to drive.
    * Test it.
* Test the avoid module - see how I can branch it for fast straight line.
* Make a simple maze - use cardboard in the house.
* Test the robot with a simple maze test.
* Play robot skittles with the kids.

* PACK!
    * Screwdrivers
    * Cables + crimps?
    * laptop
    * Batteries (charger?)

The next update will be after the event, a debrief.