---
layout: page
title: CAD - Computer Aided Design
tags: [robotics, software, cad, 3d printing]
date: 2005-08-11 13:27:17
---
This term is used to refer to the process, practice and tools for using computer to design and engineer systems.  It goes hand-in-hand with <a href="/wiki/cam.html" title="CAM">CAM</a>. Using CAD is a valuable skill for a robot builder to learn.

CAD allows you to visualise, and modify as well as set down an idea without having to machine or build it. You may be able to spot potential flaws, or better solutions through this process.  It also allows you to create blueprints and technical drawings to work from when building robots. It may allow you to make sure your measurements are correct and the parts will assemble as you would have liked, as well as building a bill of materials and costing the result. There is a very important motto in engineering - measure twice, cut once. CAD allows you to ensure those measurements actually work out.

There are smaller 2D CAD systems which are great for organising furniture, planning houses and offices - as well as architectural CAD systems - engineering and architectural CAD applications can vary by a great deal, but it is clear that there is a large common ground.

Some companies with modular furniture systems, or large ranges actually offer their own cut down CAD system with a library of their items, so you can then put in your rooms boundaries, and plan the organisation of furniture - these can be fairly useful.

Some CAD systems are more orientated at artwork and game characters than engineering - tools like Blender, Maya and 3D Studio Max fall into this category. They do not have the facilities for creating mechanical constraints, 3D Part mating and measurements, but instead offer more pliable features for freeform deformation, mesh editing as well as texturing and mapping.

A combination of the different systems means you could use one to focus on the engineering aspects and mechanisms, and the other to focus on the aesthetic aspects. Although many of the engineering CAD systems now have NURBs and bezier patches in them as well - so they could be used to model curved surfaces.

## 3D CAD

Some kind of 3D CAD system is an essential tool for getting into 3D Printing.

3D Cad systems include:

* FreeCAD - A free and Open Source CAD system for 3D modelling. It allows for very advanced modelling, but has a steep learning curve.
* Solidworks - Considered one of the best in the category, it is also prohibitively expensive for most hobbyists.
* Fusion 360 - This is free under certain conditions, with a paid license for more extensive work.
* TinkerCad - A free and Entry-level CAD system to get to know CAD design concepts.
* OpenSCAD - this is free and open source, it uses a programming language to describe models instead of point-and-click activity.
* BlocksCAD - A blocks programming front end to OpenSCAD.
* SketchUp - A 3D modelling system, suited to more architectural design than engineering design.

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&language=en_GB&marketplace=amazon&region=GB&placement=B07ZR467YR&asins=B07ZR467YR&linkId=3c7684f02eef521cf7ce7b447347903f&show_border=true&link_opens_in_new_window=true"></iframe>
<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&language=en_GB&marketplace=amazon&region=GB&placement=B00ZBS86ZW&asins=B00ZBS86ZW&linkId=299b16702482691d0c89ca7cc7b72ffa&show_border=true&link_opens_in_new_window=true"></iframe>
<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&language=en_GB&marketplace=amazon&region=GB&placement=B00XHNE9JK&asins=B00XHNE9JK&linkId=2fea7d34681a00bdd9d0f989dc73bd44&show_border=true&link_opens_in_new_window=true"></iframe>

## Lego CAD

<a href="/wiki/ldraw_system.html" title="The primary system for CAD representation of Lego parts">LDraw System</a> is a standard for <a href="/wiki/lego.html" title="The best known construction toy">Lego</a> CAD, implemented with the <a href="/wiki/ldraw_system.html" title="The primary system for CAD representation of Lego parts">LDraw System</a> renderer itself, or in more sophisticated systems like <a href="/wiki/mlcad.html" title="MLCad">MLCad</a> and <a href="/wiki/leocad.html" title="The Open Source Lego CAD System">LeoCad</a>.

In its current incarnation, <a href="/wiki/ldraw_system.html" title="The primary system for CAD representation of Lego parts">LDraw System</a> is actually closer to the mesh based systems - in that each part is simply that. Parts are built from primitives like studs (or lugs) and so on, then places together. They do not snap based on any part to part constraints, but are simply placed in the 3D coordinate space related to the origin.

Orion is involved in some investigation to create a parametric Lego CAD system, which does have real engineering mate systems and deals with models in a way that is aware of their physical properties, and not simply a boundary mesh.

Lego also offer their own application, the designer, which is a bit more intelligent in terms of snapping onto studs etc, but has a very limited library of parts, and does not lend itself well to Technic <a href="/wiki/lego.html" title="The best known construction toy">Lego</a> or robots. While easier to use than the <a href="/wiki/ldraw_system.html" title="The primary system for CAD representation of Lego parts">LDraw System</a> systems, it has nowhere near the power and flexibility of them.

## Electronic CAD Systems

EDA systems are aimed at electronics, and allow you to design schematics, and possibly even simulate or test them - to make sure they function as expected or find faults before production. You can even use these to simulate component faults and see how the circuit behaves. These are known as Schematic Capture or EDA packages.

SPICE is a simulation tool only, but projects like gEDA and programs like Multisim offer the full WYSIWIG editor and simulation.  Verilog is a system used both to model behaviour of complex logic devices, and sometimes actually program them - <a href="/wiki/fpga.html" title="Field Programmable Gate Array">FPGAs</a>. It is a programming language, but you may find visual representations of its behaviour. One well known implementation is the free Icarus simulator.  Multisim also can be augmented with a verilog simulator.

OrionRobots are currently interested in getting information regarding CAD and EDA systems which can run on the move on phones and tablets. If anyone knows of any EDA or CAD systems that run on one- Please use twitter to let us know.
