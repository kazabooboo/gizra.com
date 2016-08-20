---
title: "Getting started with a Core Initiative"
tags:
  - "Drupal-planet"
  - JSON API
permalink: "/content/getting-started-with-drupal-core-initiative"
layout: post
image: "/assets/images/posts/getting-started-with-a-core-initiative/thumb.jpg"
author: DavidHernandez
published: true
---

{% include setup %}

{% include thumbnail.html image_path="assets/images/posts/getting-started-with-a-core-initiative/driesnote.jpg" caption="Driesnote where GraphQL was featured. Picture from <a href='https://www.flickr.com/photos/pepej/21647813349/'>Josef Jerabek</a>" %}

After some time contributing to the Drupal project in different ways, I finally decided to step up and get involved in one of the [Core Initiatives](https://www.drupal.org/about/strategic-initiatives). I was on IRC when I saw an announcement about the JSON API / GraphQL initiative weekly meeting and it seemed like a great chance to join. So, this blog post is about how you can get involved in a Core Initiative and more specifically, how can you get involved in the JSON API / GraphQL Initiative.

<!-- more -->

## The JSON API / GraphQL Initiative

This initiative appears as part of a larger one: the API First Initiative. The goal is to fully integrate the [JSON API](http://jsonapi.org/) and the [GraphQL](http://graphql.org/) specifications into Drupal Core. This fits perfectly into the API First Initiative as the of the parent issues is to make the data stored and managed by Drupal available for other software.

What happens if I’m still stuck with Drupal 7? While these initiatives are focused on Drupal 8 and will not have a direct backport to Drupal 7, there are a few solutions done on contrib that implement most of this functionality, [like the RESTful module](https://www.drupal.org/project/restful).

## Why is this initiative important?

All the improvements on web services are a big step forward for Drupal when it is used as a backend for other applications like mobile apps, or for architectures like a Headless Drupal (Drupal used as backend and a totally decoupled frontend done in a different technology). It also helps to better connect with other services or applications, resulting in a more powerful tool.

The initiatives also uses common standards, which will help people who have less knowledge of Drupal to still use its advantages.

Now you know where you want to work so, where should you start?

## Getting info

Before diving into the issue queue or the code, you should know well what is involved in the chosen initiative. The different initiatives usually have a central point where all the related information and issues are gathered. This can be a meta issue or a drupal.org project.

For the API First Core Initiative there is an issue you can [find here](https://www.drupal.org/node/2757967). This gives us a general overview of the whole initiative and where fits within the [JSON API](https://www.drupal.org/project/jsonapi) and [GraphQL](https://www.drupal.org/project/graphql) initiative. In that issue, we can find the links to the specific projects of JSON API and GraphQL. Those pages and their respective issues queues are where the development of the initiatives is being held. You should read them carefully.

Mateu, maintainer of the JSON API project has also prepared a very useful [set of videos](https://www.youtube.com/playlist?list=PLZOQ_ZMpYrZsyO-3IstImK1okrpfAjuMZ) explaining the features of the JSON API module and the different changes that are occurring during the development.

In addition, you can also get the most updated news on the meetings that are happening related to the core initiatives. There is a [public Google Calendar](https://calendar.google.com/calendar/embed?src=happypunch.com_eq0e09s0kvcs7v5scdi8f8cm70%40group.calendar.google.com) with all the meetings. Some initiatives meet weekly, others are every two weeks or even monthly. My first contact with the initiative was in one of these meetings. I wasn’t able to participate a lot, but at the end of the meeting, I could get some helpful hints on where to start, and I had the idea of what could be my first contribution: this post!

I also learned that this initiative hangs out on the [#drupal-wscci IRC channel](https://webchat.freenode.net/?channels=drupal-wscci), where you can ask for help or get the meeting hangout link. Just ping the people involved in the initiative, like Mateu Aguilo ([e0ipso](https://www.drupal.org/u/e0ipso)) from the Json API initiative, Daniel Wehner ([dawehner](https://www.drupal.org/u/dawehner)) and Wim Leers ([WimLeers](https://www.drupal.org/u/wim-leers)) maintainers of the REST module on core or Sebastian Siemssen ([fubhy](https://www.drupal.org/u/fubhy)), from the GraphQL Initiative.

## Next steps

Get used to the code! Download and set up the Drupal 8 environment with the modules from the initiatives. Test them, and play a bit with them to know how they work. Subscribe to some issues to see how the development goes. Talk to the people involved in the initiatives and don’t be afraid to ask them.

And let's start contributing!
