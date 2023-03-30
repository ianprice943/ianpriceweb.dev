import { test, expect } from '@playwright/test';

test('skill card should have an h3', async ({ page }) => {
    await page.goto('/resume');
    expect(page.getByText('JavaScript')).not.toBeNull();
});

test('skill card should have a progress bar', async ({ page }) => {
    await page.goto('/resume');
    expect(page.getByRole('progressbar')).not.toBeNull();
})

test('skill card should have 5 list items: None, Novice, Intermediate, Advanced, Expert', async ({ page }) => {
    await page.goto('/resume');
    expect(page.getByText('None')).not.toBeNull();
    expect(page.getByText('Novice')).not.toBeNull();
    expect(page.getByText('Intermediate')).not.toBeNull();
    expect(page.getByText('Advanced')).not.toBeNull();
    expect(page.getByText('Expert')).not.toBeNull();
});