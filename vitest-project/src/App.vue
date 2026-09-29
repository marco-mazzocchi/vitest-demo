<template>
  <v-app>
    <v-main>
      <app-bar />
      <router-view v-slot="{ Component }">
        <v-fade-transition hide-on-leave>
          <component :is="Component" />
        </v-fade-transition>
      </router-view>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import AppBar from './components/AppBar.vue'
</script>
