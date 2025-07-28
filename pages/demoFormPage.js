const { expect } = require('@playwright/test');

exports.DemoFormPage = class DemoFormPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.demoLink = page.locator('a[href="/mt-demo-account/"]');
    this.leverageSelect = page.locator('select[name="leverage"]');
    this.accountSizeSelect = page.locator('select[name="account_size"]');
    this.firstNameInput = page.getByPlaceholder('E.g. John');
    this.lastNameInput = page.getByPlaceholder('E.g. Doe');
    this.emailInput = page.getByPlaceholder('E.g. john.doe@email.com');
    this.countrySelect = page.locator('select[name="country"]');
    this.phoneInput = page.getByPlaceholder('Example: (201) 555-0123');
    this.checkbox = page.locator('input[type="checkbox"]');
    this.submitBtn = page.locator('div', { hasText: 'Open a demo account' });
    this.successMessage = page.locator('text=Your submission was successful.'); 
  }

  async navigateToDemoForm() {
    await this.page.goto('https://hmarkets.com');
    await this.demoLink.click();
    await this.page.waitForURL('**/mt-demo-account/');
  }

  async fillForm({ firstName, lastName, email, leverage, accountSize, country, phone }) {
    await this.leverageSelect.selectOption({ label: leverage });
    await this.accountSizeSelect.selectOption({ label: accountSize });
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.countrySelect.selectOption({ label: country });
    await this.phoneInput.fill(phone);
    await this.checkbox.check();
  }

  async submitForm() {
    await this.submitBtn.click();
  }

  async expectSuccessMessage() {
    await expect(this.successMessage).toBeVisible();
  }
};
