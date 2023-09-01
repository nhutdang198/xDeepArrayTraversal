"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xDeepArrayTraversal = void 0;
/**
 * Recursively traverses a deeply nested array and applies a callback function
 * to each non-array element encountered.
 *
 * @param deepArray - The nested array to traverse.
 * @param callback - The callback function to apply to non-array elements.
 */
function xDeepArrayTraversal(deepArray, callback) {
    for (var _i = 0, deepArray_1 = deepArray; _i < deepArray_1.length; _i++) {
        var iterator = deepArray_1[_i];
        if (Array.isArray(iterator)) {
            xDeepArrayTraversal(iterator, callback);
        }
        else {
            if (typeof callback === 'function') {
                callback(iterator);
            }
        }
    }
}
exports.xDeepArrayTraversal = xDeepArrayTraversal;
