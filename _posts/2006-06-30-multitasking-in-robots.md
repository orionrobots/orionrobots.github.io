---
layout: post
title: multitasking in robots
date: 2006-06-30 07:48:54
tags: [programming, code, microcontrollers]
---
You have a design for your awesome robot, but you know there a couple of separate things you want it to perform or handle at the same time. Your processor is a simple small device, and does not have any kind of threading. You realise you are going to have to go back to some basic principles.

Consider that you have already broken down things into tasks - this is good. Now, those tasks could then be changed into state machines, which depending on what state they were left in, they determine what to do next. Not sure what I mean?

Okay - lets go into some pseudo code. Imagine a function that simply has the code

    function foo:
      while true:
        do a
        do b
        do c

Now, this will repeat forever, performing a, then b, then c. You also have another function:

    function bar:
      while true:
        do d
        do e
        do f

What you would like is to have foo, and bar executing simultaneously. One way to do this is have a main loop, and convert foo and bar to only do one thing each, then return immediately. However, since they have to do a few things, you would need to remember what to do next - so you could store this in a variable. In some systems you can use static variables, but I suspect here you have a choice of globals or locals. To try and stop it getting messy - lets just have a local.

    function foo(currentstatus):
      if currentstatus = 0:
        do a
        return 1
      if currentstatus = 1:
        do b
        return 2
      if currentstatus = 2:
        do c
        return 0

Now if your main loop looks like this:

    function main:
      var foo_status = 0
      while true:
        foo_status = bar(foo_status)

It is fairly clear that this loop will then cause it to again do a, then b, then c in a loop.

Converting bar as well:

    function foo(currentstatus):
      if currentstatus = 0:
        do d
        return 1
      if currentstatus = 1:
        do e
        return 2
      if currentstatus = 2:
        do f
        return 0

You can then add it into the main loop:

    function main:
      var foo_status = 0
      var bar_status = 0
      while true:
        foo_status = bar(foo_status)
        bar_status = bar(bar_status)

It will now do a,d,b,e,c,f,a,d.... and so on.

What really bears serious analysis in your design is the persisting data. My simplified example had only an incrementing variable, but sometimes complete structures or objects would be passed around. This is a model that works excellently for C. The best thing is that if in C, you pass around a struct pointer, and you do not need to return anything.

On the systems like the BASIC STAMPs PBASIC, you will probably need to use GOSUBS, and I am not sure that there is any other type of variable beyond a global in it. So you wouldn't be passing around the var, just referencing and incrementing it in your subroutines.

On top of this you can start to build complex and interesting event based system, and whats more, on many microcontrollers you also have interrupts, and might even set up a timer based interrupt to perform the task of the main loop here.

