---
layout: post
title: Teaching Angles With Turtle
using_mathjax: True
tags: [turtle, python, programming]
gallery: /galleries/2015-01-15-teaching-angles-with-turtle
---

Today I had time with my eldest child, 5 at the time of writing. She has been learning python, and experimenting with Turtle with me for a while, but I always typed in the turn numbers as angles are a bit difficult for a young child. To clarify - this is the Python turtle module.

Today I made a breakthrough. She had learned about fractions in school - and understood a half, and a quarter, along with how to write them.

$$\frac {1}{2}$$

She knew a bit about importing the turtle rules, making a turtle (call it t), telling it to go forward, and that it must turn a few times to make a square or a rectangle - but I always typed 90, and she didn't really get why. Given that she had done some simple variable stuff, and defined herself a function - I thought it was time to attempt to demystify it.

    from turtle import Turtle
    t = Turtle()

I started by drawing a simple circle on a sheet of paper, divided into 4, with numbers 0, 90, 180, 270 and 360. I explained that like a clock, this goes round, we went clockwise for the example, and that 360 goes all the way.

![Circle divided with angles]({{ gallery }}/cutting_the_circle.png){.class="img-responsive"}

We were able to then type it into the turtle and she could see it doing so:

    t.right(360)

She was delighted, and ran it a few times, to watch the turtle spin around. I told her that you could then try some other numbers I'd written - the 90, 30 and 45. She played with these too - I'd drawn them on the circle.

I pulled out a book, and asked her what shape it was - a rectangle. I then showed her that this fit into the number "90" on the circle. She could see this was an interesting number. But she didn't yet understand why it went all the way around with 4x90 degree turns, or what the numbers really meant.

So we went back to simple figures. I draw a square, then put a circle around it. Circumscribing is the technical term but I did not use it for her. I then talked about cutting the circle. Which meant we could throw out the circle for now, and talk about half circles, and quarter turns and so on.

In code, I was able to define this too:

    circle = 360.0

Note for adults - this is a floating point to avoid rounding errors and turtles not quite ending up in the right place - if you try a 7 sided shape on screen, or 7 turns you will need this.

![A square in a circle]({{ gallery }}/square.png){.class="img-responsive"}

I then asked her how far around the circle it took to get to this opposite point - can you "cut" or "half" the circle - she gave a nice clear yes. I then pointed out the corner between them - the corner clockwise from a starting point. She now said it was a quarter of a circle. I then drew a line out from the corner, and dropped a quarter circle from it down to the line below - the way a turtle moves - how much of a circle is it? She smiled, took the pencil from me, and wrote a big \\(\frac {1}{4}\\) next to it. Now I think she was getting it.

I asked her about the other angles - and by the third - she said they are all the same. I asked how far after all four, and she noticed it was all the way around the circle (with a bit of coercion).

My next trick was to inscribe a regular triangle. I asked her if she could tell me those angles - and she looked a bit stuck. So I asked her - how many sides did it have. Obvious response - 3. How many sides did the square have, 4. I then let on that each angle was now a third. So here is a pattern - 3 sides, \\(\frac {1}{3}\\), 4 sides - \\(\frac {1}{4}\\).

![A triangle in a circle]({{ gallery }}/triangle.png){.class="img-responsive"}

I then drew an inscribed pentagon (this is where it gets a bit untidy - my circle looked a bit less circle like). She recognised it, with 5 sides - and I asked her to guess the angle. She again took the pencil, and wrote \\(\frac {1}{5}\\) (side note - she is still young enough that she writes her 5's backwards). Now I could see a big smile forming - she was beginning to see a pattern in regular shapes and circle portions.

![Pentagons and Hexagons]({{ gallery }}/pentagon_and_hexagon.png){.class="img-responsive"}

To make sure she got it - I asked her what about a hexagon - 6 sides, she wrote \\(\frac {1}{6}\\). I asked what if a crazy shape was regular with 35 sides, at this point she said "that's easy" and wrote \\(\frac {1}{35}\\). So she was clear how it worked and that she got it.

With this in mind, we will be able to try making some shape routines in turtle, and I will try to get her to deduce how to make a general regular polygon function. She is okay with variables, function defs, and arguments - but she has not yet got comfortable with loops and ranges.

What is awesome - this took about 20/30 minutes, a sheet of a4 paper & pencil, and 3 or 4 lines of code for her to make the kind of leap that had her smiling from ear to ear.

[The full sheet]({{ gallery }}/whole_page.png){.class="img-responsive"}
