---
layout: page
title: LDraw System
date: 2006-12-12 00:08:49
tags: [lego, cad]
---
## Background

LDraw is a Lego [CAD](/wiki/cad.html "Computer Aided Design") standard which is infamous among the [AFOL](/wiki/afol.html "Adult Fan Of Lego") community. It was created by a [Lugnet](/wiki/lugnet.html "Lego Users Group Network") user, and is pretty much recognised as the standard for digital representation of [Lego](/wiki/lego.html "The best known construction toy") Parts and assemblies. The standard itself sets out a text file representation of a Lego model in terms of numeric parameters. It has extensions such as multi-part files, and is used as the basis for [Lego](/wiki/lego.html "The best known construction toy") [CAD](/wiki/cad.html "Computer Aided Design") systems such as [LeoCad](/wiki/leocad.html "The Open Source Lego CAD System") and [MLCad](/wiki/mlcad.html "MLCad") and by tools like [LSynth](/wiki/lsynth.html "LSynth"). [LeoCad](/wiki/leocad.html "The Open Source Lego CAD System") actually natively uses another part format, but that is easily converted to and from LDraw files. The originator of the file format was [James Jessiman](/wiki/james_jessiman.html "James Jessiman"), who has sadly passed away, but who's memory is honoured by all those in the community who use, develop and propose Lego CAD systems, be they based upon LDraw directly, or new ones that take the concepts and modernise them. There have been LDraw parts created for some other construction toys. There is no reason it could not be used for Meccano or Fischertechnic. Now given that Lego units are a bit odd (not relating to metric or imperial units very well at all), it is reasonable to spec things to interact with Lego in the Lego units where possible.

## The Parts Library

Useful information - not in the format:

* 20 Ldraw units = 1 Lego Stud
* 1 Ldraw unit = approx 0.4mm (0.39925)
* Therefore 1mm = approx 2.5 Ldraw Units
* and 1m = 2504.6 Ldraw units

The LDraw parts library is not exhaustive, and when creating models, it is worth seriously bearing this in mind. If you cannot find a part, then it is suggested that you search for a part, then ask the community about it, and finally create your own. There are many parts that are not yet "official", but can still be used. If you use such parts, it may be a good plan to use a multipart file, and embed the unofficial files there. This is because such parts may change before they become official, and the changes may involve moving the parts anchor point or rotation, which could mess up your model.

Try to resist the temptation to put unofficial parts directly into your parts library. You could add them into the LDraw models directory, and use them from there. This means you are at least aware (or should be aware) of any additional file requirements if you choose to share your creation or even open it on a different computer.

## Creating Parts

 There are plenty of tips around [Lugnet](/wiki/lugnet.html "Lego Users Group Network") and the LDraw Foundation itself for creating parts. Reading some of those is recommended, as creating a new part can be a serious and time consuming undertaking. You will require patience, understanding, research and probably planning depending on the complexity of the part. A big hint - don't make any part with a curve your first go, and try to model a simple brick as a pure exercise is advisable to get the hang of things.

Be prepared to throw away, or remodel things as you find your way around the parts tree and primitives - reusing existing primitives should always be done in preference to rolling your own and copy paste repeating.

This is not for a newbie, who should maybe start simple models with existing parts until they get the general feeling for virtual modelling.

Parts may be created from a set of absolute primitives (things like a line or quad), and LDraw Primitives, which are themselves special parts for common things like a [Lego](/wiki/lego.html "The best known construction toy") stud. This is a common theme in [CAD](/wiki/cad.html "Computer Aided Design") systems. You will need to understand how 3 dimensional coordinate systems and transformations work.

For simple parts, [MLCad](/wiki/mlcad.html "MLCad") can be used to construct them. For more complicated parts, using a serious 3D Cad system like [SolidWorks](/wiki/solidworks.html "A 3D Solid Modelling System") to spec out a part first, and even model the curves may seriously help. SolidWorks parts can be converted to LDraw parts with certain software. At the very least, a 3D version of the part can be used as a background with guides to create the real part in MLCad.You could also use a scanned version of the part as a modelling guide by literally placing the part onto a flatbed scanner, giving it a contrasting background, keeping away the ambient light, and scanning it.

