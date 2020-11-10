---
layout: page
title: Universal Serial Bus
date: 2007-01-28 16:14:59
---
<p>Otherwise known as USB, this has become a very simple and well developed way of connecting computer devices. From the name, you may deduce that it operates with a <a href="/wiki/serial_data_stream.html" title="Serial Data Stream">Serial Data Stream</a> protocol.
</p>
<p>USB has a fairly detailed standard, and beginners should probably start with all-in-one chipsets and consider Jan Axelson's "USB Complete".
</p>
<p>A connection following the USB standard dictates that one end will be a "host" and the other a "device". Only a host may have devices connected to it. For example, a PC is a host, and a USB hard drive would be a device. It is for this reason that the <a href="/wiki/lego.html" title="The best known construction toy">Lego</a> <a href="/wiki/nxt.html" title="Legos NeXT generation robotics kit">NXT</a> cannot be connected to a USB 2 hard drive. If a connection with a protocol that treats devices as peers is required, USB is not suitable.
</p>
<p>One big advantage to USB is that it was designed to be <a href="/wiki/hot_pluggable.html" title="Hot Pluggable">Hot Pluggable</a> though do not presume every device works this way. Some operating systems will offer to restart when you plug in a new device anyway.
</p>
<p>USB Standards stipulate the basics of the electronic connection, timing, power, device identification and the signalling. It also has standards for Disk-like devices, and human-interface devices like keyboards and mice. By producing hardware that conforms to these standard specifications, a manufacturer can save time by not needing to produce drivers. This is useful to a robot builder, because it means a lot of assumptions can be made about a device if it conforms.
</p>
<h2  id="Phidgets">Phidgets</h2>
<p>Phidgets are a range of actuators that can be connected directly to a computer. They could be used with a laptop or MiniMac to produce a rather large and expensive robot. While they are handy, and simple, they are very costly, and require an on board computer.
</p>
<p>With no exceptions, a <a a="" brain")="" for="" href="/wiki/microcontroller.html" robot"="" title="A programmable digital controller (or ">microcontroller</a> and a set of servo's and motors is a more flexible, smaller and cheaper (by orders of magnitude) option, although they do take a little more effort. That even includes kits as extensive as the <a href="/wiki/lego.html" title="The best known construction toy">Lego</a> <a href="/wiki/nxt.html" title="Legos NeXT generation robotics kit">NXT</a>
</p>
<h2  id="USB_and_Microcontrollers">USB and Microcontrollers</h2>
<p>When evaluating <a a="" brain")="" for="" href="/wiki/microcontroller.html" robot"="" title="A programmable digital controller (or ">microcontrollers</a> that boast USB, be clear on whether that is USB host, or USB device. Only a host may have devices attached to it, and most controllers are merely devices. As mentioned above, the <a href="/wiki/nxt.html" title="Legos NeXT generation robotics kit">NXT</a> allows a PC to upload to it, or control it via <a href="/wiki/usb.html" title="Universal Serial Bus">USB</a>, but would not be usable with Phidgets.
</p>
<div align="center">{AMAZONSELFOPTLINK(pub=&gt;orionrobots-21)/}</div>
