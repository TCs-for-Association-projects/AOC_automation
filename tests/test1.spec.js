//test
import { test } from '@playwright/test';
import { Povestidesucces } from '../pages/Povestidesucces.js';

test('Accesare Povești de succes din meniu', async ({ page }) => {
const povesti = new Povestidesucces(page);

  await povesti.open();
  await povesti.openPovestiDeSucces();
 
});   