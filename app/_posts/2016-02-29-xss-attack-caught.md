---
title: Cross-Site Scripting attack detection
keywords: Drupal
tags:
  - "Drupal-planet"
  - Security
  - XSS
permalink: "/content/xss-attack"
layout: post
published: true
image: "/assets/images/posts/xss-attack/image0.jpg"
author: HelenaEksler
---


{% include setup %}

When we develop a website we should take care of many things like design, responsiveness, speed, QA - and of course, security.

One of the major security concerns in websites and web applications is Cross Site Scripting (XSS). You definitely don't want somebody to run their own malicious code in your website.
And to avoid it - you would like to have some kind of "vaccine" from such "disease".

We all know about Drupal's `check_plain()`, `filter_xss()` and similar functions that sanitize user generated text, but unless we are actively checking for XSS, how can we be sure we've added them on all the right places?

Well, we found a nice solution for it that can be easily applied in your projects as well.

<div class="thumbnail">
  <img src="{{BASE_PATH}}/assets/images/posts/xss-attack/image1.jpg">
  <div class="caption">XSS on the title and body fields of an article</div>
</div>

<!-- more -->

Assuming you are creating some dummy data during the development - you should create an "XSS Example" for each content type, vocabulary etc.

But creating dummy data after each re-install during the development is annoying. All Gizra's projects are scaffolded from our home grown [hedley generator](/content/yo-hedley/), which comes with migration files that help with adding dummy and real content to your Drupal site. What we do when we add our own dummy migration data is add some data that has deliberate XSS in the title, body and text fields like in the image above.

<div class="thumbnail">
  <img src="{{BASE_PATH}}/assets/images/posts/xss-attack/image2.jpg">
  <div class="caption">XSS properly sanitized on the node view</div>
</div>

If you are following this best practice of using the Migration module to import content into your platform, you should add "XSS Examples" for each migration. If you start from Hedley, you are lucky, as I've just added such an [example there](https://github.com/Gizra/generator-hedley/pull/95/files#diff-ac7aeca225bb2174a1c2b2292c9cfc9cR6).

Of course it's not a panacea, but at least you reduce the chance someone will be able to inject dangerous script into your website.

For the most part Drupal core will already take care of preventing XSS, but for contrib modules and your custom code extra attention is required.  
In fact, we've found that one of the most widely used contrib modules doesn't santize page titles properly in a specific scenario involving i18n (obviously we opened a security issue and a patch was already created)

<div class="thumbnail">
  <img src="{{BASE_PATH}}/assets/images/posts/xss-attack/image3.jpg">
  <div class="caption">JS alert popping up is the sign for XSS in action</div>
</div>

The point is, if we hadn't worked with infected data, we wouldn't have noticed the security hole. By having this in place, we further minimized our site's security threat.

Give it a try, and notice how a JS alert page pops up in unexpected places from time to time. And then be grateful _you_ found it, before it reached your production.
