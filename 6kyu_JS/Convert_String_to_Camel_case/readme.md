# Convert String to Camel Case

It converts the words into camel case which is the practice of writing phrases without spaces or punctuation and with capitalised words.

## Description

It detects dash or underscore and eliminates it and combines all the words capitalising the first letter. 

The first word within the output should be capitalised only if the original word was capitalised(Upper Camel Case or Pascal case). 

The next words should be always capitalised.

```
Example Input | Output
"the-stealth-warrior" | "theStealthWarrior"

"The_Stealth_Warrior" | "TheStealthWarrior"

"The_Stealth-Warrior" | "TheStealthWarrior"

```

## Refelction

I approached the function with map function to iterate over the array of strings. Replace function can be used to find any match of hyphen or underscore and replace it by the letter followed by them. This can be done as below.

```JS
toCamelCase = (str) => {
  //Regular expression to get the following letter of hyphen or underscore
  let regExp=/[-_]\w/ig;
  
  //replace any hyphens or underscores by the letter next to them change it to Uppercase
  return str.replace(regExp,(letter) => {
    return letter.charAt(1).toUpperCase();
  });
}