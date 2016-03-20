---
title: "AngularJs Ui-Router"
tags:
  - AngularJs
  - "Ui-Router"
  - Javascript
permalink: "/content/angularjs-ui-router"
layout: post
author: YaronMiro
published: true
---

{% include setup %}

One of the things I love to do is watch movies at home with my soon-to-be-wife (with emphasis on _soon_ as I'm getting married tomorrow!). We have seen a lot of them over the years so it's not always easy to find a new movie or to remember a good movie that's worth watching again.  

Combined with my love to JavaScript I've decided to create an AngularJS app with [ui-router](http://angular-ui.github.io/ui-router/sample/) library.  The demo app fetches Apple [iTunes top 60](https://www.apple.com/itunes/charts/movies/) movies and presents the info and trailer for each, and even has a cool archive feature that lets you create your own private collection.

{% include demo_block.html demo='http://yaronmiro.github.io/AngularJS-UI-Router-Demo' code='https://github.com/YaronMiro/AngularJS-UI-Router-Demo' %}

{% include thumbnail.html image_path="assets/images/posts/angularjs-ui-router/image1.jpg" caption="angularJS and ui-router demo application" %}

<!-- more -->

## UI-router

UI-router has the ability to structure your application based on states.
These states can be [parallel](https://github.com/angular-ui/ui-router/wiki#state-manager), [nested](https://github.com/angular-ui/ui-router/wiki/Nested-States-%26-Nested-Views) and even structured into [multiple named views](https://github.com/angular-ui/ui-router/wiki/Nested-States-%26-Nested-Views).

A state is not dependent upon a URL. You can assign a URL to a state but it can also be transitioned from one to another without a URL change.

The app has plenty of comments that describe each router and its relation to the other [states](https://github.com/YaronMiro/AngularJS-UI-Router-Demo/blob/master/app/scripts/app.js#L62-L213).

### State
A `state` can have its own template and controller. This simplifies the application structure, for a cleaner and maintainable code environment. No more thick controllers and fat templates - now you can separate your code into [smaller](https://github.com/YaronMiro/AngularJS-UI-Router-Demo/blob/master/app/scripts/controllers/movies.js) [reusable](https://github.com/YaronMiro/AngularJS-UI-Router-Demo/blob/master/app/scripts/services/movies.js) fragments.


### Nested States

Here are some key concepts for nested states:

* Child state can inherit (resolved data or custom data) from their ancestors states.
* Child may extend the ancestor state URL or override with its own URL.
* An abstract parent state can be created as a base-ground for all of its child states.

Abstract state can never be transitioned to, it is activated implicitly when one of its descendants are activated. This can be useful in several situations:

* Preparing a URL for all of the child states.
* Creating a place holder template that the child state can populate.
* Inheriting $scope objects down to the child state.
* Providing resolved dependencies via resolve for use by child states.
* Providing inherited custom data via data for use by child states or an event listener.

### Multiple Named Views

You can create a complex state that is divided in to regions (named views). Each region can have its own template and controller. Child states may optionally inject their region relative to their ancestor state and thus override it.

## Next steps

Next, I plan to add a Drupal backend using [Hedley](https://github.com/Gizra/generator-hedley) - currently bookmarking is just locally to `localStorage`. After that I'm not sure what I'll do. I think first I'll enjoy my honeymoon, watching movies with the wife...
