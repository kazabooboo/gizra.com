---
title: "OG8 development mindset"
tags:
  - "Drupal-planet"
permalink: "/content/og8-development-mindset"
layout: post
image: "/assets/images/posts/og8-development-mindset/thumb.jpg"
published: true
---

{% include setup %}

As OG8 is steadily being built I have noticed a certain pattern, or a mindset we've been following which I think is worth sharing.

OG8 is the third time I'm writing OG for Drupal. The first OG7 version was a head jump into the Entity goodness that Drupal 7 along with Entity API brought. The second version was taking a small step back away from the Entity fiesta, but took two steps a forward into the field API.

I think that as a developer I have matured since than. Edge cases are no longer my concern. I mean, I'm making sure that edge cases can be done and the API will cater for it, but I won't go too far and implement them. It's not that in OG7 we tried to tackle all the edge cases, but in OG8 it's even less.

In fact, although we write a lot of new code as part of the porting, as the way we write modules for Drupal 8 has changed considerably, writing OG8 feels like.. Well, it feels like I'm mostly _deleting_ files.

## Myths Debunked





It's not too rare to hear rents about OG. Often they are not backed by actual data, or even refer to older versions.  
<!-- more -->
I was even quite surprised to find out in one of DrupalCon bofs that an "OG alternative" module (that now seems to be without any much activity for the past year) was created by an author that never bothered to check OG 7.x-2.x. They knew OG 6 and kind of knew OG 7.x-1.x, and yet they used to bash OG pretty badly.

Being in that Bof - It was both funny and a little sad at the same time.

Now, don't get me wrong, there's nothing wrong with alternatives. In fact Message and RESTful modules have grown as alternatives to existing solutions, but they all grew after a deep understanding of all the existing solutions.

So, just for the fun, here are the rents ordered by popularity:

> OG is complicated

It is. After all, it's dealing with a complicated problem. Just like many other important contrib modules, it does the heavy lifting, so you and me won't have to when we build our sites. OG is dealing a lot with access - so no easy shortcuts can be taken there.

But the concept itself, along with the implementation is quite easy to explain. In fact, in OG8 we've simplified it even more. That is, we've somewhat reduced the flexibility in order to reduce the complexity, but while doing so, made sure edge cases can still hook into the process.

I always find that doing sketches by hand, can show that ideas are actually easier then what they might seem. Here's all of OG in free hand format:

** Add image **

Seriously, I can't think about a simpler solution that will still allow a robust group site:

1. The reference between a group content to a group is done by core's Entity reference.
1. The reference between a user and a group is done by the `OgMembership` entity, that can hold apart of the association also meta data such as the created time and the state of the membership (active, pending or blocked)
1. An `OgMembership` can also reference an `OgRole`, which is a role that applies inside the group.

> OG adds a lot of overhead

I've used to Blackfire.io to check the performance of a clean Drupal 8 installation with 1000 users and 5000 nodes.

Then I ran the same test on the nodes being also an OG "group" (i.e. OG uses it as the "container" of other "group content").

Profiling was done on an out of the box `Basic page` node view.
When OG was enabled, it was tested with a user that had 15 groups (which is more than the typical use case).

|          | Clean Drupal | Drupal with OG | Difference        |
|----------|--------------|----------------|-------------------|
| Time     | 440 ms       | 468 ms         | +28.3 ms (+6.43%) |
| I/O Wait | 21.1 ms      | 21.1 ms        | +44.2 µs (+0.21%) |
| CPU Time | 419 ms       | 447 ms         | +28.2 ms (+6.74%) |
| Memory   | 36.5 MB      | 39.5 MB        | +2.98 MB (+8.16%) |

The gist of it - OG added merely 28 ms to the request, and 3 MB more in memory. And for the record, we have not started doing optimizations yet!


> Module X is much [ simpler | faster | betterer | awesomer ]

Does that module work for you, and you are happy with it?  
Is it well tested and the maintainer does a good job?

Awesome, stay with that module. OG is just a tool - not a life choice :)

## Correctness

I have a healthy obsession over quality and the idea of "correctness". How can you move forward quickly with your software, but have enough guarantees you are not breaking existing code. Since PHP is lacking a compiler, it leaves us with a few other options.

