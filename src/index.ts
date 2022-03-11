/*
 * Copyright (c) 2022 by Marfeel Solutions (http://www.marfeel.com)
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
import { Config } from './types';

export * from './types';

const createScriptSrc = (config : Config) => {
	const beacon = config?.touchVars?.beacon;
	const cid = config?.touchVars?.cid || '';

	return `https://r.turn.com/r/beacon?${beacon}&cid=${cid}`
}

export default class Provider {
	$initialized: Promise<void>;

	constructor(config: Config, marfeel: Marfeel) {
		this.$initialized = Promise.resolve();
	}

	async pageview(config: Config, marfeel: Marfeel): Promise<void> {
		Object.assign(document.createElement('img'),
			{ src: createScriptSrc(config) });

		return Promise.resolve();
	}
}
