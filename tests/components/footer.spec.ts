import { expect, test } from '@playwright/test';

test('footer should have the copyright text "Copyright © 2023 - Ian Price"', async ({ page }) => {
    await page.goto('/');
    expect(await page.textContent('footer > div')).toBe('Copyright © 2023 - Ian Price');
});

// test('', async ({ page }) => {

// });