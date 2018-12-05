---
created: 2018-12-06 10:04:30
tags: [robotics, book, python, raspberry pi, programming]
title: Learn Robotics Programming - The Python 3 Question
layout: post
---
So let's start with the ugly truth.

The first edition of my Learn Robotics Programming book is based on python 2. I've said it. The good news is that the book has info on converting it to 3,and the github repo reflects that. 

But why is that so?

## The Purpose Of The Book

Learn Robotics Programming is about getting people off the ground in building robots. It's intent is to keep things as simple as can. It was my intent that where I could, I'd try to strip away things that were fiddly, find the simplest way to get the results and see the concepts and techniques instead of syntax and installation steps.

From the outset, the book was always going to have a section on using the Pi Camera and Open CV. I see this as a major goal in linking many concepts together with the exciting vision based behaviour and making the robot feel smart. Right at the start of planning this book, I'd chosen Raspbian, Python and OpenCV as my technologies to build this.

## Opencv and Piwheels

When I started writing the book, ath the beginning of 2018, installing opencv on a raspberry pi offered one of two options:

a) get the dev tools , compile it yourself. Go out for an evening, it might be done in 4-6 hours. This way you can have the latest opencv and python.
b) There are some people who distribute custom Raspberry Pi builds where they had compiled it. Could I recommend one of these?
c) install it from apt. No compilation time. Nice and headless. Downside is you got open cv 2.4.9 and python 2.7. 

I'd been through step a, a few times. It had at one point been a bit of friction to getting started. I decided that this compilation, in terms of the complication and time was not something I would inflict upon my reader to do so this option was definitely taken off the table.

Custom Pi distributions can be a nice place to work from, I've used a few before for robotics projects. However, they do not tend to have long term availability, Raspbian is also the central point of the community in terms of OS. So while this option works, it wasn't quite right for the audience I was pitching for.

Option C, installing it from the apt repos was my decision. It's using Raspbian packages, so it means it is going to work on the mainstream repos. It meant I accepted the downsides of being bound to the versions it came with.

Although the OpenCV section was not written later, the parts of the book with plenty of code had been written, and some of which were beyond the draft stage when something that would have been a perfect option D arrived. PiWheels had an OpenCV build. This has up to date OpenCV python integration, without requiring compilation. The reader may have had to set up a Python 3 virtual env, but a pip install would then have installed the complete OpenCV headless. It is also likely that Raspbian will make Python 3 the default interpreter - which will also make option C good again too.

## Impact On The Book

The section in the appendix covers this conversion, and it is actually not particularly complicated in terms of the code. There was testing to see things work in Python 3. The concepts however, the patterns and flow of the behaviours do not change. The changes are minor and syntactic in nature.

Other libraries I've built upon are likely to have changes in syntax, paramters, and I'm aware of a big change to GPIOZero in the pipeline. And yet, the concepts, the block diagrams do not change.

What I've learned in this process is just how much of a moving target technology is. In the day-to-day, i just adapt and carry on. But when writing something like this, seeing shifts between when drafts were completed and then those parts are published, it is rather like seeing an old friends children, who seem to have suddenly grown, compared with the imperceptable growth of your own children you see every day. 






