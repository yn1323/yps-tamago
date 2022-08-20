import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  // Go to http://localhost:8910/
  await page.goto('http://localhost:8910/')

  // Click text=ログイン
  await page.locator('text=ログイン').click()
  await expect(page).toHaveURL('http://localhost:8910/login')

  // Click text=パスワードを忘れた方
  await page.locator('text=パスワードを忘れた方').click()
  await expect(page).toHaveURL('http://localhost:8910/login/reset')

  // Click [data-testid="email"]
  await page.locator('[data-testid="email"]').click()

  // Fill [data-testid="email"]
  await page.locator('[data-testid="email"]').fill('aaa')

  // Click text=パスワードリセット
  await page.locator('text=パスワードリセット').click()

  // Click [data-testid="email"]
  await page.locator('[data-testid="email"]').click()

  // Fill [data-testid="email"]
  await page.locator('[data-testid="email"]').fill('aaa@aaaa.com')

  // Click text=パスワードリセット
  await page.locator('text=パスワードリセット').click()

  // Click #chakra-toast-manager-top-right [aria-label="Close"]
  await page
    .locator('#chakra-toast-manager-top-right [aria-label="Close"]')
    .click()
})
