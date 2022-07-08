---
title: Fixing a Broken Wire
layout: post
tags: [electronics, repair, robot building]
---
## Intro

Sometimes, when building from kits, or using modules- you will come across a snapped wire. If it is something you have soldered yourself, you may have the option of soldering in a new wire, but sometimes, wires have specialised connectors, and soldering a new wire in may just not be an option.

I was asked this by someone in the [Cybot](/wiki/cybot.html) robot community and thought this page may be useful.

Before attempting any of this, be absolutely clear which wires you want connected to which others - you will damage your devices, blow fuses or worse still electrocute yourself if you short circuit or reverse polarity on something.

These are intended to be both safer and more permanent than simply twisting wires together - which can work for a short time but is not recommended.

## Tools and Preparation

First you need the right tools for the job, and should take into account the right safety precautions.

Required Basic Tools:

* Wire strippers - decent ones, not the cheap flappy ones on the back of a pound shop crimping tool. The Engineer brand are extremely good.
* Wire cutters - side cutters, snips - must be able to make a clean cut without lots of pressure or needing to be "worked".
* Goggles - as with all work with cutters and things that might ping off, eyewear is worth having. Just make sure they are comfortable and clear so they are in front of your eyes and not on the top of your head. Get the anti-fog kind.
* Multimeter or continuity tester - to check you've definitely repaired the break.

As there are a few different approaches, additional tools are recommended for those.

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&language=en_GB&marketplace=amazon&region=GB&placement=B07FDBW1PT&asins=B07FDBW1PT&linkId=621627f1b54786923da9a0ba65e3bd35&show_border=true&link_opens_in_new_window=true"></iframe>
<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&language=en_GB&marketplace=amazon&region=GB&placement=B001HQMWNY&asins=B001HQMWNY&linkId=7fd4c725dd01fd54dddefe9561b1e697&show_border=true&link_opens_in_new_window=true"></iframe>
<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&language=en_GB&marketplace=amazon&region=GB&placement=B0777F3CNC&asins=B0777F3CNC&linkId=3e5c905595f1cbd65f4800bc0a20744d&show_border=true&link_opens_in_new_window=true"></iframe>
<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&language=en_GB&marketplace=amazon&region=GB&placement=B085Q7N6XN&asins=B085Q7N6XN&linkId=55b813f06abe60d18cb582da5d33fdbe&show_border=true&link_opens_in_new_window=true"></iframe>

## Safety

In addition to the goggles, there are a few other safety warnings on this.

Ensure you have turned off the power to the device, as you may at the very least destroy sensitive electronics, and at the worst give yourself a nasty shock. Disconnect the cable if you can! Modular cables are great.

Beware of things connected to motor/relay coils or capacitors, these devices may still carry a charge. Old CRT TV's are especially likely to do this. You may want to consider a safe method of ensuring capacitors and inductors are discharged before you start working. The safest way is to leave it unplugged for a day or so. If you are going to work close to the capacitors, carefully use a 1M resistor held in pliers with insulated handles to discharge the capacitors across their terminals.

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&language=en_GB&marketplace=amazon&region=GB&placement=B072HR25LW&asins=B072HR25LW&linkId=5fc606b78a0ccc93537201d1e330aa88&show_border=true&link_opens_in_new_window=true"></iframe>

## Easy Fixes

### Chop Block or European Connectors

These may look a bit ugly if on an inline connection, but they can be neatly put inside a box or other enclosure. They can also be bolted onto something so you can conceal both the cable and the repair. They do not require soldering, and are easy to fit. However - you need to ensure there is not much mechanical stress on the connection and that they are well tightened. You may also need to tin wire endings for a really good connection, but I tend not to need this.

This is suitable for either low count wire connections, or fairly course things. I'd not recommend it for a 25 or even 10 core cable as they tend to leave quite a wide profile.

You should be able to find these in any hardware store.

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&language=en_GB&marketplace=amazon&region=GB&placement=B08HDC7HMK&asins=B08HDC7HMK&linkId=2126335c8ae17375a290c7b51603f4e8&show_border=true&link_opens_in_new_window=true"></iframe>

#### Required Additional Tools

* screw driver - small flat bladed.
* You will need some larger cutters or a sharp blade to cut the chunks of chopblock off.

#### Required Materials

chop-block or terminal strip - please do check the current capacity - it is dangerous to use these for applications with higher current than they are rated for.

#### Method

Note how the chop block are screw terminals back to back connected by some copper (or other metals).

First make sure the break is clean - use cutters to clip it completely off. Then bare each end with the wire stripper. Twist these wire ends so they are well bunched together - you can choose to tin them with solder at this point.

For each wire, identify the ends you want to connect. Unscrew two connecting terminals. Push one end into a terminal, then screw it down tightly - ensuring it has made a good electrical and mechanical grip on the wire. Repeat for the other wire. You will repeat this for each wire.

You will want to fix the chop-block down somewhere, otherwise it will rattle around and be a nuisance.
Depending on the application (and it most robot cases it will be very low voltages at around 5v), you may want to use electrical tape to isolate the terminal to prevent it being dangerous, or remove the possibility of a damaging short.

### Alternative - Wago Blocks

An alternative to chop blocks are Wago connectors, which use a snap fitting to close firmly around leads.

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&language=en_GB&marketplace=amazon&region=GB&placement=B08B69R7W3&asins=B08B69R7W3&linkId=67d7edc3c17b2aab23e8cfe53030d2a6&show_border=true&link_opens_in_new_window=true"></iframe>

