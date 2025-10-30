import { Page } from '@playwright/test';
import RbcRoyal_InvestmentCaluclatorsAndToolsloc from '../locators/RbcRoyal_InvestmentCalculatorsAndToolsloc';


export class RbcRoyal_InvestmentCaluclatorsAndTools {

	readonly page: Page;
	readonly locators: RbcRoyal_InvestmentCaluclatorsAndToolsloc;

	constructor(page: Page) {
		this.page = page;
		this.locators = new RbcRoyal_InvestmentCaluclatorsAndToolsloc(page)  // to use class locators we created obj 

	}
	// now we are  adding methods 0f test cases

	async clickRRSPFutureValueCalculatorLink() {
		await this.locators.RRSPFutureValueCalculatorLink.waitFor({ state: 'visible', timeout: 5000 });
		await this.locators.RRSPFutureValueCalculatorLink.click()
	}

	//Hover
	//Some elements are intentionally hidden until the user interacts with them using the mouse.Hovering mimics that behavior in automation:

	async clickEquityLinkedGICReturnCalculator() {
		// Scroll to the "GIC Selector" element to make sure it's in view
		await this.locators.GICSelect.scrollIntoViewIfNeeded();

		// Move the mouse over the "Equity-Linked GIC Return Calculator" — useful if the element needs hover to become clickable or visible
		await this.locators.EquityLinkedGICReturnCalculator.hover();

		// Click the "Equity-Linked GIC Return Calculator" link
		await this.locators.EquityLinkedGICReturnCalculator.click();
	}

}