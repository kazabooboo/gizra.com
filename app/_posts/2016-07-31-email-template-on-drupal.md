---
title: "Creating a Dynamic Email Template in Drupal"
tags:
  - Drupal-planet
permalink: "/content/dynamic-email-template"
layout: post
author: Savyoncohen
<!-- image: /assets/images/posts/elm-electron-build/thumb.jpg -->
---

{% include setup %}

Creating an email with Drupal is a simple task when you just want to send plain text. However, when you want to send a nicely designed message with a logo, an article, a linked button or any other unique design with dynamic content personalized for each user, it gets a bit complicated.
This post will walk you through a simple solution we use to address these requirements, by creating email themes.
Before jumping in, let me first explain Gizra's approach to themes.
We don't use custom CSS in Drupal themes. When we start building a website, we divide our work into several milestones, the first is creating a clean and static markup, using Jekyll. At Gizra, we take pixel perfect very seriously, and by doing the markup first, we can concentrate on building our App pages exactly the way they are suppose to look, test their responsiveness, show our clients a first draft, and fix bugs before getting into the logic. We use gulp to compile the SASS files into one CSS file, and after doing that, we copy the CSS file to the themes folder. Then we take our static pages, cut them into pieces, and use them in Drupal themes and plugins.
By doing this, we can focus on our logic without worrying about how it may look with different dynamic content. Focusing on Frontend and Backend as seperate tasks, makes building websites easier and faster. Even fixing bugs discovered while implementing dynamic content can now be easily fixed. Our
<a href="http://www.gizra.com/content/custom-css-as-contrib-with-jekyll/">No more CSS in your Drupal Theme!<a> blog post talks more extensivly about the way we work with Drupal themes.
The same approach is implemented when we create an email template. We first build the email markup with static content, and then we use it to create dynamic content messages. Let's get started:

## Creating an email template

When we build a website we need to take to consideration that our users use different browsers and adjust our CSS rules so that our website will look pretty much the same in all of them. The same issue is taken into consideration when creating an email template. Our users use different email services and view their emails on different browsers. Each email may look a bit different on each browser or software. Some of the email services do not support all HTML tags and CSS designs. We can't use everything we use in our website for example: Gmail and Outlook users have poor support for float, margin and padding. Also, some email services may overwrite our design and replace it with its defaults like links color, or image visibility. Another issue is the screen widths where mobile or tablet users view emails very differently.
The way to overcome this problem is to design our emails with nested tables since they are supported by most email services. Using tables is still not enough. To make sure that our email will look the way we want, we need to set a specific width for each table cell and that's a lot of work. After creating our email template we need to find a way to test it and make sure that it looks the way we meant on every media or mail service. For emails we have found that <a href="https://mailchimp.com/">Mailchimp</a> is a great tool. In Mailchimp you can build any email template you want, with a nice wysiwyg editor, where you can design almost anything you want: linked buttons, social networks linked icons, images and videos.

{% include thumbnail.html  image_path="assets/images/posts/email-template/Mailchimpwysiwyg.jpg" caption="Mailchimp wysiwyg editor" %}

{% include thumbnail.html  image_path="assets/images/posts/email-template/mailchimp_email_compomemts.jpg" caption="Mailchimp design compomemts" %}

{% include thumbnail.html  image_path="assets/images/posts/email-template/mailchimp_email_compomemts2.jpg" caption="Mailchimp content items" %}

Here is an example for an email template I created with the Mailchimp editor, without writing even one single line of HTML or CSS:

{% include thumbnail.html  image_path="assets/images/posts/email-template/email_example.jpg" caption="The Gizra way email template" %}

Behind the scenes, Mailchimp converted my design into nested tables with the most mail supported CSS rules. There is also an option to view the source on the Mailchimp editor and do my own adjustments.
I uploaded my images to Mailchimp's cloud, so I won't have to worry about my users email softwares blocking images attached to the email.
Mailchimp also gives me the opportunity to test my email template on desktop, mobile, and inbox software such as different versions of Outlook, Gmail, and Yahoo on different browsers.

