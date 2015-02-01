---
title: (Automatic) QA
tags: 
  - The Gizra Way
  - "Drupal-planet"
permalink: "/content/automatic-qa"
layout: post
published: true
---

{% include setup %}

Here is a known fact - it's really easy to break the sites you are building. One wrong line of code, and a page is returning a 503 error.

Here is a known secret - (almost) nobody is doing QA. Since I'm not into arguing about this, I'm willing to soften it a bit to "most companies, don't do proper QA".

The reasons are pretty clear - not enough time and not enough budget. This post isn't going to be about the importance of QA - that point is clear to everybody, but rather give _realistic_ tips and tools that will allow you to start improving the quality of your projects, and actually even save you some time and money.

<!-- more -->

Let's start by agreeing that a developer can never do a proper QA to their own feature. They can't - not because they don't care - but because they are normally rushed into their next task.

Let's also agree that a code review (which for me is even more important than QA, but that's for another post), isn't QA. It may catch bugs - but it's not meant to check the entire site or application.

Nothing can replace a human doing a manual check. The trick is however, making sure they do it only once, and let the machine repeat that test automatically over and over again.

## How to start your QA

Just start. 

Seriously, no divine sign will be given. Basically, there are two approaches:

1. You catch one person of your team that has a good eye for details, and the enthusiasm to make sure all your applications are properly tested, and ask them to be responsible for the QA. It's recommended that person would be a developer, so they truly understand what they are checking, and know all the weak points.
1. You ask all the developers to start doing some (automatic) QA.

As always, in Gizra we are advocating for a balanced approach. We have a couple of people responsible for the QA, and the rest of the developers know they have to write at least one test per day. Why not write a test for each pull request, you ask? The answer is simple - writing tests takes time, so it's about finding the balance. Start with a test a day, and as your team advances, the automatic tests will get created more regularly.

Our two rules of thumb for automatic tests coverage are:

1. We try to reach a 15% coverage of all the features.
1. When it comes to access we have a 100% test coverage. Your client will thank you for it.

## Practical example

I'd like to demonstrate how easy it is to start QA. Lets say you are creating a new content type on your site, and you migrate content to it. You will probably validate manually the migrated content once. Now with a minimal effort, the same test can be repeated for you on every commit.

By definition tests shouldn't be "smart" or try to do super sophisticated stuff. They should just assert a certain behavior. 

```Gherkin
# blog_post.feature
Feature: Blog post
  In order to be able to view a blog post
  As an anonymous user
  We need to be able to have access to a blog post page

  @api
  Scenario Outline: Visit blog post page
    Given I am an anonymous user
    When  I visit "<url>"
    Then  I should the text "<text>" under the main content
    And   I should see the author "<author>"

  Examples:
    | url             | text             | author   |
    | some-url/foo    | That Lorem Ipsum | Hélène   |
    | anotehr-one/bar | <p>Some HTML</p> | Diderich |
    | and-a-third-one |                  | Celine   |
```

Behat's "Scenario Outline" test will iterate over each row under the ``Examples`` table, visit the URL and assert the text or HTML exists in the page or under a specific region.

The sentence ``Then I should the text "<text>" under the main content`` gets converted into code which basically instructs Behat to look for a certain HTML under the ``#main-content`` region.

```php
<?php

/**
 * @Then I should the text :text under the main content
 */
public function iShouldTheLinkUnderTheMainContent($text) {
  $this->assertElementContains('#main-content', $text);
}
```

Obviously we could have tested more, but assuming you had zero tests up until now, I would say it's enough to test a few items. Again, considering you didn't have anything before, having something is already a major improvement. The above simple example, for me is considered a _proper_ QA!

So for the next content type, you will only need to copy the ``blog_post.feature`` file, and change it a bit to fit the new page's logic.

You know what's the best part? If you didn't have any QA in place up until today (like every other company around you), just by having someone from your team going over your applications with a QA mindset and not a developer mindset, and by writing a few simple automated tests, you will significantly improve your final product, not to mention the time saved on fixing regressions.

## Quickly Setup Behat

Whenever we want to add [Behat](/content/behat-the-right-way/) testing we use the [Hedley generator](https://github.com/Gizra/generator-hedley) as it scaffolds all the needed files, and even sets up a ``.travis.yml``. I've added some automatic tests to assert Gizra.com which is built on Jekyll. You can grab it and try it for yourself.

One time setup:

```bash
git clone git@github.com:Gizra/Gizra.git
cd Gizra
cd behat
# By default the base URL is set to http://gizra.com
cp behat.local.yml.example behat.local.yml
# Assuming you have composer instlled globally https://getcomposer.org/doc/00-intro.md#globally
composer install
```

Execute the tests
```
./bin/behat
```

Not so hard, is it? Go ahead and start your QAing today!