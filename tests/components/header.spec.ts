import { test, expect } from '@playwright/test';

test('header should have "Ian Price" in a paragraph', async ({ page }) => {
    await page.goto('/');
    expect(await page.textContent('header > div > p')).toBe('Ian Price');
});

test('header should have expected navigation options in header', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('nav')).toContain('Home');
	expect(await page.textContent('nav')).toContain('Resume');
	expect(await page.textContent('nav')).toContain('Portfolio');
	expect(await page.textContent('nav')).toContain('Blog');
});