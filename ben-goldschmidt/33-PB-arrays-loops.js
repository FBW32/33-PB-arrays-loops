// # Programming Basics: Loops Using Arrays

console.log("")
console.log("QUESTION 1. sumOfNumbers")
// Create a program that adds up the numbers in an array (of at least 3 numbers). **Bonus**: Print to screen both the sum and the product of these numbers.

let Q1array = [4, 5, 6];

let sumProduct = (...q1input) => {
    let q1sum = 0;      // + must start with 0
    let q1prod = 1;     // * must start with 1
    for (i = 0; i < q1input.length; i++) {
        q1sum += q1input[i];
        q1prod *= q1input[i];
    }
    console.log(`Array Sum => ${q1sum}`)
    console.log(`Array Product => ${q1prod}`)
}
sumProduct(...Q1array);
// Array Sum => 15
// Array Product => 120




console.log("")
console.log("QUESTION 2. Hello Frien")
//  Create an array filled with your friends' and family's names. Loop over the array and greet each friend e.g. Hello Maria! Hello Mike! etc. **Bonus**: Print the indexes of each item in the array. Expected output example: Mike is at index 1 of my friends array.

let relationships = ["Angie", "Davit", "Timoty", "Jonathon", "Rangus", "Wobbie", "Mads", "Kieran"];

let relaLoop = (relArray) => {
    let greeting;
    let relationshipsArray = [];

    for (i = 0; i < relationships.length; i++) {
        greeting = `Hello ${relationships[i]}!`;
        console.log(greeting)
        relationshipsArray.push(greeting);
    }
    console.log(relationshipsArray)
}
relaLoop(relationships);

// Hello Angie!
// Hello Davit!
// Hello Timoty!
// Hello Jonathon!
// Hello Rangus!
// Hello Wobbie!
// Hello Mads!
// Hello Kieran!
// [
//   'Hello Angie!',
//   'Hello Davit!',
//   'Hello Timoty!',
//   'Hello Jonathon!',
//   'Hello Rangus!',
//   'Hello Wobbie!',
//   'Hello Mads!',
//   'Hello Kieran!'
// ]




console.log("")
console.log("QUESTION 3. City Names")
// Create an array of city names. Loop through the array and add the city names to a string. Example of expected output: "Berlin, Paris, Prague, Rome".

let citiesArr = ["Berlin", "Paris", "Prague", "Rome"]

let cityLoop = (...cityInput) => {
    let cityString = "";
    for (i = 0; i < cityInput.length; i++) {
        cityString += cityInput[i] + ", ";
    }
    console.log(cityString);
}
cityLoop(...citiesArr);
// Berlin, Paris, Prague, Rome, 




console.log("")
console.log("QUESTION 4. **Odds and Evens.** ")
// Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:
// * [3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
// * [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]

let oddsEvensArray3524 = [3, 5, 2, 4];
let oddsEvensArray6710 = [6, 9, 10, 20];

let addSub = (numbersArrayInput) => {
    let newNumbers = [];
    for (i = 0; i < numbersArrayInput.length; i++) {
        if (numbersArrayInput[i] % 2 === 0) {
            numbersArrayInput[i] -= 1;
        }
        else {
            numbersArrayInput[i] += 1;
        }
    }
    console.log(numbersArrayInput);
}
addSub(oddsEvensArray3524);
// [4, 6, 1, 3]

addSub(oddsEvensArray6710);
// [5, 10, 9, 19]




console.log("")
console.log("QUESTION 5. **Odds and Evens.** ")
// 5. **Capitalize.** Create a program that capitalises the first letter of each element in an array of names. Examples:
// * ["matt", "sara", "lara"] ➞ ["Matt", "Sara", "Lara"]
// * ["samuel", "MARIA", "luke", "mary"] ➞ ["Samuel", "Maria", "Luke", "Mary"]
// * ["Cynthia", "Karen", "Jane", "Carrie"] ➞ ["Cynthia", "Karen", "Jane", "Carrie"]

// * **Note:** Keep names in the same order and make sure that only the first lesson of the name is capitalised (See "Maria" in the second above example). 

// array.toLowerCase
// if index[i] === 0 ---> .toUpperCase

let names1 = ["matt", "sara", "lara"];
let names2 = ["samuel", "MARIA", "luke", "mary"];
let names3 = ["Cynthia", "Karen", "Jane", "Carrie"];

