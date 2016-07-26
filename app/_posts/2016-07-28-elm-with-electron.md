---
title: "Elm and Electron - a match made in heaven"
tags:
  - Elm
  - Electron
permalink: "/content/elm-electron-build"
layout: post
author: NirGalon
image: /assets/images/posts/docker-ci/thumb.jpg
published: true
---

{% include setup %}

I work at gizra, so it's only a matter of time until the Elm thing infect me too, and I think it's start to grow on me.

I wanted to start play with it, but to build something new, not the plain old TodoMVC. My idea was to build a YouTube playlist app, so everyone can share their YouTube music links. First thing first, I take the TodoMVC in elm and get it to work on Electron.

[Electron](http://electron.atom.io/) enable you to build cross platform desktop apps with web technologies.

In my mind we should get couple of things out of the box:

 * Automagically download and install elm packages.
 * Compile elm to JS.
 * Watch and auto-reload.
 * Start the electron app.

The only thing I wanted to do is `git clone ..`, `npm install`, and `gulp`.

<!-- more -->

In gizra we achieve what we aim for, and open source it - because why not. So, my project called, wait for it, `YouTube-Playlist` (mind blowing), and it's on [GitHub](https://github.com/nirgn975/YouTube-Playlist).

After you do `git clone git@github.com:nirgn975/YouTube-Playlist.git`, and `npm install`, just run `gulp` and see the magic happen:

{% include thumbnail.html image_path="assets/images/posts/elm-electron-build/gulp-electron.jpg" caption="Gulp install Elm packages automagically and start Electron" %}


After gulp will his magic, a new window will open:

{% include thumbnail.html image_path="assets/images/posts/elm-electron-build/TodoMVC.jpg" caption="Elm code run inside Electron" %}

Tadam! your Elm app run inside Electron, and if you change one of of the files in `./src` directory (`*.html`/`*.css`/`*.elm`) it'll auto-reload.
