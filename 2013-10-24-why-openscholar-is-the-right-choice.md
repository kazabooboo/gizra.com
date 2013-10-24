## Is this Blog post for me?

* Are you running a university site?
* Are you using any kind distribution?

Yes. Continue to the next paragraph.

## What is Harvard's OpenScholar?

[OpenScholar](http://openscholar.harvard.edu/) is Harvard's solution for providing a mini-site for each scholar, professur, and department. It can be a tiny site showing only the very little information, or a big ones like the [Faculty of Arts and Sciences](http://www.fas.harvard.edu/). No coding required.
I won't go over all the features, trust me, there's a lot of costumization that can be done there. What I do want to talk about it, after being approached by several universities, is the subject of deciding if OpenScholar is the right choice for you, based on the _right_ reasons.

## The common (wrong) reasons people decide not to use OpenScholar
Lets talk about the typical flow (with a pinch of humor) of how the decision _not_ to use OpenScholar is being made.

1. Managment and decisions makers are sold pertty fast on OpenScholar - for all the right reasons. It's a system being built for years with many scenarios in mind.
1. Managment asks it's developers to give it a try.
1. Developers are trying to figure out how to bloody install this distribution. They know how to stick their modules into ``sites/all/modules``, but ``bash install.sh`` is completely unknown to them.
1. Ok, developers lost some hair, but they got it somehow installed.
1. Developers realize Panels isn't part of the distribution, and they even found a few lines of the custom code isn't following Drupal's coding standarts.
1. Managment is frequently checking out with the developers on the progress. Their not happy.
1. Devolpers are annoyed. Why won't the managment let them just build it from scrtach. Heck _they_ will use Panels. How hard can it be doing that type of a site.
1. Managment is starting to believe that indeed OpenScholar isn't the right solution.  It's hard to install, or so their developers are saying, and there's a thing called "Panel" or "Panels" or something like that, which is apparently really really missing. Also, the developers are confident they can deliver something else faster.
1. Developers report to managment that after much investigation OpenScholar is not perfect. Admittedly, and don't tell anyone, when it comes to their own code, they follow the "fail fast, fail cheap" and want incremental progress, but when it comes to OpenScholar they prefer to wait until it's perfect (read as never).
1. Managment have board to report to. "We've decided to go with our solution. It will have Panel!"

Right here, is usually where there's an image of [facepalm](http://en.wikipedia.org/wiki/Facepalm). But I prefer to rapdily jump to the next section.

<small>btw, If you have seen this happen, I'd be happy to hear your story in the comments</small>

## The right way of forking and installing OpenScholar

As soon as we'll get OpenScholar into Panthoen you would have a [one-click](https://github.com/openscholar/openscholar/issues/4135) install. I don't expect you to necessarily keep it hosted there, but do take advatnage of it to get a first impression.

The next step, after you gave your managment a taste of the capabilites, is installing it locally, so you can add your custom code.

We're using open source right. So there's probably no reason to make your project private. Click the "Fork" button on OpenScholar's [Github](https://github.com/openscholar/openscholar) page and create your universities _public_ repository
