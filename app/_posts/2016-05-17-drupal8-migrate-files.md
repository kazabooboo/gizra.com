---
title: "Drupal 8: migrate with attachments easily"
tags:
  - "Drupal 8"
  - "Drupal-planet"
  - "Migration"
permalink: "/content/drupal-8-attachment-migration"
author: RoySegall
layout: post
image: "/assets/images/posts/apps-entity-restrictions/burner.jpg"
published: true
---


{% include setup %}
The Drupal-8-manina is at it's best - modules are being ported, blog posts are
being written and new sites are being written. Gizra can't left out of the party
and decide to join in.

We started with a small project, a simple site that will replace a wix static
site. But we needed to migrate node attachments and we just didn't know how.
Reverse engineer have it's limitation and I came to a dead end.

<!-- more -->

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Any example of <a href="https://twitter.com/hashtag/Drupal?src=hash">#Drupal</a> 8 migration of files/ images out there? (including copy from source into public:// )</p>&mdash; Amitai Burstein (@amitaibu) <a href="https://twitter.com/amitaibu/status/718441947325677569">April 8, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Couple of minutes after the tweet was tweeted I received an email from Amitai
with some help but what I needed wasn't there - migrate the node attachments
from a module directory. All the blog posts I found talked on how to migrate
an old Drupal 7 site or in this case [migrate from an external source](https://evolvingweb.ca/blog/bringing-files-along-for-ride-to-d8).

Still, without any results in the near pixels I throw the question to one of
my [colleague‏‏‏‏](https://twitter.com/jsacksick). The answer was there and a 
frustrated journey was done with in couple of files and 3 lines of code.

## Files, Files every where
For this blog post I create a dummy module which migrate information about super
heroes. Our module [contains some images](https://github.com/RoySegall/comics_migration/tree/master/migration_assets/images)
of super heroes. The module also [contains CSV info](https://github.com/RoySegall/comics_migration/tree/master/migration_assets)
on the super heroes we want to migrate into our Drupal site. If you look closely
you can see I attached also the SQL dump with the raw tables. [it's a good practice](http://www.gizra.com/content/migration-best-practices/)
you should have look.

## Basic structure of migration
In Drupal 7 we used to have a lot of the logic compressed into a single file. In
Drupal 8 it's got tear down into small files. AWESOME! The migrate module isn't
innocent from it as well.

The description on source info goes to which field got into a [configuration yml file](https://github.com/RoySegall/comics_migration/blob/master/config/install/migrate.migration.superheroes.yml)
and there are two things i'd like you to have a look:
Simple mapping - In case you don't have a weird logic in the way you migrate
the source into the fields you can just specify them as a normal [key and value](https://github.com/RoySegall/comics_migration/blob/master/config/install/migrate.migration.superheroes.yml#L17)
Value plugin - In Drupal 7, when we wanted to prepare the value in the 
source and then populate the entity fields as we want we used to change it in 
the [prepare method](https://github.com/openscholar/openscholar/blob/SCHOLAR-3.x/openscholar/modules/os/modules/os_migrate_demo/handlers/node/project.inc#L33-L38).
In Drupal 8 we have process plugins:

1. [default value](https://github.com/RoySegall/comics_migration/blob/master/config/install/migrate.migration.superheroes.yml#L12) - 
when the value we placed in `default_value` will populated as is.
2. [custom plugins](https://github.com/RoySegall/comics_migration/blob/master/config/install/migrate.migration.superheroes.yml#L20) - 
a method called `transform` in the plugin will be invoke and the value it's
return will populate the field. Any extra proprties in the definition of the 
migration will be passed in the cofingration. In our case source is the property
we migrating from but we can also pass module name, directory etc. etc.

## TL;DR - copy files from directory into the file system

```php
<?php

  $source = drupal_get_path('module', 'comics_migration') . '/migration_assets/images/' . $value;
  if (!$uri = file_unmanaged_copy($source)) {
    return [];
  }
  $file = \Drupal::entityTypeManager()->getStorage('file')->create(['uri' => $uri]);
  $file->save();
  return $file->id();
```

Seem so simple and elegant and this is what it is. `file_unmanaged_copy` copy 
files a path into a stream wrapper directory(`public://` or example). All I need
to do is just create a file object in the DB and that's it.
  