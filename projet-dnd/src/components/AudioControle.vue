<template>
    <header>
        <img class="audio" src="../assets/img/audio_icon.png" alt="audio"></img>
        <audio controls autoplay>
            <source class="audio" src="../assets/sons/fantasy-music.mp3" type="audio/mpeg">
        </audio>
    </header>
</template>  


<style scoped>
.audio {
    position: absolute;
    top: 50px;
    left: 30px;
    transition: transform 0.2s;
    width: clamp(30px, 10vw, 80px);
}


.audio:hover {
    transform: scale(1.1);
    cursor: url('/src/assets/cur/PrecisionSelect.cur'), auto;
}
</style>