---
layout: page
title: C Language
date: 2007-01-01 15:49:24
---
<p>C is probably one of the most popular Programming Languages<a class="wiki wikinew for-review" title="Create page: Programming Language">?</a>, and is almost considered a lowest common denominator. It is used heavily in embedded systems like <a class="wiki" href="/wiki/robotic.html" title="Robotic">robotics</a>, even simple <a a="" brain")="" class="wiki" for="" href="/wiki/microcontroller.html" robot"="" title="A programmable digital controller (or ">microcontrollers</a> like the <a class="wiki" href="/wiki/pic.html" title="PIC">PIC</a> and the <a class="wiki" href="/wiki/rcx.html" title="The Lego Robot Command Explorer">RCX</a> can be made to support it. It was developed in 1972, by Dennis Ritchie at Bell Labs, and went hand in hand with Unix. It still retains a good relationship with modern related systems like Linux<a class="wiki wikinew for-review" title="Create page: Linux">?</a>, Solaris<a class="wiki wikinew for-review" title="Create page: Solaris">?</a> and BSD<a class="wiki wikinew for-review" title="Create page: BSD">?</a>.
</p>
<p>C offers many concepts like procedural programming, that is, allowing a coder to group together statements into reusable functions, and libraries of functions. C has structures allow variables to be collected together, both for convenience in storage and manipulation, as well as being able to use those structures to closely reflect the structure of hardware registers. C headers can be used to prototype or specify the details of a functions type before the function is implemented. C also offers preprocessing so that files may be included, and macros may be created and expanded. This preprocessor is powerful enough that it allows for conditional compilation - the concept that in different compiling circumstances, only some parts of the code are actually compiled.
</p>
<p>C has a standard library of routines for basics like memory allocation, IO, threading, mathematics and string handling. Note that this standard library may not be available on every platform, and platform designers and third parties may provide replacement libraries as well as additional library functions.
</p>
<p>Strings are not it's strongest point, and C is still best suited to low level functionality - that is, the code that needs to sit closest to the machine. It has been referred to as portable or readable assembly code. C is statically typed, and is generally a compiled language, compiled down to machine code binary, or some intermediate bytecode format.
</p>
<p>The death of C has been predicted many times, although it has a habit of living on for it's sheer flexibility and being so close to the system. Indeed, it may outlive it's successor C++<a class="wiki wikinew for-review" title="Create page: CPlusPlus">?</a>, as while C++ is superseded by further higher level languages, there is nothing quite like C when low level interaction is required.
</p>
<p>C programs can often be made of many different C files, and good programming practice normally means separating a group of regularly occurring or similar actions into functions, and then grouping related functions into their own C source files with headers to match them. This will then mean that more than one file needs to be compiled. <a class="wiki" href="/wiki/idetool.html" title="Integrated Development Environment">IDE's</a> for C often have their own project system which allows many files to be compiled from one build operation, and there is also the common makefile system which uses a file to instruct the system what needs to be built and when.
</p>
<p>If you would like to use GCC on your system, it is highly recommended that you do not purchase a <a class="wiki" href="/wiki/pic.html" title="PIC">PIC</a> and look around at alternatives like the Atmel<a class="wiki wikinew for-review" title="Create page: Atmel">?</a> AVR<a class="wiki wikinew for-review" title="Create page: AVR">?</a>, or the 8051<a class="wiki wikinew for-review" title="Create page: 8051">?</a>.
</p>
<h1  id="Related">Related</h1>
<ul><li> <a class="wiki" href="/wiki/nqc.html" title="Not Quite C - A Lego PBrick Programming Language">NQC</a> - Not Quite C - a C like programming system for the <a class="wiki" href="/wiki/lego_rcx.html" title="The Lego RCX">Lego RCX</a>
</li><li> <a class="wiki" href="/wiki/brickos.html" title="An entire Embedded OS for the RCX">BrickOS</a> - Another way to program C with a Unix like OS for the <a class="wiki" href="/wiki/rcx.html" title="The Lego Robot Command Explorer">RCX</a>
</li></ul><p>
</p>
<h1  id="Links">Links</h1>
<ul><li> <a  href="http://en.wikipedia.org/wiki/C_%28programming_language%29" rel="external" target="_blank">The C programming Language on Wikipedia</a>
</li><li> <a  href="http://sdcc.sourceforge.net/" rel="external" target="_blank">Small Device C Compiler</a> - Open Source Embedded Device C Compiler
</li><li> <a  href="http://www.microchipc.com/HiTechCFAQ/" rel="external" target="_blank">PIC micro and C FAQ - Microchip</a>
</li><li> <a  href="http://www.swarthmore.edu/NatSci/echeeve1/Ref/C%20for%20PIC/C_Intro.html" rel="external" target="_blank">Tutorial for C on PIC - Swarthmore College</a>
</li><li> <a  href="http://www.htsoft.com/products/PICClite.php" rel="external" target="_blank">PIC C Lite - HTech's Freeware PIC tool</a>
</li><li> <a  href="http://my.execpc.com/~geezer/embed/tools.htm" rel="external" target="_blank">Grid of Free Software tools for Embedded Systems</a>
</li></ul><p>
<br/>{AMAZONSELFOPTLINK(pub=&gt;orionrobots-21)/}
</p>
