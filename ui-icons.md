---
tags: post
title: "UI Icons: What, When, Where, and Why"
description: Depending on who you ask, “icon” can mean a lot of things
date: 2025-06-21
layout: default
---

## What

Depending on who you ask, “icon” can mean a lot of things. According to a linguist, it is the relation between a certain type of sign and its meaning. Thankfully, the signature attitude of designers towards the significance assigned to what designated signs signify is to signal disinterest and threaten to resign, so we can ignore all of this. To a designer icon, symbol, and glyph all mean the same thing: a small picture used to represent an action or destination in the interface. This is why we can say things like “symbolic icon”, whatever that means.

Some icons we use in UI directly represent what they look like, such as a sidebar or bold text. A lot of them do not, such as a magnifying glass or a paperclip. This is interesting to think about, and there are certainly correlations between a symbol’s origin, how clear it is and to whom, but ultimately, that is what matters: do people understand it?

## When

The majority of icons used in UI are ambiguous and unclear. Don’t believe me? Take a look around your apps and notice how many are used with clarifying labels. Many design systems either mandate the use of icons in certain places or the use of labels with icons. This can help make certain items stand out or be more recognizable at a glance, especially when paired with color.

This does introduce problems: It makes the interface more cluttered and can lead to usage of inadequate icons as designers are less concerned with recognizability. Because of this, it is recommended¹ to use standalone, recognizable icons for common actions and destinations and standalone labels where one would be more clear. If the icon needs a tooltip to be understandable, it is a bad icon. Redesign it, or use a label instead.

You can ask yourself these questions when trying to decide whether to use an icon or a label: Is there already a universally understood icon for this? Think of search, pause, share. If not, is the concept used in enough different places to warrant one? If the question to either is yes, you could try to go ahead with an icon.

## Where

Use layouts that allow for the use of both standalone icons and labels. In practice, this usually means a horizontal strip. Icons aren’t particularly wide, and in a row, the constant height is what establishes the layout. If this is not possible, avoid mixing icons and labels, sticking to labels only is safer.

Always make sure that when the user is introduced to an icon, it is contextual to what it represents so that they can understand it if they haven’t encountered it before.

If there are too many items in a list to be easily glanceable… first, try and reduce the number of items. Merge them, organize them into sections, use nested navigation, split some out, and remove redundant ones. If all else fails, icons — particularly colored ones — can come in handy. Placing them next to list items can aid quick navigation but this is always secondary to simply reducing the number of elements the user has to deal with at a time. Less really is more.

## Why

Words are overloaded. Much of UI is very abstract and we reuse terms from places where they mean different things. Icons on the other hand can be unique to a certain concept, platform, or application.

Some ideas are simply better communicated visually. Directly representing a change the user is about to undertake or a place they are about to enter can be really powerful. It can make them feel more confident as they don’t have to guess what a label really means. Conversely, a lot is better communicated via text, keep this in mind.

Icons for related actions can be designed to look similar to each other to quickly convey their relation. They can use a similar base shape or even be modifications of the same icon to indicate state for example, such as a variant with a badge. This is especially important for internationalization as while two words may share the same root in one language, they may not in another.

Finally, icons are small, they free up space for more content and they can lead to simpler and more understandable layouts.

---

¹ By me. Of course, don’t overuse this piece of advice in (one of the many) design systems that pair labels with icons frequently, follow the convention instead.
