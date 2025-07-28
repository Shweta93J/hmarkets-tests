const { By, until } = require('selenium-webdriver');

class BasePage {
  constructor(driver) {
    this.driver = driver;
  }

  async navigate(url) {
    await this.driver.get(url);
  }

  async type(locator, input) {
    await this.driver.findElement(locator).sendKeys(input);
  }

  async click(locator) {
    await this.driver.findElement(locator).click();
  }

  async isDisplayed(locator) {
    try {
      return await this.driver.findElement(locator).isDisplayed();
    } catch {
      return false;
    }
  }
}

module.exports = BasePage;
