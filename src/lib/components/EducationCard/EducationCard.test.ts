import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import EducationCard from './EducationCard.svelte';
import type { EducationData } from '$lib/types/resumeTypes.types';

describe("EducationCard.svelte", async () => {
    const mockData: EducationData = {
        id: 1,
        school_name: 'Miami University',
        graduate_level: 'Undergraduate',
        degree_earned: 'Bachelor of Science in Computer Science',
        education_time: 'August 2015 - May 2019'
    }
    const result = render(EducationCard,
        {
            cardContent: mockData
        }
    )
    const card = result.container.querySelector('article');
    it('Should render an article', async () => {
        expect(card).not.toBeNull();
    });
    it('Should render an h3 with the school_name from mockData', async () => {
        const h3 = screen.getByRole('heading');
        expect(h3).not.toBeNull();
        expect(h3?.innerHTML).toBe(mockData.school_name);
    });
    it('Should render three paragraphs', () => {
        const paragraphs = card?.querySelectorAll('p');
        expect(paragraphs?.length).toBe(3);
    });
    it('Should render graduate_level from mockData in the first paragraph', async () => {
        const paragraph1 = card?.querySelector('p:first-of-type');
        expect(paragraph1).not.toBeNull();
        expect(paragraph1?.innerHTML).toBe(mockData.graduate_level);
    });
    it('Should render the degree_earned from mockData in the 2nd paragraph', async () => {
        const paragraph2 = card?.querySelector('p:nth-of-type(2)');
        expect(paragraph2).not.toBeNull();
        expect(paragraph2?.innerHTML).toBe(mockData.degree_earned);
    });
    it('Should render the education_time from mockData in the 3rd paragraph', async () => {
        const paragraph3 = card?.querySelector('p:last-of-type');
        expect(paragraph3).not.toBeNull();
        expect(paragraph3?.innerHTML).toBe(mockData.education_time);
    });
});