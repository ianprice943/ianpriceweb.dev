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
    const card = result.container;
    it('should render an article', async () => {
        expect(card.querySelector('article')).not.toBeNull();
    });
});