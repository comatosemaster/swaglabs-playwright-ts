import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

const userName = 'standard_user'
const password = 'secret_sauce'

test('valid login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('https://www.saucedemo.com/');
  await loginPage.login(userName, password);

  await expect(page).toHaveURL(/inventory/);
});