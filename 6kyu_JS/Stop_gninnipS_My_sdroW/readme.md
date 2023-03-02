# Stop gninnipS My sdroW!

This is a function to manipulate a string.

## Description

- It takes a string of one or more words, and returns the same string.
- But with all five or more letter words is reversed.
- Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples Input | Output

```
"Hey fellow warriors" | "Hey wollef sroirraw"
"This is a test" | "This is a test"
"This is another test" | "This is rehtona test"
```

## Reflection

1. Further features

   Error message can be logged when argument is not a string or an empty array

2. My Approach

   I decided to iterate the array of words by forEach loop but it can be done by map loop.
   I followd TDD process, testing the simplest one first.
   Things to improve: More practice on refactoring, getting familiar with in-built methods.
