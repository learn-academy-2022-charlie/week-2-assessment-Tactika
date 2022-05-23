// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// ----------------------------------1) What will this log?---------------------------------- //
/* -------------------------------------------------------------------------------------------*/
var cohort = "Bravo 2022"
// console.log(cohort.split(""))

/* ---------------------------------- Answers - Question 1 -------------------------------------
------------------------------------------------------------------------------------------------
a) Your answer:
      A:  This will log the array ["B", "r", "a", "v", "o", " ", "2", "0", "2", "2"]
b) Verify and explain:
      A:  It logged out how I expected since the split method takes a string and separates by a provided argument. The empty string is how you call to split after every character including spaces and special characters. A space  would split it by each word and a period could be a way to split by sentence.
*/

// ----------------------------------2) What will this log?---------------------------------- //
/* -------------------------------------------------------------------------------------------*/
const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

/* ---------------------------------- Answers - Question 2 ------------------------------------
a) Your answer: 
      A:  This log will log undefined to the console since there isn't a return from the function
b) Verify and explain:
      A:  Functions are used to take in data and return new data back, without a return statement or a console.log the terminal will not show any information in the console. If you have a console.log within your function, it may display on the terminal, but no data will be returned and an undefined will always  show up on the terminal.
*/

// ----------------------------------3) What will this log?---------------------------------- //
/* -------------------------------------------------------------------------------------------*/
var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

/* ---------------------------------- Answers - Question 3 -------------------------------------
------------------------------------------------------------------------------------------------
a) Your answer:
      A:  This will return an array of numbers [8, 10, 12, 14, 16]
b) Verify and explain:
      A:  Since the array of numbers had the map method iterate over the values of the arrays and returns the value times two to the array before moving to the next value. The console.log will return the array since the array that was mapped over is equal to the variable name multBy2. This is commonly used in functions to iterate over an input array.
*/


// ----------------------------------4) What will this log?---------------------------------- //
/* -------------------------------------------------------------------------------------------*/
var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

/* ---------------------------------- Answers - Question 4 -------------------------------------
------------------------------------------------------------------------------------------------
a) Your answer:
      A:  The console.log will log an array of odd numbers [11, 13, 15]
b) Verify and explain:
      A:  The console.log returned an array of odd numbers with the even numbers filtered out due to the use of the .filter method. The modulus operator returns the remainder and that then gets compared using the inequality comparison operator to zero, which would test if the item is an odd number. These values are then returned to the onlyOdds variable into a new array. This code could be used to filter out even characters by just changing one character in the inequality comparison operator.
*/


// ----------------------------------5) What will this log?---------------------------------- //
/* -------------------------------------------------------------------------------------------*/
var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

/* ---------------------------------- Answers - Question 5 -------------------------------------
------------------------------------------------------------------------------------------------
a) Your answer:
      A:  The console.log should output the string of 'JavaScript'
b) Verify and explain:
      A:  The log returned the string "JavaScript". The reason this was logged was because the myCodingSkills object was called with the dot notation of the languages key and a bracket/index notation of zero, which would grab the zeroth index "JavaScript".
*/


/* ------------------------------ STRETCH: What will this log? ------------------------------ */
/* -------------------------------------------------------------------------------------------*/
class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
// console.log(learnStudent)

/* ------------------------------- Answers - Stretch Question ----------------------------------
------------------------------------------------------------------------------------------------
a) Your answer:
      A:  This should return a new Learn object with the student = "george", cohort = "Bravo", year = 2022
b) Verify and explain:
      A:  The log did return an object with the previous expected results. The reason behind this is because the Learn class is used to build a new student with just a name. The class has values predefined for the cohort and year but the constructor only requires a student name to be passed in to complete the class. The learnStudent variable is then requesting a new student by passing a name into the Learn class using the new keyword.
*/