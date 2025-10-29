/*import { Page } from "@playwright/test";
import RbcRoyal_investmentloc from "../locators/RbcRoyal_investmentloc";
import logger from '../utils/logger'; // ✅ import your logger

export class RbcRoyal_investment {
    page: Page;
    locators: RbcRoyal_investmentloc;

    constructor(page: Page) {
        this.page = page;
        this.locators = new RbcRoyal_investmentloc(page);
    }

    async clickMutualFunds() {
        await this.locators.Investments.hover();
        await this.locators.Investments_mutualFunds.click();
    }

    async clickInvestmentPerformanceSnapshot() {
        await this.locators.InvestmentPerformanceSnapshot.scrollIntoViewIfNeeded();
        await this.locators.InvestmentPerformanceSnapshot.click();
    }

   /* async switchToSnapshotTab() {
        const context = this.page.context();

        // Wait for a new tab to open after clicking the snapshot link
        const newTab: Page = await context.waitForEvent('page');

        // Bring the new tab to front and rebind this.page
        await newTab.bringToFront();
        this.page = newTab;
    }


    async enterFundInPlaceHolder(fundName: string) {
        await this.page.goto("https://ips-gamtools.rbcgam.com/en/")
        console.log('Current tab URL:', await this.page.url());
        await this.locators.placeHolder.waitFor({ state: 'visible', timeout: 60000 });
        await this.locators.placeHolder.click();
        await this.locators.placeHolder.fill(fundName);
        await this.page.waitForTimeout(1000);
        const matchingFund = this.locators.ListOfThePlaceHolder.filter({ hasText: fundName }).first();
        if (await matchingFund.isVisible()) {
            await matchingFund.click();
        } else {
            throw new Error(`Fund "${fundName}" not found in dropdown`);
        }
    }

    async clickSelectSeries(series: string) {
        await this.locators.SelectSeriesTextBox.click();
        await this.locators.listOfTheSeriesTextBox.filter({ hasText: series }).first().click();
    }

    async enterInitialInvestment(value: string) {
        await this.locators.InitialInvestment.fill(value);
    }

    async enterContributionAmount(value: string) {
        await this.locators.ContributionAmount.fill(value);
    }

    async selectWeeklyFrequency() {
        await this.locators.FrequencyTextBox.first().click();
        await this.locators.selectingWeeklyOption.first().click();
    }

    async clickAnnualIncrease() {
        await this.locators.AnnualIncrese.first().click();
        await this.locators.DONotApplyOption.first().click();
    }

    async enterWithdrawalAmount(value: string) {
        await this.locators.WithdrawalAmount.first ().fill(value);
    }

    async clickViewFundPerformanceButton() {
        await this.locators.ViewFundPerformanceButton.first().click();
    }

    async checkInvestmentPerformanceSnapshotView() {
        const initial = await this.locators.InitialInvestmentPrice.textContent();
        const distributions = await this.locators.TotalDistributionsPrice.textContent();
        console.log('Initial Investment:', initial);
        console.log('Total Distributions:', distributions);
        await this.page.close();
    }

   

   } */


import { Page } from "@playwright/test";
import RbcRoyal_investmentloc from "../locators/RbcRoyal_investmentloc";
import logger from '../utils/logger';

export class RbcRoyal_investment {
    page: Page;
    locators: RbcRoyal_investmentloc;

    constructor(page: Page) {
        this.page = page;
        this.locators = new RbcRoyal_investmentloc(page);
        logger.info(' RbcRoyal_investment page object initialized');
    }

    async clickMutualFunds() {
        logger.info(' Clicking on Mutual Funds under Investments');
        await this.locators.Investments.hover();
        await this.locators.Investments_mutualFunds.click();
    }

    async clickInvestmentPerformanceSnapshot() {
        logger.info(' Clicking on Investment Performance Snapshot link');
        await this.locators.InvestmentPerformanceSnapshot.scrollIntoViewIfNeeded();
        await this.locators.InvestmentPerformanceSnapshot.click();
    }

    async enterFundInPlaceHolder(fundName: string) {
        logger.info(` Navigating to fund search page and entering fund: ${fundName}`);
        await this.page.goto("https://ips-gamtools.rbcgam.com/en/");
        logger.info(` Current tab URL: ${await this.page.url()}`);
        await this.locators.placeHolder.waitFor({ state: 'visible', timeout: 60000 });
        await this.locators.placeHolder.click();
        await this.locators.placeHolder.fill(fundName);
        await this.page.waitForTimeout(1000);

        const matchingFund = this.locators.ListOfThePlaceHolder.filter({ hasText: fundName }).first();
        if (await matchingFund.isVisible()) {
            logger.info(`Fund "${fundName}" found in dropdown — selecting`);
            await matchingFund.click();
        } else {
            logger.error(` Fund "${fundName}" not found in dropdown`);
            throw new Error(`Fund "${fundName}" not found in dropdown`);
        }
    }

    async clickSelectSeries(series: string) {
        logger.info(` Selecting series: ${series}`);
        await this.locators.SelectSeriesTextBox.click();
        await this.locators.listOfTheSeriesTextBox.filter({ hasText: series }).first().click();
    }

    async enterInitialInvestment(value: string) {
        logger.info(` Entering initial investment: ${value}`);
        await this.locators.InitialInvestment.fill(value);
    }

    async enterContributionAmount(value: string) {
        logger.info(` Entering contribution amount: ${value}`);
        await this.locators.ContributionAmount.fill(value);
    }

    async selectWeeklyFrequency() {
        logger.info(' Selecting Weekly frequency');
        await this.locators.FrequencyTextBox.first().click();
        await this.locators.selectingWeeklyOption.first().click();
    }

    async clickAnnualIncrease() {
        logger.info(' Clicking Annual Increase and selecting "Do Not Apply"');
        await this.locators.AnnualIncrese.first().click();
        await this.locators.DONotApplyOption.first().click();
    }

    async enterWithdrawalAmount(value: string) {
        logger.info(` Entering withdrawal amount: ${value}`);
        await this.locators.WithdrawalAmount.first().fill(value);
    }

    async clickViewFundPerformanceButton() {
        logger.info(' Clicking View Fund Performance button');
        await this.locators.ViewFundPerformanceButton.first().click();
    }

    async checkInvestmentPerformanceSnapshotView() {
        logger.info(' Checking Investment Performance Snapshot values');
        const initial = await this.locators.InitialInvestmentPrice.textContent();
        const distributions = await this.locators.TotalDistributionsPrice.textContent();
        logger.info(` Initial Investment: ${initial}`);
        logger.info(` Total Distributions: ${distributions}`);
        await this.page.close();
        logger.info(' Closed snapshot tab');
    }
}


