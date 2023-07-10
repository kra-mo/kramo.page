---
title: kramo
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
        90% {opacity: 1;}
    }

    @keyframes appear {
        from {opacity: 0;}
        to {opacity: 100;}
    }

    @keyframes animate-path {
        from {stroke-dashoffset: 2300;}
        to {stroke-dashoffset: 0;}
    }

    .arrow {
        margin-bottom: -1.5em;
        opacity: 0;
        animation: arrow-slide 4s infinite, arrow-pulse 4s infinite;
    }

    .appear-later {
        opacity: 0;
        animation: appear 0.5s forwards;
    }

    #animated-path {
        stroke-dasharray: 2385;
        animation: animate-path 1s forwards;
    }

    body {
        opacity: initial;
        animation: initial;
    }

    img {
        width: 35em;
    }
</style>

<svg id="animated-path" style="margin-top: 15vh" width="90" height="83.229" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <path id="a" stroke="var(--fg)" stroke-width="65"  fill="none" d="m0 0 250 250L500 0H0v250l250 250h250L250 250M0 250v250h250"/>
    </defs>
    <use xlink:href="#a" transform="translate(4.788 4.788) scale(.1473)"/>
</svg>


<h1 class="appear-later" style="animation-delay: 0.7s">kramo</h1>
<p class="appear-later" style="margin-bottom: 20vh; animation-delay: 1.2s;">design & open source</p>

<p class="appear-later" style="animation-delay: 2.5s;">my work</p>

<br>
<p class="arrow" style="animation-delay: .2s;">v</p>
<p class="arrow" style="animation-delay: .1s;">v</p>
<p class="arrow" style="margin-bottom: 35vh;">v</p>

### cartridges

[check out the project](/cartridges/)

[![cartridges](/images/cartridges.webp)](/cartridges/)

<br>
<br>

### app icons

[view icons i designed](/app-icon-design/)

[![app icons](/images/app-icon-design.svg)](/app-icon-design/)

<br>
<br>

### vanilla os wallpapers

[download here](/vanilla-backgrounds/)

[![vanilla os wallpapers](/images/vanilla-default.svg)](/vanilla-backgrounds/)

<br>
<br>

### qucik touchpad toggle

[check out the extension](/quick-touchpad-toggle/)

[![quick touchpad toggle](/images/quick-touchpad-toggle.webp)](/quick-touchpad-toggle/)

<br>
<br>

### my art

[view the gallery](/art/)

[![my art](/images/cocktail-thumb.webp)](/art/)