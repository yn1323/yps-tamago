import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  // Go to http://localhost:8910/
  await page.goto('http://localhost:8910/')

  // Click text=ログイン
  await page.locator('text=ログイン').click()
  await expect(page).toHaveURL('http://localhost:8910/login')

  // Click text=新規登録
  await page.locator('text=新規登録').click()
  await expect(page).toHaveURL(
    'http://localhost:8910/login/register?shopId=hoge'
  )

  // Click [data-testid="email"]
  await page.locator('[data-testid="email"]').click()

  // Fill [data-testid="email"]
  await page.locator('[data-testid="email"]').fill('aaaa')

  // Click text=登録する
  await page.locator('text=登録する').click()

  // Click [data-testid="email"]
  await page.locator('[data-testid="email"]').click()

  // Fill [data-testid="email"]
  await page
    .locator('[data-testid="email"]')
    .fill(`aaaa@aaaa.com${Math.random().toString().substring(0, 8)}`)

  // Click text=登録する
  await page.locator('text=登録する').click()

  // Click [data-testid="password"]
  await page.locator('[data-testid="password"]').click()

  // Fill [data-testid="password"]
  await page.locator('[data-testid="password"]').fill('aaaaa')

  // Click text=登録する
  await page.locator('text=登録する').click()

  // Click text=8文字以上16文字以内で入力してください
  await page.locator('text=8文字以上16文字以内で入力してください').click()

  // Click [data-testid="password"]
  await page.locator('[data-testid="password"]').click()

  // Fill [data-testid="password"]
  await page.locator('[data-testid="password"]').fill('aaaaaaaaa')

  // Click text=登録する
  await page.locator('text=登録する').click()

  // Click #chakra-toast-manager-top-right [aria-label="Close"]
  await page
    .locator('#chakra-toast-manager-top-right [aria-label="Close"]')
    .click()
})
