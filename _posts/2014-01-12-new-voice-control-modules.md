---
layout: post
tags: [orion explorer 1, arduino, voice control]
title: New Voice Control Modules
---
![Voice Module](/assets/2014-01-12-new-voice-control-modules/voice-module-close.jpg){:class="img-responsive"}<br />
I've been playing with the new speech modules - which will be on the store soon. Tonight, using the Messenger Library, I've trained one with an Arduino Leonardo with a small set of commands.

I've so far learned that it will retain commands between power cycles, that you need to choose words that are not phonetically similar. I had to tweak the messenger library to use the Arduino header - but will shortly post my simple training/test code on github. Once trained - it shouldn't take much to make the Arduino use it to switch robot modes or take drive instructions.

These modules connect via simple serial, and process up to 5 voice commands on board - delivering simple numbers via the serial connection when the commands are heard. It can store 3 banks of these - giving 15, but only one bank of 5 is active at once.

The code so far - <https://github.com/orionrobots/RecordVoiceModule>
