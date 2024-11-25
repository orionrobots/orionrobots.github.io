---
title: How to make particle systems for fun and robotics
date: 2024-11-24
tags: ["robotics", "programming", "python", "particle systems"," robotics at home"]
thumbnail: content/2024/11/24-making-particle-systems-for-fun-and-robotics/raindrops.png
---
I have a lifelong fascination with Particle systems, complementing my robotics. However, it was only a few years ago that I found out how to bring the two together in a Monte Carlo Localization particle filter.

Today I am going to express my love of particle systems in Python. This might be a long ride, with a few programs in a series of posts. I hope you'll join me, with some demonstrations in how much fun these can be. It would be helpful if you've done a little Python before, but this aims to be a beginner-friendly course.

This series will focus on programming with lots of visuals. We'll write it using PyGame letting us get a lot on the screen. Beyond being handy in robotics, this is fun for some simple visual effects, games and simulations.

## Getting prepared

Depending on your experience, you will need an environment to run this in.

For absolute beginners, I recommend starting in the Mu editor, as this comes with a Python environment and most of what you'll need to follow along. However, if you are more experienced, you can use your own IDE.

If you are using your own IDE you will need to ensure you have at least Python 3.8 with PyGame installed. You can install PyGame using pip or poetry:

```bash
pip install pygame
```

## One dot

The simplest particle system is one dot. We'll use this to get up and running. This is the least interesting particle system, but we can build on it to something more fun.

```python
import pygame

WIDTH = 800
HEIGHT = 800
FRAME_RATE = 60
BG_COLOUR = pygame.Color("darkslategray1")
DOT_COLOUR = pygame.Color("deepskyblue4")
DOT_SIZE = 2

one_dot = [400, 400]

def draw(surface):
    pygame.draw.circle(surface, DOT_COLOUR, one_dot, DOT_SIZE)


pygame.init()
screen = pygame.display.set_mode((WIDTH, HEIGHT))
clock = pygame.time.Clock()

running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    screen.fill(BG_COLOUR)
    draw(screen)
    pygame.display.flip()
    clock.tick(FRAME_RATE)
pygame.quit()
```

Run it and you should see this:

![One dot on the screen](/2024/11/24-making-particle-systems-for-fun-and-robotics/one-dot.png)

