---
title: "OG and Message Stack in Drupal 8"
keywords: Organic Groups, Drupal 8
tags:
  - Organic groups
  - Message stack
  - "Drupal-planet"
permalink: "/content/og-message-stack-drupal8"
layout: post
image: "/assets/images/posts/og-message-stack-drupal8/thumb.jpg"
---

{% include setup %}

Hi geeks! Did the post title get you excited? Great, because OG and Message stack are
getting closer to being Drupal 8 ready.  
I'd like to give an overview about their state, the amazing
community effort around them, and also share some of my personal thoughts about contribution
in Drupal 8 area.

<!-- more -->

## Organic Groups

The heroes: [@RoySegall](https://www.drupal.org/u/RoySegall), [@pfrenssen](https://www.drupal.org/u/pfrenssen) [@damiankloip](https://www.drupal.org/u/damiankloip), [@chx](https://www.drupal.org/u/chx) et all

For years Organic Groups has been one of the proven solutions for multi-sites functionality,
in the form of one code base, one database and one dashboard to rule them all.
After so many years and seeing so many different implementations such as Harvard's OpenScholar, OpenAttrium, and many others I'm even more confident OG is doing many things right.

Most of OG7's concepts are being migrated to OG8, but obviously this is also a good time to fix some
old mistakes. One of the mistakes was treating users and content (i.e. non-user entities) a like. But, well, you know - they are not. Because when we came to re-think of it, membership really makes sense for users. For example, if the membership state is `active`, `pending` or `blocked` should indeed be applied only to users. So we've changed it:

* A reference between a group content and a group is done via an entity reference field with a default storage. The link between them is simply registered as a row in the DB.
* A reference between a user and a group is also done via an entity reference field, however the field storage is custom. It's the `OgMembership` entity you know from OG7.

Having this conceptual shift trickles down to the code, and cleans it up quite a bit. To be sure we are not
breaking anything, we're adding tests. Lots of tests, with a nice mix of unit test and kernel tests. Hack, we even check extreme cases like arbitrary yet work-life balanced [permissions](https://github.com/amitaibu/og/blob/c2bf4de582105e8c71f52d48c423c98d18fe75bf/tests/src/Unit/PermissionEventTest.php#L389-L390) :)

If you want to jump in and help, development is happening on a temporary [GitHub repo](https://github.com/amitaibu/og).

### Group module

In DrupalCon a few people asked for my opinion on the [Group](https://www.drupal.org/project/group) module. I'm happy to say that none of them
were surprised that I was very positive about it - which is probably another great case for open source.

So to repeat the answer I gave back in New Orleans, if Group is working for you,
and satisfy your needs, go ahead and use it. For completeness here's my critique on some of it's core concepts:

One of the core concepts of Group is that a group isn't a node. It's a `Group` entity. That's fine, also OG
can have any entity as a group, but I'd argue that 90% of the time your group should be a content.
Because more often than not groups need to have published/ unpublished. Or because groups need to have privacy options, and
even in Drupal 8 with have only `{node_access}` table, not an `{entity_access}`'.

Entity reference field is used to maintain the relation between group content to group. For some reason in Group it's being stated as a negative aspect, but I still stand behind it. If you know the full power that is behind Core's entity reference and its selection handlers, you'll realize that by using this field it opens up a lot of possibilities for fine grained control.

Furthermore, there are quite a few cases where a single group content should be attached to multiple groups. This is where the power of OG kicks in, doing all the heavy lifting of making sure permissions
are being handled correctly. I can assure you this is not a trivial task.

OG alternatives have always been there, and choosing the right tool
for the problem is important. Group is actually solving only a subset of the challenges OG deals with. If it works for you, go ahead and use it. I know you'll be in good hands with it because Group's author is [@kristiaanvandeneynde](https://www.drupal.org/u/kristiaanvandeneynde) who is a great person and
a wonderful developer.


## Message stack

The heroes: [@RoySegall](https://www.drupal.org/u/RoySegall), [@jhedstrom](https://www.drupal.org/u/jhedstrom), [@mccrodp](https://www.drupal.org/u/mccrodp) et all

The message stack is mostly ported to D8 and it has already reached a good place. I'm still not cutting an alpha release, because it still requires polishing and might have a few data structure changes.

There are no big differences here in terms of concepts, although worth mentioning [@bojanz's](https://www.drupal.org/u/bojanz) suggestion to rename `message type` to `message template`.
Suddenly it makes it much clearer what the intention of `message template` is.

If you would like to contribute you are most welcome to the repos: [Message](https://github.com/Gizra/message), [Message notify](https://github.com/Gizra/message_notify) and [Message subscribe](https://github.com/Gizra/message_subscribe)

## On Contribution and Drupal 8

New major releases can always be hard, as you are expected to port all your modules. At once.  
It's a process that takes a lot of time, and skills and I'm grateful for having such great community members helping with it.

I'd like to reach out to some community members I was talking with in DrupalCon which told me they felt
bad as they were not porting their modules "fast enough". Don't feel bad about it! Feeling bad is one
of the main causes for burn outs.

Take your time. Do it out of passion, and reach out to the community to help you. It's your module, but if it's used by other, they can and should help you.

In my case, for example, OG7 was written (and re-written) in the days I had one kid and Gizra had about seven employees and a single office. Now days I have three kids, Gizra has over twenty employees sitting in both the Israeli and US office.  
And do you know how I feel about my (Drupal) contribution rate? (Most days) I feel marvelous about it. Because I do it on my own terms or work time, I'm not burned out, and I still love what I do.