Designing parts is not easy, especially if they have curves. Since LDraw has no real curves, they must be constituted from facets. The part author has to make a choice according to the curvature, part size, and the scale that it is likely to be viewed about to make sure the facets are not too obvious. Now one great aid to this is a big quirk that belongs to LDraw, the "Conditional Line" primitive. Here, be warned, may be dragons!

### The conditional Line

 Explained basically, it can be used for curved faces and is expressed with 4 points, 2 for the actual line, and 2 control points. It is only drawn when one control point is in front, and one behind the actual line. The idea being, that you would only see the line at the outside of the curve, and that the facets are not lined as they would be for a part that is intended to be faceted.

## Instructions

 LDraw can be used to create step by step instructions for a model, which allows other [Lego](/wiki/lego.html "The best known construction toy") builder to build it, and possibly improve on it.

## Rendering

 One other aspect of LDraw is the ability to render high quality images of Lego designs. There are even contests for doing so. This often means linking up with software like POVRay to create these images, and allow animating Lego or using CG special effects with them. [Lego](/wiki/lego.html "The best known construction toy") Movies have been created this way.

## The Community

 There is a large community of people online using LDraw, and authoring parts. This community is mostly based on [lugnet](/wiki/lugnet.html "Lego Users Group Network") and [peeron](/wiki/peeron.html "Online database of Lego Sets and Parts") as well as the LDraw pages themselves.

The community author parts, and will respond to questions and suggestions on parts authoring, model creation, rendering and such related matters. There are occasional contests for well created models, and also contests for complete rendered models.

Community authored parts may not even be in the unofficial list, so do ask. Users may have created them for their own reasons, and not feel they are good enough for general release. If you ask on the list, someone may respond with a file you can use.

## Links

- [The LDraw Foundation](http://ldraw.org/) - This organisation are the custodians of Lego related tools and software - and an essential hub for the [Lego](/wiki/lego.html "The best known construction toy") [CAD](/wiki/cad.html "Computer Aided Design") community.
- [More Lego Specifications](/wiki/lego_specifications.html "Lego Specifications")
- [LDraw File Format Specification](https://www.ldraw.org/article/218.html)
- [Lugnet](/wiki/lugnet.html "Lego Users Group Network")

## Some Recommendations

<table class="normal" id="fancytable_1">
<tr>
    <td><iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&marketplace=amazon&region=GB&placement=1931836760&asins=1931836760&linkId=9390cf365ef9c1a82c81181fe33ad3fb&show_border=true&link_opens_in_new_window=true"></iframe></td>
    <td>Lego Software Power Tools Including Ldraw, Mlcad and Lpub</td>
    <td> There is a large plethora of <a href="/wiki/lego.html" title="The best known construction toy">Lego</a> related software. This book helps you navigate, choose and use this software effectively. As it was written by the author of LSynth - Kevin Clague and two other Lego fanatics - there is no reason to doubt its usefulness.</td>
</tr>
<tr>
    <td></td>
    <td> <a href="http://ldraw.org/">The LDraw Foundation</a> </td>
    <td> This organisation are the custodians of Lego related tools and software - and an essential hub for the <a href="/wiki/lego.html" title="The best known construction toy">Lego</a> <a href="/wiki/cad.html" title="Computer Aided Design">CAD</a> community.</td>
</tr>
<tr>
    <td></td>
    <td> <a href="https://www.lugnet.com">Lugnet</a> </td>
    <td> <a href="/wiki/lugnet.html" title="Lego Users Group Network">Lugnet</a> is the primary discussion area for all things <a href="/wiki/lego.html" title="The best known construction toy">Lego</a>, and have a number of forums for discussing <a href="/wiki/lego.html" title="The best known construction toy">Lego</a> <a href="/wiki/cad.html" title="Computer Aided Design">CAD</a>.</td>
</tr>
</table>
