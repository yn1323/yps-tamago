import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  // Go to http://localhost:8910/
  await page.goto('http://localhost:8910/')

  // Click text=ログイン
  await page.locator('text=ログイン').click()
  await expect(page).toHaveURL('http://localhost:8910/login')

  // Click [data-testid="email"]
  await page.locator('[data-testid="email"]').click()

  // Fill [data-testid="email"]
  await page.locator('[data-testid="email"]').fill('aaaa')

  // Click text=メールアドレスでログイン
  await page.locator('text=メールアドレスでログイン').click()

  // Click [data-testid="email"]
  await page.locator('[data-testid="email"]').click()

  // Fill [data-testid="email"]
  await page
    .locator('[data-testid="email"]')
    .fill(`zzzz@aaaa.com${Math.random().toString().substring(0, 8)}`)

  // Click text=メールアドレスでログイン
  await page.locator('text=メールアドレスでログイン').click()

  // Click [data-testid="password"]
  await page.locator('[data-testid="password"]').click()

  // Fill [data-testid="password"]
  await page.locator('[data-testid="password"]').fill('aaaaaa')

  // Click text=メールアドレスでログイン
  await page.locator('text=メールアドレスでログイン').click()

  // Click text=8文字以上16文字以内で入力してください
  await page.locator('text=8文字以上16文字以内で入力してください').click()

  // Click [data-testid="password"]
  await page.locator('[data-testid="password"]').click()

  // Fill [data-testid="password"]
  await page.locator('[data-testid="password"]').fill('aaaaaaaaa')

  // Click text=メールアドレスでログイン
  await page.locator('text=メールアドレスでログイン').click()

  // Click #chakra-toast-manager-top-right [aria-label="Close"]
  await page
    .locator('#chakra-toast-manager-top-right [aria-label="Close"]')
    .click()
})
