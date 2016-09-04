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

It's not too rare to hear rents about OG. Often they are not backed by actual data, or even refer to older versions. You won't be too surprised to hear there was even a module (now seems to be without any commit activity for the past year) that used to bash OG pretty badly, only to find the author never bothered to check OG 7.x-2.x. They knew OG6 and kind of knew OG 7.x-1.x.   Here they by DESC popularity:

> OG
