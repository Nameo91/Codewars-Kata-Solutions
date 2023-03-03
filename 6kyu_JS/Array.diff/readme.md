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

## Reflection

1. Further Feature 

An error message can be added when there are strings in arrays. I assumed only arrays are given as inputs but any other cases can be considered. 

2. My Approach 

For the first test, I used expect - toBe pair but it received serializes to the same string that fails the test. In some case, two different objects may have the same string representation, but they may not be identical in terms of their properties of references. If comparing two objects that serialize to the same string expecting them to be different objects, 'toBe' should be used. However, if expecting them to have the same properties and values, 'toEqual' should be used. In this case, two object comparing are exact same as 'expect' function uses a deep equality check.

After filtering the first array, it returned undefined as I didn't implement return after executing 'filter()' method. The filter() method returns a new array containing all elements of the original array that pass a provided test function. The filter() method does not modify the original array. If the filtered array is not returned explicitly, the function will return 'undefined' by default.
