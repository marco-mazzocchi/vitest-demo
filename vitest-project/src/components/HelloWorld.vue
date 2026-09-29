<script setup lang="ts">
import {ref} from 'vue'

const counter = ref(1)
</script>

<template>
  <v-container class="fill-height">
    <v-responsive
      class="align-center fill-height mx-auto"
      max-width="900"
    >
      <v-img
        class="mb-4"
        height="150"
        src="@/assets/logo.png"
      />

      <div class="text-center">
        <h1 class="text-h2 font-weight-bold">Vuetify</h1>
      </div>

      <div class="py-4" />

      <v-row>
        <v-col cols="12">
          <v-card
            class="py-4"
            color="surface-variant"
            rounded="lg"
            variant="outlined"
          >
            <template #text>
              <h1>Get started</h1>
              Counter {{ counter }}
              <v-btn @click="counter++">Increment</v-btn>
            </template>

            <v-btn to="/configurator">Go To Configurator</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>
