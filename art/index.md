---
title: kramo's art gallery
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
        <a title="Sparkling Violetear" href="/images/bird.webp">
            <img style="animation-duration: .5s;" src="/images/bird-thumb.webp">
        </a>
        <a title="Avocet" href="/images/avocet.webp">
            <img style="animation-duration: .8s;" src="/images/avocet-thumb.webp">
        </a>
        <a title="Tree" href="/images/tree.webp">
            <img style="animation-duration: 1s;" src="/images/tree-thumb.webp">
        </a>
        <a title="Portrait" href="/images/portrait.webp">
            <img style="animation-duration: 1.2s;" src="/images/portrait-thumb.webp">
        </a>
        <a title="Landscape" href="/images/landscape.webp">
            <img style="animation-duration: 1.4s;" src="/images/landscape-thumb.webp">
        </a>
    </div>
    <div>
        <a title="Cocktail" href="/images/cocktail.webp">
            <img style="animation-duration: .6s;" src="/images/cocktail-thumb.webp">
        </a>
        <a title="Cat" href="/images/cat.webp">
            <img style="animation-duration: .7s;" src="/images/cat-thumb.webp">
        </a>
        <a title="Mountain" href="/images/mountain.webp">
            <img style="animation-duration: .9s;" src="/images/mountain-thumb.webp">
        </a>
        <a title="Clouds" href="/images/clouds.webp">
            <img style="animation-duration: 1.1s;" src="/images/clouds-thumb.webp">
        </a>
        <a title="Fox" href="/images/fox.webp">
            <img style="animation-duration: 1.3s;" src="/images/fox-thumb.webp">
        </a>
    </div>
</div>

{% include cc-by-sa.html %}