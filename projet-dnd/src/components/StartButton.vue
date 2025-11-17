<template>

    <button @click="saveBtn" label="Commencer"></button>

</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        saveBtn() {
            this.$router.push({
                name: 'SaveView',
                
            })
        }
    }
}
</script>

<style scoped></style>