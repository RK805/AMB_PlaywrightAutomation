import { test, expect } from '@playwright/test';
import { RbcRoyal_personalLoans } from '../src/pages/RbcRoyal_personalLoansPage';
import logger from '../src/utils/logger';
import { Personalloan } from '../TestData/qa/PersonalLoan.json';

test('Personal_form', async ({ page }) => {
    const personalLoanPage = new RbcRoyal_personalLoans(page);
    logger.info(` Loaded test data: ${JSON.stringify(Personalloan)}`);

    try {
        logger.info(' Navigating to RBC Personal tab...');
        await page.goto('https://www.rbcroyalbank.com/personal.html');

        await personalLoanPage.gotoPersonalLoan();
        await personalLoanPage.gotoPersonal();
        await personalLoanPage.getTitle();

        logger.info(`Selecting Borrowing Reason: ${Personalloan.BorrowingReason}`);
        await personalLoanPage.clickBorrowingReasonDropdown();
        await personalLoanPage.selectBorrowingReason(Personalloan.BorrowingReason);

        logger.info(`Entering Loan Amount: ${Personalloan.LoanAmount}`);
        await personalLoanPage.enterLoanAmount(Personalloan.LoanAmount);

        await personalLoanPage.clickGetResultsButton();

        logger.info(` Entering Interest Rate: ${Personalloan.InterestRate}`);
        await personalLoanPage.enterInterestRate(Personalloan.InterestRate);

        await personalLoanPage.clickLoanButton();

        logger.info(` Selecting Repayment Period: ${Personalloan.RepaymentPeriod}`);
        await personalLoanPage.selectRepaymentPeriod(Personalloan.RepaymentPeriod);

        logger.info(` Selecting Monthly Payment Option: ${Personalloan.MonthlyPayment}`);
        await personalLoanPage.selectMonthlyPayment(Personalloan.MonthlyPayment);

        await personalLoanPage.clickGetResult();

        const result = await personalLoanPage.getResultAmount();
        logger.info( `Final calculated loan result: ${result}`);

        expect(result).not.toBe('');
        expect(Number(result.replace(/[^0-9.]/g, ''))).toBeGreaterThan(0); // Basic sanity check

    } catch (error) {
        logger.error(`❌ Test failed: ${error}`);
        throw error;
    }
})
