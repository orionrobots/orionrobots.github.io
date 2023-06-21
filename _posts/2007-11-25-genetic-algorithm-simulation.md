---
date: 2007-11-25 15:20:00
description: Genetic Algorithm Simulation
tags: [robotics programming, genetic algorithms, evolution, artificial life, phenotype, genotype, evolution, simulation, alife]
title: Genetic Algorithm Simulation
layout: post
---
## Background

Since I have mentioned A-Life, and genetic algorithms a few times, I decided to make a simple demonstration model. It is based upon a couple of clips I saw on you tube, who must take some credit for this.

I also admit to finding a rather neat Javascript library, and simply wanting to try it out. This was the result. I have quite simply called it "Evolution".

## Starting out

The example has only been tested in Firefox and IE, could Opera users let me know how they do?

You then want to open the following link in a new tab or window:

<a href="https://orionrobots.github.io/browser_genetic_simulation/evolving.html">Evolution App</a>

For instructions read the readme at <https://github.com/orionrobots/browser_genetic_simulation/tree/master>

## Warnings with GAs as problem solvers

The first is that the solutions they come up with are not that likely to be human readable. Expect spaghetti code, and craziness like reusing the same piece of memory in 6 completely different but beneficially and incidentally related ways. The code will solve the problem, but not really in the way you would expect.

The second issue is that you have to be careful with the environment and its criteria. Genetic Algorithms will quite often find ways to "cheat" the system, and unless a deterrent in the fitness is found, the cheaters will out do the rest of the population.

The third warning is that your sandbox needs to be quite tight. It is highly improbable, but possible, that a simulation will find a way outside of the sandbox and interfere with the parent box. It is even possible (but astronomically improbable) that a new computer virus could be generated accidentally this way. Although unlikely, likelihoods is what these simulations, like natural selection in the real world, are all about.

## What next

I intend to improve my simulation, make it more browser compatible, remove some of the now useless buttons, and either lift the 100 individual limit, or place constraints on the input boxes.

I will also do a walk through the code, and how to develop your own simulation. This was done in javascript, but any recent language will be able to handle a similar simulation.

Get the code at <https://github.com/orionrobots/browser_genetic_simulation/tree/master>.
