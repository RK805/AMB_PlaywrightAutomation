import { Page, expect } from "@playwright/test"
import { search_loc } from '../../locators/Surgical_locators/Search_Box_loc'

export class search_page {
    page: Page;
    readonly locators: search_loc;

    constructor(page: Page) {
        this.page = page;
        this.locators = new search_loc(this.page);

    }

    async Search_element(input: string) {
        const search_input = this.locators.search_Path;

        // ✅ Wait for the search box to appear and be visible
        await search_input.waitFor({ state: 'visible', timeout: 15000 });

        // ✅ Ensure it’s interactable before filling
        await expect(search_input).toBeEditable({ timeout: 5000 });

        // ✅ Now fill the search term
        await search_input.fill(input);

        // ✅ Press Enter to search
        await this.page.keyboard.press('Enter');

        // ✅ Wait for product results to appear
        await this.locators.Product_card.first().waitFor({ state: 'visible', timeout: 15000 });

        console.log(`🔍 Successfully searched for "${input}"`);
    }

    async Product_price() {
        const cards = this.locators.Product_card;
        const count = await cards.count();
        console.log(`Found ${count} visible oximeter products:`);

        for (let i = 0; i < count; i++) {
            const product = cards.nth(i);
            if (!(await product.isVisible().catch(() => false))) continue;

            try {
                const brand = (await product.locator(this.locators.brandName).textContent({ timeout: 2000 }).catch(() => null))?.trim();
                const price = (await product.locator(this.locators.Price).textContent({ timeout: 2000 }).catch(() => null))?.trim();

                if (brand && price) {
                    console.log(`\n🔹 Product ${i + 1}`);
                    console.log(` Brand: ${brand}`);
                    console.log(` Price: ₹${price}`);
                }
            } catch (err) {
                console.warn(`⚠️ Skipped product ${i + 1}: ${err}`);
            }
        }
    }





    }
