import { defineStore } from 'pinia';
import chapters from '../data/chapitres-obj.json'

export const usePlayerStore = defineStore('player', {
  state: () => ({
    username: '',        
    inventory: [] , //tableau vide
    choiceHistory: []      
  }),

  getters: {
    itemCount(state) {
      return state.inventory.length;
    }
  },

  actions: {
    setUsername(name) {
      this.username = name;
    },

    /*ajout du objet dans l'inventaire*/
    addItem(item) {
      this.inventory.push(item);
    },

    /*removeItem(item) {
      this.inventory = this.inventory.filter(i => i !== item);
    },*/


    /*sert à enlevé les objet de l'inventaire*/
    clearInventory() {
      this.inventory = [];
    },

    //  Méthode d'enregistrement des choix et données vers la page statistiques
        recordChoice(chapterId, text, inventory ) {
        this.choiceHistory.push({
          chapterId,
          text,
          inventory
        });
      },

      clearRecord() {
        this.choiceHistory = [];
      }
  }
});
