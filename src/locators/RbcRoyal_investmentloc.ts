import { Page, Locator } from '@playwright/test';

export default class RbcRoyal_investmentloc {
    private readonly page: Page;

    // Locators
    readonly Investments: Locator;
    readonly Investments_mutualFunds: Locator;
    readonly MutualFunds: Locator;
    readonly InvestmentPerformanceSnapshot: Locator;
    readonly InvestmentPerformanceSnapshotText: Locator;
    readonly placeHolder: Locator;
    readonly ListOfThePlaceHolder: Locator;
    readonly SelectSeriesTextBox: Locator;
    readonly listOfTheSeriesTextBox: Locator;
    readonly InitialInvestment: Locator;
    readonly ContributionAmount: Locator;
    readonly FrequencyTextBox: Locator;
    readonly selectingWeeklyOption: Locator;
    readonly AnnualIncrese: Locator;
    readonly DONotApplyOption: Locator;
    readonly WithdrawalAmount: Locator;
    readonly ViewFundPerformanceButton: Locator;
    readonly InitialInvestmentPrice: Locator;
    readonly TotalDistributionsPrice: Locator;
    readonly allInvestmentToolsAndCalculatorsLink: Locator;
    readonly Loans: Locator;
    readonly personalLoans: Locator;

    constructor(page: Page) {
        this.page = page;

        this.Investments = page.locator("//a[text()='Investments' and @data-dig-action='Click Button']");
        this.Investments_mutualFunds = page.locator("//a[contains(@data-dig-label,'Investments - Mutual Funds')]");
        this.MutualFunds = page.locator("//a[@data-dig-label='pbmenu - Investments - Mutual Funds']");
        this.InvestmentPerformanceSnapshot = page.locator("//span[text()='Investment Performance Snapshot']");
        this.InvestmentPerformanceSnapshotText = page.locator("//h1[text()='Investment Performance Snapshot']");
        this.placeHolder = page.locator("//input[@placeholder='Select fund']");
        this.ListOfThePlaceHolder = page.locator("//ul[@class='rbc-autocomplete-search-results']/li");
        this.SelectSeriesTextBox = page.locator("//div[contains(@class,'rbc-dropdown')]/child::button[normalize-space()='Select series']");
        this.listOfTheSeriesTextBox = page.locator("//ul[@role='listbox']/li[normalize-space()='A' or normalize-space()='O' or normalize-space()='D' or normalize-space()='F']");
        this.InitialInvestment = page.locator("//input[@placeholder='Initial investment']");
        this.ContributionAmount = page.locator("//input[@placeholder='Contribution amount']");
        this.FrequencyTextBox = page.locator("//button[@aria-expanded='false' and @data-selected='BIWEEKLY' or @data-selected='WEEKLY' or @data-selected='MONTHLY'][1]");
        this.selectingWeeklyOption = page.locator("//li[@aria-selected='true' and normalize-space()='Weekly']");
        this.AnnualIncrese = page.locator("//span[text()='Annual increase ']/../following-sibling::rbc-dropdown//following::button[normalize-space()='Select'][1]");
        this.DONotApplyOption = page.locator("//li[@aria-selected='true' and normalize-space()='Do not apply']");
        this.WithdrawalAmount = page.locator("//label[normalize-space()='Withdrawal amount']/../following::input");
        this.ViewFundPerformanceButton = page.locator("//slot[normalize-space()='View fund performance']/..");
        this.InitialInvestmentPrice = page.locator("//p[normalize-space()='Initial investment']/following-sibling::div");
        this.TotalDistributionsPrice = page.locator("//p[normalize-space()='Total distributions']/following-sibling::div/div/h4");
        this.allInvestmentToolsAndCalculatorsLink = page.locator("//div//a[normalize-space()='All Investment Tools & Calculators']");
        this.Loans = page.locator("//a[text()='Loans' and @data-dig-action='Click Button']");
        this.personalLoans = page.locator("//a[contains(@data-dig-label,'Personal Loans')]");
    }

}
