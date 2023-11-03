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

    @media (prefers-reduced-motion) {
        #artwork img {
            animation-name: initial;
        }
    }
</style>

<div id="artwork">
    <div>
        <img title="Sparkling Violetear" style="animation-duration: .5s;" src="/images/violetear.webp">
        <img title="Avocet" style="animation-duration: .8s;" src="/images/avocet.webp">
        <img title="Cat" style="animation-duration: 1s;" src="/images/cat.webp">
        <img title="Portrait" style="animation-duration: 1.2s;" src="/images/portrait.webp">
        <img title="Landscape" style="animation-duration: 1.4s;" src="/images/landscape.webp">
    </div>
    <div>
        <img title="Cocktail" style="animation-duration: .6s;" src="/images/cocktail.webp">
        <img title="Chicken" style="animation-duration: .7s;" src="/images/chicken.webp">
        <img title="Mountain" style="animation-duration: .9s;" src="/images/mountain.webp">
        <img title="Clouds" style="animation-duration: 1.1s;" src="/images/clouds.webp">
        <img title="Fox" style="animation-duration: 1.3s;" src="/images/fox.webp">
        <img title="Tree" style="animation-duration: 1.5s;" src="/images/tree.webp">
    </div>
</div>

{% include cc-by-sa.html %}