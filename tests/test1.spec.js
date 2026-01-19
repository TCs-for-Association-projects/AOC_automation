//test
const { test } = require('@playwright/test');
const { Povestidesucces } = require('../pages/Povestidesucces');

test('Navigare către Povești de succes', async ({ page }) => {
  const povesti = new Povestidesucces(page);
  
  await povesti.gotoPovestidesucces();
  await povesti.openHamburgerMenu();
  await povesti.clickPovestiDinSubmeniu();
  await povesti.isLoaded();
  await povesti.checkTitle();
  
  await page.waitForTimeout(5000);
  
});