---
title: Todo app with RESTful backend
tags:
  - Headless Drupal
  - RESTful
  - "Drupal-planet"
permalink: "/content/todo-restful-backend"
layout: post
published: true
---

{% include setup %}

The Drupal community can now proudly claim its own implementation of a [Todo app](http://gizra.github.io/todo_restful/#/) with a RESTful backend!

<img src="{{BASE_PATH}}/assets/images/posts/todo-restful/image1.jpg" />

[TodoMVC](http://todomvc.com/) is a site that helps you select the right JS MVC library. But more then that, it allows you to learn by comparing those libraries, as they all implement the same thing - a simple Todo app.

I've decided to fork the [Angular example](http://todomvc.com/examples/angularjs/#/), and build it on top of [RESTful](https://github.com/Gizra/restful). Looking at the Angular code, I was pleasantly surprised.

<!-- more -->

As it turns out, TodoMVC's good folks have written the Angular app with both an API backend and a local storage one. If no backend is found, it silently falls back to local storage.

This means all I had to do was to write the RESTful resource. You can take a look at the [code](https://github.com/Gizra/todo_restful/blob/master/todo/modules/custom/todo_restful/plugins/restful/node/todos/1.0/TodosResource.class.php#L8) needed, to appreciate how very little effort is required to make Drupal a proper RESTful server that Simply Works.

On the client side I did two slight modifications:

1. Added the ability to inject the ``ENV`` with a configurable backend URL (to enable local/production/etc development environments)
1. Changed the [response](https://github.com/Gizra/todo_restful/blob/master/client/app/scripts/services/todoStorage.js#L81) the app was expecting after create/update, from ``todo.id = resp.data.id;`` to ``todo.id = resp.data.data[0].id;``

(Note that I could have kept the demo app completely unchanged and do this on the server side by writing a custom RESTful formatter that would wrap the result as expected by the app)

Keeping with "The Gizra Way" obsession with best practices, the entire package is published as an [installation profile](https://github.com/Gizra/todo_restful#todomvc-adaptation-to-drupals-restful). It even has a Behat test to verify it's installed properly!
Go ahead and [try](http://gizra.github.io/todo_restful) the app.
