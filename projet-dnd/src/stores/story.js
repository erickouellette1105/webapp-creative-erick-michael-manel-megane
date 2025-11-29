import { defineStore } from 'pinia'
import chapters from '../data/chapitres-obj.json'
import { usePlayerStore } from './player'


export const useStoryStore = defineStore('story', {
  state: () => ({
    storyData: chapters,
    currentChapter: 1,       
    totalChapters: 10,       
    unlockedChapters: [1],   
  }),

  getters: {
    isLastChapter(state) {
      return state.currentChapter === state.totalChapters;
    },

    canGoNext(state) {
      return state.currentChapter < state.totalChapters;
    },

    canGoBack(state) {
      return state.currentChapter > 1;
    }
  },

  actions: {

    choose(choice) {
      const player = usePlayerStore()

      // ajout d'item dans l'inventaire
      if (choice.inventory) {
        player.addItem({
          name: choice.inventory,
          description: choice.description,
          id: Date.now()
        })
      }

      this.currentChapter = Number(choice.nextChapter)

      //debloque de chapitre
      if (!this.unlockedChapters.includes(this.currentChapter)) {
        this.unlockedChapters.push(this.currentChapter)
      }
    },



    goToChapter(chapter) {
      if (this.unlockedChapters.includes(chapter)) {
        this.currentChapter = chapter;
      }
    },

    nextChapter() {
      if (this.canGoNext) {
        this.currentChapter++;
        if (!this.unlockedChapters.includes(this.currentChapter)) {
          this.unlockedChapters.push(this.currentChapter);
        }
      }
    },

    previousChapter() {
      if (this.canGoBack) {
        this.currentChapter--;
      }
    },

    unlockChapter(chapter) {
      if (!this.unlockedChapters.includes(chapter)) {
        this.unlockedChapters.push(chapter);
      }
    },

    resetChapters() {
      this.currentChapter = 1;
      this.unlockedChapters = [1];

      const player = usePlayerStore();
      player.clearInventory();
    }
  }
});
