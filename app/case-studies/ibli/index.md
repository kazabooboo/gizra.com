---
keywords: Drupal
date: 15 May 2016
tags:
  - POC
  - Structured Data
  - Restful API
layout: case
title: Gambling on Cow Insurance
subtitle: How We Helped Make Life Less Risky for Farmers in Africa
abstract: The need was critical, the data existed, and the idea was solid. One organization needed a way to demonstrate that they could compile existing data, process it with known algorithms, and produce logical, readable maps so that farmers in Africa could be insured on the open market. Gizra found a way to help.
header_url: /assets/images/cases/ibli/top.jpg
techs:
  - Drupal 7
  - AngularJS
  - Restful API
---

{% include setup %}

##The Problem: Farming in Arid Regions of Africa
Farmers in arid or semi-arid areas of Africa face unmitigated environmental risk. The lack of rain in any given season – and the resulting high livestock mortality – is an existential crisis against which pastoral farmers traditionally have had no protection. Environmental fate, which is commonly protected against by insurance products in areas of the developed world, was not readily available to farmers in Kenya due to limited resources and a lacking technological infrastructure to conduct transactions and deliver products.

<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/1-w7iht20nw?list=PLCLZXIdq9v2RBlzJtuIR4CqRPvDVcaGBX" frameborder="0" allowfullscreen></iframe>
</div>


##The Idea:
The International Livestock Research Institute (ILRI - www.ilri.org) is an organization dedicated to improving food security and to reducing poverty in developing countries through research for efficient, safe, and sustainable use of livestock. In 2010, they launched the IBLI (Index Based Livestock Insurance) project, which began to question the logic of the status quo of insurance access to pastoral farmers in Kenya.

They knew these things:

-  The enormous set of satellite-captured data on weather patterns and vegetation conditions needed to accurately assess livestock losses was readily available.
-  The algorithms that insurance companies used to crunch that data existed, but needed to be compiled and automated.
-  While broadband internet is limited in sub-Saharan Africa, wireless mobile technology is widespread, and literally in the hands of many pastoral farmers.


From there, they made the following **assumptions that they proposed to test**: 

-  If provided the livestock loss assessment data and a way to access a previously unreached  customer base, insurance companies would jump at the chance to provide affordable insurance to pastoral farmers in Africa.
-  Farmers, if given the opportunity, would pay the cost to mitigate their environmental risk and be in a better position to grow their family business going forward.

{% include thumbnail.html image_path="assets/images/cases/ibli/table.jpg" caption="A table of historic premiums by locality."%}

ILRI needed to create a proof-of-concept application that demonstrated both the ability to work with a large, highly abstracted set of data to produce an accurate cost of product, and a mechanism to deliver the product directly to the consumer.


##Gizra’s Solution 

###Large sets of data, decoupled systems, and existing technologies
Gizra had long been interested in the idea of decoupling the back-end logic from front-end presentation in web projects – an idea they have championed in the Drupal community with projects such as the [Restful module](https://www.drupal.org/project/restful). This opportunity to work with a large data set and existing algorithms provided the perfect opportunity to use this approach, allowing Drupal to be the engine that both gathered and fed the presentation of data.

In terms of working with large sets of data, the project had three parts:

-  Gizra first compiled a number of IDL (Interactive Data Language) scripts that had been written by scientists and then combined them into a system that ran automatically, consuming the latest satellite images, and processing their data. 
-  The custom API then presented the results as structured data, which Drupal utilized and rendered onto a map with a clean user interface. 
-  Finally, that same data was fed into a system used by insurance companies (written in .NET) so that agents could quickly determine premiums.

{% include thumbnail.html image_path="assets/images/cases/ibli/map.jpg" caption="Data gathered through the API and rendered using Drupal and AngularJS."%}

This logic leveraged another Gizra passion: to find available tools within the existing technological world to make a project work. IBLI didn’t have the time or the resources to reinvent the wheel, and they chose Gizra precisely because of their aptitude with a wide range of technologies. For this project, and because of the decoupled approach, Gizra was able to use a variety of tools, such as AngularJS for the map presentation layer in place of Drupal’s normal rendering system.

###Lean Demonstration of an Idea
ILRI had a massive task: to provide digestible research in order to draw insurance companies into the market, and to educate a consumer base with no cultural familiarity with insurance. ILRI needed a technology partner who could both understand the need and provide a process and solution within the time and budget required.

Gizra exercises a well-curated set of best practices that forms the basis for what we call [The Gizra Way](/#gizra-way). One tenet of this set of principles is that **most IT projects fail because they either don’t fall within budget, exceed the given timeline, or don’t make the end users happy.** Gizra guard against this assumption by frontloading the time/budget estimation (discovery) process with “timeboxed” features so that the client can literally buy the features they need, and reserve the features they don’t.

{% include thumbnail.html image_path="assets/images/cases/ibli/calculator.jpg" caption="A calculator app to determine premiums based on heads of livestock."%}

Through this method, ILRI was able to focus on the things that they were good at: providing high-level research and working with local farmers to adopt to change. *Gizra was able to work on the technological mechanism to help make that change.*


##Where they are today
ILRI successfully launched the IBLI project and now seeks to expand it beyond Kenya into Ethiopia and other regions in Africa. Already, the project is seeing results beyond its initial goals of providing stability in the face of drought. With new economic confidence, farmers are able to and more willing to, access credit in order to expand their operations and grow their businesses. The IBLI Team has most recently partnered with the World Bank Group and the Government of Kenya and launched the [Kenya Livestock Insurance Programme](http://clippings.ilri.org/2015/08/10/klip-a-new-kenya-livestock-insurance-program-will-start-to-serve-pastoralists-across-northern-kenya-in-october/) in August of 2015.
