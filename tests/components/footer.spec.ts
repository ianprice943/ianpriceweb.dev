import { expect, test } from '@playwright/test';

test('footer should have the copyright text "Copyright © 2023 - Ian Price"', async ({ page }) => {
    await page.goto('/');
    expect(await page.textContent('footer > div')).toBe('Copyright © 2023 - Ian Price');
});

test('footer should have a link titled "Admin Login" which takes the user to the login page', async ({ page }) => {
    await page.goto('/');
    expect(await page.textContent('footer > a')).toBe('Admin Login')
    await page.getByText('Admin Login').click();
    expect(page.url()).toContain('login');
});