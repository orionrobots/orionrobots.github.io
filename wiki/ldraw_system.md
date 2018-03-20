---
layout: page
title: LDraw System
date: 2006-12-12 00:08:49
---
<h1 id="Contents">Contents</h1>
<p></p><div id="toc"><div id="toctitle"><h3>Table of contents</h3></div><ul class="toc"><li><a class="link" href="#Contents">Contents</a>
</li><li><a class="link" href="#Background">Background</a>
</li><li><a class="link" href="#The_Parts_Library">The Parts Library</a>
<ul><li><a class="link" href="#Creating_Parts">Creating Parts</a>
<ul><li><a class="link" href="#The_conditional_Line">The conditional Line</a>
</li></ul></li></ul></li><li><a class="link" href="#Instructions">Instructions</a>
</li><li><a class="link" href="#Rendering">Rendering</a>
</li><li><a class="link" href="#The_Community">The Community</a>
</li><li><a class="link" href="#Links">Links</a>
</li></ul><!--toc--></div>
<h1 id="Background">Background</h1>
<p>LDraw is a Lego <a class="wiki" href="/wiki/cad.html" title="Computer Aided Design">CAD</a> standard which is infamous among the <a class="wiki" href="/wiki/afol.html" title="Adult Fan Of Lego">AFOL</a> community.  It was created by a <a class="wiki" href="/wiki/lugnet.html" title="Lego Users Group Network">Lugnet</a> user, and is pretty much recognised as the standard for digital representation of <a class="wiki" href="/wiki/lego.html" title="The best known construction toy">Lego</a> Parts and assemblies.
</p>
<p>The standard itself sets out a text file representation of a Lego model in terms of numeric parameters. It has extensions such as multi-part files, and is used as the basis for <a class="wiki" href="/wiki/lego.html" title="The best known construction toy">Lego</a> <a class="wiki" href="/wiki/cad.html" title="Computer Aided Design">CAD</a> systems such as <a class="wiki" href="/wiki/leocad.html" title="The Open Source Lego CAD System">LeoCad</a> and <a class="wiki" href="/wiki/mlcad.html" title="MLCad">MLCad</a> and by tools like <a class="wiki" href="/wiki/lsynth.html" title="LSynth">LSynth</a>. <a class="wiki" href="/wiki/leocad.html" title="The Open Source Lego CAD System">LeoCad</a> actually natively uses another part format, but that is easily converted to and from LDraw files.
</p>
<p>The originator of the file format was <a class="wiki" href="/wiki/james_jessiman.html" title="James Jessiman">James Jessiman</a>, who has sadly passed away, but who's memory is honoured by all those in the community who use, develop and propose Lego CAD systems, be they based upon LDraw directly, or new ones that take the concepts and modernise them.
</p>
<p>There have been LDraw parts created for some other construction toys. There is no reason it could not be used for mecanno or fischertechnic.
</p>
<p>Now given that Lego units are a bit odd (not relating to metric or imperial units very well at all), it is reasonable to spec things to interact with Lego in the Lego units where possible.
</p>
<h1 id="The_Parts_Library">The Parts Library</h1>
<div style=" float: right;"><div class="cbox " style=";;margin:0;;"><div class="cbox-title">Useful information - not in the format:</div><div class="cbox-data">
<p>20 Ldraw units = 1 Lego Stud
<br/>1 Ldraw unit = approx 0.4mm (0.39925)
<br/>Therefore 1mm = approx 2.5 Ldraw Units
<br/>and 1m = 2504.6 Ldraw units
</p>
</div></div></div>The LDraw parts library is not exhaustive, and when creating models, it is worth seriously bearing this in mind. If you cannot find a part, then it is suggested that you search for a part, then ask the community about it, and finally create your own. There are many parts that are not yet "official", but can still be used. If you use such parts, it may be a good plan to use a multipart file, and embed the unofficial files there. This is because such parts may change before they become official, and the changes may involve moving the parts anchor point or rotation, which could mess up your model.
<p>
<br/>Try to resist the temptation to put unofficial parts directly into your parts library. You could add them into the LDraw models directory, and use them from there. This means you are at least aware (or should be aware) of any additional file requirements if you choose to share your creation or even open it on a different computer.
</p>
<h2 id="Creating_Parts">Creating Parts</h2>
<p>There are plenty of tips around <a class="wiki" href="/wiki/lugnet.html" title="Lego Users Group Network">Lugnet</a> and the LDraw Foundation itself for creating parts. Reading some of those is recommended, as creating a new part can be a serious and time consuming undertaking. You will require patience, understanding, research and probably planning depending on the complexity of the part. A big hint - don't make any part with a curve your first go, and try to model a simple brick as a pure exercise is advisable to get the hang of things.
</p>
<p>Be prepared to throw away, or remodel things as you find your way around the parts tree and primitives - reusing existing primitives should always be done in preference to rolling your own and copy paste repeating.
</p>
<p>This is not for a newbie, who should maybe start simple models with existing parts until they get the general feeling for virtual modelling.
</p>
<p>Parts may be created from a set of absolute primitives (things like a line or quad), and LDraw Primitives, which are themselves special parts for common things like a <a class="wiki" href="/wiki/lego.html" title="The best known construction toy">Lego</a> stud. This is a common theme in <a class="wiki" href="/wiki/cad.html" title="Computer Aided Design">CAD</a> systems. You will need to understand how 3 dimensional coordinate systems and transformations work.
</p>
<p>For simple parts, <a class="wiki" href="/wiki/mlcad.html" title="MLCad">MLCad</a> can be used to construct them. For more complicated parts, using a serious 3D Cad system like <a class="wiki" href="/wiki/solidworks.html" title="A 3D Solid Modelling System">SolidWorks</a> to spec out a part first, and even model the curves may seriously help. SolidWorks parts can be converted to LDraw parts with certain software.  At the very least, a 3D version of the part can be used as a background with guides to create the real part in MLCad.You could also use a scanned version of the part as a modelling guide by literally placing the part onto a flatbed scanner, giving it a contrasting background, keeping away the ambient light, and scanning it.
</p>
<p>Designing parts is not easy, especially if they have curves. Since LDraw has no real curves, they must be constituted from facets. The part author has to make a choice according to the curvature, part size, and the scale that it is likely to be viewed about to make sure the facets are not too obvious. Now one great aid to this is a big quirk that belongs to LDraw, the "Conditional Line" primitive. Here, be warned, may be dragons!
</p>
<h3 id="The_conditional_Line">The conditional Line</h3>
<p>Explained basically, it can be used for curved faces and is expressed with 4 points, 2 for the actual line, and 2 control points. It is only drawn when one control point is in front, and one behind the actual line. The idea being, that you would only see the line at the outside of the curve, and that the facets are not lined as they would be for a part that is intended to be faceted.

