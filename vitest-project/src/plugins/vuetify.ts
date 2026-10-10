/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */
import colors from 'vuetify/util/colors'

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

const darkBlue = '#10163d'
const darkerBlue = '#050a30'
const red = '#ff2768'
const green = '#26db8e'
const violet = '#862570'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          background: darkerBlue,
          surface: darkBlue,
          primary: red,
          secondary: violet,
          success: green,
        }
      },
    },
  },
})
