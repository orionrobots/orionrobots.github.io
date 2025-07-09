---
title: Comparing anker power packs
date: 2025-07-08
thumbnail: /content/2025/07/08-comparing-anker-power-packs/all-the-packs.jpg
description: Trying different power packs for a Raspberry Pi 4 based robot
tags: [robotics at home, robotics projects, raspberry pi, robot building]
---
While writing my book, the 2power USB Power bank I recommended stopped selling, everywhere. It was able to happily power a Raspberry Pi 4 robot, and fit nicely. However it wasn't perfect in that it would power the robot down while charging.

{% img_responsive "content/2025/07/08-comparing-anker-power-packs/2power-bank.jpg", "The original 2Power USB Power Bank", "720, 940, 1140" %}

So I decided to go on a quest, an expensive one, looking at the Anker power systems. This article is not sponsored by Anker, and I bought all these power packs myself.
I may follow this up with other branded power packs.

My constraints are that it must be a named brand, fit the layout of the robot, and be able to power the whole robot for a while. So I bought a few Anker power packs, and tested them out.

## How I am testing each model

- Check that it fits on the robot. Some are just two small, or with ports in teh wrong places.
- Fully charge the module - it isn't useful if they are at 2% or something. Fully charge each.
- Power up the Raspberry Pi from the model - USB-C to C it's a Pi 4.
- Run a test:
    - Camera tracking face - servo motors + neural network + camera
    - While running the motors
    - Ensure it doesn't brown out or stop.

{% img_responsive "content/2025/07/08-comparing-anker-power-packs/the-test-robot.jpg", "The test robot with the Anker power pack", "720, 940, 1140" %}

This robot is the platform I am building for my upcoming book, Learn Robotics Programming 3rd Edition. You can see the power pack in context, along with the examples I used there.

Test precautions - use a decent USB-C to C cable, and ensure the power pack is fully charged before starting the test. Also ensure I can recreate the SD card on the Pi should it fail and leave the card unreadable. It should only be writing journal messages.


## Test results

Model | Capacity | Physical Size - fits? | Price | Passes Test | Powers down when charging?
--- | --- | --- | --- | --- | ---
2Power - A08 | 5000mAh | Yes  | No longer stocked | Yes | Yes
Anker 321 | 5200mAh | Yes | £13.98 | Yes | Yes
Anker Zolo | 10000mAh | No - 110 mm x 65 mm x 25 mm, too big | £13.99 | Yes | Power cycled!
Anker Nano | 10000mAh | Yes - 85 mm x 55 mm x 35 mm | £39.99 | Yes | No
Anker 533 | 10000mAh | Yes - 100 mm x 55 mm x 25 mm | £35.99 | Yes | No

## Considerations on each model


The 321 is the cheapest option, and includes the USB A-to-C cable it would need. Disappointingly, it powers down the robot when charging, so it is not a good option for a robot that needs to be on while charging. The 321 is a like-for-like replacement for the 2Power though.

{% img_responsive "content/2025/07/08-comparing-anker-power-packs/anker-321.png", "The Anker 321 next to the 2Power", "720, 940, 1140" %}

The Nano came with an "Instacord", a retractable USB-C cable built into the pack. This can be used either to charge the pack, or power the robot. The pack is a bit heavy, with a pretty display. It fits snuggly in the robot, and might not even need extra support or straps. The Nano is a good option, but it is expensive. Wedging it in and out of the robot did leave a few scratch marks on the pretty Nano casing though. Easily my favorite of the bunch.

{% img_responsive "content/2025/07/08-comparing-anker-power-packs/anker-nano.png", "The Anker Nano", "720, 940, 1140" %}

The Zolo turned out to be the wrong shape for the robot, it doesn’t fit well unless rotated to stick out the back, which isn’t ideal and might require tape to hold it in place. This also puts the charge port facing inward, making access inconvenient. Although it’s a cheaper option and the built-in cable sounds useful, its length doesn’t suit the robot’s layout. Additionally, plugging the Zolo in to charge while powering the Raspberry Pi causes the output power to turn off and then back on rather than stay on, which is even less desirable than just turning off. The Zolo is cheaper than the Nano, but at that price the 321 works better.

{% img_responsive "content/2025/07/08-comparing-anker-power-packs/anker-zolo.jpg", "The Anker Zolo", "720, 940, 1140" %}

The 533 is marginally bigger than the 321, and longer than the Nano. It makes for a slightly awkward fit, but feels lighter than the Nano.

{% img_responsive "content/2025/07/08-comparing-anker-power-packs/anker-533.png", "The Anker 533", "720, 940, 1140" %}

The Nano and the 533 come in lots of nice colours and have pretty OLED color power level displays.

## Initial disaster

When I tried the Zolo, my first alternative attempt, I powered the Raspberry Pi up, and down too quickly, not letting it complete a boot cycle. Frustratingly, although the green light comes on showing that the inventor HAT service is running, the robot is not responding to IP or Wifi. I was unable to use the web interface, SSH or even ping the robot. It did have an IP address so was responding to MDNS though.

The Inventor HAT service is also allowing me to power down the Raspberry Pi with a user button, which also proves that is running.

I'll diagnose using desk power first.

1. After overnight, try powering again. Can I ping or SSH into it?
    - Responding to pings
    - In Via SSH.
2. Use an HDMI plus keyboard, and see if I can get a terminal and determine why Wi-Fi is not working.
3. If not, try a fresh SD card with the same image, and see if it works.

It turns out that the first option worked. This could be because none of the non-desk power options were good, but seems unlikely since I know that the 2Power was working before. Another alternative is the rapid power up/down meant there was an incomplete DHCP session with the router, and it didn't get a valid IP address.

I tried it again with the 2Power, which worked first time. Then I was able to get the Nano working with Wi-Fi. I then continiued the full rounds of testing.

## Conclusion

{% img_responsive "content/2025/07/08-comparing-anker-power-packs/all-the-packs.jpg", "All the Anker Power Packs with the 2power", "720, 940, 1140" %}

- Low cost: The Anker 321 is a good choice, it fits, and is cheap.
- Best fit/style: The Anker Nano comes in multiple colors, and fits well. It has high capacity and a nice display.

I'd like to recommend the 533 too, if I could make it better fit the space. There may be a way to fit it on the on the robot in another location or orientation.

