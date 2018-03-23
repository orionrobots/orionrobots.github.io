---
layout: page
title: OOPic
date: 2006-01-04 23:51:15
---
OOPic is a mid-2000's brand of <a class="wiki" href="/wiki/pic.html" title="PIC">PIC</a> or <a class="wiki" href="/wiki/microcontroller.html" title="A programmable digital controller">Microcontroller</a> from Savage Innovations. It is basically a PIC, with some specific firmware and a high level programming system.

It is different in that it uses <a class="wiki" href="/wiki/object_oriented.html" title="Object Oriented">Object Oriented</a> languages which look a little like VisualBasic/Java or C/C++. Unique to the OOPic is the concept of Virtual Circuits which can allow some behaviours to be specified very briefly.

The OOPic is programmable via a serial or parallel port depending on the board you have. It can perform bit-banged <a class="wiki" href="/wiki/i2c.html" title="Inter Integrated Circuit bus">I2C</a> and data serial, as well as DDE. However, serial control or communication is not their strongpoint.

Servo control definitely is the OOPics forte. The boards generally have PWM ports, although you will need to bring your own H-Bridges. The OOPic is normally packaged with an <a class="wiki" href="/wiki/eeprom.html" title="Electrically Erasable Programmable ROM">eeprom</a> which is used to store the user programs, as the PIC chip itself is running the firmware, however, there is not a lot of space for programs and data, or room for expansion on this.

There is a very active community, who have a mailing list based on yahoo groups. Some very interesting projects have been done using the OOPic, and it is definitely a nice quick prototyping board, though it is unlikely that it would be used in a production environment.

There are three development boards - the S Style Board- which I think was the initial one, the R style board - second generation and the C Style board- a very low form factor version in one 24 pin wide DIP package.  They all have a DB9 RS232 <a class="wiki" href="/wiki/serial_data_stream.html" title="Serial Data Stream">serial port</a> for programming.

<h1 id="OOPic_R_Board">OOPic R Board</h1>
The R Board is recommended for development and experimentation.
<br/>It has sets of AMP MT/Berg connectors - with a no soldering required philosophy, arranged with ground and power supply pins in a way that allows <a class="wiki" href="/wiki/servo_motor.html" title="A motor with built in positioning control - easily interfaced with digital systems">Servos</a> to be plugged directly into the board.

<ul><li> Built in Speaker/buzzer
</li><li> Power <a class="wiki" href="/wiki/led.html" title="Light Emitting Diode">LED</a>
</li><li> 16 Digital <a class="wiki" href="/wiki/io.html" title="Input Output">IO</a> lines
</li><li> 4 Analogue Input Lines
</li><li> 6 Lines arranged for Dual <a class="wiki" href="/wiki/pwm.html" title="Pulse Width Modulation">PWM</a> motor control (H-Bridges not included!)
</li><li> 3 Programmable function <a class="wiki" href="/wiki/led.html" title="Light Emitting Diode">LED's</a>
</li><li> 3 Programmable button inputs
</li><li> Digital IO Lines configured for Serial Interfacing with <a class="wiki" href="/wiki/lcd.html" title="Liquid Crystal Display">LCD Modules</a> and <a class="wiki" href="/wiki/ssc.html" title="Serial Servo Controller">SSC Modules</a>.
</li><li> Two voltage regulators - and room for a third.
</li><li> 96 bytes of Object space, 72 Bytes of variable space and 256 bytes on non-volatile fast <a class="wiki" href="/wiki/eeprom.html" title="Electrically Erasable Programmable ROM">EEPROM</a>.
</li></ul>
<br/>The connectors themselves are available from RS, and are crimpable, so they require no soldering.

<h1 id="Tips">Tips</h1>
Make sure you watch the power supply on this board, as the mailing list has regular postings of those who have overpowered or reverse polarised the board, and blown the power regulator - though at least that is better than blowing the chip.

Try to learn, and utilise virtual circuit based development where you can with the OOPic, you will get smaller code, and much better performance using them. These are after all the main perk of using the OOPic.

The OOPic requires a windows based computer to compile its code, as the compiler is written in Visual Basic. If you would like to compile real C-Code or work on a lower level, then the OOPic is really not for you. Consider other microcontrollers - the chip is after all just a Microchip PIC with nice firmware, on a nice board.

There is a problem experienced with all OOPics when using the serial port, known as the "Cosmic Wedgie" - this basically means that the board stops responding to the serial port, after downloading and running a program without a delay at the start. The program basically does not give the OOPic firmware a chance to respond. The way out involves plugging the OOPic board into the PC via a parallel port, which holds the reset line while programming it, or starting the board up with the eprom removed, then placing the eprom in after starting.

If you are having trouble downloading the Savage OOPic Development executable  <a href="http://observe.phy.sfasu.edu/courses/phy475/Innerarity2003/OOPic/Apps/" rel="external" target="_blank">http://observe.phy.sfasu.edu/courses/phy475/Innerarity2003/OOPic/Apps/</a> - which is a mirror of these.

<h1 id="Tell_us_what_you_think_">Tell us what you think!</h1>
If anyone has any interesting details, caveats, designs or OOPic code then here is the place to share them.

<h1 id="More_Information_and_comparisons">More Information and comparisons</h1>
For more comparisons with other MicroControllers look at the <a class="wiki" href="/forums/electronics/preferred_microcontrollers.html" rel="">microcontrollers roundup</a> forum thread.

Links:

<ul><li> <a href="http://oopic.com" rel="external" target="_blank">The OOPic Home Page</a>
</li><li> <a href="http://groups.yahoo.com/group/oopic" rel="external" target="_blank">OOPic Yahoo group</a> - This includes community discussion of the OOPic as well as additional files to enhance using the OOPic.
</li><li> <a href="http://observe.phy.sfasu.edu/courses/phy475/Innerarity2003/OOPic/Apps/" rel="external" target="_blank">OOPic Apps Mirror</a>
</li></ul>
