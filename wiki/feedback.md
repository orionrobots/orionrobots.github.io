---
layout: page
title: Feedback
tags: [electronics, programming, robots, robotics]
date: 2005-08-31 23:21:39
---
When you wish to accurately control and respond to something, you normally expect feedback. One such feedback is the visible mouse pointer movement on the screen in response to you moving the mouse.

This is an important concept in robotics, as even the most basic limb control requires some kind of feedback and correction mechanism. The implementation of a feedback system would normally consists of a sensor and something to compare the sensors output with what it should be, correcting the actuator(motor, limb etc) to try and maintain the correct setting in a closed loop.

A [Servo Motor](/wiki/servo_motor.html "A motor with built in positioning control - easily interfaced with digital systems") is a great example of this.  A servo comprises an actuator and feedback loop in one package.  Your [MicroController](/wiki/microcontroller.html "A programmable digital controller ") just needs to tell it where to go. It then tries to compare the signal you give it - which is where it is meant to be, with the feedback - where it actually is, and uses the perceived difference between them to generate an Error Signal. The error signal is then used to move the motor to try and get it to the desired point.

More complex feedback allows for more complex behaviour, and may allow an advanced robot to build a detailed sensory picture of their surroundings.

## Human senses

One interesting and important concept in feedback is understanding human senses, and a little about how we experience them.

The term quale (pronounced kwa-li) is used to describe our experiences of such senses. What our senses are not, are little faithful reproductions of th outside world on a little movie theatre for our brain to process. The way we experience things is highly contextual.

You may _think_ you can see the whole room, but most of it is actually a blurry mess, apart from the limited area you are really focused on. The rest is reconstructed into what your brain thinks should be there until you actually look at it. It is through exploiting this that many illusions work.

Your eyes actually subconsciously dart around, finding and re-memorizing details. We call the eye movements saccades.

Your ears are also highly context sensitive, this is why you are able to filter out a constant background noise, for example a computer whirring (which you are probably filtering out right now until I mentioned it) or local highways. However - if an unexpected sound appears in your sensory range, you immediately tune into it, almost to the exclusion of other sounds. Some sounds are so important to our brain, that they appear louder because of their evolutionary importance - a key example being the sounds of a baby crying.

Taste is a difficult one, but it goes without saying that most likes and dislikes are more psychological than to do with physical taste bud differences. However - your bodies own needs can regulate this - if you need salt or you have built a strong salt dependency, salty food will seem less so.

So you see - to give a robot feedback, and intelligent behaviour - you need not only to give them senses, but context in which to use them.

## Internal monologue

One other interesting piece of feedback we as humans have as part of "conciousness" is our internal monologue. This requires a language - tokens to express concepts and objects. The internal dialogue is going on in your head constantly - sometimes in multiple threads. When you sit down and think to yourself - you are having exactly this experience, as you ask yourself questions, and use language to marshal thoughts into logical concepts.

It is with this you can create stories, with ifs and whens. It is an essential part of being human, and in AI, some experimenters are only just beginning to recognise it.
