import { expect } from '@playwright/test';

export class Povestidesucces {
  constructor(page) {
    this.page = page;
    
    this.menuBtn = page.getByRole('button', { name: /meniu|menu/i });
    this.povestiLink = page.getByRole('link', { name: 'Povești de succes' }).first();
  }

  async open() {
    await this.page.goto('https://oportunitatisicariere.ro/');
  }

  async openPovestiDeSucces() {
    // dacă meniul hamburger există, dă click
    if (await this.menuBtn.isVisible()) {
      await this.menuBtn.click();
    }

    // linkul din header/submeniu
    const povestiLink = this.page.getByRole('link', { name: 'Povești de succes' }).first();

    // click pe link
    await povestiLink.click();

    // așteaptă secțiunea '#stories' să fie vizibilă
    const storiesSection = this.page.locator('#stories');
    await expect(storiesSection).toBeVisible({ timeout: 5000 });

    await this.page.waitForTimeout(5000);
  }
};