import { test, expect } from '@playwright/test';
import OurMissionPage from '../pages/our-mission.js';

test.describe('Test PUR – Secțiunea Misiunea Noastră', () => {

  test('Verificare directă a secțiunii Misiunea Noastră', async ({ page }) => {

    const mission = new OurMissionPage(page);

    await page.goto('https://oportunitatisicariere.ro/');

    await mission.section.scrollIntoViewIfNeeded();
    await mission.waitForLoaded();

    await expect(mission.title).toBeVisible();
    await expect(mission.textSimplificam).toBeVisible();
    await expect(mission.textVoluntari).toBeVisible();

    // Verificăm că există cel puțin un paragraf
    await expect(mission.section.locator('p').first()).toBeVisible();
  });
});