---
title: App Icons
description: Icons I designed for several applications.
---

{% for app in site.data.apps %}
<h3>
    <a href="{{ app.url }}">
        {{ app.name }}
    </a>
</h3>
{{ app.desc }}
<br>
<br>
<img alt="App Icon Preview" src="/images/{{ app.name | downcase | replace: ' ', '-' }}-icon.webp" style="margin-bottom: 5em;">
{% endfor %}

I hang out in the [GNOME App Icon Design Matrix room](https://matrix.to/#/#appicondesign:gnome.org). If you want to request an icon, you can find me there.
