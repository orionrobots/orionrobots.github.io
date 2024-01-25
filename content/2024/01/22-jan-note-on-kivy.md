---
title: Phone apps, React Native, Expo and Kivy for robotics
date: 2024-01-22
description: Kivy, a python UI framework
tags: [robotics programming, python, smartphone, mqtt]
---
I've been using [React Native](https://reactnative.dev/) and [Expo](https://docs.expo.dev/) to create phone apps to interact with robots via MQTT, both in PiWars and in preparation for an upcoming robotics book. The benefit being that they can attach to an MQTT broker, and you can control it or get sensor data from it directly on the phone.

It's not a surprise that my books are in Python, and while I am happy to stretch to any language, there's a shift to either HTML/JS for the UI side, which makes things a little jarring for the readers to follow along.
The phone app seems like a more sophisticated approach than simply a web app (a decision I might regret later), and ideally shouldn't require a connection to the internet to run. Initially, it's using WiFi, but a shift to bluetooth is possible.

## About Phone frameworks

There are many frameworks for a phone app. I didn't want to use native frameworks, as the reader would then need to learn different languages for different platforms. So frameworks that abstract this away seemed like a good idea. [Kivy](https://kivy.org/) does so in Python, Expo does using J and react native, DotNet's MAUI does so in C#.
I've currently picked Expo for one primary reason - it's emulator/simulator app workflow.

In every other framework, delivering code to an iOS device requires that the reader own a Mac, run XCode and have an Apple Developer license. A free license allows debugging/testing apps which is good enough. But this is a bit of a pain for reaching a broad audience. Expo ships an app for both iOS and Android devices that lets you scan a QR code to load the app. This is a much better experience for the reader. They don't need XCode, they don't need the Apple Developer license. They can target either phone ecosystem from their laptop, even if it's not a Mac.

Apple take exception to running interpreters on their ecosystem, other than Javascript, which is why this Expo gets to work, while other frameworks need to recompile. Expo goes even further, letting users hot reload code, so they can see changes immediately. When this is working, it feels like magic.

Expo does however require writing things the React way. I've kept the apps as simple as I can, with pages menu systems, and simple controls on screens, but it's still a bit of a jump for the reader. Integration with MQTT was interesting.

## The Kivy Framework

Kivy is a python UI framework, which may allow writing UI apps in only Python, which means the readers don't need to learn multiple ecosystems/frameworks for this stage. However, like every other phone framework that isn't Expo, the reader would need native tools for their phone to use it.

What would be great would be for Kivy to find a way to learn from Expo.

One thought is that there are Python to JS transpiler technologies, that might mean it generates JS that can be run in something like the Expo App. This would be a great way to get the best of both worlds. It would use the Kivy controls instead of React controls.

## Final thoughts

This may be a horses-for-courses problem, that is, it's not really right to try and make one language fit all problems in software. While it might end up being convenient, especially in learning material, to make that so, it's not necessarily the best way to do things. While React-Native can be a shift in thinking, it is particularly suitable to the mobile use case, and comes with components and libraries designed for this type of App, things like on-screen Joysticks, on phone MQTT, multiple pages from a Menu and eventually Bluetooth BLE support. It's also a very popular framework, so there's a lot of support for it. Kivy has been around for a long time, but is less used and less supported for mobile app development.

From the robot perspective, Python is still a great language with it's integration with Raspberry PI components, libraries along with plotting, number manipulation and other tools.

For now, I will continue with React-native and Expo. Perhaps as my experience of solving problems in it grows, I'll find better ways to explain and teach that aspect so it is less jarring for the reader.
