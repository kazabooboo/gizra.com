---
title: "Headless Drupal - Inline edit"
tags: 
  - Headless Drupal
  - AngularJs
  - RESTful
  - Drupal-planet
permalink: "/content/headless-drupal-inline-edit"
layout: post
---
{% include setup %}

In our [last example]({{BASE_PATH}}/content/restful-angular-forms/) we showed how to create node using an angular form served from Drupal itself. This time we are taking one big step further and create the node from a completely decoupled [web app](https://github.com/Gizra/angular-drupal-forms-example).  
And if that's not enough for the readers excited by the idea of a decoupled Drupal, we've also added inline editing to the example!

Enjoy the [live demo](http://gizra.github.io/angular-drupal-forms-example/#/)

{% include thumbnail.html image_path="assets/images/posts/headless-drupal-inline-edit/image1.gif" caption="If you know Form API's pains, you should be excited now" %}

<!-- more -->

Note that the authentication and access isn't done by cookies, but rather provided by an access token thanks to RESTful token auth module. This means the app maybe served from _any_ domain - making Drupal a truly RESTful server.
Also, since Entity validator module is enabled, we get the validation errors for both POST, and PATCH http requests.

I believe the implications of this example are pretty big, when you think about how can the UX be greatly improved, while keeping Drupal as the content repository.  
Go ahead, jump into the [RESTful](https://github.com/Gizra/restful) project and start using it _today_.
