---
layout: page
title: multitasking in robots
date: 2006-06-30 07:48:54
---
<p>You have a design for your superduper robot, but you know there a couple of seperate things you want it to perform or handle at the same time. Your processor is a simple small device, and does not have any kind of threading <a class="wiki" href="/wiki/api.html" title="Acronym: Application Programming Interface">API</a>. You realise you are going to have to go back to some basic principles.
</p>
<p>Consider that you have already broken down things into tasks - this is good. Now, those tasks could then be changed into state machines, which depending on what state they were left in, they determine what to do next. Not sure what I mean?
</p>
<p>Okay - lets go into some pseudo code. Imagine a function that simply has the code
</p>
<pre class="codelisting" data-wrap="1" dir="ltr" id="codebox1" style="white-space:pre-wrap; white-space:-moz-pre-wrap !important; white-space:-pre-wrap; white-space:-o-pre-wrap; word-wrap:break-word;">function foo:
  while true:
    do a
    do b
    do c</pre>
<p>
<br/>Now, this will repeat forever, performing a, then b, then c. You also have another function:
</p>
<pre class="codelisting" data-wrap="1" dir="ltr" id="codebox2" style="white-space:pre-wrap; white-space:-moz-pre-wrap !important; white-space:-pre-wrap; white-space:-o-pre-wrap; word-wrap:break-word;">function bar:
  while true:
    do d
    do e
    do f</pre>
<p>
<br/>What you would like is to have foo, and bar executing simultaneously. One way to do this is have a main loop, and convert foo and bar to only do one thing each, then return immediately. However, since they have to do a few things, you would need to remember what to do next - so you could store this in a variable. In some systems you can use static variables, but I suspect here you have a choice of globals or locals. To try and stop it getting messy - lets just have a local.
</p>
<pre class="codelisting" data-wrap="1" dir="ltr" id="codebox3" style="white-space:pre-wrap; white-space:-moz-pre-wrap !important; white-space:-pre-wrap; white-space:-o-pre-wrap; word-wrap:break-word;">function foo(currentstatus):
  if currentstatus = 0:
    do a
    return 1
  if currentstatus = 1:
    do b
    return 2
  if currentstatus = 2:
    do c
    return 0</pre>
<p>
<br/>Now if your main loop looks like this:
</p>
<pre class="codelisting" data-wrap="1" dir="ltr" id="codebox4" style="white-space:pre-wrap; white-space:-moz-pre-wrap !important; white-space:-pre-wrap; white-space:-o-pre-wrap; word-wrap:break-word;">function main:
  var foo_status = 0
  while true:
    foo_status = bar(foo_status)</pre>
<p>It is fairly clear that this loop will then cause it to again do a, then b, then c in a loop.
</p>
<p>Converting bar as well:
</p>
<pre class="codelisting" data-wrap="1" dir="ltr" id="codebox5" style="white-space:pre-wrap; white-space:-moz-pre-wrap !important; white-space:-pre-wrap; white-space:-o-pre-wrap; word-wrap:break-word;">function foo(currentstatus):
  if currentstatus = 0:
    do d
    return 1
  if currentstatus = 1:
    do e
    return 2
  if currentstatus = 2:
    do f
    return 0</pre>
<p>You can then add it into the main loop:
</p>
<pre class="codelisting" data-wrap="1" dir="ltr" id="codebox6" style="white-space:pre-wrap; white-space:-moz-pre-wrap !important; white-space:-pre-wrap; white-space:-o-pre-wrap; word-wrap:break-word;">function main:
  var foo_status = 0
  var bar_status = 0
  while true:
    foo_status = bar(foo_status)
    bar_status = bar(bar_status)</pre>
<p>It should probably be easy by now to see that you will now get a,d,b,e,c,f,a,d.... and so on. Bosh - here is your multithreading.
</p>
<p>What really bears serious analysis in your design is the persisting data. My simplified example had only an incrementing variable, but sometimes complete structures or objects would be passed around. This is a model that works excellently for C. The best thing is that if in C, you pass around a struct pointer, and you do not need to return anything.
</p>
<p>On the systems like the BASIC STAMPs PBASIC, you will probably need to use GOSUBS, and I am not sure that there is any other type of variable beyond a global in it. So you wouldn't be passing around the var, just referencing and incrementing it in your subroutines.
</p>
<p>On top of this you can start to build complex and interesting event based system, and whats more, on many microcontrollers you also have interrupts, and might even set up a timer based interrupt to perform the task of the main loop here.
</p>