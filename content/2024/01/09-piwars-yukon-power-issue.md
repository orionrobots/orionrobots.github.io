---
title: Strange Yukon power behaviour on Big Ole Yellow
date: 2024-01-09T00:00:00Z
tags: [robot electronics, raspberry pi pico, pimoroni yukon, big ole yellow, piwars 2024]
description: Motors running when they shouldn't
---
We had an amusing power problem after adding the Yukon to the Big Ole Yellow robot for Piwars 2024.

We'd managed to crimp one set of motor cables, and then the battery cable - all red and black.
We'd plugged the battery into one of the motor outputs.

Interesting things happened - like an unusual light on the yukon, and a set of tracks just moving. What?

It took a few minutes of head scratching to figure out what happened, but then we swapped it, crimped the other motor connector and it was all good.

Since the actual battery connector is a bit short, some inline WAGOs made it a bit clearer which were the power cables were, and easier to swap out for bench power during testing.
