import { expect, test } from 'vitest'
import { render } from 'vitest-browser-vue'

import Counter from './Counter.vue'

test('Increment counter', async () => {
  const { getByTestId, getByRole } = render(Counter, {
    props: { name: 'Vitest' },
  })

  const counter = await getByTestId('counter')

  await expect.element(counter).toBeInTheDocument()

  await expect.element(counter).toHaveTextContent('1')
  await getByRole('button', { name: 'Increment' }).click()
  await expect.element(counter).toHaveTextContent('2')
})
