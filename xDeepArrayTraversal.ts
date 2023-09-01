/**
 * Recursively traverses a deeply nested array and applies a callback function
 * to each non-array element encountered.
 *
 * @param deepArray - The nested array to traverse.
 * @param callback - The callback function to apply to non-array elements.
 */
export function xDeepArrayTraversal(deepArray: any[], callback: (element: any) => void): void {
  for (const iterator of deepArray) {
    if (Array.isArray(iterator)) {
      xDeepArrayTraversal(iterator, callback);
    } else {
      if (typeof callback === 'function') {
        callback(iterator);
      }
    }
  }
}
