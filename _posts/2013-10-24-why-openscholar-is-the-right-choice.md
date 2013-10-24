---
layout: post
title: "Why Harvard's OpenScholar Is the Right Choice"
description: ""
category: null
tags: 
  - OpenScholar
  - "Drupal-planet"
published: true
---

## Is this Blog post for me?

* Are you running a university site?
* Are you using any kind distribution?
* Have you reached this far?

Yes. Continue to the next paragraph.

## What is Harvard's OpenScholar?

[OpenScholar](http://openscholar.harvard.edu/) is Harvard's solution for providing a mini-site for each scholar, professur, and department. It can be a tiny site showing only very little information, or a big one like the [Faculty of Arts and Sciences](http://www.fas.harvard.edu/). No coding required.
I won't go over all the features, trust me, there's a lot of customization that can be done there. What I do want to talk about it, after being approached by several universities, is the subject of deciding if OpenScholar is the right choice for you, based on the _right_ reasons.

## The common (wrong) reasons people decide not to use OpenScholar


## The right way of forking and installing OpenScholar

As soon as we'll get OpenScholar into Panthoen you would have a [one-click](https://github.com/openscholar/openscholar/issues/4135) install. I don't expect you to necessarily keep it hosted there, but do take advantage of it to get a first impression.

The next step, after you gave your management a taste of the capabilities, is installing it locally, so you can develop and test your custom code.

We're using open source - so there's probably no real reason to make your project private. Click the "Fork" button on OpenScholar's [Github](https://github.com/openscholar/openscholar) page and create your universities' _public_ repository. OpenScholar is now your upstream taking care of the entire platform, letting you to concentrate on your custom code. Since your repository is public you can brag about it - not a thing to be underestimated.

Make sure you keep working with the Installation profile. Ever since OpenScholar  switched to a make file workflow, and have [Travis-CI](https://travis-ci.org/openscholar/openscholar/builds/12942900) executing a huge Behat test suite on every commit, releases have become much smoother.

## Pro tips
* Use Drush to [build](https://github.com/openscholar/openscholar/wiki/Building-using-Make-file) the installation profile
* Remember you are working in an open source environment - Ferdi Alimadhi and Richard Brandon, the project leads are more than happy to assist. Your custom changes, if well written and generic enough, can be pushed upstream
* Migrate existing content from the current data source. ``OS dummy migrate`` module which is used to pre-populate the site when doing tests on it, can be actually used to migrate your _real_ data
* Still decided to not use OpenScholar? Fine, you have your reasons, and they are probably good and valid. But you can still keep looking and poking OpenScholar. I don't believe there's any other Drupal distribution out there being worked on 24 hours a day 6.5 days a week (the outcome of the time difference between the Israeli team in Gizra, and the Harvard team in the US) with so many features and such a big test coverage - go ahead, take advantage of it
* Still not sure if it's the right choice for you? Try the issue queue or send us an email, we'll help you figure it out