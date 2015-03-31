/** @license MIT License (c) copyright 2015 Volker Möbius */

'use strict';

/**
 * @typedef {Object} GetEnvOptions
 * @property {string} variable
 * @property {string} default
 */

module.exports = function () {

	/**
	 * @summary Get Environment
	 * @param {string} variable Environment variable name
	 * @param {string} [defaultValue] Default value to be returned if the environment variable isn't set
	 * @returns {string}
	 */
	function getenv(variable, defaultValue) {
		var value = process.env[variable];
		return value !== 'undefined' ? value : defaultValue;
	}

	//noinspection JSUnusedLocalSymbols
	function getenvFactory(resolver, componentDefinition, wire) {
		/** @type GetEnvOptions | string */
		var options = componentDefinition.options;
		var value;
		if (typeof options === 'string') {
			value = getenv(options);
		}
		else if (typeof options === 'object' && options != null) {
			value = getenv(options.variable, options.default);
		}
		resolver.resolve(value);
	}

	return {
		factories: {
			getenv: getenvFactory
		}
	};
};
