---
title: More work on Piwars 2018 Skittlebot robot - DualShock3 controller working
date: 2018-04-02
tags: [robot building, piwars, opencv, electronics, power, raspberry pi robotics project, raspberry pi opencv project, ps3 controller robotics]
thumbnail: content/2018/04/2018-04-02-evtest-output.png
---
The last few days I've been trying to get my PS3 DualShock controller working with the [Approx Eng Input](https://github.com/ApproxEng/approxeng.input) library for python.

However, I was getting really weird results when doing early testing.
The controller was giving off readings on the left stick, and nothing on the right stick.

# Recap

However, I had the ear of approx_eng via social media. After I picked up the Raspberry Pi SD image he suggested, he gave lots of help - introducing me to the /dev/input filesystem enumeration for pads and sticks, and the `evtest` system.

I started digging (in yesterdays blog), and then reading lots of manual pages. The key moments were `evtest`.

First - I was able to see there were two event sources - `0` and `1`. 0 was the motion sensors, and 1 was the controller itself.

I was then able to see that I had to debug the event devices. I set up some simple code based on the custom controller stuff in input: <https://approxeng.github.io/approxeng.input/addingcontrollers.html>.

```python
from approxeng.input.selectbinder import bind_controller
from approxeng.input.dualshock3 import DualShock3
from approxeng.input.controllers import find_single_controller

# Locate a controller, instantiate it, and retrieve the InputDevice devices with which it's associated
# This will raise IOError if it can't find an appropriate controller
devices, controller, p = find_single_controller(controller_class = DualShock3)

import pdb
pdb.set_trace()
```

Here I was able to inspect devices - and see that the system enumerated 2. 

```log
(Pdb) devices
[InputDevice('/dev/input/event1'), InputDevice('/dev/input/event0')]
(Pdb) controller
Sony DualShock3 (Playstation 3) controller
```

I was then setting the system up to remove one:

```python
devices = [devices[0]]
```

Doing this yesterday got me the info for the first stick. So after sleeping on it,
I decided this `evtest` would give me more info on the stick.

The output from `evtest` was quite instructive:

{% img_responsive "content/2018/04/2018-04-02-evtest-output.png", "evtest output" %}

I was able to look up the code for the DualShock3 mappings in the input library and patch it: <https://github.com/ApproxEng/approxeng.input/compare/master...dannystaple:patch-1>

I then fix this into a new bit of code for driving a motor from the Y axis on each stick. This got me a robot driving around under stick control.
It still stalls lots on carpet - but not on laminate flooring.

## So what is next?

* Fitting camera
* Fitting distance sensors
* Getting my SkittleBot code adapted for both the driving style and new opencv.
* Making the distance sensor code.
* Tidying up - cables a mess - my plan is to use PC drive power adaptors.
* Making a cover - not sure how much time, but this is Helena's most wanted task.
