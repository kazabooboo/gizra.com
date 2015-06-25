---
title: Why PhantomJS When You Can Chrome
tags: 
  - Shoov
  - Live Monitoring
  - "Drupal-planet"
permalink: "/content/phantomjs-chrome-docker-selenium-standalone"
layout: post
published: true
---


{% include setup %}

Following our [unfortunate bug](http://www.gizra.com/content/live-monitor-shoov-irony/) in Shoov which caused login to stop working, we decided to write a Behat test that will continuously check the live site and make sure login with GitHub is working properly.

Writing the Behat test was pretty easy, however it had a major problem - it didn't work.

```gherkin
@javascript
Scenario: Login to shoov
  Given I am an anonymous user
   When I visit the homepage
    And I login with my GitHub account
   Then I should wait for the text "My Account" to "appear"
 ```

When Behat sees the `@javascript` tag in the begining of the scenario, it launches it (with the help of Mink extension) in PhantomJS, Firefox or Chrome.  
PhantomJS is usually the easiest to configure and hook into the CI workflow later on.

But the test we wrote just failed on all versions of PhantomJS we tried. Which made us switch to Firefox instead. Travis CI is kind enough to have a headless Firefox installed in their machine which we could use. Unfortunately, Firefox didn't like our test either, but for another reason - it couldn't parse the xpath we use to find our text elements.

So after spending some time trying to figure out a workaround, I suddenly stared at the browser I was using to find the answer - Chrome!

<div class="thumbnail">
<iframe src="http://gfycat.com/ifr/ThirstyOfficialDikkops" frameborder="0" scrolling="no" width="800" height="424" style="-webkit-backface-visibility: hidden;-webkit-transform: scale(1);" ></iframe>

  <div class="caption">Behat test running on headless Chrome, seen via VNC</div>
</div>

<!-- more -->

I was too quick to cheer, as I was soon discouraged at the amount of effort needed to install a headless Chrome on my Mac, and that's before even trying to do it on Travis.

So I soon decided to look at Docker. I wanted to be able to have a single command to provision a headless Chrome, that my tests could use. I was happy to find the well maintained [docker-selenium](https://github.com/elgalu/docker-selenium). This Docker container comes with a bonus feature - we can enable the VNC viewer that's already installed in the container and actually see our tests running.

### Advantages of Headless Chrome over PhantomJS

PhantomJS is a great tool - a headless browser that can run in the terminal. It has lots of different uses, but when it comes to testing your sites, I'd argue that it makes more sense to run the tests on _real_ browsers.

A second problem of PhantomJS is debugging. When a test fails, it's pretty hard to know why. Developers need to start saving screenshots or worse - print the HTML of the page, in order to "see" what PhantomJS sees. With the Docker solution, a developer can simply login via the provided VNC, see and even interact with the browser, so troubleshooting becomes much easier.

## Shoov integration

Going back to the original problem - we wanted to continuously monitor [Shoov](http://shoov.io/) itself, to make sure login is working. For that we obviously want Shoov to run our Behat test, so the next step was hooking docker-selenium into Shoov, and while we're at it, do it in a manner that everybody can use, without having to know too much about the underlying technology.

I'm happy to say the integration requires only very few lines. The first is in [.shoov.yml](https://github.com/amitaibu/shoov-behat/blob/master/.shoov.yml) (the equivilent of `.travis.yml`) enabling the Selenium addon.

```yaml
addons:
  - selenium
```

The next part is adding the location of the Selenium server in [behat.local.yml](https://github.com/amitaibu/shoov-behat/blob/master/behat/behat.local.yml.shoov#L5-L8).

We are currently running through tests on the DEV version, and the Selenium integration is soon to hit production.
