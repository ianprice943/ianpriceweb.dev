import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import JobCard from './JobCard.svelte';
import type { JobData } from '$lib/types/resumeTypes.types';

describe("JobCard.svelte", async () => {
    const mockData: JobData = {
        id: 1,
        company_name: 'Company',
        job_title: 'Title',
        description: 'Description',
        job_descriptions: [
            { id: 1, description: "Description 1" },
            { id: 2, description: "Description 2" }
        ],
        start_time: 'January 2023',
        end_time: 'March 2023'
    }
    const result = render(JobCard, {cardContent: mockData});
    const card = result.container.querySelector('article');

    it('Should render an article', async () => {
        expect(card).not.toBeNull();
    });
    it('Should have an h3 with the company_name from mockData', async () => {
        const h3 = screen.getByRole('heading');
        expect(h3).not.toBeNull();
        expect(h3?.innerHTML).toBe(mockData.company_name);
    });
    it('Should have 3 paragraphs', async () => {
        const paragraphs = card?.querySelectorAll('p');
        expect(paragraphs?.length).toBe(3);
    });
    it('Should have the first paragraph contain the job_title from mockData', async () => {
        const paragraph1 = card?.querySelector('p:first-of-type');
        expect(paragraph1).not.toBeNull();
        expect(paragraph1?.innerHTML).toBe(mockData.job_title);
    });
    it('Should have the second paragraph contain start_time and end_time from mockData ', async () => {
        const paragraph2 = card?.querySelector('p:nth-of-type(2)');
        expect(paragraph2).not.toBeNull();
        expect(paragraph2?.innerHTML).toBe(`${mockData.start_time} - ${mockData.end_time}`);
    });
    it('Should have the third paragraph contain description from mockData', async () => {
        const paragraph3 = card?.querySelector('p:last-of-type');
        expect(paragraph3).not.toBeNull();
        expect(paragraph3?.innerHTML).toBe(mockData.description);
    });
    it('Should have an unordered list of responsibilities from job_descriptions from mockData', async () => {
        const ul = card?.querySelector('ul');
        expect(ul).not.toBeNull();
        
        const listItems = ul?.querySelectorAll('li');
        const listItemsLength = listItems?.length;
        expect(listItemsLength).toBe(mockData.job_descriptions.length);

        if(listItemsLength && listItems) {
            for(let i = 0; i < listItemsLength; i++) {
                expect(listItems[i].innerHTML).toBe(mockData.job_descriptions[i].description)
            }
        }
    });
});