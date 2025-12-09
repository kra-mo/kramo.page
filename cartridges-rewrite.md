---
tags: post
title: Rewriting Cartridges
description: Gamepad support, collections, instant imports, and more!
date: 2025-12-09
layout: default
---

**Gamepad support, collections, instant imports, and more!**
  
[Cartridges](https://apps.gnome.org/Cartridges/) is, in my biased opinion, the best game launcher out there. To use it, you do not need to wait 2 minutes for a memory-hungry Electron app to start up before you can start looking for what you want to play. You don’t need to sign into anything. You don’t need to spend 20 minutes configuring it. You don’t need to sacrifice your app menu, filling it with low-resolution icons designed for Windows that don’t disappear after you uninstall a game. You install the app, click “Import”, and all your games from anywhere on your computer magically appear.
  
It was also the first app I ever wrote. From this, you can probably already guess that it is an unmaintainable mess. It’s both under- and over-engineered, it is full of bad practices, and most importantly, I don’t trust it. I’ve learned a lot since then. I’ve learned so much that if I were to write the app again, I would approach it completely differently. Since Cartridges is the preferred way to launch games for so many other people as well, I feel it is my duty as a maintainer to give it my best shot and do just that: rewrite the app from scratch.
  
Myself, [Zoey](https://ko-fi.com/zoeyahmed), and [Jamie](https://jamie.garden) have been working on this for the past two weeks and we’ve made really good progress so far. Beyond stability improvements, the new base has allowed us to work on the following new features:
  
## Gamepad Support
Support for controller navigation has been something I’ve attempted in the past but had to give up as it proved too challenging. That’s why I was overjoyed when Zoey stepped up to work on it. In the currently open pull request, you can already launch games and navigate many parts of the UI with a controller. You can donate to her on [Ko-fi](https://ko-fi.com/zoeyahmed) if you would like to support the feature’s development. Planned future enhancements include navigating menus, remapping, and button prompts.

<video controls class="rounded">
  <source src="/videos/cartridges-gamepad.mp4" type="video/mp4" />
</video>

## Collections
Easily the most requested feature, a lot of people asked for a way to manually organize their games. I initially rejected the idea as I wanted Cartridges to remain a single-click game launcher but softened up to it over time as more and more people requested it since it’s an optional dimension that you can just ignore if you don’t use it. As such, I’m happy to say that Jamie has been working on categorization with an initial implementation ready for review as of writing this. You can support her on [Liberapay](https://liberapay.com/monster) or [GitHub Sponsors](https://github.com/sponsors/jamiethecat).

![](/images/screenshots/cartridges-collections.webp)
  
## Instant Imports
I mentioned that Cartridges’ main selling point is being a single-click launcher. This is as good it gets, right? Wrong: how about zero clicks?
  
The app has been reworked to be even more magical. Instead of pulling data into Cartridges from other apps at the request of the user, it will now read data directly from other apps without the need to keep games in-sync manually. You will still be able to edit the details of any game, but only these edits will be saved, meaning if any information on, let’s say Steam gets updated, Cartridges will automatically reflect these changes.
  
The existing app has settings to import and remove games automatically, but this has been a band-aid solution and it will be nice to finally do this properly, saving you time, storage space, and saving you from conflicts.
  
To allow for this, I also changed the way the Steam source works to fetch all data from disk instead of making calls to Steam’s web API. This was the only source that relied on the network, so all imports should now be instant. Just install the app and all your games from anywhere on your computer appear. How cool is that? :3
  
## And More
We have some ideas for the longer term involving installing games, launching more apps, and viewing more game data. There are no concrete plans for any of these, but it would be nice to turn Cartridges into a less clunky replacement for most of Steam Big Picture.
  
And of course, we’ve already made many quality of life improvements and bug fixes. Parts of the interface have been redesigned to work better and look nicer. You can expect many issues to be closed once the rewrite is stable. Speaking of…
  
## Timeline
We would like to have feature-parity with the existing app. The new app will be released under the same name, as if it was just a regular update so no action will be required to get the new features.
  
We’re aiming to release the new version sometime next year, I’m afraid I can’t be more precise than that. It could take three more months, it could take 12. We all have our own lives, working on the app as a side project so we’ll see how much time we can dedicate to it.
  
If you would like to keep up with development, you can watch [open pull requests](https://codeberg.org/kramo/cartridges/pulls) on Codeberg targeting the rewrite branch. You can also join the [Cartridges Discord server](https://discord.gg/yrJfddyt56).
  
Thank you again Jamie and Zoey for your efforts!
