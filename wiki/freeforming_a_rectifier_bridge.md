---
layout: page
title: Freeforming a Rectifier Bridge
date: 2013-05-16 09:03:32
---
<p><img alt="Here I have disabled the flash on my camera - so the readers can get a clear view of the resulting waveform." class="img-responsive" height="300" src="image314" width="400"/>The diode bridge has been an essential part of making active sensors for the Lego Mindstorms RCX. It is also known as a full-wave rectifier as it will rectify AC current into DC, or (as in the case of the Lego connector), allow something to be connected at either polarity, even with fairly complicated circuitry. It does come with a minro disadvantage in that the voltage is dropped a little across each diode, and where possible, a mechanical means to guarantee polarity may be better.
</p>
<p>This can take up some space, and so freeforming it is an interesting way to save some. THis is also a fairly simple introduction to the concept of freeforming circuit blocks and can be used for other circuits with some imagination and thought. It requires no PCB, or veroboard, mostly just the components and a good iron. The full tool list is below - but it is fairly minimal.
</p>
<p>Before connecting anything to an RCX, or any other system, be sure to test it. I'll discuss a few different methods of testing the module below.
</p>
<p>
<br/>
</p>
<h1  id="What_is_the_diode_bridge_">What is the diode bridge?</h1>
<p>
<br/>This circuit rectifies a waveform oscillating around 0 such that it is now oscillating above zero. It does so by using diodes - which allow current to flow in only one direction. These are set up in a group such that in the output from this one pin is always negative, and another is positive.<img alt="Here I have used Picasa's collage to try and super impose the two waveforms - not to bad!
I do not have a dual trace oscilloscope, so this was the only way to do it.
I note that the calibration of the scope has changed between the two measurements - but lets examine the results ignoring that.
There also appears to be a DC offset on the diode outputs - not sure about that, given that I took it off the sinewave, however I can reason that it is shorter due to the 1.2 volts or so used by the bridge itself. The fact that the peaks are symmetrical shows that it is balanced and stable. 
In fact - if there was a DC offset on the input waveform, there would be two different sets of peaks - so it may merely be down to the dial on the oscilloscope. Any other explainations you could offer?" class="img-responsive" height="318" src="image319" width="400"/>
</p>
<p>If you look at the scope output - with the input wave and the converted wave superimposed (done later with a graphics program, and try to ignore the phase here), you will see that peaks and troughs both become peaks on the output waveform. It is worth noting that the diodes do also have a voltage drop across them, so the peaks of the output are less than the peaks of the input.
</p>
<p>This circuit is most commonly used when converting an AC source to a DC source, and then with a smoothing cap to change that sawtooth like waveform into a smoother line waveform.
</p>
<p><img class="img-responsive" height="167" src="image609" width="400"/>
</p>
<p>In the context of the RCX, where the pads for connecting sensors and outputs are not polarised, the output may be connected in any orientation, so this also safely ensures that the voltage ends up at the right polarity in your circuit. It is your decision in deciding if the space consumption and voltage drop are worth making for the ability to be able to plug in at any orientation.
</p>
<p>By freeforming it, as seen below, the space issue can be made much less, although modern electronics stockists now carry a single component which can carry this out.
</p>
<h1  id="Tools_You_Will_Need">Tools You Will Need</h1>
<p>
<br/>When you build anything, be sure to do it with the right tools and do it safely. I've tried to keep the tools to the minimum here, but please do make sure you do have the basics.
</p>
<h2  id="Basic_Safety">Basic Safety</h2>
<ul><li> A solid, well light desk space, free from clutter and interruptions.
</li><li> A pair of safety goggles
</li></ul><p>
<br/>
</p>
<h2  id="Basic_Tools">Basic Tools</h2>
<ul><li> A soldering Iron - you will not get far without one of those.
</li><li> A sponge &amp; Holder for the soldering Iron
</li><li> Long nose pliers - you'll need these to make the bends in the wires.
</li><li> A positionable mini-clamp - aka Helping Hands. There is some pretty tricky soldering, so unless you have 3 heatproof hands - this is essential.
</li></ul><p>
<br/><a class="wiki" href="/wiki/robot_building_safety.html" title="Building robots can be dangerous - tips to help your safety">Robot Building Safety</a>
</p>
<h1  id="Tooling_Up_Safely_-_Goggles">Tooling Up Safely - Goggles</h1>
<p>When you build anything, be sure to do it with the right tools and do it safely. I've tried to keep the tools to the minimum here, but please do make sure you do have the basics.
</p>
<p>Basic Safety
<br/>A solid, well lit desk space, free from clutter and interruptions.
<br/>A pair of safety goggles
</p>
<p>
<br/>Goggles - I know many people hate them, but trust me - after having ended up with dry paint flakes in my eye once, I seriously value these - I had to actually go to a specialist eye hospital to have that removed. that was paint. Hot solder would be considerably worse. So - look after your eyes - they are probably the most valuable thing you have after your brain. They are also quite a convenient entry point to your brain too - another good reason to keep them covered!
</p>
<h1  id="Tooling_up_-_Stuff_to_do_the_job">Tooling up - Stuff to do the job</h1>
<p>
</p>
<ul><li> A soldering Iron - you will not get far without one of those.
</li><li> A sponge &amp; Holder for the soldering Iron
</li><li> Long nose pliers - you'll need these to make the bends in the wires.
</li><li> A positionable mini-clamp - aka Helping Hands. There is some pretty tricky soldering, so unless you have 3 heatproof hands - this is essential.
</li></ul><p>
</p>
<h1  id="How_to_Freeform_it">How to Freeform it</h1>
<p>
<br/>First, choose your diodes. Read <a class="wiki" href="/wiki/diode_bridge.html" title="Diode Bridge">Diode Bridge</a> to ensure that you understand how the circuit works, and that the power rating and electronic characteristics are suitable. All 4 should be identical, and have longish leads. A type suggested are 1 amp 1N4001. These are simple general purpose rectifiers - ideal for this.
</p>
<p><img class="img-responsive" height="225" src="image259" width="240"/>
<br/>If you can find diodes on bandolier tape, as those produced by Maplin and other electronic component retailers are sold, this will make your life easier later, but it is not essential though.
</p>
<h1  id="Method:">Method:</h1>
<p>Be sure you are wearing your safety goggles for this. I would strongly recommend reading this guide <a class="wiki" href="/wiki/robot_building_safety.html" title="Building robots can be dangerous - tips to help your safety">Robot Building Safety</a>.
</p>
<h2  id="Step_1_First_Bend">Step 1 First Bend</h2>
<p>
<br/><img class="img-responsive" height="128" src="image610" width="400"/>
<br/>Use pliers to make a bend in one leg of a Diode at the red X.
</p>
<p>Needle nose pliers should give a nice clean bend.
<br/>Leave a little curvature in it - too sharp a bend may become weak and snap.
</p>
<h2  id="Step_2_Solder_the_legs">Step 2 Solder the legs</h2>
<p>
<br/><img class="img-responsive" height="132" src="image611" width="400"/>
<br/>Solder where the legs cross. There should be some of the leg sticking out from then end, this will be one of the contacts for the module.
</p>
<p>This is tricky - use the helping hands to hold it all together, and use one hand for the iron, and the other for the solder.
</p>
<h2  id="Step_3_Trim_one_leg">Step 3 Trim one leg</h2>
<p>
<br/><img class="img-responsive" height="76" src="image612" width="232"/>
<br/>Cut off the excess going out to the side.
<br/>Trim as close to the solder joint as you can, but don't snip the joint.
</p>
<h2  id="Step_4_-_repeat_for_an_opposite_pair">Step 4 - repeat for an opposite pair</h2>
<p>
<br/><img class="img-responsive" height="284" src="image613" width="400"/>
<br/>The pair should look like this.
<br/>Repeat this on the opposite end for two more diodes.
<br/>You should now have 2 diodes joined at their cathodes, and 2 more joined at their anodes.
</p>
<h2  id="Step_5_-_Bend_one_set_of_legs_upwards">Step 5 - Bend one set of legs upwards</h2>
<p>
<br/><img class="img-responsive" height="262" src="image614" width="400"/>
<br/>On only ONE set of diodes, bend the legs upward at the red crosses.
</p>
<h2  id="Step_6-_Bring_the_two_pairs_together">Step 6- Bring the two pairs together</h2>
<p>
<br/><img class="img-responsive" height="79" src="image615" width="240"/>
<br/>Now bring the two pairs together.
<br/>A dab of glue between the layers, allowed to set will make the next step easier. Be sure that the legs from the lower set are touching the upper set.
</p>
<h2  id="Step_7_-_Solder_the_lower_legs_to_the_upper_ones">Step 7 - Solder the lower legs to the upper ones</h2>
<p>
<br/><img class="img-responsive" height="79" src="image616" width="240"/>
<br/>This is a very tricky step.
<br/>Using the helping hand clamps to hold the diodes, solder the lower legs to the upper legs where they cross
</p>
<h2  id="Step_8_and_completion">Step 8 and completion</h2>
<p>
<br/><img class="img-responsive" height="79" src="image617" width="270"/>
<br/>To complete the module, trim the excess off the legs.
<br/>The bridge is now ready to be used in a circuit.
</p>
<p>The diagram shows the connections - be sure to observe the polarity on the output.
</p>
<h2  id="Testing_the_diode_bridge">Testing the diode bridge</h2>
<p>
<br/><img alt="Here you get a good view of the full rig, including one of the better shots of the signal generator (in the transparent box).

The freeform bridge is tiny in the jump-leads, enough that I nearly dropped and lost it. That is a good sign though - it means it is likely to fit in a Lego brick." class="img-responsive" height="300" src="image309" width="400"/>
</p>
<p>I tested mine with an Oscilloscope and a sine wave from a signal generator.
</p>
<p>First connect a power source to the signal generator, and the output of the signal generator to the input of the bridge. I then used croc clip oscilloscope probes to connect the output of the bridge to the Oscilloscope.
</p>
<p>It is worth having a dual trace oscilloscope, so you can see the difference in the signal from the generator, and after it has been filtered by the bridge.
</p>
<p>In the picture - the large transparent box is my signal generator - a small velleman kit one + an amplifier. The freeformed bridge is tiny and barely visible in the photo compared with the bench kit to test it.
</p>
<p><img alt="This is my oscilloscope showing the full wave generated by my signal generator - its quite clean. Sorry - I have not got the full calibrations in shot, so the frequency is not clear." class="img-responsive" height="300" src="image315" width="400"/> <img alt="Here I have disabled the flash on my camera - so the readers can get a clear view of the resulting waveform." class="img-responsive" height="300" src="image314" width="400"/>
</p>
<p>
</p>
