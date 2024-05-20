---
title: About me
description: About me, contact information and website license.
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

    @media (prefers-reduced-motion) {
        #jump {
            animation: initial;
        }
        #jump:hover {
            transform: initial;
        }
    }
</style>

<svg role="img" alt="a happy stick figure" id="jump" xmlns="http://www.w3.org/2000/svg" width="69" height="170" fill="none">
    <path stroke="var(--fg)" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m5.501 168 26-37m0 0V60m0 71 27.5 30m-27.5-101c-22 0-41.501-25.524-20-46 42-40 88.499 41.5 20 46Zm-22 14 49.5 5M22 28.5c3.167 1 11.3 1.9 18.5-2.5"/>
    <circle cx="15" cy="29" r="2" fill="var(--fg)"/>
    <circle cx="48" cy="24" r="2" fill="var(--fg)"/>
</svg>

## Hey, I'm kramo.

<p style="margin: auto; text-align: justify; text-align-last: center; hyphens: auto; max-width:40ch;">
    I'm an amateur UX designer and developer working on free software. You can contact me at my <a href="/links/">socials</a> or via <a href="&#109;a&#105;&#108;&#116;&#111;&#58;&#99;&#111;&#110;&#116;&#97;&#99;&#116;&#64;&#107;&#114;&#97;&#109;o&period;&#112;&#97;&#103;&#101;">email</a>. If you wish to support my work, you can do so via <a href="https://github.com/sponsors/kra-mo"><span style="hyphens: manual;">GitHub Sponsors</span></a>&nbsp;❤️
</p>

<sub>This site is licensed under the [AGPLv3](https://www.gnu.org/licenses/agpl-3.0.html). The source code is available [on GitHub](https://github.com/kra-mo/kramo.page).</sub>
