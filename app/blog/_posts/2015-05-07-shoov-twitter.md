---
title: How we could monitor Twitter (if we had to)
tags:
  - Shoov
  - Visual regression
  - Behat
  - "Drupal-planet"
permalink: "/content/shoov-monitor-twitter"
layout: post
published: true
---

{% include setup %}

Monitoring your live site is a pretty good idea - that's generally agreed. Same goes for visual regression testing. Doing it, however, is hard. Enough so that very few companies actually do visual regression testing/monitoring, so don't feel bad if you haven't either until now. But after reading this post you should seriously consider doing it. Or at least give it a [try](https://github.com/shoov/test-example).

For example, here's an overview of how we could monitor Twitter, if someone would actually ask us to (as always you can jump right into the [repository](https://github.com/amitaibu/ci-tests-twitter)):

{% include thumbnail.html image_path="assets/images/posts/shoov-twitter/image1.jpg" caption="Visual regression on a Twitter page. So much functionality has been asserted in this simple screenshot" %}

<!-- more -->

## Visual Regression is Hard

Getting a baseline screenshot of a page requires some thinking, and a bit of trial and error.  Twitter's main page has lots of dynamic content: the user's tweets count, followers, trending topics, actual tweets etc. Obviously our screenshot cannot include that info.

Luckily [webdriverCSS](https://github.com/webdriverio/webdrivercss#setup) already comes with some commands that help us to `exclude` (place a black rectangle) or even `remove` (completely hide) an element.

In the [test file](https://github.com/amitaibu/ci-tests-twitter/blob/master/ui-tests/test/tests.js) you can see we selected only the CSS selectors that need to be excluded or removed, leaving our page with _some_ data, but not all of it. Don't be discouraged by not covering 100% though. Even with some parts hidden we have already asserted so much functionality - certainly more than having no visual test in place.

## Functional testing for dynamic parts

A screenshot is a powerful tool, but not the only one. We still have functional testing frameworks in our toolbelt. [Behat](http://gizra.com/content/behat-the-right-way/) can easily be used to assert that the number of tweets feature is working.

In the time of writing [@gizra_drupal](https://twitter.com/gizra_drupal) has about 340 tweets. So we could write a simple [test](https://github.com/amitaibu/ci-tests-twitter/blob/master/behat/features/user_page.feature) that will assert that there's a minimum of 300 tweets (giving us the flexibility to delete a few without breaking the tests).

The Behat PHP [code](https://github.com/amitaibu/ci-tests-twitter/blob/master/behat/features/bootstrap/FeatureContext.php#L18-L38) to implement this is fairly straight forward. It finds the value in the HTML, converts it into an integer, and asserts it has a minimum value.

## Shoov

Up until now we didn't need [Shoov](http://shoov.io/), which is good, since Shoov is agnostic to which tools you use - it's only there to help you deal with the accumulated images and regressions.

{% include thumbnail.html image_path="assets/images/posts/shoov-twitter/image2.jpg" caption="Before we've hidden the spinner, Shoov showed us the regression" %}

It's important to realize that once you go down the visual regression road it's hard to stop. Suddenly PhantomJS isn't good enough, if you can use BrowserStack or SauceLabs to validate the site on many platforms and browsers. Testing your site on just one screen size isn't enough either.  
webdriverCSS comes with the powerful `screenWidth` property, which should make it super simple to test multiple view ports soon as this [issue](https://github.com/webdriverio/webdrivercss/issues/73) is fixed.

## New stuff

* We now have a [Shoov.io](http://shoov.io) page, which is updated from time to time with new info.
* [app.shoov.io](https://app.shoov.io) is now the app site, sitting on Amazon S3 and CloudFront with SSL certificate, so you should feel safer using it.
* "Dev Tips" is a new concept we've introduced. Since the site and all of its sub-components are open sourced, we have added a few tips in each page to help you - the developer - to better understand how the system works, and maybe even encourage you to contribute.

{% include thumbnail.html image_path="assets/images/posts/shoov-twitter/image3.jpg" caption="Login to Shoov.io to learn more from the dev tips" %}
