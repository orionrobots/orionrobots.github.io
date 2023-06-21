---
layout: page
title: I2C
tags: [electronics, robot building]
date: 2006-03-06 11:42:53
---
The Phillips I2C bus is a [Serial transfer](/wiki/serial_data_stream.html "Serial Data Stream") system that is supported by most [MicroControllers](/wiki/microcontroller.html "A programmable digital controller (or "). It is otherwise known is the Inter-Integrated-Circuit bus.

This is a great system for connecting a Raspberry Pi or Arduino to many sensors.

Being a very simple two wire bus with decades in use, is is robust and extendable enough to be useful in contemporary embedding and robotics applications.

Because of the age of this, there are multiple standards - standard, Fast and High-Speed communication modes - which of course older devices may not respond to.

Like many wire based communication protocols, the connected circuits must share a common ground. The bus itself consists of a bi-directional serial data line, and a bi-direction serial clock line.

As with many later serial protocols, each device on the bus has a unique ID/address and can operate as an exclusive receiver, or a receiver-transmitter.

Different circuits on the bus will take the roles as bus controllers(or hosts), and bus devices. A bus host may initiate a data transfer, requesting data from elsewhere, while a slave device (exclusive receiver) will receive data when sent. Slave devices are good for output devices without feedback. Control devices, or devices which respond to a request with data on the bus - such as sensor controllers are then configured as master or transceiver devices.

Older devices used 7 bit addressing, but the 10 bit and seven bit devices may be placed on the same bus.

It has a 10 bit address space of 1024, allowing for many devices. A cable maximum length of around 500mm is suggested as a maximum without serious shielding or repeaters, as at this point the noise may make the line unusable.

One interesting use of this in robotics is for nearly-intelligent sensors. With a 10 bit address space of 1024, a microcontroller with an I2C port could be interfaced with very cheap devices like I2C ADC's - therefore allow sensor inputs to be placed on a bus. This does away with having 20 separate sensor ports and all of the usual worries of sensor multiplexing. Since in many applications sensors are polled - then this would be a great way to do things. The alternative of event driven applications would give sensors the ability to transmit on the bus when it is free and the controller listening would then call any event code it may have.
