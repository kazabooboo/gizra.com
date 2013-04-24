---
layout: page
title:
tagline: <span class="bigger">We build tailored web sites and advanced</span> <br /> <span class="smaller">web applications using Drupal</span>
---
{% include JB/setup %}

<div class="row gallery-row"><!-- Begin Work Row -->

  <div class="span12">
      <h5 class="title-bg">Work
          <a class="hidden-phone">See our whole portfolio</a>
      </h5>

  <!-- Work Thumbnails
  ================================================== -->
      <div class="row clearfix no-margin">

      <ul class="gallery-post-grid holder">


      {% for page in site.pages %}
        {% if page.category contains 'work' %}
          <li  class="span3 gallery-item" data-id="id-1" data-type="illustration">
            <span class="gallery-hover-4col hidden-phone hidden-tablet">
              <span class="gallery-icons">
                <a href="img/gallery/gallery-img-full.jpg" title="{{ page.title }}" data-rel="prettyPhoto"></a>
                <a href="gallery-single.htm" class="item-details-link"></a>
              </span>
            </span>
            <a href="gallery-single.htm"><img src="img/gallery/gallery-img-1-4col.jpg" alt="Gallery"></a>
            <span class="project-details"><a href="gallery-single.htm">{{ page.title }}</a>{{ page.description }}</span>
          </li>
        {% endif %}
      {% endfor %}

      </ul>
    </div>
  </div>

</div><!-- End Gallery Row -->

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
