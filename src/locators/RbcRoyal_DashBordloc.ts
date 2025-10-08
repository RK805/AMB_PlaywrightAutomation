
import { Page, Locator,expect } from '@playwright/test';
export  class RbcRoyal_DashBord {

    private readonly page: Page;
    private readonly HOME_PAGE_URL = 'https://www.rbcroyalbank.com/';

    //“This property will hold a Playwright Locator — not a string, not a number, not anything else.”
    readonly Investments: Locator; 
    readonly Investments_mutualFunds: Locator;
    readonly Investments_AllInvestmentTools: Locator;
    readonly allCalculate: Locator;
    readonly Loans: Locator;
    readonly personalLoans: Locator;

    constructor(page: Page) {
        this.page = page;
        this.Investments = page.locator("//a[text()='Investments' and @data-dig-action='Click Button']");
        this.Investments_mutualFunds = page.locator("//a[contains(@data-dig-label,'Investments - Mutual Funds')]");
        this.Investments_AllInvestmentTools = page.locator("//a[contains(@data-dig-label,'Investments - All Investment Tools & calculators')]");
        this.allCalculate = page.locator("//a[normalize-space()='All Investment Tools & Calculators']");
        this.Loans = page.locator("//a[text()='Loans' and @data-dig-action='Click Button']");
        this.personalLoans = page.locator("//a[contains(@data-dig-label,'Personal Loans')]");
    }


}




