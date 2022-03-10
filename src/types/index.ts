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

export interface Config {
	vars: Vars;
	triggers: Triggers;
	extraUrlParams?: ExtraUrlParams;
	touchVars?: TouchVars;
	middleware?: string;
}

export interface Vars {
}

export interface TouchVars {
}

export interface Triggers {
	[trigger: string]: {[key: string]: string} | string;
}

export type ExtraUrlParams = {}
