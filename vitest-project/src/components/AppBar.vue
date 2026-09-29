<script setup lang="ts">

</script>

<template>
  <v-app-bar>
    <template v-slot:prepend>
<!--      <v-app-bar-nav-icon></v-app-bar-nav-icon>-->
      <v-btn to="/" icon="mdi-home"></v-btn>
    </template>

    <v-app-bar-title>Vitest</v-app-bar-title>

    <template v-slot:append>
      <v-btn to="/configurator" icon="mdi-cog"></v-btn>
    </template>
  </v-app-bar>
</template>

<style scoped>

</style>
