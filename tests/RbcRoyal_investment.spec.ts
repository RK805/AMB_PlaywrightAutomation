/*import { test } from "@playwright/test";
import { RbcRoyal_investment } from '../src/pages/RbcRoyal_investmentPage'

//test.describe('RBC Investment Performance Snapshot Flow', () => {
    test('should complete investment performance calculation', async ({ page }) => {
        const page4 = new RbcRoyal_investment(page);

        await page.goto('https://www.rbcroyalbank.com/personal.html');

        await page4.clickMutualFunds();
        await page4.clickInvestmentPerformanceSnapshot();
        //await page4.switchToSnapshotTab();

        await page4.enterFundInPlaceHolder('BlueBay $U.S. Global High Yield Bond Fund (Canada)');
        await page4.clickSelectSeries('F');
        await page4.enterInitialInvestment('10000');
        await page4.enterContributionAmount('500');
        await page4.selectWeeklyFrequency();
        await page4.clickAnnualIncrease();
        await page4.enterWithdrawalAmount('0');
        await page4.clickViewFundPerformanceButton();

        await page4.checkInvestmentPerformanceSnapshotView();
    });*/

/*import { test } from "@playwright/test";
import { RbcRoyal_investment } from '../src/pages/RbcRoyal_investmentPage';
import logger from '../src/utils/logger'; // ✅ import Winston logger
import RBCinvestment from '../TestData/qa/PersonalLoan.json'

test('should complete investment performance calculation', async ({ page }) => {
    const page4 = new RbcRoyal_investment(page);

    try {
        logger.info(' Test started: RBC Investment Performance Snapshot Flow');

        logger.info(' Navigating to RBC Personal page');
        await page.goto('https://www.rbcroyalbank.com/personal.html');

        logger.info(' Clicking Mutual Funds');
        await page4.clickMutualFunds();

        logger.info(' Clicking Investment Performance Snapshot');
        await page4.clickInvestmentPerformanceSnapshot();

        const fundName = RBCinvestment.FundName;
        logger.info(` Entering fund name: ${fundName}`);
        await page4.enterFundInPlaceHolder(fundName);

        const series = RBCinvestment.series
        logger.info(` Selecting series: ${series}`);
        await page4.clickSelectSeries(series);

        const initialInvestment = '10000';
        logger.info(` Entering initial investment: ${initialInvestment}`);
        await page4.enterInitialInvestment(initialInvestment);

        const contributionAmount = '500';
        logger.info(` Entering contribution amount: ${contributionAmount}`);
        await page4.enterContributionAmount(contributionAmount);

        logger.info(' Selecting Weekly frequency');
        await page4.selectWeeklyFrequency();

        logger.info(' Clicking Annual Increase and selecting "Do Not Apply"');
        await page4.clickAnnualIncrease();

        const withdrawalAmount = '0';
        logger.info(` Entering withdrawal amount: ${withdrawalAmount}`);
        await page4.enterWithdrawalAmount(withdrawalAmount);

        logger.info(' Clicking View Fund Performance button');
        await page4.clickViewFundPerformanceButton();

        logger.info(' Checking Investment Performance Snapshot values');
        await page4.checkInvestmentPerformanceSnapshotView();

        logger.info(' Test completed successfully');

    } 
    catch (error) {
        logger.error(`❌ Test failed: ${error}`);
        throw error; // rethrow for Playwright’s reporter
    }
});

 */

