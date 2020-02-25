
exports.min = function min(array) {
    if (array && array.length > 0) {
        let minValue = 0;
        minValue = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] < minValue) {
                minValue = array[i];
            }
        }
        return minValue;
    }
    return 0;
}

exports.max = function max(array) {
    if (array && array.length > 0) {
        let maxValue = 0;
        maxValue = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] > maxValue) {
                maxValue = array[i];
            }
        }
        return maxValue;
    }
    return 0;
}

exports.avg = function avg(array) {
    if (array && array.length > 0) {
        let avgValue = 0;
        let sum = 0
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        avgValue = sum / array.length;
        return avgValue;
    }
    return 0;
}
