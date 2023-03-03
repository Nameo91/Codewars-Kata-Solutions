# Bit Counting
Counts the bits of an integer

## Description
The function takes an integer as an input and returns the number of bits that are equal to the one in the binary representatin of that integer. 

The input is always positive.

Example Input | Output

```
0 | 0
1 | 1
4 | 1
7 | 3
9 | 2
10 | 2
1234 | 5
```

## Reflection

Started with the smallest test which was 0 in this case. Converted input into the binary number and split each element in an array. Then, interated using forEach loop to see all the occurances of 1 (bit). I encountered the problem with comparison. I didn't notice the type of binary is string and compared it to an integer of 1. I used '===' comparison which can be used when two types are same. Used console.log to see the iterated element of binary array and found the bug that I did not consider the types.

'==' does the type conversion of the operands before comparison whereas the === operator compares the values as well as the data types of the operands.

I found some simple solutions:

```Javascript
// using split with 0 so it remains only one in the string 
countBits = n => n.toString(2).split('0').join('').length;

// using replace and general expression
var countBits = function(n) {
  return n.toString(2).replace(/0/g,'').length;
};
```

The loop is such good way to reach out to every element but it doesn't have to be used all the time.