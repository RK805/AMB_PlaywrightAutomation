import { Page } from '@playwright/test';
import RbcRoyal_Equity_linkedGICsloc from '../locators/RbcRoyal_Equity_linkedGICsloc';
import logger from '../utils/logger';

export class RbcRoyal_Equity_linkedGIC {
    private readonly page: Page;
    readonly locators: RbcRoyal_Equity_linkedGICsloc;

    constructor(page: Page) {
        this.page = page;
        this.locators = new RbcRoyal_Equity_linkedGICsloc(page);
    }

    async clickonEquitycal() {
        logger.info('Clicking on Equity-Linked GIC calculator');
        await this.locators.Gic_cal.click();
    }

    async enterInitialInvestment(investment: string) {
        logger.info(`Entering initial investment: ${investment}`);
        await this.locators.initialInvestment.fill(investment);
    }

    async enterGICDate(date: string) {
        logger.info(`Entering GIC date: ${date}`);
        await this.locators.GICDate.fill(date);
    }

    async clickMarketSmartRadio() {
        logger.info('Selecting MarketSmart GIC radio option');
        await this.locators.MmarketSmartRedio.click();
    }

    async clickUSMarketSmartGICRadio() {
        logger.info('Selecting US MarketSmart GIC radio option');
        await this.locators.USMarketSmartGICRedio.click();
    }

    async clickGICsTermYearsRadio() {
        logger.info('Selecting GIC term in years');
        await this.locators.GICsTermYearsRedio.scrollIntoViewIfNeeded();
        await this.locators.GICsTermYearsRedio.click();
    }

    async clickCalculateReturnValue() {
        logger.info('Clicking Calculate Return button');
        await this.locators.CalculateReturnValue.click();
    }

    async getCurrentValueOfInvestment() {
        const value = await this.locators.CurrentValueOfInvestment.textContent();
        logger.info(`Retrieved current value of investment: ${value}`);
        return value;
    }

    async getOriginalInvestment() {
        const value = await this.locators.OriginalInvestment.textContent();
        logger.info(`Retrieved original investment value: ${value}`);
        return value;
    }

    async getMinimumReturnValue() {
        const value = await this.locators.minimumReturnValue.textContent();
        logger.info(`Retrieved minimum return value: ${value}`);
        return value;
    }

    async getMaximumReturnValue() {
        const value = await this.locators.maximumReturnValue.textContent();
        logger.info(`Retrieved maximum return value: ${value}`);
        return value;
    }

    async getIBL() {
        const value = await this.locators.IBL.textContent();
        logger.info(`Retrieved IBL value: ${value}`);
        return value;
    }

    async getCurrentIndexValue() {
        const value = await this.locators.currentIndexValue.textContent();
        logger.info(`Retrieved current index value: ${value}`);
        return value;
    }
}
