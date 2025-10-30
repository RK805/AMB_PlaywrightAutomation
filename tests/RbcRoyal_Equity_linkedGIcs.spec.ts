import { test, expect } from '@playwright/test';
import { RbcRoyal_Equity_linkedGIC } from '../src/pages/RbcRoyal_Equity_linkedGICsPage';
import logger from '../src/utils/logger'; //assuming you have a shared logger
import { Equity } from '../TestData/qa/PersonalLoan.json';

test('Verify GIC return calculation', async ({ page }) => {
    const gicPage = new RbcRoyal_Equity_linkedGIC(page);

    logger.info('Navigating to RBC GIC calculator page...');
    await page.goto('https://www.rbcroyalbank.com/investments/investment-calculators-tools.html');

    logger.info(' Clicking on Equity-Linked GIC calculator...');
    await gicPage.clickonEquitycal();

    logger.info(` Entering Initial Investment: ${Equity.enterInitialInvestment}`);
    await gicPage.enterInitialInvestment(Equity.enterInitialInvestment);

    logger.info(` Entering GIC Date: ${Equity.enterGICDate}`);
    await gicPage.enterGICDate(Equity.enterGICDate);

    logger.info(' Selecting MarketSmart GIC option...');
    await gicPage.clickMarketSmartRadio();

    logger.info('🇺🇸 Selecting US MarketSmart GIC...');
    await gicPage.clickUSMarketSmartGICRadio();

    logger.info('Selecting GIC Term in Years...');
    await gicPage.clickGICsTermYearsRadio();

    logger.info(' Clicking Calculate Return...');
    await gicPage.clickCalculateReturnValue();

    const currentVal = await gicPage.getCurrentValueOfInvestment();
    const originalVal = await gicPage.getOriginalInvestment();

    logger.info(` Current Value of Investment: ${currentVal}`);
    logger.info(` Original Investment: ${originalVal}`);

    expect(currentVal).not.toBeNull();
    expect(originalVal).toContain('$101,500.00');
});
