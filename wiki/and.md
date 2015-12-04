---
layout: page
title: AND
date: 2005-09-09 14:28:43
---
<p>This is a <a class="wiki" href="/wiki/boolean.html" title="Boolean">Boolean</a> operation, which gives a result of true only when its first input "AND" second input are true (in the case of a two input AND).
</p>
<p><img class="img-responsive" src="image120"/>
</p>
<p>A <a class="wiki" href="/wiki/truth_table.html" title="Truth Table">Truth Table</a> for this operation:
</p>
<table class="normal" id="fancytable_1"> <thead> <tr> <th>Inputs</th> <th></th> <th>Output</th> </tr> </thead> <tbody> <tr> <td class="odd"><strong>A</strong></td> <td class="odd"><strong>B</strong></td> <td class="odd"><strong>C</strong></td> </tr> <tr> <td class="even">0</td> <td class="even">0</td> <td class="even">0</td> </tr> <tr> <td class="odd">0</td> <td class="odd">1</td> <td class="odd">0</td> </tr> <tr> <td class="even">1</td> <td class="even">0</td> <td class="even">0</td> </tr> <tr> <td class="odd">1</td> <td class="odd">1</td> <td class="odd">1</td> </tr> </tbody> </table>
<p>
<br/>Note that AND gates with more than two inputs exist.  The rule for them is that the output is only true when all the inputs are true.  These are very useful for simple pattern matching - Ie a logic element only active with a certain input.
</p>
<h1  id="When_would_I_use_this_">When would I use this?</h1>
<p>Like all boolea operations, it is useful for evaluating certain conditions are true. Say you want a robot to only move forward if there is sufficient battery power, and there are no obstructions.
</p>
<p>It also used for clocking. if you have a circuit which may at any time generate a true condition, but you only want the next circuit to act on it when there is a clock pulse, then you use an AND gate to combine the clock signal with the other signal. This is regularly used to synchronise the operation of digital circuits.
</p>
<p>Combined with <a class="wiki" href="/wiki/not.html" title="NOT">NOT</a> and <a class="wiki" href="/wiki/or.html" title="OR">OR</a> you can build extremely complex logic. It is this logic, in fact, which drives your home computer, your mobile phone and most other digital apparatus.
</p>
<p>
</p>
<h1  id="How_could_I_build_a_simple_demonstration">How could I build a simple demonstration</h1>
<p>This simple circuit/concept can be easily demonstrated, with a prop that takes minutes to build.
</p>
<h2  id="Required_Materials">Required Materials</h2>
<ul><li>2 Electrical Switches/buttons - push to make
</li><li>Some jump leads with clips
</li><li>A power supply (approv 5/6v) - A bench supply or fresh batteries will do
</li><li>An <a class="wiki" href="/wiki/led.html" title="Light Emitting Diode">LED</a>
</li><li><a class="wiki" href="/wiki/resistor.html" title="Resistor">Resistor</a> (around 470)
</li></ul><h2  id="Optional_Materials">Optional Materials</h2>
<ul><li>Mounting cardboard
</li></ul><p>
</p>
<h2  id="Required_Tools:">Required  Tools:</h2>
<ul><li>Soldering Iron + Stand and Solder
</li><li>Clamp/Helping Hands
</li><li>Safety Goggles
</li></ul><p>
</p>
<h2  id="Optional_Tools">Optional Tools</h2>
<ul><li>Cardboard cutting scissors
</li><li>Pens
</li><li>Multimeter
</li></ul><p>
</p>
<h2  id="Building_it">Building it</h2>
<p>There is only a little soldering here, and if you have built the <a class="wiki" href="/wiki/simple_parallel_port_led_board.html" title="How to attach and program an LED to the parallel port on a PC">Simple Parallel Port LED Board</a>, you may not need to do any soldering at all. Note though, because of how little there is, the soldering will be <a class="wiki" href="/wiki/freeform.html" title="FreeForm">Freeform</a>.
</p>
<p>You need to take the <a class="wiki" href="/wiki/led.html" title="Light Emitting Diode">LED</a> and identify the <a class="wiki" href="/wiki/anode.html" title="The positive electrode">Anode</a> - this is the cable on the <strong>opposite side</strong> to the flat edge. Using the clamp to hold the cables in place, solder the resistor to this lead.
</p>
<p>Now clip the jump leads to the switches - wiring them in series. This means the positive rail from the power supply must be wired to the contact on one switch, the next contact wired to a contact on the next switch, and the following contact wired to the resistor (on the LED), and the <a class="wiki" href="/wiki/cathode.html" title="The Negative Electrode">Cathode</a> of the LED wired to the negative rail on the power supply.

I then suggest you mount the demo on a piece of card - labeling one of the switches/buttons A, one of them B, and then labelling the LED C. If you are feeling fancy, you could then draw the Logic Symbol for the and (As shown above) between them.

<h2  id="Testing_it">Testing it</h2>
<p>Apply power to the circuit. The LED should be turned off - if it is already on, check that you have not used push to break switches.
<br/>Now try the combinations. Turn A) on, the LED should remain unlit, turn A) off and <img alt="B-)" class="img-responsive" src="img/smiles/icon_cool.gif" title="cool"/> on, the LED should still remain until.
<br/>Finally turn on A) and <img alt="B-)" class="img-responsive" src="img/smiles/icon_cool.gif" title="cool"/>, and the LED should light. If the <a class="wiki" href="/wiki/led.html" title="Light Emitting Diode">LED</a> still does not light, I suggest you first check the power supply, then check the switches, and your connections to the switches using a multimeter. Check that you have not used to high a resistance, and check your power alone lights the LED.
</p>
<h2  id="Demonstrating_with_it">Demonstrating with it</h2>
<p>You can then use this prop to show that the LED only lights when both A and B are on - providing a test of two seperate conditions. If you use a simple situation role play, you can quite easily convey the principle.
<br/>Example Situation:
<br/>You are in the canteen, and you are deciding if you should buy food there or somewhere else. A basic condition to meet is that A) The canteen is currently serving a dish you like, and <img alt="B-)" class="img-responsive" src="img/smiles/icon_cool.gif" title="cool"/> You have enough money in your wallet. You would only buy food if both of the conditions were met.
</p>
