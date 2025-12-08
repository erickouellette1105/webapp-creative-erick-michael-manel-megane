<template>
    <!-- Bouton toggle des crédit-->
    <button @click="toggleCredit" class="btn-toggle">
        <img src="/images/info.svg" alt="credit" class="credit-img" loading="lazy">
    </button>

    <!-- Modale des crédits-->
    <div v-if="isOpen" class="credit-modal">

        <div class="credit-content">
            <h2>Équipe</h2>

            <ul class="credit">
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

.credit{
    display: grid;
    gap: 20px;

    justify-content: center;
    font-family: Medieval ;
    font-size: 1.5rem;
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
@media (max-width: 375px) {
    .credit-img {
    width: 50px;
}
}


.credit-img:hover {
    transform: scale(1.1);
    cursor: url('/src/assets/cur/PrecisionSelect.cur'), auto;
}


.credit-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #6b0f1a;
    z-index: 999;
}

.credit-content {
    color: white;
    display: grid;
    justify-content: center;
    align-items: center;
    margin-top: 7vw;
    gap: 50px;
}

ul {

    text-align: center;
}

h2 {
    font-size: 5rem;
    margin-top: 20%;
}
</style>