# Replace with alphabet position

It converts each letter in a string to numbers

## Description

It replaces every letter in the given string with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

Example Input | Output 

```
alphabetPosition("a") | "1"
alphabetPosition("ab") | "1 2"
alphabetPosition("abc") | "1 2 3"
alphabetPosition("abcd") | "1 2 3 4"
alphabetPosition("abcde") | "1 2 3 4 5"
alphabetPosition("!") | ""
alphabetPosition("The narwhal bacons at midnight.") | "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"
alphabetPosition("The sunset sets at twelve o' clock.") | "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
```

## Reflection

To access each number of alphabet, I created a string to use index of each letter. It also can be done by using UniCode of letters. Javascript has a builtin methond, charCodeAt(letter) which returns the Unicode value of character at a specified index in string. More tests should be carried out for multiple punctuation marks or uppercase. 