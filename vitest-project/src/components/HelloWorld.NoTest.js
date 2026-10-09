import { expect, test } from 'vitest'
import { render } from 'vitest-browser-vue'

import HelloWorld from './HelloWorld.vue'

test('Renders title', async () => {
  const { getByText } = render(HelloWorld, {
    props: { name: 'Vitest' },
  })

  await expect.element(getByText('Counter')).toBeInTheDocument()
  await expect.element(getByText('Math Greatest')).toBeInTheDocument()

})
