/**
 *
 */
require('jsPolyfills');
const { expect } = require('chai');
const {isEdgeLocation, isOccupiedLocation} = require('../../../client/model/util');

const mockPieces = [
    {id: 0, color: 'white', height: 2, location: 'B2'},
    {id: 1, color: 'white', height: 2, location: 'E8'},
    {id: 2, color: 'white', height: 2, location: 'H2'},
    {id: 3, color: 'black', height: 2, location: 'B5'},
    {id: 4, color: 'black', height: 2, location: 'E2'},
    {id: 5, color: 'black', height: 2, location: 'H5'}
];

describe('client/model/util', function() {
    describe('isOccupiedLocation', function() {
        it('exists', function() {
            expect(isOccupiedLocation).to.be.a('function');
        });

        it('returns true if any of the pieces are at the location', function() {
            const result = isOccupiedLocation('B2', mockPieces);
            expect(result).to.be.true;
        });

        it('returns false if no pieces are at the location', function() {
            const result = isOccupiedLocation('E4', mockPieces);
            expect(result).to.be.false;
        });
    });

    describe('isEdgeLocation', function() {
        it('exists', function () {
            expect(isEdgeLocation).to.be.a('function');
        });

        it('returns true for items in column A', function () {
            expect(isEdgeLocation('A4')).to.be.true;
            expect(isEdgeLocation('A2')).to.be.true;
        });

        it('returns true for locations in column I', function () {
            expect(isEdgeLocation('I4')).to.be.true;
            expect(isEdgeLocation('I2')).to.be.true;
        });

        it('returns true for locations in the first row', function () {
            expect(isEdgeLocation('C1')).to.be.true;
            expect(isEdgeLocation('E1')).to.be.true;
        });

        it('returns true for locations in the last row', function () {
            expect(isEdgeLocation('E9'), 'E9 was wrong').to.be.true;
            expect(isEdgeLocation('C7'), 'C7 was wrong').to.be.true;
            expect(isEdgeLocation('I5'), 'I5 was wrong').to.be.true;
        });

        it('returns false for invalid locations', function () {
            expect(isEdgeLocation('I6'), 'I6 was wrong').to.be.false;
            expect(isEdgeLocation('A0'), 'A0 was wrong').to.be.false;
            expect(isEdgeLocation('Z1'), 'Z1 was wrong').to.be.false;
        });
    });
});