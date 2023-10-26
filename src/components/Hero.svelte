<div class="hero min-h-screen flex flex-row">
    <h1 class="hero-text font-insomnia text-left text-white py-20" draggable="false"><b>The<br>Oldest<br>View<span class="font-yuri">Game</span></b></h1>
</div>

<style>
    .hero {
        background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/src/lib/assets/banner.png');
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .hero-text {
        font-size: 10vw;
        margin-left: 5vw;
    }

    .hero-text span {
        font-size: 3vw;
    }

    @media(max-width: 768px) {
        .hero-text {
            font-size: 20vw;
            margin-left: 5vw;
            text-align: center;
        }
    }
</style>