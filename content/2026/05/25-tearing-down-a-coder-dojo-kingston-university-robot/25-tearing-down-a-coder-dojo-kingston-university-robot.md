---
title: Tearing down a Coder Dojo Kingston University robot
date: 2026-05-25
thumbnail: /content/2026/05/25-tearing-down-a-coder-dojo-kingston-university-robot/25-tearing-down-a-coder-dojo-kingston-university-robot.png
tags: [coder dojo, raspberry pi pico, rp2040, micropython, robotics, robot building, robotics for kids, code club, teardown, distance sensor, line following]
---
Our Coder Dojo at Kingston University runs a fleet of 11 Raspberry Pi RP2040 robots — a design that evolved from my [Robotics at Home with Raspberry Pi Pico](https://packt.link/5swS2) book. After a recent session, one robot came back needing repair: a sheared standoff and some wiring attention. I figured I'd document the design while I had it apart.

The video covers the key design decisions:

- The **Cytron MakerPi RP2040** — onboard motor drivers, a battery connector, and awesome labelling that kids can follow
- **RWCL-1601** sensors instead of HC-SR04s: the HC-SR04 outputs 5V logic, which is a good way to kill an RP2040 GPIO pin
- **FreeCAD-designed wiring shields** (3D printed) so power cables are kept safe and snag free
- Custom sensor mounts — the RWCL-1601 has different dimensions from the HC-SR04
- **M3 hardware** throughout — one bolt size to hunt for when something needs tightening

STL files are on [Google Drive](https://drive.google.com/drive/folders/13cW0y6L7D7KjJzpASAXsaPPUJMpqxkC0?usp=sharing) if you want to print your own.

{% include youtube_responsive, src:"https://www.youtube.com/embed/6AjJ9fMFUlc" %}
