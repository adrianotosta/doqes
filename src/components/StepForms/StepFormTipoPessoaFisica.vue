<script setup>
import InputPessoaFisica from '../Inputs/InputTipoPessoaFisica.vue';
</script>

<template>
  <section :class="$style.pf">
    <h2 :class="$style.title">Pessoa física</h2> 
    <InputPessoaFisica />
  </section>
</template>

<style module>
@import '../../assets/styles.modules.css';
.pf {
  composes: context;
}
</style>
