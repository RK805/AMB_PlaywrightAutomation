import { Page, Locator } from "@playwright/test";

export class search_loc {
    readonly page: Page;
    readonly search_Path: Locator;
    readonly Product_card: Locator;
    readonly Price: string;
    readonly brandName: string;

    constructor(page: Page) {
        this.page = page;

        // ✅ Locators
        this.search_Path = page.locator("//input[@placeholder='Search for products']");
        this.Product_card = page.locator("//div[@class='desktop-page-content']//div[@class='product-card: visible']");

        // ✅ Use CSS selectors for speed and reliability
        this.Price = ".card-prod-price span:not(.card-prod-mrp)";
        this.brandName = ".card-prod-name h2";
    }
}
