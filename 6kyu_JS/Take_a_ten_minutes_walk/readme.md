# Take a ten minutes walk

It is a function to return true if the walk takes ten minutes.

## Description

You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']).

- It returns 'True' if the walk is for 10 minutes and need to return the starting point
- It returns false if it takes too long or short
- A single block (each letter) represents 1 minute
- Always receive a valid array containing a random letters ('n', 's', 'e', or 'w' only)


example input | output
```
['w'] | false
['w', 's'] | false
['n', 'n', 's'] | false
['n','s','n','s','n','s','n','s','n','s'] | true // equal number of movements of opposite side (n-s)
['w','e','w','e','w','e','w','e','w','e'] | true // equal number of movements of opposite side (w-e)
['n','s','n','s','n','s','n','n','n','n'] | false // gone to far north (n > s)
['w','e','w','e','w','e','w','w','w','w'] | false // gone to far west (w > e)
['w','e','n','s','w','e','n','s','w','e'] | true // return to starting point
['w','e','n','s','w','e','n','s','w','w'] | false // (w > e)
['w','e','w','e','w','e','w','e','w','e','w','e'] | false // more then 10 minutes

```

## Reflection

My first appoach was counting the movements of each direction and calculate the movements using if statement. I refactored if statement to switch statement as it has a consistent condition. I considered the oppsite sides as a pair to make the code simple rather than counting each letter.

This function can be implemented by creating countfunction which takes each letter and return the length of the filtered array with the letter. Then, the comparision of opposite direction are same, it should return true. 

