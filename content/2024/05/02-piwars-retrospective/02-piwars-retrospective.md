---
title: A retrospective on PiWars 2024 - Disaster Zone
tags: [piwars 2024, raspberry pi, robotics, robotics at home, robot building]
date: 2024-05-02
thumbnail: content/2024/05/02-piwars-retrospective/big-ole-yellow-eco-disaster.png
---
On Sunday, the team got together to discuss and consider how we did in PiWars 2024. The overall view was positive, but we looked at what we can learn and improve upon.

We took a format of using sheets of A4, with post it notes, and spent some time, putting up the notes on the sheets, then we could discuss them a bit, and see what we made of them. It can inform our team sessions going forward!

## How the weekend went by events

On Saturday, we were there to spectate, however Emma was also competing in a school team. Danny got involved in helping out with some controller issues for the day.

On Saturday evening, Danny was trying to connect to the robot to put it through it's paces, which is when it became evident that the phone hotspot was not working, and no amount of coaxing was getting it to talk. The controller was working well though. Danny had tried adding the laser-pointer to the nerf-turret, but this was not aligned, and caused issues with the turret starting so was removed again.

On Sunday, we started the day agreeing that as a team, Pheobe would manage the timetables and scheduling, and Dannya dn Emma would focus on keeping the robot running for the events.

The first event was Eco Disaster, where Emma drove a steady performance, using the lifter and great driving skills to get all the barrels in place. The barrel lifter attachment worked well here.

{% img_responsive "content/2024/05/02-piwars-retrospective/big-ole-yellow-eco-disaster.png", "Big Ole Yellow in the Eco Disaster event" %}
{% img_responsive "content/2024/05/02-piwars-retrospective/big-ole-yellow-eco-disaster-finishing.png", "Big Ole Yellow finishing the Eco Disaster event" %}

The next event was minesweeper, which Pheobe drove very well, both turning to face mines, but also reversing onto ones behind to save turning time. Again, a solid driving performance.

{% img_responsive "content/2024/05/02-piwars-retrospective/big-ole-yellow-minesweeper.png", "Big Ole Yellow in the Minesweeper event" %}

Next up was our first round of Pi Noon, where all the attachments were removed, and Danny drove the robot. We won this round!

{% img_responsive "content/2024/05/02-piwars-retrospective/big-ole-yellow-pi-noon.png", "Big Ole Yellow in the Pi Noon event" %}

The next event was The Temple of Doom, the obstactle course. We ran into many issues, which we will go into below. Our nemesis here was the foam blocks, which the robot kept getting stuck on.

{% img_responsive "content/2024/05/02-piwars-retrospective/big-ole-yellow-stuck-on-foam-blocks.png", "Big Ole Yellow in the Temple of Doom event" %}

We had a further Pi Noon round, however, this did not go so well, with Danny driving again, but some of the reliability issues seen on the Temple of Doom were now affecting the robot.  Some fixes were made to get it to drive better again. And the next event was the Laval Palava, line following. The robot made a smooth line follow, and we came first in this category.

{% img_responsive "content/2024/05/02-piwars-retrospective/big-ole-yellow-line-following.png", "Big Ole Yellow in the Line Following event" %}

After line following came the Zombie Apocalypse, where we used the nerf turret to shoot zombie targets. We had some fixes to do frantically before this event, as pits testing showed a problem. They were enough to get to the event, and we got a couple of shots off, but only hit 1 target. The turret had accuracy issues, which we'll go into below.

{% img_responsive "content/2024/05/02-piwars-retrospective/big-ole-yellow-shooting-zombies.png", "Big Ole Yellow shooting zombies" %}

The final event of the day for Orionrobots was Escape Route, the Blind Maze. Without the autonomous code and visibility of the camera feed form the phone, we went for a manual call and response approach. This worked well with Danny calling and Emma driving. We completed all 3 runs.

