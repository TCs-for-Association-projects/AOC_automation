import OurMissionPage from '../pages/our-mission.js';
import { test, expect } from '@playwright/test';

test.describe('Misiunea Noastra - Desktop', () => {

  test.use({ viewport: { width: 1440, height: 900 } });

  test('Accesare Misiunea Noastra din header (desktop)', async ({ page }) => {

    await page.goto('https://oportunitatisicariere.ro/');

    // Click DOAR pe linkul din HEADER
    await page.locator('#top-redirect a[href="#our-mission"]').click();

    // Verificăm că secțiunea a devenit vizibilă
    await expect(page.locator('#our-mission')).toBeVisible();

    // Verificăm titlul secțiunii
    await expect(page.getByRole('heading', { name: /misiunea noastră/i })).toBeVisible();

    // Verificăm textul principal
    await expect(page.getByText(/simplificăm procesul de căutare/i)).toBeVisible();
  });
});
