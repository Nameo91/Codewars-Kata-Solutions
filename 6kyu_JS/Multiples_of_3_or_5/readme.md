# Multiples of 3 or 5

A simple function to get the sum of numbers which fit the condition given

## Description

The function takes an integer and returns the sum of numbers that are the multiples of 3 or 5 below the given integer.

It returns 0 if the number is negative.

If the number is a multiple of both 3 and 5, only count it once.

Example Input | Output

```
3  | 0
5  | 3
10 | 23
15 | 35
-3 | 0
0  | 0

```

## Reflection

1. Further feature

More test on the bigger number
Amend condition to get the different results

2. My approach

I implemented forEach loop to access each numbers and pushed the element into the new array
to get the numbers that satisfies the given condition. I refactored the loop to map to save the
change in the array so I don't need to create a new array value.

Using for loop will have less lines and the value which meets the requirement can be direclty added
to SUM.

```javascript
solution = (number){
  let sum = 0;

  for(let i = 1; i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}
```
