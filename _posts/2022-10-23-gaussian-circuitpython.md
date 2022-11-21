---
title: Gaussian distribution on Pico
description: "Ideas for Guassian random number generation on Pico"
layout: post
tags: [robotics, electronics, pico, robot programming, python, learn robotics at home]
---
I’m getting intimately familiar with Gaussian probability and generating them, along with combining matplotlib and asyncio for pc visualising. CircuitPython does not have random.gauss (or np.rand.normal).

I’ve been studying probability density functions, with the intent of generating Gaussian numbers on a Pico. Been spending lots of time with matplotlib, and comparing my guess with the python and the np Gaussian outputs. This is with the intent of using it in an upcoming Raspberry Pi Pico book.

I've found that looking at the Marsaglia polar method is making a lot of sense to me. I read that the ziggurat method is likely more efficient but I’m pitching for not too complicated.

The bell curve (characteristic of the probability density of Gauss distribution) looked vaguely sine like. A 3 blue 1 brown video helped see the calculus link <https://youtu.be/ZA4JkHKZM50>.

The "Real Gaussian" is python's random.gauss. The "Fake Gaussian" is random.uniform fed into the Marsaglia polar method. Plotted with matplotlib.

![My fake vs np gaussian](/galleries/2022/10-23-guassian-circuitpython/comparing-python-gaussian-plots.jpg){:class="img-responsive"}

This random distribution's relevance in robotics is around making increasingly closer guesses to a solution.
