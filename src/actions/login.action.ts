import { expect, type Page, TestInfo } from '@playwright/test';
//import { BrowserActions } from '../utils/browserActions'
import { LoginPage } from '../pages/login.page';


export class LoginAction {
    readonly page: Page;
   // readonly browserActions: BrowserActions;
    readonly loginPage: LoginPage;
    testInfo: TestInfo;


    constructor(page: Page, testInfo: TestInfo) {
        this.page = page;
        this.testInfo = testInfo;
       // this.browserActions = new BrowserActions(this.page);
        this.loginPage = new LoginPage(this.page);
    }

    async goToUrl(url: string): Promise<void> {
        console.log('Accessing the URL [${URL}] VIA WEB BROWSER');
        await this.page.goto(url);
        this.testInfo.annotations.push({ type: url, description: url });
    }


    async accessApplication(username: string, password: string): Promise<void> {
        await expect(this.loginPage.locator.usernameInput).toBeVisible();
        await this.loginPage.fillUsername(username);
        await this.loginPage.fillPassword(password);

    }
}