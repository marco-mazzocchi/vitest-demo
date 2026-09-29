import { expect, test } from 'vitest'
import { render } from 'vitest-browser-vue'

import HelloWorld from './HelloWorld.vue'

test('renders title and the counter', async () => {
  const { getByText, getByRole } = render(HelloWorld, {
    props: { name: 'Vitest' },
  })

  await expect.element(getByText('Get started')).toBeInTheDocument()


  await expect.element(getByText('Counter 1')).toBeInTheDocument()
  await getByRole('button', { name: 'Increment' }).click()
  await expect.element(getByText('Counter 2')).toBeInTheDocument()
})
