<script setup>
import { Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const rules = yup.string().required('campo obrigatório')
</script>

<template>
  <label for="razao-social">Razão social</label>
  <Field name="razao-social" v-slot="{ errors, field }" :rules="rules" as="">
    <input 
      :class="[errors.length ? $style.inputError : '', $style.input]"
      id="razao-social"
      name="razao-social"
      type="text"
      v-bind="field">
  </Field>
  <ErrorMessage :class="$style.error" name="razao-social" />
  <label for="cnpj" :class="$style.cnpj">cnpj</label>
  <Field name="cnpj" v-slot="{ errors, field }" :rules="rules" as="">
    <input 
      :class="[errors.length ? $style.inputError : '', $style.input]"
      id="cnpj"
      name="cnpj"
      type="text"
      v-bind="field">
  </Field>
  <ErrorMessage :class="$style.error" name="cnpj" />
  <label for="data-de-abertura" :class="$style.cpf">Data de abertura</label>
  <Field name="data-de-abertura" v-slot="{ errors, field }" :rules="rules" as="">
    <input 
      :class="[errors.length ? $style.inputError : '', $style.input]"
      id="data-de-abertura"
      name="data-de-abertura"
      type="text"
      v-bind="field">
  </Field>
  <ErrorMessage :class="$style.error" name="data-de-abertura" />
  <label for="telefone">Telefone</label>
  <Field name="telefone" v-slot="{ errors, field }" :rules="rules" as="">
    <input 
      :class="[errors.length ? $style.inputError : '', $style.input]"
      id="telefone"
      name="telefone"
      type="text"
      v-bind="field">
  </Field>
  <ErrorMessage :class="$style.error" name="telefone" />
</template>

<style module>
@import '../../assets/styles.modules.css';

.cnpj {
  composes: sigla;
}
</style>
