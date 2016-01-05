---
title: "Entity Relationships Graph for Drupal 7"
description: "Drupal 7 module that generates an entity relationships graph"
keywords: "drupal"
tags:
  - "Drupal Modules"
  - "Drupal-planet"
permalink: "/content/entity-relationships"
layout: post
published: true
author: bricel
---

{% include setup %}

Many times we are challenges with the maintenance of existing projects that were developed by other agencies, or a new
developer arrives and we need to quickly bring him on board, the complexity of legacy projects can be very high and there
are many aspects that define a Drupal project, contrib module, custom modules, themes and so one. One way we like to look at a project before diving into the code is through the different entities and bundles, so I figures if we could generates a graph
with all the bundles, entities, and relations, this would be very helpfull.

<!-- more -->

After some research I found a nice [sandbox module](https://www.drupal.org/project/1438582/git-instructions) thanks to [Damien
Tournoud](https://www.drupal.org/u/damien-tournoud), that was doing something in that direction, but was missing the relationships defined by the entity reference module, and didn't have a web UI to display the graph.
So I took the main concept an rewrote the module, you can find the code on [GitHub](https://github.com/Gizra/entityrelationships)


## Getting started
Download the module and place it in you sites/all/modules directory, then enable it.


## Usage
There are two interfaces to get the graph:
### Drush
When using drush we need the [Graphviz](http://www.graphviz.org/doc/info/command.html) command line function to generate the graph,
since the module only generates text file in the [DOT language](https://en.wikipedia.org/wiki/DOT_(graph_description_language)).

```gherkin
drush entityrelations | dot -Gratio=0.7 -Eminlen=2 -T png -o ./test.png
```


### UI
Just go the the url

```gherkin
http://yoursite.com/admin/entity-relations/<type>/<display_fields>
```

You can see all the entities at

```gherkin
http://yoursite.com/admin/entity-relations
```
or just the node bundles

```gherkin
http://yoursite.com/admin/entity-relations/node/
```
or a simplified graph with no fields at

```gherkin
http://yoursite.com/admin/entity-relations/node/false
```


## Examples
Simplified node graph
<img class="img-responsive" src="https://cloud.githubusercontent.com/assets/165644/12092755/ad4bb60e-b307-11e5-904f-a75ee8db7b5c.png">
Full Entity display
<img class="img-responsive" src="https://cloud.githubusercontent.com/assets/165644/12109821/67872310-b38e-11e5-8334-464cb2eb7e1a.png">
