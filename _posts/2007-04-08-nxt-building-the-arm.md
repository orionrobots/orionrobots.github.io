---
created: 2007-04-08 15:48:14
tags: [robots, robotics, robot building, lego, mindstorms, nxt]
title: NXT - Building the Arm
layout: post
---
I have continued my exploration of the NXT kit, and the instructions within. This part gets interesting with a robot arm.

## Disassembling the Tribot

The first task is to disassemble the Tribot - which takes a bit longer than the studded models, and takes a fair bit more dexterity.

Axles and pins can start to be annoying when pulling many out of a beam, and I have heard tips about using marigolds or a little strip of rubber to grip them and save your fingers.

For the axles, the Flexible Axle part discussed [previously]({% post_url 2007-01-10-orionrobots-gets-our-first-nxt %}) can be used - note they are all currently used in the ball holder. You should also use the push through technique with another axle. I am not sure about marigolds (rubber gloves) - they will limit my movement, and may make it difficult - but there's time to give them a go.

I start by removing the NXT itself, and the cables. I got stuck in, and as it turned out, the only real tool I needed was an Axle to push out pins and axles - this took me only a few minutes.

## Building the RoboArm T-56

![Mindstorms NXT Robot Arm PArtially Built](/galleries/gallery-20-lego-nxt/447-p1010006-2.jpg)

Now this is where the build starts to get really interesting, and my use of studless techniques will begin to be tested.

I got stuck into the arm. This took a little longer, and initially, it is not much like an arm. But it has enough to rotate into position and touch things, along with two hand cranks on the sides to manually override it. The arm itself cannot be positioned without the cranks because it uses a worm gear based drive. This also means that it is pretty slow, even on full power. However, it is also steady.

## Programming it

I tried the simple initial program. I had to reduce the given values a little, as my bot tended to push down hard enough on the touch to either bowl the ball off or lift the arms base. A reduction to 9 rotations on the initial downward position did the trick.

## Building the hand

![Mindstorms NXT Robot Arm Holding the Red Ball](/galleries/gallery-20-lego-nxt/448-p1010007-2.JPG)

Well the arm is not much fun without a hand. A hand will be useful to pick up a ball and move it. Jumping ahead - I suspected that to be the challenge.

It was an interesting build - the use of the knob wheel again. I really have not used these all that much at all. On the second set of claws, I actually put the ball pin in before the knob wheels - as it looked like it would be a better plan.

Also, if it looks like this part of the arm is not quite coming together, have a bit of faith and carry on -it does work. Wire routing is much easier here than for the buggy, but for the stuff going under the [NXT](/wiki/nxt.html "Lego's NeXT generation robotics kit") I had to remove the clips on one side, to lift it up a little to get the RJ plug through.

## Programming the hand

This was a more interesting program - the switch block (or If block - as it is only really if/else and not multi-case) was introduced.

Again, after trying it out in a vanilla version, I had to tweak values when testing to make sure it did not overshoot. It may have been more clever to use a wait until touched for the downward movement, but since [OR](/wiki/or.html "OR") blocks have not been introduced, it could have got messy when it couldn't go any further.

Even with much tweaking, it either grabs the pedestal with the ball. knocks the pedestal over before getting the ball, or knocks it over when it gets the ball. It also tends to knock over the other pedestal when dropping the ball. But at least it did pick the ball up and move it. I managed to reorganise the program so the arm lifted a little after machine the grab, and then moved, thus not knocking the pedestals over when it did so.

## Fitting the light sensor

This will be used for sensing colour. It is a small build, but manoeuvring in the sensor assembly is a little tricky.

I also reduced the pedestal height from a 12 axle to a 10, which helps to get the arm over the pedestal without knocking it over.

In programming it, I again started with all the recommended values, but had to tweak the light sensor to the right threshold to stop them all coming out as "blue". The sound (speech) was pretty meek, so I upped it to 100%. And even with the reduction in height of the pedestal, the grab still seems to knock the pedestal over most times. Oh well.

The map tab (for the extents of the NXT G-Code) is beginning to show its limits, and some normal scroll bars would be welcome here. My laptops touchpad can be configured to scroll horizontally with such bars.

After all the tweaking, the identification works, and it will move the red ball to another location as expected, if still occasionally knocking over the pedestals.

## What is next

Well - in the NXT guide, we have animals next - the scorpion - Spike.. Cool..

## Links

* [Previously - NXT - The Ultrasonic Sensor Tutorial]({% post_url 2007-01-23-nxt-the-ultrasonic-sensor-tutorial %})
* [NXT - The Grabber]({% post_url 2007-01-18-nxt-the-grabber %})
* [Getting stuck into the NXT]({% post_url 2007-01-13-getting-stuck-into-the-nxt %})
* [OrionRobots gets our first NXT]({% post_url 2007-01-10-orionrobots-gets-our-first-nxt %})
* [NXT](/wiki/nxt.html "Lego's NeXT generation robotics kit")
* [Lego](/wiki/lego.html "The best known construction toy")
* [Mindstorms](/wiki/mindstorms.html "A Robotic construction toy system from Lego")

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&marketplace=amazon&region=GB&placement=B00BMKLVJ6&asins=B00BMKLVJ6&linkId=790d5f97e58d0e79ecb2fbe1b24a3108&show_border=true&link_opens_in_new_window=true"></iframe>

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&marketplace=amazon&region=GB&placement=B06X6GN2VQ&asins=B06X6GN2VQ&linkId=30c9cae2e37f39c501ee1fde586c6579&show_border=true&link_opens_in_new_window=true"></iframe>

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&marketplace=amazon&region=GB&placement=B01D8KOZF4&asins=B01D8KOZF4&linkId=5e31910339bc64587ceb3fdaddcf90bd&show_border=true&link_opens_in_new_window=true"></iframe>

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&marketplace=amazon&region=GB&placement=B01G8WUGWU&asins=B01G8WUGWU&linkId=b0177f40a45270bc688ad07eb216b729&show_border=true&link_opens_in_new_window=true"></iframe>

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&marketplace=amazon&region=GB&placement=B075FJ767N&asins=B075FJ767N&linkId=d90845f0e292e3bd66ee9a8955f85ce5&show_border=true&link_opens_in_new_window=true"></iframe>
