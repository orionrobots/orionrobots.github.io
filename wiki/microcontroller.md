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
<ul><li> <a class="wiki" href="/wiki/pic.html" title="PIC">PIC</a> - Probably the basis of many of these others
</li><li> AVR - A similar but competing product
</li><li> 8051 - A classic controller
</li><li> <a class="wiki" href="/wiki/oopic.html" title="OOPic">OOPic</a> - The PIC dressed up with Object Oriented firmware
</li><li> Basic Stamp - A PIC dressed up with a basic interpreter, very popular
</li><li> <a class="wiki" href="/wiki/rcx.html" title="The Lego RCX">Lego RCX</a> - The center of the <a class="wiki" href="/wiki/ris.html" title="The Lego Robotic Invention System">RIS</a>, based on the Hitachi H8
</li><li> <a class="wiki" href="/wiki/lego.html" title="The best known construction toy">Lego</a> <a class="wiki" href="/wiki/cybermaster.html" title="CyberMaster">CyberMaster</a> - The radio controlled predecessor of the <a class="wiki" href="/wiki/rcx.html" title="The Lego Robot Command Explorer">RCX</a>
</li><li> <a class="wiki" href="/wiki/xport.html" title="A Gameboy Advance based alternative to the Lego RCX">XPort</a> - An interesting Nintendo gameboy advanced controller solution
</li><li> <a class="wiki" href="/wiki/pc104.html" title="PC104">PC104</a> - A standard in tiny PC based computing.
</li><li> ISOPOD
</li><li> Fischer Technik Robo
</li><li> <a class="wiki" href="/wiki/megabitty.html" title="A very small AVR microcontroller board solution">MEGAbitty</a> - An tiny AVR based board.
</li></ul>
For a comparison table on these devices - go to <a class="wiki" href="/forums/electronics/preferred_microcontrollers.html" rel="">microcontrollers roundup</a>.

<h1 id="Programming_Microcontrollers">Programming Microcontrollers</h1>
It is not unusual to find that in addition to buying a microcontroller development board, a programming cable and other supporting hardware, that you will also need a development environment.

The minimum is a compiler to actually build the code, and then a programmer to download the code onto the board/chip. Often, there are a number of vendor ones, and also commercial ones. There are also free ones. The vendor and commercial development packages range from £50 to thousands of pounds.

Free/Open source tools:

<ul><li> SDCC - The small device C Compiler
</li><li> GCC - There are GCC bindings for cross compiling to some microcontrollers
</li><li> PIC Forth - An Open source forth compiler for the <a class="wiki" href="/wiki/pic.html" title="PIC">PIC</a> (in fact a few of them)
</li><li> Pyastra - A python to assembler translator - usable for programming PICs with python syntax
</li><li> AnyC - An open source compiler for microcontrollers
</li><li> FreeRTOS - A Real Time <a class="wiki" href="/wiki/os.html" title="An Operating System">OS</a> which can be built to run on a microcontroller
</li></ul>
More tools are covered on the family specific pages above.

<h1 id="Links">Links</h1>
There a million and one links on these devices, as they are very popular, and springing up everywhere. Don't expect OrionRobots to cover them all, we actually found more than we could reasonably list here with about 5 minutes surfing. Some of these will also be migrated into family specific pages.

<ul><li> <a href="http://www.avrfreaks.net" rel="external" target="_blank">http://www.avrfreaks.net</a> - AVR Freaks - need we say more?
</li><li> <a href="http://electrons.psychogenic.com/avr/" rel="external" target="_blank">http://electrons.psychogenic.com/avr/</a> - AVR Newbies Resource
</li><li> <a href="http://www.gnupic.org" rel="external" target="_blank">http://www.gnupic.org</a> - A list of open source tools and stuff to use with the PIC
</li><li> <a href="http://en.wikipedia.org/wiki/PIC_microcontroller" rel="external" target="_blank">http://en.wikipedia.org/wiki/PIC_microcontroller</a> - Wikipedias PIC Page
</li><li> <a href="http://en.wikipedia.org/wiki/Atmel_AVR" rel="external" target="_blank">http://en.wikipedia.org/wiki/Atmel_AVR</a> - Wikipedia on the Atmel AVR
</li><li> <a href="http://ldrolez.free.fr/hardware/" rel="external" target="_blank">http://ldrolez.free.fr/hardware/</a> - The hardware section of LUDs Open Source Corner has a number of PIC projects
</li><li> <a href="http://www.makezine.org/" rel="external" target="_blank">http://www.makezine.org/</a> - Make magazine readers are often using microcontrollers of sorts at the heart of electronic gadgets
</li></ul>
