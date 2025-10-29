import { Page, Locator, expect } from "@playwright/test"

export default class RbcRoyal_personalLoansloc {

    private readonly page: Page;
    //locators
    readonly loanslink: Locator;
    readonly personal: Locator;
    readonly personalLoansLink: Locator;
    readonly borrowingReasonDropdown: Locator;
    readonly borrowingReasonOptions: Locator;
    readonly borrowingloanAmount: Locator;
    readonly getResultsButton: Locator;
    readonly borrowingAmount: Locator;
    readonly interstRate: Locator;
    readonly loanButton: Locator;
    readonly repaymentPeriod: Locator;
    readonly repaymentPeriodOption: Locator;
    readonly monthlyPayment: Locator;
    readonly monthlyPaymentOption: Locator;
    readonly getRelust: Locator;
    readonly resultAmount: Locator;

    constructor(page: Page) {
        this.page = page;

        //a[@role='button' and text()='Loans']
        this.loanslink = page.locator(" //a[@role='button' and text()='Loans']");
        this.personal = page.locator("//a[normalize-space(text())='Personal Loans' and @data-dig-action='Click Button']")
        this.personalLoansLink = page.locator("//h2[@class='text-center mar-b']");
        this.borrowingReasonDropdown = page.locator("//div[@class='select-wpr required']/select");
        this.borrowingReasonOptions = page.locator("//div[@class='select-wpr required']/select");
        this.borrowingloanAmount = page.locator("//div[contains(@style,'padding-left')]//input[@placeholder='Enter amount']");
        this.getResultsButton = page.locator("//div[contains(@class,'grid-three-fourths')]//a[text()='Get Results']");
        this.borrowingAmount = page.locator("//label[normalize-space()='How much would you like to borrow:']");
        this.interstRate = page.locator("//input[@id='calRate']");
        this.loanButton = page.locator("//ul[@id='calKind']/li/a[text()='Loan']");
        this.repaymentPeriod = page.locator("//div[contains(@class,'input-wpr required')]/following::select[@id='calPeriod']");
        this.repaymentPeriodOption = page.locator("//div[contains(@class,'input-wpr required')]/following::select[@id='calPeriod']");
        this.monthlyPayment = page.locator("//div[contains(@class,'input-wpr required')]/following::select[@id='calFrequency']");
        this.monthlyPaymentOption = page.locator("//div[contains(@class,'input-wpr required')]/following::select[@id='calFrequency']");
        this.getRelust = page.locator("//input[@id='get-results-btn']");
        this.resultAmount = page.locator("//p[contains(@class,'result-amount')]");



    }

}