<script>
import { Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { mapWritableState } from 'pinia'
import { useTiposStore } from '../../stores/tipos'

export default {
  components: {
    ErrorMessage,
    Field
  },
  computed: {
    ...mapWritableState(useTiposStore, {
      tipo: 'selectedTipo'
    })
  },
  setup() {
    const rulesEmail = yup.string().required('campo obrigatório').email()
    const rulesTipo = yup.string().required('campo obrigatório')

    return { rulesEmail, rulesTipo }
  }
}
</script>

<template>
  <label for="email">Endereço de email</label>
  <Field name="email" v-slot="{ errors, field }" :rules="rulesEmail" as="">
    <input 
      :class="[errors.length ? $style.inputError : '', $style.input]"
      id="email"
      name="email"
      type="text"
      v-bind="field">
  </Field>
  <ErrorMessage :class="$style.error" name="email" />
  <div :class="$style.radioButtons">
  <label for="pf">
    <Field name="tipo"
      :rules="rulesTipo"
      id="pf"
      type="radio"
      value="pf"
      v-model="tipo"
       />
    Pessoa física
  </label>
  <label for="pj">
    <Field name="tipo"
      :rules="rulesTipo"
      id="pj"
      type="radio"
      value="pj"
      v-model="tipo"
       />
    Pessoa jurídica
  </label>
  <ErrorMessage :class="$style.error" name="tipo" /> 
  </div>
</template>

<style module>
@import '../../assets/styles.modules.css';

.radioButtons {
  display: grid;
  grid-template-columns: repeat(2, auto);
  margin: 16px 0;
}
</style>