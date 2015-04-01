---
title: Shoov Means Again in Hebrew
tags:
  - UI regression
  - Headless Drupal
  - "Drupal-planet"
permalink: "/content/shoov-ui-regression"
layout: post
published: true
---

{% include setup %}

UI regression is one of these things that make total sense but is rarely put into practice, for a simple reason - it's hard.


<div class="thumbnail">
  <img src="{{BASE_PATH}}/assets/images/posts/shoov-intro/image1.gif">
  <div class="caption">UI regression checking in action</div>
</div>

If you read the theory about it, it seems pretty simple. Take a screenshot of a certain page in your site which will be your "baseline" image, and from now on, whenever the code changes re-run an automated test that will compare a current screenshot with the baseline image.

<!-- more -->

The difficult part begins when you want to test it on multiple browsers - which is one of the major reasons you got into UI regerssion testing in the first place - and on multiple pages. Soon enough you have lots of baseline images on your hands, and if you follow an agile development process, these images are most likely changing pretty often.

At Gizra we realized we needed a system in place to help us with the tedious task of maintaining all those baseline images. The biggest problem we faced was how to easily re-create a baseline image from a "regression" image. That is - the baseline image which was the right image a minute ago, may no longer be the correct one once a new piece of code was deployed, so in fact the new regression image should become the baseline.

The second problem was that we wanted to have a single place to easily monitor all regressions so our QA and developers could check them, and if needed download the regression images to serve as the new baselines.

The next step was almost immediate. Since all our projects are hosted on GitHub, we soon enough realized we could do better than download - Shoov should create a pull request for us. [WebDriverCSS](https://github.com/webdriverio/webdrivercss), [NodeJs server](https://github.com/shoov/shoov-pr-server), [Docker](https://github.com/shoov/docker-shoov-pr), and a GitHub auto-generated access token later: bam! we have pull requests created automatically for us.

<div class="thumbnail">
  <img src="{{BASE_PATH}}/assets/images/posts/shoov-intro/image2.jpg">
  <div class="caption">Pull request automatically created</div>
</div>


[Shoov](https://github.com/shoov/shoov) is very much work in progress, but all the different pieces are now starting to gel, and we're already beginning to get significant value from it in our daily work at Gizra.
