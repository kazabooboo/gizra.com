---
title: "Behat Vs CasperJs (In Drupal Context)"
tags:
  - Behat
  - PhantomJs
permalink: "/content/behat-vs-casper-for-drupal"
layout: post
published: true
---

{% include setup %}

In my previous blog post [Behat - The Right Way](/content/behat-the-right-way) I made a statement that I think Behat was a better choice for writing tests even for the frontend. Some good arguments were raised in favor of CasperJS.  

<blockquote class="twitter-tweet" data-conversation="none" data-cards="hidden" data-partner="tweetdeck"><p><a href="https://twitter.com/amitaibu">@amitaibu</a> <a href="https://twitter.com/juampy72">@juampy72</a> it boils down to this: I&#39;m a frontend dev. Writing PHP is something I avoid whenever possible.</p>&mdash; Chris Ruppel (@rupl) <a href="https://twitter.com/rupl/status/535025236702683136">November 19, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

I believe my comparison was wrong in the sense it was lacking the key point to Behat's stength for us. It's not really about "Behat Vs Casper". The proper comparison should have been "Behat Vs Casper - _With a Drupal backend_"

And here's the key difference: With Behat you can interact with Drupal's API even when testing using PhantomJS. That is a lot of testing power!

<img src="/assets/images/posts/behat-casper/image1.gif" />

<!-- more -->


CasperJS knows your site from the browser side. It has no knowledge of the internals of your Drupal site. If you would like to access a node with the title "My article", you would probably hardcode the URL in your test:

```javascript
var casper = require('casper').create();

casper.start('http://example.com/content/my-article', function() {
  this.echo(this.getTitle());
});
```

In Behat on the other hand you could write:

```Gherkin
When I visit content "New article"
```

This would be translated to some code that will [query](https://github.com/Gizra/behat-drupal-phantomjs/blob/master/features/bootstrap/FeatureContext.php#L11-L32) Drupal to find the node by its title, and then redirect there.

This is obviously just a simple example. Changing variables, clearing cache, [cleaning up](https://github.com/Gizra/behat-drupal-phantomjs/blob/master/features/bootstrap/FeatureContext.php#L70-L90) before or after each scenario are easily done using Drupal's API via Behat, while still providing you the full capabilities of PhantomJS. Features like such as taking a [screenshot](https://github.com/Gizra/behat-drupal-phantomjs/blob/master/features/bootstrap/FeatureContext.php#L50-L68) of the page after a failed step - to see exactly what PhantomJS "sees".

<img src="/assets/images/posts/behat-casper/image2.jpg" />

Even though Behat is written in PHP we can mimic the functions CasperJS provides, such as [waiting](https://github.com/Gizra/behat-drupal-phantomjs/blob/master/features/bootstrap/FeatureContext.php#L34-L39) for an element to appear.

## Boilerplate code

I think by now you know that part of [The Gizra Way](http://getpantheon.com/blog/drupal-development-gizra-way) practices is providing a working example that _you_ can try yourself, right?

[Here's](https://github.com/Gizra/behat-drupal-phantomjs) an example repository you can clone into _any existing_ Drupal installation. Follow the README to setup the system - it shouldn't take too long and it's worth the effort.

The single test in the repo is looking for a node with the title "New article". Assuming your site doesn't have such a node, executing the test with ``./bin/behat`` will result with a failing test.

Go ahead and add a new content called "New article".  
Congrats, your PhantomsJS test now works.

<img src="/assets/images/posts/behat-casper/image3.jpg" />

Now add step that will fail, e.g.

```Gherkin
Then I wait for text "behat" to "appear"
```

The test will fail, and Behat will create a screenshot that you can look at, and understand why it failed. Nice, huh?
