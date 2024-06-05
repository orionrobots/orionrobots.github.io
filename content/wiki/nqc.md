---
layout: page
title: NQC
tags: [robot, programming]
date: 2010-01-17 09:32:12
---
NQC - Not Quite C - A programming language for the [Lego RCX](/wiki/lego_rcx)

## Programming The Lego RCX with NQC

<a href="http://bricxcc.sourceforge.net/nqc/" target="_blank">
<img class="text_img_right" src="/galleries/2010-01-19-the-lego-rcx-inside-and-out/draft_lens8960751module79322281photo_1325684837-lego-rcx-nqc-logo.gif" alt="NQC" title="NQC"></a>

There are many programming languages for the RCX. While I was using the RCX a great deal, I found NQC made the most sense to me.

NQC is an acronym for “Not Quite C”. NQC is a C-Like programming language, API and compiler toolkit aimed at Lego’s range of Programmable Bricks. Being an embedded C programmer by trade, NQC was an obvious choice for me.

Learning a more advanced language like this is a vital step in working with Lego Robots as NQC gives you a great deal more control and flexibility than the supplied MindStorms, CyberMaster or SpyBotics software. NQC gives access to more programming concepts than the construction toy style SDK’s provided. On the downside, NQC can be more complicated for those not familiar with C, and for those who are, NQC's differences (the not-quite aspects) may be a little frustrating.

The language draws highly from C, although some concepts, like the way tasks are handled are fairly specific to the language. NQC has a few caveats – like not being able to return arguments from subroutines and having a limit of subroutines (which is governed by the target – RCX 1.0, RCX 2.0 etc.). These limitations mean that you will often need to use global variables.

    task main()
    {
        OnFwd(OUT_A);
        OnFwd(OUT_C);
        Wait(200);
        Off(OUT_A + OUT_C);
    }

NQC is a command line compiler, and not a development environment, so I suggest using NQC with a text editor like VSCode. The NQC website has the details for installing it on windows, although installation is a bit more involved on the Mac and Linux. NQC does not require the original RCX software to be installed to run.

Some other advanced systems for programming Lego P-Bricks are LegOS and BrickOS. NQC is the easiest, but the others are also worth a look.

### NQC Links

I used the NQC language on the RCX enough to collect a few good links.

* [NQC - Not Quite C website](http://bricxcc.sourceforge.net/nqc/) - The home of the NQC programming language for the RCX and is maintained by its author. This contains all the downloads and the documentation to use the software.

### Even more NQC info

NQC is a deep a powerful tool for the RCX. While a subset of the C language, NQC has enough to accomplish fairly complicated tasks with the robot kit. However, getting the best of NQC requires either great experience, or having a good book to use as a guide, a tutorial or just a reference to keep handy.

Little beats being able to go step by step through a book, or rifle through to find exactly what you needed to solve a problem.

(paid links)

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=orionrobots-21&marketplace=amazon&region=GB&placement=B01FKUQIT6&asins=B01FKUQIT6&linkId=84378ce1de12720bc48dcd701f108a2e&show_border=true&link_opens_in_new_window=true"></iframe>
