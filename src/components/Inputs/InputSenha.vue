<script setup>
import { Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const rules = yup.string().required('campo obrigatório')
</script>

<template>
  <label for="senha">Sua senha</label>
  <Field name="senha" v-slot="{ errors, field }" :rules="rules" as="">
    <input
      :class="[errors.length ? $style.inputError : '', $style.input]"
      id="senha"
      name="senha"
      type="text"
      v-bind="field">
  </Field>
  <ErrorMessage :class="$style.error" name="senha" />
</template>

<style module>
@import '../../assets/styles.modules.css';
</style>
