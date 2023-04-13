# Find the parity outlier

It detects a single odd or even integer. 

## Description  

The array is given with integers and either entirely contains odd integers or even integers except for a single integer N.
The array always has a length of at least 3 and could be very large. 
The array always contains an outlier.
It takes the array as an argument and returns this outlier, N.

```
Example Input | Output
[2, 4, 0, 100, 4, 11, 2602, 36] | 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] | 160 (the only even number)

```

## Reflection

For the simple solution, the function is refactored using filter method instead of for loop to separate odd numbers and even numbers. Multiple tests are carried out to make sure the funciton executes the outlier correctly with both positive and negative integers. Error messages can be added when the given array is emply or not containing one outlier.  