---
title: Piwars Robot battery charging issues
tags: [robot building, piwars 2024, battery charging]
description: The trouble I'm having with the batteries for my PiWars robot
date: 2024-01-27
thumbnail: content/2024/01/27/battery-charging-issues.JPG
---
So our robot is wired up, and oin a bench power supply, and we have things driving as of last week via the Yukon. Exciting. However, when we tried to switch over to independent power for the motors, it ran out pretty soon. The robot's motor power is based ona  bank of 6 NiMH AA's, and it is in my roadmap to replace that with 18650's, but until then, keeping these charged is an important part of maintenance.

![Big Ole Yellow Battery Box](/2024/01/27/big-ole-yellow-motor-battery-box.JPG)

However, 3 of the batteries out of Big Ole Yellow, the Piwars robot are refusing to charge, with the MiBoxer charger saying error. It's possible that my [previous wiring error](/2024/01/09/09-piwars-yukon-power-issue.md), putting batteries through what should have been a motor connection, damaged the batteries.

Given that the motors, and the Yukon were fine, I'd assumed nothing else was damaged. We have spares, but it's frustrating as they are from a relatively new set of PowerOwl branded NiMH batteries.

I have a suspicion that they might just be very low, and this MiBoxer smart charger is trying to be too smart, and detect the battery chemistry, but failing due to their low charge. It is probably not a good idea to let their charge run quite so low.

![Battery Charging Issues](/2024/01/27/battery-charging-issues.JPG)

After leaving it 20 minutes, I reseated the batteries that say "Err" and they are now charging. Which also confirms my suspicion. I'll leave them to charge for a while, and see if they are OK.
