import {glutenFreeKey,
  lactoseFreeKey,
  vegetarianKey,
  veganKey} from './constants'

const toppings = [
  {
    name: 'Pomodoro',
    zIndex: 2,
    selected: false,
    [glutenFreeKey]: true,
    [lactoseFreeKey]: true,
    [veganKey]: true,
    [vegetarianKey]: true
  },
  {
    name: 'Mozzarella',
    zIndex: 3,
    selected: false,
    [glutenFreeKey]: true,
    [lactoseFreeKey]: false,
    [veganKey]: false,
    [vegetarianKey]: true
  },
  {
    name: 'Parmigiano',
    zIndex: 4,
    selected: false,
    [glutenFreeKey]: true,
    [lactoseFreeKey]: false,
    [veganKey]: false,
    [vegetarianKey]: true
  },
  {
    name: 'Prosciutto',
    zIndex: 5,
    selected: false,
    [glutenFreeKey]: true,
    [lactoseFreeKey]: true,
    [veganKey]: false,
    [vegetarianKey]: false
  },
  {
    name: 'Salsiccia',
    zIndex: 6,
    selected: false,
    [glutenFreeKey]: true,
    [lactoseFreeKey]: true,
    [veganKey]: false,
    [vegetarianKey]: false
  },
  {
    name: 'Funghi',
    zIndex: 7,
    selected: false,
    [glutenFreeKey]: true,
    [lactoseFreeKey]: true,
    [veganKey]: true,
    [vegetarianKey]: true
  },
  {
    name: 'Basilico',
    zIndex: 8,
    selected: false,
    [glutenFreeKey]: true,
    [lactoseFreeKey]: true,
    [veganKey]: false,
    [vegetarianKey]: false
  },
  {
    name: 'Ananas',
    zIndex: 9,
    selected: false,
    [glutenFreeKey]: true,
    [lactoseFreeKey]: true,
    [veganKey]: true,
    [vegetarianKey]: true
  },
  {
    name: 'Uovo',
    zIndex: 10,
    selected: false,
    [glutenFreeKey]: true,
    [lactoseFreeKey]: true,
    [veganKey]: false,
    [vegetarianKey]: true
  },
]

export default toppings