### Data integrity

Here's one of my favorite images, a Drupal 8 developer sees on a daily basis.

** Add Exception image **

It's an exception throw by code that was not satisfied with the data it got. It's not a notice, appearing in a red box on top of your page, which your brain learned how to ignore. It's a "in your face" error message, that makes sure you stop being lazy, and fix your code.

OG8 is applying this same approach. Are you trying to create an OG permission with illegal value? Sorry, this won't work, and we make sure you know about it. Silent errors are risky and can be easily overlooked and pushed to production.

Are you trying to save an OG membership for an anonymous user? Once again, we will throw an exception. This will make sure you won't have a security issue, where suddenly anonymous users might get too much access on your site.

### Automatic Testing

As good as exceptions are, they are just safe guards. Tests is what will make you and me sleep better at night. But of course, this really depends on the quality and quantity of your tests.

If I would tell you that OG8 has about 50 files, you might refer me to the "OG is complicated" section above and gently imply that it sounds like a lot of files.

But sorry, I lied, as in fact OG8 has currently 120 files. However 50 files out of those are under the `tests` folder.

You see, OG, like any other good module out there has the life above the surface and below the surface. As a site builder or a dev you interact with that part. But the side below, is responsible for asserting we are not breaking the functionality or access. That's the side we, the OG developers interact with locally or on Travis-CI.

As you can imagine, this is very time consuming. In fact, it's not rare that developing the tests can take more time than the actual code. Just Look at this example. The [unsubscribe](https://github.com/Gizra/og/blob/6bc7a861cdc5ded1b77c717a5397af0dabdd6345/src/Controller/SubscriptionController.php#L146-L177) controller, responsible for checking if a user can unsubscribe from a group is about 15 loc (lines of code). The [unit test](https://github.com/Gizra/og/blob/6bc7a861cdc5ded1b77c717a5397af0dabdd6345/tests/src/Unit/SubscriptionControllerTest.php) that covers this method has 230 loc. In fact it's even not the only test that covers this functionality, as there are also a [Functional](https://github.com/Gizra/og/blob/6bc7a861cdc5ded1b77c717a5397af0dabdd6345/tests/src/Functional/GroupSubscribeTest.php) test to assert it.

That's a lot of test! And even though it's time consuming, it actually allows us to move fast and save time on the long run. Because when you have the confidence that the system is well tested, you are not afraid to continuously iterate, rewrite and polish existing work.

## Simplifying and hiding advanced features

One of the mistakes I feel I have done in OG7 was exposing a lot of the advanced functionality in the UI. It's not a terrible mistake (ponder on the amount of complex stuff Views UI allows you to do), but I think that it contributed to feeling people had that things are complex.

This notorius administration page allowed you to add OG related fields to different entities. It also allowed you to add different field instances of the same type, as for example you can have multiple OG audience fields on the same bundle.

{% include thumbnail.html image_path="assets/images/posts/og8-development-mindset/image3.jpg" caption="Don't worry kids, the beast is gone." %}

But these are all advanced use cases. When thinking about how to port them to OG8 I think found the perfect solution - we won't port it. It might sound a bit funny, but I think there are important advantages in doing so:

1. Less code to write and maintain.
1. Less complexity in the system.
1. Lower the barrier for site developers. They will have just a single page to set a bundle as related to OG.

{% include thumbnail.html image_path="assets/images/posts/og8-development-mindset/image4.jpg" caption="Adding any OG related field will be done via a simple UI" %}

Obviously, the more advanced features (such as teh above mentioned multiple OG audience fields) remain in the code, so advanced developers can use them when needed via code:

```php
<?php
// Make an bundle a "group"
\Drupal\og\Og::addGroup('node', 'page');

// Add OG audience field to a "group content"
\Drupal\og\Og::createField(\Drupal\og\OgGroupAudienceHelper::DEFAULT_FIELD, 'node', 'article');
```

Excited? So are we! Come and [join us](https://github.com/Gizra/og), we have low hanging fruits issues you can start with, and you'll find yourself writing features and tests in no time!
