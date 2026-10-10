<script setup lang="ts">
import type {Reactive} from 'vue'
import {computed, reactive} from 'vue'
import defaultFilters from './filters'
import defaultToppings from './toppings'
import type {Filter} from './filters'
import type {Topping} from './toppings'

// STATES

const filters: Reactive<Filter[]> = reactive(defaultFilters)

const toppings: Reactive<Topping[]> = reactive(defaultToppings)

// COMPUTED

const visibleToppings = computed(() => {
  return toppings.filter(t => {
    const activeFilters = filters.filter(f => f.value)
    if (activeFilters.length > 0) {
      return activeFilters.every((f) => t[f.key])
    }
    return true
  })
})

const chosenToppings = computed(() => {
  return toppings.filter(t => t.selected)
})

// METHODS

function onFilterChange(key: string, value: boolean) {
  const filter = filters.find(f => f.key === key)
  if (!filter) return
  filter.value = value
}

function onToppingChange(toppingName: string, isSelected: boolean) {
  const topping = toppings.find(t => t?.name === toppingName)
  if (!topping) return
  topping.selected = isSelected
}

function emptyToppings() {
  toppings.forEach(t => t.selected = false)
}

</script>

<template>
  <v-container fluid class="fill-height">
    <v-row>
      <v-col cols="12">
        <v-toolbar density="compact" title="Filtri">
          <v-checkbox-btn
            v-for="filter in filters"
            :key="filter.key"
            :label="filter.name"
            :model-value="filter.value"
            @update:model-value="onFilterChange(filter.key, $event)"
          />
        </v-toolbar>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <v-card>
          <v-card-title class="d-flex align-center justify-space-between">
            <span>Condimenti</span>
            <v-icon-btn icon="mdi-trash-can" @click="emptyToppings"/>
          </v-card-title>
          <v-card-text>
            <v-list density="compact">
              <v-list-item
                v-for="(topping, index) in visibleToppings"
                :key="topping.name"
                :value="index"
                @click="onToppingChange(topping.name, !topping.selected)"
              >
                <v-checkbox-btn
                  :model-value="topping.selected"
                  :label="topping.name"
                  @update:model-value="onToppingChange(topping.name, $event)"
                />
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="d-flex justify-center">
        <div id="images-container">
          <img src="/src/assets/ingredienti/base.png" style="z-index: 1" alt="base"/>
          <img v-for="topping in chosenToppings" :src="'/src/assets/ingredienti/' + topping.name.toLowerCase() + '.png'"
               :alt="topping.name" :style="{ zIndex: topping.zIndex || 1 }"/>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
#images-container {
  position: relative;
  width: 100%;
  max-width: 600px;
}

#images-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
