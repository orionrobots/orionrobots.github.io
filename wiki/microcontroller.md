---
layout: page
tags: microcontroller,robot,electronics
title: MicroController
date: 2006-03-21 18:10:58
---
A device which is normally a stripped down, low power MicroProcessor.
In robotics - you will often come across these.

They normally have many inputs and outputs which can be interfaced directly with devices (possibly they may need relays/power transistors).  They often include DigitalToAnalogue and AnalogueToDigital converters as well as <a class="wiki" href="/wiki/pwm.html" title="Pulse Width Modulation">PWM</a> motor controllers and <a class="wiki" href="/wiki/servo_motor.html" title="A motor with built in positioning control - easily interfaced with digital systems">Servo Motor</a> channels. You can purchase single chips, boards to whole them, or complete development kits.

They are sometimes used with <a class="wiki" href="/wiki/beam_robots.html" title="Biology, Electronics, Aesthetics and Mechanics">BEAM</a> or other semi-intelligent robot chassis for <a class="wiki" href="/wiki/horse_and_rider.html" title="One system takes high-level control of a lower level system">Horse And Rider</a> techniques.

<h1 id="Common_Controllers">Common Controllers</h1>

* Arduino - A common brand of controller boards & environments based around the AVR's.
* AVR -     The underlying technology behind the Arduino - the ATTiny series are great for cheap and small embedding.
* 8051 -    A classic controller
* ARM Cortex devices
* Raspberry Pi - These are extremely capable arm based computers, but are used in hobby robots extensively.
* Beaglebone - when you need more raw power than the Pi these are suitable, but more pricey.
* esp8266 - This controller offers wifi on a capable 32 bit espressif controller. Programmable in C, Python and Lua.
* Microbit - An education aimed board that can be used to control robots and make hobby devices with a lively community.
* esp32   - A new version of the esp8266 with WiFi and Bluetooth capabilities.

All of these controllers have IO pins (or GPIO) for controlling external devices, and may have ADC's to input from analogue sensors.
They are mostly capable of PWM - a method of using timing on a digital signal to control an analog output.

<h1 id="Programming_Microcontrollers">Programming Microcontrollers</h1>

The current round of controllers and controller boards that hobbyists can use make programming fairly easy.
Many support high level languages like Python, Javascript or Lua and require only a USB port. Like the esp8266 and microbit. The esp8266 when bare requires a USB to Serial board.

The Raspberry Pi and Beaglebone are both Linux computers miniaturised. So any language you could run on linux will do. You will probably need to write the code onto an SD card for the pi and may need a screen and keyboard.

The [Arduino](https://www.arduino.cc) has a well known IDE and tool chain around C++ packaged in a surprisingly easy environment, and needs only a USB port. It has lots of library support and the internet will have example code or libraries for almost any sensor you can think up. It can be used to program the ESp8266 and ESP32 instead of the other interpreters.

The Bare AVR requires a bit more with specific programming cables. An Arduino can be modified into an AVR programmer.

Bare ARM devices come from a multitude of vendors with a variety of capabilities. Most are well supported in terms of compilers and tool chains, mostly in C/C++. Some have higher level interpreters using micropython or Lua. Specialist programming devices may be needed for this.

The 8051 is a somewhat venerable processor type, but are often present on quite modern controllers - and have great support in terms of compilers.

<h1 id="Links">Links</h1>

<ul><li> <a href="http://www.avrfreaks.net" rel="external" target="_blank">http://www.avrfreaks.net</a> - AVR Freaks - need we say more?
</li><li> <a href="http://electrons.psychogenic.com/avr/" rel="external" target="_blank">http://electrons.psychogenic.com/avr/</a> - AVR Newbies Resource
</li><li> <a href="http://en.wikipedia.org/wiki/PIC_microcontroller" rel="external" target="_blank">http://en.wikipedia.org/wiki/PIC_microcontroller</a> - Wikipedias PIC Page
</li><li> <a href="http://en.wikipedia.org/wiki/Atmel_AVR" rel="external" target="_blank">http://en.wikipedia.org/wiki/Atmel_AVR</a> - Wikipedia on the Atmel AVR

</li><li> <a href="http://www.makezine.org/" rel="external" target="_blank">http://www.makezine.org/</a> - Make magazine readers are often using microcontrollers of sorts at the heart of electronic gadgets
</li></ul>

# Older controllers

This page listed controllers previously that are less used currently, but preserved here for context.

* <a class="wiki" href="/wiki/pic.html" title="PIC">PIC</a> - Probably the basis of many of these others
* <a class="wiki" href="/wiki/oopic.html" title="OOPic">OOPic</a> - The PIC dressed up with Object Oriented firmware
* Basic Stamp - A PIC dressed up with a basic interpreter, was very popular
* <a class="wiki" href="/wiki/rcx.html" title="The Lego RCX">Lego RCX</a> - The center of the <a class="wiki" href="/wiki/ris.html" title="The Lego Robotic Invention System">RIS</a>, based on the Hitachi H8
* <a class="wiki" href="/wiki/lego.html" title="The best known construction toy">Lego</a> <a class="wiki" href="/wiki/cybermaster.html" title="CyberMaster">CyberMaster</a> - The radio controlled predecessor of the <a class="wiki" href="/wiki/rcx.html" title="The Lego Robot Command Explorer">RCX</a>
* <a class="wiki" href="/wiki/xport.html" title="A Gameboy Advance based alternative to the Lego RCX">XPort</a> - An interesting Nintendo gameboy advanced controller solution
* ISOPOD controller board
* Fischer Technik Robo
* <a class="wiki" href="/wiki/megabitty.html" title="A very small AVR microcontroller board solution">MEGAbitty</a> - A tiny AVR based board.
* <a class="wiki" href="/wiki/pc104.html" title="PC104">PC104</a> - A standard in industrial tiny PC based computing.

For a comparison table on these devices - go to <a class="wiki" href="/forums/electronics/preferred_microcontrollers.html">microcontrollers roundup</a>.

## Programming Older Microcontrollers

It is not unusual to find that in addition to buying a microcontroller development board, a programming cable and other supporting hardware, that you will also need a development environment.

The minimum is a compiler to actually build the code, and then a programmer to download the code onto the board/chip. Often, there are a number of vendor ones, and also commercial ones. There are also free ones. The vendor and commercial development packages range from £50 to thousands of pounds.

Free/Open source tools:

<ul><li> SDCC - The small device C Compiler
</li><li> GCC - There are GCC bindings for cross compiling to some microcontrollers
</li><li> PIC Forth - An Open source forth compiler for the <a class="wiki" href="/wiki/pic.html" title="PIC">PIC</a> (in fact a few of them)
</li><li> Pyastra - A python to assembler translator - usable for programming PICs with python syntax
</li><li> AnyC - An open source compiler for microcontrollers
</li><li> FreeRTOS - A Real Time <a class="wiki" href="/wiki/os.html" title="An Operating System">OS</a> which can be built to run on a microcontroller
</li><li> <a href="http://ldrolez.free.fr/hardware/" rel="external" target="_blank">http://ldrolez.free.fr/hardware/</a> - The hardware section of LUDs Open Source Corner has a number of PIC projects
</li><li> <a href="http://www.gnupic.org" rel="external" target="_blank">http://www.gnupic.org</a> - A list of open source tools and stuff to use with the PIC
</li></ul>
More tools are covered on the family specific pages above.
