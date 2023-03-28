import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Footer from './Footer.svelte';

describe("Footer.svelte", async () => {
    const result = render(Footer);
    const footer = result.container.querySelector('footer');

    console.log('footer', footer)
    it('should render a footer element', async () => {
        expect(footer).not.toBeNull();
    });
    it('should render a copyright message in the footer', async () => {
        expect(footer?.innerHTML).toContain('Copyright © 2023 - Ian Price');
    });
});

// it('', async () => {

// });