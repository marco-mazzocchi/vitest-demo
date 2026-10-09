import {glutenFreeKey,
  lactoseFreeKey,
  vegetarianKey,
  veganKey} from './constants'

const filters = [
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
  }]

export default filters
