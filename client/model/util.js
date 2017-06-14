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

module.exports = {
    isEdgeLocation,
    isOccupiedLocation
};