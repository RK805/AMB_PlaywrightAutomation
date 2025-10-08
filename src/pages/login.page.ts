import { type Page, expect } from '@playwright/test';
import { LoginLocator } from '../locators/login.locator';


export class LoginPage {
    page: Page;
    readonly locator: LoginLocator;

    constructor(page: Page) {
        this.page = page;
        this.locator = new LoginLocator(this.page);
    }

    async fillUsername(username: string): Promise<void> {
        console.log('filling the username field with value [${username}]');
        await this.locator.usernameInput.fill(username);
    }

    async fillPassword(password: string): Promise<void> {
        console.log('filling the username field with value [${username}]');
        await this.locator.passwordInput.fill(password);
    }

}