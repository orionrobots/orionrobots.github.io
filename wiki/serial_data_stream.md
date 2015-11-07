---
layout: page
title: Serial Data Stream
date: 2004-11-20 01:38:12
---
<p>
<br/>A communications protocol which is now the standard in most long-range computer communications systems.
</p>
<p>BlueTooth, <a class="wiki" href="/wiki/rs232.html" title="A serial communication standard">RS232</a>, Ethernet<a class="wiki wikinew for-review" title="Create page: Ethernet">?</a>, Wi-Fi<a class="wiki wikinew for-review" title="Create page: Wi-Fi">?</a>, <a class="wiki" href="/wiki/universal_serial_bus.html" title="Universal Serial Bus">Universal Serial Bus</a>, <a class="wiki" href="/wiki/i2c.html" title="Inter Integrated Circuit bus">I2C</a>,
<br/><a class="wiki" href="/wiki/infra_red.html" title="A type of EM radiation commonly used for digital communications">Infra Red</a> and many other systems use serial data.
</p>
<p>The basic serial system consists of a common ground or reference voltage, a signal line and possibly a timing line(depending on it being synchronous or asynchronous).  As there is only one signal line, every data packet has to line up in an orderly queue to be sent.  Because the stream is only sent down one line, asynchronous systems do not need to wait for other lines to catch up(unlike a parallel system).  Therefore - these can be sent a high speeds.
</p>
<p>At the moment, even short range, interchip communication systems are going this way for a number of reasons. First - that every required interconnection between chips requries increasing the die size and complexity as well as package specifications, second that it increases PCB routing complexity when you have 8, 16, 32 or 64 lines as opposed to one signal and one clock. This trend to move towards serial is shown in <a class="wiki" href="/wiki/i2c.html" title="Inter Integrated Circuit bus">I2C</a>, PCI Express<a class="wiki wikinew for-review" title="Create page: PCI Express">?</a> and Serial ATA<a class="wiki wikinew for-review" title="Create page: Serial ATA">?</a> which are becoming more common. These all reduce cost and complexity of supporting circuits for devices, and give much higher speeds through the reduced complexity in synchronising and timing signals.
</p>
<p>Remember - with a <a class="wiki" href="/wiki/parallel_data_stream.html" title="Parallel Data Stream">Parallel Data Stream</a> system, the fastest the system can run is at the worst of its slowest line. If you are routing eight lines on a PCB - some of the lines will be slightly longer than others due to turning corners, at high speeds this is significant enough to cause severe sync problems.
</p>
<p>Serial Servo Controller<a class="wiki wikinew for-review" title="Create page: Serial Servo Controller">?</a>
</p>
<p>Serial Communication On RCX<a class="wiki wikinew for-review" title="Create page: Serial Communication On RCX">?</a>
</p>
