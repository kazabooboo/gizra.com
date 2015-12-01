---
title: "Mindful Custom Breakpoints"
tags:
  - Bootstrap
  - "Drupal-planet"
permalink: "/content/mindful-custom-breakpoints-bootstrap"
layout: post
author: YaronMiro
published: true
---

{% include setup %}

The vast majority of our projects at Gizra use [Bootstrap](http://getbootstrap.com/) for layout. We spend a lot of time and effort creating the perfect responsive layout and UX across all breakpoints. As Bootstrap comes by default with four breaking points, we naturally implemented them all, until we started asking ourself:

__Q__: Is responsive really needed?  
__A__: Yes, Of course.

__Q__: Do we always need so many breakpoints?  
__A__: No. Or, to say it differently: Yes. But not necessarily immediately.

Don't get me wrong. I'm not against responsive design. I'm just saying each breakpoint has an impact on the project length and budget. It's up to us to help the client decide how many breakpoints are right for them. As you know, Bootstrap can have [custom breakpoints](http://mindful-custom-breakpoint-bootstrap.gizra.com/).

<div class="thumbnail">
  <iframe src="http://gfycat.com/ifr/DistortedBarrenGroundbeetle" frameborder="0" scrolling="no" width="800" height="555" style="-webkit-backface-visibility: hidden;-webkit-transform: scale(1);" ></iframe>
  <div class="caption">Bootstrap default layout VS Bootstrap custom layout</div>
</div>

<!-- more -->

## The "Bootstrap got it right, don't mess with it" Approach

The project adapts itself to support multiple devices and screen sizes (large desktop, desktop, tablet, mobile).

Bootstrap provides us with a powerful responsive layout and a matching grid system. But with great power comes great responsibility! Our responsibility is making sure the UI is consistent. Making sure the layout looks perfect across all of the breakpoints isn't always an easy task to achieve and above all it consumes a considerable amount of project time.

## The "Bootstrap is awesome, but default is just a default" Approach

In this approach we define the project responsiveness needs based on quantitative data, from Google Analytics and similar resources, and decide on the breakpoints accordingly. For example, with this approach, we may start only with the large desktop and mobile breakpoints.

This approach doesn't mean we cannot change or add more breakpoints in the future, however it allows us to concentrate on the vital elements in order to get the project out the door. In fact, there is a good chance we will find out there is a need for all Bootstrap's default breakpoints, or even more - but at least we have actively, and mindfully, _decided_ to do it.

## Discovery Stage

The discovery stage of our projects is so important it probably deserves its own blog post, but lets focus only on the breakpoints aspect:

### Project Audience

In our case the audience are devices (phones, tablets, desktops). Concentrate on the current most [important audience](https://en.wikipedia.org/wiki/Pareto_principle).  
If possible, try to analyze based on real data (e.g. Google Analytics) to get a better idea of the kind of traffic we have and adjust accordingly to it.

### Time & Budget

Our project's time estimation gets bigger and the budget more expensive with every extra breakpoint. We often like to put it into numbers for the client and say (amount might vary, but it helps getting the point): "Each breakpoint will cost you $2,500. Lets skip two of them, and invest that $5,000 in your core features."

## Demo

To better understand the impact of this approach you can check the [demo site](http://mindful-custom-breakpoint-bootstrap.gizra.com/). Notice how for example in `col-md` size, the above layout seems cut.  

Wonder what normal people do when they see their site cut?  

They simple make the browser's window bigger :)

<div class="thumbnail">
  <img src="{{BASE_PATH}}/assets/images/posts/mindful-custom-breakpoint-bootstrap/image2.jpg">
</div>
