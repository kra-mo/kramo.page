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
        from {transform: scale(2); opacity: 0;}
        to {transform: scale(5); opacity: 1;}
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
        transform: scale(5);
        animation: logo 0.5s;
        animation-timing-function: cubic-bezier(0.8, 0, 0, 1.4);
        transition: transform .1s;
    }

    #logo:hover {
        transform: scale(5.5);
    }

    #logo:active {
        transform: scale(5);
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
            transform: scale(5);
        }
        #logo:active {
            transform: scale(5);
        }
    }
</style>

<svg id="logo" style="margin-bottom: 1.8em; margin-top: 20vh;" role="img" aria-label="My logo, a fox." width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="16" height="16" rx="8" fill="var(--accent)"/>
    <path d="M4.752 9.644 8 11.5l3.248-1.856a.5.5 0 0 0 .252-.434V5.517a.3.3 0 0 0-.449-.26L8.1 6.942a.2.2 0 0 1-.198 0L4.949 5.256a.3.3 0 0 0-.449.26V9.21a.5.5 0 0 0 .252.434Z" fill="#fff"/>
</svg>


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

[Check out the Extension](/quick-touchpad-toggle/)

[![Quick Touchpad Toggle](/images/quick-touchpad-toggle.webp)](/quick-touchpad-toggle/)
