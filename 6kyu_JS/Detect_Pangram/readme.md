# Detect Pangram
It detects if the string is a pangram

## Description
A pangram is a sentece that contains every single letter of the alphabet at least once. 
Eg. "The quick brown fox jumps over the lazy dog" - contains the letters A-Z at least once

It returns true if the string is a pangram and false if not. 
Ignore numbers and punctuation.
It is case-insensitive.

``` 
Example Input | Output
"The quick brown fox jumps over the lazy dog." | True
"This is not a pangram." | False
```

## Reflection

Developing regex provides simpler solution such as 
i means both lower and upper case which means the filter function can be removed.

``` js
isPangram = (string) => {
  return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}
```
every() function is also useful in this scenario as it iterates all the alphabet arrays and find matches. 

``` js
isPangram = (string) => {
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((alphabet) => string.toLowerCase().includes(alphabet));
}
```