--- 
tags: []

title: CTools, Context and Message
permalink: content/ctools-context-and-message
layout: post
created: 1270492688
---
When I decided I'll use CTools for the <a href="http://drupal.org/project/message">Message</a> module, I knew it will save me some time. I mean, everybody knows the "let's re-use the same API" concept. I started copying from Context module the parts that I needed, and added my own logic.

Today, I've decided it is time to add a message UI module. It took me about twenty minutes which ended with the commit message: "Added message UI - A shameless copy/ paste from Context module."

It was much faster than what I thought it would be. So, it's not just about using the same API, it is about using the API the <em>same way</em> as others. And if "others" are yhahn and jmiccolis then I can sleep better at night (or at least when the baby doesn't cry).

I'm also thinking -- which is easier to do than to actually sit down and write a patch -- that it would be neat if CTools exportables plugin would have had also a uniform UI that modules such as Context, Message and others to come, could use. So even on the UI level, there will be no code duplication, and a UX gain as-well.

Now with the spare time at hand, all that is left to do is use the super-secret CTools plugin:
<code>
ctools_include('close-computer-and-go-spend-more-time-with-family');
</code>
