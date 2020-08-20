"use strict";
exports.__esModule = true;
exports.nextId = void 0;
require("core-js/es7/array/includes");
console.log(nextId([0, 1, 2, 3, 5]));
console.log(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
function nextId(ids) {
    var i = 0;
    while (ids.includes(i)) {
        i++;
    }
    return i;
}
exports.nextId = nextId;
