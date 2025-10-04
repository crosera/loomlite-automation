import { test, expect} from '@playwright/test';
import { sideBarPage } from '../../pages/global/sidebar_page';
import urls from '../../configs/urls.json';

// Go to the starting url before each test.
test.beforeEach(async ({ page }) => {
    await page.goto(urls.dashboard.url);
});

test.describe('Sidebar', () => {

    sideBarPage.nav_buttons.forEach(({ page_title, bar_name, path }) => {
        test(`should be able to navigate to the ${bar_name} page`, async ({ page }) => {
            // Assert that we're on the main page.
            await expect(page).toHaveURL(new RegExp(urls.dashboard.url));

            let nav_bar = await page.locator('//nav')

            await nav_bar.getByText(bar_name).click();

            await expect(page).toHaveURL(new RegExp(path));

            await expect(page.getByRole('heading', { name: page_title }).first()).toBeVisible();
        });

    });
});