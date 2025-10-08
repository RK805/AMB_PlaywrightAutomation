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

    constructor(browserTab: Page) {
        this.page = browserTab;

        this.Investments = browserTab.locator("//a[text()='Investments' and @data-dig-action='Click Button']");
        this.Investments_mutualFunds = browserTab.locator("//a[contains(@data-dig-label,'Investments - Mutual Funds')]");
        this.MutualFunds = browserTab.locator("//a[@data-dig-label='pbmenu - Investments - Mutual Funds']");
        this.InvestmentPerformanceSnapshot = browserTab.locator("//span[text()='Investment Performance Snapshot']");
        this.InvestmentPerformanceSnapshotText = browserTab.locator("//h1[text()='Investment Performance Snapshot']");
        this.placeHolder = browserTab.locator("//input[@placeholder='Select fund']");
        this.ListOfThePlaceHolder = browserTab.locator("//ul[@class='rbc-autocomplete-search-results']/li");
        this.SelectSeriesTextBox = browserTab.locator("//div[contains(@class,'rbc-dropdown')]/child::button[normalize-space()='Select series']");
        this.listOfTheSeriesTextBox = browserTab.locator("//ul[@role='listbox']/li[normalize-space()='A' or normalize-space()='O' or normalize-space()='D' or normalize-space()='F']");
        this.InitialInvestment = browserTab.locator("//input[@placeholder='Initial investment']");
        this.ContributionAmount = browserTab.locator("//input[@placeholder='Contribution amount']");
        this.FrequencyTextBox = browserTab.locator("//button[@aria-expanded='false' and @data-selected='BIWEEKLY' or @data-selected='WEEKLY' or @data-selected='MONTHLY'][1]");
        this.selectingWeeklyOption = browserTab.locator("//li[@aria-selected='true' and normalize-space()='Weekly']");
        this.AnnualIncrese = browserTab.locator("//span[text()='Annual increase ']/../following-sibling::rbc-dropdown//following::button[normalize-space()='Select'][1]");
        this.DONotApplyOption = browserTab.locator("//li[@aria-selected='true' and normalize-space()='Do not apply']");
        this.WithdrawalAmount = browserTab.locator("//label[normalize-space()='Withdrawal amount']/../following::input");
        this.ViewFundPerformanceButton = browserTab.locator("//slot[normalize-space()='View fund performance']/..");
        this.InitialInvestmentPrice = browserTab.locator("//p[normalize-space()='Initial investment']/following-sibling::div");
        this.TotalDistributionsPrice = browserTab.locator("//p[normalize-space()='Total distributions']/following-sibling::div/div/h4");
        this.allInvestmentToolsAndCalculatorsLink = browserTab.locator("//div//a[normalize-space()='All Investment Tools & Calculators']");
        this.Loans = browserTab.locator("//a[text()='Loans' and @data-dig-action='Click Button']");
        this.personalLoans = browserTab.locator("//a[contains(@data-dig-label,'Personal Loans')]");
    }
}
