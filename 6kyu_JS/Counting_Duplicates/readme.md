# Counting Duplicates

It detects distinct case-insensitive alphabetic and numeric digits that occur more than once in a string.

## Description

It returns the count of repeting chracters and numbers in a given string.

The string only contains alphabets and numeric digits.

```
Example Input | Output

"" | 0 # no characters repeats
"abcde" | 0 # no characters repeats more than once
"aabbcde" | 2 # 'a' and 'b'
"aabBcde" | 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" | 1 # 'i' occurs six times
"Indivisibilities" | 2 # 'i' occurs seven times and 's' occurs twice
"aA11" | 2 # 'a' and '1'
"ABBA" | 2 # 'A' and 'B' each occur twice

```

## Reflection

Practiced on refactoring to make code readable and clean. Added more comments and set variables name to be distinguished. Regex (/([^])\1+/g) can be used with match method to find any duplicates in the string. 
