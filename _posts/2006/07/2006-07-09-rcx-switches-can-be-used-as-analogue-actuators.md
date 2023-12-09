---
date: 2006-07-09 04:15:05
description: RCX Switches can be used as analogue actuators
tags: [lego rcx, robot building, mindstorms, robotics]
title: RCX Switches can be used as analogue actuators
layout: post
---
Even though I have used the RCX for many years, there are still new things I am learning about it.

In a recent discussion on [lugnet.robotics](http://news.lugnet.com/robotics), the original touch sensors for the RCX are revealed as not being entirely [binary](/wiki/binary.html "The storage method for digital information") but actually having an analogue range of values.

This in an interesting development. It may be that this is simply an accident caused by the switches manufacture, and that it should be just on or off, but Philo (Phillipe Hurbaine) has actually put together an experiment to test its sensitivity. Note that this is a bit speculative, the discussion was about multiplexing them based on resistance.

<div style=" width:702px;">
  <a href="http://www.brickshelf.com/cgi-bin/gallery.cgi?i=514060" title="The touch sensor test RIG">
   <img alt="The touch sensor test RIG" src="/galleries/2006-02-24-rcx-switches-used-analog/touchtest1.jpg" title="The touch sensor test RIG"/></a>
  <div class="mini" style="width:700px;">
   <div class="thumbcaption">The touch sensor test RIG</div>
  </div>
</div>

This test allowed Philo to gain fine control of the placement of the threaded axle. Note there is a manual handle, linked to one worm gear, which turns a pinion (8t gear) which is linked to a further worm gear, giving a massive gear reduction. While this may allow fine control, at this level of granularity gear lash (the amount of "play" you have between the gears where the teeth do not entirely meet) can be a major problem.

<div style=" width:702px;">
  <a href="http://www.brickshelf.com/cgi-bin/gallery.cgi?i=514058" title="A Closeup of the RIG">
   <img alt="A Closeup of the RIG" src="/galleries/2006-02-24-rcx-switches-used-analog/touchtest2.jpg" title="A Closeup of the RIG"/></a>
  <div class="mini" style="width:700px;">
   <div class="thumbcaption">A Closeup of the RIG</div>
  </div>
 </div>

If you look at the closeup, there is a nut (threaded bush) on the threaded axle here, and this can be adjusted to a point where it is just touching, but not yet compressing the switches actuator.

<div style=" width:673px;">
  <a href="http://www.brickshelf.com/cgi-bin/gallery.cgi?i=514059" title="Graph of results">
   <img alt="Graph of results" src="/galleries/2006-02-24-rcx-switches-used-analog/resist_vs_displ.gif" title="Graph of results"/>
  </a>
  <div class="mini" style="width:671px;">
   <div class="thumbcaption">Graph of results</div>
  </div>
 </div>

It is a neat setup, and allowed Philo to generate a graph, showing the results of the experiment, with different switches used in the rig. It is interesting to note that the different sensors for [cybermaster](/wiki/cybermaster.html "CyberMaster") have very varied ranges, these are the sensors which each included a resistor which gave them different values.

What would equally interest me would be if the sensitivity of these would appear different on different RCX models, and also the other programmable bricks with compatible ports, and how much the port setup affects the sensitivity. Note also that two RCX switches were tested, with slight different results. This means that to use them effectively, you may have to calibrate individual switches.

The sensitivity curve here shows clearly that the Red Cybermaster switch has the best curve, and would be easiest to calibrate. There is sensitivity in all of them to detect pressure changes, although sometimes it is too minimal to be useful. You would need some clever mechanical linkages to scale movements down enough to make these into serious analog sensors, but it certainly could be done.

On this note, I may revisit my [Lego](/wiki/lego.html "The best known construction toy") scales, and see if they can be built to take advantage of this, it would be interesting to be able to create a set of sensitive digital scales with the basic [RIS](/wiki/ris.html "The Lego Robotic Invention System") kit.

On a further note, Philo also has his own observations on this at <http://news.lugnet.com/robotics/rcx/?n=2191>.

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&marketplace=amazon&region=GB&placement=B00BMKLVJ6&asins=B00BMKLVJ6&linkId=790d5f97e58d0e79ecb2fbe1b24a3108&show_border=true&link_opens_in_new_window=true"></iframe>

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&marketplace=amazon&region=GB&placement=B06X6GN2VQ&asins=B06X6GN2VQ&linkId=30c9cae2e37f39c501ee1fde586c6579&show_border=true&link_opens_in_new_window=true"></iframe>

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&marketplace=amazon&region=GB&placement=B01D8KOZF4&asins=B01D8KOZF4&linkId=5e31910339bc64587ceb3fdaddcf90bd&show_border=true&link_opens_in_new_window=true"></iframe>

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&marketplace=amazon&region=GB&placement=B01G8WUGWU&asins=B01G8WUGWU&linkId=b0177f40a45270bc688ad07eb216b729&show_border=true&link_opens_in_new_window=true"></iframe>

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&marketplace=amazon&region=GB&placement=B075FJ767N&asins=B075FJ767N&linkId=d90845f0e292e3bd66ee9a8955f85ce5&show_border=true&link_opens_in_new_window=true"></iframe>
