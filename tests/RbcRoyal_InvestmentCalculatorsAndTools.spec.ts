import { test } from "@playwright/test"
import { RbcRoyal_InvestmentCaluclatorsAndTools } from "../src/pages/RbcRoyal_InvestmentCalculatorsAndToolsPage"

test("InvesetmentAndToolsPage", async ({ page }) => {

    const Page3 = new RbcRoyal_InvestmentCaluclatorsAndTools(page);
    await page.goto('https://www.rbcroyalbank.com/investments/investment-calculators-tools.html');

    await Page3.clickRRSPFutureValueCalculatorLink();
    await page.goBack();
    await Page3.clickEquityLinkedGICReturnCalculator()


})
