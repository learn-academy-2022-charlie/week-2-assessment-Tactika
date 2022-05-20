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

const divisibleBy3 = (number) =>{
    return (
        typeof number !== "number" ? `The ${typeof number} of "${number}" is not a valid number.`:
        number % 3 === 0 || number === 0 ? `${number} is divisible by three`:
        `${number} is not divisible by three`
    )
}
/* 
---------- Green Test Results ---------------------
    PASS  ./code-challenges.test.js
    divisibleBy3
        ✓ Takes in a number and returns whether or not it is divisible by 3 or not (2 ms)
*/        

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]


// b) Create the function that makes the test pass.



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2


// b) Create the function that makes the test pass.
