---
title: Visually Monitoring Drupal.org
tags:
  - Shoov
  - Visual Monitor
  - "Drupal-planet"
permalink: "/content/visual-monitor-drupal"
layout: post
published: true
---

{% include setup %}

In recent months I've been demoing visual monitoring to many developers. The reaction was always positive, but I've realized that not enough people have taken the step from recognizing the need to actually implementing it on their own projects.

If you have been following my recent blog posts or tweets you've probably noticed we are trying to bring visual monitoring along with [Shoov](http://shoov.io) to the masses. To do so we're trying to reduce the complexity and codify our "lessons learned".

{% include thumbnail.html  iframe="<iframe src='http://gfycat.com/ifr/FrailVioletEmperorpenguin' frameborder='0' scrolling='no' width='100%' height='424' style='-webkit-backface-visibility: hidden;-webkit-transform: scale(1);' ></iframe>" caption="Drupal.org visually monitored by Shoov" %}

Yeoman generators is one way to achieve this. With the new [yo shoov](https://www.npmjs.com/package/generator-shoov) - a single command makes sure all the files needed for visual monitoring are immediately scaffolded in your repository. In fact, it also sets up Behat tests along with a [.shoov.yml](https://github.com/Gizra/drupal.org-shoov/blob/master/.shoov.yml) that will allow Shoov to run your visual monitoring tests periodically.

Since visual monitoring might be new for a lot of people, the generator not only scaffolds the files but also attempts to check if your system is properly installed, and tells you how to fix it if not.

{% include thumbnail.html  image_path="assets/images/posts/shoov-drupal/image1.jpg" caption="Shoov generator in action." %}

<!-- more -->

What's cool about using libraries such as WebdriverCSS in conjunction with 3rd party services such as BrowserStack or Sauce Labs is that you can write once, and execute multiple times in different environments.

```bash
# Run on Chrome 43.0 on Mac X 10.10
PROVIDER_PREFIX=saucelabs SELECTED_CAPS=chrome mocha

# Run on Internet Explorer on Windows 7
PROVIDER_PREFIX=saucelabs SELECTED_CAPS=ie11 mocha
```

Another nifty feature of WebdriverCSS is the ability test the same pages on multiple viewports with a single line of code:

```javascript
.webdrivercss(testName + '.homepage', {
  name: '1',
  // ...
  // Test on multiple view ports.
  screenWidth: selectedCaps == 'chrome' ? [320, 640, 960, 1200] : undefined,
}, shoovWebdrivercss.processResults)
```

## Best Practices

Visual monitoring best practices are beyond lines of code - they are about the mindset needed when approaching this task. Here are the important ones:

1. Don't try to achieve 100% test coverage. Assuming that up until now you had 0 test coverage, it's probably fine to reach 40% - so don't feel bad when you `exclude` or `remove` the dynamic parts. Their _functionality_ can be complimented by functional testing with Behat or CasperJs.
1. Don't compromise by using PhantomJS. Your sites are being consumed by real people on real browsers. Use 3rd party services, or your own Selenium cloud to run tests. It's well worth the money.
1. Given the last point - the time the tests run should be considered as a resource. Having a gazillion tests would eat much of that resource. Try to find the balance: doing as little effort as possible, with as much gain as possible.
1. Look (and contribute) to examples. The Drupal.org [monitoring example](https://github.com/Gizra/drupal.org-shoov) is there for the community to learn. While the repo has been "Shoovified", there's actually zero vendor lock-in - the WebdriverCSS code is valid with or without Shoov.
1. Start simple. Visual monitoring is very powerful, but requires the time to master it. If you will overdo with lots of baseline images from the beginning you might need to adapt them very often until you will get the hang of it.

## Shoov's Next Steps

Apart from adding a nicer design to the application, Pusher integration for real time notifications, and lots of smaller features, the Gizra devs are constantly trying to push code to other projects, namely [RESTful](https://github.com/RESTful-Drupal/restful) and [yo hedley](https://github.com/Gizra/generator-hedley). We are hoping you could enjoy and use that work on your own Headless Drupal projects, and of course hope the community could contribute back.

{% include thumbnail.html  image_path="assets/images/posts/shoov-drupal/image2.jpg" caption="Shoov's dashboard." %}

We've also began work on a getting started tutorial, which will help guide developers through example to reach visual monitoring best practices nirvana.
