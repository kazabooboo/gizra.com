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

I was holding myself from adding too many features, but I couldn't resist polishing the existing ones, and added _lots_ of comments. With the compiler's tough love and ever growing unit tests, and change was
so easy it almost felt like cheating (and note that I rarely write "easy" or "trivial" on development issues).

<!-- more -->

In general, at least for me, the greats thing the Elm brings to the table is the reduced cognitive load. I don't need to remember too much about my application. This means I can concentrate on my current component and make sure it's being wired in correctly into the entire application.

With [Elm-format](https://github.com/avh4/elm-format) we don't even need to bother ourself with the file format. And along with the Atom integration, on every save, we get consistent looking files.

## Wiring Multiple Components

One of the questions I see people struggle with is how to have different components communicate with each other. I won't get in depth here, but rather give some pointers to the code base. The gist of things is:

1. Main module is just boilerplate, and it cares only about the App module.
1. The App module is conveniently split into Model, Update, View files. This is the heart of our
webapp and it is responsible for calling the right components (a.k.a moduels).
1. A module (such as App) is always communicating downwards to its child modules. It needs to know about te child module, but the child doesn't need to know about it. Not does the module need to know about the grandchildren if they exist.
1. Child modules can pass information back to the parent module. It's done in the update function by simply
returning more info. While the typical return value of an `update` function is `(Model, Cmd Msg)` nothing stops it from being `(Model, Cmd Msg, Int)` - where Int will be some numeric value you need to parent module to get.


## Elm Router Url
