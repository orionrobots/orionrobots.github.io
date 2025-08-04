// Basic step definitions for BDD tests using Playwright
const { Given, When, Then, BeforeAll, AfterAll } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

let browser;
let context;
let page;

// Set up BASE_URL with default value for staging service in Docker network
const BASE_URL = process.env.BASE_URL || 'http://staging';

BeforeAll(async function () {
  browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  context = await browser.newContext();
});

AfterAll(async function () {
  if (context) await context.close();
  if (browser) await browser.close();
});

Given('the Staging site is started', async function () {
  page = await context.newPage();
  
  try {
    // Verify that the BASE_URL can be reached
    const response = await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    
    if (!response || !response.ok()) {
      throw new Error(`Failed to reach staging site at ${BASE_URL}. Status: ${response ? response.status() : 'No response'}`);
    }
  } catch (error) {
    throw new Error(`Unable to connect to staging site at ${BASE_URL}: ${error.message}`);
  }
});

When('the index page is visited', async function () {
  if (!page) {
    throw new Error('Page not initialized. Make sure "Given the Staging site is started" step is executed first.');
  }
  
  // Navigate to the index page and ensure it loads without HTTP errors
  const response = await page.goto(BASE_URL, { waitUntil: 'networkidle' });
  
  if (!response || !response.ok()) {
    throw new Error(`Index page failed to load. Status: ${response ? response.status() : 'No response'}`);
  }
  
  // Verify the page has loaded by checking for basic HTML structure
  await page.waitForSelector('html');
});

Then('the Logo should be displayed in the top left corner', async function () {
  if (!page) {
    throw new Error('Page not initialized. Make sure previous steps are executed first.');
  }
  
  // Check that favicon.png is somewhere nested under a <nav> element
  const faviconInNav = await page.locator('nav img[src*="favicon.png"]').first();
  
  const isVisible = await faviconInNav.isVisible().catch(() => false);
  
  if (!isVisible) {
    throw new Error('Logo (favicon.png) is not displayed in a nav element');
  }
});
