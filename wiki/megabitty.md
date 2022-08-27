---
layout: page
title: MEGAbitty microcontroller
tags: [robots, microcontroller]
date: 2006-03-21 16:08:03
---
The MEGAbitty really is an itty bitty thing. It actually is roughly the size of a two pound coin - a 23mm square. Weighing in at around 2 grams, it is also light enough for antweight competitions.
It is not tiny in its power. Delivering more IO and programming flexibility in it small package than the [RCX](/wiki/rcx.html "The Lego Robot Command Explorer") alone, this [MicroController](/wiki/microcontroller.html "A programmable digital controller (or ") solution has a lot going for it. It is also ideal for swarms at this size. Especially as it has the communications clout and extendability for them, although you will still require an RS232 voltage converter like the MAX232\. The MEGAbitty can be bought currently at [Robot Maker](http://www.robotmaker.co.uk/MEGAbitty/MEGAbitty_index.htm) for â‚¬60 - making them cheap enough to build swarms as well.

The bitty has 2 on board PWM controllers, including the H-Bridge hardware, so no need for external bridges. At 500mA each, they are not far from what you would get from outboard bridges anyway.

It also has a power regulator for 5v and around 500mA for powering attached sensors/actuators.

The AVR it uses is the Atmel Mega8 Microcontroller. It is fairly fast running at 16MIPS, and uses an 8-bit instruction set. There is 8k of Flash memory on board, along with 1k of Static RAM and 512K EEPROM. It has 8 10Bit AtoD converters, and an analog comparator allowing for some clever sensor manipulation. With SPI supported, as well as a UART, and TWI, it has little problem communicating with more advanced sensors, though there doesn't appear to be any hardware I2C bus.

This tiny and powerful device is ideal for getting going with tiny robots, and could be a space saving for a few larger ones too.

## Links

- <http://www.bittybot.com/index.php?pageId=MEGAbitty> - Bittybot products - MEGAbitty
- <http://www.bittybot.com/Docs/MEGAbittyProgrammingAndUsageInstructions.pdf> - MEGAbitty programming and usage instructions manual.
