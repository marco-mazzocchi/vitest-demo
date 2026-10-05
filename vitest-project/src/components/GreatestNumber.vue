<script setup lang="ts">
import {ref} from 'vue'
import {greatest} from '../helpers/math'

const compareNumberA = ref(0)
const compareNumberB = ref(0)
</script>

<template>
  <v-text-field v-model="compareNumberA" type="number" />
  <v-text-field v-model="compareNumberB" type="number" />
  Greatest number: {{ greatest(Number(compareNumberA), Number(compareNumberB)) }}
</template>

