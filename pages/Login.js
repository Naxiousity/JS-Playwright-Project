// import { test } from '@playwright/test'

// test.beforeAll (async () => {
//   await page.goto('https://www.saucedemo.com/');

//   //  Login to the Application
//   await page.locator('[data-test="username"]').click();
//   await page.locator('[data-test="username"]').fill('standard_user');
//   await page.locator('[data-test="password"]').click();
//   await page.locator('[data-test="password"]').fill('secret_sauce');
//   await page.locator('[data-test="login-button"]').click();

// });

exports.LoginPage = class LoginPage {

  constructor(page) {
    
    this.page = page

    this.username_textbox = page.locator('[data-test="username"]');
    this.password_textbox = page.locator('[data-test="password"]')
    this.login_button = page.locator('[data-test="login-button"]')
  }

  async gotoLoginpage() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username, password) {
    await this.username_textbox.fill(username);
    await this.password_textbox.fill(password);
    await this.login_button.click();
  }};