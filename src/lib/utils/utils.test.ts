import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/svelte';
import { getTodayString, convertDateString, highlightSettings, setTabIndexOnCodeBlocks } from './utils';

describe('highlight.js settings', () => {
	it('should return highlight.js converted html with typescript highlighting', async () => {
		const lang = 'typescript';
		const code = "const test = 'Hello World'";
		expect(highlightSettings(code, lang)).toContain('hljs');
	});
	it('should return highlight.js converted html with no highlighting', () => {
		const lang = '';
		const code = "const test2 = 'No highlighting'";
		expect(highlightSettings(code, lang)).not.toContain('hljs');
	});
});

describe('Date Formatting', () => {
	it('should get today\'s date in YYYY/M(M)/D(D) format', () => {
		const dateObj = new Date();
		const month = dateObj.getUTCMonth() + 1;
		const day = dateObj.getUTCDate();
		const year = dateObj.getUTCFullYear();
		const today = `${year}/${month}/${day}`;
		
		expect(
			getTodayString()
		).toBe(today);
	});
	it('should have March 28th 2023 be formatted to 2023/3/28', () => {
		expect(
            convertDateString('March 28 2023')
        ).toBe("2023/3/28");
	});
	it('should have 2023-03-05 00:00:00+00 be formatted to 2023/3/5', () => {
		expect(
			convertDateString('2023-03-05 00:00:00+00')
		).toBe("2023/3/5");
	});
});

describe('setTabIndexOnCodeBlocks', () => {
	it('should add tabIndex=0 to all code tags', () => {
		for(let i = 0; i < 5; i++) {
			const codeNode = document.createElement('code');
			codeNode.innerHTML = 'test';
			document.body.appendChild(codeNode);
		}
		setTabIndexOnCodeBlocks(true);

		const nodes = screen.getAllByText('test');

		nodes.forEach((node) => {
			expect(node.tabIndex).toBe(0);
		})
	})
});