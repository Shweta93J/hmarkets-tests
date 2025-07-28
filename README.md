HMarkets Form Automation Test Suite
This repository contains an automated test suite built using Selenium WebDriver with JavaScript and Mocha, designed for functional and validation testing of the Live Account Registration Form and Demo Account Form on https://hmarkets.com.

✅ Objective
To verify form functionality, field validation, error handling, and submission behavior of user-facing forms on the HMarkets website. These tests are written to simulate real user interaction and to support future regression testing.

🧪 Tech Stack
JavaScript

Selenium WebDriver

Mocha (Test framework)

Chai (Assertions)

Dotenv (Optional env config)

📂 Folder Structure
hmarkets-tests/
│
├── tests/               → Test specs
│   ├── liveForm.test.js
│  
├── pages/               → Page Object Models
│   ├── basePage.js
│   ├── liveFormPage.js
│  │
├── utils/               → Test data & helpers
│   └── formData.js
│
├── .env                 → Environment configs (if needed)
├── package.json
└── README.md
 Sample Test Scenarios
Submit Live Registration Form with valid data ✅

Submit form with invalid email ❌

Submit form with missing fields (negative test) ⚠️

Verify max length handling of inputs

Submit form multiple times (duplicate prevention)

 Notes
Browser: Chrome (You can extend to Firefox or Selenium Grid for cross-browser testing)

The test suite can be extended to include:

Mobile responsiveness tests

Visual regression (via Percy or Applitools)

CI/CD integration (GitHub Actions, Jenkins)
Author
Shweta Kumari
Senior QA Engineer | Automation & Manual Testing
