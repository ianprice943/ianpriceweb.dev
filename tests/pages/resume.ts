import { expect, test } from '@playwright/test';

test('resume page has expected h1', async ({ page }) => {
	await page.goto('/resume');
	expect(await page.textContent('h1')).toBe('Resume');
});

test('resume page has expected h2s', async ({ page }) => {
	await page.goto('/resume');
	expect(await page.textContent('section#experience > h2')).toBe('Experience');
	expect(await page.textContent('section#education > h2')).toBe('Education');
	expect(await page.textContent('section#skills > h2')).toBe('Skills');
});