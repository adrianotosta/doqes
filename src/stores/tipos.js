import { defineStore } from 'pinia'

export const useTiposStore = defineStore('tipos', {
  state: () => ({
    selectedTipo: null,
  })
})