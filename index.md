---
layout: page
title:
tagline: <span class="bigger">We build tailored web sites and advanced</span> <br /> <span class="smaller">web applications using Drupal</span>
---
{% include JB/setup %}

<div class="row gallery-row websites-row"><!-- Begin Websites Row -->

  <div class="span12">
    <h5 class="title-bg"><a class="primary" href="#work">Work</a><a class="secondary hidden-phone" href="/portfolio">See our whole portfolio</a></h5>

    <!-- Website  Thumbnails
    ================================================== -->
    <div class="row clearfix no-margin">

      <ul class="gallery-post-grid holder">

        {% for page in site.pages %}
        {% if page.category contains 'website' %}
        <li  class="span3 gallery-item">
          <a href="{{ page.url }}"><img src="{{ page.url }}/thumb.png"></a>
          <span class="project-details"><a href="{{ page.url }}">{{ page.title }}</a>{{ page.description }}</span>
        </li>
        {% endif %}
        {% endfor %}

      </ul>
    </div>
  </div>

</div><!-- End Websites Row -->

<div class="row gallery-row contributions-row"><!-- Begin Contributions Row -->

  <div class="span12">
    <h5 class="title-bg"><a class="primary" href="#contributions">Contributions</a></h5>
    <div class="secondary hidden-phone"><a href="/contributions">Modules and other stuff we contribute, that make Drupal awesome</a></div>

    <!-- Contributions  Thumbnails
    ================================================== -->
    <div class="row clearfix no-margin">

      <ul class="gallery-post-grid holder">

        {% assign count = 0 %}
        {% for page in site.pages %}
        {% if page.category contains 'contribution' and count <= 4 %}

        {% assign count=count | plus:1 %}

        <li  class="span3 gallery-item" data-id="{{ count }}">
          <div class="short-name-wrapper">
            <div class="short-name"><a href="{{ page.url }}">{{ page.short }}</a></div>
          </div>
          <span class="project-details"><a href="{{ page.url }}">{{ page.title }}</a>{{ page.description }}</span>
        </li>
        {% endif %}
        {% endfor %}

      </ul>
    </div>
  </div>

</div><!-- End Contributions Row -->

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
