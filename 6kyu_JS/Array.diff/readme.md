# Array.diff

Substracts one list from another and returns the result

## Description

A function takes two parameters as arrays and remove all values from the first parameter, which are present in the second parameter keeping their order.

All appearance of a value in the array of second parameter must be removed from the other.

example Input | Output

```
arrayDiff([],[1]) | []
arrayDiff([1], []) | [1]
arrayDiff([1,2],[1]) | [2]
arrayDiff([1,2,2,2,3],[2]) | [1,3]
```
