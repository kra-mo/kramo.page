---
title: about me
---

<style>
    @keyframes jump {
        from {transform: translateY(-12vh); opacity: 0;}
        30% {transform: translateY(-8vh) scale(0.6, 1.2); opacity: 1; animation-timing-function: ease-in;}
        40% {transform: translateY(5vh) scale(3, 0.4);}
        60% {transform: translateY(-8vh) scale(0.9, 1.1); animation-timing-function: ease-in;}
        70% {transform: translateY(-5vh);}
        80% {transform: translateY(2vh) scale(1.3, 0.8);}
        to {transform: translateY(0vh);}
    }

    #jump {
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10vh;
        transition: transform 1s;
        animation: jump 1.5s;
    }

    #jump:hover {
        transform: rotate(360deg);
    }
</style>

<svg id="jump" xmlns="http://www.w3.org/2000/svg" width="69" height="170" fill="none">
    <path stroke="var(--fg)" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m5.501 168 26-37m0 0V60m0 71 27.5 30m-27.5-101c-22 0-41.501-25.524-20-46 42-40 88.499 41.5 20 46Zm-22 14 49.5 5M22 28.5c3.167 1 11.3 1.9 18.5-2.5"/>
    <circle cx="15" cy="29" r="2" fill="var(--fg)"/>
    <circle cx="48" cy="24" r="2" fill="var(--fg)"/>
</svg>

# hi, im kramo

<br>

i make software and art

you can contact me at my [socials](/social/) or via <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#99;&#111;&#110;&#116;&#97;&#99;&#116;&#64;&#107;&#114;&#97;&#109;&#111;&#46;&#104;&#117;">email</a>

<br>
<br>

the source code for this website is available [here](https://github.com/kra-mo/kramo.hu)