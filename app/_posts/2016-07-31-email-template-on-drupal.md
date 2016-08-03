---
title: "How to create a dinamic email template on drupal"
tags:
  - Drupal
permalink: "/content/dimanic-email-template"
layout: post
author: Savyoncohen
<!-- image: /assets/images/posts/elm-electron-build/thumb.jpg -->
published: false
---

{% include setup %}

Creating an email on drupal is a simple task when you just sends a plain text. But what happens when you want send the users a nicely designed message with a logo, an article, a linked button and any other unique design?
Also you want to have dynamic content, costumed to each user.
This post will give you an example of a simple solution to this issues.

## 1) Creating an email template

When we build a website we need to take to consideration that our users use different browsers and adjust our CSS rules so that our website will look pretty much the same in all of them. The same issue is take into consideration when we creating an email. Our users use a different email services and view their emails on different browsers of email softwares. Each email might look a bit different on each browser or a software.
Some of the email services do not support all HTML tags and CSS designs. We can't use every thing we  want, as we use in our website for example: Gmail and outlook users have poor support for float, margin and padding. Also, Some mail services might overwrite our designs and replace it with it's defaults, for example: links colors, or images that might not be visible for users by its default. Another issue is the screens width, our mobile or tablet users might view our emails very different .
The way to overcome this problems is to design our emails with nested tables. Tables are supported in most email services. But even when we're using tables, our email still might not look the same for each user. To make sure that our email will look the way we want, we need to set a specific width for each table cell and that's a lot of work. After creating our email template we need to find a way to test it and make sure that it looks the way we meant on every media or mail service.

For our website we have all kinds of browsers testing tools, for an email their is a nice tool which is called <a href="https://mailchimp.com/">Mailchimp</a>. In Mailchimp you can build any email template you want, with a nice wysiwyg editor. you can add and design almost anything you want : linked buttons, social networks linked icons, images and videos.
Here is an example for an email template I created with the Mailchimp editor, without writing even one single line of HTML or CSS at all:

{% include thumbnail.html  image_path="assets/images/posts/email-template/.jpg" caption="Post has a happy end - we were able to migrate files and attach to a node!" %}

Behind the scenes, Mailchimp have converted my design into nested tables with the mostly mail supported CSS rules. There is also an option to see the source on the Mailchimp editor, and i can change anything i want.
I uploaded my images to Mailchimp's cloud, so i won't have to worry about my users email softwares blocking images attached to the email.
Mailchimp also gives me the opportunity to test my email template on desktop, mobile or inbox softwares such as different versions of outlook and  Gmail or Yahoo on different browsers an so.
After finishing my email template, i can export the html file which in combined with the inline CSS,
Now all i have to to is put it in my message template.

## 2) Creating an email template on Drupal
This step is very similar to creating a dynamic website page. After creating the email template, i'm going to use it in my dynamic content message.
In my module folder which this template will be used, i create a templates folder where
i save my template as tpl file.
in my_module.module file i create a theme which will be my template. In this example I took my  
my email template file and split it to 2 templates: the header and a footer with the CSS will be on the email wrapper and the content will be in a different theme. My email template is build from tables, so i just cut the tables and use them to put a repeating content type, for example: an articles.

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

Now lets use this themes to create the message. Again, very similar to a page theme.
In this example my variables are the user name on the wrapper template and articles on my content template:

```php
function my_module_send_messages_immediate() {

// Prepare and send the message.
 $message = message_create('newsletter', array('uid' => $node->uid));
 $message_wrapper = entity_metadata_wrapper('message', $message);

 // $success = message_notify_send_message($message, array('email' => $email));

$account = $wrapper_message->user;
$user_name = !empty($account->name->value()) ? $account->name->value() : '';

$variables = array(
   'user_name' => $user_name,
   );

   // Wrapping my content in the content template.
   foreach ($wrapper_message->field_articles as $wrapper) {

     $variables['article'] = array(
       'title' => $wrapper->title,
       'summary' => $wrapper->summary,
     );

   // Push my content to the wrapper variable.
       $variables['content'][] = theme('my_module_email_template_content', $variables['article']);

   }

$message->content['message__message_text__1']['#markup'] = theme('my_module_email_template_wrapper', $variables)
```

## 3) testing an email template with dynamic content on Drupal
Great! we've got an email. now all we need check how my email looks with different articles or any type of content.the most simple way is to create on our module a hook menu, we can define the path to be "my-hook-menu/% and this menu will get one argument, the message id. On our website themes folder we will create a new template.
but there is one more thing to do before we view our emails. we need to disable our site CSS, because it might change the way we see it. On the template php file we use the hook function css_alter, its argument will be the CSS variable, by reference (&). The function will get the menu item and check if the path is our hook menu, then we set the css variable to be an empty array so we can only see the email inline CSS, this is how users will see the emails. after we did that we can create a new template.
the template name must be "page--my_hook_menu".tpl.php ,replacing all dashes with underscores so that drupal will recognize it .now all we have to do is to print our content:

```php
 <?php print render($page['content']); ?>
 ```
we can do the same the message itself. for each message we can just go to message/mid
on the website theme folder we create a template with the name "message--our message type".tpl.php

```php
<?php foreach ($content['message'] as $mid => $content_array): ?>
    <?php print our_module_our_notification_function($mid); ?>
<?php endforeach; ?>
```

this template will get the message and will print the return of our function, meaning the template theme. now we can test every message that will be sent to the user.
