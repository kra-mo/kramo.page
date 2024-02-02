---
title: kramo
description: "kramo's homepage: projects, links and contact information."
---

<style>
    @keyframes scroll-circle-slide {
        from {transform: translateY(3em);}
        70% {transform: translateY(3em); animation-timing-function: ease-in-out;}
        to {transform: translateY(0em);}
    }

    @keyframes scroll-circle-pulse {
        from {opacity: 0;}
        70% {opacity: 0;}
        85% {opacity: 0.7;}
        90% {opacity: 0.7;}
    }

    @keyframes logo {
        from {transform: scale(0.4); opacity: 0;}
        to {transform: scale(1); opacity: 1;}
    }

    .scroll-circle {
        margin-top: 3vh;
        margin-bottom: 30vh;
        opacity: 0;
        animation: scroll-circle-slide 4s infinite, scroll-circle-pulse 4s infinite;
    }

    .appear-later {
        opacity: 0;
        animation: appear 0.5s forwards;
    }

    #logo {
        width: 80px;
        margin-bottom: 3.5em;
        margin-top: 20vh;
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
        .scroll-circle {
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

<img id="logo" src="/images/kramo.svg" aria-label="My logo, a fox.">

<h1 class="appear-later" style="animation-delay: 0.7s;">kramo</h1>
<p class="appear-later" style="margin-bottom: 10vh; animation-delay: 1.2s;">Design & Free Software</p>

<p class="appear-later" style="animation-delay: 2s;">My Work</p>
<svg class="scroll-circle" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="white"/>
</svg>

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
