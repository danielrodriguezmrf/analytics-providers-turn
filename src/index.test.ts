/*
 * Copyright (c) 2020 by Marfeel Solutions (http://www.marfeel.com)
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Marfeel Solutions S.L and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Marfeel Solutions S.L and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Marfeel Solutions SL.
 */

import { Marfeel } from '@marfeel/analytics-providers-environment';
import Provider, { Config } from './index';

describe('Provider', () => {
	let provider: Provider;
	let configuration: Config;
	let marfeel: Marfeel;

	beforeEach(() => {
		configuration = {
			vars: {
			},
			touchVars: {
				beacon: 'test'
			},
			triggers: {}
		};
		marfeel = {
			scripts: {
				installScript: jest.fn(() => Promise.resolve())
			}
		} as unknown as Marfeel;
	});

	describe('pageview', () => {
		test('object.assign is called', async() => {
			const objectSpy = jest.spyOn(Object, 'assign');
			const img = document.createElement('img');
			// eslint-disable-next-line max-len
			const expectedSrc = 'https://r.turn.com/r/beacon?test&cid='

			img.src = expectedSrc;

			provider = new Provider(configuration, marfeel);

			await provider.pageview(configuration, marfeel);

			expect(objectSpy).toHaveBeenCalledWith(img, {
				src: expectedSrc
			});
		});
	});
});