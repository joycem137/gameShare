/**
 * Function that returns the next adjacent location in that
 * direction.
 */

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
            newRow = row - 1;
            break;
        case 'down':
            newCol = col;
            newRow = row + 1;
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
                newRow = row;
            } else {
                newRow = row + 1;
            }
            break;
        case 'downRight':
            newCol = col + 1;
            if (col < middleCol) {
                newRow = row - 1;
            } else {
                newRow = row;
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
        .map((direction) => getAdjacentLocation({homeLocation, locations, direction}))
        .filter(locationId => !!locationId);
}

module.exports = {
    getAdjacentLocation,
    getAdjacentLocations
};