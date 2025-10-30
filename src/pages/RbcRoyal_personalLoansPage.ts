import { Page } from '@playwright/test';
import RbcRoyal_personalLoansloc from '../locators/RbcRoyal_personalLoansloc';
import logger from '../utils/logger'; // ✅ import your logger
import { title } from 'process';
export class RbcRoyal_personalLoans {
    readonly page: Page;
    readonly locators: RbcRoyal_personalLoansloc;

    constructor(page: Page) {
        this.page = page;
        this.locators = new RbcRoyal_personalLoansloc(page);
    }

    async gotoPersonalLoan() {
        logger.info("pleasing the mouse near personalloan")
        await this.locators.loanslink.hover();
    }

    async gotoPersonal() {

        logger.info ("clicking on perosnalLoan")
        await this.locators.personal.click();
    }

    async getTitle(): Promise<string> {
        logger.info (" returning title")
        return await this.page.title();
        
    }

    async clickBorrowingReasonDropdown() {
        logger.info(" clicking on Borrowing Reason boc")
        await this.locators.borrowingReasonDropdown.scrollIntoViewIfNeeded();
        await this.locators.borrowingReasonDropdown.click();
    }

    // ✅ FIXED: selectOption must be used on <select>, not <option>
    async selectBorrowingReason(reason: string) {
        //await this.locators.borrowingReasonDropdown.waitFor({ state: 'visible' });
        logger.info("selecting the reason for borrowing")
 
        await this.locators.borrowingReasonDropdown.selectOption({ label: reason }); //({ value: reason });
    }

    async enterLoanAmount(amount: string) {
        logger.info("clicking and filling loan amount")
        await this.locators.borrowingloanAmount.click();
        await this.locators.borrowingloanAmount.fill(amount);
    }

    async clickGetResultsButton() {
        logger.info ("Click on  Result Button")
        await this.locators.getResultsButton.click();
    }

    async enterInterestRate(rate: string) {
        logger.info (" Click on rate and entering rate of Intrest")
        await this.locators.interstRate.scrollIntoViewIfNeeded();
        await this.locators.interstRate.fill(rate);
    }

    async clickLoanButton() {
        logger.info("click loan Button")
        await this.locators.loanButton.click();
    }

    // ✅ FIXED: use correct dropdown locator
    async selectRepaymentPeriod(period: string) {
        logger.info("filing the repayment period")
        await this.locators.repaymentPeriodOption.waitFor({ state: 'visible' });
        await this.locators.repaymentPeriodOption.selectOption({ value : period });
    }

    async selectMonthlyPayment(payment: string) {
        logger.info("filing the monthlyPayment ")
        await this.locators.monthlyPaymentOption.waitFor({ state: 'visible' });
        await this.locators.monthlyPaymentOption.selectOption({ value : payment });
    }

    async clickGetResult() {
        logger.info (" CLicking on resutl button")
        await this.locators.getRelust.click();
    }

    async getResultAmount(): Promise<string> {
        const result = await this.locators.resultAmount.textContent();
        logger.info(`amount entered, ${result} `)
        if (result?.includes("Please enter a valid loan amount")) {
            console.log("Error message displayed:", result);
        } else {
            console.log("Result Amount:", result);
        }
        return result?.trim() || '';
    }
}
