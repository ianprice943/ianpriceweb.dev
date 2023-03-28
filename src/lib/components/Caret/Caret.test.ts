import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import Caret from './Caret.svelte';

describe("Caret.svelte", async () => {
    const caret1 = render(Caret, 
        {
            rotate: false
        }
    );
    const caret2 = render(Caret,
        {
            rotate: true
        }
    );

    it('Should render an svg element', async () => {
        const svg1 = caret1.container.querySelector('svg');
        const svg2 = caret2.container.querySelector('svg');

        expect(svg1).not.toBeNull();
        expect(svg2).not.toBeNull();
    });
});