---
layout: page
title: Binary
date: 2006-04-19 16:08:27
---
<p>The basic computer method of storing information in a series of encoded zeros and ones - or <a class="wiki" href="/wiki/bit.html" title="Binary Digit">bits</a>. Binary is manipulated with Arithmetic and <a class="wiki" href="/wiki/boolean.html" title="Boolean">Boolean</a> operations.
</p>
<p>Binary based devices are what people mean when they commonly refer to <em>Digital</em> devices.
</p>
<p>It is the system currently used in most computers, as well as the <a class="wiki" href="/wiki/artificial_intelligence.html" title="Artificial Intelligence">Artificial Intelligence</a> of Robots. Many robots use <a a="" brain")="" class="wiki" for="" href="/wiki/microcontroller.html" robot"="" title="A programmable digital controller (or ">MicroControllers</a> to process their instructions. In fact, almost every gadget you have, mobile phone, PDA, and even a light switch could be said to operate using binary. Even <a class="wiki" href="/wiki/beam_robots.html" title="Biology, Electronics, Aesthetics and Mechanics">BEAM Robots</a>, which are based on analog electronics abuse digital logic devices to produce their behaviour.
</p>
<h2  id="How_does_it_work_">How does it work?</h2>
<p>Imagine the Zero as representing an Off or False state, and One the On or True state - imagine a light bulb and switch for example. Since these are the two simplest states represented by any electronic circuit - it is not difficult to see why they were used for computing.
<br/>Now if you are then able to create a simple switch which acts upon a 1 or 0 input, changing the input of some other device - you are able to create more intelligent <a class="wiki" href="/wiki/boolean.html" title="Boolean">Boolean</a> <a class="wiki" href="/wiki/logic_gate.html" title="Devices designed to perform logical operations">Logic Gates</a>.
</p>
<p>Also because of the high tolerances when only needing to detect two states, high transmission rates can be attained. At low rates it may arguably be quite inefficient use of a wire which can carry a huge continuous range of voltages - but when you are talking about millions of <a class="wiki" href="/wiki/bit.html" title="Binary Digit">binary digits</a> per second, then it become extremely efficient.
</p>
<p>Analog describes the polar opposite of this system.
</p>
<p>Also please refer to <a class="wiki" href="/wiki/parallel_data_stream.html" title="Parallel Data Stream">Parallel Data</a> and <a class="wiki" href="/wiki/serial_data_stream.html" title="Serial Data Stream">Serial Data</a>.
</p>
<h2  id="Converting_Binary_To_Decimal">Converting Binary To Decimal</h2>
<p>If you have a multi-digit binary number, take each digit as being the presence or note of that places power of two. For example - reading from the right to left, the first digit will represent 2 to the power of zero. Any number to 0 is simply 1. So if it is on, you have 1, other wise 0. The next is 2 to the power of 1 - which simply gives 2 or 0. The 3rd digit will be 2 to the power of 2 - 4.
</p>
<p>So - if you had the binary number 1101:
</p>
<pre>
 1  1  0  1
+8 +4 +0 +1 = 13

 1  0  1  1
+8 +0 +2 +1 = 11

 1  0  1  0  1
+16+0 +4 +0 +1 = 21
</pre>
<p>
<br/>You can represent any whole integer with this system - but you will require more digits as they get larger. The number of bits used is known as the Word Length, and at the time of writing is commonly 32, with some 64 and 128 bit buses occurring occasionally. The number of bits is also commonly a power of two itself - for keeping manipulation simple.
</p>
<h2  id="Converting_from_Decimal_to_Binary">Converting from Decimal to Binary</h2>
<p>This is a little harder - but the given way is this, you find the largest power of two that will go into the number - and mark that as on. You then subtract it from the total, and do so again until you get to 0.
</p>
<h1  id="Related_Topics">Related Topics</h1>
<ul><li> <a class="wiki" href="/wiki/and.html" title="AND">AND</a>
</li><li> <a class="wiki" href="/wiki/or.html" title="OR">OR</a>
</li><li> <a class="wiki" href="/wiki/not.html" title="NOT">NOT</a>
</li><li> <a class="wiki" href="/wiki/xor.html" title="XOR">XOR</a>
</li><li> <a class="wiki" href="/wiki/george_boole.html" title="The creator of Boolean Logic - the root of all our digital computing">George Boole</a>
</li><li> <a class="wiki" href="/wiki/logic_gate.html" title="Devices designed to perform logical operations">logic Gates</a>
</li><li> <a class="wiki" href="/wiki/boolean.html" title="Boolean">Boolean</a>
</li><li> Boolean Logic
</li><li> <a a="" brain")="" class="wiki" for="" href="/wiki/microcontroller.html" robot"="" title="A programmable digital controller (or ">MicroController</a>
</li><li> <a class="wiki" href="/wiki/parallel_data_stream.html" title="Parallel Data Stream">Parallel Data</a>
</li><li> <a class="wiki" href="/wiki/serial_data_stream.html" title="Serial Data Stream">Serial Data</a>
</li><li> <a class="wiki" href="/wiki/bit.html" title="Binary Digit">BIT</a>
</li><li> <a class="wiki" href="/wiki/byte.html" title="8 Bits">Byte</a>
</li><li> Digital
</li><li> <a class="wiki" href="/wiki/io.html" title="Input Output">IO</a>
</li><li> <a class="wiki" href="/wiki/truth_table.html" title="Truth Table">Truth Table</a>
</li></ul><p>
</p>
<h1  id="Links">Links</h1>
<p>
</p>
<ul><li> <a  href="http://www.williamson-labs.com/480_logic.htm" rel="external" target="_blank">Digital Logic - Williamson Labs</a> - A rather good explanation with excellent animated demonstrations.
</li></ul><p>
</p>