{% include thumbnail.html  image_path="assets/images/posts/email-template/testing_tool.jpg" caption="Mailchimp Testing tool" %}

After finishing my email template, I can go to my templates list and export it as an HTML file, which is combined with the inline CSS. Now all I have to do is put it in my message template.

## Creating an email template in Drupal
This step is very similar to creating a dynamic web page. After creating the email template, we're going to use it in our dynamic content message.
In my module folder which this template will be used, I create a templates folder where
I save my template as tpl file. On my_module.module file I create a theme which will be my template. In this example I took this email template file and split it to 2 templates: the header and a footer, including the CSS will be on the email wrapper and the content will be in a different theme. My email template is build from tables, so I just cut the tables and use them to put a repeating content type, for example: articles.

```php
function my_module_theme($existing, $type, $theme, $path) {
  return array(
    'my_module_email_template_wrapper' => array(
      'variables' => array(
        'user_name' => NULL,
        'content' => NULL,
      ),
      'template' => 'email-wrapper-template',
      'path' => drupal_get_path('module', 'my_module') . '/templates',
    ),
    'my_module_email_template_content' => array(
      'variables' => array(
        'title' => NULL,
        'summary' => NULL,
      ),
      'template' => 'email-content-template',
      'path' => drupal_get_path('module', 'my_module') . '/templates',
    ),
```

Now lets use this theme to create the message. In this example, the variables are the user name on the wrapper template and articles on my content template.
I created a message type named newsletter and I'm using the message module to send my message:

```php
function my_module_send_messages_immediate() {

  // Load the message.
 $message = message_create('newsletter', array('uid' => $node->uid));
 $message_wrapper = entity_metadata_wrapper('message', $message);

  // Wrapping my articles in the content template.
  foreach ($wrapper_message->field_articles as $article) {

    $variables['article'] = array(
      'title' => $article->title,
      'summary' => $article->summary,
    );

    // Push my content to a wrapper variable.
    $variables['content'][] = theme('my_module_email_template_content', $variables['article']);
  }

// The user variable
$account = $wrapper_message->user;
$user_name = !empty($account->name->value()) ? $account->name->value() : '';
$variables['user_name'] = $user_name;
$email = $account->email->value();

// Render the message body.
$message->arguments['!body'] = theme('my_module_email_template_wrapper', $variables)
```
// Send the message
$success = message_notify_send_message($message, array('mail' => $email));

## testing an email template with dynamic content in Drupal
Once the email template is ready, it's time to test it with different messages. In this example, my messages contain different articles each time. The most simple way to do this is to create on our module a hook menu. We can define the path to be "my-hook-menu/% and the menu argument will be the message id.
We then need to disable our site CSS before we view our message, because it might change the way we view the emails. On the template.php file, in themes folder, we use the hook function css_alter to disable our website CSS on our hook menu. Here's an example:

```php
function my_theme_css_alter(&$css) {
  $item = menu_get_item();
  if ($item['path'] != 'my-hook-menu/%') {
    return;
  }

  $css = array();
}
```

Now when we test our messages, we will see only the email inline CSS, this is how our users will view the emails.
The next step is to create a new template on the website themes/templates folder.
The template name must be "page--my_hook_menu".tpl.php ,replacing all dashes with underscores so that Drupal will recognize it. Now all we have to do is to print our content on the template file:

```php
 <?php print render($page['content']); ?>
 ```

If you really want to, you can do the same to the message view. For each message we can just go to message/mid
on the website theme folder we create a template with the name "message--our message type".tpl.php

```php
<?php foreach ($content['message'] as $mid => $content_array): ?>
    <?php print our_module_our_notification_function($mid); ?>
<?php endforeach; ?>
```

Our template will get the message and will print the return of our function, meaning the template theme. Now we can test every message that will be sent to the user.
