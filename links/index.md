---
title: Links
description: Links to my social media and git forges.
---

<style>
    @keyframes bounce {
        from {transform: translateY(5em); opacity: 0;}
        50% {transform: translateY(-0.5em); opacity: 100;}
        to {transform: translateY(0em); opacity: 100;}
    }

    .social-buttons {
        display: flex;
        flex-flow: column nowrap;
        gap: 1em;
    }

    .social-buttons div {
        width: 25em;
        max-width: 100%;
        margin: 0 auto;
        border-radius: 10em;
        transition: transform .3s;
        text-align: center;
        animation-name: bounce;
    }

    .social-buttons img{
        height: 1.2em;
        display: inline;
        border-radius: 0;
        vertical-align: text-top;
    }

    .social-buttons a {
        color: white;
        text-decoration: none;
        display: block;
        width: 100%;
        height: 100%;
        padding: 1.1em 0em;
        font-family: var(--bold);
    }

    .social-buttons a img {
        margin-right: 1em;
    }

    @media (pointer: fine) {
        .social-buttons div:hover {
            transform: scale(1.05);
        }
        .social-buttons div:active {
            transform: initial;
        }
    }

    @media (prefers-reduced-motion) {
        .social-buttons div {
            transition: initial;
            animation-name: initial;
        }
        .social-buttons div:hover {
            transform: initial;
        }
        .social-buttons div:active {
            transform: initial;
        }
        .social-buttons a:hover {
            text-decoration: underline;
        }
    }
</style>

<div class="social-buttons">
    {% for link in site.data.links %}
    <div style="animation-duration: {{ forloop.index0 | times: 0.1 | plus: 0.5 }}s; background-color: #{{ link.color }}">
        <a href="{{ link.url }}">
            <img aria-hidden="true" src="/images/{{ link.name | downcase | replace: ' ', '-' }}-icon.svg">{{ link.name }}
        </a>
    </div>
    {% endfor %}
</div>
