import { expect, test } from '@playwright/test';

test('portfolio page has expected h1', async ({ page }) => {
	await page.goto('/portfolio');
	expect(await page.textContent('h1')).toBe('Portfolio');
});

test('portfolio page to have four articles containing h2s', async ({ page }) => {
	await page.goto('/portfolio');
	expect(await page.textContent('article:first-of-type > h2')).toBe('To see what side projects I\'m working on, check out my GitHub');
	expect(await page.textContent('article:nth-of-type(2) > h2')).toBe('Three.js Playground');
	expect(await page.textContent('article:nth-of-type(3) > h2')).toBe('William Kampf Mediation');
	expect(await page.textContent('article:last-of-type > h2')).toBe('Pokemon Mystery Dungeon Rescue Team DX Starters');
});