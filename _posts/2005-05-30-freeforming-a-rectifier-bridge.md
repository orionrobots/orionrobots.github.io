---
created: 2005-05-30 09:03:32
description: Freeforming a Rectifier Bridge
tags: [diode,electronics,waveform,oscilloscope]
title: Freeforming a Rectifier Bridge
layout: post
gal: /galleries/gallery-8-signal-generator-diode-bridge/
---
<center>Here I have disabled the flash on my camera - so the readers can get a clear view of the resulting waveform.</center>

![Clear waveform]({{page.gal}}/314-clear-result.jpg){: .img-responsive .center-block}

The diode bridge has been an essential part of making active sensors for the Lego Mindstorms RCX. It is also known as a full-wave rectifier as it will rectify AC current into DC, or (as in the case of the Lego connector), allow something to be connected at either polarity, even with fairly complicated circuitry. It does come with a minro disadvantage in that the voltage is dropped a little across each diode, and where possible, a mechanical means to guarantee polarity may be better.

This can take up some space, and so freeforming it is an interesting way to save some. THis is also a fairly simple introduction to the concept of freeforming circuit blocks and can be used for other circuits with some imagination and thought. It requires no PCB, or veroboard, mostly just the components and a good iron. The full tool list is below - but it is fairly minimal.

Before connecting anything to an RCX, or any other system, be sure to test it. I'll discuss a few different methods of testing the module below.

# What is the diode bridge?

This circuit rectifies a waveform oscillating around 0 such that it is now oscillating above zero. It does so by using diodes - which allow current to flow in only one direction. These are set up in a group such that in the output from this one pin is always negative, and another is positive.

<center>The two wave forms superimposed</center>
![]({{page.gal}}/319-superimposed.jpg){: .img-responsive .center-block}

I do not have a dual trace oscilloscope, so this was the only way to do it.

I note that the calibration of the scope has changed between the two measurements - but lets examine the results ignoring that.

There also appears to be a DC offset on the diode outputs - not sure about that, given that I took it off the sinewave, however I can reason that it is shorter due to the 1.2 volts or so used by the bridge itself. The fact that the peaks are symmetrical shows that it is balanced and stable. 

In fact - if there was a DC offset on the input waveform, there would be two different sets of peaks - so it may merely be down to the dial on the oscilloscope. Any other explainations you could offer?

If you look at the scope output - with the input wave and the converted wave superimposed (done later with a graphics program, and try to ignore the phase here), you will see that peaks and troughs both become peaks on the output waveform. It is worth noting that the diodes do also have a voltage drop across them, so the peaks of the output are less than the peaks of the input.

This circuit is most commonly used when converting an AC source to a DC source, and then with a smoothing cap to change that sawtooth like waveform into a smoother line waveform.

![]({{page.gal}}/609-bridge-schematic.png){: .img-responsive .center-block}

In the context of the RCX, where the pads for connecting sensors and outputs are not polarised, the output may be connected in any orientation, so this also safely ensures that the voltage ends up at the right polarity in your circuit. It is your decision in deciding if the space consumption and voltage drop are worth making for the ability to be able to plug in at any orientation.

By freeforming it, as seen below, the space issue can be made much less, although modern electronics stockists now carry a single component which can carry this out.

# Tools You Will Need

When you build anything, be sure to do it with the right tools and do it safely. I've tried to keep the tools to the minimum here, but please do make sure you do have the basics.

![]({{page.gal}}/258-workshop.jpg){: .img-responsive .center-block}

## Tooling Up Safely - Goggles

Basic Safety

* A solid, well lit desk space, free from clutter and interruptions.
* A pair of safety goggles

Goggles - I know many people hate them, but trust me - after having ended up with dry paint flakes in my eye once, I seriously value these - I had to actually go to a specialist eye hospital to have that removed. that was paint. Hot solder would be considerably worse. So - look after your eyes - they are probably the most valuable thing you have after your brain. They are also quite a convenient entry point to your brain too - another good reason to keep them covered!

## Tooling up - Stuff to do the job

* A soldering Iron - you will not get far without one of those.
* A sponge & Holder for the soldering Iron
* Long nose pliers - you'll need these to make the bends in the wires.
* A positionable mini-clamp - aka Helping Hands. There is some pretty tricky soldering, so unless you have 3 heatproof hands - this is essential.

<a class="wiki" href="/wiki/robot_building_safety.html" title="Building robots can be dangerous - tips to help your safety">Robot Building Safety</a>

# How to Freeform it.

First, choose your diodes. Read <a class="wiki" href="/wiki/diode_bridge.html" title="Diode Bridge">Diode Bridge</a> to ensure that you understand how the circuit works, and that the power rating and electronic characteristics are suitable. All 4 should be identical, and have longish leads. A type suggested are 1 amp 1N4001. These are simple general purpose rectifiers - ideal for this.

