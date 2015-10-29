---
title: "Simplify bootstrap"
tags:
  - "Bootstrap"
  - "Responsive"
  - CSS
  - HTML5
  - Web deign
permalink: "/content/simplify-bootstrap"
layout: post
author: YaronMiro
published: true
---

{% include setup %}

# Simplifying bootstrap responsive design

------

I want to share with my experience and insights about responsive web design using
Twitter bootstrap framework and hopefully help you to simplify your workflow and
make it more intuitive. This post is suitable for advanced, beginners and also
those who have just started to use twitter bootstrap.

<!-- more -->

## Understanding bootstrap:

------

Bootstrap responsive layout is based upon 3 major components:
breakpoint, container and a grid.
Every breakpoint has its own container width and a matching grid system.

### Breakpoint
A breakpoint is a representation of certain screen width.
It's basically a range built by a media-query.
Bootstrap provides by default a set of 4 breakpoints:

* `col-xs` => Phones (<768px)
* `col-sm` => Tablets (≥768px)
* `col-md` => Desktops (≥992px)
* `col-lg` => Desktops (≥1200px)

### ~ Container
The container is our insurance that the content of the
We need to be less responsive and instead of having a layout that support 4 breakpoints we will have a layout th

## The problem

------

Bootstrap provides us with a powerful responsive layout and a matching grid system
but with great power comes great responsibility!. The responsibility of making
sure that each breakpoint layout looks consist and not broken isn't an easy task
to achieve. The vast majority of our project at gizra are based upon bootstrap
and we often spend a lot of time and effort on creating the perfect layout
across all breakpoints, in my opinion this leads to a couple of drawbacks.

### Drawbacks
 * Our project estimation time gets longer when taking into consideration the
   amount of time we need to invest in every page, widget or feature to adapt
   itself on each breakpoint.

 * Whenever you change/update an HTML markup or a CSS rule then you need to
   test each breakpoint and make sure nothing has broken. You find yourself
   spending an extra time on testing the visibility of your responsive layout.

 * Our CSS files includes a lot of more selectors and media queries.
   Therefore we end up with a complex CSS files to maintain and the readability
   of the CSS harder.

 * The HTML markup gets way more ״dirty"  because we add selectors (classes, ids )
   and wrappers element so we can target elements and change them on every breakpoint.
   Some of the HTML markup may appear in different positions across the layout between
   breakpoints, so we may have duplicated content to maintain

## The solution

------
We need to be less responsive and instead of having a layout that support
4 breakpoints we will have a layout th

 </br>
{% include demo_block.html demo='http://yaronmiro.github.io/bootstrap-responsive/' code='https://github.com/YaronMiro/bootstrap-responsive' %}


