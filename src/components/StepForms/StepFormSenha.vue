<script setup>
import InputSenha from '../Inputs/InputSenha.vue'
</script>

<template>
  <section :class="$style.senha">
    <h2 :class="$style.title">Senha de acesso</h2>
    <InputSenha />
  </section>
</template>

<style module>
@import '../../assets/styles.modules.css';
.senha {
  composes: context;
}
</style>
