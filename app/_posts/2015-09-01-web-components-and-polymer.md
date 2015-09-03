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

I have seen the future and I'm so enthusiastic tell you about it. This is not a line from some science fiction movie and for those who wander if I have some sort of time-machine then the answer is no. I have [Web Components](http://webcomponents.org/) & [Polymer](https://www.polymer-project.org/1.0/).

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

### What are Web Components and Polymer ?
Web Components are a collection of specifications that aren't yet been standardize by [W3C](http://www.w3.org/Consortium/facts.html) these specifications enables us to implement and consume custom HTML elements. Custom element has the ability encapsulate all of the HTML, CSS & JavaScript. There is also a javaScript library named Web Components that give us the ability to use it across modern browsers today (no need to wait for them to be standardize before we can use them).

Before exploring the future lets start with the past in order to understand where the future is leading us. Back in the early days of web development when building a web page we had a limiting set of elements to use. It was pretty simple and straight forward. All You had to do is declare the element and not necessarily write a lot of javaScript code to build a web application for example:  

The HTML element: `<input/>`

------

* Can be customize using HTML attributes.
* Can be independent or integrate with other element e.g `<form>`.
* Trigger events such as e.g: "onblur", "onchange", "onfocus".
* Has a built-in styling (CSS).
* Has properties and methods (API).

------

> Web Components & Polymer provide the tools to achieve that functionality with any desired element whether it's a custom or an existing element (standardize by W3C e.g `<input/>`) that we want to extend it's capabilities. The bottom line is that if we want to use such an element then we don't need to know or understand his internals we just need to declare it! like in the good old days when **the power was in the declaration** without the need for writing our own fancy javaScript to make it work.   
Can it be more elegant then this!


#### Web Components javaScript library:
As far as I know only chrome browser (36+) have a full native support for Web Components specifications and other browsers have a partial/none native support. That is the reason we have this library which ads a sugar on top of those specifications and provides us with a set of polyfills, Therefore we are able to use those specifications today across modern browsers, It also embraces the "Progressive enhancement" which means that if a native support is available by the browser then the library will not use the polyfill.

#### Polymer library:
This library is officially at production this mean that you can start using it.
The main goal behind it is to leverage developers capability when creating custom elements or extending an existing element.
It's also adds sugar on top of the web components specifications by adding:

------

* API to interact with the custom element.
* Declarative syntax that makes it simpler to define custom elements.
* Provide an impressive [components catalog](https://elements.polymer-project.org) that we can use without using polymer directly.

------

**On this post I will build the following Polymer elements:**


* Demo 1 Github repository info:    
  User provides a repository url and will be presented with an info about the repository.

------

* Demo 2 movies list form a JSON object:   
  displays each movie from the "collection" as a fancy teaser.

------

* Demo 3 Login form block:   
  Login form that sends the credentials to be authenticated by a server that returns a response.


 * Success response:   
   Fetch the user "token" and save it to the browser localStorage.

 ------

 * Failure response:   
   Display an informative message about the error.


 </br>
{% include demo_block.html demo='http://yaronmiro.github.io/polymer-example/' code='https://github.com/YaronMiro/polymer-example' %}