/*import { test } from "@playwright/test";
import { RbcRoyal_investment } from '../src/pages/RbcRoyal_investmentPage';
import logger from '../src/utils/logger';
import testData from '../TestData/qa/PersonalLoan.json'; // ✅ Import JSON

const { RBCinvestment } = testData; // ✅ Destructure what you need

test('should complete investment performance calculation', async ({ page }) => {
    const page4 = new RbcRoyal_investment(page);

    try {
        logger.info('✅ Test started: RBC Investment Performance Snapshot Flow');
        await page.goto('https://www.rbcroyalbank.com/personal.html');

        await page4.clickMutualFunds();
        await page4.clickInvestmentPerformanceSnapshot();

        // ✅ Use RBCinvestment properties directly
        await page4.enterFundInPlaceHolder(RBCinvestment.FundName);
        await page4.clickSelectSeries(RBCinvestment.series);
        await page4.enterInitialInvestment(RBCinvestment.initialInvestment);
        await page4.enterContributionAmount(RBCinvestment.contributionAmount);
        await page4.selectWeeklyFrequency();
        await page4.clickAnnualIncrease();
        await page4.enterWithdrawalAmount(RBCinvestment.withdrawalAmount);
        await page4.clickViewFundPerformanceButton();
        await page4.checkInvestmentPerformanceSnapshotView();

        logger.info('✅ Test completed successfully');
    } catch (error) {
        logger.error(`❌ Test failed: ${error}`);
        throw error;
    }
});*/

import { test } from "@playwright/test";
import { RbcRoyal_investment } from '../src/pages/RbcRoyal_investmentPage';
import logger from '../src/utils/logger';
//import testData from '../TestData/qa/PersonalLoan.json';
import { RBCinvestment } from '../TestData/qa/PersonalLoan.json';

//const { RBCinvestment } = testData;

test('should complete investment performance calculation', async ({ page }) => {
    const page4 = new RbcRoyal_investment(page);

    try {
        logger.info('========================================');
        logger.info('Test started: RBC Investment Performance Snapshot Flow');
        logger.info('========================================');

        logger.info('Navigating to RBC Personal page...');
        await page.goto('https://www.rbcroyalbank.com/personal.html');
        logger.info('Successfully navigated to RBC Personal page');

        logger.info('Hovering over Investments and clicking Mutual Funds...');
        await page4.clickMutualFunds();
        logger.info('Successfully clicked on Mutual Funds');

        logger.info('Clicking Investment Performance Snapshot link...');
        await page4.clickInvestmentPerformanceSnapshot();
        logger.info('Successfully clicked Investment Performance Snapshot');

        logger.info(`Entering fund name: "${RBCinvestment.FundName}"`);
        await page4.enterFundInPlaceHolder(RBCinvestment.FundName);
        logger.info('Fund name entered successfully');

        logger.info(`Selecting series: "${RBCinvestment.series}"`);
        await page4.clickSelectSeries(RBCinvestment.series);
        logger.info('Series selected successfully');

        logger.info(`Entering initial investment: $${RBCinvestment.initialInvestment}`);
        await page4.enterInitialInvestment(RBCinvestment.initialInvestment);
        logger.info('Initial investment entered successfully');

        logger.info(`Entering contribution amount: $${RBCinvestment.contributionAmount}`);
        await page4.enterContributionAmount(RBCinvestment.contributionAmount);
        logger.info('Contribution amount entered successfully');

        logger.info('Selecting Weekly frequency...');
        await page4.selectWeeklyFrequency();
        logger.info('Weekly frequency selected successfully');

        logger.info('Clicking Annual Increase and selecting "Do Not Apply"...');
        await page4.clickAnnualIncrease();
        logger.info('Annual Increase option set to "Do Not Apply"');

        logger.info(`Entering withdrawal amount: $${RBCinvestment.withdrawalAmount}`);
        await page4.enterWithdrawalAmount(RBCinvestment.withdrawalAmount);
        logger.info('Withdrawal amount entered successfully');

        logger.info('Clicking "View Fund Performance" button...');
        await page4.clickViewFundPerformanceButton();
        logger.info('View Fund Performance button clicked successfully');

        logger.info('Checking Investment Performance Snapshot values...');
        await page4.checkInvestmentPerformanceSnapshotView();
        logger.info('Investment Performance Snapshot values retrieved successfully');

        logger.info('========================================');
        logger.info('Test completed successfully! All steps passed.');
        logger.info('========================================');

    } catch (error) {
        logger.error('========================================');
        logger.error(`Test failed with error: ${error}`);
        logger.error(`Error stack: ${error instanceof Error ? error.stack : 'N/A'}`);
        logger.error('========================================');
        throw error;
    }
});