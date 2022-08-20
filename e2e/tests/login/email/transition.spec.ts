import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('http://localhost:8910/')

  // Click body
  await expect(page).toHaveURL('http://localhost:8910/')

  // Click text=ログイン
  await page.locator('text=ログイン').click()
  await expect(page).toHaveURL('http://localhost:8910/login')

  // Click text=新規登録
  await page.locator('text=新規登録').click()
  await expect(page).toHaveURL(
    'http://localhost:8910/login/register?shopId=hoge'
  )

  // Click text=ログイン画面に戻る
  await page.locator('text=ログイン画面に戻る').click()
  await expect(page).toHaveURL('http://localhost:8910/login')

  // Click text=パスワードを忘れた方
  await page.locator('text=パスワードを忘れた方').click()
  await expect(page).toHaveURL('http://localhost:8910/login/reset')

  // Click text=ログイン画面に戻る
  await page.locator('text=ログイン画面に戻る').click()
  await expect(page).toHaveURL('http://localhost:8910/login')

  // Go to http://localhost:8910/login/setPassword
  await page.goto('http://localhost:8910/login/setPassword')
})
