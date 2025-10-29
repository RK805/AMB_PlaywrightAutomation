import { Page } from '@playwright/test';
//import class_name from path
import { RbcRoyal_DashBord } from '../locators/RbcRoyal_DashBordloc';
//  IMPORT EXPLANATION:
// If a class or function is exported using `export default`, we import it WITHOUT curly braces:
//    import RbcRoyal_DashBord from '../locators/RbcRoyal_DashBordloc';
// This works because the file exports only one main item.

// If a class or function is exported using `export` (named export), we MUST use curly braces:
//    import { RbcRoyal_DashBord } from '../locators/RbcRoyal_DashBordloc';
// This is required when the file exports multiple items or doesn't use `default`.

export  class RbcRoyalDashboardPage {
    private readonly page: Page;
    readonly locators: RbcRoyal_DashBord;
    constructor(page: Page) {
        this.page = page;
        this.locators = new RbcRoyal_DashBord(page);
    }

    //If you put those (methods) inside the constructor, they’d run immediately every time you create the object, which you don’t want.

    private readonly HOME_PAGE_URL = 'https://www.rbcroyalbank.com/';

    async navigateToHomePage() {
        await this.page.goto(this.HOME_PAGE_URL);
    }

    async clickPersonalLoans() {
        await this.locators.Investments.waitFor({ state: 'visible' });
        await this.locators.Loans.hover();
        await this.locators.personalLoans.scrollIntoViewIfNeeded();
        await this.locators.personalLoans.click();
    }
}
