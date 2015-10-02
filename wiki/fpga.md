---
layout: page
title: FPGA
date: 2005-10-06 18:08:32
---
<p>Otherwise known as Field Programmable Gate Arrays - this takes the concept of <a class="wiki" href="/wiki/deferred_design.html" title="Deferred design">Deferred Design</a> much furthar than a <a a="" brain")="" class="wiki" for="" href="/wiki/microcontroller.html" robot"="" title="A programmable digital controller (or ">MicroController</a>.
</p>
<p>It is the term "Field Programmable" that refers directly to <a class="wiki" href="/wiki/deferred_design.html" title="Deferred design">Deferred design</a>, that is that these could be reprogrammed in the field, after leaving the manufacturer.
</p>
<p>The thing about a MicroController is that you are designing a program to deal with things, which of course you may revise, and debug later. But if you have something that is incredibly simple in hardware, but difficult in code, and you <em>still</em> want deferred design - then these are the way forward.
</p>
<p>The concept of actually designing hardware -control lines, gates, switches etc with a simple programming language, and being able to rewrite it when necessary - is very powerful. The nice thing about hardware is you can create dedicated pathways, or more powerful constructs.
</p>
<p>There is very little to stop you designing a small MicroController on your FPGA. Indeed there are some places with <a class="wiki" href="/wiki/open_source.html" title="Products and packages which are generally free.">open source</a> patterns for exactly that purpose.
</p>
<p>You may program these devices using a language called Verilog<a class="wiki wikinew for-review" title="Create page: Verilog">?</a>. One important thing to remember- is this is not a sequential language like C, but a hardware system - where every line is functioning at once.
</p>
<p>It can be fairly interesting sequencing something, but there are methods to acheive that.
</p>
<p>Expect to see these cropping up in PC hardware, where as well as flashing <a class="wiki" href="/wiki/firmware.html" title="Software burned into a non volatile memory chip">firmware</a> in a device, you may also flash the FPGA and alter it a little more fundamentally. This ability may drive down pricing, and allow for upgrades down the pipe. Beware though - this may lead to bugs being rolled out and fixed later.
</p>
