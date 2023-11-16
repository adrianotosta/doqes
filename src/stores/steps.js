import { defineStore } from 'pinia'
import http from '../apis/apis'

export const useStepsStore = defineStore('steps', {
  state: () => ({
    currentStep: 0,
    flow: [
      'StepFormGreetings',
      'StepFormTipo',
      'StepFormSenha', 
      'StepFormRevisao',
    ],
  }),
  actions: {
    async create(data) {
      try {
        const response = await http.post('/registration', data)
        alert(response.data.status)
      } catch(error) {

      }
    }
  }
})