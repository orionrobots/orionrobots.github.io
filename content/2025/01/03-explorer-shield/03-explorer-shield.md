---
tags: [robot electronics, arduino, robot building, orion explorer one]
title: 2014 Attempt To Design A Custom Arduino Shield
description: Examining and publishing old designs
date: 2025-01-03
thumbnail: content/2025/01/03-explorer-shield/block-diagram.png
---
## The old projects

Over the years, I've started many projects. It's time to come clean on things I started, but will likely never finish. I have a huge list of them, with files, readme's, code, schematics and sketches, even stuff on breadboards. However, perhaps there's still value in publishing what I did do.

They are all still robot building projects, and if they can inspire other robot builders, they have value.

For me they had learning value at the time. However, I abandoned them, either because something more interesting happened (that happens to some smaller projects - I would love to finish more), or because they were rendered obsolete.

## The Explorer One project

Back in 2012-2014 I had a little hardware shop, selling robot kits. The Orion Explorer One. There are traces of it on the website, and I sold a few. It was not life-changing.

The kit was an Arduino based robot kit, with no soldering required, and I was attempting to keep costs down, and like always, lower the barrier to robotics. I never really made the margins work, so as an enterprise, it did not even break even - the cost of parts and the website sales overheads plus postage ended up being slightly over the original sale price - partly because I'd not costed everything, and partly because I'd made the margins too tight to allow any problems or postage.

Now, other, simpler cheaper kits eventually made this completely obsolete, but it was interesting, and dabbling in selling my own projects from my home was definitely a learning experience.

I had been getting parts for it in low order quantity (as I'd not really understood much around marketing and had very low orders) from manufacturers/resellers in China. The problem here was that there was inconsistency. I'd get different motor board types or other components. Which made the documentation for the project problematic. In hindsight, I would now use a more reputable outlet, although that would have made the project cost price even higher. Some shields locked up all the IO pins on the Arduino, making the unfit for the explorer - which meant this stock couldn't be used at all. I tried some of the sensor shields too, they were of varied usefulness.

However, I had a few standard things I wanted the robots to be able to support, while leaving some IO free for buyers to play with and get imaginative with - this was always the vision. Something with a low barrier of entry, inviting play and expansion. This is still the vision in the robots my books lead readers to build.

Designing my own shields and electronics was a tempting idea. It might never work in terms of costs ,it was definitely not going to make the costs better (at least until I had more designs and higher sale volumes), but in terms of consistency and hitting the other goals I had, it would make things more fun and easier for robot builders.

A recap on the robot specifications relevant to this project:

- Main controller: An Arduino Uno, r3 at the latest.
- Chassis: A 2 Deck plastic chassis. 4 wheel drive, using cheap plastic gear motors.
- Motor driver: An l298n, driving 2 motors on each channel, with each side as a pair.
- Power: AA batteries, with the L298n breakout's regulator being used to power the electronics.

Sensors, bluetooth and voice control were add ons.

## The Explorer shield

The idea for this shield is an L293D motor shield, setup for controlling 2 sets of the 2 motors. It was also to reduce the number of IO pins in use with i2c.

The block diagram was pretty simple:

![Explorer shield block diagram](/2025/01/03-explorer-shield/block-diagram.png)

The i2c (a serial bus) would be connected to the Arduino, using only 2 pins, and being i2c, allowing other devices on the bus. The AT Tiny chip would take control messages from this bus, and drive the motors via PWM, with the L293 chip plus some flyback diodes (not shown) handling the power output to the motors.

It would have screw terminals for the motors, motor input power. It might also need a regulator, but my notes suggested the one on board the Uno R3 board might have done the job.

I didn't finish the design, even as far as a PCB, however, I did make schematics.
We'll start with the motor control:

![Motor power l293 schematic](/2025/01/03-explorer-shield/motor-power-l293.png)

This messy schematic is the motor power section. The left shows the PWM inputs, and the right flyback diodes. This schematic is quite messy, and also likely needs bypass capacitors on the motors. It's not clear to me why I put it into a sub-sheet, perhaps other than I was new to KiCAD and wanted to try the feature?

![Main schematic for the shield](/2025/01/03-explorer-shield/main-schematic.png)

Yup, this never got very far. The left shows an AT-Tiny 24, with a crystal, and no wiring. The middle is a bank of LED's, which could be used to show the motor activity. The right is the sub-sheet for motor power above.

The notes I made specified an arduino shield with stacking headers, 4 screw terminals at one side for the motors, and 2 the other side for the power input. I had specified a wide-ish input power of 6-9v, and seeing if I could support but 5v and 3.3v logic for the i2c input.

There's a 6 pin connector at the top, and 10 years later, it's tricky to tell what I intended it for. I could imagine a 4 pin I2c + logic power connector needed. Along with the power input from batteries and 8 motor terminals for this.

It's very incomplete. I had notes on it too, to experiment with a PDIP (large breadboard-able chips) on a breadboard, then make a PCB using an SOIC (surface mount tiny IC's). My notes had links to the [AT Tiny 85 Datasheet](https://www.microchip.com/en-us/product/ATtiny85#Documentation), and [At Tiny 24/44 Datashet](https://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-7701_Automotive-Microcontrollers-ATtiny24-44-84_Datasheet.pdf). I also linked to [Program an ATtiny with Arduino](http://www.instructables.com/id/Program-an-ATtiny-with-Arduino/) so this could be my means to program the chip.

I had bought a tube of each type AT Tiny PDIP chips and had some spare L293 chips, so I breadboarded the At Tiny 24 and motor controller. I didn't get a lot else build though.

## The files

The files for this are a decade old.

![KiCAD Project](/2025/01/03-explorer-shield/kicad-project.png)

The KiCAD schematic editor did not like loading it - it had problems with the symbols that were changed or missing, and crashed multiple times.

I had to import, and remap the AT Tiny, l293d and diode symbols to view it.

## Related designs

I a way, my simple designs here likely inspired how I designed my books.

In Learn Robotics Programming, I use a motor HAT that interfaces with the Raspberry Pi over I2C, keeping many more IO pins available for use with sensors, mirroring the goal of this project.

In Robotics at Home, 1st Edition, I've connected a Raspberry Pi Pico to a TB6612FNG motor controller module, in much the same way this one was connected. That module already has flyback diodes, and the bypass capacitors this design needed.

## Conclusion

The Arduino Uno is now a very dated platform, and arguably was starting to become dated at the time. There are motor controller boards based on I2c that have beautiful features now. There's not a lot of value in keeping the actual files. However, the little bit of file archaeology was interesting.
