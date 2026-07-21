---
title: Rescuing Old Robot Code from the Archives
date: 2026-06-18
tags: [open-source, robot-code, micropython, skittlebot, armbot, music]
thumbnail: skittlebot.jpg
---
Over the years I've accumulated a fair amount of robot source code — old projects in zip files, folders with broken `.git` histories, repos that were once on a long-gone GitLab instance. I've been working through these archives recently, using AI tooling to help analyse branches, spot untracked files, and work out what's already on GitHub vs what needs a new home.

Here's what's landed publicly so far:

## skittlebot

[skittlebot](https://github.com/orionrobots/skittlebot) — a robot that uses OpenCV to identify lawn bowl pins by colour and ram them. The oldest commits go back to May 2017, nearly 9 years ago. This one had a messy history: files deleted by a duplicate-remover, genuine new work mixed in with line-ending noise, and a separate local history of 30 commits (including 8 that had never been pushed anywhere). All of that is now on GitHub as the `gitlab-history` branch, with a clean `master` kept from the original import. See the [skittlebot posts](/tags/skittlebot/) for more on the project.

## armBot

[armBot](https://github.com/orionrobots/armbot) — a robot arm mounted on a wheeled base driven by an MD25 motor controller, with history stretching back to September 2014, nearly 12 years. Already public on GitHub but the local archive had diverged. Digging through a reconciliation zip turned up `md25.py`, an old Python 2 serial-based MD25 motor driver that predated the smbus2 I2C approach — a useful bit of archaeology worth preserving. That's now on the `from_hdd` branch. See the [armBot posts](/tags/armbot/) for more on the hardware.

## micropython-music

[micropython-music](https://github.com/orionrobots/micropython-music) — this one started in 2025 as a teaching session, walking a student through making chip tunes with MicroPython. Once we got going I found myself wanting to explore further, and my own interest was sparked. The code had been sitting untracked in a folder with no commits at all, so it got a proper clean-up, a `.gitignore`, and is now published for anyone curious about music-making on microcontrollers. See the [music posts](/tags/music/) for related experiments on this site.

More to come as I work through the remaining 42 items in the archive.

## The Process

The approach has been to work through each folder in the archive with an AI agent: check if a GitHub repo already exists for it, compare any local branches against the remote, identify untracked files that were never committed, and clean up line-ending issues before pushing. The agent can spot things that are easy to miss manually — like a zip file sitting alongside a repo folder that turns out to contain a file never committed to any branch. It's not magic; each repo still needs a human decision about what to keep and where it belongs, but it makes the inventory and triage work much faster when you're staring down 40-odd folders of varying vintage.
