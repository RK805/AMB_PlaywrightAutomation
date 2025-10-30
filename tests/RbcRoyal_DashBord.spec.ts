import { test } from '@playwright/test';
import { RbcRoyalDashboardPage } from '../src/pages/RbcRoyal_DashBoardPage'

test('Navigate to Personal Loans', async ({ page }) => {
    const dashboard = new RbcRoyalDashboardPage (page);
    await dashboard.navigateToHomePage();
    await dashboard.clickPersonalLoans();
});
