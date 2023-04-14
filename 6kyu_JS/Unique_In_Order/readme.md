# Unique in Order

It finds duplicate letters in a given value.

## Description

The function takes a sequence as an argument and returns a list of items without any elements with the same value nex to each other.
The returned items should be preserved the original order of elements. 
The input must be either a string or an array. 

```
Example Input | Output
uniqueInOrder('AAAABBBCCDAABBB') | ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         | ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       | [1,2,3]
```

## Reflection