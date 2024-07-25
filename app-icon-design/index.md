---
title: App Icons
description: Icons I designed for several applications.
---

<style>
    .icons {
        max-width: 462px;
        padding: 40px;
        border-radius: 18px;
        display: flex;
        margin: auto;
        flex-wrap: wrap-reverse;
        gap: 18px;
    }

    .icons img {
        border-radius: 0;
    }

    .icons img:not(.symbolic) {
        filter: drop-shadow(0px 3px 2px rgba(0 0 0 / 15%));
    }

    @media (prefers-color-scheme: dark) {
      .symbolic {
        filter: invert(100%);
      }
    }
</style>

<br>
{% for app in site.data.apps %}
<h1>
    <a style="font-family: var(--bold);" href="{{ app.url }}">
        {{ app.name }}
    </a>
</h1>
{{ app.desc }}
<br>
<br>
<div class="icons" style="background-color: color-mix(in srgb, var(--bg), #{{ app.color }} 30%);">
    <img alt="App Icon Preview" width=16 height=16 src="/images/app-icons/{{ app.name | downcase | replace: ' ', '-' }}-symbolic.svg" class="symbolic">
    <img alt="App Icon Preview" width=32 height=32 src="/images/app-icons/{{ app.name | downcase | replace: ' ', '-' }}.svg">
    <img alt="App Icon Preview" width=64 height=64 src="/images/app-icons/{{ app.name | downcase | replace: ' ', '-' }}.svg">
    <img alt="App Icon Preview" width=128 height=128 src="/images/app-icons/{{ app.name | downcase | replace: ' ', '-' }}.svg">
    {% if app.on-macos == true %}
        <img alt="App Icon Preview" width=150 height=150 src="/images/app-icons/{{ app.name | downcase | replace: ' ', '-' }}-macos.png">
    {% endif %}
</div>
<br>
<br>
<br>
{% endfor %}

I hang out in the [GNOME App Icon Design Matrix room](https://matrix.to/#/#appicondesign:gnome.org). If you want to request an icon, you can find me there.
