/**
 * Notes: 
 * - ask for 4 words (noun, verb, adjective, adverb)
 * - add the words to the json file with the story
 * - print the result story to the console
 * 
 * Example:
 * - Enter a noun [singular]: girl
 * - Enter a verb: play
 * - Enter an adjective: blue
 * - Enter an adverb: quickly
 * 
 * // prints
 * Why do you [play] with [blue] [girl] [quickly]? That's not right.
 * The [blue] [girl] [play] + s [quickly] only with laim guys.
 * Try to be patient with a [blue] [girl]. You can try hiking more [quickly], though!
 * 
 * Algorithm:
 * - use the readline API to get a user input
 * - get noun
 * - get verb
 * - get adjective 
 * - get adverb
 * - print the result message
 */

const readline = require('readline-sync');

let noun = readline.question("Enter a noun [singular]: ");
let verb = readline.question("Enter a verb: ");
let adjective = readline.question("Enter an adjective: ");
let adverb = readline.question("Enter an adverb: ");

console.log(`Why do you ${verb} with ${adjective} ${noun} ${adverb}? That's not right.`);
console.log(`The ${adjective} ${noun} ${verb + "s"} ${adverb} only with laim guys.`);
console.log(`Try to be patient with a ${adjective} ${noun}. You can try hiking more ${adverb}, though!`);