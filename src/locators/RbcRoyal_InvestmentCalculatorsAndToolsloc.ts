import { Page, Locator } from '@playwright/test'; 

export default class RbcRoyal_InvestmentCaluclatorsAndToolsloc {
    private readonly page: Page;

    // locatorss
    readonly RRSPFutureValueCalculatorLink: Locator;
    readonly GICSelect: Locator;
    readonly EquityLinkedGICReturnCalculator: Locator

    constructor(page: Page) {
        this.page = page;
        this.RRSPFutureValueCalculatorLink = page.locator("//span[text()='RRSP Future Value Calculator']");
        this.GICSelect = page.locator("//span[text()='GIC Selector']");
        this.EquityLinkedGICReturnCalculator = page.locator("//span[text()='Equity-Linked GIC Return Calculator']")


    }
}