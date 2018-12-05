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

# Opencv and Piwheels

When I started writing the book, ath the beginning of 2018, installing opencv on a raspberry pi offered one of two options:

a) get the dev tools , compile it yourself. Go out for an evening, it might be done in 4-6 hours. This way you can have the latest opencv and python.
b) There are some people who distribute custom Raspberry Pi builds where they had compiled it. Could I recommend one of these?
c) install it from apt. No compilation time. Nice and headless. Downside is you got open cv 2.4.9 and python 2.7. 

I'd been through step a, a few times. It had at one point been a bit of friction to getting started. I decided that this compilation, in terms of the complication and time was not something I would expect my reader to do so this option was definitely taken off the table.

Custom Pi distributions can be a nice place to work from, I've used a few before for robotics projects. However, they do not tend to have long term availability, Raspbian is also the central point of the community in terms of OS. So while this option works, it wasn't quite right for the audience I was pitching for.

Option C, installin it from the apt repos was my decision. It's using Raspbian packages


