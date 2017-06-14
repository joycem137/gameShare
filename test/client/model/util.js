/**
 *
 */
require('jsPolyfills');
const { expect } = require('chai');
const {isEdgeLocation, isOccupiedLocation, getAdjacentLocation, getAdjacentLocations} = require('../../../client/model/util');
const generateLocations = require('../../../client/model/generateLocations');

const mockPieces = [
    {id: 0, color: 'white', height: 2, location: 'B2'},
    {id: 1, color: 'white', height: 2, location: 'E8'},
    {id: 2, color: 'white', height: 2, location: 'H2'},
    {id: 3, color: 'black', height: 2, location: 'B5'},
    {id: 4, color: 'black', height: 2, location: 'E2'},
    {id: 5, color: 'black', height: 2, location: 'H5'}
];

describe('client/model/util', function() {
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
            expect(result).to.deep.have.members([
                {location: 'D4', direction: 'up'},
                {location: 'D2', direction: 'down'},
                {location: 'E3', direction: 'downRight'},
                {location: 'E4', direction: 'upRight'},
                {location: 'C2', direction: 'downLeft'},
                {location: 'C3', direction: 'upLeft'}]);
            expect(result).to.have.length(6);
        });

        it('returns only the real locations for a location on the edge', function() {
            const result = getAdjacentLocations({
                homeLocation: 'A1',
                locations
            });
            expect(result).to.deep.have.members([
                {location: 'A2', direction: 'up'},
                {location: 'B1', direction: 'downRight'},
                {location: 'B2', direction: 'upRight'}]);
            expect(result).to.have.length(3);
        });
    });

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