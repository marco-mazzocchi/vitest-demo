<script setup lang="ts">
import { computed, reactive } from 'vue'
import type { Reactive } from 'vue'

type Topping = {
  name: string
  selected: boolean
  glutenFree: boolean
  lactoseFree: boolean
  vegetarian: boolean
  vegan: boolean
  zIndex?: number
}

type Filter = {
  key: string
  name: string
  value: boolean
}

const glutenFreeKey = 'glutenFree'
const lactoseFreeKey = 'lactoseFree'
const vegetarianKey = 'vegetarian'
const veganKey = 'vegan'

// STATES

const filters: Reactive<Filter[]> = reactive([
  {
  key: lactoseFreeKey,
  name: 'Senza lattosio',
  value: false,
}, {
  key: vegetarianKey,
  name: 'Vegetariano',
  value: false,
}, {
  key: veganKey,
  name: 'Vegano',
  value: false,
},
{
  key: glutenFreeKey,
  name: 'Senza glutine',
  value: false,
}])

const toppings = reactive([
  { name: 'Pomodoro', zIndex: 2, selected: false, [glutenFreeKey]: true, [lactoseFreeKey]: true, [veganKey]: true, [vegetarianKey]: true },
  { name: 'Mozzarella', zIndex: 3, selected: false, [glutenFreeKey]: true, [lactoseFreeKey]: false, [veganKey]: false, [vegetarianKey]: true },
  { name: 'Parmigiano', zIndex: 4, selected: false, [glutenFreeKey]: true, [lactoseFreeKey]: false, [veganKey]: false, [vegetarianKey]: true },
  { name: 'Prosciutto', zIndex: 5, selected: false, [glutenFreeKey]: true, [lactoseFreeKey]: true, [veganKey]: false, [vegetarianKey]: false },
  { name: 'Salsiccia', zIndex: 6, selected: false, [glutenFreeKey]: true, [lactoseFreeKey]: true, [veganKey]: false, [vegetarianKey]: false },
  { name: 'Funghi', zIndex: 7, selected: false, [glutenFreeKey]: true, [lactoseFreeKey]: true, [veganKey]: true, [vegetarianKey]: true },
  { name: 'Basilico', zIndex: 8, selected: false, [glutenFreeKey]: true, [lactoseFreeKey]: true, [veganKey]: false, [vegetarianKey]: false },
  { name: 'Ananas', zIndex: 9, selected: false, [glutenFreeKey]: true, [lactoseFreeKey]: true, [veganKey]: true, [vegetarianKey]: true },
  { name: 'Uovo', zIndex: 10, selected: false, [glutenFreeKey]: true, [lactoseFreeKey]: true, [veganKey]: false, [vegetarianKey]: true },
])

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
        <h1 class="text-center">Configuratore di Pizza</h1>
        <div class="d-flex align-center">
          Filtri:
          <v-checkbox-btn v-for="filter in filters" :key="filter.key" :label="filter.name" :model-value="filter.value"
            @update:model-value="onFilterChange(filter.key, $event)" />
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <v-card>
          <v-card-title class="d-flex align-center justify-space-between">
            <span>Condimenti</span> <v-icon-btn icon="mdi-trash-can" @click="emptyToppings" />
          </v-card-title>
          <v-card-text>
            <v-list density="compact">
              <v-list-item v-for="(topping, index) in visibleToppings" :key="topping.name" :title="topping.name"
                :value="index" @click="onToppingChange(topping.name, !topping.selected)">
                <template #prepend>
                  <v-list-item-action start>
                    <v-checkbox-btn :model-value="topping.selected"
                      @update:model-value="onToppingChange(topping.name, $event)"></v-checkbox-btn>
                  </v-list-item-action>
                </template>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="d-flex justify-center">
        <div id="images-container">
          <img src="/src/assets/ingredienti/base.png" style="z-index: 1" />
          <img v-for="topping in chosenToppings" :src="'/src/assets/ingredienti/' + topping.name.toLowerCase() + '.png'"
            :key="topping.name" :style="{ zIndex: topping.zIndex || 1 }" />
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
