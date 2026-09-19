---
title: Phototransistor Sensors for Micromouse UK
layout: post
date: 2024-10-20
tags: [micromouse, sensors, phototransistor, electronics]
---
My student is making an entry for the [UK Micromouse](https://ukmars.org) competition. The competition has a recommended reference robot design for entrants to build, the [UKMarsBot](https://ukmars.org/projects/ukmarsbot/). She applied, and was sent the Main board along with the Line sensor and Wall sensor boards.

She's been building the UKMarsBot, with me giving some guidance and help. This has meant practising her soldering skills, and reading the circuit.  The decisions made so far:

- Using the Cytron Maker Nano instead of the Arduino Nano. This has some RGB LED's, a user button and the more powerful RP2040, but runs on 3.3v and requires a few modifications in the assembly of the main board. Importantly - notching out the 5v supply pin from the Nano's regulator, and bridging the 3.3v supply to the 5v supply pin so the boards devices are at 3.3v levels. This ensure that the sensors output at 3,3v levels and don't damage the RP2040. We read the [main board schematic](https://ukmars.org/projects/ukmarsbot/reference-guide/main-board-reference/) to see how the power supply was connected to understand this.
- Putting the motor board, a TB6612FNG, on female sockets. This caused it to be too close to the Maker Nano, so we had to add some extra headers to raise the maker nano up a bit. However, this meant we also had fewer concerns about the USB cable and capacitors bothering each other.

She has been asking her parents to buy parts as she reaches different stages of assembly. We've come to building the sensors.

## UKMarsBot Sensors

There are a few sensors on this robot:

- The motors may have encoders
- A detachable line following sensor board
- A detachable wall sensor board

The line sensor board has 4 phototransistors to detect the brightness under them, and the wall sensor board uses 3 to detect reflected intensity as a proxy for distance.

Each has 2 ways to build them, with visible light, or with infrared light. When ordering parts, it's generally a good idea to order more of 1 part, than a few different ones. However, their question is if they could use the same phototransistors for both sensors.

## Investigating phototransistors

A quick recap on these devices. Effectively the phototransistor is an electronic gate that lets more current through when light shines on it. By measuring how much current gets through, you can measure light levels.

This can be used with a resistor, to pull down or pull up the voltage level for a logic threshold, or as a voltage divider that could be measured by an analog input (ADC). In these sensors, they are both used as voltage dividers.

Let's compare these sensor boards, and how their use cases differ:

sensor | resistor side | visible light | IR Light
--- | --- | --- | ---
line sensor | high | VISHAY BPW85C | OSRAM SFH309FA
wall sensor | low | VISHAY BPW85C | VISHAY BPW85C

There were other possible parts, but notice that the VISHAY BPW85C is used for 3 out of 4 use cases. Why is it different for the line sensor with IR light?

## Comparing the parts

The next thing we did was look at the datasheets for the parts.  The datasheet links:

- [VISHAY BPW85C](https://www.vishay.com/docs/81531/bpw85a.pdf) - note it has the A, B and C parts.
- [OSRAM SFH309FA](https://look.ams-osram.com/m/ce14b97f1982f0f/original/SFH-309-FA.pdf)

We started with some basics on these parts. The IR emitters are around 950nm.

Model number | VISHAY BPW85C | OSRAM SFH309FA | Notes
--- | --- | --- | --- 
Type | NPN Phototransistor | NPN Phototransistor | The Same
Package | T1 - 3mm | T1 - 3mm | The Same
Wavelength sensitivity (nm) | 450-1080 | 730-1120 | The emitters are in this wave-length
Mac sensitivity (nm) | 850 | 900 | The OSRAM is closer to the IR emitter
Dark current (nA) | 1-200 | 0-1 | The OSRAM has lower dark current
Collector-emitter voltage Max (V) | 70 | 35 | Both will be fine for 3.3v
Angle half dark (degrees) | +/- 25 | +/- 12 | The OSRAM is more focused
Cost per part for 5 to 10 | £0.641 | £0.468 | The OSRAM is cheaper. Comparison made at Farnell Uk, ex VAT and postage

Note that both also have a minimum order quantity of 5.

So far, the OSRAM device is more sensitive. It's more focus with a narrower angle, which might make it more useful for the line sensor. For the wall sensor, a wider angle might be more useful. However, they are otherwise equivalent with these. Some heat-shrink could be used to narrow the angle of the VISHAY part.

At this point, my student needed to leave, however, I carried on investigating so I could send them the results.

## Comparing the graphs

The stats above say nothing about how the device responds to light in terms of current. The guide for the UKMarsBot suggested different resistors to load the different phototransistor types. Perhaps looking at their response graphs would give a better idea of how they differ.

This [Digikey guide](https://www.digikey.com/en/articles/the-basics-of-photodiodes-and-phototransistors-and-how-to-apply-them?msockid=2512d95c6edb65363993cdcf6f3b6440) has some notes on how to read the graphs.

Let's see the graphs for the two devices:

![Sensor Graphs](/2024/10/20-micromouse-sensors/graphs.svg)

These graphs show the current through the phototransistor versus the collector-emitter voltage for different light levels.

These are a little awkward to compare. The OSRAM graph on the left has a linear X scale for Vce vs a log scale for current. The VISHAY graph on the right has a log scale for Vce vs a log scale for current. We are at 3.3v, so I've drawn in red dashed line roughly where I think 3.3v is at on each. This is a bit easier to place on the VISHAY graph.

I can then trace this up, and draw some lines for the light levels across to the current axis. I've drawn these in green, blue and yellow. I'll ignore the additional 0.05 mW/cm^2 line on the VISHAY graph, as it's not on the OSRAM graph. I'll ignore the 0.25 and 0.2 measurements that are different. Leaving us 3 to compare.

I've then tried to roughly interpret the log current graph. Note that the current scale for both is mA (milliamps). On the OSRAM graph the lower bound is 10^-1, or 0.1. ON the VISHAY graph, the lower bound is 10^-2, or 0.01. the upper bounds of the current axes on both are the same though.

Once the numbers are drawn in, these characteristics are pretty much the same, perhaps with some error on my part interpreting the log scale.

## Next steps

The parts look the same, other than cost and angle, even down to the resistor choice for them. Although I note that in the building guide it suggests 2k to 4k7 for the line sensor pull ups, and 1k or 1.8k for the wall sensor pull downs.

The one thing that gives me pause in recommending the cheaper OSRAM part for both sensors is the angle. The BPW85C is a bit pricier, but it's more likely to be useful for both sensors, and in use for the visible light line sensor.

I'll send this to my student, and see what they think. I think for the resistors, we can do some breadboard experiments to see how the photodiodes respond to different light levels. This will help us understand the sensors better.

The simpler answer though is to use visible light and the VISHAY BPW85C for both sensors. This will make ordering easier, and the sensors more interchangeable.
