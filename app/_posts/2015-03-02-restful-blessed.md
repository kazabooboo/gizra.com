---
title: Headless Drupal In Your Terminal
tags:
  - Headless Drupal
  - "Drupal-planet"
permalink: "/content/headless-drupal-terminal"
layout: post
published: true
---

{% include setup %}

<div class="thumbnail">
  <iframe width="640" height="360" src="https://www.youtube.com/embed/cA6ZRmRK3mw?rel=0" frameborder="0" allowfullscreen></iframe>
  <div class="caption">Graphics in the Terminal, for you geeking pleasure</div>
</div>

If you're excited about this, you are most likely a developer - so [here's](https://github.com/amitaibu/restful-blessed) the code.

If this data looks familiar to you, it might be because it's the same data you see via [Hedley's]({{BASE_PATH}}/content/yo-hedley/) Angular client.

<!-- more -->

<div class="thumbnail">
  <img src="{{BASE_PATH}}/assets/images/posts/yo-hedley/image1.gif">
  <div class="caption">Same data pulled into an Angular app</div>
</div>


The demo is heavily based on the [blessed-contrib](https://github.com/yaronn/blessed-contrib/) repository by Yaron Naveh, with some notable changes:

* No dummy data! All the data that you see in the terminal is real, and is being pulled from a real Drupal server with the data exposed via RESTful.
* We are using [RamdaJs](http://ramdajs.com) to iterate over the arrays and objects (This repository was a good excuse to practice our functional programing).
* [Inquirer](https://www.npmjs.com/package/inquirer) library was used to gather the data from the user.

By default, the demo uses the Hedley demo hosted on Pantheon, but you can easily ``yo hedley`` on your local, and set the URL to your local server. This will also let you change the geolocation of the events and see them change on the map in real-time!

## So What?

Honestly, I don't know. Are there real life uses for such a dashboard? Maybe. All I know is that exercises like that help re-think our solutions. For us web developers, consuming the data not by a browser surely opens the door for some radical new solutions.
