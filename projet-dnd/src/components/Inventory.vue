<template>
    <div class="inventory-wrapper">
        <button @click="isOpen = true" class="btn-open">
            îcone coffre
        </button>

        <!-- Inventaire -->
         <div v-if="isOpen" class="inventory-modal">
            <div class="inventory-content">
                <h2>Inventaire</h2>

                <ul>
                    <li v-for="item in items" :key="item.id">
                        {{ item.name }} - {{ item.img }}
                    </li>
                </ul>

                <button @click="isOpen = false" class="btn-close">
                    îcone coffre
                </button>
            </div>
         </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
            items: [
                { id: 1, name: "placeholder", img: ""},
            ]
        }
    },
    methods: {

    }
}
</script>

<style scoped></style>