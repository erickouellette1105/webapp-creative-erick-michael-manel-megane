<template>

    <button @click="saveBtn"></button>

</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        /* Méthode pour accéder aux sauvegarde */
        saveBtn() {
            this.$router.push({
                name: 'sauvegardes',
                params: { id: this.nextChapterId }
            })
        }
    }
}
</script>

<style scoped></style>