---
title: "Elm - if you can't beat them, join them"
tags:
  - Elm
  - Electron
permalink: "/content/elm-electron-build"
layout: post
author: NirGalon
image: /assets/images/posts/elm-electron-build/thumb.jpg
published: true
---

{% include setup %}

I work at gizra, so it's only a matter of time until the Elm thing infect me too, and I think it's start to grow on me.

I wanted to start play with it, but to build something new, not the plain old TodoMVC. My idea was to build a YouTube playlist app, so everyone can share their YouTube music links. First thing first, I took the TodoMVC in elm and get it to work on Electron.

[Electron](http://electron.atom.io/) enable you to build cross platform desktop apps with web technologies.

In my mind we should get couple of things out of the box:

 * Compile SASS to css.
 * Compile elm to JS.
 * Watch and auto-reload.
 * Automagically download and install elm packages.
 * Start the electron app.

Just to make things clear, the only things I was willing to do are `git clone ..`, `npm install`, and `gulp`.

<!-- more -->

My project called, wait for it, `YouTube-Playlist` (mind blowing), and in gizra we achieve what we aim for and then open source it (because why not). So, of course you're more then welcome to fork the [GitHub repo](https://github.com/nirgn975/YouTube-Playlist).

After you do `git clone git@github.com:nirgn975/YouTube-Playlist.git`, and `npm install`, just run `gulp` and see the magic happens:

{% include thumbnail.html image_path="assets/images/posts/elm-electron-build/gulp-electron.jpg" caption="Gulp install Elm packages automagically and start Electron" %}


After gulp will do his magic, a new window will open:

{% include thumbnail.html image_path="assets/images/posts/elm-electron-build/TodoMVC.jpg" caption="Elm code run inside Electron" %}

Tadam! your Elm app run inside Electron, and if you change one of of the files in `./src` directory (`*.html`/`*.css`/`*.elm`) it'll auto-reload.
