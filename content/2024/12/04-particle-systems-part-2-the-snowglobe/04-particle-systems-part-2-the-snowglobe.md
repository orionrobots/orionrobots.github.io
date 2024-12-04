---
title: Particle systems part 2 - The snowglobe
description: How to make a snow storm  using Python, PyGame and a particle system
tags: ["programming", "python", "particle systems"," pygame"]
date: 2024-12-04
# draft: true
thumbnail: content/2024/12/04-particle-systems-part-2-the-snowglobe/snow-settling-in-drifts.png
---
In the [previous particle systems article](/2024/11/24/24-making-particle-systems-for-fun-and-robotics.html) we built a simple particle system that created raindrops.

We're starting this article off with that, and taking it into a direction of making snow fall system. This is similar to the raindrop system, but will add more lifecycle to our particles. Good snow settles!

Make a copy of the raindrops python file from before to start this tutorial.

## Snow colours

The first gentle change here is to put in some snow colours:

```python
WIDTH = 800
HEIGHT = 800
FRAME_RATE = 60
BG_COLOUR = pygame.Color("darkblue")
DOT_COLOUR = pygame.Color("white")
DOT_SIZE = 2
SPEED = 2
POPULATION_SIZE = 200
MIN_SPEED = 2
MAX_SPEED = 6
```

## State

Snowflakes will settle, which means our particle system will need more state than just the list of snowflakes.
We are still working out how we'll store settled snowflakes. First, let's give our system placeholders for more state by putting it into a class. Update the code after the configuration to look like the following:

```python
class State:
    particles = []
    settled_surface = None

    def populate(self):
        for n in range(POPULATION_SIZE):
            self.particles.append(
                [
                    random.randint(0, WIDTH - 1),
                    random.randint(0, HEIGHT - 1),
                    random.randint(MIN_SPEED, MAX_SPEED),
                ]
            )

    def draw(self, surface):
        for particle in self.particles:
            pygame.draw.circle(surface, DOT_COLOUR, particle[:2], DOT_SIZE)

    def update(self):
        for particle in self.particles:
            particle[1] += particle[2]
            if particle[1] >= HEIGHT:
                particle[1] = 0
                particle[0] = random.randint(0, WIDTH-1)

pygame.init()
screen = pygame.display.set_mode((WIDTH, HEIGHT))
clock = pygame.time.Clock()
state = State()
state.populate()

running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    state.update()
    screen.fill(BG_COLOUR)
    state.draw(screen)
    pygame.display.flip()
    clock.tick(FRAME_RATE)
pygame.quit()
```

In this step, we've collected the system into this single state, where we can put other aspects of the system, like settled snowflakes.

We've also subtracted 1 from the width and height maximums, to ensure that we aren't looking for anything outside the screen.

We've updated how we refer to particles, and the draw and update functions to use the same state.

The code should still run, and the result should be the same as the raindrop system.

## What happens when snow falls?

Our snow is going to have a different way to end it's lifecycle. Instead of just disappearing at the bottom of the screen, we're going to have it settle on the ground.

We've been using the pygame screen, and drawing to that. However, we can have another surface, which we can add settled snowflakes in, and draw on our screen.

Let's add this, by inserting the __init__ method into the State class (keep the rest of the code below):

```python
class State:
    particles = []
    settled_surface = None
    
    def __init__(self):
        self.settled_surface = pygame.Surface((WIDTH, HEIGHT))
        self.settled_surface.fill(BG_COLOUR)
```

This will create a new surface the same size as the screen, and fill it with the background colour.

We can now change how the end of our particle system lifecycle works. Insert this method into the State class just above the update method:

```python
    def lifecycle_end(self, particle):
        self.settled_surface.set_at((particle[0], particle[1]-1), DOT_COLOUR)
        particle[1] = 0
        particle[0] = random.randint(0, WIDTH - 1)
        particle[2] = random.randint(MIN_SPEED, MAX_SPEED)
```

This will drop a dot on the settled surface where the snowflake was, and reset the snow particle. We're also giving the new particle a new speed. We can now modify the update method to use this:

```python
    def update(self):
        for particle in self.particles:
            particle[1] += particle[2]
            if particle[1] >= HEIGHT:
                self.lifecycle_end(particle)
```

We then want to draw the settled snowflakes, before drawing the others:

```python
    def draw(self, surface):
        surface.blit(self.settled_surface, (0, 0))
        for particle in self.particles:
            pygame.draw.circle(surface, DOT_COLOUR, particle[:2], DOT_SIZE)
```

![Snow settling](/2024/12/04-particle-systems-part-2-the-snowglobe/snow-settling-single-layer.png)

When you run this, you should see the snow settling on the bottom. But it's not building up! Proper settled snow makes drifts.

## Making snow drifts

Our particle update needs to be smarter. Currently, we are only looking at the height of the snowflake. But now we have settled snow, we need to look at the settled surface to see if there is snow there.

