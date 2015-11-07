---
layout: page
title: LCD
date: 2005-07-14 12:29:54
---
<p>This is a common type of flat display, used often in Phones, Digital Cameras, Calculators, wristwatches and more recently desktop computer flat screens.
</p>
<h1  id="Using_them_in_robotics">Using them in robotics</h1>
<p>There are a number of commonly available modules, usually serial controlled, on the market. They can be bought from Maplin, RS and a other electronic part retailers.
</p>
<p>Some are simply based upon <a class="wiki" href="/wiki/rs232.html" title="A serial communication standard">RS232</a> serial, and more advanced ones use <a class="wiki" href="/wiki/i2c.html" title="Inter Integrated Circuit bus">I2C</a> bus connectors.
</p>
<p>When you are purchasing one, you need to consider carefully the requirements - how big the display is, in rows and columns of letters, or in pixels (picture cells) if you are displaying images. You need to take into account the viewing angle - many of these only display anything if you are in the range of view.
</p>
<p>Think through if you are going to need backlighting, or more expensive reflective systems. The backlight is an additional weight, and power concern - and you may be able to design it out of the system, or use a bright white <a class="wiki" href="/wiki/led.html" title="Light Emitting Diode">LED</a> instead.
</p>
<p>As always in robotics, the three major factors are weight, power consumption and cost. In most cases - these are simply used during debugging/development, and need not be in the robot on the field. Maybe then you are better off just using a serial link with a terminal.
</p>
<h1  id="Alternatives">Alternatives</h1>
<p>There are similar flat screen devices like TFT - Thin Film Transistor, Plasma displays and the emerging OLED technology. If you are simply displaying numeric, or alpha-numeric, it might be easier just to use an LED display.
</p>
<h1  id="How_these_work">How these work</h1>
<p>It consists of a panel of a particular arrangement of crystals. They are designed so they are polarised - that is they let light waves through in only one orientation. If you take two peices of polarised glass, and place them at right angles, the result will be totally opaque - you could not see through it at all. The polarised crystals change their orientation when an electrical current is applied - so this means you end up with opaque, and transparent areas. Against a background, and when controlled - these areas make up the digits, or pixels of an LCD display.
</p>
<p>A basic colour LCD display is simply the same system, but with a background consisting of a repeating pattern of red, green and blue areas under the Liquid Crystal - which then are shown or hidden, and the eye mixes these - and sees full colour - this is exactly the same principle as a colour CRT<a class="wiki wikinew for-review" title="Create page: CRT">?</a> television.
</p>
