import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import BlogCard from './BlogCard.svelte';

describe('BlogCard.svelte', async () => {
    const mockData = {
        urlStub: 'test', 
        title: 'test title',
        description: 'a description',
        thumbnailUrl: 'https://www.google.com/',
        thumbnailAltText: 'the picture'
    }
    const result = render(BlogCard, mockData);
    const card = result.container.querySelector('li');

    it('Should render an article', async () => {
        expect(card?.querySelector('article')).not.toBeNull();
    });
    it('Should render a link with the href of "/blog/test"', async () => {
        const anchor: HTMLLinkElement = screen.getByRole('link');
        expect(anchor).not.toBeNull();
        expect(anchor?.href).toContain('/blog/test');
    });
    it('Should render an image with a src of "https://www.google.com/"', async () => {
        const image: HTMLImageElement = screen.getByRole('img');
        expect(image).not.toBeNull();
        expect(image?.src).toBe(mockData.thumbnailUrl);
        expect(image?.alt).toBe(mockData.thumbnailAltText);
    });
    it('Should have an h2 with the content of "test title"', async () => {
        const h2 = screen.getByRole('heading')
        expect(h2).not.toBeNull();
        expect(h2.innerHTML).toBe(mockData.title);
    });
    it('Should have a paragraph with the content of "a description"', async () => {
        const p = card?.querySelector('p');
        expect(p).not.toBeNull();
        expect(p?.innerHTML).toBe(mockData.description);
    });
})