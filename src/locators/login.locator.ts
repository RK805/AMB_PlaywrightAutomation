import { type Page,type Locator} from '@playwright/test';

export class LoginLocator{
    page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;

    constructor(page:Page){
      this.page = page;
      this.usernameInput = this.page.locator('');
      this.passwordInput = this.page.locator('');
    }
}