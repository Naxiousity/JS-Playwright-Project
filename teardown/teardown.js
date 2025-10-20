exports.TeardownUtil = class TeardownUtil {
    constructor(page) {
        this.page = page;
        this.menu_button = page.getByRole('button', { name: 'Open Menu' });
        this.logout_button = page.locator('[data-test="logout-sidebar-link"]');
    }

    async gotoLogOut() {
        await this.menu_button.click();
        await this.logout_button.click();
    }
};


//  await page.getByRole('button', { name: 'Open Menu' }).click();
//   await page.locator('[data-test="logout-sidebar-link"]').click();