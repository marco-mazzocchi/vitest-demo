<script setup lang="ts">
import Counter from './Counter.vue'
import GreatestNumber from "./GreatestNumber.vue";
</script>

<template>
  <v-container class="fill-height">
    <v-responsive
      class="align-center fill-height mx-auto"
      max-width="900"
    >
      <v-img
        class="mb-4"
        height="50"
        src="@/assets/vitest-light.fqspNQ2H.svg"
      />

      <div class="py-4" />

      <v-row>
        <v-col>
          <v-card
            class="pa-4"
            rounded="lg"
            title="Counter"
          >
            <template #text>
              <Counter />
            </template>
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-4"
            rounded="lg"
            title="Math Greatest"
          >
            <template #text>
              <GreatestNumber />
            </template>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>
