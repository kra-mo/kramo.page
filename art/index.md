---
title: kramo's Art Gallery
description: Art I made in my free time.
---

<style>
    @keyframes bounce {
        from {transform: translateY(10em) scale(1.1, 0.9); opacity: 0;}
        50% {transform: translateY(-0.5em); opacity: 100;}
        to {transform: translateY(0em); opacity: 100;}
    }

    #artwork {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    }

    #artwork img {
        width: 30em;
        display: flex;
        margin-bottom: 2.5em;
        animation-name: bounce;
    }
</style>

<div id="artwork">
    <div>
        <img loading="lazy" title="Sparkling Violetear" style="animation-duration: .5s;" src="/images/violetear.jpg">
        <img loading="lazy" title="Avocet" style="animation-duration: .8s;" src="/images/avocet.jpg">
        <img loading="lazy" title="Cat" style="animation-duration: 1s;" src="/images/cat.jpg">
        <img loading="lazy" title="Portrait" style="animation-duration: 1.2s;" src="/images/portrait.jpg">
        <img loading="lazy" title="Landscape" style="animation-duration: 1.4s;" src="/images/landscape.jpg">
    </div>
    <div>
        <img loading="lazy" title="Cocktail" style="animation-duration: .6s;" src="/images/cocktail.jpg">
        <img loading="lazy" title="Chicken" style="animation-duration: .7s;" src="/images/chicken.jpg">
        <img loading="lazy" title="Mountain" style="animation-duration: .9s;" src="/images/mountain.jpg">
        <img loading="lazy" title="Clouds" style="animation-duration: 1.1s;" src="/images/clouds.jpg">
        <img loading="lazy" title="Fox" style="animation-duration: 1.3s;" src="/images/fox.jpg">
    </div>
</div>

{% include cc-by-sa.html %}