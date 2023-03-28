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