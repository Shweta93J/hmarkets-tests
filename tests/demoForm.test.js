const { test, expect } = require('@playwright/test');
const { DemoFormPage } = require('../pages/demoFormPage');

test.describe('Demo Form Submission', () => {
  let form;

  test.beforeEach(async ({ page }) => {
    form = new DemoFormPage(page);
    await form.navigateToDemoForm();
  });

  test('Submit demo form with valid data', async () => {
    await form.fillForm({
      firstName: 'Shweta',
      lastName: 'Kumari',
      email: 'shweta93kum@gmail.com',
      leverage: '1:100',
      accountSize: '$1,000',
      country: 'United Arab Emirates',
      phone: '+971509017966'
    });

    await form.submitForm();
    await form.expectSuccessMessage();
  });

  test('Should show error when required fields are blank', async ({ page }) => {
    await form.submitForm();

    // Assert error messages (use actual error text or class based on app behavior)
    await expect(page.locator('text=First Name is required')).toBeVisible();
    await expect(page.locator('text=Email is required')).toBeVisible();
    await expect(page.locator('text=Country is required')).toBeVisible();
    await expect(page.locator('text=Invalid Phone Number')).toBeVisible();
  });

  test('Should show error for invalid email format', async ({ page }) => {
    await form.fillForm({
      firstName: 'John',
      lastName: 'Doe',
      email: 'invalid-email',
      leverage: '1:100',
      accountSize: '$1,000',
      country: 'United Arab Emirates',
      phone: '+971501234567'
    });

    await form.submitForm();

    //This is a bug(not showing any error)
    await expect(page.locator('text=Enter a valid email')).toBeVisible();
  });

  test('Should show error for missing checkbox', async ({ page }) => {
    // Manually uncheck the checkbox after filling (simulate user skipping it)
    await form.fillForm({
      firstName: 'Sara',
      lastName: 'Smith',
      email: 'sara@example.com',
      leverage: '1:100',
      accountSize: '$1,000',
      country: 'United Arab Emirates',
      phone: '+971501234567'
    });

    await page.uncheck('input[type="checkbox"]'); // simulate user not checking it
    await form.submitForm();

    await expect(page.locator('text=You must accept the terms')).toBeVisible(); // This is a bug, without checking this checkbox, the user is till able to create a demo account.
  });
});
