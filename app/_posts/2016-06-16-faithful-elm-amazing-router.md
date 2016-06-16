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

{% include demo_block.html demo="http://elm-spa-example.gizra.com/" code="https://github.com/Gizra/elm-spa-example" %}

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
1. The App module is conveniently [split](https://github.com/Gizra/elm-spa-example/tree/1.0.0/src/elm/App) into Model, Update, View files. This is the heart of our
webapp and it is responsible for calling the right modules (a.k.a components) via its `update` function.
1. A module (such as App) is always communicating [downwards](https://github.com/Gizra/elm-spa-example/blob/1.0.0/src/elm/App/Update.elm#L26) to its child modules. It needs to know about the child module, but the child doesn't need to know about it. Nor does the module need to know about the grandchildren if they exist.
1. Child modules can pass information back to the parent module. It's done in the update function by simply
returning more info. While the typical return value of an `update` function is `(Model, Cmd Msg)` nothing stops the [child's update](https://github.com/Gizra/elm-spa-example/blob/1.0.0/src/elm/Pages/Login/Update.elm#L25) function from being `(Model, Cmd Msg, Int)`, where Int will be some numeric value the [parent](https://github.com/Gizra/elm-spa-example/blob/1.0.0/src/elm/App/Update.elm#L28-L29) can act on.


## Elm Router Url

With the new official [Navigation](https://github.com/elm-lang/navigation) module in place, the need of SPA routers has been met. However, Navigation isn't just a router module. It's providing the building blocks
for _other_ routing solution and merely has a certain solution as a "serving suggestion".

@rgrempel's [elm-route-url](https://github.com/rgrempel/elm-route-hash) module indeed builds on the foundations of Navigation, however it takes a different approach which I personally prefer.  
As you might have read in one of my previous posts under the [Url change is not routing](http://www.gizra.com/content/thinking-choosing-elm/) paragraph, elm-route-url allows you to add routing (i.e. actually changing the URL) _after_ the fact, with _very little_ changes to the existing code base.

For example, when I've written the demo app, I have started step by step, wiring different components to my app.
The App.Model has a property called `activePage` which is as the name implies responsible for knowing which page is active.
In fact, I have written the entire app without having and URL change. Just to emphasize, there were "pages" changes, it was simply not reflected in the URL.

So once I wanted to write Navigation in I've realized I need to change my existing app. For example in my `update` function I should have changed:

`(model, Cmd.none)`

to

`(model, Navigation.newUrl (toUrl newModel))`

same was with my `init` function. I had to change the signature from `init : ( Model, Cmd Msg )` to `init : Result String Int -> (Model, Cmd Msg)`. Nothing to dramatic, but I prefered avoiding it.

This is where I believe Elm router URL's approach shines. The `init` and `update` function can remain exactly as they were, while you can add your routing needs via a completely [separate](https://github.com/Gizra/elm-spa-example/blob/1.0.0/src/elm/App/Router.elm) set of functions.

This makes the addition consistent with my experience if building the app one step at a time, and knowing that what went in, is stable, solid and most likely not to change if there are no new requirements.
