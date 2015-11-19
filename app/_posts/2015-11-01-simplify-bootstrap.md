---
title: "Be Responsive About Your Responsive Design Needs"
tags:
  - Bootstrap
  - "Drupal-planet"
permalink: "/content/simplify-bootstrap"
layout: post
author: YaronMiro
published: true
---

{% include setup %}

The vast majority of our projects at Gizra are based on [Bootstrap](http://getbootstrap.com/) framework and we often spend a lot of time and effort in creating the perfect responsive layout and UX (user experience)
across all breakpoints. As Bootstrap comes by default with four breaking points, we found ourself implementing them, until we started asking ourself:

__Q__: Is responsive really needed?  
__A__: Yes, Of course.

__Q__: Do we always need so many breakpoints?  
__A__: No. Or said differently: Yes. But not necessarily immediately.

Don't get me wrong. I'm not against responsive design. I'm just saying each breakpoint has an impact on the time line and budget. It's up to us, to help the client decide how many breakpoints are right for them.


<div class="thumbnail">
  <img src="{{BASE_PATH}}/assets/images/posts/simplify-bootstrap/image.gif">
  <div class="caption">Bootstrap default layout VS Bootstrap custom layout</div>
</div>

<!-- more -->

## The "Bootstrap got it right, don't mess with it" Approach

The project adapts itself to support as many devices and screen sizes (large desktop, desktop, tablet, mobile).

Bootstrap provides us with a powerful responsive layout and a matching grid system
but with great power comes great responsibility!
Our responsibility is making sure that our website or webapp UX is
consist. Making sure the layout looks perfect across all of the breakpoints isn't always
an easy task to achieve and above all it consumes a considerable amount of project time.

## The "Bootstrap is awesome, but default is just a default" Approach

In this approach we define the project responsives needs based on quantitative data, such as looking at Google analytics to get the source of visitors or just analyzing the expected audience, and defining the breakpoints according to it. For example, with this approach, we may start only with the large desktop and mobile breakpoints.

This approach doesn't mean we cannot change and add more breakpoints in the future, however it allows us to concentrate on the vital elements in order to get the project out the door. In fact there is a good chance we will find out there is a need for all Bootstrap's default breakpoints, or even more - but at least we have actively, and mindfully, decided to do it.

## Discovery Stage

The discovery stage of our project is so important it deserves its own blog post, but lets focus only on the breakpoints aspect:

### Project Audience

In our case the audience are devices (phones, tablets, Desktops). Concentrate on the current most important audience.  
If possible, try to analyze based on real data (read as Google analytics) to get a better comprehension of the kind of audience traffic we have and
adjust accordingly to it if it's necessary and worth while.

### Time Line & Budget

Our project's time estimation gets longer and the budget will become more expensive for every extra breakpoint. We often like to put it into numbers for the client and say (amount might vary, but it helps getting the point): "Each breakpoint will cost you 2,500$. Lets skip two of them, and invest that 5,000$ in one of your core functionalities."


## Demo

To better understand the impact of this approach below you can find a [demo](http://ym-bs-responsive.gizra.com/). Notice how for example in `col-md` size, the above layout seems cut. Wonder what normal people do when they see their site cut? They simple make the browser's window bigger :)

## Bonus For Jekyll users

Here's a nifty snippet I add to the top of my Jekyll mockups, which indicates which breakpoint we are looking at.

<div class="thumbnail" style="margin-bottom: 0">
  <img src="{{BASE_PATH}}/assets/images/posts/simplify-bootstrap/responsive-monitor.gif">
  <div class="caption">Live responsive monitor</div>
</div>
