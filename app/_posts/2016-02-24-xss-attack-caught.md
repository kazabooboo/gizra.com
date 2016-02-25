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

We all know about Drupal's `check_plain()`, `filter_xss()` and similar functions that sanitize user generated text, but unless we are actively checking for XSS, how can we be sure we've added them on all the right places?

Well, we found a nice solution for it that can be easily applied in your projects as well.

<!-- more -->

All Gizra's projects are scaffolded from our home grown [hedley generator](/content/yo-hedley/), which comes with migration files that help with adding dummy and real content to your Drupal site. What we do when we add our own dummy migration data, so every time we rebuild the site it comes with some content, is add some data that has deliberate XSS in the title, body and text fields.

<div class="thumbnail">
  <img src="{{BASE_PATH}}/assets/images/posts/xss-attack/image1.jpg">
  <div class="caption">XSS on the title and body fields of an article</div>
</div>
<div class="thumbnail">
  <img src="{{BASE_PATH}}/assets/images/posts/xss-attack/image2.jpg">
  <div class="caption">XSS properly sanitized on the node view</div>
</div>

If you are following this best practice of using the Migration to import content into your platform, you should create an "XSS Example" for each content type, vocabulary etc.

<div class="thumbnail">
  <img src="{{BASE_PATH}}/assets/images/posts/xss-attack/image3.jpg">
  <div class="caption">First migrated term is an XSS term</div>
</div>

For the most part Drupal core will already take care of preventing XSS, but for contrib modules and your custom code extra attention is required.

In fact, we've found that one of the most widely used contrib modules doesn't santize page titles properly in a specific scenario involving i18n (obviously we opened a security issue and a patch was already created)

<div class="thumbnail">
  <img src="{{BASE_PATH}}/assets/images/posts/xss-attack/image4.jpg">
  <div class="caption">JS alert popping up is the sign for XSS in action</div>
</div>

The point is, if we hadn't worked with infected data, we wouldn't have noticed the security hole. By having this in place, we further minimized our site's security threat.

Give it a try, and notice how a JS alert page pops up in unexpected places from time to time. And then be grateful _you_ found it, before it reached your production.
