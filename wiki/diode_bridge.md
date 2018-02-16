---
layout: page
title: Diode Bridge
date: 2005-09-10 13:18:24
---
<h1  id="Overview">Overview</h1>
<p>The <a class="wiki" href="/wiki/diode.html" title="Diode">diode</a> bridge is a common and useful circuit. You will see it time and again, and it is a construct worth being aware of.
</p>
<p>
</p>
<h1  id="How_it_works">How it works</h1>
<p>Take a look at this circuit:
<br/> <a class="internal" href="browseimage148"> <img class="img-responsive" src="image148&amp;thumb=1"/> </a>
</p>
<p>Examining this, you could substitute the RCX input for any AC input that has been stepped down to around 6-9v. The <a class="wiki" href="/wiki/diode.html" title="Diode">diodes</a> form a small diamond shape -though not always in this clear form, it is better if you try to use it in diagrams as its purpose is then clear. There are two diodes facing <a class="wiki" href="/wiki/cathode.html" title="The Negative Electrode">cathode</a> towards (arrow in) the positive DC line, and two facing away from the negative line. These are then connected to the AC inputs.
</p>
<p>This means that when an AC input is positive, the diode connecting it to the positive line allows it through and you get a positive signal there, but when it is negative - then it is only allowed down through the diode connecting the input to the negative line. Having both lines connected like this means that as they reverse polarity, they conduct on opposite outputs - so the outputs are always at the same polarity.
</p>
<h1  id="Uses">Uses</h1>
<p>It used for one of two main functions:
</p>
<ol><li> Used with a capacitor to convert <a class="wiki" href="/wiki/ac.html" title="Alternating Current">AC</a> supplies to a <a class="wiki" href="/wiki/dc.html" title="Direct Current">DC</a> one
</li><li> Allow a circuit to be used at any orientation (uncommon)
</li></ol><p>
<br/>The first of these is found in just about every power adaptor (wall wart) you will come accross. It is a very, very common circuit.
</p>
<h2  id="Orientations">Orientations</h2>
<p>Breifly examining the latter, you must be aware that there is a small voltage drop accross each diode of around 0.6v giving a net result of a 1.2v drop. In a 9v application, that may bring the voltage below an acceptable level. The one place it is recommended is if you are building custom <a class="wiki" href="/wiki/lego_rcx.html" title="The Lego RCX">Lego RCX</a> devices, which may need to be connected at multiple orientations.
</p>
<p>RCX output power circuit - click to Enlarge
<br/> <a class="internal" href="browseimage66"> <img class="img-responsive" src="image66&amp;thumb=1"/> </a>
</p>
<p>RCX Sensor power circuit - click to Enlarge
<br/> <a class="internal" href="browseimage115"> <img class="img-responsive" src="image115&amp;thumb=1"/> </a>
</p>
<h1  id="Planning_one_for_your_needs">Planning one for your needs</h1>
<p>If you are building a circuit with a bridge, you need to be aware of a few things. First, as mentioned above, the voltage drop. You will want to make sure that the input AC voltage is at least 1.2v above the amount you want. If this is a little over, you can always use a Voltage Regulator in the DC circuit to bring it down a little (say from 10.8 to 9v having used a 12v AC input).
</p>
<p>Every diode has a reverse bias breakdown voltage. What this means, is that a certain voltage with the wrong polarity, a diode can break down and conduct anyway. You probably want to make sure your diodes breakdown voltage is a fair amount more than the required input voltage.
</p>
<p>Also, you need to be sure that the diode you are using can handle the power requirements. You can work this out by estimating the current and voltage, then multiplying them. Again - to be safe, make sure its a fair amount above this - running it with a very close call is just asking for a damaged diode.
</p>
<p>Take into account that at higher power levels, diodes may need heatsinks as like any high voltage circuit, they can get pretty hot.
</p>
