<script setup lang="ts">
import {ref} from "vue";

const counter = ref(1)
</script>

<template>
  <div class="text-center">
    <div class="mb-2 text-display-large" data-testid="counter">{{ String(counter) }}</div>
    <v-btn color="primary" @click="counter++">Increment</v-btn>
  </div>
</template>

<style scoped>

</style>
