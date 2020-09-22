// # Programming Basics: Loops Using Arrays

// 1. **sumOfNumbers.** Create a program that adds up the numbers in an array (of at least 3 numbers). **Bonus**: Print to screen both the sum and the product of these numbers.

function sumOfNumbers(arr){

    let sum = 0;
    let product = 1;

    for(i = 0; i < arr.length; i++){

        sum += arr[i]
        product *= arr[i]
    }
    return `sum = ${sum} product = ${product}`
}

console.log(sumOfNumbers([3,6,11])); // sum = 20 product = 198

// 2. **Hello Frien** Create an array filled with your friends' and family's names. Loop over the array and greet each friend e.g. Hello Maria! Hello Mike! etc. **Bonus**: Print the indexes of each item in the array. Expected output example: Mike is at index 1 of my friends array. 

let friends = ['Sylwia', 'Iza', 'Hamtaro', 'Dan'];
    

for(let i = 0; i < friends.length; i++){

    let name = friends[i];
    if(name === friends[i]){
       console.log(`Hello ${friends[i]}!`);
    }
    console.log(name, 'is at index', i, 'of my friends array');
}

// 3. **City Names.** Create an array of city names. Loop through the array and add the city names to a string. Example of expected output: "Berlin, Paris, Prague, Rome". 

const cityNames = ['Berlin', 'Paris', 'Prague', 'Rome'];

function arrToString(cityArr){

    let str = "";
    cityArr.map((city)=>{
        str = str + city + ', ';
    });
    return str
}

console.log(cityNames.toString()); // Berlin,Paris,Prague,Rome
console.log(arrToString(cityNames)); // Berlin, Paris, Prague, Rome, 

// 4. **Odds and Evens.** Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:
// * [3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
// * [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]

function oddEven(arr){
    let result = [];

    arr.map((item) => {
        if(item % 2 === 0){
            item -= 1
            result.push(item)
        } else {
            item += 1
            result.push(item)
        }
    })
    return result
}

console.log(oddEven([3, 5, 2, 4]));     // [ 4, 6, 1, 3 ]
console.log(oddEven([6, 9, 10, 20]));   // [ 5, 10, 9, 19 ]

// 5. **Capitalize.** Create a program that capitalises the first letter of each element in an array of names. Examples:
// * ["matt", "sara", "lara"] ➞ ["Matt", "Sara", "Lara"]
// * ["samuel", "MARIA", "luke", "mary"] ➞ ["Samuel", "Maria", "Luke", "Mary"]
// * ["Cynthia", "Karen", "Jane", "Carrie"] ➞ ["Cynthia", "Karen", "Jane", "Carrie"]

// * **Note:** Keep names in the same order and make sure that only the first lesson of the name is capitalised (See "Maria" in the second above example). 
    
function capitalFirst(arr){
    captital = [];
    for(i = 0; i < arr.length; i++){
        names = (arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase());
        captital = captital.concat(names.split())
    }
    return captital
}

console.log(capitalFirst(["matt", "sara", "lara"]));    // [ 'Matt', 'Sara', 'Lara' ]
console.log(capitalFirst(["samuel", "MARIA", "luke", "mary"]));    // [ 'Samuel', 'Maria', 'Luke', 'Mary' ]

// 6. **No Duplicates!** A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
// * [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]

// * [1, 6, 6, 9, 9] ➞ [1, 6, 9]
// * [2, 2, 2, 2, 2, 2] ➞ [2]
// * [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]

function setFunc(arr){
    uniqueSet = [...new Set(arr)]
    return uniqueSet
}

console.log(setFunc([1, 4, 4, 7, 7, 7])); // [ 1, 4, 7 ]


// 7. **Repeat it.** Create a program with two variables: "item" and "times". Create a program that repeats the "item" as many times as specified by "times". The first variable ("item") is the item that needs repeating while the second argument ("times") is the number of times the item is to be repeated. Print the result in an array.

// * Example: ("example", 3) ➞ ["example", "example", "example"]

let repeatIt = (item, time) => {
    let loop = [];
    for(i = 0; i < time; i++){
        loop.push(item)
    }
    return loop
}
console.log(repeatIt('Lol', 4)); // [ 'Lol', 'Lol', 'Lol', 'Lol' ]

// **Bonuses - Choose the loop**

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

let factorChain = (arr) =>{
    for(i = 0; i < arr.length -1; i++){
        if(arr[i+1] % arr[i] != 0){
            return false
        }
    }
    return true
}
console.log(factorChain([1, 2, 4, 8, 16, 32]));     // true
console.log(factorChain([1, 1, 1, 1, 1, 1]));       // true
console.log(factorChain([2, 4, 6, 7, 12]));         // false

