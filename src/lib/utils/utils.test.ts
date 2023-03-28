import { describe, it, expect } from 'vitest';

import { convertDateString } from './utils';

describe('Date Formatting', () => {
	it('expects March 28th 2023 to be formatted to 2023/3/28', () => {
		expect(
            convertDateString('March 28 2023')
        ).toBe("2023/3/28");
	});
	it('expects 2023-03-05 00:00:00+00 to be formatted to 2023/3/5', () => {
		expect(
			convertDateString('2023-03-05 00:00:00+00')
		).toBe("2023/3/5");
	});
});
