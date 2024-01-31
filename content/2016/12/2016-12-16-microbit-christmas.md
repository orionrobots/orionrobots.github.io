---
date: '2016-12-16'
layout: post
tags:
- electronics
- microbit
- leds
- python
- micropython
- simple code for kids
- code
- programming
title: Microbit Merry Christmas!
---
I found today, on Christmas jumper day, I was caught short and couldn't find a good jumper.

I spent 5 minutes and threw one together for fun with the BBC Microbit. Now it actually belongs to my lab-helper Helena, so I've just borrowed it for the day.

![Microbit Christmas Jumper](/galleries/microbit_christmas.gif)

Here is the code - it's pretty simple:

```python
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
```

This was somewhat inspired by [@Richard Hayler](https://twitter.com/rdhayler) and his hat at the [@Ham Coder Dojo](https://twitter.com/CoderDojoHam).

(paid links)

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&language=en_GB&marketplace=amazon&region=GB&placement=B08TR1QMR1&asins=B08TR1QMR1&linkId=e5b58fab275f345c7472b4de44233481&show_border=true&link_opens_in_new_window=true"></iframe>
