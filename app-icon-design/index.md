---
title: App Icons
description: Icons I designed for several applications.
---

{% for app in site.data.apps %}
<h1>
    <a style="font-family: var(--bold);" href="{{ app.url }}">
        {{ app.name }}
    </a>
</h1>
{{ app.desc }}
<br>
<br>
<br>
<img alt="App Icon Preview" width=964 src="/images/{{ app.name | downcase | replace: ' ', '-' }}-icon.webp" style="margin-bottom: 5em;">
{% endfor %}

I hang out in the [GNOME App Icon Design Matrix room](https://matrix.to/#/#appicondesign:gnome.org). If you want to request an icon, you can find me there.
