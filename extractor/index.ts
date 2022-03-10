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

import { Config } from '../src';

export default class Extractor {
	static onRequest(url: string, page: any): Promise<Config[]> {
		return this.matches(url) ?
			Promise.resolve([Extractor.extract(url)]) :
			Promise.resolve([]);
	}

	private static matches(url: string): boolean {
		// TODO To be implemented
	}

	private static extract(url: string): Config {
		// TODO To be implemented
	}
}
