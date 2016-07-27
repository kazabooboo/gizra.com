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

I work at Gizra, so it was only a matter of time before the Elm thing infected me as well, and I think it's growing on me.

I wanted to start playing with it, to build something new, not just the plain old TodoMVC. So, the idea was to build a YouTube playlist app, so everyone can share their YouTube music links. First thing first, I took the TodoMVC in Elm and got it to work in Electron.

[Electron](http://electron.atom.io/) enables you to build cross platform desktop apps with web technologies.

In my mind we should get couple of things out of the box:

 * Compile SASS to css.
 * Compile elm to JS.
 * Watch and auto-reload.
 * Automagically download and install elm packages.
 * Start the electron app.

Just to make things clear, the only things I was willing to do were `git clone ..`, `npm install`, and `gulp`.

<!-- more -->

My project is called, wait for it, `YouTube-Playlist` (mind blowing). In Gizra we achieve what we aim for and then open source it, because why not. So, of course, you're more than welcome to fork the [GitHub repo](https://github.com/nirgn975/YouTube-Playlist).

After you `git clone git@github.com:nirgn975/YouTube-Playlist.git`, and `npm install`, just run `gulp` and see the magic happen:

{% include thumbnail.html image_path="assets/images/posts/elm-electron-build/gulp-electron.jpg" caption="Gulp install Elm packages automagically and start Electron" %}


After gulp does its magic, a new window will open:

{% include thumbnail.html image_path="assets/images/posts/elm-electron-build/TodoMVC.jpg" caption="Elm code run inside Electron" %}

Tada! Your Elm app runs inside Electron, and if you change one of the files in `./src` directory (`*.html`/`*.css`/`*.elm`) it'll auto-reload.
