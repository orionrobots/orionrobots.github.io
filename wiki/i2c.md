---
layout: page
title: I2C
date: 2006-03-06 11:42:53
---
<p>The Phillips I2C bus is a <a class="wiki" href="/wiki/serial_data_stream.html" title="Serial Data Stream">Serial transfer</a> system that is supported by most <a a="" brain")="" class="wiki" for="" href="/wiki/microcontroller.html" robot"="" title="A programmable digital controller (or ">MicroControllers</a>. It is otherwise known is the Inter-Integrated-Circuit bus.
</p>
<p>Being a very simple two wire bus with a 20 year legacy, is is robust and extendable enough to be useful in contemporary embedding and robotics applications.
</p>
<p>Because of the age of this, there are multiple standards - standard, Fast and High-Speed communication modes - which of course older devices may not respond to.
</p>
<p>Like many wire based communication protocols, the connected circuits must share a common ground. The bus itself consists of a bi-directional serial data line, and a bi-direction serial clock line.
</p>
<p>As with many later serial protocols, each device on the bus has a unique ID/address and can operate as an exclusive receiver, or a receiver-transmitter.
</p>
<p>Different circuits on the bus will take the roles as bus controllers(or hosts), and bus devices. A bus host may initiate a data transfer, requesting data from elsewhere, while a slave device (exclusive receiver) will receive data when sent. Slave devices are good for output devices without feedback. Control devices, or devices which respond to a request with data on the bus - such as sensor controllers are then configured as master or transceiver devices.
</p>
<p>Older devices used 7 bit addressing, but the 10 bit and seven bit devices may be placed on the same bus.
</p>
<p>It has a 10 bit address space of 1024, allowing for many devices. A cable maximum length of around 500mm is suggested as a maximum without serious sheilding or repeaters, as at this point the noise may make the line unusable.
</p>
<p>One interesting use of this in robotics is for nearly-intelligent sensors. With a 10 bit address space of 1024, a microcontroller with an I2C port could be interfaced with very cheap devices like I2C ADC's - therefore allow sensor inputs to be placed on a bus. This does away with having 20 seperate sensor ports and all of the usual worries of sensor multiplexing. Since in many applications sensors are polled - then this would be a great way to do things. The alternative of event driven applications would give sensors the ability to transmit on the bus when it is free and the controller listening would then call any event code it may have.
</p>
<p>
</p>
<h1  id="Links">Links</h1>
<ul><li> <a  href="http://www.semiconductors.philips.com/acrobat/literature/9398/39340011.pdf" rel="external" target="_blank">Full I2C Specification PDF</a>
</li></ul>