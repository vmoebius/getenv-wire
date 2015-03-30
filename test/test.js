/*global describe, it */
'use strict';
var assert = require('assert');
var getenv = require('../');


describe('getenv-wire node module', function () {

	it('should return a plugin object with a "getenv" factory', function () {
		var plugin = getenv();
		assert(plugin.factories && plugin.factories.getenv);
	});
});
