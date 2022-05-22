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
      A:  
b) Verify and explain:
      A:  
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
      A:  
b) Verify and explain:
      A:  
*/


// ----------------------------------4) What will this log?---------------------------------- //
/* -------------------------------------------------------------------------------------------*/
var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

/* ---------------------------------- Answers - Question 4 -------------------------------------
------------------------------------------------------------------------------------------------
a) Your answer:
      A:  
b) Verify and explain:
      A:  
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
      A:  
b) Verify and explain:
      A:  
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
      A:  
b) Verify and explain:
      A:  
*/