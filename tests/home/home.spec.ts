import { test, expect } from '@playwright/test';
import urls from '../../configs/urls.json';
import { homePage } from '../../pages/home/home_page';

test.describe('Home Page', () => {

    test.use({ storageState: { cookies: [], origins: [] } })

    test('should load the home page', async ({ page }) => {
        await page.goto('/');
        await expect(page).toHaveTitle(urls.base.title);
    });

    // This is REALLY lazy, I can add specific tests later for individual sections if needed.
    // But this at least verifies that the main content is present and correct.
    // This is more of a "smoke test" to verify the page loads and the main content is present.
    test('should display the main page', async ({ page }) => {
        await page.goto('/');
        const heading = page.locator('h1');
        await expect(heading).toBeVisible();
        await expect(page.locator("body")).toContainText("Conquer Every Quest with the Ultimate Campaign CompanionOrganize your world, manage characters, and run immersive D&D sessions with ease and clarity.Sign Up for FREEMaster Every Dungeon, From Planning to PlayOur tool streamlines your D&D campaigns—freeing your creativity and enhancing your players' adventure from start to finish.21,203Campaigns Created4,287Active UsersSign Up for FREEPacked With Tools for Every Game Master’s NeedsFrom maps to mechanics, manage your game with powerful, intuitive tools built for storytellersCreate CampaignsView StoriesQuest LogWorld ViewerCharacter ViewerCampaign OverviewItem CustomizationExplorere ShopMap ExplorationWhyGame Masters Trust Our Campaign ToolLevel up your DMing with streamlined prep, deeper immersion, and a community-backed creative experience.Save Hours of Prep TimeAutomate repetitive tasks so you can focus on storytelling, not spreadsheets and tabs.Run Seamless, Engaging SessionsHave everything at your fingertips — combat stats, lore, maps, and audio cues — in one unified dashboard.Enhance Player ImmersionCreate richer, more interactive worlds that draw players deeper into your narrative and setting.Grow With Community SupportJoin thousands of DMs sharing modules, ideas, and custom content to inspire your own campaigns.Loved by DMs and Players AlikeHear what adventurers across the realms have to say about our game-changing campaign tool.“This tool streamlined everything. Prep is faster, sessions run smoother, and my players are more immersed than ever. It brought the fun back to DMing.”Ricardo G.D&D Content CreatorStart Your Epic Adventure TodaySign up free and see why thousands of Dungeon Masters rely on us for legendary campaigns.Sign Up for FREEFollow us on:© 2025 Loomlite. All rights reserved.");
    });

    test('should have working sign up buttons', async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
        const signUpButton = page.locator(homePage.buttons.first_sign_up);
        await expect(signUpButton).toBeVisible();
        await expect(signUpButton).toBeEnabled();

        await signUpButton.click();
        await expect(page).toHaveURL(new RegExp(urls.registration.url));

        await page.goBack();
        const signUpButton2 = page.locator(homePage.buttons.second_sign_up);
        await expect(signUpButton2).toBeVisible();
        await expect(signUpButton2).toBeEnabled();
        await signUpButton2.click();
        await expect(page).toHaveURL(new RegExp(urls.registration.url));

        await page.goBack();
        const signUpButton3 = page.locator(homePage.buttons.third_sign_up);
        await expect(signUpButton3).toBeVisible();
        await expect(signUpButton3).toBeEnabled();
        await signUpButton3.click();
        await expect(page).toHaveURL(new RegExp(urls.registration.url));
    });

    test.fixme('should have a working carousel', async ({ page }) => { })
    test.fixme('should have working social buttons', async ({ page }) => { })
});