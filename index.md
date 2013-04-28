---
layout: page
title:
tagline: <span class="bigger">We build tailored web sites and advanced</span> <br /> <span class="smaller">web applications using Drupal</span>
quotes:
  - quote: "Winter is coming"
    by: "Jon Snow"
  - quote: "Gizra inspired me to keep up with PHP"
    by: "Rasmus Lerdorf"
  - quote: "They are great"
    by: "Bill Gates"
clients:
  - name: whitehouse
    alt: "The whitehouse uses Organic groups for it's forum"
  - name: medico
    alt: "Site built by Gizra"

---
{% include JB/setup %}

<div class="row gallery-row websites-row"><!-- Begin Websites Row -->

  <div class="span12">
    <h2 class="title-bg"><a class="primary" href="#work">work</a><a class="secondary hidden-phone" href="/portfolio">See our whole portfolio</a></h2>

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
    <h2 class="title-bg"><a class="primary" href="#contributions">contributions</a></h2>
    <div class="secondary-title hidden-phone">Modules and other stuff we contribute, that make Drupal awesome</div>

    <!-- Contributions  Thumbnails
    ================================================== -->
    <div class="row clearfix no-margin">

      <ul class="gallery-post-grid holder">

        {% assign count = 0 %}
        {% for page in site.pages %}
        {% if page.category contains 'contribution' and count <= 4 %}

        {% assign count=count | plus:1 %}

        <li  class="span3 gallery-item">
          <div class="short-name-wrapper box-{{ count }}">
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

<div class="row gallery-row info-row"><!-- Begin Info Row -->

  <div class="span12">
    <h2 class="title-bg"><a class="primary" href="#info">info</a></h2>
    <div class="secondary-title hidden-phone">A little about us</div>

    <!-- People  Thumbnails
    ================================================== -->
    <div class="row clearfix no-margin">
      <div class="span4">

        <h3>About</h3>
        We build tailored web sites and advanced web applications using Drupal CMS, Drupal is one of the most successful open source content management system.
        We are not the only one using Drupal, but the difference is that we do it the right way.
        Drupal is also free and therefore reduces the cost of any new web site.
        Since the beginning of 2011 we are working only with Drupal 7, being early bird with this new version of Drupal has forced us to fix many of the alpha and beta version modules, submitting dozens of fixes (patches) back to the community, today we are considered by many as Drupal 7 experts with experience with a wide range of technology
      </div>
      <div class="span4">
        <h3>Whois</h3>
        {% for author in site.authors %}
        <div class="person clearfix">
          <div class="image-wrapper">
            <img src="/assets/images/team/{{ author[0] }}.png" />
          </div>
          <div class="text-wrapper">
            <span class="name">{{ author[1].name }}</span> <span class="nickname">({{ author[0] }})</span>
            <div class="title">{{ author[1].title }}</div>
            <div class="bio">{{ author[1].bio }}</div>
          </div>

        </div>
        {% endfor %}
      </div>

      <div class="span4 quotes">
        <h3>Fictious CLient Quotes</h3>
        <div class="flexslider">
          <ul class="slides">
            {% for quote in page.quotes %}
            <li>
              <div class="quote">{{ quote.quote }}</div>
              <div class="source">{{ quote.by }}<div class="triangle"></div></div>
            </li>
            {% endfor %}
          </ul>
        </div>
      </div>
    </div>
  </div>

</div><!-- End Info Row -->

<div class="row gallery-row info-row"><!-- Begin Clients Row -->

  <div class="span12">
    <h2 class="title-bg"><a class="primary" href="#clients">clients</a></h2>
    <div class="secondary-title hidden-phone">clients and organizations using our Drupal code</div>

    <!-- Clients Thumbnails
    ================================================== -->
    <div class="row clearfix no-margin">
      <ul class="gallery-post-grid holder">

        {% for client in page.clients %}
        <li  class="span2 gallery-item">
          <img src="/assets/images/clients/{{ client.name}}.png" title="{{ client.alt }}" />
        </li>
        {% endfor %}

      </ul>
    </div>
  </div>

</div><!-- End Clients Row -->

<div class="row gallery-row blog-row"><!-- Begin Blog Row -->
  <div class="span12">
    <h2 class="title-bg"><a class="primary" href="#blog">blog</a><a class="secondary hidden-phone" href="/blog">See previous posts</a></h2>

    <!-- Blog teasers
    ================================================== -->
    <div class="row clearfix no-margin list-wrapper">
      {% for post in site.posts limit:4 %}
      <div class="span12">
        <div class="date">{{ post.date | date_to_string }}</div>
      </div>
      <div class="span4">
        <a  class="title" href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a>
      </div>

      <div class="span8 teaser">
        {% if post.teaser %}
          {{ post.teaser }}
        {% else %}
          {{ post.content | strip_html | truncatewords: 25 }}
        {% endif %}
      </div>
      {% endfor %}
    </div>
    <a class="secondary hidden-phone" href="/blog">See previous posts</a>
  </div>
</div><!-- End Blog Row -->
