/**
 * Generates the list of locations on the board.
 */

// Definitive values from GIMP
const cols = [177, 306, 438, 569, 700, 829, 958, 1093, 1226];
const centerCol = 4;

const evenColRows = [1298, 1154, 1004, 846, 700, 547, 395, 243, 98];
const oddColRows = [1228, 1079, 926, 776, 625, 473, 320, 167];

function generateLocations() {
    const locationArray = cols
        .flatMap((colPosition, colIndex) => {
            const colLetter = String.fromCharCode(65 + colIndex);
            const rows = colIndex % 2 === 0 ? evenColRows : oddColRows;
            const distanceFromCenter = Math.abs(colIndex - centerCol);
            const totalCols = evenColRows.length - distanceFromCenter;
            const minIndex = Math.floor(distanceFromCenter / 2);
            const maxIndex = minIndex + totalCols - 1;

            let rowId = 1;

            return rows
                .map((rowPosition, rowIndex) => {
                    if (rowIndex >= minIndex && rowIndex <= maxIndex) {
                        return {
                            id: colLetter + rowId++,
                            x: colPosition,
                            y: rowPosition
                        };
                    } else {
                        return {};
                    }
                });
        });

    const locations = {};
    locationArray.forEach((location) => {
        if (location.id) {
            locations[location.id] = location;
        }
    });
    return locations;
}

module.exports = generateLocations;