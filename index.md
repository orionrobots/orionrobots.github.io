---
layout: page
title: Welcome to the Orionrobots Shop
---
{% include JB/setup %}
Simple Hobby Robot Kits - Make a robot with us. All kits are solderless.
_FREE SHIPPING TO THE UK MAINLAND_

All kits are shipped from Surrey, Uk.

<!-- Design - I want 3 banners -> text + image - full screen width. -->

<!-- How - use a DIV for the wide banner - css for the class will do width/height.
Then JS - for swapping along 3 inserts - each a sub div of the main one.
Pips below to show the number of items. JS could lazy load images. -->

<div class="rotating_banner">
  <!-- Robot -->
  <div class="banner_insert">
    <div class="product_wide">
      <!--  The Orion Explorer 1 Robot Kits - linking to a kit page with accessory drop downs. -->
      <!-- Should have long robot image - or even collage. Should have price nice and clear, and a bit of text -->
      <a href="robot_kit.html">
      The Orion Explorer 1 Robot Kit
      <img src="{{ ASSET_PATH/products/OR0017/main.jpg }}"/>
      <div class="price">{{ products.orion_explorer.price }}</div>
      The Orion Explorer 1 Robot Kit is an Arduino based robot kit available standalone, or with a variety of sensor and
       output accessories. It requires no soldering, cutting or drilling and is easy to put together.

      </a>
    </div>
  </div>
  <!-- accessories -->
  <div class="banner_insert">
    <!-- The Accessories - adds ons you can buy for an explorer or your own projects - show a selection - link to category
with list -->
    <!-- accessories collage -->
  </div>
  <!-- Facebook -->
  <div class="banner_insert">
    <!-- Facebook - Visit our facebook page to link up with the Orionrobots community. - links to facebook -->
    <!-- show facebook big,a nd smaller twitter, pinterest and mailing list -->
  </div>
</div>

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

