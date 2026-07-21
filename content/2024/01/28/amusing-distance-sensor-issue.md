---
title: Amusing vL53L5cx sensor issue
date: 2024-01-28 00:00:00
tags: [electronics, sensors, robot building, vl53l5cx]
thumbnail: content/2024/01/28/phone_screenshot.png
---
The robot I've been building and documenting for an upcoming book is using a VL53l5cx sensor for front mounted distance sensing. This sensor is great in that you get an array of 8x8 distance measurements, so a single sensor can do the job of many!

I've ran into some issues around converting the data, handling it and passing over MQTT, but the most recent one is hilarious.

I've been building obstacle avoidance behaviours, which I've done many times before. it worked in test, with the robot on the desk propped up. I made sure it was performing ok, and that the responses wer timely and made sense. Then I put it on the floor, and it started driving backwards.

As I lifted the robot, it started driving forwards. I was confused, and then realised that it was sensing the floor! The spread of this sensor is not just horizontal, but vertical too. It was seeing the floor, and detecting that as an obstacle.

For now I will ignore the bottom few lines. Adjusting the sensor angle up a little would help, however, it doesn't quite work in the context of the book. This is definitely a gotcha for new players. Another advanced idea would be to calibrate that away during setup, so that the sensor knows what the floor looks like, and can ignore it, but would still account for close objects in that field. I'll save those for future refinements.

!{%img_responsive "content/2024/01/28/phone_screenshot.png", "Screenshot of the region on a smartphone" %}

You can see in the screenshot that there's a phone client for this, showing the sensor data in a 2D image feed. The two bottom lines are the floor, and the white area represents distances over a meter away.
