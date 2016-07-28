---
title: "Elmctron - where Elm and Electron meet"
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

I work at Gizra, so it was only a matter of time before Elm infected me as well, and I think it's growing on me.

I wanted to build something a little different, not just the plain old TodoMVC. So, I harnessed every bit of creativity I had and came up with the most radical idea ever - I took the TodoMVC in Elm and got it to work in Electron, and called it `Elmctron` (I know, so creative of me).

[Electron](http://electron.atom.io/) enables you to build cross platform desktop apps with web technologies. So we can take all the goodies we get with Elm and use them in our desktop application. It's a brand new world!

It was my thought that we should build a couple of gulp tasks to make our life easier - to do the bare minimum because after all, who wants to do more than we he have to? (let's hope my boss will not read this part)

So, with that in mind, the only commands I want to run are `git clone ..`, `npm install`, and `gulp`. The gulp tasks should:

 * Compile SASS to css.
 * Compile Elm to JS.
 * Watch and auto-reload.
 * Automagically download and install elm packages.
 * Start the electron app.

<!-- more -->

Try it for yourself by forking the [GitHub repo](https://github.com/nirgn975/Elmctron). After `npm install`, just run `gulp` and see your Elmctron app:

{% include thumbnail.html image_path="assets/images/posts/elm-electron-build/gulp-electron.jpg" caption="Gulp installs the Elm packages" %}

After gulp does its thing, your desktop app will open:

{% include thumbnail.html image_path="assets/images/posts/elm-electron-build/TodoMVC.jpg" caption="Elm code run inside Electron" %}

Tada! Your Elm app runs inside Electron. And as I promised, all of the above just happens for you.

Also, to help devs start, I've set it up so [the devtools will open](https://github.com/nirgn975/Elmctron/blob/master/main-electron.js#L31-L32) when the app fires up.
