<template>

    <button @click="startBtn" class="saveButton">Commencer</button>

</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        /* Méthode pour envoyer à la page des sauvegardes */
        startBtn() {
            this.$router.push({
                name: 'sauvegardes',
                
            })
        }
    }
}
</script>

<style scoped>
    .saveButton {
        /* Flexible instead of fixed width/height */
    font-size: 2rem;             /* Normal text size */
    color: white;
    background-color: #960002;
    border: 5px solid #FF4649;
    border-radius: 20px;
    cursor: pointer;
}

/* Medium screens */
@media (max-width: 768px) {
    .saveButton {
        font-size: 0.9rem;
        padding: 0.7rem 1.3rem;
        border-width: 4px;
    }
}

/* Small mobile */
@media (max-width: 480px) {
    .saveButton {
        font-size: 0.8rem;
        padding: 0.6rem 1.1rem;
        border-width: 3px;
        border-radius: 16px;
    }
}


    .saveButton:hover{
        transform: scale(1.1);
    }
</style>

