---
layout: page
title: Binary
tags: [electronics, robot programming]
date: 2006-04-19 16:08:27
---
The basic computer method of storing information in a series of encoded zeros and ones, as [bits](/wiki/bit.html "Binary Digit").
Binary is manipulated with Arithmetic and [Boolean](/wiki/boolean.html "Boolean") operations.

Binary based devices are what people mean when they commonly refer to _Digital_ devices.

It is the system currently used in most computers, as well as the [Artificial Intelligence](/wiki/artificial_intelligence.html "Artificial Intelligence") of Robots.
Many robots use [MicroControllers](/wiki/microcontroller.html "A programmable digital controller (or ") to process their instructions.
In fact, almost every gadget you have, mobile phone, PDA, and even a light switch could be said to operate using binary.
Even [BEAM Robots](/wiki/beam_robots.html "Biology, Electronics, Aesthetics and Mechanics"), which are based on analog electronics abuse digital logic devices to produce their behaviour.

## How does it work?

Imagine the Zero as representing an Off or False state, and One the On or True state, for example a light bulb and switch.
Since these are the two simplest states represented by any electronic circuit it is not difficult to see why they were used for computing.

If you are then able to create a simple switch which acts upon a 1 or 0 input, changing the input of some other device then you are able to create more intelligent [Boolean](/wiki/boolean.html "Boolean") [Logic Gates](/wiki/logic_gate.html "Devices designed to perform logical operations").

Also because of the high tolerances when only needing to detect two states, high transmission rates can be attained.
At low rates it may arguably be quite inefficient use of a wire which can carry a huge continuous range of voltages, however when you are talking about millions of [binary digits](/wiki/bit.html "Binary Digit") per second, then it become extremely efficient.

Analog describes the opposite of this system.

Also please refer to [Parallel Data](/wiki/parallel_data_stream.html "Parallel Data Stream") and [Serial Data](/wiki/serial_data_stream.html "Serial Data Stream").

## Converting Binary To Decimal

If you have a multi-digit binary number, take each digit as being the presence or note of that places power of two.
For example - reading from the right to left, the first digit will represent 2 to the power of zero.
Any number to 0 is simply 1. So if it is on, you have 1, otherwise 0.
The next is 2 to the power of 1 which simply gives 2 or 0.
The 3rd digit will be 2 to the power of 2, giving 4.

So - if you had the binary number 1101:

```text
1  1  0  1
+8 +4 +0 +1 = 13

 1  0  1  1
+8 +0 +2 +1 = 11

 1  0  1  0  1
+16+0 +4 +0 +1 = 21
```

You can represent any whole integer with this system, but you will require more digits as they get larger.
The number of bits used is known as the Word Length, and at the time of writing is commonly 32, with some 64 and 128 bit buses occurring occasionally.
The number of bits is also commonly a power of two itself for keeping manipulation simple.

## Converting from Decimal to Binary

This is a little harder but the given way is that you find the largest power of two that will go into the number and mark that as a 1.
You then subtract that power of two from the total, and add 0's until you get to the next largest power of two that fits.
You continue to do so until you get to 0.

## Related Topics

- [AND](/wiki/and.html "AND")
- [OR](/wiki/or.html "OR")
- [NOT](/wiki/not.html "NOT")
- [XOR](/wiki/xor.html "XOR")
- [George Boole](/wiki/george_boole.html "The creator of Boolean Logic - the root of all our digital computing")
- [logic Gates](/wiki/logic_gate.html "Devices designed to perform logical operations")
- [Boolean](/wiki/boolean.html "Boolean")
- Boolean Logic
- [MicroController](/wiki/microcontroller.html "A programmable digital controller (or ")
- [Parallel Data](/wiki/parallel_data_stream.html "Parallel Data Stream")
- [Serial Data](/wiki/serial_data_stream.html "Serial Data Stream")
- [BIT](/wiki/bit.html "Binary Digit")
- [Byte](/wiki/byte.html "8 Bits")
- Digital
- [IO](/wiki/io.html "Input Output")
- [Truth Table](/wiki/truth_table.html "Truth Table")

## Links

- [Digital Logic - Williamson Labs](http://www.williamson-labs.com/480_logic.htm) - A rather good explanation with excellent animated demonstrations.
