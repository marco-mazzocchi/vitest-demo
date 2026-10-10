import { expect, test } from '@playwright/test'

test('Configurator filters', async ({ page }) => {
  await page.goto('/configurator')
  await expect(page.getByText('Condimenti', { exact: true })).toBeVisible()

  // hide 'Mozzarella'
  await expect(page.getByRole('option', { name: 'Mozzarella' })).toBeVisible();
  await page.getByRole('checkbox', { name: 'Senza lattosio' }).check();
  await expect(page.getByRole('option', { name: 'Mozzarella' })).not.toBeVisible();

  // select toppings
  await page.getByRole('checkbox', { name: 'Pomodoro' }).check();
  await page.getByRole('checkbox', { name: 'Funghi' }).check();
  await page.getByRole('checkbox', { name: 'Salsiccia' }).check();

  await expect(page.getByRole('img', { name: 'Base' })).toBeVisible();
  await expect(page.getByRole('img', { name: 'Pomodoro' })).toBeVisible();
  await expect(page.getByRole('img', { name: 'Funghi' })).toBeVisible();
  await expect(page.getByRole('img', { name: 'Salsiccia' })).toBeVisible();
})
