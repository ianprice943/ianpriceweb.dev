import { expect, test } from '@playwright/test';

test('portfolio page has expected h1', async ({ page }) => {
	await page.goto('/portfolio');
	expect(await page.textContent('h1')).toBe('Portfolio');
});