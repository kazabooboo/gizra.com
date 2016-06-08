---
title: "Drupal 8: migrate nodes with attachments easily"
tags:
  - "Drupal 8"
  - "Drupal-planet"
  - "Migration"
permalink: "/content/drupal-8-attachment-migration"
author: RoySegall
layout: post
image: "/assets/images/posts/drupal-8-migrate/thumb.jpg"
published: true
---

{% include setup %}

The Drupal-8-manina is at it's best - modules are being ported, blog posts are
being written and new sites are being coded so we in Gizra decided to join the
party.

We started with a simple site that will replace an existing static site. But we needed
to migrate node attachments and we just didn't find an existing solution. Well,
it was time to reach out to the community

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Any
example of <a href="https://twitter.com/hashtag/Drupal?src=hash">#Drupal</a> 8
migration of files/ images out there? (including copy from source into public:// )
</p>&mdash; Amitai Burstein (@amitaibu) <a href="https://twitter.com/amitaibu/status/718441947325677569">April 8, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Few minutes after the tweet was published we received a great hint from the fine folks of
[Evoloving Web](https://evolvingweb.ca/). They were already migrating files into Drupal 8
from older Drupal 7, and were kind enough to [blog post](https://evolvingweb.ca/blog/bringing-files-along-for-ride-to-d8) about it.

However, we were still missing another piece of the puzzle, as we wanted to migrate
files from an outside directory, directly into Drupal. I gave my good friend [@jsacksick](https://twitter.com/jsacksick) a poke (it's easy, as he sits right in front of me), and he gave me the answer on a silver platter.

{% include thumbnail.html  image_path="assets/images/posts/drupal-8-migrate/image1.jpg" caption="Post has a happy end - we were able to migrate files and attach to a node!" %}

<!-- more -->

## An example for super heroes

For this blog post I created a dummy Drupal 8 [installation profile](https://github.com/RoySegall/comics_migration) with way too much information about super heroes.
The migration module can migrate [some images](https://github.com/RoySegall/comics_migration/tree/master/web/modules/custom/comics_migration/migration_assets/images) along with some [CSV data](https://github.com/RoySegall/comics_migration/blob/master/web/modules/custom/comics_migration/migration_assets/heroes.csv) about them.

If you'll look closely you can see that I've attached an SQL dump with raw tables.
This raw table will be the source that eventually will migrated into nodes, and you can
read [here](http://www.gizra.com/content/migration-best-practices/) how it was created
with [csv2sql](https://www.drupal.org/project/csv2sql).

## Basic structure of migration

The description of the mapping between the source table and the destination node type
is in a [yaml file](https://github.com/RoySegall/comics_migration/blob/master/web/modules/custom/comics_migration/config/install/migrate.migration.superheroes.yml).

Let's go over the interesting parts of the `process`:

```yaml
process:
  type:
    plugin: default_value
    default_value: super_heroes
  uid:
    plugin: default_value
    default_value: 1
  title: _title
  field_image:
    source: _image
    plugin: file_import
  field_alter_ego: _alter_ego
  'body/value': _description
```

In Drupal 7, as we wanted to prepare the value before
populating the entity fields, we've changed it in a
[prepare method](https://github.com/openscholar/openscholar/blob/SCHOLAR-3.x/openscholar/modules/os/modules/os_migrate_demo/handlers/node/project.inc#L33-L38).
In Drupal 8 we have [process plugins](https://github.com/RoySegall/comics_migration/blob/master/web/modules/custom/comics_migration/src/Plugin/migrate/process/FileImport.php).

For example, the `default_value` plugin will populate the (configurable) field of the entity with a raw value like the name of
a content type or a user ID in case we are migrating all the nodes with the same author (e.g. user ID 1).

But we can of course have our own logic. In the [transform](https://github.com/RoySegall/comics_migration/blob/master/web/modules/custom/comics_migration/src/Plugin/migrate/process/FileImport.php#L21)
method of the process plugin we can massage our data, return any value which will eventually
populate the field.

In our case, the `transform` method is responsible for adding the new file into Drupal using `file_unmanaged_copy` and friends.

## Conclusion

Some of the know hows and best practices are still missing from Drupal 8. But they
can and should be re-learned and re-published. So remember kids, if you ever feel
frustrated about not finding a solution, always
reach out to smart community members and then write a post about it, so everybody could profit.