<h1 id="Instructions">Instructions</h1>
<p>LDraw can be used to create step by step instructions for a model, which allows other <a class="wiki" href="/wiki/lego.html" title="The best known construction toy">Lego</a> builder to build it, and possibly improve on it.
</p>
<h1 id="Rendering">Rendering</h1>
<p>One other aspect of LDraw is the ability to render high quality images of Lego designs. There are even contests for doing so. This often means linking up with software like POVRay to create these images, and allow animating Lego or using CG special effects with them. <a class="wiki" href="/wiki/lego.html" title="The best known construction toy">Lego</a> Movies have been created this way.
</p>
<h1 id="The_Community">The Community</h1>
<p>There is a large community of people online using LDraw, and authoring parts. This community is mostly based on <a class="wiki" href="/wiki/lugnet.html" title="Lego Users Group Network">lugnet</a> and <a class="wiki" href="/wiki/peeron.html" title="Online database of Lego Sets and Parts">peeron</a> as well as the LDraw pages themselves.
</p>
<p>The community author parts, and will respond to questions and suggestions on parts authoring, model creation, rendering and such related matters. There are occasional contests for well created models, and also contests for complete rendered models.
</p>
<p>Community authored parts may not even be in the unofficial list, so do ask. Users may have created them for their own reasons, and not feel they are good enough for general release. If you ask on the list, someone may respond with a file you can use.
</p>
<h1 id="Links">Links</h1>
<ul><li> <a class="wiki" href="http://ldraw.org/">The LDraw Foundation</a> - This organisation are the custodians of Lego related tools and software - and an essential hub for the <a class="wiki" href="/wiki/lego.html" title="The best known construction toy">Lego</a> <a class="wiki" href="/wiki/cad.html" title="Computer Aided Design">CAD</a> community.
</li><li> <a class="wiki" href="/wiki/lego_specifications.html" title="Lego Specifications">More Lego Specifications</a>
</li><li> <a class="wiki" href="http://www.ldraw.org/documentation/ldraw-org-file-format-standards.html">LDraw File Format Specification</a>
</li><li> <a class="wiki" href="/wiki/lugnet.html" title="Lego Users Group Network">Lugnet</a>
</li></ul>

# Some Recommendations

<table class="normal" id="fancytable_1">
<tr>
    <td><iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&marketplace=amazon&region=GB&placement=1931836760&asins=1931836760&linkId=9390cf365ef9c1a82c81181fe33ad3fb&show_border=true&link_opens_in_new_window=true"></iframe></td>
    <td>Lego Software Power Tools Including Ldraw, Mlcad and Lpub</td>
    <td> There is a large plethora of <a class="wiki" href="/wiki/lego.html" title="The best known construction toy">Lego</a> related software. This book helps you navigate, choose and use this software effectively. As it was written by the author of LSynth - Kevin Clague and two other Lego fanatics - there is no reason to doubt its usefulness.</td>
</tr>
<tr>
    <td></td> 
    <td> <a class="wiki" href="http://ldraw.org/">The LDraw Foundation</a> </td>
    <td> This organisation are the custodians of Lego related tools and software - and an essential hub for the <a class="wiki" href="/wiki/lego.html" title="The best known construction toy">Lego</a> <a class="wiki" href="/wiki/cad.html" title="Computer Aided Design">CAD</a> community.</td>
</tr>
<tr>
    <td></td>
    <td> <a class="wiki" href="https://www.lugnet.com">Lugnet</a> </td>
    <td> <a class="wiki" href="/wiki/lugnet.html" title="Lego Users Group Network">Lugnet</a> is the primary discussion area for all things <a class="wiki" href="/wiki/lego.html" title="The best known construction toy">Lego</a>, and have a number of forums for discussing <a class="wiki" href="/wiki/lego.html" title="The best known construction toy">Lego</a> <a class="wiki" href="/wiki/cad.html" title="Computer Aided Design">CAD</a>.</td>
</tr>
</table>
