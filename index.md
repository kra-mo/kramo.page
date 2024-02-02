---
title: kramo
description: "kramo's homepage: projects, links and contact information."
---

<style>
    @keyframes arrow-slide {
        from {transform: translateY(-1em);}
        80% {transform: translateY(-1em); animation-timing-function: ease-in;}
        to {transform: translateY(2em);}
    }

    @keyframes arrow-pulse {
        from {opacity: 0;}
        80% {opacity: 0;}
        90% {opacity: 0.4;}
    }

    @keyframes logo {
        from {transform: scale(0.4); opacity: 0;}
        to {transform: scale(1); opacity: 1;}
    }

    .arrow {
        margin-top: 1.4em;
        margin-bottom: -1.8em;
        opacity: 0;
        animation: arrow-slide 4s infinite, arrow-pulse 4s infinite;
    }

    .appear-later {
        opacity: 0;
        animation: appear 0.5s forwards;
    }

    #logo {
        transform: initial;
        animation: logo 0.5s;
        animation-timing-function: cubic-bezier(0.8, 0, 0, 1.4);
        transition: transform .1s;
    }

    #logo:hover {
        transform: scale(1.1);
    }

    #logo:active {
        transform: initial;
    }

    /* Firefox doesn't seem to like the SVG animation while the fade in happens */
    body {
        opacity: initial;
        animation: initial;
    }

    img {
        width: 35em;
    }

    @media (prefers-reduced-motion) {
        .arrow {
            animation: appear 5s forwards;
        }
        .appear-later {
            opacity: initial;
            animation: initial;
        }
        #logo {
            animation: initial;
        }
        #logo:hover {
            transform: initial;
        }
        #logo:active {
            transform: initial;
        }
    }
</style>

<img id="logo" src="/images/kramo.svg" aria-label="My logo, a fox." style="width: 80px !important; margin-bottom: 3.5em; margin-top: 20vh;">

<h1 class="appear-later" style="animation-delay: 0.7s;">kramo</h1>
<p class="appear-later" style="margin-bottom: 20vh; animation-delay: 1.2s;">Design & Free Software</p>

<p class="appear-later" style="animation-delay: 2s;">My Work</p>

<p class="arrow" style="animation-delay: .2s;" aria-hidden="true">v</p>
<p class="arrow" style="animation-delay: .1s;" aria-hidden="true">v</p>
<p class="arrow" style="margin-bottom: 35vh;" aria-hidden="true">v</p>

### Cartridges

[Check out the project](/cartridges/)

[![Cartridges](/images/cartridges.webp)](/cartridges/)

<br>
<br>

### App Icons

[View icons I designed](/app-icon-design/)

[![App Icons](/images/app-icon-design.svg)](/app-icon-design/)

<br>
<br>

### Vanilla OS Wallpapers

[Download here](/vanilla-backgrounds/)

[![Vanilla OS Wallpapers](/images/vanilla-default.svg)](/vanilla-backgrounds/)

<br>
<br>

### Quick Touchpad Toggle

[Check out the extension](/quick-touchpad-toggle/)

[![Quick Touchpad Toggle](/images/quick-touchpad-toggle.webp)](/quick-touchpad-toggle/)
