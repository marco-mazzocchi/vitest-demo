import { expect, test } from '@playwright/test'

test('Home opens without error', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText('Vitest', { exact: true })).toBeVisible()
})
