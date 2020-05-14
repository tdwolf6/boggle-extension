/**
 * AMD and CJS module.
 *
 * @module english
 * @submodule string
 */

/* jshint ignore:start */
if (typeof define !== 'function') { var define = require('amdefine')(module) }
/* jshint ignore:end */

define(function (require, exports, module) {
	'use strict';

	var subject = require('subject'),
		_ = require('lodash');

	var string = module.exports = subject(function string(str) {

	});

	return string;
});
