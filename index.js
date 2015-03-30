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
		if (typeof options === 'string') {
			return getenv(options);
		}
		else if (typeof options === 'object' && options != null) {
			return getenv(options.variable, options.default);
		}
	}

	return {
		factories: {
			getenv: getenvFactory
		}
	};
};
