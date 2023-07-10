---
title: socials
---

<style>
    @keyframes bounce {
        from {transform: translateY(5em); opacity: 0;}
        50% {transform: translateY(-0.5em); opacity: 100;}
        to {transform: translateY(0em); opacity: 100;}
    }

    .social-buttons {
        display: flex;
        flex-flow: column nowrap;
        gap: 1em;
    }

    .social-buttons div {
        width: 35em;
        max-width: 100%;
        margin: 0 auto;
        border-radius: 10em;
        transition: transform .1s;
        text-align: center;
        animation-name: bounce;
    }

    .social-buttons img{
        height: 1.2em;
        display: inline;
        border-radius: 0;
        vertical-align: text-top;
    }

    .social-buttons a {
        color: #fff;
        text-decoration:none;
        display:block;
        width:100%;
        height:100%;
        padding: 1em 0em;
    }

    .social-buttons div:hover {
        transform: scale(1.05);
    }
</style>

<div class="social-buttons">
    <div style="animation-duration: .5s; background-color: #6364ff">
        <a href="https://fosstodon.org/@kramo">
            <img src="/images/mastodon-icon.svg">
            mastodon
        </a>
    </div>
    <div style="animation-duration: .6s; background-color: #0dbd8b">
        <a href="https://matrix.to/#/@kramo:matrix.org">
            <img src="/images/matrix-icon.svg">
            matrix
        </a>
    </div>
    <div style="animation-duration: .7s; background-color: #757e88">
        <a href="https://github.com/kra-mo">
            <img src="/images/github-icon.svg">
            github
        </a>
    </div>
    <div style="animation-duration: .8s; background-color: #fc6d26">
        <a href="https://gitlab.com/kra-mo">
            <img src="/images/gitlab-icon.svg">
            gitlab
        </a>
    </div>
    <div style="animation-duration: .9s; background-color: #4a86cf">
        <a href="https://gitlab.gnome.org/kramo">
            <img src="/images/gnome-icon.svg">
            gnome gitlab
        </a>
    </div>
    <div style="animation-duration: 1s; background-color: #7276ff">
        <a href="https://pixelfed.social/kramo">
            <img src="/images/pixelfed-icon.svg">
            pixelfed
        </a>
    </div>
    <div style="animation-duration: 1.1s; background-color:  #ea4c89">
        <a href="https://dribbble.com/kramo">
            <img src="/images/dribbble-icon.svg">
            dribbble
        </a>
    </div>
</div>