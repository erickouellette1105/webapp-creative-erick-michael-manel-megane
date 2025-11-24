import { defineStore } from 'pinia';

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
    }
  }
});
