exports.CartsPage =  class CartsPage {
    constructor(page) {
        this.page = page;
        this.get_product_add_button = (name) => {
            const locator_string = `[data-test="add-to-cart-${name.toLowerCase().replace(/ /g,'-')}"]`;
            return page.locator(locator_string)
        }

        this.cart_button = page.locator('[data-test="shopping-cart-link"]');
        this.checkout_button = page.locator('[data-test="checkout"]');

        this.firstName_box = page.locator('[data-test="firstName"]');
        this.lastName_box = page.locator('[data-test="lastName"]');
        this.postalCode_box = page.locator('[data-test="postalCode"]');

        this.continue_button = page.locator('[data-test="continue"]');
        this.finish_button = page.locator('[data-test="finish"]');
    }

    async select_one_product(productName) {
        const productButton = this.get_product_add_button(productName);
        await productButton.click();
    }

    async select_multiple_products(productNames) {
        if (!Array.isArray(productNames) || productNames.length === 0) {
            throw new Error("Product names must be provided as a non empty array.")
        }
        
        console.log(`Adding multiple products: ${productNames.join(', ')}`);

        for (const name of productNames) { 
            await this.select_one_product(name);
        }
    }

    async fill_details(firstName, lastName, postalCode) {
        await this.firstName_box.fill(firstName);
        await this.lastName_box.fill(lastName);
        await this.postalCode_box.fill(postalCode);

    }

    async gotoCart() {
        await this.cart_button.click()

    }

    async click_checkout() {
        await this.checkout_button.click()

    }

    async click_continue_button() {
        await this.continue_button.click()
    }

    async click_finish_button() {
        await this.finish_button.click()
    }
};

//   await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
//   await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

//   await page.locator('[data-test="shopping-cart-link"]').click();
//   await page.locator('[data-test="checkout"]').click();


//   await page.locator('[data-test="firstName"]').click();
//   await page.locator('[data-test="firstName"]').fill('123');
//   await page.locator('[data-test="lastName"]').click();
//   await page.locator('[data-test="firstName"]').fill('1231');
//   await page.locator('[data-test="lastName"]').fill('23');
//   await page.locator('[data-test="postalCode"]').click();
//   await page.locator('[data-test="postalCode"]').fill('123');
//   await page.locator('[data-test="continue"]').click();
//   await page.locator('[data-test="finish"]').click();