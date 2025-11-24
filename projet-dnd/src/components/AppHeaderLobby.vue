<template>
<img class="audio" src="../assets/img/audio_icon.png" alt="audio"></img>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style scoped>
.audio {
    width: 80px;
    top: 25px;
    position: absolute;
    left: 25px;
}

/* medium */
@media (max-width: 768px) {
    .audio {
        width: 45px;
    }
}

/* petit */
@media (max-width: 480px) {
    .audio {
        width: 50px;
    }
}


.audio:hover {
    transform: scale(1.1);
    cursor: url('/src/assets/cur/PrecisionSelect.cur'), auto;
}

</style>

import { usePlayerStore } from '@/stores/player';

const player = usePlayerStore();

player.setUsername('');
player.addItem('');
console.log(player.inventory);  
