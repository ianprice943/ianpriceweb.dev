import { expect, test } from '@playwright/test';

test('theme switcher should have two buttons', async ({ page }) => {
    await page.goto('/');
    expect(page.getByRole('button', { name: 'light' })).not.toBeNull();
    expect(page.getByRole('button', { name: 'dark' })).not.toBeNull();
});

test('theme switcher should toggle light theme when light button is clicked', async ({ page }) => {
    await page.goto('/');
    await page.click('button#sun', { button: 'left' });
    expect(await page.content()).not.toContain("class=\"dark\"");
});

test('theme switcher should toggle dark theme when dark button is clicked', async ({ page }) => {
    await page.goto('/');
    await page.click('button#moon', { button: 'left' });
    expect(await page.content()).toContain("class=\"dark\"");
});