/**
 *
 */
require('jsPolyfills');
const { expect } = require('chai');
const generateLocations = require('../../../client/model/generateLocations');

describe('client/model/generateLocations', function() {
    it('exists', function() {
        expect(generateLocations).to.be.a('function');
    });
});