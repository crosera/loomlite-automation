import { test, expect, type Page } from '@playwright/test';
import { loginPage } from '../../pages/login/login_page';
import { discordLogin } from '../../pages/login/discord_login';
import { dashboardPage } from '../../pages/dashboard/dashboard_page';
import urls from '../../configs/urls.json';

// Go to the starting url before each test.
test.beforeEach(async ({ page }) => {
    await page.goto(urls.dashboard.url);
});


// Can run parallel, but these tests are serial so I don't have to rewrite the login process every time.



/** This is an example of what a common functional test would be. 
 * This is the meat and potatoes of regression. You do the actions, 
 * and expect a BEHAVIOR. You expect that behavior every single time.
 * This is not necessarily for page validation, text validation, etc. 
 * 
 * REALISTICALLY I would put this process into a single function somewhere to run at the beginning of every test*/

test.describe('Log In', () => {
    test('should verify dashboard page looks as intended', async ({page}) => {

        // Assert that we're on the main page.
        await expect(page).toHaveURL(new RegExp(urls.dashboard.url));


        // Some basic assertions that the cards exist. We could add more specific text values if needed.
        let total_worlds = await page.getByText(dashboardPage.cards.total_worlds);
        await expect(total_worlds).toBeVisible();

        let active_campaigns = await page.getByText(dashboardPage.cards.active_campaigns);
        await expect(active_campaigns).toBeVisible();

        let characters = await page.getByRole('heading', { name: dashboardPage.cards.characters});
        await expect(characters).toBeVisible();

        let quick_actions = await page.getByText(dashboardPage.cards.quick_actions);
        await expect(quick_actions).toBeVisible();

        let recent_activity = await page.getByRole('heading', { name: dashboardPage.cards.recent_activity});
        await expect(recent_activity).toBeVisible();

        let create_new_world = await page.locator(`a:has-text("${dashboardPage.buttons.create_new_world}")`);
        await expect(create_new_world).toBeVisible();
        await expect(create_new_world).toBeEnabled();

        let start_new_campaign = await page.locator(`a:has-text("${dashboardPage.buttons.start_new_campaign}")`);
        await expect(start_new_campaign).toBeVisible();
        await expect(start_new_campaign).toBeEnabled();
    });

});