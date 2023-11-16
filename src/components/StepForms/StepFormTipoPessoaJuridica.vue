<script setup>
import InputPessoaJuridica from '../Inputs/InputTipoPessoaJuridica.vue';
</script>

<template>
  <section :class="$style.pf">
    <h2 :class="$style.title">Pessoa jurídica</h2> 
    <InputPessoaJuridica />
  </section>
</template>

<style module>
@import '../../assets/styles.modules.css';
.pf {
  composes: context;
}
</style>
