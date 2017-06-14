/**
 *
 */
require('jsPolyfills');
const { expect } = require('chai');
const {getAdjacentLocation, getAdjacentLocations} = require('../../../client/model/getAdjacentLocation');
const generateLocations = require('../../../client/model/generateLocations');

describe('client/model/getAdjacentLocation', function() {
    let locations;
    describe('getAdjacentLocation', function() {
        beforeEach(function() {
            locations = generateLocations();
        });

        it('returns locations that exist', function() {
            const result = getAdjacentLocation({
                homeLocation: 'D3',
                direction: 'upRight',
                locations
            });
            expect(result).to.equal('E4');
        });

        it('returns null for locations that do not exist', function() {
            const result = getAdjacentLocation({
                homeLocation: 'A1',
                direction: 'downLeft',
                locations
            });
            expect(result).to.equal(null);
        });

        it('returns B2 for upRight of A1', function() {
            const result = getAdjacentLocation({
                homeLocation: 'A1',
                direction: 'upRight',
                locations
            });
            expect(result).to.equal('B2');
        });
    });

    describe('getAdjacentLocations', function() {
        beforeEach(function() {
            locations = generateLocations();
        });

        it('returns all the adjacent locations for a location in the middle', function() {
            const result = getAdjacentLocations({
                homeLocation: 'D3',
                locations
            });
            expect(result).to.have.members(['D2', 'D4', 'E3', 'E4', 'C2', 'C3']);
            expect(result).to.have.length(6);
        });

        it('returns only the real locations for a location on the edge', function() {
            const result = getAdjacentLocations({
                homeLocation: 'A1',
                locations
            });
            expect(result).to.have.members(['A2', 'B1', 'B2']);
            expect(result).to.have.length(3);
        });
    });
});