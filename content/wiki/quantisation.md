---
layout: page
title: quantisation
tags: [electronics, computing, sensors]
date: 2008-11-03 11:21:26
---
When a signal is converted from Analog to Digital, it will no longer be identical to the original signal. The signal will be approximated to the nearest digital step in time, and in value.

This is known as quantisation. If the resolution of the digital capture/conversion is high enough, then the change will not be noticeable and will be acceptable.

A signal need not be perfect, but resolution should be chosen based on the requirements of the job at hand.

An easy example is an audio signal. MP3 audio looses a lot of information when initially recorded, however, that information is not that noticeable to the human ear. In fact, as well as quantisation, further information is deliberately discarded as it is considered not necessary to the sound, and most listeners will not be aware of this.

If you are building a robot that responds to loud noises, then the resolution in terms of amplitude really does not matter, and the resolution in time can probably be much lower than the 44khz used for CD audio.

Quantisation will turn a nice smooth sine wave into a staircase and may become a problem if inappropriate resolutions are used.
