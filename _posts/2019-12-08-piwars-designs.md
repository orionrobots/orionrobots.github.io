layout: post
title: "Piwars 2020 Designs"
description: "Designs and Initial Plans for PiWars 2020"
tags: [robotics, raspberry pi, raspberry pi projects, raspberry pi 3 projects, piwars, robot, raspberry pi zero w projects, piwars, fusion360]
---
{% include JB/setup %}

# Piwars Acceptance

Orionrobots has a robot accepted into PiWars 2020. Its name is bangers & bash. As a grand overview, it is based on a lunchbox, as a continuation of the [MagPi Low Cost Wheeled Robots]({% post_url 2019-11-05-magazine-series %}) series I have been writing.

The lunchbox will have 2 powered wheels, and a ball castor at the front. It's going to have a camera as a main sensor, with encoders on the wheels (quadrature types) and potentially an IMU (intertail measurement unit). The last item is one I have no experience with, and could be interesting.

Like so many PiWars entrants, I was inspired by the talk by Brian Starkey, aka [@usedbytes](https:/twitter.com/usedbytes) at the PiWars Mini conference to use the camera for more. I'm going to attempt line following, and other challenges with it, instead of more single purpose sensors. This will require some interesting code.

Helena and I made a youtube video talking through our proposition.

[Bangers and Bash part 1 - Piwars 2020 Planning](https://youtu.be/9Ff3qWnBnSc)

# Parts

I ordered a number of parts for the robot. The lunchbox is a simple poundland model - nothing special there.
I'm using a Raspberry Pi 3a+ as the controller. A LiIon battery pack is a departure from me using dual batteries in both the book robot, and the PiWars 2019 model, and just using an AA set for the 2018 robot. It can deliver more current without problems, and should be enough to run motors and logic without dropouts. There will be lots of testing to make sure this works. 

The motors I've chosen are the [50:1 Micro Metal Gear motors](https://shop.pimoroni.com/products/micro-metal-gearmotor-extended-back-shaft?variant=3073681025), with an extended shaft and [optical encoders](https://shop.pimoroni.com/products/optical-encoder-pair-kit-for-micro-metal-gearmotors-3-3v). 
Hopefully 50:1 is the right balance between mechanical advantage and speed. These have a stall current of 770mA each.

I have a few motor controller options:
* The [Pimoroni Explorer Hat Pro](https://shop.pimoroni.com/products/explorer-hat) with a [DFRobot LiPo boost module](https://www.dfrobot.com/product-1613.html) - this has charging and power handling for the LiIon, and has been sat in my cupboard for a while. I'm not sure how I feel about the motors sharing the actual power rail for the Pi, but it could work. The DFRobot module can handle 2.5a - which may be a bit short for the motors and the pi.

# Drawings

I've then been using Fusino 
