[![Build Status](https://travis-ci.org/Gizra/Gizra.svg?branch=master)](https://travis-ci.org/Gizra/Gizra)

# Gizra
> The gizra.com website

## Install

```bash
gem update --system && gem install scss-lint
bundler install
npm install
bower install
```

## Grunt tasks

Serve locally

``grunt serve``

Serve locally a from the built ``dist`` directory (no livereload)

``grunt serve:dist``

Deploy to gizra.com

``grunt deploy``

## Technical stuff to write posts

* images needs to be in jpg (width will not be higher than 800px).
* Thumb image needs to be 303x285.
* There need to be `<!-- more -->` tag for the teaser.