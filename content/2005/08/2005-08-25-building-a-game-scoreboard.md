---
layout: page
title: Building A Game Scoreboard
tags: [electronics]
date: 2005-08-25 21:17:20
---
## Introduction

This is a fairly simple device built with one 4000 series IC per digit, and one LED Display per digit. It can be used for a number of purposes- for example a Bloodbowl score counter. It is controlled with simply an increment button per player, and a single reset button.

## Required Parts

* Breadboard/prototyping board
* 1 or more seven segment LED displays
* 7 x 330 &amp;Ohm; resistors per display
* 1 x 4026 IC per display (or A single Arduino)
* Lots of jumper wires
* 1 DIL Socket per 4026. If the displays are small enough - I recommend using sockets for those as well
* 1 Push to make switch for the reset
* 1xPush To make switch for each score (or player)
* 1 x 1k resistor per score
* 1 x10pF Electrolytic Cap per score
* 1xPower Switch
* 5v Power supply

(paid links)

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&language=en_GB&marketplace=amazon&region=GB&placement=B07GTSQV9S&asins=B07GTSQV9S&linkId=82ee8f77d920264d2ff37ac6cf2e1e98&show_border=true&link_opens_in_new_window=true"></iframe><!-- led displays-->
<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&language=en_GB&marketplace=amazon&region=GB&placement=B07DK2T7MY&asins=B07DK2T7MY&linkId=ff7611d0de64983b6aaf802e15c70382&show_border=true&link_opens_in_new_window=true"></iframe><!-- resistor networks -->
<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&language=en_GB&marketplace=amazon&region=GB&placement=B072BMYZ18&asins=B072BMYZ18&linkId=a23f99e072fabcb6d2c661fbb04bc9c7&show_border=true&link_opens_in_new_window=true"></iframe><!-- arduino nanos - for ICs -->
<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&language=en_GB&marketplace=amazon&region=GB&placement=B08QS6961R&asins=B08QS6961R&linkId=0c14ddf5760b07dcaec823f6507e32f8&show_border=true&link_opens_in_new_window=true"></iframe><!-- jumper wires -->

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&language=en_GB&marketplace=amazon&region=GB&placement=B01N67ICEC&asins=B01N67ICEC&linkId=4d20b8e0cfbb655e6274c116fdf9bdf5&show_border=true&link_opens_in_new_window=true"></iframe><!-- pushbuttons -->
<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&language=en_GB&marketplace=amazon&region=GB&placement=B07BMPVDMD&asins=B07BMPVDMD&linkId=700cf55692f56e93457284844ffc583d&show_border=true&link_opens_in_new_window=true"></iframe><!-- slide switch -->

## Required Tools

* Soldering Iron
* Side cutters
* solder
* Helping hands
* Multi-meter (recommended but not essential)

## Concept

The first thing to examine is the counter. The 4026 provides this complete functionality on one package. It provides a clock line- which by triggering it will cause the counter to advance one step - you would wire this to a debounced pulser. It also has a reset input - to reset the device to Zero. Unfortunately - when you turn the device on, there is no way to predict the state - so you should press the reset button.

What is a debounced pulser? It is a fancy way of saying a switch without noise. When you push a button, it actually bounces a little before settling - just like many other objects in a physical collision. This could be a problem when you press it once, and the counter jumps by 3 or 5. The way around it is to introduce a capacitor - which filters the bounce noise.

We can probably skip the debouncing on the reset circuit, and just use them for the triggers. The easy way is to use a delay cap. The delay cap will allow current to flow for half a second after the circuit is made, and then be allowed to drain away when the circuit is broken. How can this be done? With a relatively high value resistor - the cap can fill up, and this resistor be connected in parallel with the CAP and ground, with another resistor in series between the cap and +ve (positive voltage).

## Building It

I will provide shortly a circuit diagram, and matrix board layouts for this circuit.

Start by soldering the IC sockets in place, ensuring the notches (showing PIN 1) are the right way up.

Follow by soldering _all_ the resistors in place (there are lots of them and this will be fiddly).

Next solder in all the jumper wires. Solder in the capacitors, the buttons, the power switch and finally the power. You probably want to put them off the board so they can be manoeuvred inside what ever enclosure you use.

Now - BEFORE inserting the displays into their sockets (or soldering them if they have no sockets), you should test the connections from the output of the 4026 sockets to the display sockets - ensure that they are in the correct places and that each of them has roughly 330 &amp;ohms; displayed. Test that none of the pins are shorted. Only when you are happy with this, insert (or solder) the displays, and then the 4026s.

Now its time to try it - ensure you have prepared your power supply, and turn on the power. The displays should glow - although they display any random number. Press the reset button to set them all back to 0. If all is well -you should see this with no problems. You can then press a clock button and see the corresponding display increment. I recommend going all the way through to 9 and checking the numbers formation is correct, and then ensuring they loop back to zero.

## Further Developing It

We could sort it out so you don't need to press the reset button after turning it on by using a delay circuit giving half a second pulse to the reset line after power on.

Another improvement would be multiple digits per player - which would be fairly simple, in that you can wire the output from one clock to the next. The accepted way to do this when counting in tens (divide-by-ten) is to wire the 8 line to the next chips clock line - so when the eight line goes high, then low (8,9,0), it will increment.

One thing that may save a bit of space, and make the soldering a little easier would be to use a resistor pack instead of 7 separate ones.

Following with the theme of our previous session - we can even rig this up so a [Parallel Port](/wiki/parallel_port.html "Parallel Port") can be used to trigger the clock, and reset buttons - giving a nice big counter display.
