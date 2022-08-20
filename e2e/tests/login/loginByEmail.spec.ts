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
  await page.locator('[data-testid="email"]').fill('somemailAddress@hoge.com')
  // Click [data-testid="password"]
  await page.locator('[data-testid="password"]').click()
  // Fill [data-testid="password"]
  await page.locator('[data-testid="password"]').fill('password')
  // Click text=メールアドレスでログイン
  await page.locator('text=メールアドレスでログイン').click()
  // Click text=新規登録
  await page.locator('text=新規登録').click()
  await expect(page).toHaveURL(
    'http://localhost:8910/login/register?shopId=hoge'
  )
  // Click text=ログイン画面に戻る
  await page.locator('text=ログイン画面に戻る').click()
  await expect(page).toHaveURL('http://localhost:8910/login')
})
