import { defineStore } from 'pinia';
import chapters from '../data/chapitres-obj.json'

export const usePlayerStore = defineStore('player', {
  state: () => ({
    username: '',        
    inventory: [] ,
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

    addItem(item) {
      this.inventory.push(item);
    },

    /*removeItem(item) {
      this.inventory = this.inventory.filter(i => i !== item);
    },*/

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
      }
  }
});
