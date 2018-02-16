---
layout: page
title: Printed Circuit Boards
date: 2005-06-29 22:51:58
---
<h1 id="About_PCBs">About PCBs</h1>
<p>PCB's are somewhat ubiquitous, and enable fairly complex designs.
</p>
<p>If you have ever wired by hand any circuit with more than about 8 connections, you are probably aware how error-prone and tedius this can be.
</p>
<p>They were designed to allow early electronics engineers to mass produce devices. Older computers were hand wired, with looms of thousands of wires - one only needs to see the Cray 1 supercomputer in the London Science Museum to see the scale of this.
</p>
<p>They are named as such because they can be automated - and printed onto a board, although there is a misnomer in that a mask may be printed, and the board etched, or drilled away, although in rare cases conductor is deposited and truly printed.
</p>
<p>They come in many colours, though very older ones tend to be metal on brown fibreglass. More recently they are covered in a green glaze. Many new computer parts are being made in red, black, blue as well as more brilliant greens so they can appear good looking as well as functional - some people like to attempt to colour coordinater the guts of their PC's.
</p>
<h1 id="Why_design_with_PCB_s_">Why design with PCB's?</h1>
<p>
<br/>Firstly they lower the error rate. By taking them directly from an electronic design EDA or <a class="wiki" href="/wiki/cad.html" title="Computer Aided Design">CAD</a> system, you are able to correct errors in routing before you actually solder anything. This means you can worry more about your design. Designing with <a class="wiki" href="/wiki/cad.html" title="Computer Aided Design">CAD</a> means you can also minimize the space needed for a circuit.
</p>
<p>Matrix and Stripboards normally only come with one pin size in mind - this means if you have components with different footprints - for example switches and Trimpots then they will not fit in standard strip board, breadboard, vero-board or matrix board.
</p>
<p>Also - using PCB's gives a more compact, neat and professional look to your robots - if you care for that sort of thing.
</p>
<h1 id="Making_PCB_s">Making PCB's</h1>
<p>However - they are not without problems. First - you need to either own your own etching kit, or know someone else with one. Etching is something that is potentially very dangerous, and the fluids need to be treated with a great deal of care. You will require gloves, an etch-proof tray and a good, ventilated place to put them in between etches. You will also need some sort of neutralizer for the etching fluid.
</p>
<p>If you are new to this, although it may be cheaper to make your own, it is recommended you use an online supplier - they normally provide free auto-routing <a class="wiki" href="/wiki/cad.html" title="Computer Aided Design">CAD</a> software, and it is a lot less messier - for advanced boards, or any quantity - you will definately find them cheaper.
</p>
<p>If you are set on making your own at home, please read the <a class="wiki" href="/wiki/robot_building_safety.html" title="Building robots can be dangerous - tips to help your safety">Safety Guide</a> first.
</p>
<p>To create a PCB, you need to apply an etch-mask to a copper clad board. An etch mask basically stops the etching fluid from working on covered areas of the board.
</p>
<p>There are a number of methods, varying in expense and flexibility. The simplest is to use a permanent marker and hand draw the design on the board - I really do not recommend this, although simple - it is not really much of a gain over hand wiring.
</p>
<p>There are also transfers you can use with standard lines, corners, pads etc. Again - you will need to line these up by hand. They are useful for accurately marking component pads when manually drawing the mask.
</p>
<p>There are systems where you can print onto special paper - which you then iron-on to the PCB to transfer it. These are quite neat - cheap and hobbyist friendly. You will often need to fill in a few gaps manually with a marker - make sure all of the mask is firmly down - otherwise the etch fluid will get under it.
</p>
<p>Many people use Photo-etching, where a board is primed with a photo-sensitive resistive mask. By exposing the mask to <a class="wiki" href="/wiki/uv.html" title="Ultra Violet Light">UV</a>, it then can be etched underneath. You print your design onto OHP slides, then project a <a class="wiki" href="/wiki/uv.html" title="Ultra Violet Light">UV</a> light through them onto the PCB. You can then continue to etch normally. This can be expensive - but also gives the best results.
</p>
<p>You will also require a Pillar Drill and clamping table for it- as you will accurately need to drill via's (where the one layer crosses to the other) and connection holes for components and cables. I recommend still using sockets for IC's where possible, and going with headers for all cables - allowing some amount of modularity in your designs.
</p>
