---
title: Safety erratum for Anker power supply for Learn Robotics Programming 3rd edition
date: 2026-06-15
tags: [robotics, power supply, anker, learn robotics programming, book]
thumbnail: robot-with-nanopower-supply.png
---
This is a safety-related erratum for Learn Robotics Programming 3rd Edition.

Today it has come to my attention that the recommended Anker 321 battery supply for the Learn Robotics Programming 3rd edition book is no longer available, and [has been recalled](https://www.anker.com/uk/a1112-recall).

I have found a suitable replacement that will work just as well for your robotics projects.

{% img_responsive "anker-nano-power-supply.png", "Anker Nano A1638 45W charger" %}

My recommendation is the Anker Nano A1638 45W charger. This is compact and reliable. It friction fits the rear of the robot so also doesn't slide around.

{% img_responsive "robot-with-nanopower-supply.png", "Anker Nano A1638 45W Charger in Robot" %}

Although it says it can "charge-through", it is still recommended to shut down the Pi before charging the Anker A1638, as the power supply to the Pi is interrupted when the charger is connected.

## The reality of robotics parts

Parts can change over time, for reasons you might never predict. Adapting a design is a key skill and challenge for a robot maker. I don't think I could have predicted it would happen this close to being published. The good news is that any power supply capable of delivering 5V at 3A via USB-C will be suitable for this robot electronically, and after that you need to consider the dimensions and how you'll mount it.

The amusing part is the initial power supply for the book was a 2Power charger, which also stopped selling part way through the book and caused me to update the recommendations then. I also used the Nano for some fo the latter experiments in the book due to how convenient it was compared to the other options.

See my post [comparing anker power packs](/2025/07/08-comparing-anker-power-packs) for the last time I had to update the power supply recommendation for this book. The Anker Nano A1638 is a good replacement for the 2Power charger, and it is still available.

I can guarantee one thing, that this recommendation will need to change again in the future, but for now, this is a good option for your robotics projects.