<center>The four 1N4001 diodes on bandolier tape.</center>

![]({{page.gal}}/261-diodes-on-a-tape.jpg){: .img-responsive .center-block .col-sm-6} ![]({{page.gal}}/262-diodes-2.jpg){: .img-responsive .center-block .col-sm-6} 
![]({{page.gal}}/263-diodes-2-sets.jpg){: .img-responsive .center-block .col-sm-6} 
![]({{page.gal}}/264-tape-removed.jpg){: .img-responsive .center-block .col-sm-6} 

<div class="clearfix"></div>
If you can find diodes on bandolier tape, as those produced by Maplin and other electronic component retailers are sold, this will make your life easier later, but it is not essential though.

# Method:

Be sure you are wearing your safety goggles for this. I would strongly recommend reading this guide <a class="wiki" href="/wiki/robot_building_safety.html" title="Building robots can be dangerous - tips to help your safety">Robot Building Safety</a>.

<center>What we intend to end up with</center>
![]({{page.gal}}/157-bridgefreeforms4.png){: .img-responsive .center-block}

## Step 1 First Bend

![]({{page.gal}}/610-freeform-bridge-step-1.png)

Use pliers to make a bend in one leg of a Diode at the red X.

Needle nose pliers should give a nice clean bend.
Leave a little curvature in it - too sharp a bend may become weak and snap.

<h2  id="Step_2_Solder_the_legs">Step 2 Solder the legs</h2>

<img class="img-responsive" height="132" src="image611" width="400"/>
Solder where the legs cross. There should be some of the leg sticking out from then end, this will be one of the contacts for the module.

This is tricky - use the helping hands to hold it all together, and use one hand for the iron, and the other for the solder.

<h2  id="Step_3_Trim_one_leg">Step 3 Trim one leg</h2>

<img class="img-responsive" height="76" src="image612" width="232"/>
Cut off the excess going out to the side.
Trim as close to the solder joint as you can, but don't snip the joint.

<h2  id="Step_4_-_repeat_for_an_opposite_pair">Step 4 - repeat for an opposite pair</h2>

<img class="img-responsive" height="284" src="image613" width="400"/>
The pair should look like this.
Repeat this on the opposite end for two more diodes.
You should now have 2 diodes joined at their cathodes, and 2 more joined at their anodes.

<h2  id="Step_5_-_Bend_one_set_of_legs_upwards">Step 5 - Bend one set of legs upwards</h2>

<img class="img-responsive" height="262" src="image614" width="400"/>
On only ONE set of diodes, bend the legs upward at the red crosses.

<h2  id="Step_6-_Bring_the_two_pairs_together">Step 6- Bring the two pairs together</h2>

<img class="img-responsive" height="79" src="image615" width="240"/>
Now bring the two pairs together.
A dab of glue between the layers, allowed to set will make the next step easier. Be sure that the legs from the lower set are touching the upper set.

<h2  id="Step_7_-_Solder_the_lower_legs_to_the_upper_ones">Step 7 - Solder the lower legs to the upper ones</h2>

<img class="img-responsive" height="79" src="image616" width="240"/>
This is a very tricky step.
Using the helping hand clamps to hold the diodes, solder the lower legs to the upper legs where they cross

<h2  id="Step_8_and_completion">Step 8 and completion</h2>

<img class="img-responsive" height="79" src="image617" width="270"/>
To complete the module, trim the excess off the legs.
The bridge is now ready to be used in a circuit.

The diagram shows the connections - be sure to observe the polarity on the output.

<h2  id="Testing_the_diode_bridge">Testing the diode bridge</h2>

<img alt="Here you get a good view of the full rig, including one of the better shots of the signal generator (in the transparent box).



The freeform bridge is tiny in the jump-leads, enough that I nearly dropped and lost it. That is a good sign though - it means it is likely to fit in a Lego brick.

" class="img-responsive" height="300" src="image309" width="400"/>

I tested mine with an Oscilloscope and a sine wave from a signal generator.

First connect a power source to the signal generator, and the output of the signal generator to the input of the bridge. I then used croc clip oscilloscope probes to connect the output of the bridge to the Oscilloscope.

It is worth having a dual trace oscilloscope, so you can see the difference in the signal from the generator, and after it has been filtered by the bridge.

In the picture - the large transparent box is my signal generator - a small velleman kit one + an amplifier. The freeformed bridge is tiny and barely visible in the photo compared with the bench kit to test it.

<img alt="This is my oscilloscope showing the full wave generated by my signal generator - its quite clean. Sorry - I have not got the full calibrations in shot, so the frequency is not clear." class="img-responsive" height="300" src="image315" width="400"/> <img alt="Here I have disabled the flash on my camera - so the readers can get a clear view of the resulting waveform." class="img-responsive" height="300" src="image314" width="400"/>



