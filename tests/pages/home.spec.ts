import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Home');
});

test('index page has expected navigation options in header', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('nav')).toContain('Home');
	expect(await page.textContent('nav')).toContain('Resume');
	expect(await page.textContent('nav')).toContain('Portfolio');
	expect(await page.textContent('nav')).toContain('Blog');
});

test('index page has expected image', async ({ page }) => {
	await page.goto('/');
	expect(await page.getByRole('img')).not.toBeNull();
});

test('index page has expected three paragraphs', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('section > div > p:first-of-type')).not.toBeNull();
	expect(await page.textContent('section > div > p:nth-of-type(2)')).not.toBeNull();
	expect(await page.textContent('section > div > p:last-of-type')).not.toBeNull();
});
