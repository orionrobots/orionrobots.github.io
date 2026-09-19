---
layout: page
title: The Cybot Infra Red Protocol
tags: [robots, electronics, cybot]
date: 2004-11-16 14:13:00
---
It may be possible to use a digital video camera as an IR analyser, or a phototransistor with an oscilloscope, as if the frame rate is quick enough you can sometimes see IR bursts on them.

The first place to look is the Serial Port to Control Pad connection. It might be interesting to run the Cybot software in Wine, redirecting the port output to a fake port, then analysing this, while mirroring the stream to the real port - doing this for the return as well. The chances are that the [Infra Red](/wiki/infra_red.html "A type of EM radiation commonly used for digital communications") protocol used will just be an extension of this.

We would need to check if it is Pulse Coded IR (used by Sony Remote controls), Space Coded REC-80 (used by Panasonic Remote controls), Shift Coded RC-5 (used by Phillips) or otherwise.

I am still searching the net for it - but have not yet turned anything good up.
