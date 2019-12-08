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

Although the Piwars 2020 theme is Disaster (Zone), because it is a lunchbox, we (Helena and I) have gone with a food theme, hence the name "Bangers and Bash", In terms of styling, Helena is planning to make the top of the lunchbox look like sizzling sausages on a barbecue. When we get a functioning nerf attachment, it may be decorated to look like a hot dog. 

Helena and I made a youtube video talking through our proposition.

[Bangers and Bash part 1 - Piwars 2020 Planning](https://youtu.be/9Ff3qWnBnSc)

# Parts

I ordered a number of parts for the robot. The lunchbox is a simple poundland model - nothing special there. There will be 3D printed brackets to hold stuff together.
I'm using a Raspberry Pi 3a+ as the controller. 

A [4400mAh LiIon battery pack](https://shop.pimoroni.com/products/lithium-ion-battery-pack?variant=23417820423) is a departure for me from using dual batteries in both the book robot, and the PiWars 2019 model, or just using an AA set for the 2018 robot. It can deliver more current without problems, and should be enough to run motors and logic without dropouts. There will be lots of testing to make sure this works.  

For lights (sizzling effect), I have a number of LED strips in my cupboard - WS2812 and WS2801 types, as well as I2C types. I expect to put a couple of these under the top, both for fun displays and a bit of debug/indication.

The motors I've chosen are the [50:1 Micro Metal Gear motors](https://shop.pimoroni.com/products/micro-metal-gearmotor-extended-back-shaft?variant=3073681025), with an extended shaft and [optical encoders](https://shop.pimoroni.com/products/optical-encoder-pair-kit-for-micro-metal-gearmotors-3-3v). 
Hopefully 50:1 is the right balance between mechanical advantage and speed. These have a stall current of 770mA each. I'll use the Pimoroni adaptors to put Lego wheels on the end of these, giving me plenty of tyre choices. The ball caster is a simpler steel bearing castor.

## Motor Controllers

The robot clearly needs a motor controller. I expect to use a Raspberry Pi hat. There are a couple of options for this. I expect to use IO to drive some LED's (SPI, I2C or 2 general purpose IO depending on the type of strip), and to read the encoder (3.3v) output from the motors too (4 input pins). The choice of motor controller should work with my choice of battery somehow too. Because an IMU is needed, then easy access to the I2C pins would be good. I may also have a couple of servo motors for attachments.

I have quite a few motor controller options, based on what I already have in stock:

* The [Pimoroni Explorer Hat Pro](https://shop.pimoroni.com/products/explorer-hat) with a [DFRobot LiPo boost module](https://www.dfrobot.com/product-1613.html) - this has charging and power handling for the LiIon, and has been sat in my cupboard for a while. I'm not sure how I feel about the motors sharing the actual power rail for the Pi, but it could work. The DFRobot module can handle 2.5a - which may be a bit short for the motors and the pi. The Explorer hat brings out the I2C pins, and 5v tolerant pins for connecting things like the motor encoders too, but may rely on a breadboard for connections, which have a habit of coming loose at inopportune moments. I may put some soldered connections and JST type connectors in there once the wiring is closer to finalised. The DRV8833 on this will handle 200ma per channel, which is enough for the motors mostly running, but not up to much when stalled. Not sure how it will cope on slopes or pushing. Needs some testing. It doesn't have a slot for the camera cable which could be an issue. The capacitive touch has no function here.

* [The Adafruit Crickit Hat For Raspberry Pi](https://shop.pimoroni.com/products/adafruit-crickit-hat-for-raspberry-pi) - it has more of the connections brought out in a way that wouldn't need the breadboard, has it's own battery/voltage regulator circuit and uses screw terminal block connectors for the motors. It has many functions that would be wasted on this robot, like the capacitive touch. It would still need the voltage boost module though, and has a big 1amp per channel motor controller. This controller may make sense on a robot with many input/output parts, like my 2018 piwars robot. Not sure I'd use the speaker in this. I'll need to solder a different header on to supprt I2c when I need it, but servo's are there.

* [The Red Robotics Redboard](https://redrobotics.co.uk) - this also has many inputs/outputs that might not be used on a robot where the camera is main input. I'd need bigger batteries, or series to get the 7-24v needed for this too. It will not have any issues driving the motors (6 amps!) and powering the Pi (3A supply). The i2c ports and servo's are easy to get to. But in truth, I'd rather put this on a bigger robot, like one of the tank models with huge motors. This robot does only have teeny motors.

* I've also looked at the option of a Pair of I2C connected Drv8833 from the Pimoroni don't waste any function. They would sit on the i2c bus, on different addresses. This then means I'd need a wiring board for them plus any other parts like lights, encoders and IMU. While fun, the wiring board could make for a bit of mess, and more connections means more failure points.

* An option that I've used before is the [PiConZero](https://4tronix.co.uk/blog/?p=1224). One way I could do this is to cannibalize a PiConZero off one of my older robots, with designs on respinning it using the RedBoard. This can either share 5v from the DFRobot boost module, or get a seperate power feed from the battery. It's small half size means that the camera cable is easy to put in.  It can output 1.5a per channel. However, it also doesn't expose the I2C pins.

* SB Components motorshield - this is a very basic Raspberry Pi hat, but the 6-12v motor supply makes it need more batteries, and compared with the Red Board, it's a little too basic. 

* I have some simple drv8833, L293 and L298 things I could use too, but that comes with needing to consider soldering up a wiring board to keep things tidy. Also, nothing easier to mount than a hat on the Raspberry Pi.

For now I will start with the Explorer Hat, and keep the RedBoard as a next potential option if I need it.

# Drawings

I've then been using Fusion 360 to draw the robot. It's a bit more complex than back of an envelope sketches, but essential when I'll be 3d printing brackets for things inside the robot. I can use it to work out where all the holes are needed in the lunchbox, and 3d print some simple studies to check if ideas will work.

![Robot In Fusion 360](/galleries/2019/12/full_assembly_v22.png)

I haven't got anything for the camera in yet, along with mounting the battery or the top section. There is an odd glitch with the breadboard floating off the Explorer Hat that I will figure out, but the battery mounting comes first.

For that, I'm going to do a little study in bendy 3d printing with PLA so I can make clips to hold the battery in a sled for it, but releaseable with a finger on a catch. Expct my next post to cover that.



