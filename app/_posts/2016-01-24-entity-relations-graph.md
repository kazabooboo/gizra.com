---
title: Entity Relationships Graph
description: Drupal 7 module that generates an entity relationships graph
keywords: Drupal
tags:
  - "Drupal-planet"
permalink: "/content/entity-relationships"
layout: post
published: true
image: "/assets/images/posts/entity-relations/image1.jpg"
author: bricel
---


{% include setup %}

We are often challenged with the maintenance of existing projects that were developed by other agencies, or a new developer arrives and we need to quickly bring them on board. The complexity of legacy projects can be very high and the risk of breaking existing logic is something we want to avoid.

One way we like to look at a project before diving into the code is through its data structure. The different entities and their relations can tell us a lot about the business logic of the site and its internal logic. We assumed that if we could _easily_ generate a graph with all the bundles, entities, and their relations this complex task would be easier.

Having done this for a while now, I believe our assumption was right. Taking our open-source [Productivity project](https://github.com/Gizra/productivity#gizra-productivity) (Gizra's internal ERP/Project management system) as an example, it's much easier to look at the following graph and understand that `Work session`, `Time tracking`, `Payment`, and `Github Issue` bundles are pointing at a `Project`, which in turn points to an `Account` bundle. `Github Issue` can also reference itself.

<div class="thumbnail">
  <img src="{{BASE_PATH}}/assets/images/posts/entity-relations/image1.jpg">
</div>

<!-- more -->

Thanks to [Damien Tournoud's](https://www.drupal.org/u/damien-tournoud) [previous work](https://www.drupal.org/project/1438582/git-instructions) getting the graph out wasn't too complicated. His sanbox module already output the entities and bundles. It was merely missing the relationships between them, and a UI to display the graph.

So, standing on the shoulders of giants, we've adapted the code and now have an [Entity Relationships](https://github.com/Gizra/entityrelationships) module.


## Usage

There are two interfaces to get the graph:

### Drush

When using Drush we need the [Graphviz](http://www.graphviz.org/doc/info/command.html) command line library to generate the graph,
since the module only generates text file in the [DOT language](https://en.wikipedia.org/wiki/DOT_(graph_description_language).

Use this from the command line to get an image:  
`drush entityrelations | dot -Gratio=0.7 -Eminlen=2 -T png -o ./test.png`

### UI

Craft your URL according to your needs:

* All the entities at `/admin/entity-relations`
* Only the node's bundles `/admin/entity-relations/node`
* A simplified graph of the node's bundles, with no fields at `/admin/entity-relations/node/false`

Simple, but powerful.
