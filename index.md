---
layout: page
title:
tagline: <span class="bigger">We build tailored web sites and advanced</span> <br /> <span class="smaller">web applications using Drupal</span>
---
{% include JB/setup %}

<div class="row gallery-row"><!-- Begin Websites Row -->

  <div class="span12">
    <h5 class="title-bg"><a class="primary" href="#work">Work</a><a class="secondary hidden-phone" href="portfolio">See our whole portfolio</a></h5>

    <!-- Website  Thumbnails
    ================================================== -->
    <div class="row clearfix no-margin">

      <ul class="gallery-post-grid holder">

        {% for page in site.pages %}
        {% if page.category contains 'website' %}
        {{ page[0] }}
        {{ page[1] }}
        <li  class="span3 gallery-item" data-id="id-1" data-type="illustration">
              <span class="gallery-hover-4col hidden-phone hidden-tablet">
                <span class="gallery-icons">
                  <a href="{{ page.url }}" class="item-details-link"></a>
                </span>
              </span>
          <a href="{{ page.url }}"><img src="{{ page.url }}/thumb.png"></a>
          <span class="project-details"><a href="{{ page.url }}">{{ page.title }}</a>{{ page.description }}</span>
        </li>
        {% endif %}
        {% endfor %}

      </ul>
    </div>
  </div>

</div><!-- End Websites Row -->

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
