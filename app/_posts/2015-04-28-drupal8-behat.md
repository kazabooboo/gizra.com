---
title: simpleTest with Behat for Drupal 8
tags:
  - Behat
  - PHPunit
  - QA
  - "Drupal-planet"
permalink: "/content/simpletest-behat-drupal-8"
author: RoySegall
layout: post
published: true
---

{% include setup %}

The first time I heard about [Behat](http://docs.behat.org/en/v2.5/) was at DrupalCon Munich 2012. Since then use of Behat has grown exponentially and the tools it can be integrate with grew as well. With Behat we can test the markup of a page - pretty neat, right?  

Well, it's time to take Behat integration with Drupal a little further. I've decided to try and integrate it with Drupal's simpleTest, as this would open the door for writing simpleTests that are more readable and more "behavior driven" by nature.

```Gherkin
Scenario: Testing the login form.
  Given I visit 'user'
    And I fill in 'Username' with '@user-name'
    And I fill in 'Password' with '@user-pass'
   When I press 'Log in'
   Then I should see '@user-name'
```

Amazingly enough, the above Gherkin code which is being executed by PHPunit can test your Drupal installation!

<div class="thumbnail">
  <img src="{{BASE_PATH}}/assets/images/posts/behat-drupal8/test_results.png">
  <div class="caption">Behat code executed from within Drupal's simpleTest</div>
</div>

This functionality is provided by an experimental [repo](https://github.com/RoySegall/behat), which comes with an example test.

<!-- more -->

## The Implementation

The step definition mechanism discovers the methods it needs to invoke by reading the annotation on the class. In order to get the same flexible functionality the `I visit "login"` is translated to the following annotated class:

```php
<? php
# src/Plugin/Step/Visit.php

// ..

/**
 * @Step(
 *  id = "I visit '(.*?)'"
 * )
 */
class Visit extends BehatStepAbstract {

  public function step(BehatTestsAbstract $behat, $url) {
    $behat->visit($url);
  }
}
```

Each placeholder `(.*?)` will be passed as additional argument. The `$Behat`
object is an instance of `BehatTestsAbstract` which allows us to invoke the methods of the simpletest class.

## Making it work

We know how Behat works, how to define a test and that we need to write a feature file. But how can we run it? Let’s see the commented code on how the login tests work:

```php
<?php

class Login extends BehatTestsAbstract {

  public function testLogin() {
    // Create a user.
    $account = $this->drupalCreateUser();
    $this
      // Populate the behat arguments. Pass the username and password.
      ->setPlaceholder('@user-name', $account->label())
      ->setPlaceholder('@user-pass', $account->passRaw)
      // As each feature file could contain a bunch of scenario and we might
      // want to run tests with different tags.
      // This will make sure only scenarios with the `@login-success` tag will
      // run.
      ->setTag('@login-success')
      // Execute the correct scenario.
      ->executeScenario('login', 'behat');
  }

  public function testLoginFailed() {
    $this->setTag('login-failed')->executeScenario('login', 'behat');
  }
}
```

Lets have a look at the following:

```php
<?php
$this->executeScenario('login', 'Behat');
```

The first argument will be the name of the file, in our example `login.feature`  
The second argument is the module. This tells us which module contains the feature files, so in theory even themes could provide their own tests and step definitions.

## Next steps

In Drupal Dev Days 2015 quite a few people showed interest in this. Even if it won't be used by the vast majority, I still feel experiments such as this one help us explore more options, and find better tools for better QA.

My plan for the future is to to completely eliminate the need for `executeScenario`, thus allow having a feature file without a Drupal class, while still being able to use all the step definitions provided by other modules and themes.
