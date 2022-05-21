// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

//Pseudo Code for Test
    //Describe will take in name of function to be tested
    //It will describe what the functions outcome should return
    //Expect will have the individual test cases with the provided test data

describe("divisibleBy3", () => {
    it("Takes in a number and returns whether or not it is divisible by 3 or not", () => {
        const num1 = 15
        const num2 = 0
        const num3 = -7
        const num4 = "ten"

        expect(divisibleBy3(num1)).toEqual("15 is divisible by three")
        expect(divisibleBy3(num2)).toEqual("0 is divisible by three")
        expect(divisibleBy3(num3)).toEqual("-7 is not divisible by three")
        expect(divisibleBy3(num4)).toEqual("The string of \"ten\" is not a valid number.")
    })
})
/* 
---------- Red Test Results ---------------------
    RED - (Failed Test Run)
    FAIL  ./code-challenges.test.js
    divisibleBy3
        ✕ Takes in a number and returns whether or not it is divisible by 3 or not (1 ms)
    ReferenceError: divisibleBy3 is not defined
*/

// b) Create the function that makes the test pass.

/* 
---------- Pseudo Code ---------------------
    Create a function named divisibleBy3
    divisibleBy3 takes in a single parameter which is any number
        Logic:
            - Take in any number: positive or negative... including zero
            - Check if input is a type of number
            - If input is number check if it is divisible by three with no remainder
                - if number is divisible by three return that the number is divisible by three
                - if number is not divisible by three, return that the number is not divisible by three
                - if input isn't of number type, return error message stating the input isn't a valid number
    Test Arguments:
        - First Input: 15
        - Second Input: 0
        - Third Input: -7
        - Fourth Input: "ten"

    Expected Test Output:
        - First Output: "15 is divisible by three"
        - Second Output: "0 is divisible by three"
        - Third Output: "-7 is not divisible by three"
        - Fourth Input: "The string of 'ten' is not a valid number."
*/

// const divisibleBy3 = (number) =>{
//     return (
//         typeof number !== "number" ? `The ${typeof number} of "${number}" is not a valid number.`:
//         number % 3 === 0 || number === 0 ? `${number} is divisible by three`:
//         `${number} is not divisible by three`
//     )
// }
/* 
---------- Green Test Results ---------------------
    PASS  ./code-challenges.test.js
    divisibleBy3
        ✓ Takes in a number and returns whether or not it is divisible by 3 or not (2 ms)
*/
// Refactor
//      - Refactored to remove parameter parenthesis and remove return statement for one line function - refactor would be good for minifying code, but poor for readability

const divisibleBy3 = number => typeof number !== "number" ? `The ${typeof number} of "${number}" is not a valid number.`: number % 3 === 0 || number === 0 ? `${number} is divisible by three`:`${number} is not divisible by three`    

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

/*
---------- Pseudo Code for Test ---------------------
    Describe will take in name of function to be tested
    It will describe what the functions outcome should return
    Expect will have the individual test cases with the provided test data
*/

describe("capitalizeFirstLetter", () => {
    it("Takes in an array of words and returns an array of the words with the first letter of each string capitalized", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]

        expect(capitalizeFirstLetter(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(capitalizeFirstLetter(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
})

/*
---------- Red Test Results ---------------------
    RED - (Failed Test Run)
    FAIL  ./code-challenges.test.js
    capitalizeFirstLetter
        ✕ Takes in an array of words and returns an array of the words with the first letter of each string capitalized
    ReferenceError: capitalizeFirstLetter is not defined
*/

// b) Create the function that makes the test pass.

/* 
---------- Pseudo Code ---------------------
    Create a function named capitalizeFirstLetter
    capitalizeFirstLetter takes in a single parameter which is an array of strings
        Logic:
            - Take in an array of strings
            - Check if input is an array
            - Iterate over each string in array
                - If input is string check if it is at least one character long
                - If string first letter is capitalized continue to next string
                - If string first letter isn't capitalized, change to capital return string to array
                - Once all strings have been gone through, return array with first letters capitalized
    Test Arguments:
        - First Input: ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        - Second Input: ["temperature", "database", "chopsticks", "mango", "deduction"]

    Expected Test Output:
        - First Output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        - Second Output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

*/

// const capitalizeFirstLetter = (stringArr) => {
//     if(Array.isArray(stringArr)) {
//         return stringArr.map(word => {
//             if(word.length < 0) {
//                 return word
//             } else {
//                 return word.charAt(0).toUpperCase() + word.slice(1)
//             }
//         })
//     }
// }

/* 
---------- Green Test Results ---------------------
PASS  ./code-challenges.test.js
    divisibleBy3
    ✓ Takes in a number and returns whether or not it is divisible by 3 or not (3 ms)
    capitalizeFirstLetter
        ✓ Takes in an array of words and returns an array of the words with the first letter of each string capitalized (1 ms)
    // --------------------3) Create a function that takes in a string and logs the index of the first vowel.
*/

/* 
---------- Refactor ---------------------
*/

const capitalizeFirstLetter = stringArr => (Array.isArray(stringArr)) ? (stringArr.map(word => word.length > 0 ? word.charAt(0).toUpperCase() + word.slice(1): word)):stringArr


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.
// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2


// b) Create the function that makes the test pass.
