/**
 * Recursively traverses a deeply nested array and applies a callback function
 * to each non-array element encountered.
 *
 * @param deepArray - The nested array to traverse.
 * @param callback - The callback function to apply to non-array elements.
 */
declare function xDeepArrayTraversal(deepArray: any[], callback: (item: any) => void): void;

export = xDeepArrayTraversal;
