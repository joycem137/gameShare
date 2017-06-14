/**
 * generate a list of valid moves
 */
const {isEdgeLocation, isFilledDirection, getAdjacentLocations, getDirectionOf} = require('./util');

function generateValidMoves({locations, pieces}) {
    return locations
        .filter(location => isEdgeLocation(location))
        .map((location) => {
            const adjacentLocations = getAdjacentLocations({location, locations});
            return {
                location,
                adjacentLocations
            };
        }).flatMap(({location, adjacentLocations}) => {
            return adjacentLocations.map(adjacentLocation => {
                const canMove = !isFilledDirection({
                    location,
                    direction: adjacentLocation.direction,
                    pieces,
                    locations
                });
                if (canMove) {
                    return location + '-' + adjacentLocation.location;
                } else {
                    return null;
                }
            }).filter(output => !!output);
        })
}

module.exports = generateValidMoves;