<script setup>
import InputGreetings from '../Inputs/InputGreetings.vue';
import StepFormRevisaoTipo from './StepFormRevisaoTipo.vue';
import InputSenha from '../Inputs/InputSenha.vue'
</script>

<template>
  <section :class="$style.revisao">
    <h2 :class="$style.title">Revise suas informações</h2>
    <InputGreetings />
    <StepFormRevisaoTipo />
    <InputSenha />
  </section>
</template>

<style module>
@import '../../assets/styles.modules.css';
.revisao {
  composes: context;
}
</style>
