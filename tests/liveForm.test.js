// liveForm.test.js
const { test, expect } = require('@playwright/test');
const { liveFormPage } = require('./liveFormPage');

test.describe('Hantec Markets Live Form', () => {
  let form;
  test.beforeEach(async ({ page }) => {
    form = new liveFormPage(page);
    await form.goto();
  });

  test('User can fill and submit the live account form', async ({ page }) => {
    await form.fillForm({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@email.com',
      country: 'United Arab Emirates',
      phone: '+971509017966',
      password: 'Password1!', // meets all criteria
      optIn: true
    });
    await form.submit();

    await expect(page).toHaveURL(/\/en\/#docs$/);
  });
});
