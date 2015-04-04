/*global describe, beforeEach, afterEach, it */
'use strict';
var assert = require('assert');
var getenv = require('../');
var sinon = require('sinon');


describe('getenv-wire plugin module', function () {

	it('should return a plugin object with a "getenv" factory', function () {
		var plugin = getenv();
		assert(plugin.factories && plugin.factories.getenv);
	});
});


describe('getenv factory', function () {

	var getenvFactory;
	var resolver;

	beforeEach(function () {
		getenvFactory = getenv().factories.getenv;
		resolver = {
			resolve: sinon.spy()
		};
	});

	afterEach(function () {
		delete process.env.TEST_VAR;
	});

	it('should call resolver.resolve', function () {
		getenvFactory(resolver, {});
		assert(resolver.resolve.called);
	});

	describe('invoked with string', function () {

		it('should resolve with defined value of set environment variable', function () {
			process.env.TEST_VAR = 'test value';
			getenvFactory(resolver, {options: 'TEST_VAR'});
			assert(resolver.resolve.calledWith('test value'));
		});

		it('should resolve with undefined if environment variable isn\'t set', function () {
			getenvFactory(resolver, {options: 'TEST_VAR'});
			assert.equal(typeof resolver.resolve.getCall(0).args[0], 'undefined');
		});
	});

	describe('invoked with object', function () {

		it('should resolve with defined value of set environment variable', function () {
			process.env.TEST_VAR = 'test value';
			getenvFactory(resolver, {options: {variable: 'TEST_VAR'}});
			assert(resolver.resolve.calledWith('test value'));
		});

		it('should resolve with undefined if environment variable isn\'t set and no default value provided', function () {
			getenvFactory(resolver, {options: {variable: 'TEST_VAR'}});
			assert.equal(typeof resolver.resolve.getCall(0).args[0], 'undefined');
		});

		it('should resolve with provided default value if environment variable isn\'t set', function () {
			getenvFactory(resolver, {options: {variable: 'TEST_VAR', default: 'default value'}});
			assert.equal(resolver.resolve.getCall(0).args[0], 'default value');
		});
	});
});

