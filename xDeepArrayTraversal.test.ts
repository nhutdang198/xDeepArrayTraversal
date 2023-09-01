import { xDeepArrayTraversal } from './xDeepArrayTraversal';

describe('xDeepArrayTraversal', () => {
  it('should traverse and call the callback for each element', () => {
    const deepArray = [1, [2, [3, 4]], [5, 6], 7];
    const result: any[] = [];

    function callback(item: any) {
      result.push(item);
    }

    xDeepArrayTraversal(deepArray, callback);

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('should handle an empty array', () => {
    const deepArray: any[] = [];
    const result: any[] = [];

    function callback(item: any) {
      result.push(item);
    }

    xDeepArrayTraversal(deepArray, callback);

    expect(result).toEqual([]);
  });

  it('should handle arrays with no non-array elements', () => {
    const deepArray = [[], [], []];
    const result: any[] = [];

    function callback(item: any) {
      result.push(item);
    }

    xDeepArrayTraversal(deepArray, callback);

    expect(result).toEqual([]);
  });

  it('should handle callback not being a function', () => {
    const deepArray = [1, [2, [3, 4]], [5, 6], 7];
    const result: any[] = [];

    // Define a non-function callback
    const callback = 'not a function';

    xDeepArrayTraversal(deepArray, callback as any);

    expect(result).toEqual([]);
  });
});
