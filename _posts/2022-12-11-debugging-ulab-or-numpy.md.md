---
title: Tip for debugging ulab or Numpy
date: 2022-12-11T18:45:51
layout: post
tags: [micropython, circuitpython, numpy, robot, raspberry pi pico]
---
ULab is a library that has some of what the python Numpy library offers, but in the CircuitPython or Micropython context.

It can run on small devices, like the Raspberry Pi Pico so you can manipulate arrays of numbers on a robot (or gadget) a bit quicker than simply looping over them. It also makes it convenient to express a formulae like take a list, add some other lists values to every item, then convert that to radians:

```python
from ulab import numpy as np
angles = np.array(get_angles_from_some_sensor(), dtype=np.float)
noise = get_an_np_array_of_noise(angles.shape[0])
angles += noise
angles = np.radians(angles)
```

So the `get_angles_from_some_sensor` and `get_an_np_array_of_noise` are fictitious, and may need to be considered for your context, but assume one reads a number angles from some sensor, and the other provides n points of random noise.

The following line lets us add them, and the final line converts them all to radians. Nice and convenient.

Things get interesting when you are talking about coordinates. You can make numpy arrays that are multi-dimensional:

```python
coordinates = np.array([random_x(), random_y()] for n in range(400), dtype=np.float)
```

We can also add things to this array, and manipulate slices of it along either axis. For example `coordinates[:,2]` allows us to reference, manipulate or set every y-coordinate in that list.

When debugging them, the most useful ,and simple tip is to print the shapes. Any time things seem a bit off, print the shapes:

```python
print(coordinates.shape)
```

This can help in the full computer context, although there you might be able to use a debugger (that can be tricky if you are using interactive matplotlib or have asynchnonous things going on).

On the Raspberry Pi Pico (or other Circuitpython/micropython devices), step debugging python is much less of an option. Printing out the whole arrays can be too big and then unhelpful. So - print the shapes!

Ulab is definitely worth getting to know on the Microcontroller Python variants.

## Interesting gotcha with for loops

It is fair to say that when using numpy, you are probably going to try to avoid loops at all costs. However, if you have them, beware that a problem with a range will show the last line of the loop, and not the first line. This can be quite confusing behaviour. I've seen this by leaving the .shape[0] off when looping over multiple arrays (ie one persistent array plus a temporary one so using an index).
