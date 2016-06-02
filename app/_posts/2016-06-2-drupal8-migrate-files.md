---
title: "Drupal 8: migrate with attachments easily"
tags:
  - "Drupal 8"
  - "Drupal-planet"
  - "Migration"
permalink: "/content/drupal-8-attachment-migration"
author: RoySegall
layout: post
image: "/assets/images/posts/drupal-8-migrate/tony.png"
published: true
---

{% include setup %}

The Drupal-8-manina is at it's best - modules are being ported, blog posts are
being written and new sites are being coded so we in Gizra decided to join the
party.

We started with a simple site that will replace an existing static site. But we needed
to migrate node attachments and we just didn't find existing solution. Well,
it was time to reach out to the community

<!-- more -->

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Any
example of <a href="https://twitter.com/hashtag/Drupal?src=hash">#Drupal</a> 8
migration of files/ images out there? (including copy from source into public:// )
</p>&mdash; Amitai Burstein (@amitaibu) <a href="https://twitter.com/amitaibu/status/718441947325677569">April 8, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Few minutes after the tweet was published we received a great hint from the fine folks of
[Evoloving Web](https://evolvingweb.ca/). They were already migrating files into Drupal 8
from older Drupal 7, and were kind enough to [blog post](https://evolvingweb.ca/blog/bringing-files-along-for-ride-to-d8) about it.

Still, without any results in the near pixels I asked one of my
[colleague‏‏‏‏](https://twitter.com/jsacksick); A frustrated journey had ended with
in couple of files and 3-6 lines of code.

## Files, Files every where
For this blog post I created a dummy [installation profile](https://github.com/RoySegall/comics_migration)
with a module which contains a module with some information about super heroes.
The module [contains some images](https://github.com/RoySegall/comics_migration/tree/master/web/modules/custom/comics_migration/migration_assets/images)
of the super heroes we going to migrate and some small [information](https://github.com/RoySegall/comics_migration/blob/master/web/modules/custom/comics_migration/migration_assets/heroes.csv).
If you'll look closely you can see that I attached an SQL dump with raw tables.
This raw table will be the source that eventually will migrated into nodes.
[it's a good practice](http://www.gizra.com/content/migration-best-practices/)
that you should have look.

## Basic structure of migration

The description on the mapping between the source table to the destined nodes
move into a [configuration yml file](https://github.com/RoySegall/comics_migration/blob/master/web/modules/custom/comics_migration/config/install/migrate.migration.superheroes.yml).
But i'd like to elaborate on the plugins:

* [default_value](https://github.com/RoySegall/comics_migration/blob/master/web/modules/custom/comics_migration/config/install/migrate.migration.superheroes.yml#L12) -
Will populate the property/field of the entity with a raw value like the name of
a content type or a user ID in case we migrating all the nodes in the name of
user 1.

* Process plugins - In Drupal 7, when we wanted to prepare the value before
populating the entity fields as we want, we changed it in the
[prepare method](https://github.com/openscholar/openscholar/blob/SCHOLAR-3.x/openscholar/modules/os/modules/os_migrate_demo/handlers/node/project.inc#L33-L38).
In Drupal 8 we have [process plugins](https://github.com/RoySegall/comics_migration/blob/master/config/install/migrate.migration.superheroes.yml#L20).

In the [transform](https://github.com/RoySegall/comics_migration/blob/master/web/modules/custom/comics_migration/src/Plugin/migrate/process/FileImport.php#L21)
method of the process plugin I can return any value which will eventually
populate the field/property.

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
files from any path into a stream wrapper directory(`public://` for example).
All I need to do is just create a file object in the DB and that's it.

On the other hand we have a function `system_retrieve_file` which will copy file
from any given URL and will create an object for me in the file storage. That
wasn't the case for what we need.
