---
title: Why Robotics at Home with Raspberry Pi Pico uses PIO
date: 2024-03-06
tags: [raspberry pi pico, pio, robotics programming]
---
In my recent book, Robotics at Home with Raspberry Pi Pico, I have used the PIO (Programmable Input Output) system to read the encoders on the robot. Why have I taken this step?

Primarily because the goals of the chapter were both to read encoders, and to demonstrate how to use the PIO. The PIO is a powerful, yet complicated feature of the Raspberry Pi Pico, and I want to show how to use it, with a real project. There is a strong philosophy of learning by doing in my books.

Whilst the books are about building a robot in an engaging way, they are also about finding new ways to use the kit you have, and learning things on the way.

I hope that the readers will find the PIO section of the book interesting and useful. I look forward to seeing how it inspires them to use the PIO in their own projects, and to share their work with the community.

## On Learning Code and Coder Dojos

Kids go to Coder Dojos to learn coding. They make games on the way, which is fun. Rather than just playing games, kids get to learn and master coding skills, using their interest in games as a vehicle for that learning.

Robotics projects are also valuable vehicles for learning a variety of skills, from high-level to low-level programming, CAD systems, part fabrication and more. A reader working through one of these books, which I acknowledge can take some time, should have a growing library of skills and techniques to draw on for future projects.

## Further note on CAD

Although the books have drawings readers can use, I strongly encourage them to make their own drawings, but furthermore, to make their own measurements and read the datasheets for the parts they buy.

Parts come in different sizes, with an example being a distance sensor on carrier boards. The same sensor can come on multiple carrier boards with local pricing and availability differences as well as the size. The reader should be able to get part and hole dimensions from the specifications of the boards, and use this to make their drawings using the CAD techniques the book suggests.

Skipping past the design stages into just using the drawings means that the reader will not have tailored it to the parts they have, and it is then likely it will not fit unless they bought the exact same parts as I did from the same suppliers. The reader will have missed the teaching on why this will not fit, how to have avoided or to rectify the problem. Adaptability and problem solving are also principles my books try to teach.
