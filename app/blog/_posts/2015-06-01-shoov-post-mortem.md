---
title: Live Monitoring With Shoov And Some Sweet Irony
tags:
  - Shoov
  - Live Monitoring
  - "Drupal-planet"
permalink: "/content/live-monitor-shoov-irony"
layout: post
published: true
---


{% include setup %}

Irony presents itself in many forms. Not being able to login to a site that is responsible for testing that the login is working properly on other live sites, is one of them.

As much as I'd like to say I was able to enjoy the irony, the six hours I spent tracking the bug were slightly frustrating.

One of the things [Shoov](http://shoov.io/) is built for is assisting us with a quick configuration of live site monitoring using your preferred functional testing tool (e.g. Behat or CasperJS).  
As awesome as services like Pingdom are, they still provide very little insight to what's actually going on in the site. In fact, according to Pingdom, Shoov was up and running, even though no user could have logged in.

{% include thumbnail.html image_path="assets/images/posts/restful-backbone/image1.jpg" caption="Shoov login now working. When it wasn't, the fish were sad" %}

## Post Mortem

At this point of time I think very few people care about the "post mortem" of this incident since Shoov is still a work in progress, however some interesting lessons were learned, and some contributions were made.

<!-- more -->

First a quick overview of the problem. Shoov is a fully [decoupled Drupal](https://events.drupal.org/losangeles2015/sessions/decoupled-drupal-when-why-and-how), where the only way to register and login are through the GitHub login. Upon login, after the user is redirected back from GitHub's own authentication, it sends the one time access code it got from GitHub to our Drupal server to do a final validation and register the user.

The login worked perfectly, until suddenly it didn't. To make things even harder my local installation worked fine.

After more hours that I'm willing to admit and a good pointer from [@izuzak](https://twitter.com/izuzak) from GitHub's support team, we figured that my local was sending the following `POST`:

```
POST /login/oauth/access_token HTTP/1.0
User-Agent: Drupal (+http://drupal.org/)
Host: github.com
Content-Length: 119

client_id=007xxxx007&client_secret=1xxxxxxa2&code=someOneTimeCode
```

While the live server sent this:

```
POST /login/oauth/access_token HTTP/1.0
User-Agent: Drupal (+http://drupal.org/)
Host: github.com
Content-Length: 111

client_id=007xxxx007&amp;client_secret=1xxxxxxa2&amp;code=someOneTimeCode
```

As you might have noticed (and I can't blame you if you didn't) the `&` char was escaped, and GitHub decided it doesn't like that anymore.

## Solve and Prevent Regressions

After quickly solving the error by hardcoding the `&` char I've decided to spend some time in figuring how I could prevent this from happening again. (Remember: Shoov means "again" in Hebrew for this very reason...)

I've noticed that even though RESTful has thrown an exception when it got the result from GitHub, and even though the site is piping the logs to [Loggly](http://www.gizra.com/content/logs-easy-way/) I wasn't notified about it.

So, the first thing I've done was to write a [pull-request](https://github.com/RESTful-Drupal/restful/pull/522/files) to RESTful to make sure that exceptions are registered in the watchdog. This means we now got that part covered not just for Shoov, but for all users of RESTful!

Next was writing a [Behat test](https://github.com/amitaibu/shoov-behat/blob/master/behat/features/github_login.feature) that will be executed by Shoov every few minutes, and constantly verify that Shoov's login is working properly. At least this unfortunate bug will not go unnoticed should it return some day (as unfortunate bug tend to do from time to time).

Having to do all that, along with wanting to have it as a public repository, gave me the push to finally introduce the concept of [encrypted keys](https://github.com/amitaibu/shoov-behat/blob/master/.shoov.yml#L1-L6). Since we don't want the credentials of the dummy GitHub user we've created for the test to be exposed, Shoov will now have a secret private key that can be used for AES encryption. Shoov makes sure those encrypted variables will be available in our [tests](https://github.com/amitaibu/shoov-behat/blob/master/behat/features/bootstrap/FeatureContext.php#L44-L49).

{% include thumbnail.html image_path="assets/images/posts/shoov-post-mortem/image2.jpg" caption="Encrypted keys using the same syntax as Travis in .shoov.yml file" %}

And you know what else is great? Since all the different components of Shoov are open source, we can enjoy sharing the code the does the [decryption](https://github.com/shoov/php-ci/blob/33f9ea4292005e7898f192cb3d1250d681acaf7e/export-vars.js) with everyone.
