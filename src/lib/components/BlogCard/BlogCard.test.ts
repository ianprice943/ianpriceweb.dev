import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import BlogCard from './BlogCard.svelte';

describe('BlogCard.svelte', async () => {
    const result = render(BlogCard, 
        {
            urlStub: 'test', 
            title: 'test title',
            description: 'a description',
            thumbnailUrl: 'https://www.google.com',
            thumbnailAltText: 'the picture'
        }
    );
    const card = result.container;

    it('Should render an article wrapped in a list item', async () => {
        expect(card.querySelector('li > article')).not.toBeNull();
    });
    it('Should render a link with the href of "/blog/test"', async () => {
        const anchor: HTMLLinkElement = screen.getByRole('link');
        expect(anchor).not.toBeNull();
        expect(anchor?.href).toContain('/blog/test');
    });
    it('Should render an image with a src of "https://www.google.com/"', async () => {
        const image: HTMLImageElement = screen.getByRole('img');
        expect(image).not.toBeNull();
        expect(image?.src).toBe('https://www.google.com/');
        expect(image?.alt).toBe('the picture');
    });
    it('Should have an h2 with the content of "test title"', async () => {
        const h2 = screen.getByRole('heading')
        expect(h2).not.toBeNull();
        expect(h2.innerHTML).toBe('test title');
    });
    it('Should have a paragraph with the content of "a description"', async () => {
        const p = screen.getByText('a description');
        expect(p).not.toBeNull();
        expect(p.innerHTML).toBe('a description');
    });
})