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

test('resume page has at least 6 articles under the experience section', async ({ page }) => {
	await page.goto('/resume');
	expect(await page.textContent('section#experience > div > article:first-of-type')).not.toBeNull();
	expect(await page.textContent('section#experience > div > article:nth-of-type(2)')).not.toBeNull();
	expect(await page.textContent('section#experience > div > article:nth-of-type(3)')).not.toBeNull();
	expect(await page.textContent('section#experience > div > article:nth-of-type(4)')).not.toBeNull();
	expect(await page.textContent('section#experience > div > article:nth-of-type(5)')).not.toBeNull();
	expect(await page.textContent('section#experience > div > article:last-of-type')).not.toBeNull();
});

test('resume page has an education card with the title "Miami University"', async ({ page }) => {
	await page.goto('/resume');
	expect(await page.textContent('section#education > div > article > h3')).toBe('Miami University');
});

test('resume page has a skill card with the title "JavaScript"', async ({ page }) => {
	await page.goto('/resume');
	expect(await page.getByText('JavaScript')).not.toBeNull();
});