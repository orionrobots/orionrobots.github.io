---
layout: page
title: OOPic
tags: [robots, robotics, robot building, electronics, microcontrollers]
date: 2006-01-04 23:51:15
---
OOPic is a mid-2000's brand of [PIC](/wiki/pic.html "PIC") or [Microcontroller](/wiki/microcontroller.html "A programmable digital controller") from Savage Innovations. It is basically a PIC, with some specific firmware and a high level programming system.

It is different in that it uses [Object Oriented](/wiki/object_oriented.html "Object Oriented") languages which look a little like VisualBasic/Java or C/C++. Unique to the OOPic is the concept of Virtual Circuits which can allow some behaviours to be specified very briefly.

The OOPic is programmable via a serial or parallel port depending on the board you have. It can perform bit-banged [I2C](/wiki/i2c.html "Inter Integrated Circuit bus") and data serial, as well as DDE. However, serial control or communication is not their strongpoint.

Servo control definitely is the OOPics forte. The boards generally have PWM ports, although you will need to bring your own H-Bridges. The OOPic is normally packaged with an [eeprom](/wiki/eeprom.html "Electrically Erasable Programmable ROM") which is used to store the user programs, as the PIC chip itself is running the firmware, however, there is not a lot of space for programs and data, or room for expansion on this.

There is a very active community, who have a mailing list based on yahoo groups. Some very interesting projects have been done using the OOPic, and it is definitely a nice quick prototyping board, though it is unlikely that it would be used in a production environment.

There are three development boards - the S Style Board- which I think was the initial one, the R style board - second generation and the C Style board- a very low form factor version in one 24 pin wide DIP package. They all have a DB9 RS232 [serial port](/wiki/serial_data_stream.html "Serial Data Stream") for programming.

## OOPic R Board

The R Board is recommended for development and experimentation.

It has sets of AMP MT/Berg connectors - with a no soldering required philosophy, arranged with ground and power supply pins in a way that allows [Servos](/wiki/servo_motor.html "A motor with built in positioning control - easily interfaced with digital systems") to be plugged directly into the board.

- Built in Speaker/buzzer
- Power [LED](/wiki/led.html "Light Emitting Diode")
- 16 Digital [IO](/wiki/io.html "Input Output") lines
- 4 Analogue Input Lines
- 6 Lines arranged for Dual [PWM](/wiki/pwm.html "Pulse Width Modulation") motor control (H-Bridges not included!)
- 3 Programmable function [LED's](/wiki/led.html "Light Emitting Diode")
- 3 Programmable button inputs
- Digital IO Lines configured for Serial Interfacing with [LCD Modules](/wiki/lcd.html "Liquid Crystal Display") and [SSC Modules](/wiki/ssc.html "Serial Servo Controller").
- Two voltage regulators - and room for a third.
- 96 bytes of Object space, 72 Bytes of variable space and 256 bytes on non-volatile fast [EEPROM](/wiki/eeprom.html "Electrically Erasable Programmable ROM").

The connectors themselves are available from RS, and are crimpable, so they require no soldering.

## Tips

Make sure you watch the power supply on this board, as the mailing list has regular postings of those who have overpowered or reverse polarised the board, and blown the power regulator - though at least that is better than blowing the chip.

Try to learn, and utilise virtual circuit based development where you can with the OOPic, you will get smaller code, and much better performance using them. These are after all the main perk of using the OOPic.

The OOPic requires a windows based computer to compile its code, as the compiler is written in Visual Basic. If you would like to compile real C-Code or work on a lower level, then the OOPic is really not for you. Consider other microcontrollers - the chip is after all just a Microchip PIC with nice firmware, on a nice board.

There is a problem experienced with all OOPics when using the serial port, known as the "Cosmic Wedgie" - this basically means that the board stops responding to the serial port, after downloading and running a program without a delay at the start. The program basically does not give the OOPic firmware a chance to respond. The way out involves plugging the OOPic board into the PC via a parallel port, which holds the reset line while programming it, or starting the board up with the eprom removed, then placing the eprom in after starting.

## Tell us what you think!

If anyone has any interesting details, caveats, designs or OOPic code then ping me on twitter [@orionrobots](https://twitter.com/orionrobots).

## More Information and comparisons

For more comparisons with other MicroControllers look at the [microcontrollers roundup](/forums/electronics/preferred_microcontrollers.html) forum thread.

## Links

- [The OOPic Home Page](http://oopic.com)
- [OOPic Yahoo group](http://groups.yahoo.com/group/oopic) - This includes community discussion of the OOPic as well as additional files to enhance using the OOPic.
