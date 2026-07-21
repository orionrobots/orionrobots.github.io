---
date: '2022-11-02'
description: A problem with FreeCAD annotations
layout: post
tags:
- robotics
- electronics
- freecad
title: FreeCAD annotations issue
---
Today I'm trying out a freecad weekly build. I've been doing a lot in TechDraw, and needed to replace a view, but all the annotations are behind the view. I'm hoping the weekly build has the view stacking implementation for <https://github.com/FreeCAD/FreeCAD/issues/6012> so I can get the annotations in front of the view.

FreeCAD TechDraw is a great tool for creating technical drawings, but it's not perfect. I've been using it to create the drawings for my upcoming Raspberry Pi Pico book, and have found a few issues.

Weekly builds contain as-yet unreleased features, so they are not stable. I'm hoping this is a stable enough build to use for a few days. I also had help from the FreeCAD community to get the build working on my system. This led me to <https://github.com/FreeCAD/homebrew-freecad> - which I can keep around if I have any MacOS bundling issues.

I fell at the first hurdle downloading the Mac ARM binary instead of x86, make sure you download the right release for your system. I had to try again.

With the right binary, it works - I'm able to change ordering of views and annotations with the currently weekly.
