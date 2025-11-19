<template>
    <!-- Bouton toggle des crédit-->
    <button @click="toggleCredit" class="btn-toggle">
        <img src="../assets/img/info.svg" alt="credit" class="credit-img">
    </button>

    <!-- Modale des crédits-->
    <div v-if="isOpen" class="credit-modal">

        <div class="credit-content">
            <h2>Crédits</h2>

            <ul>
                <li v-for="cred in cred" :key="cred.id">
                    {{ cred.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
            cred: [
                { id: 1, name: "Michael Un Dupré", img: "" },
                { id: 1, name: "Érick Ouellette", img: "" },
                { id: 1, name: "Ranger Mégane", img: "" },
                { id: 1, name: "Manel Yaya", img: "" },
            ]
        }
    },
    methods: {
        toggleCredit() {
            this.isOpen = !this.isOpen;
        }
    }
}
</script>

<style scoped>
.btn-toggle {
    position: absolute;
    right: 50px;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    z-index: 2000;
    top: 20px;
}

.credit-img {
    width: 60px;
    transition: transform 0.2s;
    margin-top: 10px;
    margin-right: -10px;

}

/* Écran médium */
@media (max-width: 768px) {
    .credit-img {
    width: 40px;
}
}

/* Écran petit */
@media (max-width: 480px) {
    .credit-img {
    width: 15px;
}
}


.credit-img:hover {
    transform: scale(1.1);
}


.credit-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: 999;
}

.credit-content {
    color: black;
    display: grid;
    justify-content: center;
    align-items: center;
 
}

ul {
    list-style-type: none;
}

h2 {
    font-size: 7rem;
}
</style>