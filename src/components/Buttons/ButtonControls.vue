<script setup>
</script>

<template>
  <div :class="$style.controls">
    <button type="button" id="prevBtn" :class="$style.back">voltar</button>
    <button type="button" id="nextBtn" :class="$style.continue">continuar</button>
  </div>
</template>

<style module>
.controls {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));
  gap: 4%;
  margin-top: 16px;
}

.btn {
  border-radius: 4px;
  cursor: pointer;
  display: block;
  padding: 8px;
  text-transform: capitalize;
}

.continue {
  composes: btn;
  background-color: #faba0a;
  border: none;
  color: #fff;
}

.back {
  composes: btn;
  background-color: #fff;
  border: solid 1px #faba0a;
  color: #faba0a;
}
</style>
