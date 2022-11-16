/**
 * 
 * @param {Json} arr Json object where find the value
 * @param {String} prop atribute where we are looking the min
 * @returns {Float} min value in the arr for atribute prop
 */
export const getMin = (arr, prop) => {
    var min;

    for (var i = 0; i < arr.length; i++) {
        if (min == null || parseFloat(arr[i][prop]) < parseFloat(min))
            min = arr[i][prop];
    }
    
    return parseFloat(min);
}

/**
 * 
 * @param {Json} arr Json object where find the value
 * @param {String} prop atribute where we are looking the max
 * @returns {Float} max value in the arr for atribute prop
 */
export const getMax = (arr, prop) => {
    var max;

    for (var i = 0; i < arr.length; i++) {
        if (max == null || parseFloat(arr[i][prop]) > parseFloat(max))
            max = arr[i][prop];
    }

    return parseFloat(max);
}