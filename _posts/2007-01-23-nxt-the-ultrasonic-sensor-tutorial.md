---
created: 2007-01-23 15:42:27
tags: [robots, robotics, robot building, nxt, lego, mindstorms, sensor]
title: NXT - The Ultrasonic Sensor Tutorial
layout: post
---
I am now well underway with my work on the NXT. I have built and programmed the grabber bot, and have it driving to and picking up a ball on command via hand claps.

I had a brief play with NXT-G to see if I could program a light/dark line follower, but ended up a little frustrated with variables and scope, and decided to carry on through the tutorials, and try again later when I have more NXT-G experience. After all, the only other similar language I used was [RCX](/wiki/rcx.html "The Lego Robot Command Explorer") code, and pretty much mostly used  [Not Quite C](/wiki/nqc.html "NQC - A Lego PBrick Programming Language") for my RCX programming. Despite not being a fan of these kind of languages, I am determined to get the hang of NXT-G coding before falling back to the more familiar comforts of c.

## Adding the Ultrasonic sensor to Tribot

Now next in the tutorial is adding an Ultrasonic sensor. This is where we are really stepping beyond what the [RCX](/wiki/rcx.html "The Lego Robot Command Explorer") was able to do with the (unexpanded) RIS, and start getting some of the new stuff.

![Lego Mindstorms NXT Tribot With Ultrasonic Distance Sensor Closeup](/galleries/gallery-20-lego-nxt/419-p1010002-1.JPG)
First a little bit of building - I can see a lot of design went into making this bot modular and expandable. I appreciate that somewhat. For the step pulling out an axle, you may find it easier to use another axle to push it through initially. You don't need to pull the axle all the way out, just enough for the gap between the beams in the middle to be clear. I also chose to use the much shorter cable for this, as there was no need to the 35 cm one. I found that as the bottom of the sensor was not secured - it seems to look up under the weight of the cable. I placed an additional bush-pin in to secure it (inset).

## Programming it

I decided to follow the beaten trail here, and work within the tutorial. I did however work in metric not inches, and spotted the rather nice conversion feature. If you type a value in inches into the Ultrasonic distance value, then switch units, the NXT programming interface will convert for you. I also used the value 0.4 for the closing of the arms, so they were not quite so violent, but then had a neater idea - 90 degrees is enough to open them. I also find the way they do the turning here, and in the light sensitive code to be quite unusual. My light sensor code use both wheels in opposite directions - turning on a penny...

## Out of memory

Anyway- after completing the program, I found the [NXT](/wiki/nxt.html "Legos NeXT generation robotics kit")  was out of memory, and had to clear a few things from it. The memory manager only showed me the "good job" sound, to clear. I did not see any NXT code uploads to clear though in it - how strange. I then noted that the percentage bar had a clickable "program" area. This showed all the programs I had loaded in. While browsing this, the NXT timed out and shut off - and the display just cleared. You would think that keep-alive messages would be sent to the nxt while using this dialogue. At least for a while..

The Touch sensor and grabber programs were using a rather large 12Kb each. Now I know using embedded c on my day job that you can build whole suites of quite complex software in 12k - there were only about 9/10 blocks, so those must expand to quite a lot of code. I suspect the blocks in the "Common Blocks" tab are very high level blocks of many more blocks. I wander if it is the number of blocks, or the number of different types of blocks which contributes to size - this would be down to how much is duplicated, and how much is simply referenced. Something to investigate later.

Clearing a whole bunch of my programs left 55.5Kb free. Should be more than enough to keep on going.

## Testing this code

I cleared my test pad, bar a few paperweights in the corners, ensuring that there was enough clearance for the Ultrasonic not to pick up anything (since it was 50cm, I cleared 80+). It ran OK. I have to admit, the tutorials turning made it look more natural than my two motor spin.

My degrees thing works, but it has the proviso that if the arms are not open far enough, it will not reach 90 degrees and then stop. Maybe a more complex block (to come later) would be a good move - IE to turn the motor until it stops turning. This is probably why Lego chose a time in seconds instead.

## What now?

This seems to be all of the vehicles section in the Robo Center. There is a picture of 4 wheeler on the thing, but no four wheeler in the section - so far only the Tribot. I don't know it this could be expanded with a SWF presentation of something to add additional robots in for teaching purposes, and I know this has been mentioned by other blogs. Drawing your own digital instructions would probably involve using [LDraw](/wiki/ldraw_system.html "The LDraw Lego CAD System") at the moment, and LPub
  to create images from the LDraw instructions, then placing those into an SWF movie.

I am really not entirely done with the Tribot. Although I will disassemble it to try the other tutorials, I will probably build it again to try some ideas of my own - it is not a bad simple little platform to play with and code on.

## Machines

The next tempting section is machines with an arm. This is looking exciting. I am going to go build them now, and report later. Come back and read about it.

## Links

* [NXT - The Grabber]({% post_url 2007-01-18-nxt-the-grabber %})
* [Getting stuck into the NXT]({% post_url 2007-01-13-getting-stuck-into-the-nxt %})
* [OrionRobots gets our first NXT]({% post_url 2007-01-10-orionrobots-gets-our-first-nxt %})
* [NXT](/wiki/nxt.html "Legos NeXT generation robotics kit")
* [Lego](/wiki/lego.html "The best known construction toy")
* [Mindstorms](/wiki/mindstorms.html "A Robotic construction toy system from Lego")

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&marketplace=amazon&region=GB&placement=B00BMKLVJ6&asins=B00BMKLVJ6&linkId=790d5f97e58d0e79ecb2fbe1b24a3108&show_border=true&link_opens_in_new_window=true"></iframe>

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&marketplace=amazon&region=GB&placement=B06X6GN2VQ&asins=B06X6GN2VQ&linkId=30c9cae2e37f39c501ee1fde586c6579&show_border=true&link_opens_in_new_window=true"></iframe>

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&marketplace=amazon&region=GB&placement=B01D8KOZF4&asins=B01D8KOZF4&linkId=5e31910339bc64587ceb3fdaddcf90bd&show_border=true&link_opens_in_new_window=true"></iframe>

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&marketplace=amazon&region=GB&placement=B01G8WUGWU&asins=B01G8WUGWU&linkId=b0177f40a45270bc688ad07eb216b729&show_border=true&link_opens_in_new_window=true"></iframe>

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&marketplace=amazon&region=GB&placement=B075FJ767N&asins=B075FJ767N&linkId=d90845f0e292e3bd66ee9a8955f85ce5&show_border=true&link_opens_in_new_window=true"></iframe>
