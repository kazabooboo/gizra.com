---
title: "OG and Message Stack in Drupal 8"
keywords: Organic Groups, Drupal 8
tags:
  - Organic groups
  - Message stack
  - "Drupal-planet"
permalink: "/content/og-message-stack-drupal8"
layout: post
image: "/assets/images/posts/og-message-stack-drupal8"/thumb.jpg"
---

{% include setup %}

Hi geeks! Did the post title get you excited? Great, because OG and Message stack are
getting closer to being used. I'd like to give an overview about their state, the amazing
community effort around them, and also share some of my personal thoughts about contribution
and Drupal 8.

<!-- more -->

## Organic Groups

First the heroes: [@RoySegall](https://www.drupal.org/u/RoySegall), [@pfrenssen](https://www.drupal.org/u/pfrenssen) [@damiankloip](https://www.drupal.org/u/damiankloip), [@chx](https://www.drupal.org/u/chx) et all

For years Organic Groups has been one of the proven solutions for multi-sites functionality,
in the form of one code base, one database and one dashboard to rule them all.
After so many years and seeing so many different implementations such as Harvard's OpenScholar, Open Attrium, and many others I'm even more confident OG is doing something right.

Many Of OG7's concepts are being migrated to OG8, but obviously this is also a good time to fix some
old mistakes.

### Group module

In DrupalCon a few people asked for my opinion on the Group module. I'm happy to say that none of them
were surprised that I was very positive about it - which is probably another great case for OpenSource.

 So to repeat the answer I gave back in New Orleans, if Group is working for you,
and satisfy your needs, go ahead and use it. I do have my criticue on some of it's core concepts:

One of the core concepts of Group is that a group isn't a node. It's a `Group` entity. That's fine, also OG
can have any entity as a group, but I'd argue that 90% of the time your group should be a content.
Because groups need to have published/ unpublished. Because groups need to have privacy options, and
even in Drupal 8 with have only `{node_access}` table, not an `{entity_access}`, etc'.

Furthermore, there are quite a few cases where a single group content should be attached to multiple groups. This is where the power of OG kicks in, doing all the heavy lifting of making sure permissions
are being handled correctly. I can assure you this is not a trivial task.

OG alternatives have always been there, and choosing the right tool
for the problem is important. Group is actually solving only a subset of the challenges OG deals with. If it works for you, go ahead and use it. I know you'll be in good hands with it because Group's author is [Kristiaan V.d. Eynde](https://twitter.com/magentix) who is a great person and
a wonderful developer.


## Message stack

First the heroes: @RoySegall, @jhedstrom, @mccrodp et all


## Contribution

## Drupal 8
