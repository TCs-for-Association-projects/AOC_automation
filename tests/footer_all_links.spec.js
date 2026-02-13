import { test, expect } from "@playwright/test";
import { FooterPage } from "../pages/footer.page";

// Test suite responsible for validating footer links behavior
test.describe("Footer links tests", () => {
  let footer;

  test.beforeEach(async ({ page }) => {
    // Navigate to the application homepage before each test
    await page.goto("https://oportunitatisicariere.ro/");

    // Initialize the FooterPage object
    footer = new FooterPage(page);
  });

  test("All footer links are visible and valid", async ({ page }) => {
    // Ensure the footer is visible before starting validations
    await footer.ensureVisible();

    // Iterate through all footer links defined in the page object
    for (const link of footer.footerLinks) {
      // Prepare the link by waiting for visibility and scrolling into view
      await footer.prepareLink(link.locator);

      // Retrieve the href attribute and verify it exists
      const href = await link.locator.getAttribute("href");
      expect(href).toBeTruthy();

      // Validation logic for internal navigation links
      if (link.type === "internal") {
        await link.locator.click();

        // Verify that the navigation leads to the expected URL
        expect(page.url()).toContain(href);

        // Navigate back to the homepage to continue testing other links
        await page.goBack();
      }

      // Validation logic for external links
      if (link.type === "external") {
        // External links are not opened; only the URL format is validated
        expect(href.startsWith("http")).toBeTruthy();
      }
    }
  });
});
