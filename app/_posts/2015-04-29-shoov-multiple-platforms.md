---
title: "Cross Browser Visual Regression Tests With Shoov"
tags:
  - Shoov
  - QA
  - "Drupal-planet"
permalink: "/content/cross-browser-visual-regression-with-shoov"
layout: post
published: true
---

{% include setup %}

Maintaining visual regression tests can be hard, but the more tests we write for our projects, the more we see the tremendous power it provides in terms of QA and monitoring our sites.

One daunting task each developer hates (and often avoids) is validating their markup on multiple browsers. All of Gizra's developers use either Mac or Ubuntu on their machines, so the line to the "IE computer" on the far end of the office is getting long. Way too long.

And honestly - after our poor developers validated their work once, if we'd ask them to do it again. And again. And again... we'd probably be left without any.

Developers moral shouldn't be underestimated!

Shoov means "Again" in Hebrew for this very reason.Go ahead and jump to our [example repo](https://github.com/shoov/test-example) which now has cross browser tests. Writing your tests once - but testing on multiple platforms and browsers is a _big_ win.

<div class="thumbnail">
  <img src="{{BASE_PATH}}/assets/images/posts/shoov-multiple-platforms/image1.jpg">
  <div class="caption">DuckDuckGo.com tested by BrowserStack on Windows7, IE11, with 1024x780 resolution</div>
</div>

<!-- more -->

You can now execute `mocha` with different options. The simple `mocha` will still use a default browser (e.g. phantomJs), but you could also do:

```bash
# Execute the tests using the ie11 config.
PROVIDER_PREFIX=browserstack SELECTED_CAPS=ie11 mocha

# Execute the tests using the chrome on Mac config.
PROVIDER_PREFIX=saucelabs SELECTED_CAPS=chrome mocha

# Execute the tests using your own provider and config.
PROVIDER_PREFIX=myOwnProvider SELECTED_CAPS=myOwnConfig mocha
```

Combined with paid services such as [BrowserStack](https://browserstack.com) or [SauceLabs](https://saucelabs.com) there is no longer a need for a PC in the corner of the office - as they provide you with an instant virtual machine with lots of platforms and browsers.

<div class="thumbnail">
  <img src="{{BASE_PATH}}/assets/images/posts/shoov-multiple-platforms/image2.jpg">
  <div class="caption">BrowserStack is providing our virtual boxes on demand</div>
</div>

As we are using those services for testing our projects on multiple platforms and browsers, we are suddenly dealing with lots of images. Since our sites are frequently changing, those baseline images tend to change quite frequently.  
This is where [Shoov](shoov.gizra.com) really helps us in the tedious task of making sure our visual regression tests are up to date. It does it by allowing us to easily replace the baseline images with the regression ones, either by downloading them with the correct name, or even by creating a pull request for us.
