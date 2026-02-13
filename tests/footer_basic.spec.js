import { test, expect } from "@playwright/test";
import { FooterPage } from "../pages/footer.page";

// Test suite covering basic footer UI validations
test.describe("Footer basic tests", () => {
  let footer;

  test.beforeEach(async ({ page }) => {
    // Navigate to the application homepage before each test
    await page.goto("https://oportunitatisicariere.ro/");

    // Create an instance of the FooterPage object for reuse in tests
    footer = new FooterPage(page);
  });

  test("Footer basic elements are visible", async () => {
    // Ensure the footer is visible before performing assertions
    await footer.ensureVisible();

    // Validate that the footer logo text elements are displayed
    await expect(footer.logoTitle1).toBeVisible();
    await expect(footer.logoTitle2).toBeVisible();

    // Validate that the footer displays the current year correctly
    const currentYear = new Date().getFullYear().toString();
    await expect(footer.currentYear).toContainText(currentYear);
  });
});
