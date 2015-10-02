---
layout: page
title: Building A Game Scoreboard
date: 2005-08-25 21:17:20
---
<div class="titlebar">Introduction</div>
<p>This is a fairly simple device built with one 4000 series IC per digit, and one LED Display per digit. It can be used for a number of purposes- for example a Bloodbowl score counter. It is controlled with simply an increment button per player, and a single reset button.
</p>
<div class="titlebar">Required Parts</div>
<ul><li> Breadboard/prototyping board
</li><li> 1 or more seven segment LED displays
</li><li> 7 x 330 &amp;Ohm; resistors per display
</li><li> 1 x 4026 IC per display
</li><li> Lots of jumper wires
</li><li> 1 DIL Socket per 4026. If the displays are small enough - I recommend using sockets for those as well
</li><li> 1 Push to make switch for the reset
</li><li> 1xPush To make switch for each score (or player)
</li><li> 1 x 1k resistor per score
</li><li> 1 x10pF Electrolytic Cap per score
</li><li> 1xPower Switch
</li><li> 5v Power supply
</li></ul><p>
</p>
<div class="titlebar">Required Tools</div>
<ul><li> Soldering Iron
</li><li> Side cutters
</li><li> Lots of solder
</li><li> Helping hands
</li><li> Multi-meter (recommended but not essential)
</li></ul><p>
</p>
<div class="titlebar">Theory</div>
<p>The first thing to examine is the counter. The 4026 provides this complete functionality on one package. It provides a clock line- which by triggering it will cause the counter to advance one step - you would wire this to a debounced pulser. It also has a reset input - to reset the device to Zero. Unfortunately - when you turn the device on, there is no way to predict the state - so you should press the reset button.
</p>
<p>What is a debounced pulser? It is a fancy way of saying a switch without noise. When you push a button, it actually bounces a little before settling - just like many other objects in a physical collision. This could be a problem when you press it once, and the counter jumps by 3 or 5. The way around it is to introduce a capacitor - which only allows it to trigger once within a set period. A small value is required, something which introduces a delay of less than a second - around half a second is resonable.
</p>
<p>We can probably skip the debouncing on the reset circuit, and just use them for the triggers. The easy way is to use a delay cap. The delay cap will allow current to flow for half a second after the circuit is made, and then be allowed to drain away when the circuit is broken. How can this be done? With a relatively high value resistor - the cap can fill up, and this resistor be connected in parallel with the CAP and ground, with another resistor in series between the cap and +ve (positive voltage).
</p>
<div class="titlebar">Building It</div>
<p>I will provide shortly a circuit diagram, and matrix board layouts for this circuit.
<br/>Start by soldering the IC sockets in place, ensuring the notches (showing PIN 1) are the right way up.
<br/>Follow by soldering <em>all</em> the resistors in place (there are lots of them and this will be fiddly).
<br/>Next solder in all the jumper wires. Solder in the capacitors, the buttons, the power switch and finally the power. You probably want to put them off the board so they can be manouvred inside what ever enclosure you use.
</p>
<p>Now - BEFORE inserting the displays into their sockets (or soldering them if they have no sockets), you should test the connections from the output of the 4026 sockets to the display sockets - ensure that they are in the correct places and that each of them has roughly 330 &amp;ohms; displayed. Test that none of the pins are shorted. Only when you are happy with this, insert (or solder) the displays, and then the 4026s.
</p>
<p>Now its time to try it - ensure you have prepared your power supply, and turn on the power. The displays should glow - although they display any random number. Press the reset button to set them all back to 0. If all is well -you should see this with no problems. You can then press a clock button and see the corresponding display increment. I recommend going all the way through to 9 and checking the numbers formation is correct, and then ensuring they loop back to zero.
</p>
<div class="titlebar">Furthar Developing It</div>
<p>We could sort it out so you dont need to press the reset button after turning it on by using a delay circuit giving half a second pulse to the reset line after power on.
</p>
<p>Another improvement would be multiple digits per player - which would be fairly simple, in that you can wire the output from one clock to the next. The accepted way to do this when counting in tens (divide-by-ten) is to wire the 8 line to the next chips clock line - so when the eight line goes high, then low (8,9,0), it will increment.
</p>
<p>One thing that may save a bit of space, and make the soldering a little easier would be to use a resistor pack instead of 7 seperate ones.
</p>
<p>Following with the theme of our previous session - we can even rig this up so a <a class="wiki" href="/wiki/parallel_port.html" title="Parallel Port">Parallel Port</a> can be used to trigger the clock, and reset buttons - giving a nice big counter display.
</p>
<p>
<br/>{GOOGLEBAR(pub=pub-1306094303661715)/}
</p>
