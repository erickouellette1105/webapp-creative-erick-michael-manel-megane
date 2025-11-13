<template>
    <div class="spinner" v-if="show"></div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {

    },
    props: {
       type: Boolean,
       default: true 
    }
}
</script>

<style scoped>
    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
</style>