---
title: "Elm-Hedley, App Overview"
tags:
  - Elm
permalink: "/content/elm-hedley-overview"
layout: post
published: true
---


{% include setup %}

In August 2015 I challenged myself (and later the rest of the Gizra devs) to create a typical web-app with all the bells and whistles in Elm. It's called [elm-hedley](https://gizra.github.io/elm-hedley), and I'm super proud it is now featuring in Elm's [front page](http://elm-lang.org/).

<div class="thumbnail">
  <img src="{{BASE_PATH}}/assets/images/posts/elm-hedley-overview/image1.jpg">
</div>


This post is going to give a high level overview and point out some parts that are worth noting. However, before diving into the technical section, it is important to emphasize the virtues of _simply doing_.

If you would go back in the commits history you would see some nasty stuff that have been completely overhauled and polished. The only way of getting to that "improving" part is of course by starting! Only after that will one become smarter and recognize what needs improving, as well as be more experienced to know how to do it.

<!-- more -->

## MUV (Model-Update-View) Components

The [Elm architecture](https://github.com/evancz/elm-architecture-tutorial/) is advocating for a Model-Update-View for each components.

Model holds the data; Update is in charge of changing the data based on actions; and View is responsible for showing the data or triggering an action on a certain event (e.g. `onClick`).

We love this approach so much we have even ended up splitting each component to those files. So everything is consistent and makes finding stuff easy. The MUV is just a suggestion, you can add or remove stuff. Each [component](https://github.com/Gizra/elm-hedley/tree/v1.0.0/src/elm/Pages/Event) can also have a `Test`, `Router`, `Utils`, or completely omit the `Update` and `View` if they are [not needed](https://github.com/Gizra/elm-hedley/tree/v1.0.0/src/elm/Event).

<div class="thumbnail">
  <img src="{{BASE_PATH}}/assets/images/posts/elm-hedley-overview/image2.jpg">
</div>

## Components Vs Pages

The way we structure the files is each component resides in its own folder. Pages which are just a container of other components are placed under the `Pages` directory. In order to keep it simple, if a page is just a wrapper over a single component we won't create both a component and a page. [The page](https://github.com/Gizra/elm-hedley/tree/v1.0.0/src/elm/Pages/User) will be in fact a component. If one day the same page will need to become something more complex like the Event page, we can always move things around easily. The benefit of doing so is that it keeps things simple - no extra wiring needed merely for keeping things consistent (and harder to read).

## Effects

In line with the "Keep it Simple" approach, we realized that it's not required for every component to have an `effect`. So we can just [remove it](https://github.com/Gizra/elm-hedley/blob/v1.0.0/src/elm/EventAuthorFilter/Update.elm#L12). On the other hand if we need the component to return more info to the parent we can do that as-well. The [Articles page](https://gizra.github.io/elm-hedley/#!/articles) is a good example: The [ArticleForm](https://github.com/Gizra/elm-hedley/blob/v1.0.0/src/elm/ArticleForm/Update.elm#L38) component that is responsible for the form for creating articles doesn't need to have the newly created article as part of its model - it just needs to create it, and it hands it over back to the parent component. The parent component will make sure to [append](https://github.com/Gizra/elm-hedley/blob/v1.0.0/src/elm/Pages/Article/Update.elm#L36-L44) it to the [ArticleList](https://github.com/Gizra/elm-hedley/blob/v1.0.0/src/elm/ArticleList/Update.elm#L38-L41).

## Router

When building an SPA (Single Page Application) in Elm, this [router](https://github.com/rgrempel/elm-route-hash) package is fun to work with. If you are new to Elm's syntax it might seem a bit daunting at first, but I can assure you it's doing exactly what it [should]((https://github.com/Gizra/elm-hedley/blob/v1.0.0/src/elm/App/Router.elm)) be doing - and not more. I've written in [more detail](http://www.gizra.com/content/thinking-choosing-elm/) about how we love the fact that the URL change is in fact just a side-effect.

## Unit test and CI integration

I confess. In all our ~3 years of Angular we hardly did any unit testing. The setup and mocking was often too annoying, so we opted to do functional testing, which is of course great, but not as great as having both functional and unit tests.

It was super important for us to see that Travis badge telling us, go ahead, your latest PR didn't break things.

While writing the tests was fun, as Elm's pure functions make unit testing pretty much hassle free (see [example](https://github.com/Gizra/elm-hedley/blob/v1.0.0/src/elm/Config/Test.elm)), the integration with Travis-CI was more challenging. The tests were running fine on the browser, but in a node environment they started failing. Looking at existing examples we saw that we had to start mock the browser inside node for the tests to pass. Yeah, mocking - that thing we really tried to avoid.

Looking for a better solution we dusted off our [CasperJS](http://casperjs.org/) skills and came with a simple solution. Run the test via terminal using CasperJS (which in turn runs over PhantomJS). It worked!

We were so happy with the solution we've added it to our home grown [Yo generator](https://github.com/Gizra/generator-elmlang), so now everybody that uses it gets a fully working [Travis integration](https://github.com/Gizra/elm-hedley/blob/v1.0.0/.travis.yml).

<div class="thumbnail">
  <img src="{{BASE_PATH}}/assets/images/posts/elm-hedley-overview/image3.jpg">
</div>

## Ports & Interop

Any non-trivial web app has to make use of existing libraries. Rewriting Leaflet for maps / CKeditor for WYSIWYG editor / [Dropzone](http://www.dropzonejs.com/) for file uploads in Elm doesn't make much sense - it would be just too much work. So basically we let each JS library do its job and pass the information back to Elm that manages the state of the app.

After getting used to Elm's compiler saving us from doing mistakes, developing JS "in the wild" suddenly feels scary :)

Admittedly some parts in the [interop file](https://github.com/Gizra/elm-hedley/blob/v1.0.0/src/js/elm-interop.js) (short of [interoperability](https://en.wikipedia.org/wiki/Interoperability)) could be improved in terms of interacting with the DOM, but still for us the Elm's benefits are well worth the small hacks we had to do. I believe that as Elm matures those interactions would be even easier.

Here are for example the integration parts of Leaflet's map under the [Events](http://gizra.github.io/elm-hedley/#!/events) page - the [Elm code](https://github.com/Gizra/elm-hedley/blob/v1.0.0/src/elm/Main.elm#L51-L75), and the [JS interop](https://github.com/Gizra/elm-hedley/blob/v1.0.0/src/js/elm-interop.js#L64-L194) one.

## Gulp

There are [too many tools](https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4#.4ucjghbz7) out there, and we have chosen Gulp. We've built an opinionated Gulp file that takes care of compiling Elm, building SASS, deploying to gh-pages, etc.

The nicest part of it for development is having the error messages appearing both on the terminal, and on the screen upon live reload.

The good news in case you'd like to use it, is that it's part of the above mentioned Yo generator.

## What's Next

I have tagged a `v1.0.0`, but like any other software, it just marks a milestone - we are constantly improving and polishing parts of it. As always, if you spot anything you'd like to change or add your pull requests are most welcome!
