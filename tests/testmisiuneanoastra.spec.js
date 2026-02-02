import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/main-page.js';

test('Accesare Misiunea Noastră din meniu', async ({ page }) => {
    const mainPage = new MainPage(page);

    await mainPage.navigateTo();

    if (await mainPage.header.isMobile()) {
        await mainPage.header.openHamburgerMenu();
    }

    await mainPage.header.clickMisiuneaNoastra();

    await expect(page).toHaveURL(/misiunea-noastra/);
});
