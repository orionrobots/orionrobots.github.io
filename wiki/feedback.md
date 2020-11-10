---
layout: page
title: Feedback
date: 2005-08-31 23:21:39
---
<p>When you wish to accurately control and respond to something, you normally expect feedback. One such feedback is the visible mouse pointer movementy on the screen in response to you moving the mouse.
</p>
<p>This is an important concept in robotics, as even the most basic limb control requires some kind of feedback and correction mechanism.  The implementation of a feedback system would normally consists of a sensor and something to compare the sensors output with what it should be, correcting the actuator(motor, limb etc) to try and maintain the correct setting in a closed loop.
</p>
<p>A <a href="/wiki/servo_motor.html" title="A motor with built in positioning control - easily interfaced with digital systems">Servo Motor</a> is a great example of this.  A servo comprises an actuator and feedback loop in one package.  Your <a a="" brain")="" for="" href="/wiki/microcontroller.html" robot"="" title="A programmable digital controller (or ">MicroController</a> just needs to tell it where to go. It then tries to compare the signal you give it - which is where it is meant to be, with the feedback - where it actually is, and uses the perceived difference between them to generate an Error Signal. The error signal is then used to move the motor to try and get it to the desired point.
</p>
<p>More complex feedback alows for more complex behaviour, and may allow an advanced robot to build a detailed sensory picture of their surroundings.
</p>
<h1  id="Human_senses">Human senses</h1>
<p>One interesting and important concept in feedback is understanding human senses, and a little about how we experience them.
<br/>The term quale (pronounced kwa-li) is used to describe our experiences of such senses. What our senses are not, are little faithful reproductions of th outside world on a little movie theatre for our brain to process. The way we experience things is highly contextual.
</p>
<p>You may <em>think</em> you can see the whole room, but most of it is actually a blurry mess, apart from the limited area you are really focused on. The rest is reconstructed into what your brain thinks should be there until you actually look at it. It is through exploiting this that many illusions work.
</p>
<p>Your eyes actually subconciously dart around, finding and rememorizing details. We call the eye movements staccades.
</p>
<p>Your ears are also highly context sensitive, this is why you are able to filter out a constant background noise, for example a computer whirring (which you are probably filtering out right now until I mentioned it) or local highways. However - if an unexpected sound appears in your sensory range, you immediately tune into it, almost to the exclusion of other sounds. Some sounds are so important to our brain, that they appear louder because of their evolutionary importance - a key example being the sounds of a baby crying.
</p>
<p>Taste is a difficult one, but it goes without saying that most likes and dislikes are more psychological than to do with physical taste bud differences. However - your bodies own needs can regulate this - if you need salt or you have built a strong salt dependancy, salty food will seem less so.
</p>
<p>So you see - to give a robot feedback, and intelligent behaviour - you need not only to give them senses, but context in which to use them.
</p>
<h1  id="Internal_monologue">Internal monologue</h1>
<p>One other interesting peice of feedback we as humans have as part of "conciousness" is our internal monologue. This requires a language - tokens to express concepts and objects. The internal dialog is going on in your head constantly - sometimes in multiple threads. When you sit down and think to yourself - you are having exactly this experience, as you ask yourself questions, and use language to marshal thoughts into logical concepts.
</p>
<p>It is with this you can create stories, with ifs and whens. It is an essential part of being human, and in AI, some experimenters are only just beginning to recognise it.
</p>
