---
created: 2007-01-10 15:19:38
description: OSX, NXT, BlueTooth and Ruby - A match made in byte heaven?
tags: [robots, ruby, bluetooth, lego, nxt, linux]
title: OSX, NXT, BlueTooth and Ruby - A match made in byte heaven?
layout: post
---
 <p>
  Ruby, if you have never come across it, is an interpreted language which is
  [object oriented](Object+Oriented "Object Oriented")
  , very easy to write and understand, and has some very good roots, such a Perl
  , and
  [Smalltalk](Smalltalk "An Object Oriented Programming Language")
  , with some aspects that are similar to the best of Java
  and
  [Python](Python "Python")
  . It is a very forgiving language to program in, and the kind where 5 lines of Ruby
  can do what may take 500 lines of Java
  or
  [C](C+Language "A very common and popular programming language")
  code.
 </p>
 <p>
  Now some clever NXT'er (is that a word?), Tony Buser, has now put together a Ruby module for communicating with the
  [NXT](NXT "Legos NeXT generation robotics kit")
  via
  [bluetooth](Bluetooth "Bluetooth")
  . This control set up is in a kind of macromode, where the PC is using bluetooth to read sensors, and set actuators, but may also be adapted just to provide prompts to a program on the machine. It is not however, a Ruby interpreter that runs on the
  [NXT](NXT "Legos NeXT generation robotics kit")
  . It is, in many ways, a similar setup to MSRS.
 </p>
 <p>
  It runs nicely in OSX, and probably Linux, once you have paired your NXT and setup a bluetooth serial port connection in /dev. I cannot say what its compatibility in Windows would be like, as although Ruby runs in Windows, the serial port and bluetooth may be much harder to deal with. Windows does not have any structure equivalent to /dev.
 </p>
 <p>
  I am not yet sure of how Tony intends to license the project going forward, but I will be watching this one with interest. Its definitely usable, although there are a few things that may need to happen before prime time, including documentation.
 </p>
 <h1 id="Links">
  Links
 </h1>
 <ul>
  <li>
   <a href="http://juju.org/articles/2006/08/06/ruby-nxt" >
    http://juju.org/articles/2006/08/06/ruby-nxt
   </a>
   - Ruby NXT - Juju
  </li>
  <li>
   <a href="http://juju.org/" >
    http://juju.org/
   </a>
   - Tony Busers technology Blog
  </li>
  <li>
   <a href="http://juju.org/svn/public/ruby-nxt/trunk/" >
    http://juju.org/svn/public/ruby-nxt/trunk/
   </a>
   - The current module source for browsing
  </li>
  <li>
   <a href="http://news.lugnet.com/robotics/nxt/?n=58" >
    http://news.lugnet.com/robotics/nxt/?n=58
   </a>
   - Announcement of this project on
   [lugnet](Lugnet "Lego Users Group Network")
  </li>
 </ul>
