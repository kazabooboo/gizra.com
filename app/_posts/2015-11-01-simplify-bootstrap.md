---
title: "Simplify bootstrap"
tags:
  - "Bootstrap 3.5"
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
The vast majority of our project at Gizra are based upon Twitter Bootstrap framework and we often
spend a lot of time and effort in creating the perfect UX (user experience) and layout
across all breakpoints. I want to share with you my experience and insights about responsive
web design using Twitter Bootstrap framework and hopefully help you to simplify your workflow and
make it more intuitive.

<div class="thumbnail">
  <img src="{{BASE_PATH}}/assets/images/posts/simplify-bootstrap/image.gif" class="img-responsive">
  <div class="caption">Bootstrap responsive layout at action gif</div>
</div>

<!-- more -->

-----------

### "Full Responsive" approach
`Full Responsive` - The project adapt it self to support all devices and screen sizes.

Bootstrap provides us with a powerful responsive layout and a matching grid system
but with great power comes great responsibility!
Our responsibility is making sure that our website/app UX is
consist and that the layout looks perfect across all of the breakpoints isn't always
an easy task to achieve and above all it consume a considerable amount of project time.

-----------

### "Responsive Pattern" approach
`Responsive Pattern` - Defines the project responsive support range.

Project adapt it self according to a "Responsive Pattern" that's was defined by it's
internal requirements and needs. On this approach we have the advantaged of supporting what
is really vital and suitable for the current project state. This give us the ability to
create a rapid solid project in a reasonable amount of time.

The responsive pattern isn't absolute and may change in the future,
But the important thing is to have a clarified solid pattern to start from when working on a project.

Of course We can still decide that it's vital to do it all and have a "full responsive" support,
But in most cases we won't have to. At least not on the first stage of the project.
So by not doing it "full responsive" or by doing it in stages we simplify our workflow and making
it more intuitive. The beauty of it is that we can also have different "responsive patterns" on
different stages of the project.

-----------

### "Responsive pattern" discovery stage
The discovery stage of our project "responsive pattern" is very important
and must be done in the exact order because each step relies in the previous one.

1) `Project Audience`   
In our case the audience are devices (phones, tablets, Desktops)
Concentrate on the current most important audience.
In the future we can monitor our website/app with "google analytics" tool
and get a better comprehension of the kind of audience traffic we have and
adjust accordingly to it if it's necessary and worth while.

2) `Project UX`   
Find out what is the mandatory "UX" that the project must provide and can it be implemented
equivalently on any device/media screen size. This will help us see in a clearer were we need to invest
our responsive effort on the first project state.

3) `Project UI`   
Our project "Estimation Time" gets longer and the "Budget" will become more expensive
when taking into consideration the amount of time we need to invest in every page,
widget or feature to adapt itself on multiple breakpoints.
We need to concentrate on understanding which parts of the UI (User Interface)
are the vital for our project.

4) `Summary Stage`   
Now that we established a firm base ground about our:

 - `Project Audience`
 - `Project UX`
 - `Project UI`

Then we can wisely decide on what to fit in to the "Budget" and "Estimation Time" according to our preferences.

To help you get started. I have create a demo that demonstrates:   
Twitter bootstrap `default responsive layout` (4 breakpoints) vs   
Twitter bootstrap `custom responsive layout` (2 breakpoints)

I also add another goodie which is my personal "live responsive" monitor

{% include demo_block.html demo='http://ym-bs-responsive.gizra.com/' code='https://github.com/Gizra/bootstrap-responsive' %}
