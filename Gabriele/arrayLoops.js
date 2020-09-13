// 1. sumOfNumbers. Create a program that adds up the numbers in an array (of at least 3 numbers). Bonus: Print to screen both the sum and the product of these numbers.

let myArr = [28, 67, 21];
let sum = 0;
prod = 1;
function sumUp() {
    for (let i=0; i < myArr.length; i++) {
        sum += myArr[i];
        prod *= myArr[i]; 
        
}
console.log(prod);  // 39396
return sum; 

}
console.log(sumUp(myArr));  // 116 



// 2. Hello Frien Create an array filled with your friends' and family's names. Loop over the array and greet each friend e.g. Hello Maria! Hello Mike! etc. Bonus: Print the indexes of each item in the array. Expected output example: Mike is at index 1 of my friends array.


let friendsArr = ['Francesco', 'Chris', 'Giovanni', 'Miki', 'Peppino'];
for (let i of friendsArr) {
    console.log(`Hello ${i}`);
}
for (let i in friendsArr) {
    console.log(`${friendsArr[i]} is at index ${i} of my friends array`);
};

// Hello francesco
// Hello chris
// Hello giovanni
// Hello miki
// Hello peppino
// Francesco is at index 0 of my friends array
// Chris is at index 1 of my friends array
// Giovanni is at index 2 of my friends array
// Miki is at index 3 of my friends array
// Peppino is at index 4 of my friends array



// 3. City Names. Create an array of city names. Loop through the array and add the city names to a string. Example of expected output: "Berlin, Paris, Prague, Rome".

let cityArr = ["Lisbon", "Scalea", "Roma", "Paris"];
let cityStr = "";

for (let c of cityArr) {
    cityStr += c + " ";

}
console.log(cityStr);


// Lisbon Scalea Roma Paris 



// 4. Odds and Evens. Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:

// [3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
// [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]

givenArr = [3, 5, 2, 4];
let plusOne = [];
let minusOne = [];
finalArr = [];
 for (let i = 0; i < givenArr.length; i++) {
     if (givenArr[i]%2 !== 0) {
        plusOne.push(givenArr[i] + 1);
     } else if (givenArr[i] %2 === 0)  {
        minusOne.push(givenArr[i] - 1);
     }
 }
 console.log(plusOne.concat(minusOne));  // [ 4, 6, 1, 3 ]


// 5. Capitalize. Create a program that capitalises the first letter of each element in an array of names. Examples:
// ["matt", "sara", "lara"] ➞ ["Matt", "Sara", "Lara"]

// ["samuel", "MARIA", "luke", "mary"] ➞ ["Samuel", "Maria", "Luke", "Mary"]

// ["Cynthia", "Karen", "Jane", "Carrie"] ➞ ["Cynthia", "Karen", "Jane", "Carrie"]

// Note: Keep names in the same order and make sure that only the first lesson of the name is capitalised (See "Maria" in the second above example).


let nameArr = ["matt", "SARA", "lara"];
newArr=[];
for (let k = 0; k < nameArr.length; k++) {
    newItems = ((nameArr[k].charAt(0).toUpperCase() + nameArr[k].slice(1).toLowerCase()));
    newArr = newArr.concat(newItems.split());
}
console.log(newArr);  // // [ 'Matt', 'Sara', 'Lara' ]



// 6. No Duplicates! A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
// [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]
// [1, 6, 6, 9, 9] ➞ [1, 6, 9]
// [2, 2, 2, 2, 2, 2] ➞ [2]
// [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]

function mySet(aGivenArr) {
    let finalSet = [...new Set(aGivenArr)];
    return finalSet;
}
console.log(mySet([1, 4, 4, 7, 7, 7]));  // [ 1, 4, 7 ]
console.log(mySet([2, 2, 2, 2, 2, 2]))   // [ 2 ]
console.log(mySet([1, 6, 6, 9, 9]))   // [ 1, 6, 9 ]




// 7. Repeat it. Create a program with two variables: "item" and "times". Create a program that repeats the "item" as many times as specified by "times". The first variable ("item") is the item that needs repeating while the second argument ("times") is the number of times the item is to be repeated. Print the result in an array.
// Example: ("example", 3) ➞ ["example", "example", "example"]


itemArr = [];
function repeatItem(item, times) {
    for (let j = 0; j < times; j++) {
         itemArr.push(item);
    }
    return itemArr;
}
console.log(repeatItem("pepe", 3));



// 8. Factors. A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:
// [3, 6, 12, 36]

// // 3 is a factor of 6 (3 * 2 = 6)
// // 6 is a factor of 12 (6 * 2 = 12)
// // 12 is a factor of 36 (12 * 3 = 36)
// Create a program that determines whether or not a given array is a factor chain.

// Examples
// [1, 2, 4, 8, 16, 32] ➞ true
// [1, 1, 1, 1, 1, 1] ➞ true
// [2, 4, 6, 7, 12] ➞ false
// [10, 1] ➞ false

let oneArray = [];
function checkFactor(oneArray) {
for (let k = 0; k < oneArray.length -1; k++) {
    if (oneArray[k +1] % oneArray[k] !== 0) {
        return false;
    } 
} 
return true;
}
console.log((checkFactor([1, 2, 4, 8, 16, 32]))); // true
console.log((checkFactor([2, 4, 6, 7, 12]))); // false 
console.log((checkFactor([10, 1]))); // false 