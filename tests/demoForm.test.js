const { test } = require('@playwright/test');
const { DemoFormPage } = require('../pages/demoFormPage');

test('Submit demo form with valid data', async ({ page }) => {
  const form = new DemoFormPage(page);

  await form.navigateToDemoForm();

  await form.fillForm({
    firstName: 'Shweta',
    lastName: 'Kumari',
    email: 'shweta93kum@gmail.com.com',
    leverage: '1:100',
    accountSize: '$1,000',
    country: 'United Arab Emirates',
    phone: '+971509017966'
  });

  await form.submitForm();
  await form.expectSuccessMessage();
});
