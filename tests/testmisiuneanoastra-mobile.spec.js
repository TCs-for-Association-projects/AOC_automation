import { test, expect } from '@playwright/test';

test.describe('Misiunea Noastra - Mobil', () => {

  // Setăm viewport pentru mobil
  test.use({ viewport: { width: 390, height: 844 } });

  test('Accesare Misiunea Noastra din meniu (mobil)', async ({ page }) => {

    await page.goto('https://oportunitatisicariere.ro/');

    // 1. Deschidem meniul hamburger
    await page.locator('#icon-hamburger').click();

    // 2. Click pe linkul din meniu (doar în header)
    await page.locator('#top-redirect a[href="#our-mission"]').click();

    // 3. Verificăm că secțiunea este vizibilă
    await expect(page.locator('#our-mission')).toBeVisible();

    // 4. Verificăm titlul secțiunii
    await expect(page.getByRole('heading', { name: /misiunea noastră/i })).toBeVisible();

    // 5. Verificăm textul principal
    await expect(page.getByText(/simplificăm procesul de căutare/i)).toBeVisible();
  });
});