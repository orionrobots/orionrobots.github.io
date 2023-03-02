---
title: The reality of electronics repair
layout: post
tags: [electronics, robot building, repair, salvage, learning]
---
<img src="/assets/2014-04-09-the-reality-of-repair.md/small/1-IMG_3406-001.JPG" alt="Me repairing some electronics" style="float:left; padding-right: 4px;" />
If you've ever seen an episode of Stargate there is frequently some kind of alien electronic device which requires repair or repurposing. The show (in both it's good incarnations - SG1 and Atlantis) has a techy character who can look at it, stuck their teeth plumber style and have it done in a few hours.

Now the reality. Even the best electronics guru or repair technician is incapable of this feat with our current electronics.

YouTube electronics favourites like Dave Jones, Jeri Ellsworth and Limor Fried could not do this. Jeri has just about made a working transistor in her home lab - which is really awesome, and deserves respect. It also highlights how hard it is to reproduce any of our current technology without the weight of a massive company and fabrication system.

It takes hours and sometimes days to diagnose a fault on a damaged board. The repair could be repairing a joint, bypassing something, but most often it is a part has blown! Ouch.

There are no ICs I know that you can open up and fix the fused silicon on, and (I stand to be corrected) no engineers I know who could do this. You probably need a new device and unless it's a jellybean common device which you have stock of, you may have to order it, and even find code to flash it with. This is at least a week elapsed time.

Perhaps the advanced cultures of sci fi have built stuff with repair in mind, making stuff accessible and well documented with schematics on the inside of the cover ( you do see this in sci fi), and maybe the fault is our industry where repair and reuse is pretty much the enemy of our current economic system. Or perhaps this is pure fantasy and sufficiently advanced tech with a high level of integration is simply not repairable this way.

I like the idea of repairable and modular electronics, definitely the right way to go for hobbyist and dev projects, and there are projects afoot to make phones and tablets more like this too, so it is not impossible.

This post is not about discouraging people repairing stuff, in fact I strongly recommend it as a way to conserve resources and learn a lot. Being able to maintain your own tools is an important thing in many situations. However, this is about not being discouraged when it does take a week, not feeling you are some kind of failure when it takes a long time and a load of new learning to really understand the system.

Repairing the same tool a second time is easier, and instead of thinking the thing should be replaced because it broke again, perhaps you are now able better to maintain and improve its functioning than a newer machine or thing. It wont be done in an hour, and a new chipset is probably alien technology the first time you do stuff with it. But have a go, try anyway - you will probably learn something interesting.

## What have I been repairing?

This last couple of weeks I've been repairing the power board for my [CNC Machine](https://orionrobots.github.io/CNCNotes). It is for some probably a trivial device, but my skills have been more oriented to the digital side of electronics than the analogue and power stuff.

![CNC Control Board](/assets/2014-04-09-the-reality-of-repair.md/small/1-IMG_3406.JPG){: class="img-responsive"}

I've had a crash course in regulators, op-amps and the astable mode of the 555. I will write detail on this on the CNCNotes blog, but it has all been good learning, that I had to make to be able to repair the device. It means ordering a 12v regulator - common, but not in my stock. It has taken at least a couple of weeks and I have no shame in admitting it.

Frustratingly it turned out to be a simple potentiometer that was a bit cheap and iffy - basically requiring a new part, which I have replaced, but I would like to understand how to repair one of those too - something not that easy, we are talking about stuff that was fused together in a highly controlled precision industrial environment. I'd had to replace the 12v regulator, and I've taken the precaution of ordering replacements for most of the other parts on the board too.
