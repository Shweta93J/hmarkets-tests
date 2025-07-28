// liveFormPage.js
class LiveFormPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.getByPlaceholder('E.g. John');
    this.lastNameInput = page.getByPlaceholder('E.g. Doe');
    this.emailInput = page.getByPlaceholder('E.g. john.doe@email.com');
    this.countrySelect = page.getByRole('combobox', { name: /country/i });
    this.phoneCodeSelect = page.getByRole('combobox', { name: /country code/i });
    this.phoneInput = page.getByPlaceholder(/555-0123/);
    this.passwordInput = page.getByPlaceholder('Enter your password');
    this.optInCheckbox = page.locator('input[type="checkbox"]');
    this.submitBtn = page.getByRole('button', { name: /start your application/i });
  }

  async goto() {
    await this.page.goto('https://hmarkets.com/live-account-pre-registration/');
  }

  async fillForm({
    firstName,
    lastName,
    email,
    country,
    phone,
    password,
    optIn = false,
  }) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.countrySelect.selectOption({ label: country });
    await this.phoneInput.fill(phone);
    await this.passwordInput.fill(password);
    if (optIn) await this.optInCheckbox.check();
  }

  async submit() {
    await this.submitBtn.click();
  }
}

module.exports = { LiveFormPage };
