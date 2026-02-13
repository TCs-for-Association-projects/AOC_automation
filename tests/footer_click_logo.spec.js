import { test, expect } from "@playwright/test";
import { FooterPage } from "../pages/footer.page";

// Test suite validating the behavior of the footer logo
test.describe("Footer logo behavior test", () => {
  let footer;

  test.beforeEach(async ({ page }) => {
    // Navigate to the application homepage before each test
    await page.goto("https://oportunitatisicariere.ro/");

    // Initialize the FooterPage object to access footer elements
    footer = new FooterPage(page);
  });

  test("Clicking the footer logo scrolls the page to the top", async ({
    page,
  }) => {
    // Ensure the footer is visible before interacting with it
    await footer.ensureVisible();

    // Scroll down the page to simulate a real user scenario
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Click the footer logo
    await footer.logoLink.click();

    // Assert that the page scrolls back close to the top
    // expect.poll automatically waits until the condition is met
    await expect
      .poll(() => page.evaluate(() => window.scrollY))
      .toBeLessThan(100);
  });
});
