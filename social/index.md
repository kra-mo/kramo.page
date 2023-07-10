---
title: socials
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
        width: 35em;
        max-width: 100%;
        margin: 0 auto;
        border-radius: 10em;
        transition: transform .1s;
        text-align: center;
        animation-name: bounce;
    }

    .social-buttons a {
        color: var(--bg);
        text-decoration:none; 
        display:inline-block;
        width:100%;
        height:100%;
        padding: 1em 0em;
    }

    .social-buttons div:hover {
        transform: scale(1.05);
    }
</style>

<div class="social-buttons">
    <div style="animation-duration: .5s; background-color: lavender">
        <a title="mastodon" href="https://fosstodon.org/@kramo">🐘 mastodon</a>
    </div>
    <div style="animation-duration: .6s; background-color: lightcyan">
        <a title="matrix" href="https://matrix.to/#/@kramo:matrix.org">💬 matrix</a>
    </div>
    <div style="animation-duration: .7s; background-color: white">
        <a title="github" href="https://github.com/kra-mo">😺 github</a>
    </div>
    <div style="animation-duration: .8s; background-color: papayawhip">
        <a title="gnome gitlab" href="https://gitlab.gnome.org/kramo">👣 gnome gitlab</a>
    </div>
    <div style="animation-duration: .9s; background-color: lightsteelblue">
        <a title="pixelfed" href="https://pixelfed.social/kramo">📷 pixelfed</a>
    </div>
    <div style="animation-duration: 1s; background-color: thistle">
        <a title="dribbble" href="https://dribbble.com/kramo">🏀 dribbble</a>
    </div>
</div>