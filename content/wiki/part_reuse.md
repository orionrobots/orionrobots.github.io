---
layout: page
title: Part Reuse
tags: [robot building, robotics, electronics, programming]
date: 2005-09-15 17:51:39
---
When constructing a robot always bear in mind that with few exceptions you will probably want to maintain or reuse parts in the robot. So try to think of lightweight construction materials, which while sturdy and well joined, can also be easily disassembled and possibly reused.

## Pros

- Easy to replace, if a module is broken, it is easier to have a spare module to hand than having to do intensive reconstruction of the robot
- Functional separation- the keeps things easy to understand, if most functions are well separated you will be able to find bugs/issues sooner. It is also easier to build when you have bite sized functionality to worry about before combining everything.
- lowers the risk of "rats-nests" if the interfaces and joining between the modules are well defined. If you can define exactly where the locomotion module interfaces with the power and control modules, then you can route the cables nicely, and things are again more maintainable.
- Make "upgrades" easier. If you cna simply improve one module, while keeping the old module around as well as all the other functioning robots, you dramatically reduce the risk associated with rebuilds and changes.
- Reuse - If you build other robots with similar functions, then you have one less thing you may have to redesign, of course, when linked with the last point on upgrades, your improvements for one robot could be retrofitted to another easily.
- Substitution - part substitution (if a part is broken, and not easily replaced) becomes easier if the effects of a different part are limited to a module.
- Better for team building. If your design defines the interfaces on modules, different team members can go and build the modules and then bring them all together again later on in the build- don't leave that too late though!
- Modules could allow for redundancy in designs - if you have the weight left for it, why not have two sets of batteries instead of one? Or some other component. This will allow a robot to perform better and with more confidence than without. It is a common requirement in industry.

## Cons

- Functional separation may lead to a lesser scale of integration, you may find that if you are trying to get a lot to happen in a very small space, modular design might not just cut it - in which case, at least try to make some of it modular!
- Bad team designs may lead to modules which just don't quite match up - you had better make sure you agree enough on design that the module interfaces, electrical, mechanical and even just screw mount points are agreed, so there are no nasty surprises later. Fitting square pegs in round holes is not a good idea.
- Don't go too far to design a "generic" part, you may find designing a module for this robot does just as wall in another. It is a failing with some over-enthusiastic modular designs that have additional interfaces that are never used. In most occasions you really cannot afford the waste of space or time this will bring.

Also this works well in the programming of robots, following a modular programming method - commonly known as Object Oriented programming also means you can snap in program components, or upgrade them while minimising impact on other areas.

This is one reason [Lego Robots](/wiki/lego_robots.html "Lego Robots") are very popular, although even then, larger [Lego](/wiki/lego.html "The best known construction toy") modules are of great benefit. Of course there is no reason why another [Construction Toy](/wiki/construction_toy.html "Construction Toy") could not be used.

Using screws, nuts and bolts as opposed to glue, welding and snap fit parts means that you can then re-use body panelling and framework in other robots.

Of course - to continue the theme of re-use, and start to re-use designs as well as materials - please continue to the [Modular Robot Design](/wiki/modular_robot_design.html "Modular Robot Design") topic.

## Other links

* [Building Tips](/wiki/building_tips.html "Hints and helpers for actually building robots, and other stuff.")
* [Robot Building Safety](/wiki/robot_building_safety.html "Building robots can be dangerous - tips to help your safety")
