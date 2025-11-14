<template>
    <div class="shell">
        <div class="progress-bar">
            <span> progress</span>
        </div>
    </div>
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
.shell {
    height: 20px;
    width: 450px;
    border: 1px solid grey;
    border-radius: 13px;
    padding: 5px;
}

.bar {
    background: linear-gradient(to right, #B993D6, #8CA6DB);
    height: 20px;
    width: 15px;
    border-radius: 9px;

    span {
        float: right;
        padding: 4px 5px;
        color: #fff;
        font-size: 0.7em
    }
}
</style>