{% img_responsive "content/2024/05/02-piwars-retrospective/big-ole-yellow-escape-route.png", "Big Ole Yellow in the Escape Route event" %}

After this, we watched the Pi Noon finals, and the awards ceremony. We were very happy with our 4th place overall in the intermediate category, and our 1st place in line following.

## What went well?

- We had a good time - piwars was great fun, no matter the outcomes. We enjoyed it.
- We got to every event, on time, despite complications. Our robot had it's issues, but we got to Pi Wars with a functioning robot, and we got to all the challenges, with a mostly functioning robot. This was largely due to helpful team member Pheobe (Mini orionrobots) being nominated as the team project manager for the day, holding and sorting out the schedule (including a reschedule for the obstacle course), and keeping us on track.
- We attempted every event!
- The robot didn't break, and was still mostly running at the end of the day. We made effective repairs when it was needed.
- Meeting other teams and the PiWars team was enjoyable. We also got to help Emma with her school team on Saturday!
- Bluetooth Joypad drove really well and connected every time

### Positions

- We came 1st on line following in the intermediate category. This was a great achievement, and we were all very proud of this. We have a neat line following algorithm using differences between the sensors on a 5 sensor array, and turning them into a likely line middle, feeding that to a PID controller. It lead to some good smooth runs  and we didn't get the light calibration issues that some teams faced. Amusingly - we'd tuned the PID for 70% speed and tighter bends - we could have even been more aggressive with testing.
- We came 4th overall in the intermediate category. This was a great achievement, and we were all very proud of this.
- We were 3rd on minesweeper, with some great manual driving from Phoebe, especially going in reverse for some parts!
- Emma made a great manual Eco-Disaster run, nice and smooth with the barrels all in place. Demonstrating her great driving skills and the barrel lifter attachment.
- We won our first Pi Noon match, and had a good time in the second, even if we lost. We had a good time, and it was a fun event.

### Design advantages

We had some neat design advantages that we got to use and show off a little during the event.

