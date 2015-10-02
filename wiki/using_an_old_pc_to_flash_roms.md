---
layout: page
title: Using An Old PC To Flash Roms
date: 2004-11-30 23:56:21
---
<p>If you have an old PC lying around, or even a relatively new one, it is actually possible to hot swap a BIOS. It is possible to use this fact to program EPROMs.
</p>
<p><strong>DISCLAIMER: This is a RISKY business- so either take proper precautions or use an old PC nobody wants.</strong>
</p>
<p>Most PC's have a flash bios socket. The geometry of these BIOS's are pretty standard, and they specify the size in the motherboard user manuals. You will need Flash Roms with the right geometry, and you should design your circuits around it's requirements. These sockets usually have limitations in how large a ROM they can support- be aware of this before you make your purchase.
</p>
<p>We recommend you use a commercial BIOS switcher, allowing you to harmlessly remove the backup bios - replacing it with a blank rom. They are also a useful device for actually backing up your bios. Try to get one with a cable - otherwise one close to the bios socket could make things harder. It is probably possible to make your own one - though the number of soldering connections, and getting hold of a switcher with that many pins could be difficult. For the most part - it is a straight switch - but they probably have some supression capacitors to avoid spikes and surges when switching.
</p>
<p>If you dont have a device like this- you can swap it while the machine is on - but you must be careful not to touch other components while levering it out. This is a tricky operation - and I really do not recommend it. A BIOS switcher is considerably cheaper than a real EPROM programmer, and also considerably cheaper than a damaged PC.
</p>
<h1  id="Programming_the_Flash_Rom">Programming the Flash Rom</h1>
<p>All bios's have an online program to flash the bios with a new one. Create your image - ensuring you observe any checksum protocols. Use a utility like "awdflash.exe" to write it.
</p>
<p>It is recommended you do all of this from a bare DOS boot disk, with the flash utility and the image. There are linux programs to flash bios's - which do not require rebooting in DOS - and give you more flexibility to verify and check your image. Either way - you want to minimize other system activity - running this under Windows is highly discouraged.
</p>
<p>After creating the disk - and shutting down, fit the switching device - placing your original bios in one side, and the blank bios in the other. Make sure your original one is selected - then boot the machine with the disk(or into linux).
<br/>One the system has finished booting, and presented you with a prompt - this is the time to switch the bios. After switching to the blank bios - flash it - and verify it.
</p>
<p>Ensure that you switch back to your original bios before removing it. Never remove a bios that is selected. If you want your PC to function normally - remember to switch back to your original bios before resetting.
</p>
<p>This method could be used for creating low-level boot bios roms for x86 based robot control boards - in which case it may be beneficial to examine some of the original bios code.
</p>
<p><a  href="http://www.pcengines.ch/tinybios.htm" rel="external" target="_blank">TinyBios</a> - Open Source minimal embedded X86 bios code
</p>
<p><a  href="http://tools.devchannel.org/devtoolschannel/03/12/08/1758202.shtml?tid=46" rel="external" target="_blank">Flexibility in ROM: A Stackable Open Source BIOS</a> - An artical reviewing linux base open source bios's
</p>
<p><a  href="http://www.bit-tech.net/review/54" rel="external" target="_blank">BIOS Saviour</a> - A review of a bios switching device
</p>
<p><a  href="http://www.theoverclockingstore.co.uk" rel="external" target="_blank">The Overclocking Store</a> - A store which had a lot of hardware hacking stuff
</p>
