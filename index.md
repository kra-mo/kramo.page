---
title: kramo
description: "kramo's homepage: projects, links and contact information."
---

<style>
    h2 {
        padding-top: 3em;
    }

    @keyframes scroll-circle-slide {
        from {transform: translateY(3em);}
        60% {transform: translateY(3em); animation-timing-function: ease-in-out;}
        to {transform: translateY(0em);}
    }

    @keyframes scroll-circle-pulse {
        from {opacity: 0;}
        60% {opacity: 0;}
        70% {opacity: var(--opacity);}
        90% {opacity: var(--opacity);}
    }

    @keyframes logo {
        from {transform: scale(0.4); opacity: 0;}
        to {transform: scale(1); opacity: 1;}
    }

    .appear-later {
        opacity: 0;
        animation: appear 0.5s forwards;
    }

    .reduced-motion-only {
        display: none;
    }

    #scroll-circle {
        margin-top: 3vh;
        margin-bottom: 35vh;
        opacity: 0;
        animation: scroll-circle-slide 3s infinite, scroll-circle-pulse 3s infinite;
        --opacity: 0.2;
    }

    #logo {
        width: 80px;
        height: 80px;
        margin-bottom: 3.5em;
        margin-top: 20vh;
        transform: initial;
        animation: logo 0.5s;
        animation-timing-function: cubic-bezier(0.8, 0, 0, 1.4);
        transition: transform .1s;
    }

    /* Firefox doesn't seem to like the SVG animation while the fade in happens */
    body {
        opacity: initial;
        animation: initial;
    }

    img {
        width: 35em;
    }

    @media (prefers-color-scheme: dark) {
        #scroll-circle {
            --opacity: 0.5;
        }
    }

    @media (pointer: fine) {
        #logo:hover {
            transform: scale(1.1);
        }
        #logo:active {
            transform: initial;
        }
    }

    @media (pointer: coarse) {
        #logo:active {
            transform: scale(0.9);
        }
    }

    @media (prefers-reduced-motion) {
        .reduced-motion-only {
            display: initial;
        }
        .appear-later {
            opacity: initial;
            animation: initial;
        }
        #scroll-circle {
            display: none;
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

<a href="#cartridges"><img id="logo" src="/images/kramo.svg" aria-label="My logo, a fox."></a>

<h1 class="appear-later" style="animation-delay: 0.3s;">kramo</h1>
<p class="appear-later" style="margin-bottom: 10vh; animation-delay: 0.5s;">Design & Free Software</p>

<p class="appear-later" style="animation-delay: 1.8s;">My Work</p>

{::comment} For reduced motion {:/comment}
<p class="reduced-motion-only">↓</p>
<br class="reduced-motion-only">

<svg id="scroll-circle" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="var(--fg)"/>
</svg>

## Cartridges

[Check out the project](/cartridges/)

[![Cartridges](/images/cartridges.webp)](/cartridges/)

## App Icons

[View icons I designed](/app-icon-design/)

[![App Icons](/images/app-icon-design.svg)](/app-icon-design/)

## Vanilla OS Wallpapers

[Download here](/vanilla-backgrounds/)

[![Vanilla OS Wallpapers](/images/vanilla-default.svg)](/vanilla-backgrounds/)

## Quick Touchpad Toggle

[Check out the extension](/quick-touchpad-toggle/)

[![Quick Touchpad Toggle](/images/quick-touchpad-toggle.webp)](/quick-touchpad-toggle/)
