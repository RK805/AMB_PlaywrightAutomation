import { Page, Locator, expect } from "@playwright/test"

export default class RbcRoyal_RRSF_FutureValueCalculatorloc {
    private readonly page : Page;
    //locators


    readonly investmentValue: Locator;
    readonly rateOfReturn: Locator;
    readonly numberOfyears: Locator;
    readonly CalculateButton: Locator;
    readonly valueOfInvestmentPrices: Locator;
    readonly recalculateButton: Locator
    constructor(page: Page) {
        this.page = page;
        this.investmentValue = page.locator(" //div[contains(@style,'display')]/following::input[@id='current-value-input'] ");
        this.rateOfReturn = page.locator(" //div[@id='average-tooltip']/following::input[@id='rate-of-return-input'] ");
        this.numberOfyears = page.locator(" //div//input[@id='years-until-retirement'] ");
        this.CalculateButton = page.locator(" //button[text()='Calculate'] ");
        this.valueOfInvestmentPrices = page.locator("//h2[@id='years-retirement-result']/following::p[@id='value-years-result']/span");
        this.recalculateButton = page.locator(" //button[text()='Recalculate'] ")
    }
}
