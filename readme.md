**xDeepArrayTraversal** is a utility function in JavaScript/TypeScript that recursively traverses a deeply nested array and applies a callback function to each non-array element encountered. This is useful for tasks that involve working with deeply nested array structures.

## Installation

To use xDeepArrayTraversal, you'll need to include the provided TypeScript file in your project.

1. Download the `xDeepArrayTraversal.ts` file from this repository.
2. Add the file to your project directory.

## Usage

1. Import the `xDeepArrayTraversal` class into your TypeScript code:

   ```typescript
   import { xDeepArrayTraversal } from 'x-deep-array-traversal'
   const deepArray = [1, [2, [3, 4]], [5, 6], 7];
   const callback = (element) => {
    console.log(element)
   }

   xDeepArrayTraversal(deepArray, callback);
   // 1
   // 2
   // 3
   // 4
   // 5
   // 6
   // 7


2. Import the `xDeepArrayTraversal` class into your Javascript code:

   ```javascript
   const { xDeepArrayTraversal } = require("x-deep-array-traversal")
   const deepArray = [1, [2, [3, 4]], [5, 6], 7];
   const callback = (element) => {
    console.log(element)
   }

   xDeepArrayTraversal(deepArray, callback);
   // 1
   // 2
   // 3
   // 4
   // 5
   // 6
   // 7
   
## Support Me

If you find this project helpful or want to show your appreciation, you can support me by [buying me a coffee](https://www.buymeacoffee.com/nhutdm). Your support is greatly appreciated!
