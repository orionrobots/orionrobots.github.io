---
layout: page
title: Electronic Relay
date: 2007-01-28 16:33:27
---
<p>A Relay is an Electromagnetically Controlled Switch with moving mechanical contacts. It consists of a coil around a metal core acting as an electromagnet<a class="wiki wikinew for-review" title="Create page: electromagnet">?</a>, which when engaged, pulls a switch bar over (much like a <a class="wiki" href="/wiki/solenoid.html" title="Solenoid">Solenoid</a> ).
</p>
<p>You will find them in vehicle electronics (for example indicators - hence the ticking sound), modems, phone exchanges, older alarm systems, CRT computer monitors and in older or larger robots.
</p>
<p>This component can be used to allow low voltage circuits to safely control much higher voltage devices, and vice-versa. Relays are for the most part superseded by Power <a class="wiki" href="/wiki/transistor.html" title="Transistor">Transistor</a> technology, but their ability to control much larger currents still puts them in places for controlling high power devices - like industrial motors, large pneumatic solenoids and also for diverting large currents or voltages.
</p>
<p>The switching speeds of relays are much lower than that of silicon technology- and the fact that they had moving parts meant that they would need replacing after relatively short periods. A power transistor normally has a breakdown voltage, at which it will not be isolating the input and output circuits. With a relay, you can be at much greater voltages before you risk danger of the isolation being compromised - although the relay might still have been damaged, you save upstream or downstream systems being completely fried. One way to achieve a similar level of isolation without the bulk or gradual wearing down of moving parts in a relay is to use opto-isolators.
</p>
<h1  id="Using_Relays_In_a_Robot">Using Relays In a Robot</h1>
<p>If you already have a relay control board, you may want to try and use it to build a robot. There a couple of well known constructs that are useful to know.
</p>
<h2  id="The_Relay_H_Bridge">The Relay H Bridge</h2>
<p>A H-Bridge is called so because it sits either side of a motor and its configuration really does look like a H.
</p>
<p>You take two single pole relays with a double toggle (two possible positions). On each relay, one position is connected to positive voltage, and one to the ground. You then connect the two relays poles to either side of the motor. Ensure that the two relays positions are opposite, and connect their coils to the same control output. You can then control the direction of the motor using this voltage. But how about turning the motor on and off?
</p>
<p>To do this you then take a third relay, and place it between what was the positive position fo the two relays, and the positive supply- so the motor can be turned on by turning on this relay.
</p>
