---
title: "Headless Drupal - Don't Be A Purist"
tags: 
  - Headless Drupal
  - Drupal-planet
permalink: "/content/headless-drupal-call-for-action"
layout: post
---
{% include setup %}

This blog post, unlike the previous won't cover new techniques and implementations. Just for the fun, I'll share the image of the decoupled form with wysiwyg, a link to the PR that added it, and a link to the live demo. 

But in this post isn't technical, but rather about the _approach_ we are using now days in Gizra, which resulted with RESTful, the headless implementations you say on previous posts, etc'.

## Don't wait for Drupal 8

People have high hopes on Drupal 8. In fact, I would dare to say that people have high hopes on everything that is still an idea and not a reallity. The solution around the corner always seems as the best one.  
Obviously that's not right. Drupal 8 will be great, I have no doubt. And yes, it has a REST module in core. But why wait for it? You can already start talking with your Drupal 7 server via REST calls using RESTful. There's no reason why you should still provide your clients with Drupal's ugly forms when you can move into a more robust system.

In fact, while RESTful is very inline with the architecture of Druapal 8, and is close to D8's REST, it also has some different [concepts](https://github.com/Gizra/restful#concept). 

If you've seen The Gizra Way video you know by now that I'm no purist. I don't care how Headless Drupal is defined. It might be a fully decoupled web app. But also having an Angular form create and edit a node is treating Drupal as a RESTful server. The important thing is to always remember your use case. It doesn't make sense on all sites to move to a web app. Many times it would be perfectly ok to serve the web app or just certain components from within a Drupal page.


## Zariz







<!-- more -->

