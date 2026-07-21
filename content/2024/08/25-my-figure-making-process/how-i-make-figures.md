---
title: What is the process I use to make drawings, photos and figures?
date: 2024-08-25
tags: [open source, figures, drawing, photography]
thumbnail: content/2024/08/25-my-figure-making-process/my-figure-pipeline-2024.png
---
When I'm writing books, articles and blog posts, I often need to create figures, drawings and photos. Here is the process I use to make them.

Over many years, I've been figuring out a nice writing workflow for figures.

{% img_responsive "content/2024/08/25-my-figure-making-process/my-figure-pipeline-2024.png", "My figure making pipeline in 2024" %}

## Photos

I start with photos, I use my phone in a desk stand facing a surface, if it's for the book, I try to make that surface matt white with little or no grain. I have 2 LED studio lights that I position. It may take a few attempts to get this right, and I might need to go back here later.

I've made some 3D printed stands, and sometimes use white tac to stand things in position, although occasionally it must be hands.

To avoid vibration, I use a remote to trigger the shot, once I've got the angle and lighting about right.

I then transfer to my computer, and use the open source DarkTable to prepare the images - over the years, I'd used stuff like Picasa, until it was dead, and the OS based editors, but Dark Table is non destructive, keeps settings with the images, let's me make multiple exports, and doesn't tie me to a particular OS/phone.

DarkTable is a bit of a learning curve, but I've found it worth it. I adjust the lighting, crop, set up the angles I want, make minor perspective adjustments (large ones will just look wrong). I will tweak the colour balance and tone. I will use a blue or brush tool to remove things like annoying spots on the background, with the aim to mostly make the background white and clean.

I usually use the file format default to the device, probably JPG. So while I may call things "raw" and "baked" photos, I don't actually use the RAW format, as it's not necessary for my purposes.

## 3D Diagrams

For 3D diagrams, I will use FreeCAD, and I've been able to make exploded part diagrams with it, this takes a long time to master, and I'm still learning, so it's rarer that I use this. I will use the TechDraw workbench to export this as a SVG, and then import into Inkscape.

## Circuit Diagrams

I've been around a loop with this, having tried Fritzing for board diagrams, and Eagle, I still come back to KiCAD as my main tool for it. I eventually export in a way I can pick it up in Inkscape for finishing and presenting, or just taking a screenshot when I need to.

## 2D Diagrams

I use Inkscape for all 2D Diagrams. over the years, I've used different tools, like DrawIO, Powerpoint and others, but I always return to Inkscape. It is really powerful. Even if a tool like DrawIO lets me get boxes and lines up quickly, I may still use Inkscape as a finisher. As I've used Inkscape more though, I've become quicker and more comfortable illustrating with it. I am not much of an illustrator, but I can make simple diagrams, and I've been developing this skill and a few styles.

When trying different software, I will look for SVG export options, so I can finish, retouch or restyle in Inkscape.

## Compositing

I do all the compositing and finishing in Inkscape. I import all the above diagrams and photos for a particular figure, combining a few as panels in the same figure. I will align them and space them out.

My cheeky admission is that some of the "nice gnolling" people have seen in my books is done last minute here in Inkscape. I have set up keyboard shortcuts in Inkscape to set/remove the Object clip (Ctrl/Cmd-K and Ctrl/Cmd-Shift-K), and I use this a lot to make sure things are neat and tidy. that clip does not have to be rectangular, I can use Inkscape's boolean path manipulation tools to make it any shape I want. It's like cropping, but significantly more flexible. I use grids and rulers to align things nicely the way I'd like them to be.

I then add annotations and text. I've a standard simple circle, white background, black outline, for panel numbering, which I use everywhere. I add leader line text, or figure annotations. One awesome technique, ensure that the document has a white background rectangle, and put that in a locked layer. You can then use the the "difference" rendering method with a white leader line, and it will always be visible, no matter what the background is.

For text on busy backgrounds, I'll use blur, or add a background rect for this, just to fade the background a little where the text is. I may also add a somewhat shaded rectangle, with a cut-out for the salient detail, so the context is there, but the focus is on the detail.

Once I am happy with all this, I will export, usually to a PNG, and then I will import that into my document.

I export in fairly high resolution if I can, being mindful of file sizes for blog posts, and colour processes if it's for print. If images are going into the books, they will need to look good in black and white, so I will check this.

## Keyboard shortcuts

As I've made Inkscape my focus for this, I've become more and more handy with shortcuts. Like enabling/disabling snap with the % (shift-5). This has meant I've become quicker and more efficient with it. 

## Current Setup

Hardware:

- Camera: iPhone 12 Pro
- Lights: 2x Neewer NL-192AI. Always turn off my main lights while doing this - they interfere. Also, charge while not in use, otherwise there are current ripple artifacts. I will use strong sunlight too if I have that, but I try to be careful with where shadows are.
- Stand: A generic desk stand, with positionable arm and rotatable phone holder.
- Background: An Ikea standing desk. On this, I have a cheap lighttable, although the grain on that annoys me. I sometimes just use a sheet of copy paper, or some white foamboard. I also sometimes use a cutting matt if I want that technical green grid background instead, but I rarely use this.
- Remote: A cheap bluetooth remote, that I can trigger the camera with.
- Computer: Was a 2018 Macbook, currently I've a Dell PC with a 4K monitor. Either way, some GPU acceleration is nice for all these processes, and lots of RAM and storage is good.
- Mouse: I always use a thumb-style trackman. I've tried a tablet, and don't 100% get on with that.
- Storage: I always store my work in the cloud. I never 100% trust a hard drive!

Software:

- DarkTable: For photo editing.
- FreeCAD: For 3D diagrams.
- KiCAD: For circuit diagrams.
- Inkscape: For 2D diagrams and compositing.

## Final thoughts

This is my pipeline in 2024, but I've been refining, improving and experimenting for years. I've tried lots of software, and will continue to in the future. I've been developing my photography experience, and those tools, while similarly improving my illustration ability. There's no doubt that in a year or so I'd have further adapted or changed this process.

I do not profess to be expert at any of this, photography, illustrating, composing figures at all. However, I've found a process that works for me and thought it an interesting thing to share.
