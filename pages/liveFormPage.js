const { By } = require('selenium-webdriver');
const BasePage = require('./basePage');

class LiveFormPage extends BasePage {
  constructor(driver) {
    super(driver);
    this.firstName = By.name('first_name');
    this.lastName = By.name('last_name');
    this.email = By.name('email');
    this.phone = By.name('phone');
    this.submitBtn = By.css('button[type="submit"]');
  }

  async fillForm(data) {
    await this.type(this.firstName, data.firstName);
    await this.type(this.lastName, data.lastName);
    await this.type(this.email, data.email);
    await this.type(this.phone, data.phone);
    await this.click(this.submitBtn);
  }
}

module.exports = LiveFormPage;
