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

When you dev a web-site you should take care of many things like design, responsiveness, speed, QA etc. And of course security.

One of the major security concerns in web-sites and web-applications is Cross-Site Scripting (XSS). You definitely don't want somebody to run their own malicious code in your website.

We all know about `check_plain()`, `filter_xss()` and similar functions that sanitize the text, but unless we are checking for XSS, how can we be sure we've added them on all the right places?

Well, we found a nice solution for it that can be easily applied in your projects as-well.

<!-- more -->

All Gizra's projects are scaffolded from our home grown [hedley generator](/content/yo-hedley/), which comes with migration files that help adding dummy & real content to your Drupal site.

What we do when we add our own dummy migration data (so every time we rebuild the site it comes with some content), is add some data that has deliberate XSS in the title, body and text fields.

<div class="thumbnail">
  <img src="{{BASE_PATH}}/assets/images/posts/xss-attack/image1.jpg">
</div>
<div class="thumbnail">
  <img src="{{BASE_PATH}}/assets/images/posts/xss-attack/image2.jpg">
</div>

If you are using the Migration to import content into your platform - you should create an “XSS Example” for each content type, each vocabulary etc.

<div class="thumbnail">
  <img src="{{BASE_PATH}}/assets/images/posts/xss-attack/image3.jpg">
</div>

For the most part Drupal core will already take care of preventing XSS, but for contrib modules your custom code extra attention is required.

In fact, we have noticed in one of the widely used contrib modules, that in a certain scenario that involves i18n page titles were not sanitized properly in the seemingly safe taxonomy term page. We've of course opened an issue in the Security issue queue and patch was already provided.

<div class="thumbnail">
  <img src="{{BASE_PATH}}/assets/images/posts/xss-attack/image4.jpg">
</div>

But the point is, that if we hadn't worked with infected data, we wouldn't notice the security hole. By having this in place, we've further minimized our site's security threat.

Give it a try, and notice how suddenly a JS alert page pops up in unexpected places. And then be grateful you found it, before it reached your production.
