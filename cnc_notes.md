---
layout: default
title: Home
---
[Tags](tags.html)

# CnC Notes

This is a Collection of notes on my adventures in CnC.

We bought a CnC Machine, intending to use it to prototype new robot stuff, and because prototype fabrication is a fun use of robotics.

I am new to this, but have experience with 3d cad, electronics, robotics, microcontrollers and code - so I should be able to get what I want out of it.
License

# License
CC BY SA 3.0

# Starting Point

I have intended to buy or build a Cnc device for years - a 3d printer, laser cutter, lathe or router. A device where I can design things and let the computer do the work of turning it into a prototype. 

I finally took the decision to buy one after seeing a couple of Ben Heck episodes where he used laser cutters, cnc mills and 3d printers to awesome things. 

I went looking around for something I could afford and use. I considered GoCNC who have inexpensive machines, but after reading CnC forums, the 3020 type machines are better known. So I bought one of these for less than £500.

It arrived a few days later - requiring some assembly - attaching the stepper motors. It came with a large control box.


<ul>
  {% for post in site.posts %}
    {% if post.tags contains "cnc" %}
        <li>
            {% if forloop.index < 4 %}
                <span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a><p class="clearfix">{{ post.excerpt }}<a href="{{ BASE_PATH }}{{ post.url }}">more...</a></p><p class="clearfix"></p>
            {% else %}
                  <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
            {% endif %}
        </li>
    {% endif %}
  {% endfor %}
</ul>
