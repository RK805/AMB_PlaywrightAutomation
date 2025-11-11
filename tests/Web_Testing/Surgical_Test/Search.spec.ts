import { test, expect } from "@playwright/test";
import { showMouse } from "../../../src/utils/Mouse_helper";

test("🔥 Visual Cursor Challenge 2 — Full automation movement", async ({ page }) => {
  console.log("🧪 TEST START: Full automation with visual cursor");

  // 👁️ Step 1: Enable glowing cursor
  await test.step("Enable red glowing cursor", async () => {
    await showMouse(page);
  });

  // 🌐 Step 2: Navigate to site
  await test.step("Navigate to Saucedemo site", async () => {
    await page.goto("https://www.saucedemo.com/", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(800);
  });

  // 🧾 Step 3: Fill login credentials
  await test.step("Fill login credentials", async () => {
    await page.hover("#user-name");
    await page.fill("#user-name", "standard_user");
    await page.waitForTimeout(500);

    await page.hover("#password");
    await page.fill("#password", "secret_sauce");
    await page.waitForTimeout(500);
  });

  // 🚀 Step 4: Click Login button
  await test.step("Click Login button", async () => {
    await page.click("#login-button");
    await page.waitForTimeout(1000);
  });

  // 🖱️ Step 5: Scroll product list
  await test.step("Scroll down product list", async () => {
    await page.mouse.wheel(0, 500);
    await page.waitForTimeout(700);
    await page.mouse.wheel(0, 500);
    await page.waitForTimeout(700);
  });

  // 🎯 Step 6: Hover and add product to cart
  await test.step("Hover and add first product to cart", async () => {
    await page.hover(".inventory_item_name");
    await page.waitForTimeout(600);
    await page.click(".btn_inventory");
    await page.waitForTimeout(800);
  });

  // 🛒 Step 7: Open cart
  await test.step("Open the shopping cart", async () => {
    await page.click(".shopping_cart_link");
    await page.waitForTimeout(1000);
  });

  // ✅ Step 8: Verify cart content
  await test.step("Validate product added to cart", async () => {
    await expect(page.locator(".inventory_item_name")).toContainText("Sauce Labs");
  });

  console.log("✅ All scripted actions done — cursor moved & pulsed visually.");
});
