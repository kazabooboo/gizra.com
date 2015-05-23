---
title: Forking Todo Restful with Backbone.Marionette
tags:
  - RESTful
  - "Drupal-planet"
  - "Guest post"
permalink: "/content/restful-backbone-marionette"
layout: post
published: true
author: lukeherrington
---

{% include setup %}

__In this guest post, [Luke Herrington](https://twitter.com/lukeherrington) shares his experience with integrating an existing Drupal backend with a Backbone.Marionette Todo app.__

If you're reading this, you probably already know about all of the great work that Gizra has done in the Drupal/REST space. If you haven't, I highly recommend you check out their [github](https://github.com/Gizra) repo. Also see the [RESTful](https://github.com/RESTful-Drupal) module.

One of the projects that Amitai has contributed is [Todo Restful](https://github.com/Gizra/todo_restful). It shows an Angular implementation of the canonical [TodoMVC](http://todomvc.com/) Javascript app connecting to a headless Drupal backend. It's a great demonstration of how easy exposing Drupal content with the RESTful module is. It also shows that when a RESTful API adheres to best practices, connecting it with clients that follow the same best practices is like a nice handshake.

I saw the Todo Restful project and it got me thinking, "If Amitai did this right (hint: he did), then I should be able to get this working with Backbone pretty easily". I was pleasantly surprised!

{% include demo_block.html demo='http://infiniteluke.github.io/todo_restful/' code='https://github.com/infiniteluke/todo_restful' %}

<div class="thumbnail">
  <img src="{{BASE_PATH}}/assets/images/posts/restful-backbone/image1.jpg">
  <div class="caption">Todo app with a Drupal backend</div>
</div>

Here's a simplified list of everything I had to do to get it working:

<!-- more -->

1. Fork the repo
1. Delete everything in the client/app directory. (the Angular TodoMVC stuff)
1. Put [Backbone.Marionette implementation of TodoMVC](http://todomvc.com/examples/backbone_marionette/) into `client/app` directory.
1. Change the API endpoint in the Backbone code
Override parse functions on Todo model/collection to dig into the `data` portion of the response from Drupal.
This was necessary because Backbone expects the response for a collection to be an array of models. The RESTful module sends back other data so it places the models inside an array named data. All I had to do is tell Backbone where to look.
1. Edit Grunt file to work with the new app code. This was the hardest part because it was specific to the Angular app.
1. Test, Commit, Deploy. Amitai setup a Grunt task to deploy the client side code to a github project page

Note: There are detailed instructions on how to get the app running locally on in the [repo readme](https://github.com/Gizra/todo_restful/blob/master/README.md).

Notice I didn't have to touch any code on the Drupal side. Amitai's amazing installation script spun up the Drupal site for me with todo content type created and exposed with RESTful. It just worked. In fact the Backbone.Marionette demo app points to the same backend as the Angular app!


* [Backbone.Marionette app](http://infiniteluke.github.io/todo_restful/)
* [Angular app](http://gizra.github.io/todo_restful/#/)
* [Drupal backend](http://live-todo-restful.pantheon.io/)

Also notice, except for steps 4 and 5 I didn't have to touch the Backbone code!

Now imagine applying this to your project... If your requirements demand a lot of interactivity and slick UI elements, go for it! You don't even have to go fully headless if you don't want to! See the [RESTful module documentation](https://github.com/RESTful-Drupal/restful/blob/7.x-1.x/README.md) on how to expose your content and start innovating. The possibilities are endless!

## Conclusion

Amitai and Josh Koenig (Pantheon), in their [talk at DrupalCon LA](https://events.drupal.org/losangeles2015/sessions/decoupled-drupal-when-why-and-how), spoke about Headless Drupal and showed how Drupal can still be relevant in an age where client side frameworks (Angular, Ember, React, Backbone…) rule. It made me excited about Drupal again and showed a whole new way that Drupal can further ["Get off the island"](http://www.garfieldtech.com/blog/off-the-island-2013) and start to play nicely with other technologies.

In the end, that's why I went through this exercise: To show that Drupal is a viable CMS backend for not just Angular, but also Backbone.Marionette or any other front end framework for that matter! There's a ton of front-end developers out there that don't know what Drupal is capable of. I hope that by showing how easy this was, front-end devs can see that Drupal is more relevant than ever and that it makes their life really easy. I also did this to show current Drupal devs that with Headless Drupal we can imagine displaying and interacting with our content in ways we never have before.

So who's next? React? Ember?  
