import { defineStore } from 'pinia';

export const useChapterStore = defineStore('chapters', {
  state: () => ({
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
    }
  }
});
