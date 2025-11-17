<template>

    <button @click="saveBtn">Nouvelle partie</button>

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
                name: 'chapter',
                params: { id: 1 }
            })
        }
    }
}
</script>

<style scoped></style>