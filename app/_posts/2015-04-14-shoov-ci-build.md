---
title: "Shoov - CI tests on the live site"
tags: 
  - Shoov
  - "Drupal-planet"
permalink: "/content/shoov-ci-production-server"
layout: post
published: true
---

{% include setup %}

[Shoov](/content/shoov-ui-regression/) keeps evolving, and now has an [example repo](https://github.com/shoov/test-example) that demonstrates how we're trying to make UI regression simpler, we took some time to implement the second feature we were missing - automatic testing on the *live* site.

We saw a very strange situation everywhere we looked: Dev teams were writing amazing test coverage. They were going the extra mile to setup a Travis box with environment as close as possible to the live site. They tested every single feature, and added a regression test for every bug. Heck, every commit triggered a test suite that run for an hour before being carefully reviewed and merged.

And then the site goes live - and at best they might add [Pingdom](https://www.pingdom.com/) monitoring to check it's working. Pingdom at its simplest form sends an http request every minute to your site. If the answer is `200` - it means that all is good in the world. Which is of course wrong.

Our mission is to change this, and bring functional testing to the live site. One that is easy to setup and that integrates with your existing testing and GitHub flow.

<div class="thumbnail">
  <img src="{{BASE_PATH}}/assets/images/posts/shoov-ci-build/image1.jpg">
  <div class="caption">The Drupal backend holds the CI build data, including the full log, and status</div>
</div>

While Pingdom is wonderful and is alerting us on time whenever a site goes down, its "page is fine, move along" approach doesn't cut it for us. Here are some examples why testing on the production server is a good idea:

<!-- more -->

1. Your live site is contains various widgets from different providers - Facebook comments, Stripe.js payment system, Youtube videos etc. You have no control over these providers, and you can't check their status pages constantly.
1. Your clients might have too many permissions power assigned to their admin role, and by accident touched some setting they shouldn't have. Wouldn't you like to know if suddenly the "Latest news" in your home page is gone?
1. Your site got hacked! You really want to get red alerts when that happens.
1. Your Solr index got deleted, so your search page is still working, but has 0 indexed items. Wouldn't it be great if for example you had a simple [Behat](/content/automatic-qa/) that ran every few minutes and checked the number of indexed items that appears on the page isn't below 1000, and alerted you if that's not the case?

## The Plan

We are currently building a system that simplifies the task of hooking your site to a testing system. We can't use existing systems like [Travis](https://travis-ci.org/) because, as awesome as they are, they are tightly coupled with idea of being triggered by a ``git commit`` action.

There are workarounds for that, and Circle CI does allow triggering a build from a REST api, but triggering it on the right time, notifying the right people (not just the build author), preventing overflow of emails when errors occur - all that isn't there, or at least isn't simple enough to setup in a single click.

There are a few principles we always try to follow, in Shoov and other projects:

1. Open Source [all our work](https://github.com/shoov), and don't be afraid to fail.
1. Integrate with GitHub, in a similar way to Travis's. Unlike other services that restrict you to a specific testing tool, or require copying a script into their web UI - Shoov uses your testing tool, in its natural environment - your repo.
1. Build it for our needs. Don't try to make a product out of it - just make it perfect for what we need. If we discover it does give us a signifcant benefit, we can think of a wider scope.

The backend part is almost done, so our next task is to have a UI that helps connect GitHub repos to Shoov. We expect something similar to the interface Travis provides - a checkbox to enable or disable the service. From there it will be up to you to add a [.shoov.yml](https://github.com/amitaibu/gizra-behat/blob/master/.shoov.yml) file to the repo, and write some actual tests.