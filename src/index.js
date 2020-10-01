
exports.min = function min(array) {
    if (!array || array.length === 0) { return 0; } else {
        function reduceFunc(minNum, num) {
            if (minNum >= num) { minNum = num; };
            return minNum;
        }
        return array.reduce(reduceFunc);
    };
}

exports.max = function max(array) {
    if (!array || array.length === 0) { return 0; } else {
        function reduceFunc(maxNum, num) {
            if (maxNum <= num) { maxNum = num; };
            return maxNum;
        }
        return array.reduce(reduceFunc);
    };
}

exports.avg = function avg(array) {
    if (!array || array.length === 0) { return 0; } else {
        function reduceFunc(sum, num) {
            return (sum + num);
        }
        return (array.reduce(reduceFunc) / array.length);
    };
}
