require('dotenv').config();
const { Builder } = require('selenium-webdriver');
const { expect } = require('chai');
const LiveFormPage = require('../pages/liveFormPage');
const data = require('../utils/formData');

describe('Live Registration Form Tests', function () {
  let driver, page;

  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
    page = new LiveFormPage(driver);
    await page.navigate('https://hmarkets.com/');
  });

  after(async function () {
    await driver.quit();
  });

  it('should fill and submit Live Form with valid data', async function () {
    await page.click({ css: 'a[href*="live-account"]' }); // Adjust if needed
    await page.fillForm(data.validUser);
    const isSubmitted = await page.isDisplayed({ css: '.success-message' });
    expect(isSubmitted).to.be.true;
  });

  it('should show error on invalid email', async function () {
    await page.fillForm(data.invalidEmail);
    const isErrorVisible = await page.isDisplayed({ css: '.error-message' });
    expect(isErrorVisible).to.be.true;
  });
});
