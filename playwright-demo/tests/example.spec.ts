import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://kunzleigh.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Kunz, Leigh and Associates/);
});

test('has get started link', async ({ page }) => {
  await page.goto('https://kunzleigh.com/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Let\'s Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Contact Us Today!' })).toBeVisible();
});

test('has blog articles', async ({ page }) => {
  await page.goto('https://kunzleigh.com/');

  // Click the get started link.
  await page.locator('#top-menu').getByRole('link', { name: 'Blog' }).click();

  // Expects page to have a text with the name of the tagline.
  await expect(page.getByText('Pouring KL&A’s passion and knowledge of technology, business and fancy coffee into a blog.').first()).toBeVisible();
  
  // Expects page to have at least one article.
  const articles = page.getByRole('article');
  expect(await articles.count()).toBeGreaterThan(1);
});
