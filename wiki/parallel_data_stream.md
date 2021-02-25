---
layout: page
title: Parallel Data Stream
date: 2004-11-20 01:47:19
---
This style is best used for short range communications.
What it means is to use many data lines at ones, shifting data down them together - the alternative being the [Serial Data Stream](/wiki/serial_data_stream.html "Serial Data Stream").

It can be expensive to route between 8 and 128 data lines, where a serial connection of just one line (assuming systems have common power connections) could be used.

Equally it will be slower. At first this may seem counter-intuitive - as if you can shift more data per cycle, then this would seem faster. The problem is in the arrival. If data is sent a byte at a time across a parallel line, then the receiving equipment must wait for all the bits to arrive, before acting upon them, or telling the sender to continue. Modern computer systems are all beginning to move away from parallel communications in favour of serial. By doing away for the need for such rigid synchronisation, you can speed things up by crazy factors. This is manifested in [USB](/wiki/universal_serial_bus.html "Universal Serial Bus") and PCI-E.

There is nothing however to stop you using multiple serial lines for high speed data sending, but for performance you are better off sending chunks or packets of data down each stream than splitting bytes down them. This way you lower the amount of synchronisation needed.

Newer chips do offer I2C bus communications though - a serial standard.

[Parallel Port](/wiki/parallel_port.html "Parallel Port")<br>
[Simple Parallel Port LED Board](/2004/11/05/simple_parallel_port_led.html "How to attach and program an LED to the parallel port on a PC")
