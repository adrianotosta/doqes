<script setup>
import InputGreetings from '../Inputs/InputGreetings.vue';
</script>

<template>
  <section :class="$style.greetings">
    <h2 :class="$style.title">Seja bem-vindo(a)</h2>
    <InputGreetings />
  </section>
</template>

<style module>
@import '../../assets/styles.modules.css';
.greetings {
  composes: context;
}
</style>
