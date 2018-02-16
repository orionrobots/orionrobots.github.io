---
layout: page
title: Oscilloscope
date: 2008-11-03 11:13:38
---
<p> <a class="internal" href="browseimage315"> <img class="img-responsive" src="image315&amp;thumb=1"/> </a>
</p>
<p>In all but the most simple <a class="wiki" href="/wiki/direct_current.html" title="Direct Current">DC</a> circuits, the behaviour of the circuit is not merely a straight line. Timing may be everything, and an efficient way to gauge exactly what is going on, for example showing how a particular capacitor is charging and discharging.
</p>
<p>A basic oscilloscope is a dot on the screen, and the two axes governing its position are controlled by inputs, so the dot moves. If the dot moves fast enough, because of both the refresh time of the screen and human persistence of vision, it will form a solid line. With nothing on the inputs, you would merely see a solid dot in the centre of the screen (presuming it was calibrated and lined up).
</p>
<p>It is normally the case (though this is an configurable thing) that the horizontal control of the dot is through a signal generator in the oscilloscope, which merely sends the dot from left to right, and then back to the left again - this would actually form a sawtooth wave.
</p>
<p><img class="img-responsive" src="image318"/>
</p>
<p>Now if there is no other signal controlling the vertical, you would see a line, or a tracing dot - depending upon the frequency of the control waveform. But once you put an input, you will see the waveform dancing on the line. By adjusting the speed of the dot trace, you are able to "tune in" to the wave form, and most scopes have a "triggering" mechanism which will try to sync up the horizontal trace to the vertical input signal.
</p>
<p>Now you may find that the trace is only very slight, taking up the very middle of the screen. Oscilloscopes should contain an input pre-amp to scale up the input so you can get it to comfortably occupy the screen. It is worth saying that the same scaling is available on the horizontal movement. The good thing about the way they are calibrated is that the adjustment is done in voltage per division - which gives you an easy way to actually measure the amplitude, while the speed of the horizontal dot is given in hz per division, so you can also measure the frequency of your analysed signal.
</p>
<p>Many oscilloscopes allow dual trace, or more traces, which means they have more than one "vertical" input, all controlled by the same horizontal input. The ability to see more than one signal on the screen can be useful.
</p>
<p>Some allow you to hold a waveform, so you can see it for a little longer - this is useful on a very slow trace, where persistence of vision may not apply so well.
</p>
<h1 id="Types_of_Oscilloscope">Types of Oscilloscope</h1>
<p>Before forking out any money for any kind of scope, second hand or new, make sure you are aware of its capabilities, and whether it is really suitable for what you need. Be aware of its operating limits, the sample buffers (in a digital scope), the maximum frequencies, the A to D resolution and so on.
</p>
<p>Here is a brief round up of the different types, their characteristics, and what to look for in them.
</p>
<h2 id="Analog">Analog</h2>
<p>Analog oscilloscopes are the classic type. They are fairly bulky and heavy because they are based on a monochrome CRT tube with one input tied to each of the coils. Other than the preamps and the horizontal signal generation, they tend to be fairly low on additional features.
</p>
<p>They do not suffer the quantization that all digital scopes may do, and this may mean that you can take very precise measurements. These were very expensive - as CRT based equipment normally was, and if you wish to acquire one, it is best done through ebay.
</p>
<p>If you are interested in Lissajous Figures - it is perhaps these that are the best type. The maximum sample rate on these has much to do with the signal generator for the horizontal, and these are more easily pushed up the scale than a digital counterpart.
</p>
<h2 id="Digital">Digital</h2>
<p>Digital Oscilloscopes come in two major flavours, standalone, and PC based ones. All suffer the issue of <a class="wiki" href="/wiki/quantisation.html" title="Digital signal degradation">quantisation</a>. This may be slightly improved by making sure the pre-amps and calibration circuits are all in a stage before the Analog to Digital converters, but in some of the cheapest ones, all of that is done in software.
</p>
<p>Be aware of how many bits the A to D's are, and also check for the maximum sample rate. Because of the digitisation of the waveform, these oscilloscopes tend to offer more types of advanced analysis than an analog based one.
</p>
<h3 id="Standalone_Digital">Standalone Digital</h3>
<p>Standalone digital oscilloscopes are fairly expensive. They offer the ability to store and replay a signal on screen from memory buffers. The larger the buffer the more you will get. Some may have options to connect with PC's or have a disk drive to store signal history. These often come now with LCD screens, but at the price, you may be better aiming at high-range PC based ones.
</p>
<h3 id="PC_based">PC based</h3>
<p>PC based oscilloscopes are now widely available, both <a class="wiki" href="/wiki/usb.html" title="Universal Serial Bus">USB</a> and internal ones. These are very cheap, much cheaper than oscilloscopes have ever been, and are making this vital instrument available to many more hobbyists.
</p>
<p>They tend to delegate a lot of their operation to software, and it is worth being aware as much of the software abilities as the hardware. after all - many use their own custom drivers and the software is not often interchangeable.
</p>
<p>Recently one of the popular electronics magazines (Elecktor Electronics - September 2005) did a roundup of USB ones, and their quality and features vary wildly, but they are definitely available in the sub £100 band right up into thousands.
</p>
<p>As they do not need to carry their own display, they are a lot smaller than any of the standalone types, and some are good enough to be pocket sized, and then combined with a laptop for measurement.
</p>
<h2 id="HomeBuilds">HomeBuilds</h2>
<p>It is possible to get Oscilloscopes on the cheap, but you will miss a lot of the functionality of commercial ones. You may even be able to make basic measurements of this kind (under 44Khz at 16bits usually) using an input to soundcard, but you must remember you have no preamps, current/voltage limiters and could damage the card and your PC. Also you would have to consider where you would get software for such devices. Some of the hobbyist electronics magazines may carry small designs for basic PC scopes, so keep your eyes peeled.
</p>
<h1 id="Acquiring_scopes">Acquiring scopes</h1>
<p>All of them may of course be bought new, but as many hobbyists are on a tight budget, it is worth mentioning some of the successful avenues for getting hold of them.
</p>
<ul><li> Homebuilds as above
</li><li> Yard/Garage or car boot sales - If you are lucky you may find an old analog one there.
</li><li> eBay may have any of them, just make sure you check out the seller and see what chance you have of it working when you get it. Try and at least get a guarantee that it will not be DOA.
</li><li> FreeMesa - You may find a free scope locally on freemesa, or be able to place a wanted ad.
</li></ul><p> <a class="internal" href="http://www.FreeMesa.org/?a=21&amp;p=146&amp;b=3" target="_blank"> <img class="img-responsive" src="http://www.freemesa.org/img.php?b=3&amp;p=146"/> </a>
</p>
<ul><li> GumTree - This online classifieds may have scopes for sale and you can also place wanted ads.
</li><li> Freecycle - Freecycle is similar, but harder to use than freemesa.
</li></ul><p>
<br/>Keep thinking along similar lines, and finding a second user scope is definitely achievable.
</p>
