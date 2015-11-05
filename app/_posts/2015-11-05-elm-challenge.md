---
title: Elm Challenge
tags: 
  - Elm
permalink: "/content/elm-challenge"
layout: post
published: true
---


{% include setup %}

As part of our adoption of [Elm in production](http://www.gizra.com/content/thinking-choosing-elm/), Gizra devs are learning and practicing their Elm skills.

After they are done going over the existing videos/tutorials, we let them get their hands dirty. [elm-hedley](https://github.com/Gizra/elm-hedley) was created just for that - to simulate a simple yet typical web app with login, RESTful, etc.

Here's the [existing app](https://gizra.github.io/elm-hedley). As you see each event appears as a clickable link.

The challenge is to add a counter next to each event label that increments clicked. When you refresh the page (F5) it shouldn't remember the previous clicks and should start back at 0.

In short, it should look like this (notice the bottom left list):

<iframe src="http://gfycat.com/ifr/MellowUnpleasantBoar" frameborder="0" scrolling="no" width="653" height="390" style="-webkit-backface-visibility: hidden;-webkit-transform: scale(1);" ></iframe>

Go ahead, fork the repo and try for yourself. And don't peek below, as it has the answer!

.  
.  
.  
.  
.  

<!-- more -->

Ok, if you reached this part it means you are looking for the answer... So, here's the guided video which beginners might appreciate, as it explains not only the code but also the _approach_ to solving the task. And here's the final [code](https://github.com/Gizra/elm-hedley/compare/420f0ca...linkCounter).

<iframe width="480" height="360" src="https://www.youtube.com/embed/GVuZ1ojK7ls?rel=0" frameborder="0" allowfullscreen></iframe>
