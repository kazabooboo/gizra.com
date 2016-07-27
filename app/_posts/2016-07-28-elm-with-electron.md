---
title: "Elm - if you can't beat them, join them"
tags:
  - Elm
  - Electron
  - Open Source
permalink: "/content/elm-electron-build"
layout: post
author: NirGalon
image: /assets/images/posts/elm-electron-build/thumb.jpg
published: true
---

{% include setup %}

I work at Gizra, so it was only a matter of time before the Elm thing infected me as well, and I think it's growing on me.

I wanted to build something a little different, not just the plain old TodoMVC. So, I took the TodoMVC in Elm and got it to work in Electron, and called it `Elmctron` (I know, so creative of me).

[Electron](http://electron.atom.io/) enables you to build cross platform desktop apps with web technologies. So we can take all the goodies from elm and use them in our desktop application, and we get cross platform for free!

In my mind we should get couple of things out of the box:

 * Compile SASS to css.
 * Compile elm to JS.
 * Watch and auto-reload.
 * Automagically download and install elm packages.
 * Start the electron app.

Just to make things clear, I build gulp tasks so the only things we should do are `git clone ..`, `npm install`, and `gulp`. And we get all of the above.

<!-- more -->

In Gizra we achieve what we aim for and then open source it, because why not. So, of course, you're more than welcome to fork the [GitHub repo](https://github.com/nirgn975/Elmctron).

After you `git clone`, and `npm install`, just run `gulp` and see the magic happen:

{% include thumbnail.html image_path="assets/images/posts/elm-electron-build/gulp-electron.jpg" caption="Gulp install Elm packages automagically and start Electron" %}

After gulp does its magic, a new window will open:

{% include thumbnail.html image_path="assets/images/posts/elm-electron-build/TodoMVC.jpg" caption="Elm code run inside Electron" %}

Tada! Your Elm app runs inside Electron.

And like I promise: We use SASS, the elm compilation happen automatically, if we change one of the files in `./src` directory (`*.html`/`*.css`/`*.elm`) it'll auto-reload, we haven't installed any elm packages by hand, and the electron app just popup from nowhere.

And to help you guys start develop, I also [open the devtools](https://github.com/nirgn975/Elmctron/blob/master/main-electron.js#L31-L32) when the app fires up.
