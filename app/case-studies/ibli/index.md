---
keywords: Drupal
tags:
  - POC
  - Structured Data
  - Restful API
layout: case
title: IBLI
---


{% include setup %}

##The Problem
___________

Farmers in arid or semi-arid areas of Africa face unmitigated environmental risk. The lack of rain in any given season - and the resulting high livestock mortality - is an existential crisis against which pastoral farmers traditionally have had no protection. Environmental fate, which is commonly protected against by insurance products in other areas of the developed world, was not readily available to farmers in Kenya (where IBLI proposed to work) due to limited resources and a lacking technological infrastructure to conduct transactions and deliver products.

Embed video: https://youtu.be/1-w7iht20nw?list=PLCLZXIdq9v2RBlzJtuIR4CqRPvDVcaGBX

##The Partner and Their Idea:
___________________________

The International Livestock Research Institute (ILRI - www.ilri.org) is an organization dedicated to improving food security and to reducing poverty in developing countries through research for efficient, safe and sustainable use of livestock. In 2010, they launched the IBLI (Insurance Based Livestock Insurance) project began to question the logic of the status quo of insurance access to pastoral farmers in Kenya.

They knew these things:

*   The enormous set of satellite-captured data on weather patterns and vegetation conditions needed to accurately assess livestock losses was readily available, as was the algorithms that insurance companies used to crunch that data.
*   While broadband internet is limited in Sub Saharan Africa, wireless mobile technology is ubiquitous, and literally in the hands of many pastoral farmers.

From there, they made the following assumptions that they proposed to test: 

*   If provided the data and access to the customer base, insurance companies would jump at the chance to provide affordable insurance to pastoral farmers in Africa.
*   Farmers, if given the opportunity would pay the cost to mitigate their environmental risk, and be in better position to grow their family business year over year.

ILRI needed to create a proof of concept application that demonstrated both the ability to work with a large, highly abstracted set of data to produce an accurate cost of product, and a mechanism to deliver the product directly to the consumer.

##Gizra’s Solution 
__________________

###Large sets of data, decoupled systems, and existing technologies
Gizra had long been interested in the idea of decoupling the back-end logic from front-end presentation in web projects  - an idea they have championed in the Drupal community with projects such as the Restful module. The opportunity to work with a large data set and existing algorithms provided the perfect opportunity to use this approach, allowing Drupal to be the engine that both gathered and fed the presentation of data.

This logic leveraged another Gizra passion  to find available tools within the existing technological world to make a project work. IBLI didn’t have the time or the resources to reinvent the wheel, and they chose Gizra precisely because of their aptitude with a wide range of technologies. For this project, and because of the decoupled approach, Gizra was able to use AngularJS for the map presentation layer [would be good to have an image of this] in place of Drupal’s normal rendering system.

###Lean Demonstration of an Idea
ILRI had a massive task to provide the research in order to draw insurance companies into the market, and to inform a consumer base with no cultural familiarity with insurance. They sought a technology partner who could both understand the need and provide a process that got them to the right solution in the time and budget they required.

Gizra exercises a well-curated set of best practices that forms the basis for what we call The Gizra Way. One tenet of this set of principles is that  most IT projects fail because they either don’t fall within budget, exceed the given timeline, or don’t make the end users happy. We guard against this assumption by frontloading the time/budget estimation (discovery) process with “timeboxed” features so that the client can literally by the features they need, and reserve the features they don’t.

Through this method, ILRI was able to focus on the things that they were good at  providing high-level research and working with local farmers to adopt to change. Gizra was able to work on the technological mechanism to help make that change.

Where they are today
____________________

ILRI successfully launched the IBLI project and now seeks to expand it beyond Kenya into Ethiopia and other regions in Africa. Already the project is seeing results beyond the initial goals of providing stability in the face of drought. With new economic confidence, farmers are able to, and more willing to, access credit in order to expand their operations and grow their business. The IBLI Team has most recently partnered with the World Bank Group and the Government of Kenya to launch the Kenya Livestock Insurance Programme in August of 2015.

