/**
 * Given an x, y coordinate in UI space, find the nearest location
 *
 */
function findNearestLocation({xScale, yScale, locations, x, y}) {
    const nearestValue = Object.keys(locations)
        .reduce((nearestSoFar, key) => {

            const location = locations[key];
            const locationX = location.x * xScale;
            const locationY = location.y * yScale;

            const distance = Math.hypot(x - locationX, y - locationY);

            if (distance < nearestSoFar.distance) {
                return {distance, key};
            } else {
                return nearestSoFar;
            }

        }, {distance: 999999999, key: ''});

    return nearestValue.key;
}

module.exports = findNearestLocation;