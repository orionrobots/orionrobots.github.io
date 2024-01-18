---
title: More planning for 2024 PiWars Robot
date: 2024-01-14 00:00:00 +0000
tags: [piwars 2024, robot projects, robot planning, robotics at home, pyinfra, python, micropython]
title: When you might need more planning
---
My student and I realised how few weeks we had until PiWars. having booked the hotel rooms and train tickets, it became very clear how close it is.

I started with the joke "How do you eat an elephant, a bite at a time".  We had a lot to do. I've a few initiatives in blog posts, stuff in my head, and stuff in my student's head about what we want to do.So we had a planning session.

## Choosing GitHub issues

We've been using GitHub as a rallying point for multiple reasons:

- Git so our code has history.
- Git branches so we can experiment and go back
- GitHub as a remote, so it wasn't relying on our hard drives, a USB stick or SD Cards
- Also GitHub so we could both see the repository from different laptops
- Pull requests so we can see each others code and comment on it

It seemed only fitting that we used GitHub issues.

## Planning

We gathered all our ideas, and started making tickets. We described some of what we wanted in titles. We then started giving each title some details.

The important details:

- A description - what did we mean specifically by that title?
- Definition of ready - what was needed before we could start.
- Definition of done - what did we need to do to say it was done?

This mean we could get an idea of how to start, and not try starting stuff we didn't have ready. We started converting those definition of ready lists into links to tickets.

A helpful github feature is that those checkbox lists can be converted into tickets - so we could convert bigger parts into tickets.

We now had a nice pile of tickets to do, with links on what they needed.

## Milestones

My student asked about putting them in order. I'm yet to find a nice way to show the dependency graphs for that. But until then, we can carve the list (a backlog) into milestones.

We created milestones around preparatory items:

- Getting the robot to drive remotely.
- Getting the camera work in.
- Solving different autonomous challenges.

## Next steps

We do want to look at charts for it. However, mostly, we picked one of the early items in the list, and just started getting it done. We'll come back to the list and pick another one.

It felt good to get it out of our heads and on paper. It gives a clear idea of what to pick up in contact time during sessions, and during the week. It doesn't get it all done, but it also means we can prioritise stages and start collecting points.

## Deploying code to the Yukon

After the planning, we looked at some PyInfra stuff around deploying through to the Yukon. This worked by implementing some PyInfra operators to go to the Yukon via the Raspberry Pi.

We made a copy files operation, which used the Raspberry Pi as a staging place. First it checks if the files are present, and matching on the Raspberry Pi. If they are, it skips the copy. If they aren't, it copies them over.

If they've changed, it will then use the mpremote command to copy them to the Yukon. MPRemote is a command line tool to talk with Micropython (and CircuitPython) boards. It lets you copy files, reset or interact with a REPL.

PyInfra operators Yield a command to run on the target (the Raspberry PI) via a connector. My student asked about the Yield command, so I used iterators to show how it worked. In the case of PyInfra, each operator generates any commands to run. This means operators can yield from other operators, and then yield their own commands to be consumed by other operators or by a PyInfra connector. It's a nice concrete example of using this.

We created another operator to reset the Yukon.

We then chained this together in a deployment that did the following:

- Installed MPRemote
- Used the mpremote copy files operator to copy the files to the Raspberry Pi
- If that made changes, use mpremote reset to reset the Yukon

We set it up with a test file, and it worked.
