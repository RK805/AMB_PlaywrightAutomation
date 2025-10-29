import { Page, Locator, expect } from '@playwright/test';

export default class RbcRoyal_Equity_linkedGICsloc {
    private readonly page: Page 
    readonly log: Locator;
    readonly initialInvestment: Locator;
    readonly GICDate: Locator;
    readonly MmarketSmartRedio: Locator;
    readonly USMarketSmartGICRedio: Locator;
    readonly GICsTermYearsRedio: Locator;
    readonly CalculateReturnValue: Locator;
    readonly CurrentValueOfInvestment: Locator;
    readonly OriginalInvestment: Locator;
    readonly minimumReturnValue: Locator;
    readonly maximumReturnValue: Locator;
    readonly IBL: Locator;
    readonly currentIndexValue: Locator;
    readonly Gic_cal: Locator;

    constructor(page: Page) {
        //If you don’t write this.page = page, your class won’t know what tab to use — and all your locators will break.
        this.page = page;
        this.log = page.locator("//h2[@class='accordion-title active']");
        this.Gic_cal = page.locator(" //p[contains(text(), 'Equity- Linked GICs')]/following-sibling::div[@class='callout-link']//a[@class='goto-link']")
        this.initialInvestment = page.locator("//div[@id='principal-container']//input[@id='principalamount']");
        this.GICDate = page.locator("//div[@id='date-container']//input[@id='investmentdate']");
        this.MmarketSmartRedio = page.locator("//label[contains(@data-dig-label,'MarketSmart GIC Guaranteed Minimum Return')]");
        this.USMarketSmartGICRedio = page.locator("//label[contains(@data-dig-label,'U.S. MarketSmart GIC')]");
        this.GICsTermYearsRedio = page.locator("//label[contains(@data-dig-label,'GIC Return Calculator - Term - 5 years')]");
        this.CalculateReturnValue = page.locator("//button[text()='Calculate Return Value']");
        this.CurrentValueOfInvestment = page.locator("//p[text()='Current value of investment']/parent::div/p[@class='return-value']");
        this.OriginalInvestment = page.locator("//p[text()='Original investment']/parent::div/p[@class='principal-value']");
        this.minimumReturnValue = page.locator("//div[@class='grid-one-third type-guaranteed']//p[@class='min-return-value']");
        this.maximumReturnValue = page.locator("//div[@class='grid-one-third type-guaranteed']//p[@class='max-return-value']");
        this.IBL = page.locator("//div[@class='grid-one-third type-guaranteed']//p[@class='ibl-value']");
        this.currentIndexValue = page.locator("//div[@class='grid-one-third type-guaranteed']//p[@class='isl-value']");
    }
}