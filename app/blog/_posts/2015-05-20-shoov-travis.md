---
title: Visual regression tests on every commit
tags:
  - Shoov
  - Visual regression
  - "Drupal-planet"
permalink: "/content/visual-regression-travis-shoov-ngrok"
layout: post
published: true
---


{% include setup %}

As we dive deeper into visual regression testing in our development workflow we realize a sad truth: on average, we break our own CSS every week and a half.

Don't feel bad for us, as in fact I'd argue that it's pretty common across all web projects - they just don't know it.  It seems we all need a system that will tell us when we break our CSS.

While we don't know of a single (good) system that does this, we were able to connect together a few (good) systems to get just that, with the help of:
Travis-CI, [webdriverCSS](https://github.com/webdriverio/webdrivercss), [Shoov.io](http://shoov.io/), BrowserStack/Sauce Labs, and [ngrok](https://ngrok.com/). Oh my!

Don't be alarmed by the long list. Each one of these does one thing very well, and combining them together was proven to be not too complicated, nor too costly.

You can jump right into the [.travis](https://github.com/Gizra/Gizra/blob/master/.travis.yml) file of the Gizra repo to see its configuration, or check the [webdriverCSS](https://github.com/Gizra/Gizra/blob/master/ui-tests/test/tests.js#L36-L37) test. Here's the high level overview of what we're doing:

[Gizra.com](http://gizra.com) is built on Jekyll but visual regression could be executed on every site, regardless of the underlying technology. Travis is there to help us build a local installation. Travis also allows adding encrypted keys, so even though the repo is public, we were able to add our Shoov.io and ngrok access tokens in a secure way.

We want to use services such as [BrowserStack](http://www.browserstack.com/) or [Sauce-Labs](https://saucelabs.com/) to test our local installation on different browsers (e.g. latest chrome and IE11). For that we need to have an external URL accessible by the outside world, which is where ngrok comes in: `ngrok http -log=stdout -subdomain=$TRAVIS_COMMIT 9000` from the `.travis.yml` file exposes our Jekyll site inside the Travis box to a unique temporary URL based on the Git commit (e.g. `https://someCommitHash.ngrok.io`).

WebdriverCSS tests are responsible for capturing the screenshots, and comparing them against the baseline images. If a regression is found, it will be automatically pushed to Shoov, and a link to the regression would be provided in the Travis log. This means that if a test was broken, we can immediately see where's the regression and figure out if it is indeed a bug - or, if not, replace the baseline image with the "regression" image.

{% include thumbnail.html image_path="assets/images/posts/shoov-travis/image1.jpg" caption="Visual regression found and uploaded to shoov.io" %}

<!-- more -->

## Caveats

Some gotchas to be aware of:

Even though visual regression testing with BrowserStack or Sauce Labs takes more time than running it on PhantomJS, it's recommended to use such tools, since they test your site against _real_ browsers.  

Those tools cost money, but we find that it's well worth it. We are currently using BrowserStack (99$/month), though we're running into some issues with it not having an internal queue system - so if you reached your limit on virtual hosts concurrency, your tests will simply fail. For that reason we might switch to Sauce Labs (149$/month) which also provides more concurrent VMs.

{% include thumbnail.html image_path="assets/images/posts/shoov-travis/image2.jpg" caption="Blog post page tested on IE11, Windows 7" %}

Travis is limited to 50 minutes' execution time. Capturing each image might take about 30 - 90 sec, so when you reach lots of tests, you should probably split them.

The free plan of ngrok allows only a single concurrent tunnel to be opened. Even though BroswerStack and Sauce Labs provide their own tunneling solution, we decided to go with ngrok, in order to provide a more generic solution. We happily upgraded to the $25/month business account following our excellent experience with the free account.
