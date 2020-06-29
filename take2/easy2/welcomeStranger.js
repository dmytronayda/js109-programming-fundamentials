/*
Notes:
- input is an array and object
  - array contains 2+ elements that combined with adjoining spaces produce person's name
  - object contains 2 keys "title" and "occupation" with appropriate values
- output is a greeting that usus the persons full name, and mentions person's title

Example:
greetings(["Dmytro", "Naida"], {title: "Project Manager", occupation "Games"});  // 'Hello, Dmytro Naida! Nice to have a Project Manager Games around.'
greetings(["Olena", "Vasylivna", "Naida"], {title: "Specialist", occupation "Data Privacy"}); // 'Hello, Olena Vasylivna Naida! Nice to have a Specialist Data Privacy around.'

Algorithm:
- convert name array to string
- return appropriate greetings string
*/

let greetings = (nameArr, jobObject) => {
  let nameStr = nameArr.join(' ');
  return `Hello, ${nameStr}! Nice to have a ${jobObject.title} ${jobObject.occupation} around.`;
}

console.log(greetings(["Dmytro", "Naida"], {title: "Project Manager", occupation: "Games"}));
console.log(greetings(["Olena", "Vasylivna", "Naida"], {title: "Specialist", occupation: "Data Privacy"}));