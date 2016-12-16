---
layout: post
tags: [electronics, microbit]
title: Microbit Merry Christmas!
---
I found today, on Christmas jumper day, I was caught short and couldn't find a good jumper.

I spent 5 minutes and threw one together for fun with the BBC Microbit.

![Microbit Christmas Jumper](/galleries/microbit_christmas.gif)

Here is the code - it's pretty simple:

    from microbit import *
    
    while(True):
        display.scroll("Merry Christmas! ****")
        display.show(Image.HAPPY)
        sleep(500)
        display.show(Image.HAPPY)
        sleep(500)
        display.show(Image.HAPPY)
        sleep(500)
        display.scroll("*^*^*^", delay=300)
        display.scroll("Ho! Ho! Ho!")
        display.scroll("*^*^*^*", delay=300)
        display.show(Image.XMAS)
        sleep(500)
        display.show(Image.XMAS)
        sleep(500)
        display.show(Image.XMAS)
        sleep(500)
        display.scroll("It's Christmas Jumper day. Have an awesome day. ****")
        display.show(Image.FABULOUS)
        sleep(500)
        display.show(Image.FABULOUS)
        sleep(500)
        display.show(Image.FABULOUS)
        sleep(500)
        # This is supposed to be a sleigh pulled by reindeer - not sure it worked....
        display.scroll(". . . . . . y¬ y¬ y¬ \__@[]/. . . . ***") 

