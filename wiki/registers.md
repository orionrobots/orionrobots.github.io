---
layout: page
title: Registers
date: 2005-10-03 14:39:50
---
<p><a class="wiki" href="/wiki/microprocessor.html" title="Central Processing Unit">CPU</a> and <a a="" brain")="" class="wiki" for="" href="/wiki/microcontroller.html" robot"="" title="A programmable digital controller (or ">Microcontroller</a> cores often need to manipulate data very rapidly and internally. In terms of core computing, transactions with external <a class="wiki" href="/wiki/ram.html" title="Random Access Memory">RAM</a> and <a class="wiki" href="/wiki/rom.html" title="Read Only Memory">ROM</a> devices, even caches, can be slow and expensive when compared with using a storage location on the same peice of silicon.
</p>
<p>In general registers are now used to refer to storage locations directly on the CPU die, although historically they generally meant any storage location. I will be referring mostly to the common usage meaning on-board registers for the rest of this artical though.
</p>
<p>Registers are often used to store the parameters of an operation, the result afterwards, as well as specialised registers for actually storing the code for an operation and the operations location in memory (the program counter). Registers often have very fast processes for incrementing (adding one) and decrementing (removing one).
</p>
<p>The bit-width of the registers of a processor are normally what determine it being named a 8, 16, 32 or 64 bit processor - and they directly effect the rate at which it is able to process and shift data. Some processor cores, like the x86 range (including the Intel Pentium) allow registers to be used for multiple purposes - ie one 32 bit register, which can also be 2x16 bit registers or 4x8 bit registers.
</p>
<p>This kind of low-level information is vital on some <a a="" brain")="" class="wiki" for="" href="/wiki/microcontroller.html" robot"="" title="A programmable digital controller (or ">Microcontroller</a> cores, where you still use assembler to program them, but many modern development environments have compilers and optimizers that automatically make use of these where it is advantagous to do so - for example placing a loop counter in a register so it can be rapidly referred to and incremented.
</p>
<p>Some very modern cores, like graphics and vector units actually have vector registers - designed for holding 4 floating point decimal values for manipulating 3D Mathematics equations very rapidly, but most registers on a core will be integers (whole numbers only). Although to be fair the actual stored data is all binary and it being a "float" or an "int" is relaly more to do with the operations that can be conveniently used on it. GPUs and VU's can perfrom vector and matrix operations directly on groups of registers, as well as performing floating point divides fast - an operation that is traditionally very slow. It is these convenient operations tht make them so effective at processing graphics and 3d maths, even more so than a general purpose CPU core running at a higher clock speed.
</p>
