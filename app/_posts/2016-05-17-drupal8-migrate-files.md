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
being written and new sites are being written. Gizra can't left out side the
party and decide to join in.

We started with a small project, a simple site that will replace a wix static
site. But we needed to migrate node attachments and we just didn't know how.
Reverse engineer have it's limitation and I came to a dead end.

<!-- more -->

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Any example of <a href="https://twitter.com/hashtag/Drupal?src=hash">#Drupal</a> 8 migration of files/ images out there? (including copy from source into public:// )</p>&mdash; Amitai Burstein (@amitaibu) <a href="https://twitter.com/amitaibu/status/718441947325677569">April 8, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Few minutes after the tweet was published I received an email from Amitai
with some help but what I was looking for wasn't there - migrate the node
attachments from a <b>any</b> directory. All the blog posts I found talked on
how to migrate an old Drupal 7 site or in this case hot to [migrate from an external source](https://evolvingweb.ca/blog/bringing-files-along-for-ride-to-d8).

Still, without any results in the near pixels I throw the question to one of
my [colleague‏‏‏‏](https://twitter.com/jsacksick). A frustrated journey was done
with in couple of files and 3 lines of code.

## Files, Files every where
For this blog post I created a dummy module which migrate information about
super heroes. The module [contains some images](https://github.com/RoySegall/comics_migration/tree/master/migration_assets/images)
of super heroes and some small [information](https://github.com/RoySegall/comics_migration/tree/master/migration_assets)
which we want to migrate. If you'll look closely you can see that I
attached an SQL dump with raw tables. This raw table will be the source which
will be migrated to node. [it's a good practice](http://www.gizra.com/content/migration-best-practices/)
that you should have look.

## Basic structure of migration
In Drupal 7 we used to have a lot of the logic compressed into a single file. In
Drupal 8 it's got a tear down into small files and the migrate module isn't
innocent from it as well.

The description on the mapping between the source table to the destined nodes
move into a [configuration yml file](https://github.com/RoySegall/comics_migration/blob/master/config/install/migrate.migration.superheroes.yml).
I'd like to alaborate on the plugins:
Simple mapping - a normal [key and value](https://github.com/RoySegall/comics_migration/blob/master/config/install/migrate.migration.superheroes.yml#L12)
mapping. The idea is to populate the property/field of the entity with a raw
value like a name of content type or a user ID in case we migrate all the nodes
for the admin.
Value plugin - In Drupal 7, when we wanted to prepare the value before
populating the entity fields as we want, we used to change it in
the [prepare method](https://github.com/openscholar/openscholar/blob/SCHOLAR-3.x/openscholar/modules/os/modules/os_migrate_demo/handlers/node/project.inc#L33-L38).
In Drupal 8 we have [process plugins](https://github.com/RoySegall/comics_migration/blob/master/config/install/migrate.migration.superheroes.yml#L20).

In the [transform](https://github.com/RoySegall/comics_migration/blob/master/src/Plugin/migrate/process/FileImport.php#L21) method of the process plugin I can return any value which will eventually populate the
field/property.

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
files from any path into a stream wrapper directory(`public://` or example).
All I need to do is just create a file object in the DB and that's it.

On the other hand we have a function `system_retrieve_file` which will copy file
from any given URL and will create an object for me in the file storage. That
wasn't the case for our need.
