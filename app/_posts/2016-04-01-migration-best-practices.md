---
title: Migration Best Practices
keywords: Drupal
tags:
  - "Drupal-planet"
  - Migrate
  - QA
  - Behat
permalink: "/content/migration-best-practices"
layout: post
published: true
image: "/assets/images/posts/migration-best-practices/thumb.jpg"
author: HelenaEksler
---

{% include setup %}

The wonderful Migrate module is used in every one of our projects, whether we have actual legacy
content, or "just" want to create dummy and [XSS content]({{BASE_PATH}}/content/xss-attack/).

So you received from your client a scary looking SQL dump or Excel file with old website data. Where should you start?

Here are some of the best practices we apply in Gizra to ensure a smooth
migration project,
with the least possible amount of surprises or bugs.

<!-- more -->

## Discovery phase

A good discovery phase before doing any actual coding is key
to the success of the project.
We believe it's a good idea to do it as part of the [price estimation]({{BASE_PATH}}/content/budget-goggles/).

### Understand the data

The first step is to understand how to map the old data into Drupal's entities - which data should be a node and which one a taxonomy term.  
As always, we try to map the "real world" into Drupal entities.
An article, for example, is obviously a piece of content, so it needs to be a node,
and not a taxonomy term. However there are more aspects to consider like the number of fields, semantic
meaning of the content, and whether hierarchy is needed or not. It's also worth noting that
this is the exact time to think about improvements to the data structure.

There are some cases where content types were separate in the old website for
historical reasons that can be merged and vice versa. Our
rule of thumb is that the content type should try to map as much as possible the reality.
That is, a "case study" content type might have very similar fields to an
"article" content type but semantically
they are different, thus they should be two different content types.

After you decide what fields your content type will have, pay careful attention
to the data itself. If an article "topic" is a set of values that are constantly
repeating, then naturally you would prefer to convert the field to a select list or even
to a proper taxonomy term. Notice variants in the same data ("Politics" vs "politics")
and make the extra effort to sanitize and clean the data.

### Don't migrate what you don't need

Not all of the existing data really needs to be migrated. For example, past events
may not add much or any value to the new site. It's up to you to present to the
client the possibility to save some money on a low impact migrate and shift resources
to something more important.


### Don't go fully automatic for nothing

Doing manual migration is fine. As part of the discovery phase figure out how
many items per content type need to be migrated. If it is less than 50 offer
the client to do it manually. Yes, you may "lose" some billable hours, but you
gained the client's trust.

## Development phase

### Convert to SQL

If you received your data in csv format it is advised to convert it to SQL. Your
migrate may work fine with a few hundreds lines, but it will choke if you have
more - there's no primary key column in CSV, so it basically loops over the
same rows again and again.

SQL also provides another layer of safety, since it won't accept wrong data. For example strings cannot be inserted into `Int` columns, so if you get
an SQL error, you can easily find where the data is corrupted.

We got you covered with our [csv2sql](https://github.com/Gizra/csv2sql#csv-to-sql-for-drupal).

## Content during development

While you are developing the platform and constantly rebuilding the site from scratch,
of course you don’t want to wait hours for the import of all the data.
You can add some dummy data, but a better approach would be to take about 50 rows from each table/content type.
However, don't take 50 consecutive rows, but rather take random rows to increase
the chances of hitting data corruption or just plain bugs in development instead of in production.

## Migrations testing

Automatic tests are great, right?  
They catch bugs, and make you feel more confident about your code base, right?  

So write automatic tests for your migration scripts, and wire them to Travis CI!

It’s obvious that when you have a huge amount of content you can’t check
every single piece of content. But even little of coverage is better than none.

Start writing tests during the development against smaller subset of content
(e.g. those 50 rows mentioned earlier). There is no need to create complicated
scenarios for migration of content testing, you should simply check that the fields
contain the correct data (texts, images), and that references are set correctly.

The crucial part in the tests requires your QA person to _visually_ compare the
old data with the new data. Once this is done, your automatic tests make sure there is no regression.

And please, don't think writing those tests is a waste of time. On the contrary,
it _saves_ you so much effort chasing horrible regressions. Here's an example of a [properly
written]({{BASE_PATH}}/content/behat-the-right-way/) Behat test.

```gherkin
@api
  Scenario Outline: Login to site, and check a article content.
    Given I login with user "test"
    When  I visit "<Title>" node of type "article"
    Then  I should see the title "<Title>"
    And   I should see the "description" field "<Description>"
    And   I should see the "tag" field "<Tag>"
    And   I should see "<Number of pictures>" pictures in "images" section


  Examples:
    | Title       |          Description     |      Tag      | Number of pictures |
    | Curabitur   | Nam sed ex vitae arcu    | Education     | 1                  |
    | Quisque     | Praesent maximus a mi si | Science       | 0                  |
    | Lorem ipsum | Aenean sem lectus, porta | Entertainment | 2                  |
```


Of course, don't forget that when the migration is ready, run some final tests
against the site with all the content.

{% include thumbnail.html image_path="assets/images/posts/migration-best-practices/image1.jpg" %}

## Getting the data for testing

Since you will migrate data from SQL tables (thanks to csv2sql), it should be easy
to get data already prepared for tests using MySQL queries in phpMyAdmin.

Here is an example of an SQL query to get data from the sql table which will take
the `_title` and `_description` from each 100th line of the `_raw_article` table.

The sql query selects the fields you want to check in your automatic test from
every 100th line, and adds empty placeholders (i.e. `leftPipe` and `rightPipe`)
that will be converted to pipes in the beginning
and in the end of each line during the export.

```sql
SELECT '' as leftPipe, `_title`,`_description`, '' as rightPipe FROM `_raw_article` WHERE (`_raw_video`.`__id` % 100) = 0;
```

Now you can use phpMyAdmin to export the result table to CSV format. You can download the data as a CSV file or directly copy it:

{% include thumbnail.html  image_path="assets/images/posts/migration-best-practices/image3.jpg"  caption="Export result of the query."  %}

{% include thumbnail.html  image_path="assets/images/posts/migration-best-practices/image4.jpg"  caption="Use custom settings."  %}

{% include thumbnail.html  image_path="assets/images/posts/migration-best-practices/image5.jpg"  caption="Use CSV format, separate columns with pipes."  %}

Here's the output you will get, ready to be added to your Behat test:

```gherkin
  | Ludwig Blum    | The Israeli Ambassador |
  | Julia Lagusker | Julia Lagusker         |
  | Noah Heymann   | Interview the artist   |
```

## Known pitfalls

* Some images may be missing. A [bash script](https://gist.github.com/HelenaEksler/e01a3572afc39f189ecc), for example, can help you identify which.
* The text of content may be polluted with messy HTML. Worse, it may even have broken links. Don't leave it to the end and deal with this early on, as
it can be a tough one.
* If your data should be translated decide in advance what to do if some
translated items are missing.


That's it, I'd love to hear other best practices devs are applying to their migration projects.
