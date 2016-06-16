---
title: "Faithful Elm and the Amazing Router"
keywords: Organic Groups, Drupal 8
tags:
  - Elm
permalink: "/content/faithful-elm-amazing-router"
layout: post
image: "/assets/images/posts/faithful-elm-amazing-router/thumb.jpg"
---

{% include setup %}

I'm going to give an Elm session in the next [YGLF conf](http://yougottalovefrontend.com/#page-speakers). This was a great excuse to free up some hours to work on a new v0.17 SPA (Single Page Application). You won't believe what happened next...

Actually, you would - it was an awesome experience. In fact I've reached the point the backend me is
becoming jealous of frontend me.

{% include demo_block.html demo="https://gizra.github.io/elm-i18n-example/" code="https://github.com/Gizra/elm-i18n-example" %}

My goal with building this demo app, was to give a small, yet realistic, look into how Elm
allows us to accomplish daily tasks such as Http request, routing, access.
It was important for me to structure it in the same way we structure bigger apps we have or are building for production.

If your interested in Elm, and get a feeling how it would be built for your apps it might be a good starting point.
I've even thought of adding a single test, to show how it could be done. But being such a fun, predictable, opinionated and fun (no mistake here, it deserves the double fun) I kept on adding more and more test.

I was holding myself from adding too many features, but I couldn't resist polishing the existing ones, and added _lots_ of comments. With the compiler's tought laugh and ever growing unit tests, and change was
so easy it almost felt like cheating (and note that I rarely write "easy" or "trivial" on development issues).

<!-- more -->

## Elm Router Url
