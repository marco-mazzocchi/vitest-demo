<script setup lang="ts">
import {computed, reactive, ref} from 'vue'

type Topping = {
  name: string
  selected: boolean
  glutenFree: boolean
  lactoseFree: boolean
  vegetarian: boolean
  vegan: boolean
}

const glutenFreeKey = 'glutenFree'
const lactoseFreeKey = 'lactoseFree'
const vegetarianKey = 'vegetarian'
const veganKey = 'vegan'

// STATES

const filters = reactive([{
  key: glutenFreeKey,
  value: false,
}, {
  key: lactoseFreeKey,
  value: false,
}, {
  key: vegetarianKey,
  value: false,
}, {
  key: veganKey,
  value: false,
}])

const toppings = reactive([
  {name: 'Mozzarella', selected: false, [glutenFreeKey]: true, [lactoseFreeKey]: false, [veganKey]: false, [vegetarianKey]: true},
  {name: 'Parmigiano', selected: false, [glutenFreeKey]: true, [lactoseFreeKey]: false, [veganKey]: false, [vegetarianKey]: true},
  {name: 'Pomodoro', selected: false, [glutenFreeKey]: true, [lactoseFreeKey]: true, [veganKey]: true, [vegetarianKey]: true},
  {name: 'Prosciutto', selected: false, [glutenFreeKey]: true, [lactoseFreeKey]: true, [veganKey]: false, [vegetarianKey]: false},
  {name: 'Salsiccia', selected: false, [glutenFreeKey]: true, [lactoseFreeKey]: true, [veganKey]: false, [vegetarianKey]: false},
  {name: 'Funghi', selected: false, [glutenFreeKey]: true, [lactoseFreeKey]: true, [veganKey]: true, [vegetarianKey]: true},
  {name: 'Peperoni', selected: false, [glutenFreeKey]: true, [lactoseFreeKey]: true, [veganKey]: false, [vegetarianKey]: false},
  {name: 'Ananas', selected: false, [glutenFreeKey]: true, [lactoseFreeKey]: true, [veganKey]: true, [vegetarianKey]: true},
  {name: 'Uovo', selected: false, [glutenFreeKey]: true, [lactoseFreeKey]: true, [veganKey]: false, [vegetarianKey]: true},
])

// COMPUTED

const visibleToppings = computed(() => {
  return toppings.filter(t => {
    const activeFilters = filters.filter(f => f.value)
    if (activeFilters.length > 0) {
      return activeFilters.every(f => t[f.key])
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
  filter.value = value
}

function onToppingChange(toppingName: string, isSelected: boolean) {
  toppings.find(t => t.name === toppingName).selected = isSelected
}

function showTopping(index: number): boolean {
  console.log('showTopping', index)
  const activeFilters = filters.filter(f => f.value)
  if (activeFilters.length > 0) {
    return activeFilters.every(f => toppings.value[index][f.key])
  }
  return true
}
</script>

<template>
  <v-container class="fill-height">
    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="900"
    >
      <h1>Pizza Configurator</h1>
      <v-container>
        <v-row>
          <v-col>
            <v-card>
              <v-card-title>Filtri</v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item
                    v-for="filter in filters"
                    :key="filter.key"
                    :title="filter.key"
                    :value="filter.key"
                    @click="onFilterChange(filter.key, !filter.value)"
                  >
                    <template #prepend>
                      <v-list-item-action start>
                        <v-checkbox-btn :model-value="filter.value"
                                        @update:model-value="onFilterChange(filter.key, $event)"></v-checkbox-btn>
                      </v-list-item-action>
                    </template>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card>
              <v-card-title>Condimenti</v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item
                    v-for="(topping, index) in visibleToppings"
                    :key="topping.name"
                    :title="topping.name"
                    :value="index"
                    @click="onToppingChange(topping.name, !topping.selected)"
                  >
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
          <v-col>
            <h1 class="ma-0">La tua pizza</h1>
            <ul>
              <li v-for="topping in chosenToppings" :key="topping">
                {{ topping.name }}
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </v-container>
</template>

<style scoped>

</style>
