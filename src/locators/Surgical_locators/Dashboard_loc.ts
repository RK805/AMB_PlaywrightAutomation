import { Page, Locator } from "@playwright/test"

export class DashBoard_LOC {
	page: Page
	readonly tittle: Locator;
	readonly popularBrands: Locator;


constructor(page: Page){
	this.page = page
	this.tittle = page.locator("//title[ text()=' Surginatal - India's Best Online Surgical Supply Store']")
	this.popularBrands = page.locator("//span[text()= ' Popular Brands ']")





  }
}