---
title: "Web Components and Polymer"
tags:
  - "Polymer"
  - "Web Components"
  - JavaScript
  - HTML5
permalink: "/content/web-components-and-polymer"
layout: post
author: YaronMiro
published: true
---

{% include setup %}

I saw something amazing and then realized I can't really use it yet.
But I decide to tell you about it anyway, Because in my opinion it's the future!
Let's start and explore the promising future together.

<div class="row">
	<div class="thumbnail col-xs-6">
	  <img  style="height: 200px" class="img-responsive" src="{{BASE_PATH}}/assets/images/posts/polymer-and-web-components/web-components.svg">
	  <div class="caption">Web Components</div>
	</div>

	<div class="thumbnail col-xs-6">
	  <img style="height: 200px" lass="img-responsive" src="{{BASE_PATH}}/assets/images/posts/polymer-and-web-components/polymer.png">
	  <div class="caption">Polymer</div>
	</div>
</div>

<!-- more -->

### What is Web Components and Polymer ?
Web Components are a collection of specifications that enables you to easily implement and consume custom HTML elements and there is also a javaScript library named Web Components. In a nutshell Web Components give you the ability to build an element that encapsulate all of the HTML, CSS and JavaScript. 

Before exploring the future lets start with the past in order to understand where the future is leading us. Back in the early days of web development when building a web page we had a limiting set of elements to use. It was pretty simple and straight forward all You had to do is declare the element and not necessarily write a lot of javaScript code to build a web application for example:  

The HTML element: html```<input/>```

------

* Can be customize using HTML attributes.
* Can be independent or integrate with other element e.g  html```<form>```.
* Trigger events e.g: `onblur`, `onchange`, `onfocus` and more.
* Has a built-in styling (CSS).
* Has properties and methods (API).

------

Web Components provide the tools to achieve that functionality with any desired element and logic.
The bottom line is that if we want to use an existing "custom element" then we don't need to know or understand the element internals we just need to declare the element without the need for fancy javaScript it's all been taken care for us. can it be more elegant then this!


#### Web Components library:
As far as I know only chrome browser (36+) have a full native support for Web Components specifications and other browsers have a partial/none native support. That is the reason we have [Web Components](http://webcomponents.org/) library which provides us with a set of polyfills built on top of the Web Components specifications, Therefore we are able to use these standards today across all modern browsers, It also embraces the "Progressive enhancement" which means that if a native support is available by the browser then the library will not use the polyfill.


#### Polymer library:
[Polymer](https://www.polymer-project.org/1.0/) library main goal is to leverage developers capability when creating custom elements.
It's built on top of the web components standards and it helps you build your own custom elements:

------

* Has an API to interact with the custom element.
* Has a declarative syntax that makes it simpler to define custom elements.
* Has has it's own [components](https://elements.polymer-project.org/) that we can use without using polymer directly.

------

####  * Custom element demo-1 Github repository info (user data interaction):
HTML from with a single text input that can receive a given url for Github API and returns an a simple info block about the target repository.

####  * Custom element demo-2 list data display (attribute data interaction):
custom element that returns a "collection" and display a fancy teaser of each item.

{% include demo_block.html demo='http://yaronmiro.github.io/polymer-example/' code='https://github.com/YaronMiro/polymer-example' %}



