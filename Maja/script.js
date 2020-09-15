/* 1. 
sumOfNumbers. Create a program that adds up the numbers in an array (of at least 3 numbers). Bonus: Print to screen both the sum and the product of these numbers. */
let arr = [3, 5, 2, 6, 4];
function sumOfNumbers(...arr) {
    let element = 0;
for (let i = 0; i < arr.length; i++) {
    element += arr[i];
    console.log(arr[i]);
}
    return element;
}
console.log(sumOfNumbers(...arr)); // 20

/* 2. 
Hello Frien. Create an array filled with your friends' and family's names. Loop over the array and greet each friend e.g. Hello Maria! Hello Mike! etc. Bonus: Print the indexes of each item in the array. Expected output example: Mike is at index 1 of my friends array. */
let names = [
    "Berta", 
    "Ola", 
    "Ala", 
    "Ela"
];
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);  // [ 'Berta', 'Ola', 'Ala', 'Ela' ]
        //console.log(`Hallo ${names[i]}! Index ${i}`);
    }
    
/* 3.
City Names. Create an array of city names. Loop through the array and add the city names to a string. Example of expected output: "Berlin, Paris, Prague, Rome". */


let cities = [
        "London",
        "Washington",
        "Berlin",
        "Lagos"
    ].join(" ");
for (let i = 0; i < cities.length; i++) {
    //cities.push(newCity);
}
console.log(cities);  // London Washington Berlin Lagos

/* 4. 
Odds and Evens. Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:

[3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
[6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19] */

let numArr = [
   1, 
   2, 
   3, 
   4, 
   5, 
   6, 
   7, 
   8, 
   9 
]
let NewNumArr = numArr.map(item => {
    if(item % 2 !== 0) {
        return item +1;
    } else {
        return item -1
    }
})
console.log(NewNumArr);


/* 5. 
Capitalize. Create a program that capitalises the first letter of each element in an array of names. Examples:
["matt", "sara", "lara"] ➞ ["Matt", "Sara", "Lara"]

["samuel", "MARIA", "luke", "mary"] ➞ ["Samuel", "Maria", "Luke", "Mary"]

["Cynthia", "Karen", "Jane", "Carrie"] ➞ ["Cynthia", "Karen", "Jane", "Carrie"]

Note: Keep names in the same order and make sure that only the first lesson of the name is capitalised (See "Maria" in the second above example). */

let names2 = [
    "matt",
    "sara",
    "lara",
    "MARIA"
];

function Capitalize(words) {
    return words.map(elements => elements.charAt(0).toUpperCase()+ elements.slice(1).toLowerCase(0))
}
console.log(Capitalize(names2));

/* 6.
No Duplicates! A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
[1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]

[1, 6, 6, 9, 9] ➞ [1, 6, 9]

[2, 2, 2, 2, 2, 2] ➞ [2]

[5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25] */
let x = [1, 4, 4, 7, 7, 7];
let y = [1, 6, 6, 9, 9];
let z = [2, 2, 2, 2, 2, 2];

//let unique = [...new Set(x)]; // [ 1, 4, 7 ]
//let unique = [...new Set(y)]; // [ 1, 6, 9 ]
let unique = [...new Set(z)]; // [ 2 ]
console.log(unique); 


/* 7.
Repeat it. Create a program with two variables: "item" and "times". Create a program that repeats the "item" as many times as specified by "times". The first variable ("item") is the item that needs repeating while the second argument ("times") is the number of times the item is to be repeated. Print the result in an array.
Example: ("example", 3) ➞ ["example", "example", "example"] */



function repeatIt(item, times) {
    let counter = [];
    for (let i = 0; i < times; i++) {
        counter = counter.concat(item)
    } 
    return counter;
}
console.log(repeatIt(4,5));  // [ 4, 4, 4, 4, 4 ]



/* Bonuses - 
Choose the loop

Factors. A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain: [3, 6, 12, 36] */

function factorChain(word, times) {
    let result = [];
    for (let i = 0; i<times; i++)
    result.push(word);
    return result;
}
console.log(factorChain("example", 3));


/* Create a program that determines whether or not a given array is a factor chain.
 */
let q = [1, 2, 3, 8];
let w = [1, 1, 1, 1, 1, 1];
let e = [2, 4, 6, 7, 12];

function factorChain(array1, num) {
    for(let i =0; i<array1.length; i++) {
        let result = array1[i];
        console.log(result);

        if (num % result !== 0) {
            return false
        } else {
            return true
        }
    }
}
console.log(factorChain(w, 1)); // true
//console.log(factorChain(q, 12)); // true

