---
layout: page
title: Bluetooth Serial and USB
date: 2004-11-16 23:09:10
---
<p>The <a href="/wiki/mindstorms.html" title="A Robotic construction toy system from Lego">Mindstorms</a> Vision Command camera was, lets face it, a disappointment for one simple reason - that you could not use it effectively on a mobile robot.  Besides that, there are a million and one reasons you would want some kind of wireless comms with a robot.
</p>
<p>For cameras specifically, you can buy wireless cameras, and receivers - though you may have fun trying to get one which works with a <a href="/wiki/bluetooth.html" title="Bluetooth">Bluetooth</a> <a href="/wiki/universal_serial_bus.html" title="Universal Serial Bus">USB</a> port - suggestions are welcome!
</p>
<p>Two new technologies are <a href="/wiki/wifi.html" title="Wireless Lan">WiFi</a> and <a href="/wiki/bluetooth.html" title="Bluetooth">Bluetooth</a>.
</p>
<p><a href="/wiki/wifi.html" title="Wireless Lan">WiFi</a> is a <a href="/wiki/wireless.html" title="Wireless">Wireless</a> <a href="/wiki/lan.html" title="Local area network">LAN</a> networking protocol.
</p>
<p><a href="/wiki/bluetooth.html" title="Bluetooth">Bluetooth</a> is a wireless serial transmission protocol - mostly for small <a href="/wiki/pda.html" title="Personal Data Assistant">PDA</a> communications - a much more lightweight solution - and tends to offer encrypted communications at less than 1Mbs - this is ideal for control commands and uploading programs, but not a great deal of use for interfacing high data output systems like cameras.
</p>
<p>Both operate by radio signalling in the 2.4Ghz range.
</p>
<p>Implementing either by hand may be time consuming and expensive - but there are add on chips/drop in systems to do this.
</p>
<p>Considering that postage stamp sized web-server chips which plug in to microcontrollers now exist(with an RG-45 connector), you could put a very small <a href="/wiki/wifi.html" title="Wireless Lan">WiFi</a> access point in there. But this is still an awkward and complicated procedure - and most commercially available access points are too big and draw too much power.  <a  href="http://www.iosoft.co.uk/wlan2.php" rel="external" target="_blank">iosoft</a> have an example of a system one might use.
</p>
<p>An interesting use of Wi-Fi and robotics is the shmoo robot <a href="/wiki/wifi.html" title="Wireless Lan">WiFi</a> <a  href="http://news.com.com/2100-1039-5059541.html?tag=nl" rel="external" target="_blank">Guard Dog</a>.
</p>
<p>One rather nice solution I saw was a company in the states which offer <a href="/wiki/universal_serial_bus.html" title="Universal Serial Bus">USB</a> and <a href="/wiki/serial_data_stream.html" title="Serial Data Stream">Serial</a> cables - with a <a href="/wiki/bluetooth.html" title="Bluetooth">Bluetooth</a> based physical layer.  Because you pair up each end of the cable - they are uniquely connected.  They are <a href="www.aircable.net" rel="">AirCable</a>.  Sadly- they only recommend the USB cable for printers - so could you run a camera off it?  If you could it may be fairly slow on <a href="/wiki/bluetooth.html" title="Bluetooth">Bluetooth</a>.
</p>