I recommend using a screwdriver (flat bladed) to flip these up/down as they can catch your finger. These Wago blocks come in different lengths for connecting multiple wires together.

## Crimp connections

These are somewhat more permanent than chop block terminals, and look neater inline. They do require a crimping tool, they can still work mechanically loose. They are easily available in both hardware and car repair shops.
There are straight through crimps - with a connection on each end which make this really easy if you have the tool.

### Required Additional Tools

* Crimping tool - you may be able to get a crimping tool with crimps.

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&language=en_GB&marketplace=amazon&region=GB&placement=B07JFK58R3&asins=B07JFK58R3&linkId=e52d4f3428cb39f1be677959ca091cf7&show_border=true&link_opens_in_new_window=true"></iframe>

### Required Materials

* Double ended connection crimps - Ensure they have the right current capacity.

Cut cleanly through the broken wires, and bare them. Twist the bared end tightly. Push each end of a connection into the crimp, and use the tool to crimp it. Repeat for the other end.

You may want to use some heat shrink tubing, to provide even more strain relief if you have a heat gun. This is one of the best and neatest solutions. It is best put on after crimping one connection, connecting the other side, then pull heat shrink around the crimp and the wires, and shrink it on.

## Ribbon cables

Sometimes, parts of ribbon cables get cut - for example (and you should really avoid this), the sides get trapped during assembly of a part.

You may still use one of the above methods to splice only the damaged lines, but it will be ugly and may degrade the quality of the whole cable. Unless it is very long, it may be cheaper and less work to just replace it.

If there are one or two affected cables - the above method with a crimp may be enough.

However there is considerable damage and the whole cable is not easily replaced then I recommend cutting through the cable, and putting in additional connectors.

I do not recommend soldered connectors for this as it is quite a lot of effort. Crimping or IDC are far better for this.

## IDC Connectors

IDC connectors are nice for ribbons. You can lay the ribbon down and flatten it. IDC is an "insulation displacement connector" so you won't need to bare the cable.
These come with a number of actual plug systems, the basics are single row (call Single In line or SIL) or double row (Double In Line - DIL) - these are probably what you want, and are what you see with the IDE cables in computer.
You can also get the D-Type connectors, which are used for parallel ports and printers or for analogue monitor connections.
D-Types are inherently polarised (stop you connecting it the wrong way), but the SIL and DIL systems can also have polarising tabs.

### Required Tools and Materials

* Good pliers - square jawed not needle nose.
* An matching IDC socket and plug. Consider the most suitable profile for these, make sure it has enough pins.

As suggested above, cut all the way through the broken ribbon - ensure a clean cut - you may want to cut either end of a damaged section and discard it. DO NOT bare this.

Carefully take one connector, and pull the back up (some ship with these up). You will see rows of teethed "V's". Inspect for polarisation. On the second connector you will want to ensure it will mate the right way with the first.

Carefully place the ribbon so the insulated cables lie in the middle of the V's, and make sure that the first cable aligns with the first V in the connector.

Now firmly push the back in - it will clamp the ribbon, and the teeth will make a connection with the wire. You may need to use pliers to apply a firm but even force for this.

Once both ends are done, you can connected them.

## Multicore and sub-miniature multicore cables

Watch out for multicore cables - sometimes a cable may be a signal cable sheathed by its ground (co-axial). There are specialised connectors for splicing these, or you can bare the cables and then connect them. However in many cases, coaxial connectors are designed so the ground acts as an interference shield for the signal - so by baring them, and twisting them off, you may reduce their effectiveness by quite a bit.

Some tiny multicore cables are not obviously so, even looking at a cross section. These are usually found in extremely miniaturised devices or boards, and can sometimes only be seen by looking at where they are connected, and testing to see if they are really separate. I have seen as many as six cores, where they are not immediately obvious from a cross section. In this case you may be better of replacing the wire, and using RS or Datakey to try and source the parts for any connectors as you will have little joy in trying to splice these.

Many small headphones use these type of cables, in such a way that ensures that once the cable has gone, they are only fit for the bin. You may be better off trying to add a modular connector at the cans and then use a modular audio cable than affect repair to the original cable.

## After any of the suggested fixes

Use a multimeter or tester to probing either end of the wire can ensure you have a good connection. It is worth doing this before applying the electricians tape or heat tubing, or in the case of the chop-block before fixing it down.

There is nothing more frustrating than having to remove your heat shrink, or tape just to re-tighten, or replace the connection.

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&language=en_GB&marketplace=amazon&region=GB&placement=B07FDBW1PT&asins=B07FDBW1PT&linkId=621627f1b54786923da9a0ba65e3bd35&show_border=true&link_opens_in_new_window=true"></iframe>

## Gotchas

If the break occurred because the wire was just too tight, then you really should consider adding in an extra length. Take the opportunity when adding connectors to make the wire modular and extensible.

While it is good not to have excess loops of wire clogging up your project and making things untidy, you also need a bit of slack so wires do not have stress on them that may snap, snag or pull them. Watch that cables are guided out of the way of mechanical pinch points too.

Try to replace or lengthen wires with ones of the same gauge and type- these are often selected for the signal type or current requirements. A new section must be able to deal with the loads, as must any connection apparatus connecting them.
