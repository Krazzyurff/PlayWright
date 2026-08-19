import { chromium } from 'playwright';
import { test, expect } from '@playwright/test';
import type { Browser, Page } from '@playwright/test';

// test.only('has title', async () => {
//   const browser:Browser = await chromium.launch({ headless: false });
//   const page:Page = await browser.newPage();
//   await page.goto('https://www.flipkart.com/');
//   await page.locator('.b3wTlE').first().click();
//   await page.mouse.move(10, 10);
//   // await expect(page.getByAltText('Login')).toBeVisible();
//  await page.getByPlaceholder('Search for Products, Brands and More').first().fill('iphone');
// //  await page.getByText('iphone 17').selectOption('iphone 17');
//   await page.getByRole('link', { name: 'Electronics' }).click();
//   await page.getByText('Electronics', { exact: true }).click();
//   await page.getByRole('link', { name: 'New launches' }).click();
//  await page.getByTitle('OPPO').click();


//   // Expect a title "to contain" a substring.
//  // await expect(page).toHaveTitle(/Playwright/);
// });

test('get started link', async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await page.getByText('Pages').click();
//  await page.getByRole('button', { name: 'Search (Ctrl+K)' }).click();
//  await page.locator('.DocSearch-Input').press("S");
//  await page.locator('#docsearch-hits2-item-2').click();
//    await expect(page.getByRole('heading', { name: 'Screenshots', exact: true })).toBeVisible();


});

test('ABC', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('ADAS', async ({ page }) => {


  
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
