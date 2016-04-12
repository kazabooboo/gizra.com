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
Reverse ingeener have it's limitation and we came to a dead end.
<!-- more -->

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Any example of <a href="https://twitter.com/hashtag/Drupal?src=hash">#Drupal</a> 8 migration of files/ images out there? (including copy from source into public:// )</p>&mdash; Amitai Burstein (@amitaibu) <a href="https://twitter.com/amitaibu/status/718441947325677569">April 8, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Couple of minutes after the tweet was tweeted I receive an email from Amitai
with some help but what i needed wasn't there - migrate the node attachments
from a module directory. Most of the examples contain migration of an old D7 site.

Let's have a look on the csv structure:

Node tile   |  image      |  File
------------|-------------|---------------------
Node 1      |  node1.jpg  |  
Node 2      |  node2.jpg  | example.pdf