let capFirstLetter = (namesInput) => {
    let cappedFirstLetter = [];
    let lowerCased = namesInput.join(" ").toLowerCase().split(" ");
    console.log("Lower Case")
    console.log(lowerCased)
    let newLowerCased = [];
    let newLowerCased2;
    let newcapitalised = [];

    console.log("")
    console.log("Upper Case")
    for (i = 0; i < lowerCased.length; i++) {
        for (j = 0; j < lowerCased[i].length; j++) {
            // console.log(j)
            // console.log(lowerCased[i][j])
            if (j === 0) {
                newLowerCased = lowerCased[i][j].toUpperCase();
            }
        }
        newcapitalised.push(newLowerCased);
    }
    console.log(newcapitalised);
}
capFirstLetter(names3);
// Lower Case
// [ 'cynthia', 'karen', 'jane', 'carrie' ]

// Upper Case
// [ 'C', 'K', 'J', 'C' ]




console.log("")
console.log("QUESTION 6. **No Duplicates!**")
// A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
// * [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]

// * [1, 6, 6, 9, 9] ➞ [1, 6, 9]
// * [2, 2, 2, 2, 2, 2] ➞ [2]
// * [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]

let noDupsArray1 = [1, 6, 6, 9, 9];     // ➞ [1, 6, 9]
let noDupsArray2 = [2, 2, 2, 2, 2, 2];  // ➞ [2]
let noDupsArray3 = [5, 10, 15, 20, 25]  // ➞ [5, 10, 15, 20, 25]

let noDuplicates = (...noDupsInput) => {
    let noDups = [];
    for (i = 0; i < noDupsInput.length; i++) {
        if (noDupsInput[i] !== noDupsInput[i + 1]) {
            let index = noDupsInput[i];
            noDups.push(index);
        }
    }
    console.log(`Was ---> `, noDupsInput, `Now ---> `, noDups);
}
noDuplicates(...noDupsArray1);
// Was --->  [ 1, 6, 6, 9, 9 ] Now --->  [ 1, 6, 9 ]

noDuplicates(...noDupsArray2);
// Was --->  [ 2, 2, 2, 2, 2, 2 ] Now --->  [ 2 ]

noDuplicates(...noDupsArray3);
// Was --->  [ 5, 10, 15, 20, 25 ] Now --->  [ 5, 10, 15, 20, 25 ]





console.log("")
console.log("QUESTION 7 **Repeat it.**")
// Create a program with two variables: "item" and "times". Create a program that repeats the "item" as many times as specified by "times". The first variable ("item") is the item that needs repeating while the second argument ("times") is the number of times the item is to be repeated. Print the result in an array.

// * Example: ("example", 3) ➞ ["example", "example", "example"]

let repeatIt = (item, times) => {
    let repeatArr = [];
    for (i = 0; i < times; i++) {
        repeatArr.push(item);
    }
    console.log(repeatArr);
}
repeatIt("example", 3);





console.log("")
console.log("QUESTION 8. **Bonuses - Choose the loop**")

// **Factors.** A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:
// [3, 6, 12, 36]

// * // 3 is a factor of 6 (3 * 2 = 6)
// * // 6 is a factor of 12 (6 * 2 = 12)
// * // 12 is a factor of 36 (12 * 3 = 36)

// Create a program that determines whether or not a given array is a factor chain.
// * Examples
// * [1, 2, 4, 8, 16, 32] ➞ true
// * [1, 1, 1, 1, 1, 1] ➞ true
// * [2, 4, 6, 7, 12] ➞ false
// * [10, 1] ➞ false

let factorChainArr1 = [1, 2, 4, 8, 16, 32]; // ➞ true
let factorChainArr2 = [1, 1, 1, 1, 1, 1]; // ➞ true
let factorChainArr3 = [2, 4, 6, 7, 12]; // ➞ false
let factorChainArr4 = [10, 1]; // ➞ false

let isFactorChain = (chainInput) => {
    let result;
    for (i = chainInput.length + 1; i > 1; i--) {

        if ((chainInput[i]) % (chainInput[i - 1]) === 0) {
            result = true;
        }
        else {
            result = false;
        }
    }
    console.log("For array ---> ", chainInput, "Is this a factor chain? -->", result)
}
isFactorChain(factorChainArr1);
// For array --->  [ 1, 2, 4, 8, 16, 32 ] Is this a factor chain? --> true

isFactorChain(factorChainArr2);
// For array --->  [ 1, 1, 1, 1, 1, 1 ] Is this a factor chain? --> true

isFactorChain(factorChainArr3);
// For array --->  [ 2, 4, 6, 7, 12 ] Is this a factor chain? --> false

isFactorChain(factorChainArr4);
// For array --->  [ 10, 1 ] Is this a factor chain? --> false





// COMPLETED ALREADY
// **No Duplicates!** A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
// * [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]

// * [1, 6, 6, 9, 9] ➞ [1, 6, 9]
// * [2, 2, 2, 2, 2, 2] ➞ [2]
// * [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]

