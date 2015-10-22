---
title: Thinking (And Choosing) Elm
tags:
  - Headless Drupal
  - Elm
  - "Drupal-planet"
permalink: "/content/thinking-choosing-elm"
layout: post
published: true
---

{% include setup %}

In my [last post]({{ BASE_PATH }}/content/elmlang-headless-drupal/) I was giving a high level overview of why we were looking at Elm in Gizra. Since that post, we've almost completed the [demo app](http://gizra.github.io/elm-hedley), and we've changed our status from "Looking at Elm" to "Choosing Elm".

The reason? In short - I believe it will save us money.  
(Oh, and it's fun)

<div class="thumbnail">
  <iframe src="http://gfycat.com/ifr/BountifulGloomyChickadee" frameborder="0" scrolling="no" width="800" height="555" style="-webkit-backface-visibility: hidden;-webkit-transform: scale(1);" ></iframe>
</div>


<!-- more -->

## Pro & Cons

Lets start with the main Elm cons:

* It's not mainstream.
* Community is small, which means there aren't tons of libraries out there, so you'll have to scratch your own itch more often then not.
* There aren't many blog posts/tutorials out there, surely compared to popular frameworks such as React.
* High learning curve with a new unknown syntax which is not JS.
* It's different from other things we know.

And the pros, which are totally subjective:

* It's not JS. Obviously this statement is controversial, but it's no secret that JS can be very [confusing](http://dorey.github.io/JavaScript-Equality-Table/).
* Having this high learning curve has an interesting side effect: all the developers in the issue queue/mailing list, even the newbies, are seasoned developers. It's amazing to see how rapidly newcomers learn the new stuff, and contribute back.
* Once you pick up the concepts, and follow the [Elm architecture](https://github.com/evancz/elm-architecture-tutorial/), the pieces start falling really neatly into their natural place. Each component in your app has the exact same structure as the other components and the root component itself.
* There's a compiler that stops you from screwing things up - as we humans constantly tend to do.
* It's different from other things we know. I think it's actually good, because we kind of had enough of "the old way" (read as "Angular 1"). Even [Aurelia](http://aurelia.io/) with its great DX and even React & [Redux](http://redux.js.org/) with their immense popularity and community felt as a step in the right direction, but not the radical new approach to the problem we were looking for.

## Approaching a Project

I hope that, like us, you enjoy seeing how the same backend can be served by different front-ends. Starting from the trusty old Angular (which we love to complain about, but still have a warm place in our hearts for), to [crazy node.js]({{ BASE_PATH}}/content/headless-drupal-terminal/) running in your console, and now to Elm.

I'd like to share a small example of how we approach the same feature, both in Angular and in Elm. The demo app itself isn't super complicated, but it's already doing a lot of stuff typical apps need to do:

1. Log in a user, and authenticate against a [RESTful backend](https://github.com/RESTful-Drupal/restful) (Drupal in our case, but that's obviously completely hidden from the front - the client just sees clean JSON).
1. Fetch a set of events from the backend the user has access to, and present them in a filterable list, along with a map showing their geo-locations.
1. Have a simple "My account" page.
1. Remember the user by keeping an access token in localStorage, so they won't have to re-login over and over again.
1. Have the URL change when switching pages.

I'd like to concentrate on this last point. Getting the router working on our Elm app helped me realize we were approaching the routing task incorrectly while we were using Angular.

When structuring the app in Angular, setting up the router using the popular ui-router module is one of the first tasks we used to do. While ui-router is working with the concept of states, the URL is baked directly into it.  
So immediately each page had its own URL, but we were now shaping our app around ui-router's logic. Having the root level app know so much about each page (e.g. which `templateUrl` to load) or deal with the access via `onEnter` was a sign that something was off.

```js
.state('my-account', {
  url: 'my-account',
  templateUrl: 'user.html',
  controller: 'UserCtrl',
  onEnter: page403,
  resolve: {
    account: function(Account) {
      // Resolve the user's account before we navigate to the page.
      return Account.get();
    },
  }
})
```

## URL Change Is Not Routing

In our Elm app, getting the URL mapped to a page was in fact the _last_ step, not the first. Let's see how this can be accomplished and how by following the Elm architecture we were able to better model our app.

First, we need to remember Elm takes a highly centralized approach - the entire app state is kept in one big record, which is the "single source of truth" of our app. It might feel unnatural initially, but the gains are immediate.

We'll start by defining our `Model`. It has an `activePage` property which will hold the state of the page being viewed. An `activePage` is of type `Page`, that we define ourself - an arbitrary list of our pages. That's it.  
Once we've modeled it like that, it makes it easier to reason with and understand that our single page application has a property that holds the info on which page is active. It might sound over simplified but it actually is as simple as that.

For a more advanced use case we could even add a second property called `nextPage` which has the value of a `Maybe Page`. The `Maybe` signifies that it _might_ have a `Page` value, or might not (i.e. `Nothing`).  
The `nextPage` will be used whenever we try to login for the first time, and want to redirect the user to the next page. So the `activePage` would be `User` (which is the login form), and the next page that the user will be redirected to after being logged in is `Just Event` (the `Just` prefix means we have a value here - it's the opposite of using `Nothing`).


```haskell
type Page
  = Event
  | User

type alias Model =
  { activePage : Page
  -- If the user is anonymous, we want to know where to redirect them
  -- after being logged in.
  , nextPage : Maybe Page
  }
```

Next lets cover how the active page will be changed. In Elm every change to our model is very explicit, and only a predefined `Action` can cause an update to our model. This means every single interaction the user has with the app is not automatically converted into data (i.e. no two way data binding).  
Even updating the name and password field on every key stroke need to be explicitly wired into our app. A little more verbose, but helpful in following and maintaining our app, as any change to the state or data is very clear.

So we will define the action that sets the active page. This action is the one and only entry point for changing the active page. The below code says, there's an action called `SetActivePage` and it will get an argument of type `Page` - in our example, `User` or `Event` are the only allowed values.

```haskell
type Action
  = SetActivePage Page
```

We've actually defined the most important parts - our model and action. Next we'll have to define how our app will behave once `SetActivePage` is triggered. While this [update function](https://github.com/Gizra/elm-hedley/blob/d052dbac36dfbe801ed94ee085627b556252c861/src/elm/App.elm#L136-L176) could be found valuable for devs learning Elm, I'd argue that it's the less interesting part - it's "just" an implementation detail.  
In fact, the update function is likely to evolve as our app grows, but the conceptual foundation we laid in the Model and Action, is most probably going to remain as is.

Finally, by using @rgrempel well documented [elm-router-hash](https://github.com/rgrempel/elm-route-hash) package we [map](https://github.com/Gizra/elm-hedley/blob/d052dbac36dfbe801ed94ee085627b556252c861/src/elm/App.elm#L241) the `activePage` property of our model to the URL, so whenever it changes the URL changes as-well.

This is where I personally realized that the URL change which up until now I incorrectly called "the router" is just a _side effect_ to the actual routing - the `SetActivePage`.

This isn't just semantics. By moving all the logic into a single action that controls setting the page, we can make sure that for example access control is respected no matter where the page is set, from the URL or programtically.

## Baby Steps

I encourage you to learn Elm and see how it can be integrated with your Headless Drupal installation. Even if ultimately you decide not to use it for production, just being exposed to this different approach will be worth your while.

Some good resources are:

* The official [docs](http://elm-lang.org/docs)
* The [Elm architecture tutorials](https://github.com/evancz/elm-architecture-tutorial/)
* Online courses by [Pragmatic Studio](https://pragmaticstudio.com) (Paid, but well worth it)
* The official [mailing list](https://groups.google.com/forum/#!forum/elm-discuss)
* [Elm-hedley](https://github.com/Gizra/elm-hedley) demo app
