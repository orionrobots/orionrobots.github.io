---
title: Fixing the Piwars robot batteries
date: 2023-06-26
thumbnail: galleries/2023/piwars-robot-info/aa-battery-issues/2023-0-under-the-robot.JPG
tags: [piwars, raspberry pi, robotics at home, robotics competitions, battery corrosion, electronics, piwars 2024]
corrosion_gallery:
  - src: galleries/2023/piwars-robot-info/aa-battery-issues/2023-1-corrosion-on-contacts.JPG
    alt: Corrosion on battery contacts
  - src: galleries/2023/piwars-robot-info/aa-battery-issues/2023-2-more-corroded-contacts.JPG
    alt: More corroded contacts
  - src: galleries/2023/piwars-robot-info/aa-battery-issues/2023-3-corroded-contacts.JPG
    alt: Corroded contacts
  - src: galleries/2023/piwars-robot-info/aa-battery-issues/2023-4-corroded-contacts.JPG
    alt: Corroded contacts
---
Today, I need to get probing, and find out why the Arduino side wont power up.

{% img_responsive "galleries/2023/piwars-robot-info/aa-battery-issues/2023-0-under-the-robot.JPG", "Under the piwars robot" %}

Lets assume that the batteries are not charged enough or not well connected and measure that stage. I set the multimeter to 20v (ranges are 200m, 2, 20, 200) and probe and I get 0. Hmm - check the battery box. This is where I run into another shortcoming of this robot, it's not designed to be flipped upside down - so I need a rig to hold it. The long difficult version would be something 3d printed. However I had a look in my offcuts area and found a cardboard support from packaging.

Probing individual batteries with the multimeter revealed two things - the batteries are all at 1.2v which is normal for NiMH batteries. But when switching to continuity, very few of the terminals were connecting between them.

So I took the batteries out, and lit it up for a closer inspection, revealing that there is corrosion on the terminals. I cleaned them up with a bit of sandpaper, and used the continuity checker to see if it is good.

{% tab_gallery "corrosion_gallery", corrosion_gallery %}

This still wasn't good. I then used my microscope to see how bad the corrosion was, and after seeing if I could Dremel it away, I decided this might need replacing.

{% img_responsive "galleries/2023/piwars-robot-info/aa-battery-issues/2023-5-removing-the-battery-box.JPG", "Removing the battery box" %}

{% img_responsive "galleries/2023/piwars-robot-info/aa-battery-issues/2023-6-sanding-contacts-didnt-work.JPG", "Sanding didn't work" %}

{% img_responsive "galleries/2023/piwars-robot-info/aa-battery-issues/2023-8-more-dremel.JPG", "Dremel didn't help" %}

{% img_responsive "galleries/2023/piwars-robot-info/aa-battery-issues/2023-9-still-not-right.JPG", "Close up corrosion" %}

I had a brief diversion into the thought that I may replace this battery system with something else, but at this stage, I need to make it work.

I have battery boxes in stock, prepared one and fit it. It still needed a spring clip for it to work.

{% img_responsive "galleries/2023/piwars-robot-info/aa-battery-issues/2023-10-swap-for-less-corroded-battery-box.JPG", "Swapping for a non corroded battery box" %}

I had to countersink the holes for the bolts again:

{% img_responsive "galleries/2023/piwars-robot-info/aa-battery-issues/2023-11-countersink-the-bolt-holes.JPG", "Countersinking the holes" %}

This was connected, and produce the intended voltage when measured. The next thing is to start testing the menu, which in theory may already be started. That is for another day though.

[See the rest of my 2024 piwars blogs](/tags/piwars-2024/)
