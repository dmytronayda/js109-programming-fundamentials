/*
Madlibs is a simple game where you create a story template with "blanks" for words. 
You, or another player, then construct a list of words and place them into the story, creating an often silly or funny story as a result.

Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.

Notes: 
- input is 4 strings
- output is a string

Example:

Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!
The blue dog walks quickly over the lazy dog.
The dog quickly walks up blue Joe's turtle.

Algorithm:
- get a noun
- get a verb
- get an adverb
- get an adjective
- print the story with user-provided words to the console
*/

const readline = require('readline-sync');

const NOUN = readline.question('Enter a noun: ');
const VERB = readline.question('Enter a verb: ');
const ADVERB = readline.question('Enter an adverb: ');
const ADJECTIVE = readline.question('Enter an adjective: ');

const STORY = `Do you ${VERB} your ${ADJECTIVE} ${NOUN} ${ADVERB}? That's funny.
The ${ADJECTIVE} ${NOUN} ${VERB}s ${ADVERB} over the lazy ${NOUN}.
The ${NOUN} ${ADVERB} ${VERB}s up ${ADJECTIVE} Joe's turtle.`;

console.log(STORY);