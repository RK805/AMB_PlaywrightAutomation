/*import { test, expect } from '@playwright/test';
import { RbcRoyal_RRSF_FutureValueCalculators }  from  '../src/pages/RbcRoyal_RRSF_FutureValueCalculatorPage'
test.describe('Future Value Calculator - RBC Royal Bank', () => {
    test('should calculate future investment value correctly', async ({ page }) => {
        const calculator = new RbcRoyal_RRSF_FutureValueCalculators(page);

        // Navigate to the calculator page
        await page.goto('https://www.rbcroyalbank.com/investments/investment-calculators-tools.html'); // Replace with actual URL
        await calculator.clickOnRRSF(); 
        // Fill in the form
        await calculator.enterInvestmentValue('10000');
        await calculator.enterRateOfReturn('5');
        await calculator.enterNumberOfYears('10');

        // Trigger calculation
        await calculator.clickCalculateButton();

        // Validate result
        const result = await calculator.getValueOfInvestment();
        console.log('Calculated Future Value:', result);
        expect(result).not.toBe('');
        expect(Number(result.replace(/[^0-9.]/g, ''))).toBeGreaterThan(10000); // Basic sanity check
    });
});*/


//const testData = JSON.parse(JSON.stringify(require('../TestData.json')))
//1.load JSON file as JS object
//2.convert object to JSON string
//3.parse string back into object
//You get a new object in memory — no shared reference.You can safely modify testData without touching the original.
//This line is a defensive move.It protects your test data from accidental mutation, especially ared or parallel test runs.





/*import { test, expect } from '@playwright/test';
import { RbcRoyal_RRSF_FutureValueCalculators } from '../src/pages/RbcRoyal_RRSF_FutureValueCalculatorPage';
import logger from '../src/utils/logger'; // ✅ import the same logger
import testData from '../TestData.json';

test.describe('Future Value Calculator - RBC Royal Bank', () => {
    test('should calculate future investment value correctly', async ({ page }) => {
        const calculator = new RbcRoyal_RRSF_FutureValueCalculators(page);

        try {
            logger.info('Navigating to RBC Investment Calculator page...');
            await page.goto('https://www.rbcroyalbank.com/investments/investment-calculators-tools.html');

            await calculator.clickOnRRSF();
            await calculator.enterInvestmentValue(testData.InvestmentValue);
            await calculator.enterRateOfReturn(testData.RateOfReturn);
            await calculator.enterNumberOfYears(testData.NumberOfYears);
            await calculator.clickCalculateButton();

            const result = await calculator.getValueOfInvestment();
            logger.info(`Final calculated future value: ${result}`);

            expect(result).not.toBe('');
            expect(Number(result.replace(/[^0-9.]/g, ''))).toBeGreaterThan(10000);

        } catch (error) {
            logger.error(` Test failed: ${error}`);
            throw error; // rethrow for Playwright’s reporter
        }
    });
});*/


//import testData from '../TestData.json';
//console.log("MyInvestment ",testData.InvestmentValue)


import { test, expect } from '@playwright/test';
import { RbcRoyal_RRSF_FutureValueCalculators } from '../src/pages/RbcRoyal_RRSF_FutureValueCalculatorPage';
import logger from '../src/utils/logger'; // ✅ consistent logging
import { RRSFCal } from '../TestData/qa/PersonalLoan.json';
//const testData = JSON.parse(JSON.stringify(require('../TestData.json')));
// 1. Load JSON file as JS object
// 2. Convert object to JSON string
// 3. Parse string back into object
// ✅ Deep clone to avoid shared references or mutation

test.describe('Future Value Calculator - RBC Royal Bank', () => {
    test('should calculate future investment value correctly', async ({ page }) => {
        const calculator = new RbcRoyal_RRSF_FutureValueCalculators(page);

        try {
            logger.info(' Navigating to RBC Investment Calculator page...');
            await page.goto('https://www.rbcroyalbank.com/investments/investment-calculators-tools.html');

            logger.info(' Clicking on RRSF calculator...');
            await calculator.clickOnRRSF();

            logger.info(` Entering Investment Value: ${RRSFCal.InvestmentValue}`);
            await calculator.enterInvestmentValue(RRSFCal.InvestmentValue);

            logger.info(` Entering Rate of Return: ${RRSFCal.RateOfReturn}`);
            await calculator.enterRateOfReturn(RRSFCal.RateOfReturn);

            logger.info(` Entering Number of Years: ${RRSFCal.NumberOfYears}`);
            await calculator.enterNumberOfYears(RRSFCal .NumberOfYears);

            logger.info(' Clicking Calculate...');
            await calculator.clickCalculateButton();

            const result = await calculator.getValueOfInvestment();
            logger.info(` Final calculated future value: ${result}`);

            expect(result).not.toBe('');
            expect(Number(result.replace(/[^0-9.]/g, ''))).toBeGreaterThan(10000);

        } catch (error) {
            logger.error(`❌ Test failed: ${error}`);
            throw error; // rethrow for Playwright’s reporter
        }
    });
});
