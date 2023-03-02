# Find the odd int

Given an array of integers, find the one that appears an odd number of times.

## Description

The funtion takes an array of integer and returns one integer that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Example Input | Output

```
[7] | 7       => '7' occurs 1 time
[0] | 0       => '0' occurs 1 time
[1,1,2] | 2   => '2' occurs 1 time
[0,1,0,1,0] | 0   => '0' occurs 3 times
[1,2,2,3,3,3,4,3,3,3,2,2,1] | 4  =>  '4' occurs 1 time

```

## Reflection

1. Further feature

The features can be added for the situation when the array includes more than one integers that appear an odd number of times.

The best solution on Codewars:

```javascript
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
```
To understand the simple function, research more on the reduce method and XOR (^).

2. My approach

The description directs there is always only one integer that suits the condition. I started the test with an array containing one integer. So the first feature of the function is to return the number in an array. Then, I implemented for loop with a counter to count the number of occurrences of each integer. Later, it was refactored using the forEach loop to iterate over all elements in the given array. 