We start with importing [PyGame](https://www.pygame.org/), a Python gaming library for drawing 2D games.

We then set up some parameters for our program. We define the display size with `WIDTH` and `HEIGHT`. We use FRAME_RATE so the program runs at a consistent speed.

We then set up some colours. A background colour, and a colour for our dot, followed by a dot size. putting these things in parameters makes them easy to change later.

We then define a list with two numbers, the x and y position of the dot. This is our particle, followed by a function to draw our particle, a circle on the screen. In PyGame, the top left corner is 0,0, so the bottom of the screen is HEIGHT.

![PyGame Coordinate System](/2024/11/24-making-particle-systems-for-fun-and-robotics/pygame-coordinates.png)

After this we initialise pygame, with a screen and a clock and enter a main loop. The main loop starts with a running variable, so the system can be told when to exit. The code looks for a QUIT event, triggered when you close the window to ensure it shuts down. This is a common pattern in PyGame.

The next part of the loop fills the screen with background colour. We then use the `draw` function to draw the dot. We must call `pygame.display.flip` as pygame draws everything on a hidden buffer, which we swap with the visible screen.

Finally we tick the clock to keep the framerate the same. The last line of the program is `pygame.quit` to ensure everything is cleaned up.

This is drawn at 400, 400 which is the middle of the screen. I suggest you try a few values between 0 and the WIDTH to see how it changes. I guarantee you won't like my colour choices, so you can also try different colour names, or even RGB values (like `(255, 0, 0)` for red).

## Making it a bit random

A key concept in a particle system is randomness. We can make the one dot less boring by making it random.

At the top of the file, lets import the random module above pygame:

```python
import random
import pygame
```

Now we can make it show the dot at a random place every time we run it. Update the one_dot line to be:

```python
one_dot = [random.randint(0, WIDTH), random.randint(0, HEIGHT)]
```

## Movement

We have a particle, but particles have a lifecycle:

- They are created
- They update and change over time
- They may also die

We can add a little movement to our particle. Let's introduce a speed constant and update our particle with it.

In the constants add the following:

```python
SPEED = 2
```

We can add an update function, which can be called in the main loop:

```python
def update():
    one_dot[1] += SPEED
    if one_dot[1] >= HEIGHT:
        one_dot[1] = 0
```

This will add the speed to the second element (the Y coordinate) of the one_dot list. If the dot reaches the bottom of the screen, we reset it to the top.

We then call this in the main loop before we start drawing things:

```python
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    update()
    screen.fill(BG_COLOUR)
    draw(screen)
    pygame.display.flip()
    clock.tick(FRAME_RATE)
```

Run this. You can adjust the speed by changing the SPEED constant, or increasing the FRAME_RATE, however, note that above a certain frame rate value we may be being slowed by the speed of the program. With high SPEED values, you may see the dot jump on the screen.

This dot has a lifecycle:

- It is created at a random position
- It moves down the screen
- When it reaches the bottom, it is moved back to the top

## Multiple dots

We can make this more interesting again by having multiple dots, like a rain storm. We can do this by having a list of dots.

Swap our one dot for this:

```python
POPULATION_SIZE = 200

raindrops = []

def populate():
    for n in range(POPULATION_SIZE):
        raindrops.append(
            [
                random.randint(0, WIDTH),
                random.randint(0, HEIGHT),
            ]
        )
```

We then need to update the draw function to draw all the dots:

```python
def draw(surface):
    for raindrop in raindrops:
        pygame.draw.circle(surface, DOT_COLOUR, raindrop, DOT_SIZE)
```

And modify the update function to move all the dots:

```python
def update():
    for raindrop in raindrops:
        raindrop[1] += SPEED
        if raindrop[1] >= HEIGHT:
            raindrop[1] = 0
```

Finally, we need to call the populate function to create the dots, while we initialise the program:

```python
pygame.init()
screen = pygame.display.set_mode((WIDTH, HEIGHT))
clock = pygame.time.Clock()
populate()
```

Run this, and you should now see dots falling down the screen. I've also used some more rain-like colours.

![Raindrops on the screen](/2024/11/24-making-particle-systems-for-fun-and-robotics/raindrops.png)

The colour names I've used are `darkslategray1` for the background and `deepskyblue4` for the dots. You can find a list of colour names in the [PyGame documentation](https://www.pygame.org/docs/ref/color.html).

You can modify the number of dots, but be aware that too large a number might make it slower. You can still adjust the speed and size of the dots.

These dot's all have the same lifecycle as our one dot!

## Adjusting the lifecycle

We can change this particle system in a few interesting ways. You might have noticed the raindrops loop around in a repeating pattern.

We can fix this by changing the lifecycle. Instead of just wrapping the raindrop, we can pretend this raindrop has reached the end of the lifecycle and that we are creating a new one. However, we can do something sneaky and reset the x to a random value when we do this.

We only need to modify the `update` function:

```python
def update():
    for raindrop in raindrops:
        raindrop[1] += SPEED
        if raindrop[1] >= HEIGHT:
            raindrop[1] = 0
            raindrop[0] = random.randint(0, WIDTH)
```

You shouldn't be able to see a repeating pattern any more.

## Random speeds

We can add a little depth by adding a further parameter to our raindrops. For this we will change two parts of the lifecycle - the add function and the update function.
We'll also adjust the parameters above.

```python
POPULATION_SIZE = 200
MIN_SPEED = 2
MAX_SPEED = 6
```

In the populate function, lets make a random speed:

```python
def populate():
    for n in range(POPULATION_SIZE):
        raindrops.append(
            [
                random.randint(0, WIDTH),
                random.randint(0, HEIGHT),
                random.randint(MIN_SPEED, MAX_SPEED),
            ]
        )
```

We can then update using this stored speed:

```python
def update():
    for raindrop in raindrops:
        raindrop[1] += raindrop[2]
        if raindrop[1] >= HEIGHT:
            raindrop[1] = 0
            raindrop[0] = random.randint(0, WIDTH)
```

However, we made an assumption in draw that the raindrop was only 2 numbers - the coordinates of the drop. With 3, we need to filter them:

```python
def draw(surface):
    for raindrop in raindrops:
        pygame.draw.circle(surface, DOT_COLOUR, raindrop[:2], DOT_SIZE)
```

If you run this, you can now see raindrops falling at different speeds.

## Checkpoint - raindrops

We've built a small particle system, transforming a single static dot into a rainstorm with raindrops at different speeds. Here's the full code:

```python
import random
import pygame

WIDTH = 800
HEIGHT = 800
FRAME_RATE = 60
BG_COLOUR = pygame.Color("darkslategray1")
DOT_COLOUR = pygame.Color("deepskyblue4")
DOT_SIZE = 2
SPEED = 2
POPULATION_SIZE = 200
MIN_SPEED = 2
MAX_SPEED = 6

raindrops = []

def populate():
    for n in range(POPULATION_SIZE):
        raindrops.append(
            [
                random.randint(0, WIDTH),
                random.randint(0, HEIGHT),
                random.randint(MIN_SPEED, MAX_SPEED),
            ]
        )

def draw(surface):
    for raindrop in raindrops:
        pygame.draw.circle(surface, DOT_COLOUR, raindrop[:2], DOT_SIZE)

def update():
    for raindrop in raindrops:
        raindrop[1] += raindrop[2]
        if raindrop[1] >= HEIGHT:
            raindrop[1] = 0
            raindrop[0] = random.randint(0, WIDTH)

pygame.init()
screen = pygame.display.set_mode((WIDTH, HEIGHT))
clock = pygame.time.Clock()
populate()

running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    update()
    screen.fill(BG_COLOUR)
    draw(screen)
    pygame.display.flip()
    clock.tick(FRAME_RATE)
pygame.quit()
```

## Other ideas

With this system, you could make the raindrops different sizes. You could add wind factors and other elements.

You can add backgrounds or other embellishments.

## Summary

You've built a simple particle system, raindrops, using Python and PyGame. You've used the random number generator to position them on the screen, and for other aspects of the particles.

You've also seen how particles have a lifecycle.

Over the coming for posts, we can explore what other ways we can use particle systems, some variations on this theme, and some quite different.

I've built this inspired by the Kingston University Coder Dojo where I mentor Python, and will have other particle systems inspired by research I've done for my books.
