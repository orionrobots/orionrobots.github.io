---
layout: page
title: Modular Robot Design
date: 2005-10-11 23:39:35
---
<p>There are many advantages to be had by using modular design and building techniques with robots.
</p>
<h1  id="Reusability">Reusability</h1>
<p>First is the advantage of reusing resources. Some electronic, mechanical and other parts are expensive so <a class="wiki" href="/wiki/part_reuse.html" title="Part Reuse">Part Reuse</a> is a desirable property.
</p>
<p>If you spend time designing a system to perform a task, and you are aware (with some forethought) that you may use this component of the design again, try to modularise it. This is a concept common in software design, and applies just as well to hardware.
</p>
<h1  id="Upgrade_Replace_and_Repair">Upgrade, Replace and Repair</h1>
<p>Modules should be designed so they has some generic properties which would allow another module of a different kind to be substituted. This allows you to upgrade, repair and modify modules easily.
</p>
<h1  id="Design_and_Building">Design and Building</h1>
<p>While it is true that modularising might increase the complexity, it may actually help the other way. It is often easier to deal with a number of well defined connected systems, than one large unwieldy bulk of a system.
</p>
<p>Think of bitesized peices. Designing a small power board, then a motor board, then a sensor board is easier than deisgning a power/motor/sensor board.
</p>
<p>As well as simpler design, it will also make for simpler assembly. This menas you can build each section as the complete module. You can test them as seperate parts, and if things dont work out, you will probably only need change one modules as opposed to many.
</p>
<h1  id="Considerations">Considerations</h1>
<p>When building modules think about how they will connect. If it is electronic or mechanical try to use readily available connectors which can be easily disconnected provided they have enough friction to hold when needed.
</p>
<p>It will help to start with a block diagram of differnet electronic, and mechanical systems. Parts of this block diagram may be enlarged and furthar detailed in other places. This means that a larger module may well be composed of some smaller ones.
</p>
<p>A system or larger module will have some specific parts as well as modules, dont be afraid to do that, but when you start building 5 similar robots with minor variances, then perhaps you can take the similar sections and make this a module.
</p>
<p>Ensure that the electronic interfaces are kept as simple as possible, over-complicating modules will mean it becomes much harder to use them in future. It is often a good plan to use well known and standardised connection systems and protocols, for example <a class="wiki" href="/wiki/serial_data_stream.html" title="Serial Data Stream">RS232 Serial</a>, or <a class="wiki" href="/wiki/universal_serial_bus.html" title="Universal Serial Bus">Universal Serial Bus</a>. This goes for mechanical connections too.
</p>
<p>If you are making a mechanical connection, for example a driving shaft, consider what forces it may undergo. Not just the rotation (in this example), but any shearing or bending stresses it may endure in normal use. This could be the difference between two sections holding well, or flying apart as the axle breaks.
</p>
<p><a class="wiki" href="/wiki/lego.html" title="The best known construction toy">Lego</a> and other Construction Toys<a class="wiki wikinew for-review" title="Create page: Construction Toys">?</a> are excellent modular building systems. You can use them to build larger modules and furthar embody this concept.
</p>
<h1  id="Disadvantages">Disadvantages</h1>
<p>The big disadvantage of modules is that they require a great deal more forethought, research and design. But these are key qualities a good robot builder should be fostering anyway.
</p>
<p>Another consideration are that module interfaces may add unnecessary weight and complication. But good design should keep you away from that.
</p>
<h1  id="When_not_to_use_modules">When not to use modules</h1>
<p>If you are building a very simple or small robot, with few parts then obviously you do not need to go full on into a module. However, as soon as you find that you need block diagrams, then you probably have modules.
</p>
<p><a class="wiki" href="/wiki/building_tips.html" title="Hints and helpers for actually building robots, and other stuff.">Building Tips</a>
</p>