- The attachment system made it really easy to swap between the barrel lifter and nerf turret mechanism between events.
- The battery clip for the USB battery made it easy to pull and charge that occasionally.
- The hull shell was fairly robust (even if the bolts holding it in place weren't). It took a few knocks and bumps, and kept the internals safe.

### Transportation

Using a makeup trolley for transporting the robot, tools and attachments was a great idea. It made it easy to move the robot around, and keep everything together.
It has padding for the attachments, a large cavity for the robot and battery charging fireproof bag, and a fold out tool chest at the top that we filled with tools and spares. We will be using this for robot events in the future!

### Teamwork and cooperation

- The team worked really well together, there were no fights, great cooperation, and we all had a good time. Fun definitely beats winning!
- Pheobe being the team manager meant they could focus there, while Emma and I could focus on the robot and the challenges. It was a great division of labour.
- We got some awesome help from Pimoroni, with a Yukon issue and a nerf turret wiring issue. Big thanks to Paul from Pimoroni for the help (and the LED noodles!)!
- We even had time between events to test and prepare for the next.

### Accommodation

We had a great hotel, good for sleeping. We also were able to get food for the day from a sainsbury's next to the hotel. This was a great choice, and we'll probably do the same next year.
The coffee stall at the event was also handy!

## What could have gone better?

In this section, without being negative, we can highlight what didn't go so well, so we can learn from our mistakes.

### Network and Keyboard

The intent was that we'd bring our own network, in the form of a hotspot on Danny's phone. We'd tested it properly outside the lab and the Pi did not connect back to this. Despite trying in the hotel (and fiddling wth WPA Supplicant), even borrowing a power supply from the hotel to do so, Danny never got the Pi to connect. Which mean, other than the card, there wasn't an easy way to reprogram it.

This meant we could not see logs on the day, not see the camera, and not diagnose Pi issues.

This could have been mitigated by:

- Having a screen and keyboard for the Pi with us - a mini lightweight thing.
- Having the Raspberry Pi as a hotspot, and the phone connecting to it, perhaps with a hardware Yukon button to swap into this mode.
- Testing the Hotspot connectivity away from the lab before the event.

### Vibration

The vibration from the tracks driving, and transport to and from Pi Wars (a bus, 3 trains, taxi and trolley trips between them, along with the event) lead to some problems:

- Bolts had come loose, and we had to tighten them up. Although some nail polish helped, we probably could have used thread locker like loctite for a better fix.
- Grub screws came loose, so gears slipped at vital times. We could have used thread locker here too.
- Some wires came loose, and had to be reconnected. See the zombie apocalypse section for more on this.
- A tread was nearly off the sprockets and had to be reseated.
- Print the front hull section, like the rear, with nut retention to reduce the number of nuts that can fall out.

There's no suspension on these treads, so driving causes a lot of vibration. We could have tested this more, and used thread locker to prevent it.

### Power/Yukon Issue

We repeatedly had failures around the Yukon main power light going out, and the motors powering down. This could have been due to main power input (a 2S Li Ion 18650 set) drooping, or an over current condition. We did not have the logs on the day to see what this was. We will however use one weekend to investigate the Yukon MQTT service logs and try to determine what the issue was. We will also look at the power supply and see if we can improve it.

Due to a bug in the Yukon code, our Yukon logging was only logging power monitoring if it was about to shutdown the motors due to inactive control signals. So there's information missing from the logs that would help. We'll see what we can learn from the logs, it might be obvious!

This could have been spotted earlier by trying to stall the robot more in driving testing before we got to Pi Wars. It seemed mostly to drive, but the rolling resistance in the Obstacle course was a problem.

We'll need to investigate to find other mitigations.

### Last minute tooling

There was many screwdrivers, more than really needed. This lead to confusion when part of the team ran up to find the right screwdriver for a particular part.

Mitigations:

- Better tool organisation, only bringing the screwdrivers the robot actually uses.
- Where we can, stick to only a few types. We mostly had hex heads (alan keys) in a couple of sizes, but terminals and grub screws needed a different screwdriver.

### Autonomous code for more events

We ran out of time to build all the autonomous code. We probably spent a lot of time on the hull and attachments.

Mitigations:

- Get Pheobe involved as a project manager earlier in the process, so we stick to schedule.
- More contact time.
- More divided tasks so people can work on different parts of the code outside of contact time.
- Multiple robots to test code on.

### Zombie apocalypse - nerf turret

We had some issues with this attachment:

- Loose wires mean the motor didn't spin up. Paul from Pimoroni helped us fix this. We had to clip off some connectors and wire things more directly for this.
- When the rollers spun up, for some reason, the pan started to noticeably jitter. This could be power droop, or interference from the roller motors. We could have used a capacitor across the roller motors to reduce this.
- Accuracy was poor.
- There's no way to sight what the turret was aiming at. I tried fitting a last minute laser pointer, but this was not aligned, and was taken off when we ran into trouble.
- Emma had suggested switching to nudging balls after an unsuccessful run.

Mitigations:

- More pre-event testing
- Capacitor across the roller motors
- Better power supply
- Bigger Pan servo
- Consider sighting mechanism earlier in the design process - to help both human and autonomous aiming
- Danny (who drove for this event) could have listened to Emma's suggestion and asked the judge to let us switch to balls for further runs for a better score. Danny had scored well in previous Pi Wars years with nudging balls into targets

## What did we learn and what would we do differently?

This is closely related to the last section, but it's more about what we can take forward into future events. Some items were already mentioned in the previous section, so I've not repeated them here.

### We need a team manager

Having a team manager was a great idea, and we should do this again. It meant Emma and I could focus on the robot and the challenges, and not worry about the schedule. We think this might be helpful during preparation, and perhaps have got us with a more complete autonomous codebase.
Some mini deadlines/milestones might help us keep on track. Sometimes it felt like we had lots of time left, but hadn't really put it in context of contact time, or the amount of work left.
The mini deadlines can help us get basics ready before we make something more complex.

### Team structure

Closely related to the last one, we can be clear on some roles:

- Emma and Danny - tech leads, on the robot hardware and software. Technical design.
- Pheobe - Project/team management, scheduling. Aesthetic design.

We can all stay involved in blogging and media, although Pheobe has some particular skills here. We would also plan together so we know what we want to get to.

### Attachment plate

This worked well for us. The cable port turned out not to be that useful. It could either be wider, or we can think around what we want to do with it.
How could it support multiple servo motors, plus the big rollers motor? What other attachments might we need?

### We can get help

Paul from Pimoroni helped us out, as did other people at PiWars. We helped out others too let them borrow tools when they needed.
We had help from Emma's school team coach giving me 3 command lines to turn the Pi into an access point, although we never did have the keyboard setup to do so.

### Write the BT MAC address on Bluetooth controllers

We learned this from Emma's school team, they had trouble pairing a bluetooth controller (ours was solid). When pairing bluetooth at Pi Wars, there are so many devices, it's hard to know which is yours. Writing the MAC address on the controller would help.
We think maybe a label maker would be good for this.

### More testing and practice out of our lab

It's been mentioned a little above. Nearly all of our issues could have been detected before the event by testing the robot outside of the lab space. We should do this more. The lab is quite a forgiving environment, and we need to test in more harsh conditions.

This would have identified the power issues, vibration issues, and that we needed the AP or screen and keyboard.

We could also simulate more at home. We did this with line following, and a little target practice with the nerf turret and lifting barrels. But more would have given us more chances to improve at all the events.

### Attempt more things autonomously

This comes down to time management and testing. We had ideas for the autonomous code that we never got time to try.

### Build our next robot with wheels instead of tracks

Tracks are complex. We kinda knew this. They have a lot of vibration, a lot of motor torque and current draw, and they're hard to get right. They also slipped off sprockets.

Wheels, especially mecanum wheels, seemed to definitely fare better in most events. Mecanum wheel slides were being used for great affect by small agile robots in minesweeper and Pi Noon.
We think we might try a variation on mecanum wheels next year.

Mecanum wheels will require a lot of practice, and we may think about how to handle anything needing a bit of a climb. Practising on ramps and other obstacles would be good.

### Build a second robot/spare

Spare everything meant that we could have more easily swapped out parts for minor issues. We'd seen some other teams had built 2 whole robots! Which meant they could test more, and they could practice during non contact time.
Partially, too much of our hull structure came together last minute to have a second robot ready, so better planning would have helped here. But then, we'd never planned a second robot. Next time, we will.

### Always bring a screen/keyboard

Bring some way to reach the Pi if it's not able to get on the network.

### Use thread locker or similar on screws

Where we can, use a thread locker, or vibration resistant captive nut designs.

### Come up with a unique and flashy design

When we've got good basics, do spend time on a unique and flashy design. Our design was not bad, and other than lunchbox robots, this was the first robot with a full hull.
It was still a bit plain though. On our next robot, we can do more around fun design. We can also build upon the same attachment system (or improve it), so we might not need to rebuild attachments there.

### Better name for the robot

Big Ole Yellow was an old name that Danny came up with years ago. Quirky, but not that memorable, and given the robot was now mostly red, didn't really make any sense. We can definitely come up with a name for a new robot. We might have to start figuring out the design as we go.
Note that the team name Orionrobots was what the organisers mostly used anyway.

### Team T shirts

We have some old orionrobots T-shirts, but some new ones would be great. Some other teams had great team t-shirts or hoodies for the teams, and it would be nice to have some of our own.

Some tied really nicely with the design of their robots too.

We can then be united as Orionrobots!

## Summary

We had a really, really great time at Pi Wars. We all learned from it, and are looking forward to making more robots for the next one!
