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
    width: 5vw;
}

.audio:hover {
    transform: scale(1.1);
}

</style>

import { usePlayerStore } from '@/stores/player';

const player = usePlayerStore();

player.setUsername('');
player.addItem('');
console.log(player.inventory);  
