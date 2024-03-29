---
layout: page
title: Infra Red
tags: [electronics]
date: 2006-12-12 11:15:05
---
Infrared light is a frequency of light in a range not visible to humans, and when a large amount of energy is put behind it, it will be felt as heat. Its name comes from the fact that when laid out on the Electromagnetic Spectrum it is just below the wavelength of visible red.

It is however visible to most CCD cameras. If you have a webcam, you can see an infrared device operate by pointing it at it and pressing the button. There have been efforts to record this, analyse the timing of the IR signals (which are seen as bright red or white dots pulsing) and decode them - giving a method to capture IR with a general sensor.

## Communications

InfraRed is commonly used for digital communication protocols. It is cheap, not particularly reliable, but generally good enough. This is criteria for it to be put into mass circulation devices, like TV remotes.

The system normally uses one emitter and/or one receiver per device depending on the communications (one way or two way).  The protocols are normally based upon [Serial](/wiki/serial_data_stream.html "Serial Data Stream").

Your TV remote definitely uses this system as do [Lego RCX](/wiki/rcx.html "The Lego RCX"), [Lego Manas](/wiki/lego_manas.html "Remote control Lego robot-like kits"), [Lego](/wiki/lego.html "The best known construction toy") [SpyBotics](/wiki/spybotics.html "Lego Programmable robot kits"), [Pocket PC](/wiki/pocket_pc.html "Pocket PC") and [Palm Computer](/wiki/palm_computer.html "Palm Computer"). However - they may use different protocol. The [Lego](/wiki/lego.html "The best known construction toy") items, and TV's use CIR - consumer IR band, while [PDA's](/wiki/personal_data_assistant.html "Personal Data Assistant") generally use IRDA. These operate at different transmission rates and on different wavelengths.

Because of the range of IR wavelengths - it is not always possible for one programmable IR device to communicate with another - this would be like having two radios tuned to different frequencies and expecting them to talk. However some newer PDA's now have the ability to actually use both CIR and IRDA allowing them to be used as complex remote controls, or to control the [Lego](/wiki/lego.html "The best known construction toy") P-Bricks.

One thing to be aware of when using InfraRed for communications is that a lot of items generate it, and therefore your application may be susceptible to interference. Sunlight, fluorescent lights as well as consumer remotes can and will interfere with [Lego](/wiki/lego.html "The best known construction toy") devices, and also impede the operation of IRDA communications. Also, IR is limited as a communication system by line of sight-if two transceivers are in different rooms - you need to consider something like [WiFi](/wiki/wifi.html "Wireless Lan") or [BlueTooth](/wiki/bluetooth.html "Bluetooth").

## Sensors

IR can also be used to sense obstacles and distance as well as heat.

### Obstacle Sensors

If an IR emitter and receiver are pointed at a certain angle, then when an object comes into range, it will reflect the IR at the right angle. This can be used to sense obstacles at a fixed width. by having multiple sensors, or a grating of some kind, it is possible to sense a range of angles and get a variable distance sense. This is one form of echo-location.

Also distances can be sensed by the echo timing with IR, but because the speed of light is so fast, it is very unlikely you could effectively do this without some major cost.


### Heat Sensors

 Infrared sensors can also be used to detect and locate sources of heat. This is great for use in a firefighting bot. It can also be used very effectively for search and rescue- since most people have telltale heat signatures.

### Optical Interrupters/Odometry

 Another use of IR are in Optical interrupters. If you want to detect something passing through a particular space, then you could use a switch. but switch contacts wear quickly, and may be too obstructive to the movement of that which you want to detect.
If you set up an IR emitter directly inline with a detector, then you can sense when this beam is broken.

It is used in a simple fashion by floppy disk drives, which use a sensor positioned over both the density slot (which is nearly always high-density these days), and the read-write switch, do the drive can detect how it is permitted to use the disk inserted. In some more advanced drives that never made it across to Windows PC's, it could also detect and respond to a disk being present in the drive - you can see these in Apple Macs, Acorns and Amiga's with floppy drives.

The same technique is also used for [Odometry](/wiki/odometry.html "Measurement of distance through step/rev counting") - that is see how far something has travelled or a joint has moved - and is common in computer mice - a great source of exactly this kind of opto-interrupter system, with a slotted wheel to match.

What happens is that the slotted wheel passes over the sensor, and by counting the number of pulses, or the pattern of the slots in the wheel, a [MicroController](/wiki/microcontroller.html "A programmable digital controller (or ") can easily tell how much the wheel has moved. By adding two sensors, slightly out of phase - you get enough information to tell in which direction the wheel is moving as well. Scavenging this kind of tech from mice is quite useful.

### Opto-Isolators

 Another method of using infrared is to electrically isolate two circuits while allowing them to communicate with each other. This may be down to noise considerations, or the danger of one circuits potential for power surges destroying another. An IR emitter, and receiver were again placed in close proximity - often in a hood, sometimes in the same package - in fact some modern ones come in DIL packages. This meant that IR could be used for fast, reliable communications without any electrical connection between the source and destination circuits.

It was common to see this with [Robot Kits](/wiki/robot_kits.html "Robot Kits") that plugged into a [Parallel Port](/wiki/parallel_port.html "Parallel Port") - remember that [Relays](/wiki/electronic_relay.html "An electrically activated switch") are based upon an Electromagnet core, which becomes an inductor, and when turned off, the fields can collapse and create a spike - which may damage computer port circuitry.
