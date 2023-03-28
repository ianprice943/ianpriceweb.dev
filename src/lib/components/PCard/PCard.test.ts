import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import PCard from './PCard.svelte';

describe("PCard.svelte", async () => {
    const result = render(PCard, {cardContent: "Test string"});
    const card = result.container.querySelector('p');

    it('Should render a paragraph', async () => {
        expect(card).not.toBeNull();
    });
    it('Should render "Test string" inside the paragraph', () => {
        expect(card?.innerHTML).toBe("Test string")
    });
});