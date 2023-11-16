<script setup>
import { Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const rules = yup.string().required('campo obrigatório')
</script>

<template>
  <label for="nome">Nome</label>
  <Field name="nome" v-slot="{ errors, field }" :rules="rules">
    <input 
      :class="[errors.length ? $style.inputError : '', $style.input]"
      id="nome"
      name="nome"
      type="text"
      v-bind="field">
  </Field>
  <!-- <Field
    :class="$style.input"
    :rules="rules"
    id="nome"
    name="nome"
    type="text" />  -->
  <ErrorMessage :class="$style.error" name="nome" />
  <label for="cpf" :class="$style.cpf">cpf</label>
  <Field name="cpf" v-slot="{ errors, field }" :rules="rules" as="">
    <input 
      :class="[errors.length ? $style.inputError : '', $style.input]"
      id="cpf"
      name="cpf"
      type="text"
      v-bind="field">
  </Field>
  <ErrorMessage :class="$style.error" name="cpf" />
  <label for="data-de-nascimento">Data de nascimento</label>
  <Field name="data-de-nascimento" v-slot="{ errors, field }" :rules="rules" as="">
    <input 
      :class="[errors.length ? $style.inputError : '', $style.input]"
      id="data-de-nascimento"
      name="data-de-nascimento"
      type="text"
      v-bind="field">
  </Field>
  <ErrorMessage :class="$style.error" name="data-de-nascimento" />
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

.cpf {
  composes: sigla;
}
</style>
