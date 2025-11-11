import { Page, expect } from "@playwright/test"
import { DashBoard_LOC } from '../../locators/Surgical_locators/Dashboard_loc'

export class Dashboard_page {

    page: Page;
    readonly locators: DashBoard_LOC;

    constructor(page: Page) {
        this.page = page;
        this.locators = new DashBoard_LOC(this.page);
    }

    async TocheckTittle() {
       
        const actualTitle = await this.page.title();
        expect(actualTitle).toBe("Surginatal - India's Best Online Surgical Supply Store");

    }
    async Tocheckhover() {
        await this.locators.popularBrands.hover()

    }
}

 