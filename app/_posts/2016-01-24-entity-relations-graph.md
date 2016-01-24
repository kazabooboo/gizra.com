---
title: "Entity Relationships Graph for Drupal 7"
description: "Drupal 7 module that generates an entity relationships graph"
keywords: "drupal"
tags:
  - "Drupal-planet"
permalink: "/content/entity-relationships"
layout: post
published: true
author: bricel
---

{% include setup %}

Many times we are challenged with the maintenance of existing projects that were developed by other agencies, or a new
developer arrives and we need to quickly bring them on board. The complexity of legacy projects can be very high and there
are many aspects that define a Drupal project, contrib module, custom modules, themes and so one.

One way we like to look at a project before diving into the code is through its data structure. The different entities and bundles and their relation tell us a lot about the buisness logic of the site. We assumed that if we could _easily_ generate a graph
with all the bundles, entities, and their relations this complex task would be easier.

After some experience, I believe our assumption was right.

<div class="thumbnail">
  <img src="{{BASE_PATH}}/assets/images/posts/entity-relations/image1.jpg">
</div>

<!-- more -->

Thanks to [Damien
Tournoud's](https://www.drupal.org/u/damien-tournoud) [previous work]((https://www.drupal.org/project/1438582/git-instructions)) getting the graph out wasn't too complicated. His sanbox module already outputed the entities and bundles. It was merly missing the relationships between them. It was also missing the UI to display the graph.

So, standing on the shoulders of giants, we've adapted the code and now have an [Entity Relationships](https://github.com/Gizra/entityrelationships) module.


## Usage

There are two interfaces to get the graph:

### Drush

When using drush we need the [Graphviz](http://www.graphviz.org/doc/info/command.html) command line function to generate the graph,
since the module only generates text file in the [DOT language](https://en.wikipedia.org/wiki/DOT_(graph_description_language)).

`drush entityrelations | dot -Gratio=0.7 -Eminlen=2 -T png -o ./test.png`


### UI

* All the entities at `/admin/entity-relations`
* Only the node's bundles `/admin/entity-relations/node`
* A simplified graph of the node's bundles, with no fields at `/admin/entity-relations/node/false`
