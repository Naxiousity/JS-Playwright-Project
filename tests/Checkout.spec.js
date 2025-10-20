import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/Login'
import { CartsPage } from '../pages/Carts';
import { TeardownUtil } from '../teardown/teardown';

test('[E2E] Authorized User successfully checks out', async ({ page }) => {

  const Login = new LoginPage(page);
  const Carts = new CartsPage(page);
  const Teardown = new TeardownUtil(page);
  
  // 1. Login
  await Login.gotoLoginpage();
  await Login.login('standard_user', 'secret_sauce');

  // 2. Select Products
  await Carts.select_multiple_products(['Sauce Labs Onesie', 'Sauce Labs Bike Light']);

  // 3. Click the cart icon on the upper right
  await Carts.gotoCart()

  // 4. Click the checkout button
  await Carts.click_checkout()

  // 5. Input Personal Details
  await Carts.fill_details('123','321','postme');
  await Carts.click_continue_button();
  await Carts.click_finish_button();

  // 6. Verify that the order is complete (Checkout:Complete!)
  await expect(page.locator('[data-test="complete-header"]')).toBeVisible();
  
  // Teardown
  await Teardown.gotoLogOut();


});