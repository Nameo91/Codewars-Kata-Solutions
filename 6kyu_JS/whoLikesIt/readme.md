# Who Likes It

A simple function to display the names of people that like an item
This is a practice of TDD process through a KATA from Codewars

## Description

The function takes an array containing the names of people that like an item and returns the display text

Examples of Input and Output

```
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
```

## Reflection

1. Further features

   The function takes an array of upto 4 names and it should be able to return more than 4 names.

2. My Approach

   I started with the simplest test passing an empty array in this problem. I can use switch statement as the function performs different actions based on different conditions to avoid a long nested if statement.
