---
keywords: Drupal
date: 15 May 2016
client: Harvard University
site: openscholar.harvard.edu
tags:
  - POC
  - Structured Data
  - Restful API
layout: case
title: One Database to Rule Them All
subtitle: Massive Multisite Execution with a Single Installation
abstract: Gizra helped Harvard University get thousands of websites under one set of controls, making life easier for the techs in IT, the brand managers in Communications, and the users managing the sites. Oh, and it saved the university millions of dollars.
header_url: /assets/images/cases/openscholar/top.jpg
facts:
  - OpenScholar runs over 7,000 websites at Harvard on a single database
  - It has an estimated value of $7M and was built at a fraction of the cost
  - A comprehensive test suite cut release cycles in half
techs:
  - Drupal 7
  - Organic Groups (OG)
  - Behat
  - AngularJS 
---


{% include setup %}


##The Problem: A Truly Distributed Web Presence
Harvard is not your typical university. But still, they have the same challenges of any academic institution of any large organization with semi-independent units, for that matter. Individual faculty, departments, programs, projects, and initiatives all need a web presence, and the culture of a university is much more likely to permit – even encourage – those entities to “scratch their own itch” in developing their own solutions.

Yet, as web projects become more complicated, and as even smaller units move away from home-grown solutions to more complex content management systems, several factors do not scale:

-  For one, **cost alone is enough of a motivation** to explore a more unified web presence. Bearing small, but significant costs for similar development tasks, sometimes hundreds of times over, can cost a large university in the millions of dollars.
-  More complex CMS sites come with **more inherent security risks**, and while the number of sites (and codebases) grow, the technical knowledge to apply security patches and other updates does not necessarily grow with it.
-  As the **competition for high-caliber students grows more fierce**, web presence plays a crucial role in attracting applicants. Yet as a highly-distributed web presence grows, the ability of communications and marketing team to leverage content strategy and analytics actually shrinks. Hundreds, or even thousands, of individually maintained websites create an unweilding task for brand managers and analytic tracking relies on human gathering of data.
-  Providing a **solid and universal user experience for content editors** across the entire campus allows for a better adoption rate and a more streamlined education and training.


##The Partner and their Idea
What would it look like if Harvard – or any university – could consolidate its web presence under a single system? What if faculty or projects with limited resources and technical capabilities could quickly and easily spin up websites with consistent brand messaging?  Users would be able to create a unified, scalable, and easy to maintain solution that provides benefit to end users by delivering out-of-the-box, sensible defaults for academics.

Harvard knew that this was a  tough hill to climb in terms of rolling out a unified campus-wide system. Getting buy-in from faculty and departments at a fiercely independent intellectual environment like a college or university required an adoption strategy, and the Harvard Web Publishing team was up for that task. Where they needed assistance, however, was in creating a technologically scalable solution to match these ambitious adoption goals.

{% include thumbnail.html image_path="assets/images/cases/openscholar/sample_site.jpg" caption="An example of one of many departmental sites running on Harvard's OpenScholar installation."%}


Like many campuses, the team was familiar with Drupal, and many of the sites that they proposed to replace were built on the Drupal platform. And rightfully so: sticking with the most popular CMS in higher education was certainly a good idea, but looking for way to do a massive multi-site installation of Drupal seemed like a daunting task. To achieve it, Harvard put together an internal development team and requested the help of Gizra, ultimately making us part  of the core team.


##Gizra's Solution

###One Database to Rule them All
Enter [Organic Groups](https://www.drupal.org/project/og) module - Drupal’s *de facto* solution for working groups (both private or public) offering  each group administrator full control over his or her  own group. There are a few ways to do multisite installations in Drupal, but none of them are quite as robust and scalable as using Organic Groups (OG) - the chief benefit of which is that you get full multisite capabilities under a single database. Using OG in this way, however, is pretty complicated, and as the lead developers of the module, Gizra was a natural fit to make it work for thousands of sites across a university.

The resulting [distribution](http://openscholar.gizra.com/) was “pushbutton” website creation for faculty, departments, programs, and projects with sensible defaults and “one database to rule them all.” Easy to update, and simple to report analytics across all sites, OpenScholar has become a model for multi-site installations with application well beyond higher education.

{% include thumbnail.html image_path="assets/images/cases/openscholar/dashboard.jpg" caption="A single database allows Harvard to easily run analytics across all university sites on a single dashboard."%}


###Clear and Transparent Communication - Working on and Within a Team
Originally approached for consulting on a small but stubborn technical matter, the Gizra technical lead and developers quickly fostered a rapport with the team at Harvard that led to ongoing collaboration. This collaboration is a part of, and consistent with, “The Gizra Way” – a set of best practices that governs Gizra’s engagement with partners -  and proposes that truly partnering with your client coupled with clear and transparent communication yield the most successful projects. Harvard senior developer and project lead has this to say about working with Gizra:

>The professionalism and knowledge delivered by the Gizra team have convinced us to keep an ongoing relationship… focusing not just on the output, but also on future maintainability and best practices. Gizra's skilled software developers communicate seamlessly with our staff [and] integrate easily into our team.

###Value through targeted features and best practices
One of the highest value-adds of the Gizra partnership was the addition of a comprehensive test suite for the project, which is one of the largest in existence for a Drupal distribution. A project that had been plagued by long release cycles, had now shortened cycles by more than half and all but eliminated code breakdowns – saving the university time and money.

An additional add-on feature that made the distribution even more valuable in the higher ed ecosystem is [Bibliography module](https://www.drupal.org/project/biblio), which allows faculty to import their publications, display them in a wide variety of academic formats, and propagate them to the academic repositories, such as Google Scholar.

##Where they are now
There are currently more than 7,000 sites built on [OpenScholar at Harvard](http://openscholar.harvard.edu/) – one of the largest cross-campus collaborations in existence at the University. Harvard estimates that their current OpenScholar system has added more than $10 M in value to the university, which far exceeds the original investment made.
