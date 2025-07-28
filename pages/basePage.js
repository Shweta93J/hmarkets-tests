// basePage.js for Playwright

class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async type(selector, input) {
    await this.page.fill(selector, input);
  }

  async click(selector) {
    await this.page.click(selector);
  }

  async isDisplayed(selector) {
    try {
      return await this.page.isVisible(selector);
    } catch {
      return false;
    }
  }
}

module.exports = BasePage;
