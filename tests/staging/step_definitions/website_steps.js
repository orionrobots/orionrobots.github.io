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
  context = await browser.newContext({
    // Increase timeout for slower Docker environments
    timeout: 30000
  });
});

AfterAll(async function () {
  if (context) await context.close();
  if (browser) await browser.close();
});

Given('the Staging site is started', async function () {
  page = await context.newPage();
  
  try {
    // Verify that the BASE_URL can be reached (allow redirects)
    const response = await page.goto(BASE_URL, { 
      waitUntil: 'networkidle',
      timeout: 30000
    });
    
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
  const response = await page.goto(BASE_URL, { 
    waitUntil: 'networkidle',
    timeout: 30000
  });
  
  if (!response || !response.ok()) {
    throw new Error(`Index page failed to load. Status: ${response ? response.status() : 'No response'}`);
  }
  
  // Verify the page has loaded by checking for basic HTML structure
  await page.waitForSelector('html', { timeout: 10000 });
});

Then('the Logo should be displayed in the top left corner', async function () {
  if (!page) {
    throw new Error('Page not initialized. Make sure previous steps are executed first.');
  }
  
  // Check that favicon.png is somewhere nested under a <nav> element
  // This covers both relative paths (favicon.png) and absolute URLs containing favicon.png
  try {
    const faviconInNav = await page.locator('nav img[src*="favicon.png"]').first();
    await faviconInNav.waitFor({ state: 'visible', timeout: 10000 });
  } catch (error) {
    throw new Error('Logo (favicon.png) is not displayed in a nav element');
  }
});

Then('the recent posts list should be present', async function () {
  if (!page) {
    throw new Error('Page not initialized. Make sure previous steps are executed first.');
  }
  
  // Check that the recent posts section exists with its heading
  try {
    const recentPostsHeading = await page.locator('h2:has-text("Recent Posts")');
    await recentPostsHeading.waitFor({ state: 'visible', timeout: 10000 });
    
    // Check that the posts list exists
    const postsList = await page.locator('ul.posts');
    await postsList.waitFor({ state: 'visible', timeout: 10000 });
  } catch (error) {
    throw new Error('Recent posts list is not present on the page');
  }
});

Then('each recent post should have a picture tag with an img element', async function () {
  if (!page) {
    throw new Error('Page not initialized. Make sure previous steps are executed first.');
  }
  
  // Find all post items in the recent posts list
  const postItems = await page.locator('ul.posts li.post').all();
  
  if (postItems.length === 0) {
    throw new Error('No recent posts found in the posts list');
  }
  
  // Check each post item has a picture tag with img element
  for (let i = 0; i < postItems.length; i++) {
    const postItem = postItems[i];
    
    try {
      // Look for either a picture tag with img, or just an img tag within the media-left link
      const imageElement = await postItem.locator('a.media-left picture img, a.media-left img').first();
      await imageElement.waitFor({ state: 'visible', timeout: 5000 });
      
      // Verify the img element has a valid src attribute
      const src = await imageElement.getAttribute('src');
      if (!src || src.trim() === '') {
        throw new Error(`Post ${i + 1} has an img element but no src attribute`);
      }
    } catch (error) {
      throw new Error(`Post ${i + 1} does not have a picture tag with img element: ${error.message}`);
    }
  }
});

When('I navigate to the article {string}', async function (articlePath) {
  if (!page) {
    throw new Error('Page not initialized. Make sure "Given the Staging site is started" step is executed first.');
  }
  
  const fullUrl = BASE_URL + articlePath;
  const response = await page.goto(fullUrl, { 
    waitUntil: 'networkidle',
    timeout: 30000
  });
  
  if (!response || !response.ok()) {
    throw new Error(`Article page failed to load. Status: ${response ? response.status() : 'No response'}`);
  }
});

Then('the article should have a set of tags in a nav linking to tag slugs', async function () {
  if (!page) {
    throw new Error('Page not initialized. Make sure previous steps are executed first.');
  }
  
  try {
    // Look for the tags navigation section
    const tagsNav = await page.locator('nav.tag-row, nav:has(a[href*="/tags/"])').first();
    await tagsNav.waitFor({ state: 'visible', timeout: 10000 });
    
    // Check that there are tag links present
    const tagLinks = await page.locator('a[href*="/tags/"]').all();
    if (tagLinks.length === 0) {
      throw new Error('No tag links found');
    }
    
    // Verify at least one tag link has the expected format
    for (const tagLink of tagLinks) {
      const href = await tagLink.getAttribute('href');
      if (href && href.includes('/tags/') && href !== '/tags') {
        // Found at least one tag with a slug
        return;
      }
    }
    throw new Error('No tag links with proper slug format found');
  } catch (error) {
    throw new Error(`Tags navigation not found or invalid: ${error.message}`);
  }
});

Then('the article should have a post header in an H2 element', async function () {
  if (!page) {
    throw new Error('Page not initialized. Make sure previous steps are executed first.');
  }
  
  try {
    const h2Header = await page.locator('h2.page-header, h2:has-text("Comparing anker power packs")').first();
    await h2Header.waitFor({ state: 'visible', timeout: 10000 });
    
    const headerText = await h2Header.textContent();
    if (!headerText || headerText.trim() === '') {
      throw new Error('H2 header is empty');
    }
  } catch (error) {
    throw new Error(`Post header H2 element not found: ${error.message}`);
  }
});

Then('the page title should contain the post title and "orionrobots"', async function () {
  if (!page) {
    throw new Error('Page not initialized. Make sure previous steps are executed first.');
  }
  
  const title = await page.title();
  if (!title.toLowerCase().includes('comparing anker power packs')) {
    throw new Error(`Page title does not contain post title. Found: ${title}`);
  }
  if (!title.toLowerCase().includes('orionrobots')) {
    throw new Error(`Page title does not contain "orionrobots". Found: ${title}`);
  }
});

Then('the article should have visible images inside the article tag', async function () {
  if (!page) {
    throw new Error('Page not initialized. Make sure previous steps are executed first.');
  }
  
  try {
    // Look for images within the article element
    const articleImages = await page.locator('article img').all();
    
    if (articleImages.length === 0) {
      throw new Error('No images found inside the article tag');
    }
    
    // Check that at least one image is visible and has a valid src
    let validImagesFound = 0;
    for (const img of articleImages) {
      try {
        await img.waitFor({ state: 'visible', timeout: 5000 });
        const src = await img.getAttribute('src');
        if (src && src.trim() !== '' && !src.includes('data:')) {
          validImagesFound++;
        }
      } catch (e) {
        // Image might not be visible, continue checking others
      }
    }
    
    if (validImagesFound === 0) {
      throw new Error('No visible images with valid src found inside the article tag');
    }
  } catch (error) {
    throw new Error(`Article images check failed: ${error.message}`);
  }
});

Then('the article should have a date and author in a div element', async function () {
  if (!page) {
    throw new Error('Page not initialized. Make sure previous steps are executed first.');
  }
  
  try {
    // Look for the date and author div
    const dateDiv = await page.locator('div.date, div:has(time):has(.author)').first();
    await dateDiv.waitFor({ state: 'visible', timeout: 10000 });
    
    // Check for date
    const timeElement = await page.locator('time').first();
    await timeElement.waitFor({ state: 'visible', timeout: 5000 });
    
    // Check for author
    const authorElement = await page.locator('.author, div:has-text("Danny Staple")').first();
    await authorElement.waitFor({ state: 'visible', timeout: 5000 });
  } catch (error) {
    throw new Error(`Date and author div not found: ${error.message}`);
  }
});

Then('the page should have a footer with Discord and YouTube links', async function () {
  if (!page) {
    throw new Error('Page not initialized. Make sure previous steps are executed first.');
  }
  
  try {
    // Look for Discord link in footer
    const discordLink = await page.locator('footer a[href*="discord"]').first();
    await discordLink.waitFor({ state: 'visible', timeout: 10000 });
    
    // Look for YouTube link in footer
    const youtubeLink = await page.locator('footer a[href*="youtube"]').first();
    await youtubeLink.waitFor({ state: 'visible', timeout: 10000 });
  } catch (error) {
    throw new Error(`Footer with Discord and YouTube links not found: ${error.message}`);
  }
});

Then('the page should have the main menu in a nav element at the top', async function () {
  if (!page) {
    throw new Error('Page not initialized. Make sure previous steps are executed first.');
  }
  
  try {
    // Look for the main navigation at the top
    const mainNav = await page.locator('nav.navbar').first();
    await mainNav.waitFor({ state: 'visible', timeout: 10000 });
    
    // Check that it contains menu items
    const navItems = await page.locator('nav.navbar .nav-link').all();
    if (navItems.length === 0) {
      throw new Error('No navigation items found in main nav');
    }
  } catch (error) {
    throw new Error(`Main navigation menu not found: ${error.message}`);
  }
});

When('I am in desktop view', async function () {
  if (!page) {
    throw new Error('Page not initialized. Make sure previous steps are executed first.');
  }
  
  // Set viewport to desktop size
  await page.setViewportSize({ width: 1200, height: 800 });
  
  // Wait a moment for layout to adjust
  await page.waitForTimeout(1000);
});

Then('the images, tables and text should not overflow the article container', async function () {
  if (!page) {
    throw new Error('Page not initialized. Make sure previous steps are executed first.');
  }
  
  try {
    // Get the article container bounds
    const articleContainer = await page.locator('article, #col-main .content').first();
    await articleContainer.waitFor({ state: 'visible', timeout: 10000 });
    
    const containerBox = await articleContainer.boundingBox();
    if (!containerBox) {
      throw new Error('Could not get article container bounds');
    }
    
    // Check images don't overflow
    const images = await page.locator('article img, #col-main img').all();
    for (const img of images) {
      try {
        const imgBox = await img.boundingBox();
        if (imgBox && imgBox.x + imgBox.width > containerBox.x + containerBox.width + 10) {
          throw new Error(`Image overflows container by ${(imgBox.x + imgBox.width) - (containerBox.x + containerBox.width)} pixels`);
        }
      } catch (e) {
        // Image might not be visible, continue
      }
    }
    
    // Check tables don't overflow
    const tables = await page.locator('article table, #col-main table').all();
    for (const table of tables) {
      try {
        const tableBox = await table.boundingBox();
        if (tableBox && tableBox.x + tableBox.width > containerBox.x + containerBox.width + 10) {
          throw new Error(`Table overflows container by ${(tableBox.x + tableBox.width) - (containerBox.x + containerBox.width)} pixels`);
        }
      } catch (e) {
        // Table might not be visible, continue
      }
    }
    
    // Check for horizontal scrollbars indicating overflow
    const hasHorizontalScrollbar = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    
    if (hasHorizontalScrollbar) {
      throw new Error('Page has horizontal scrollbar indicating content overflow');
    }
  } catch (error) {
    throw new Error(`Content overflow check failed: ${error.message}`);
  }
});
