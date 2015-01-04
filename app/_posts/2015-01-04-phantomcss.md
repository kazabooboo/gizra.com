---
title: "Hedley Generator - PhantomCSS and UI regression"
tags: 
  - Hedley generator
  - The Gizra Way
  - "Drupal-planet"
permalink: "/content/phantomcss-ui-regression"
layout: post
published: true
---

{% include setup %}

What's fun about having a tool like [Hedley](/content/yo-hedley/) is that every new best practice we acquire can be easily added to our ever evolving, versioned, and codified knowledge base - and it's there for the community to use and improve.

So, as if it didn't have enough of best practices bundled in it already, we've taken another step to get [PhantomCSS](https://github.com/Huddle/PhantomCSS) a "CSS regression testing" tool in.

<div class="thumbnail">
  <img src="{{BASE_PATH}}/assets/images/posts/phantomcss/image1.jpg" />
  <div class="caption">PhantomCSS in action</div>
</div>

<!-- more -->

PhantomCSS is a great tool for you to make sure there's no regression in your UI. Considering how easy it is to break your own UI between releases, and how much manual effort it requires to QA your site before each release, a proper automatic solution is much needed. Like any other automatic testing tool it requires some maintenance, but it is probably less effort than fixing the site plus having to explain to the client why something that already looked good is suddenly broken.

Not only will the single command ``yo hedley`` automatically setup PhantomCSS for you, it will also give you a working ``.travis.yml`` file, so upon scaffolding your project, it will be immediately tested.

One of the difficulties working with Travis or other CI tools is that you don't have access to the box itself. While phantomCSS is kind enough to notify you that there was a regression and even create screenshots for you to see the difference - you have no access to those files.  

We solve this by using a nifty [bash script](https://github.com/Gizra/generator-hedley/blob/3540852d195ebbf34216e0434379e7709970c9a3/.travis.yml#L76-L82) that uploads the screenshots to [imgur](http://imgur.com) - letting us understand how Travis "sees" the app can reduce debugging time considerably.

<div class="thumbnail">
  <img src="{{BASE_PATH}}/assets/images/posts/phantomcss/image2.jpg" />
  <div class="caption">A regression was detected, and the failed output was uploaded to imgur</div>
</div>


### Best practices tips

1. Follow the best practices [section](https://github.com/Huddle/PhantomCSS#best-practices) in PhantomCSS. Pay attention to the recommendation not to try and test entire pages but rather smaller elements. It's faster and less error prone.
1. Travis is running on an Ubuntu instance, so make sure to run the first tests that produce the images you're are going to compare to on an Ubuntu machine, as every OS might slightly render differently the fonts. If you don't have an Ubuntu installed, since we have the ``imgur`` bash script, you can use Travis itself to create those screenshots.
1. Don't try to overdo with the UI tests. With a few simple tests that validate for example the header, footer and elements in the main content of different pages you will already cover a lot - probably more than you had when you didn't have any tests... If you have some "extra" testing time you may wish to invest it in [Behat](/content/behat-vs-casper-for-drupal/) testing.