---
title: "Drupal, Hippies and Backend Restrictions"
tags:
  - Restful
  - "Drupal-planet"
permalink: "/content/apps-entity-restrictions"
author: RoySegall
layout: post
image: "/assets/images/posts/apps-entity-restrictions/burner.jpg"
published: true
---


{% include setup %}

You might have heard of [Burning Man](http://burningman.org/). Basically it's a lot of hippies settling down in the desert for a few days, setting up small camps with diffrent themes that make up a big, temporary city.

It's not for me.

<div class="thumbnail">
  <img src="{{BASE_PATH}}/assets/images/posts/apps-entity-restrictions/burner.jpg">
  <div class="caption">Radical Self-expression is one of <a href="http://midburn.org/en-ten-principles/">Midburn ten principles</a>. &#169; Eyal Levkovich.</div>
</div>

<!-- more -->

And yet, I found myself going to the hackathon of our local Burning man community as an enthusiastic Drupal developer willing to solve any Drupal issue (and you can assume they had a few). My part was to write the backend, and the obvious choice was using the [RESTful](https://github.com/RESTful-Drupal/restful) module.

Soon I came across a big problem: How can we manage 3rd party applications and make sure they can't access resources which they shouldn't have access to?  
How can we prevent the Secret Santa application (an app that provides addresses of other Burning Man attendees so they could receive gifts) from accessing a user's medical qualification data?
Or prevent the Midburn questionnaire application from accessing attendees private data?

<div class="thumbnail">
    <iframe src="http://gfycat.com/ifr/FragrantUnequaledHerculesbeetle" frameborder="0" scrolling="no" width="800" height="600" style="-webkit-backface-visibility: hidden;-webkit-transform: scale(1);" ></iframe>
  <div class="caption">Apps Entity Restrictions in action</div>
</div>

[Apps Entity Restrictions](https://github.com/RoySegall/apps_entity_restrictions) is our answer to the problem.

With this module, which I developed, you can create 3rd party application representation where you can determine which field or property each registered application can access on each entity. You can even restrict the allowed CRUD operations.

While working on Gizra's modules and projects in the past years I came to realize that a good API and a good DX is the one thing responsible for a good module. By default, any app is restricted from doing any operation - you know, security.

Progrmatically creating an application with allowed `GET` operation on the body and the node ID is as you would might expect it to be:

```php
<?php
$app
  ->setTitle('Demo application')
  // Allow only GET operations.
  ->allow('node', 'methods', 'get')
  // Explicitly allow access to both properties/ fields.
  ->allow('node', 'properties', 'nid')
  ->allow('node', 'properties', 'body')
  ->save();
```

Checking those restriction via code is easy:

```php
<?php
// Check property access.
if (!$app->entityPropertyAccess('get', 'node', 'field_address')) {
  throw new \Exception("This app has no GET access to the address field.");
}
```

## Restful Integration and Other bonuses

There is a cool and easy Restful integration. The module provides a set of
[API](https://github.com/RoySegall/apps_entity_restrictions#restful-integration)
for developers to get this restriction validation on their endpoint. If you're interested in Decoupled Drupal, you should probably take a look at this.

The next step is baking in some more statistics. Wouldn't it be great if you could know the usage stats for each application? Apart from knowing usage patterns, having information like, for example, amount of _invalid_ requests might help in detecting intrusion attempts.

<div class="thumbnail">
  <img src="{{BASE_PATH}}/assets/images/posts/apps-entity-restrictions/image1.jpg">
  <div class="caption">Requests graphs. Cool, right?</div>
</div>