We can do this by adding a new method to the State class to check for an obstacle

```python
    def obstacle_at(self, x, y):
        return self.settled_surface.get_at((x, y)) != BG_COLOUR
```

We are consulting the settled surface to see if there is a colour there that is not the background colour.

We can then use this in the update method to check if there is an obstacle. Obstacle checks are a bit trickier, as we want to settle above stuff, and not through it. Let's randomise the speed movement a little:

```python
    def update(self):
        for n in range(MAX_SPEED):
            for particle in self.particles:
                if random.randint(0, MAX_SPEED) < particle[2]:
                    particle[1] += 1
                    if particle[1] >= HEIGHT:
                        self.lifecycle_end(particle)
                    elif self.obstacle_at(particle[0], particle[1]):
                        self.lifecycle_end(particle)
```

We are looping MAX_SPEED times over the whole system. We are then using a random factor to move the particle down. If a random integer up to the maximum speed is less than the particle speed, we move it down 1. We then check the height, or a collision with the settled surface, and end the lifecycle if we hit something.

You should start seeing the snow settle:

![Snow settling in drifts](/2024/12/04-particle-systems-part-2-the-snowglobe/snow-settling-in-drifts.png)

This update method for the whole system is getting a bit involved. Let's move the update for a single particle into a method:

```python
    def update_particle(self, particle):
        if random.randint(0, MAX_SPEED) < particle[2]:
            particle[1] += 1
            if particle[1] >= HEIGHT:
                self.lifecycle_end(particle)
            elif self.obstacle_at(particle[0], particle[1]):
                self.lifecycle_end(particle)
```

This works the same way, but we can now simplify the update method:

```python
    def update(self):
        for particle in self.particles:
            self.update_particle(particle)
```

we can start extending this.

## Adding a jiggle

Snow jiggles while it falls, it rarely falls in a straight line. We can easily add a bit of a jiggle here in the update_particle method to randomly jiggle it:

```python
    def update_particle(self, particle):
        if random.randint(0, 50) == 1:
            particle[0] += random.randint(-1, 1)
            particle[0] %= WIDTH
        if random.randint(0, MAX_SPEED) < particle[2]:
            particle[1] += 1
            if particle[1] >= HEIGHT:
                self.lifecycle_end(particle)
            elif self.obstacle_at(particle[0], particle[1]):
                self.lifecycle_end(particle)
```

The new if, with a 1 in 50 chance, will move the particle left or right by 1. We then use the modulus operator to ensure that the particle stays on the screen.

### Extending the background

This is going a little beyond a particle system, but it's fun to embellish our work a bit. A city skyline would be a nice addition to our snowstorm. We'll make some random rectangles with random heights and colours to represent buildings.

In the configuration, let's make some building colours to pick from:

```python
BUILDING_COLOURS = [
    pygame.Color("gray0"),
    pygame.Color("gray25"),
    pygame.Color("gray48"),
    pygame.Color("gray76"),
]
```

We can then extend our init with building drawing - we only need to do this once:

```python
    def __init__(self):
        self.settled_surface = pygame.Surface((WIDTH, HEIGHT))
        self.settled_surface.fill(BG_COLOUR)
        self.draw_buildings()

    def draw_buildings(self):
        for n in range(10):
            building_height = random.randint(100, 300)
            building_width = random.randint(50, 100)
            building_x = random.randint(0, WIDTH - building_width)
            building_rect = (
                building_x, HEIGHT-building_height,
                building_width, building_height
            )
            building_colour = random.choice(BUILDING_COLOURS)
            
            pygame.draw.rect(self.settled_surface, building_colour, building_rect)
```

The draw buildings method draws 10 building shapes. It uses random heights, widths, position and colours. The buildings are drawn on the settled surface.

The python random.choice method will randomly pick an item from a list.

![A building skyline](/2024/12/04-particle-systems-part-2-the-snowglobe/snow-settling-through-buildings.png)

This kinda works, but some snow appears inside the buildings?
We can fix this by change our initial population to be above the buildings:

```python
    def populate(self):
        for n in range(POPULATION_SIZE):
            self.particles.append(
                [
                    random.randint(0, WIDTH - 1),
                    random.randint(0, HEIGHT - 300),
                    random.randint(MIN_SPEED, MAX_SPEED),
                ]
            )
```

![Snow settling correctly on the skyline](/2024/12/04-particle-systems-part-2-the-snowglobe/snow-settling-on-buildings.png)

Now that is looking like a snow scene.

## Conclusion

Here we've extended the raindrops, adding a more interesting lifecycle to a particle, along with storing some other state about the system in this surface.

We've also added some obstacles, and a bit of randomness to the particle movement.

This has a relatively low particle count. We are using a lot of per-particle maths here, it's also not that complicated. This is a system that will not scale, and more impressive particle systems may use significantly more particles. In the next particle system, we are going to make it a bit more scalable, and introduce some tools to make it quicker.
