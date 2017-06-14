/**
 * Returns true if the location in question is on the edge of
 * the board.
 */
function isEdgeLocation(locationId) {
    const colLetter = locationId.charAt(0);
    const rowIndex = Number(locationId.charAt(1));

    const colIndex = colLetter.charCodeAt(0) - 65;
    const distanceFromCenter = Math.abs(4 - colIndex);
    const colRowMax = 9 - distanceFromCenter;

    if(colIndex < 0 || colIndex > 8 || rowIndex > colRowMax || rowIndex < 1) {
        return false;
    }

    return (rowIndex === 1 ||
        colLetter === 'A' ||
        colLetter === 'I' ||
        rowIndex === colRowMax);
}

/**
 * returns true if a location is occupied
 * @param locationId
 */
function isOccupiedLocation(locationId, pieces) {
    return pieces.some((piece) => piece.location === locationId);
}

function isFilledDirection({location, direction, pieces, locations}) {
    // For testing purposes right now, this is just false.
    return false;
}

const charCodeStart = 65; //A
const middleCol = 4;
const directions = ['up', 'down', 'upLeft', 'upRight', 'downLeft', 'downRight'];

// Returns the adjacent location in the specified direction, if applicable.
function getAdjacentLocation({homeLocation, direction, locations}) {
    const col = homeLocation.charCodeAt(0) - charCodeStart;
    const row = Number(homeLocation.charAt(1));

    let newCol;
    let newRow;

    // Find the new row and col.
    switch(direction) {
        case 'up':
            newCol = col;
            newRow = row + 1;
            break;
        case 'down':
            newCol = col;
            newRow = row - 1;
            break;
        case 'upLeft':
            newCol = col - 1;
            if (col <= middleCol) {
                newRow = row;
            } else {
                newRow = row + 1;
            }
            break;
        case 'downLeft':
            newCol = col - 1;
            if (col <= middleCol) {
                newRow = row - 1;
            } else {
                newRow = row;
            }
            break;
        case 'upRight':
            newCol = col + 1;
            if (col < middleCol) {
                newRow = row + 1;
            } else {
                newRow = row;
            }
            break;
        case 'downRight':
            newCol = col + 1;
            if (col < middleCol) {
                newRow = row;
            } else {
                newRow = row - 1;
            }
            break;
    }

    const newColLetter = String.fromCharCode(charCodeStart + newCol);
    const newLocationId = newColLetter + newRow;

    if(locations[newLocationId]) {
        return newLocationId;
    } else {
        return null;
    }
}

// Returns a list of all adjacent locations to the indicated location
function getAdjacentLocations({homeLocation, locations}) {
    return directions
        .map((direction) => {
            const location = getAdjacentLocation({homeLocation, locations, direction});
            return {direction, location}
        })
        .filter(result => !!result.location)
}

function getDirectionOf({homeLocation, location, locations}) {
    return directions.find((direction) => {
        const locationInThatDirection = getAdjacentLocation({homeLocation, locations, direction});
        return locationInThatDirection === location;
    });
}

module.exports = {
    isEdgeLocation,
    isOccupiedLocation,
    isFilledDirection,
    getAdjacentLocation,
    getAdjacentLocations,
    getDirectionOf
};