// src/test/setup.ts
//
// Global test setup: registers Vuetify for every component rendered
// with `vitest-browser-vue`, so tests don't need to install it manually.
import { config } from 'vitest-browser-vue'

import vuetify from '@/plugins/vuetify'

config.global.plugins = [...(config.global.plugins ?? []), vuetify]
