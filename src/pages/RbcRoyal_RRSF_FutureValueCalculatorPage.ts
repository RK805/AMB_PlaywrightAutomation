
/*import {Page} from '@playwright/test'
import RbcRoyal_RRSF_FutureValueCalculator from '../locators/RbcRoyal_RRSF_FutureValueCalculatorloc'


export class RbcRoyal_RRSF_FutureValueCalculators {
    readonly page: Page
    readonly locators:  RbcRoyal_RRSF_FutureValueCalculator

    constructor(page: Page) {
        this.page = page;
        this.locators = new RbcRoyal_RRSF_FutureValueCalculator(page)
    }
    async clickOnRRSF(): Promise<void> {
        // Clicks the RRSP Future Value Calculator link
        await this.locators.RRSFlink.click();
    }

    async enterInvestmentValue(value: string): Promise<void> {
        await this.locators.investmentValue.waitFor({ state: 'visible' });
        await this.locators.investmentValue.fill('');
        await this.locators.investmentValue.type(value);
    }

    async enterRateOfReturn(rate: string): Promise<void> {
        await this.locators.rateOfReturn.waitFor({ state: 'visible' });
        await this.locators.rateOfReturn.click();
        await this.locators.rateOfReturn.fill('');
        await this.locators.rateOfReturn.type(rate);
    }

    async enterNumberOfYears(years: string): Promise<void> {
        await this.locators.numberOfyears.scrollIntoViewIfNeeded();
        await this.locators.numberOfyears.hover();
        await this.locators.numberOfyears.click();
        await this.locators.numberOfyears.fill('');
        await this.locators.numberOfyears.type(years);
    }

    async clickCalculateButton(): Promise<void> {
        await this.locators.CalculateButton.waitFor({ state: 'visible' });
        await this.locators.CalculateButton.click();
    }

    async getValueOfInvestment(): Promise<string> {
        await this.locators.valueOfInvestmentPrices.waitFor({ state: 'visible' });
        return await this.locators.valueOfInvestmentPrices.textContent() ?? '';
    }

    async clickRecalculateButton(): Promise<void> {
        await this.locators.recalculateButton.waitFor({ state: 'visible' });
        await this.locators.recalculateButton.click();
    }
}*/

import { Page } from '@playwright/test';
import RbcRoyal_RRSF_FutureValueCalculator from '../locators/RbcRoyal_RRSF_FutureValueCalculatorloc';
import logger from '../utils/logger';

export class RbcRoyal_RRSF_FutureValueCalculators {
    readonly page: Page;
    readonly locators: RbcRoyal_RRSF_FutureValueCalculator;

    constructor(page: Page) {
        this.page = page;
        this.locators = new RbcRoyal_RRSF_FutureValueCalculator(page);
    }

    async clickOnRRSF(): Promise<void> {
        logger.info('Clicking RRSP Future Value Calculator link...');
        await this.locators.RRSFlink.scrollIntoViewIfNeeded();
        await this.locators.RRSFlink.click();
    }

    async enterInvestmentValue(value: string): Promise<void> {
        logger.info(`Entering investment value: ${value}`);
        await this.locators.investmentValue.waitFor({ state: 'visible', timeout: 5000 });
        await this.locators.investmentValue.fill(value);
    }

    async enterRateOfReturn(rate: string): Promise<void> {
        logger.info(`Entering rate of return: ${rate}%`);
        await this.locators.rateOfReturn.waitFor({ state: 'visible', timeout: 5000 });
        await this.locators.rateOfReturn.scrollIntoViewIfNeeded();
        await this.locators.rateOfReturn.fill(rate);
    }

    async enterNumberOfYears(years: string): Promise<void> {
        logger.info(`Entering number of years: ${years}`);
        await this.locators.numberOfyears.waitFor({ state: 'visible', timeout: 5000 });
        await this.locators.numberOfyears.scrollIntoViewIfNeeded();
        await this.locators.numberOfyears.fill(years);
    }

    async clickCalculateButton(): Promise<void> {
        logger.info('Clicking Calculate button...');
        await this.locators.CalculateButton.waitFor({ state: 'visible', timeout: 5000 });
        await this.locators.CalculateButton.scrollIntoViewIfNeeded();
        await this.locators.CalculateButton.click();
    }

    async getValueOfInvestment(): Promise<string> {
        logger.info('Retrieving calculated investment value...');
        await this.locators.valueOfInvestmentPrices.waitFor({ state: 'visible', timeout: 5000 });
        const value = await this.locators.valueOfInvestmentPrices.textContent() ?? '';
        logger.info(`Calculated value displayed: ${value}`);
        return value.trim();
    }

    async clickRecalculateButton(): Promise<void> {
        logger.info('Clicking Recalculate button...');
        await this.locators.recalculateButton.waitFor({ state: 'visible', timeout: 5000 });
        await this.locators.recalculateButton.scrollIntoViewIfNeeded();
        await this.locators.recalculateButton.click();
    }
}
