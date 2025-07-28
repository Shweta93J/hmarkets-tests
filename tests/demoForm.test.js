const { test, expect } = require('@playwright/test');

test.describe('Hantec Demo Account Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://hmarkets.com');
    await page.click('text=Try Free Demo');
  });

  test('should submit the demo form with valid data', async ({ page }) => {
    await page.selectOption('select[name="leverage"]', { label: '1:100' });
    await page.selectOption('select[name="account_size"]', { label: '$1,000' });
    await page.fill('input[placeholder="E.g. John"]', 'Shweta');
    await page.fill('input[placeholder="E.g. Doe"]', 'Kumari');
    await page.fill('input[placeholder="E.g. john.doe@email.com"]', 'shweta93kum@gmail.com');
    await page.selectOption('select[name="country"]', { label: 'United Arab Emirates' });
    await page.fill('input[placeholder="Example: (201) 555-0123"]', '+971509017966');

    await page.check('input[type="checkbox"]');
    await page.click('button:has-text("OPEN A DEMO ACCOUNT")');

    // Expect success notification 
    await expect(page.locator('text=Your submission was successful.')).toBeVisible();
  });

  test('should show validation error when required fields are empty', async ({ page }) => {
    await page.click('button:has-text("OPEN A DEMO ACCOUNT")');
    await expect(page.locator('text=email is required')).toBeVisible(); // for email field empty
  });
//not showing error now on the page for this test(a bug)
  test('should show error for invalid email format', async ({ page }) => {
    await page.fill('input[placeholder="E.g. John"]', 'John');
    await page.fill('input[placeholder="E.g. Doe"]', 'Doe');
    await page.fill('input[placeholder="E.g. john.doe@email.com"]', 'invalid-email');
    await page.click('button:has-text("OPEN A DEMO ACCOUNT")');

    await expect(page.locator('text=Enter a valid email')).toBeVisible(); // Update based on actual error
  });
});
