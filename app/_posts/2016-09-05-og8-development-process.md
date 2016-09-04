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

{% include thumbnail.html image_path="assets/images/posts/getting-started-with-a-core-initiative/driesnote.jpg" caption="Driesnote where GraphQL was featured. Picture from <a href='https://www.flickr.com/photos/pepej/21647813349/'>Josef Jerabek</a>" %}

As OG8 is steadily being built I have noticed a certain pattern, or a mindset we've been following which I think it worth sharing.

OG8 is the third time I'm writing OG for Drupal. The first OG7 version was a head jump into the Entity goodness that Drupal 7 along with Entity API brought. The second version was taking a small step back in Entity fiesta, but took two steps a head on the field API.

I think that as a developer I have matured since than. Edge cases are no longer my concern. I mean, I'm making an effort to see that edge cases can be done and the API will cater for it, but I won't go too far and implement them. I think that also in OG7 we didn't try to tackle all the edge cases, but in OG8 it's even less.

In fact, although we have to write a lot of code, as the way we write modules for Drupal 8 has changed considerably, writing OG8 feels like. Well. It feels like I'm deleting files.

<!-- more -->

## Myths Debunked

It's not too rare to hear rents about OG. Often they are not backed by actual data, or even refer to older versions. I was even quite surprised to find out in one of DrupalCon bofs that an "OG alternative" module (that now seems to be without any commit activity for the past year) and that used to bash OG pretty badly, was created by an author that never bothered to check OG 7.x-2.x. They knew OG6 and kind of knew OG 7.x-1.x. No lack of comedy in the Drupal world.

Now, don't get me wrong, there's nothing wrong with alternatives. In fact Message and RESTful modules have grown as alternatives to existing solutions. But they all grew after a deep understanding of all the existing solutions.

So, just for the fun, here are the rents `ORDER BY popularity DESC`:

> OG is complicated.

It is. Just like many other important contrib modules, it does the heavy lifting, so implementing modules won't have to. OG is dealing with access - so no shortcuts can be taken there.

But the concept itself, along with the implementation is quite easy to explain. In fact, in OG8 we've simplified it even more. That is, we've reduced the flexibilty in order to reduce the complexity, but while doing so, made sure edge cases can still hook into the process.

I always find that doing sketches by hand, can convey simple ideas. So, here's OG in free hand:


Seriously, I can't think about a simpler solution that will still allow a flexible group site:

1. The reference between a group content to a group is done by core's Entity reference.
1. The reference between a user and a group is done by the `OgMembership` entity, that can hold apart of the association also meta data (e.g. created time)
1. An `OgMembership` references also an `OgRole`, which is a role that applies inside the group.

> OG adds a lot of overhead
