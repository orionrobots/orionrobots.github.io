---
layout: page
title: Serial Data Stream
tags: [electronics, computing]
date: 2004-11-20 01:38:12
---
A communications protocol which is now the standard in most long-range computer communications systems.

BlueTooth, [RS232](/wiki/rs232.html "A serial communication standard"), Ethernet, Wi-Fi, [Universal Serial Bus](/wiki/universal_serial_bus.html "Universal Serial Bus"), [I2C](/wiki/i2c.html "Inter Integrated Circuit bus"),

[Infra Red](/wiki/infra_red.html "A type of EM radiation commonly used for digital communications") and many other systems use serial data.

The basic serial system consists of a common ground or reference voltage, a signal line and possibly a timing line(depending on it being synchronous or asynchronous). As there is only one signal line, every data packet has to line up in an orderly queue to be sent. Because the stream is only sent down one line, asynchronous systems do not need to wait for other lines to catch up(unlike a parallel system). Therefore - these can be sent a high speeds.

At the moment, even short range, interchip communication systems are going this way for a number of reasons. First - that every required interconnection between chips requires increasing the die size and complexity as well as package specifications, second that it increases PCB routing complexity when you have 8, 16, 32 or 64 lines as opposed to one signal and one clock. This trend to move towards serial is shown in [I2C](/wiki/i2c.html "Inter Integrated Circuit bus"), PCI Express and Serial ATA which are becoming more common. These all reduce cost and complexity of supporting circuits for devices, and give much higher speeds through the reduced complexity in synchronising and timing signals.

Remember - with a [Parallel Data Stream](/wiki/parallel_data_stream.html "Parallel Data Stream") system, the fastest the system can run is at the worst of its slowest line. If you are routing eight lines on a PCB - some of the lines will be slightly longer than others due to turning corners, at high speeds this is significant enough to cause severe sync problems.

[Serial Servo Controller](/wiki/ssc.html)

[Serial Communication On RCX](/forums/lego_discussion/is_serial_communication_with_rcx_ports_possible.html)
