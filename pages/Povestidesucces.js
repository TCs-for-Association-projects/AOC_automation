 const { expect } = require('@playwright/test');

 exports.Povestidesucces = class Povestidesucces {

  constructor(page) {
    this.page = page;

 this.hamburgerMenu = page.getByRole('button', { name: /meniu|menu/i });
 this.menuPovesti = page.getByRole('link', { name: 'Povești de succes' }).first();
 this.pageTitle = page.getByRole('heading', { name: 'Povești de succes' });
  }

  async gotoPovestidesucces() {
    await this.page.goto('https://oportunitatisicariere.ro/');
  }

  async openHamburgerMenu() {
    if (await this.hamburgerMenu.isVisible()) {
    await this.hamburgerMenu.click();

  }
 }
  async isLoaded() {
   await expect(this.page.locator('#stories')).toBeVisible({ timeout: 10000 });
   
  }
  async clickPovestiDinSubmeniu() {
    await this.menuPovesti.waitFor({ state: 'visible' });
    await this.menuPovesti.click();
  }
  async checkTitle() {
    await expect(this.pageTitle).toBeVisible();
  }
};