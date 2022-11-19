---
title: 2022 battery choices update
date: 2022-11-20 00:00:00 +0000
tags: ['building robots', 'robot building', 'robot power', 'battery storage', 'learn robotics at home']
category: robot building
layout: post
published: true
description: Update on battery choices for 2022
---
This week I had reason to revisit [Why we are using AA batteries]({% post_url 2013-03-28-why-are-we-using-aa-batteries %}) when working on [battery storage]({% post_url 2022-11-19-battery-storage %}). I was looking at the batteries I have, and how I store them, and how I keep track of them. I've been using the same batteries for a while, and I've been using the same charger for a while. If you are learning robotics at home, battery choices are important, and I thought I'd share my thoughts on this.

It is probably time I revise my usage of mainly AA batteries for robots. I am still leaning away from using LiPo cells in batteries due to their slightly firey nature if they aren't looked after well.

## USB Power banks

In the Raspberry Pi based [Learn Robotics Programming](http://packt.live/2XccaKe) book I use a USB power bank to provide power to the Raspberry Pi and electronics, while AA batteries are used for motor power. These USB power banks can be pricey, but are a safe option in that they usually have battery management built in, and are designed to be used with electronics. They are easy to charge and don't require any specialist chargers.

They can be bulky, and you have to shop around for those with enough current capacity to handle a Pi. The awesome [Pimoroni Trilobot](https://shop.pimoroni.com/products/trilobot) uses a USB power bank to power the Rasberry Pi and the motors so may be a model to consider.

## 18650 Battery cells

18650 batteries are an interesting technology for learning robotics at home. They have Lithium battery chemistry, and are replaceable with standard battery boxes. There is some variation in quality and safety, but they are becoming ubiquitous having become the battery format of choice for vapes, electric toothbrushes, shavers and other small electric devices. In some respects, I have already been using them as they are the basis of many USB power banks.

I have not recommended them in my books, because I will need to research into safe and reliable suppliers of the batteries, holders, charges, as well as the right circuits to use them with microcontrollers. Following my current book I can take a closer look at this.
