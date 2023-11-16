<script>
import { Form as VeeForm } from 'vee-validate';
import { mapWritableState, mapActions } from 'pinia'
import { useStepsStore } from '../../stores/steps'
import StepFormRevisao from '../StepForms/StepFormRevisao.vue'
import StepFormSenha from '../StepForms/StepFormSenha.vue'
import StepFormTipo from '../StepForms/StepFormTipo.vue'
import StepFormGreetings from '../StepForms/StepFormGreetings.vue'
import ButtonContinuar from '../Buttons/ButtonContinuar.vue'
import ButtonVoltar from '../Buttons/ButtonVoltar.vue'

export default {
  components: {
    VeeForm,
    StepFormRevisao,
    StepFormSenha,
    StepFormTipo,
    StepFormGreetings,
    ButtonContinuar,
    ButtonVoltar
  },
  computed: {
    ...mapWritableState(useStepsStore, ['currentStep', 'flow']),
    step() {
      return this.flow[this.currentStep]
    }
  },
  methods: {
    ...mapActions(useStepsStore, ['create']),
    onSubmit(values) {
      if(!isTheLastStep.call(this)) {
        this.currentStep = next.call(this)
        return
      }

      this.create(values)
    }
  }
}

function isTheLastStep() {
  return this.currentStep === this.flow.length - 1
}

function next() {
  return this.currentStep + 1
}
</script>

<template>
  <VeeForm
    keep-values
    v-slot="{ handleSubmit }"
    as="">
    <form
      @submit.prevent="handleSubmit(onSubmit)"
      :class="$style.form">
      <div :class="$style.content">
        <component :is="step" />
        <div :class="$style.controls">
          <ButtonVoltar />
          <ButtonContinuar />
        </div>
      </div>
    </form>
  </VeeForm>
</template>

<style module>
.form {
  display: grid;
  font-family: Arial, Helvetica, sans-serif;
  justify-content: center;
  height: 100vh;
}

.content {
  width: 400px;
}

.controls {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));
  gap: 4%;
  margin-top: 16px;
}
</style>