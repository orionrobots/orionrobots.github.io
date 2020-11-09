---
created: 2007-01-13 08:37:28
description: Getting Stuck into the NXT
tags: [nxt, mindstorms, lego, robot]
title: Getting Stuck into the NXT
layout: post
todo_needs_sat: tiki images
todo_improve: dewikify.
---
{% include JB/setup %}

# Starting Up

Now I had the [NXT](/wiki/nxt) software installed, it was time to fire it up. I was expecting an all singing, all dancing presentation as was the case with the [RCX](/wiki/rcx) [Robot Invention System](/wiki/ris) and Mars Mission software, but those kind of intro movies seem to have withered away. They did add an element of excitement to Lego toys though. This instead fires up a rather good looking interface, which has a rounded, flattened and simplistic style reminiscent of LCARS (the Star Trek UI).

Time to click the "Getting started" button. The software rapidly runs through a little presentation demo, and tells me I can now connect my NXT to download a program. I plug it in, turn it on connected and Windows detects it. I then click the next button on the presentation, already a step ahead - as usual, jumping the gun. It then tells me to plug in the cable, already ahead.

The presentation goes through uploading the program and tells me now to press enter four times to take me to the Demo program. I give it a go and realise it has not actually uploaded anything, just shown me a movie..

Okay...So I go back, and actually try it out as the presentation suggests with the interface - which dismisses the presentation. Wait a minute! I want to try it out, right now, but I want to be able to go back. Actually, it is fairly simple. There is a tabbing interface. The thing is, this initial tab is indicated only with a single icon, so it looks like it should do something else. All the program tabs have the program names. Anyone using Firefox will soon find their way around the tabs.

<div style="; float:left;margin:1em;margin-left:0; width:320px;">
  <div class="cbox-data">
   <img src="/galleries/gallery-20-lego-nxt/412-teaandrobots.JPG"/>
   Tea &amp; Robots
  </div>
 </div>
I start programming with a drag and drop, push the download button, press the orange button on the NXT four times, and I hear the sound "Good Job".

I will have to play with the NXT-G drag and drop interface for a while, and see what it is really capable of, but I will probably be throwing a C compiler or [Lejos](/wiki/lejos) on it so I can port old familiar algorithms to the NXT.

Time to go start on the robo centre. I click on the Tribot and click through, noting that the paper instructions are shown in a small window pane on the screen. The pane is not expandable via dragging, but there is a zoom button. I am glad there were paper instructions - it is not that easy to see on my small laptop screen, and I can move much faster with the paper ones. I Note that there is an artefact at the end of the digital instructions that you will need to test with - which is available on the paper ones on page 60 of the User Guide.

I built the ball holder, needed for trying out the next few things, it is on page 60 of the User Guide, or at the end of the digital tribot instructions.

# First Program
 <div class="cbox " style="; float:right;margin:1em;margin-right:0; width:150px;">
  <div class="cbox-title">
   New Parts
  </div>
  <div class="cbox-data">
   <img height="126" src="/galleries/gallery-20-lego-nxt/411-lego45590.JPG" width="150"/>
   When building this I noticed this new piece, a rubber part with two axle holes, the [45590 - Technic Axle Joiner Double Flexible](http://www.peeron.com/inv/parts/45590) according to [Peeron](/wikipPeeron). This may be handy if motor vibrations interfere with the Ultrasonic sensor.
  </div>
 </div>

Time to create the first program, okay not quite the first, but I am not sure I count the "Well Done" demo. This basically went forward and back. After downloading it - the robot seems to veer immediately to its left. I remove my added Ultrasonic sensor (
 [Last blog post]({% post_url 2007-01-10-orionrobots-gets-our-first-nxt %})
 - I jumped the gun again), tried again in case that was the cause. It is returning to the same spot, but at a different angle.

I try it on 5 seconds off the pad- and the veer does not seem to be an issue. I weight down the pad - and it returns fine - it seems that on the laminate floor, the pad is kicked away at an angle as the robot sets off. My advice is to weigh it down with something so it doesn't slip around.

Okay- 2.3 seconds forward and back isn't that exciting... It is also this point which I notice that it does not self power down... I try to find the NXT settings in the UI in Windows and cannot see it - but there is a settings menu on the brick itself. For now - 2 minutes of inactivity will do fine.

# Adding a touch sensor

<img src="/galleries/gallery-20-lego-nxt/410-botwithtouchsensor.JPG" style=" float: left;" />
The next build is a touch sensor for the bot. One other thing I have noticed with this set, is that the axles seem to put up much more resistance than they do in my older sets.

The routing instructions in step 6 of the Tribot Touch sensor are a bit useless both on screen and on paper (step 23, page 53) - note that it actually intersects geometry at the front of the diagram. I had a bit of fun there trying to find a place that would not stress the unbooted RJ connectors, and also not crimp the cables or stress liftarms by placing them under things. These larger leads are a bit awkward.

The program worked well, but not without flicking the block a little way from its spot as it reversed - a bit of a kick. Not a lot I can do about that at this point.

Time for the grabber - when things start getting interesting...

# Links

* [OrionRobots gets our first NXT]({% post_url 2007-01-10-orionrobots-gets-our-first-nxt %})
* [Lego](/wiki/lego "The best known construction toy")
* [Mindstorms](/wiki/mindstorms "A Robotic construction toy system from Lego")
* [NXT](/wiki/nxt "Legos NeXT generation robotics kit")
* [Timephiz - Mindstorms NXT Test Run](http://timephiz.blogspot.com/2006/11/mindstorms-nxt-test-run.html) - A blog from a teacher going through a similar experience as I.


<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&marketplace=amazon&region=GB&placement=B00BMKLVJ6&asins=B00BMKLVJ6&linkId=790d5f97e58d0e79ecb2fbe1b24a3108&show_border=true&link_opens_in_new_window=true"></iframe>

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&marketplace=amazon&region=GB&placement=B06X6GN2VQ&asins=B06X6GN2VQ&linkId=30c9cae2e37f39c501ee1fde586c6579&show_border=true&link_opens_in_new_window=true"></iframe>

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&marketplace=amazon&region=GB&placement=B01D8KOZF4&asins=B01D8KOZF4&linkId=5e31910339bc64587ceb3fdaddcf90bd&show_border=true&link_opens_in_new_window=true"></iframe>

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&marketplace=amazon&region=GB&placement=B01G8WUGWU&asins=B01G8WUGWU&linkId=b0177f40a45270bc688ad07eb216b729&show_border=true&link_opens_in_new_window=true"></iframe>

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&marketplace=amazon&region=GB&placement=B075FJ767N&asins=B075FJ767N&linkId=d90845f0e292e3bd66ee9a8955f85ce5&show_border=true&link_opens_in_new_window=true"></iframe>