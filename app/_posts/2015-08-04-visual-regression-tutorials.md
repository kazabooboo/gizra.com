---
title: Visual Regression Tutorials
tags:
  - Shoov
  - Visual Monitor
  - "Drupal-planet"
permalink: "/content/visual-regression-tutorials"
layout: post
published: true
---


{% include setup %}

<div class="thumbnail">
  <img src="{{BASE_PATH}}/assets/images/posts/shoov-tutorials/image1.jpg">
  <div class="caption">Complex dynamic page</div>
</div>


A well known DrupalCon fact is that the action mostly takes place in the hallways and social gatherings. The logic is that the sessions are recorded, and the rest isn't.

On DrupalCon L.A. I was spending most of my time in the hallways stalking people to show them the newly born [Shoov](http://shoov.io/) and ask for their feedback. One of those people was my good friend Mike Anello, which later expressed his feeling about Shoov in this fun DrupalEasy [podcast](http://drupaleasy.com/podcast/2015/05/drupaleasy-podcast-153-drupalcon-los-angeles-day-2-recap).

Few months later, with the next DrupalCon already around the corner and Shoov maturing every day, I've contacted him to get his feedback on what we have so far, and I got this:

> I think one that could help me and other developers is almost something like a glossary. I’ve heard of many of the technologies in your visual monitoring “stack”, but not entirely clear on what the purpose of each one is (Yeoman, WebdriverCSS, mocha, etc… - Behat I know!

Let's start from the end, because those three words made an impact on me - "Behat I know".

As a reader of this post you are probably familiar with [Behat](http://docs.behat.org/en/v3.0/) or at least know what functional testing frameworks are.

Do you remember that time in the past you didn't?  
Do you remember that time in the past where functional testing was just a _nice to have_ for you and not the _life saver_ it is now days?  

<!-- more -->

I believe visual monitoring is at the same place Behat was three years ago when we started using it. It was a thing that we heard could maybe help us with the biggest pain points in development - bugs and regression - but we didn't realize how much it will change the way we work (hint: deploy cycle became much shorter and more solid).

Three years later down that road, I cannot imagine a project without automatic tests.

So to answer Mike's question I've started writing a [glossary](http://shoov.io/glossary/); which evolved to a basic setup and installation notes; which in turn evolved to a series of complete step by step [tutorials](http://shoov.io/tutorials/lesson1-install/) (and some more chapters are in the making). In fact, we've published a [dummy site](http://pages.shoov.io/dynamic-page/) just so everybody could easily swallow the blue pill and start adding visual regression tests to their sites.

I bet that after you'll complete the tutorials, and have your first tests committed to your GitHub repository you will have a similar reaction as I had - You will ask yourself how you and your team had the audacity to work on your websites' CSS without having such a tool in place.
