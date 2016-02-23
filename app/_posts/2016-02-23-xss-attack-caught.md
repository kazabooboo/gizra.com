---
title: Cross-Site Scripting attack detected
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

When you start creating a new web-site - you should think about many things like design, responsivity, speed, time bounds, QA etc. and of course security.

One of the major security problems of web-sites and web-applications is Cross-Site Scripting (XSS). You definitely don’t want somebody to run their own code on your website.

So how to avoid this to happen on your Drupal website?

<!-- more -->

You should think about any text field in any type of content where the script can be putted in and make sure the text will be sanitized and the script that can be posted there won't run. You create examples again and again, to make sure no one will break you site or steal your users personal data.

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

And for most cases this is enough if you check every input somebody can put their own code, and you expect that Drupal will taking care about other places like page titles. But this is not always true when you are using contributed modules.

Exactly this problem we have noticed in one of the widely used contributive modules, which is changing the page titles, but misses sanitizing of the text that will be put there. Of course the issue was opened in the Security Drupal and patch was already provided.

<div class="thumbnail">
  <img src="{{BASE_PATH}}/assets/images/posts/xss-attack/image4.jpg">
</div>

So the point is - if you think someone will take care about safety of your web-site - no one will but you.
