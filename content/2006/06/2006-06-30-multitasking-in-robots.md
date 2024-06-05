---
layout: post
title: Multitasking in Robots
date: 2006-06-30 07:48:54
tags: [robotics, robot building, programming, code, microcontrollers, robotics at home]
---
You have a design for your awesome robot, but you know there a couple of separate activities you want it to perform or handle at the same time.
Your processor is a simple small device, and does not have any kind of threading.
You realise you are going to have to go back to some basic principles.

Consider that you have already broken down things into tasks, which is good.
Now, those tasks could then be changed into state machines, which depending on what state they were left in, they determine what to do next.
Not sure what I mean?

Okay then lets go into some pseudo code.
Imagine a function that simply has the code

```pseudo-code
function monitor_sensors:
  while true:
    do a
    do b
    do c
```

Now, this will repeat forever, performing a, then b, then c.
You also have another function:

```pseudo-code
function advance_algorithm:
  while true:
    do d
    do e
    do f
```

What you would like is to have monitor_sensors, and advance_algorithm executing simultaneously.
One way to do this is have a main loop, and convert monitor_sensors and advance_algorithm to only do one step each, then return immediately.
However, since they have to do a few things, you would need to remember what to do next, so you could store this in a variable.

In some systems you can use static variables, but I suspect here you have a choice of globals or locals.
To try and stop it getting messy lets just have a local.

```pseudo-code
function monitor_sensors(currentstatus):
  if currentstatus = 0:
    do a
    return 1
  if currentstatus = 1:
    do b
    return 2
  if currentstatus = 2:
    do c
    return 0
```

Now if your main loop looks like this:

```pseudo-code
function main:
  var monitor_sensors_status = 0
  while true:
    monitor_sensors_status = monitor_sensors(monitor_sensors_status)
```

It is fairly clear that this loop will then cause it to again do a, then b, then c in a loop.

Converting advance_algorithm as well:

```pseudo-code
function advance_algorithm(currentstatus):
  if currentstatus = 0:
    do d
    return 1
  if currentstatus = 1:
    do e
    return 2
  if currentstatus = 2:
    do f
    return 0
```

You can then add it into the main loop:

```pseudo-code
function main:
  var monitor_sensors_status = 0
  var advance_algorithm_status = 0
  while true:
    monitor_sensors_status = monitor_sensors(monitor_sensors_status)
    advance_algorithm_status = advance_algorithm(advance_algorithm_status)
```

It will now do `a,d,b,e,c,f,a,d....` and so on.

What really requires serious analysis in your design is the persisting data.
My simplified example had only an incrementing variable, but sometimes complete structures or objects would be passed around.
This is a model that works excellently for C.
The best thing is that if in C, you pass around a struct pointer, and you do not need to return anything.

On the systems like the BASIC STAMPs PBASIC, you will probably need to use GOSUBS, and I am not sure that there is any other type of variable beyond a global in it.
So you wouldn't be passing around the var, just referencing and incrementing it in your subroutines.

On top of this you can start to build complex and interesting event based system, and whats more, on many microcontrollers you also have interrupts, and might even set up a timer based interrupt to perform the task of the main loop here.

(paid links)

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&language=en_GB&marketplace=amazon&region=GB&placement=B082WD5YV9&asins=B082WD5YV9&linkId=e40e6e6802507d8646f3131923f1dea1&show_border=true&link_opens_in_new_window=true"></iframe><!-- lego mindstorms review 2021 -->
