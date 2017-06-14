/**
 *
 */
require('jsPolyfills');
const { expect } = require('chai');
const isEdgeLocation = require('../../../client/model/isEdgeLocation');

describe('client/model/isEdgeLocation', function() {
    it('exists', function() {
        expect(isEdgeLocation).to.be.a('function');
    });

    it('returns true for items in column A', function() {
        expect(isEdgeLocation('A4')).to.be.true;
        expect(isEdgeLocation('A2')).to.be.true;
    });

    it('returns true for locations in column I', function() {
        expect(isEdgeLocation('I4')).to.be.true;
        expect(isEdgeLocation('I2')).to.be.true;
    });

    it('returns true for locations in the first row', function() {
        expect(isEdgeLocation('C1')).to.be.true;
        expect(isEdgeLocation('E1')).to.be.true;
    });

    it('returns true for locations in the last row', function() {
        expect(isEdgeLocation('E9'), 'E9 was wrong').to.be.true;
        expect(isEdgeLocation('C7'), 'C7 was wrong').to.be.true;
        expect(isEdgeLocation('I5'), 'I5 was wrong').to.be.true;
    });

    it('returns false for invalid locations', function() {
        expect(isEdgeLocation('I6'), 'I6 was wrong').to.be.false;
        expect(isEdgeLocation('A0'), 'A0 was wrong').to.be.false;
        expect(isEdgeLocation('Z1'), 'Z1 was wrong').to.be.false;
    });
});