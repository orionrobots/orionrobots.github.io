---
layout: page
tags: [microcontroller,robot,electronics, arduino, raspberry pi, esp8266, esp32, robot building]
title: MicroController
date: 2006-03-21 18:10:58
---
A device which is normally a stripped down, low power MicroProcessor.
In robotics - you will often come across these.

They normally have many inputs and outputs which can be interfaced directly with devices (possibly they may need relays/power transistors). They often include DigitalToAnalogue and AnalogueToDigital converters as well as [PWM](/wiki/pwm.html "Pulse Width Modulation") motor controllers and [Servo Motor](/wiki/servo_motor.html "A motor with built in positioning control - easily interfaced with digital systems") channels. You can purchase single chips, boards to whole them, or complete development kits.

They are sometimes used with [BEAM](/wiki/beam_robots.html "Biology, Electronics, Aesthetics and Mechanics") or other semi-intelligent robot chassis for [Horse And Rider](/wiki/horse_and_rider.html "One system takes high-level control of a lower level system") techniques.

## Common Controllers

* Raspberry Pi Pico/RP2040 - an ARM based microcontroller with great IO, perfect for hobbyists to build with.
* Arduino - A common brand of controller boards & environments based around the AVRs.
* esp8266 - This controller offers wifi on a capable 32 bit espressif controller. Programmable in C, Python and Lua.
* AVR -     The underlying technology behind the Arduino - the ATTiny series are great for cheap and small embedding.
* 8051 -    A classic controller
* ARM Cortex devices
* Raspberry Pi - These are extremely capable arm based computers, but are used in hobby robots extensively - running Linux, more of a computer than Microcontroller.
* Beaglebone - when you need more raw power than the Pi these are suitable, but more pricey.
* Microbit - An education aimed board that can be used to control robots and make hobby devices with a lively community.
* esp32   - A new version of the esp8266 with WiFi and Bluetooth capabilities.

All of these controllers have IO pins (or GPIO) for controlling external devices, and may have ADC's to input from analogue sensors.
They are mostly capable of PWM - a method of using timing on a digital signal to control an analog output.

## Programming Microcontrollers

The current round of controllers and controller boards that hobbyists can use make programming fairly easy.
Many support high level languages like Python, Javascript or Lua and require only a USB port. Like the esp8266 and microbit. The esp8266 when bare requires a USB to Serial board.

The Raspberry Pi and Beaglebone are both Linux computers miniaturised. So any language you could run on linux will do. You will probably need to write the code onto an SD card for the pi and may need a screen and keyboard.

The [Arduino](https://www.arduino.cc) has a well known IDE and tool chain around C++ packaged in a surprisingly easy environment, and needs only a USB port. It has lots of library support and the internet will have example code or libraries for almost any sensor you can think up. It can be used to program the ESp8266 and ESP32 instead of the other interpreters.

The Bare AVR requires a bit more with specific programming cables. An Arduino can be modified into an AVR programmer.

Bare ARM devices come from a multitude of vendors with a variety of capabilities. Most are well supported in terms of compilers and tool chains, mostly in C/C++. Some have higher level interpreters using micropython or Lua. Specialist programming devices may be needed for this.

The 8051 is a somewhat venerable processor type, but are often present on quite modern controllers - and have great support in terms of compilers.

## Links

- <http://www.avrfreaks.net> - AVR Freaks - need we say more?
- <http://en.wikipedia.org/wiki/PIC_microcontroller> - Wikipedias PIC Page
- <http://en.wikipedia.org/wiki/Atmel_AVR> - Wikipedia on the Atmel AVR
- <http://www.makezine.org/> - Make magazine readers are often using microcontrollers of sorts at the heart of electronic gadgets

## Older controllers

This page listed controllers previously that are less used currently, but preserved here for context.

- [PIC](/wiki/pic.html "PIC") - Probably the basis of many of these others
- [OOPic](/wiki/oopic.html "OOPic") - The PIC dressed up with Object Oriented firmware
- Basic Stamp - A PIC dressed up with a basic interpreter, was very popular
- [Lego RCX](/wiki/rcx.html "The Lego RCX") - The center of the [RIS](/wiki/ris.html "The Lego Robotic Invention System"), based on the Hitachi H8
- [Lego](/wiki/lego.html "The best known construction toy") [CyberMaster](/wiki/cybermaster.html "CyberMaster") - The radio controlled predecessor of the [RCX](/wiki/rcx.html "The Lego Robot Command Explorer")
- [XPort](/wiki/xport.html "A Gameboy Advance based alternative to the Lego RCX") - An interesting Nintendo gameboy advanced controller solution
- ISOPOD controller board
- Fischer Technik Robo
- [MEGAbitty](/wiki/megabitty.html "A very small AVR microcontroller board solution") - A tiny AVR based board.
- [PC104](/wiki/pc104.html "PC104") - A standard in industrial tiny PC based computing.

For a comparison table on these devices - go to [microcontrollers roundup](/forums/electronics/preferred_microcontrollers.html).

### Programming Older Microcontrollers

It is not unusual to find that in addition to buying a microcontroller development board, a programming cable and other supporting hardware, that you will also need a development environment.

The minimum is a compiler to actually build the code, and then a programmer to download the code onto the board/chip. Often, there are a number of vendor ones, and also commercial ones. There are also free ones. The vendor and commercial development packages range from £50 to thousands of pounds.

Free/Open source tools:

- SDCC - The small device C Compiler
- GCC - There are GCC bindings for cross compiling to some
  microcontrollers
- PIC Forth - An Open source forth compiler for the
  [PIC](/wiki/pic.html "PIC") (in fact a few of them)
- Pyastra - A python to assembler translator - usable for programming
  PICs with python syntax
- AnyC - An open source compiler for microcontrollers
- FreeRTOS - A Real Time [OS](/wiki/os.html "An Operating System")
  which can be built to run on a microcontroller
- <http://ldrolez.free.fr/hardware/> - The hardware section of LUDs
  Open Source Corner has a number of PIC projects
- <http://www.gnupic.org> - A list of open source tools and stuff to
  use with the PIC

More tools are covered on the family specific pages above.
