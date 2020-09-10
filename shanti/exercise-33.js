// Programming Basics: Loops Using Arrays

/* 1. sumOfNumbers. Create a program that adds up the numbers in an array (of at least 3 numbers). Bonus: Print to screen both the sum and the product of these numbers. */
function sumProduct(array) {
  let  sum = 0;
  let product = 1;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        product *= array[i];
    }
    console.log(`Sum of the numbers is: ${sum}`);
    console.log(`Product of the numbers is: ${product}`);
}
sumProduct([1, 2, 3]); 
/*
    Sum of the numbers is: 6
    Product of the numbers is: 6
*/

/* 2. Hello Frien Create an array filled with your friends' and family's names. Loop over the array and greet each friend e.g. Hello Maria! Hello Mike! etc. Bonus: Print the indexes of each item in the array. Expected output example: Mike is at index 1 of my friends array. */
const names = ['Lisa', 'Maria', 'Alex', 'Sophia'];
for (let i = 0; i < names.length; i++) {
    const greetFriend = names[i];
    if (greetFriend === names[i]) {
        console.log(`Hello ${names[i]}!`);
    }
    console.log(greetFriend, 'is at index', i ,'of my friends array.' );
}
/*
    Hello Lisa!
    Lisa is at index 0 of my friends array.
    Hello Maria!
    Maria is at index 1 of my friends array.
    Hello Alex!
    Alex is at index 2 of my friends array.
    Hello Sophia!
    Sophia is at index 3 of my friends array.
*/
// OR
for (let i = 0; i < names.length; i++) {
    console.log(`Hello ${names[i]}!, ${names[i]} is at index ${i} of my friends array.`);
}
/*
    Hello Lisa!, Lisa is at index 0 of my friends array.
    Hello Maria!, Maria is at index 1 of my friends array.
    Hello Alex!, Alex is at index 2 of my friends array.
    Hello Sophia!, Sophia is at index 3 of my friends array.
*/

/* 3. City Names. Create an array of city names. Loop through the array and add the city names to a string. Example of expected output: "Berlin, Paris, Prague, Rome". */
let cityNames = ['Berlin', 'Paris', 'Prague', 'Rome'];
console.log(cityNames.join()); // Berlin,Paris,Prague,Rome
// OR
console.log(cityNames.toString()); // Berlin,Paris,Prague,Rome
// OR
let cityNamesStr = "";
for (let i = 0; i < cityNames.length; i++){
    cityNamesStr += cityNames[i];
    if (i == cityNames.length -1){
        cityNamesStr += "."
    } else {
        cityNamesStr += ", "
    }
}
console.log(cityNamesStr); // Berlin, Paris, Prague, Rome.


/* 4. Odds and Evens. Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:
    [3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
    [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]
*/
function myArray(array) {
    let newNumArr = [];
    for (let i = 0; i < array.length; i++) {
        num = array[i];
                    if (num % 2 !== 0) {
                        num++;
                        newNumArr.push(num);
                    } else {
                        num--;
                        newNumArr.push(num);
                    }
    }
    console.log(newNumArr);
}
myArray([3, 5, 2, 4]); // [ 4, 6, 1, 3 ]
myArray([6, 9, 10, 20]); // [ 5, 10, 9, 19 ]


/* 5. Capitalize. Create a program that capitalises the first letter of each element in an array of names. Examples:
    ["matt", "sara", "lara"] ➞ ["Matt", "Sara", "Lara"]

    ["samuel", "MARIA", "luke", "mary"] ➞ ["Samuel", "Maria", "Luke", "Mary"]

    ["Cynthia", "Karen", "Jane", "Carrie"] ➞ ["Cynthia", "Karen", "Jane", "Carrie"]
*/
function arrayNames(names) {
    for (let i = 0; i < names.length; i++) {
        names[i] = names[i][0].toUpperCase() + names[i].substring(1).toLowerCase();
    }
   console.log(names);
}
arrayNames(["maTt", "sAra", "lara"]); // [ 'Matt', 'Sara', 'Lara' ]
arrayNames(["Cynthia", "Karen", "Jane", "Carrie"]); // [ 'Cynthia', 'Karen', 'Jane', 'Carrie' ]

/* 6. No Duplicates! A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
    [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]

    [1, 6, 6, 9, 9] ➞ [1, 6, 9]

    [2, 2, 2, 2, 2, 2] ➞ [2]

    [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]
*/
function duplicates(array) {
    return array.filter((n, index) => array.indexOf(n) == index);
}
console.log(duplicates([1, 4, 4, 7, 7, 7])); // [ 1, 4, 7 ]
console.log(duplicates([1, 6, 6, 9, 9])); // [1, 6, 9]
console.log(duplicates([2, 2, 2, 2, 2, 2])); // [2]
console.log(duplicates([5, 10, 15, 20, 25])); // [5, 10, 15, 20, 25]

/* Repeat it. Create a program with two variables: "item" and "times". Create a program that repeats the "item" as many times as specified by "times". The first variable ("item") is the item that needs repeating while the second argument ("times") is the number of times the item is to be repeated. Print the result in an array.
    Example: ("example", 3) ➞ ["example", "example", "example"]
*/
function repeat(item, times) {
    let result = [];
    for(let i = 0; i < times; i++) {
        result.push(item)
    }
    return result;
}
console.log(repeat("example", 3)); // [ 'example', 'example', 'example' ]

// Bonuses - Choose the loop
/* Factors. A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain: [3, 6, 12, 36]

    // 3 is a factor of 6 (3 * 2 = 6)
    // 6 is a factor of 12 (6 * 2 = 12)
    // 12 is a factor of 36 (12 * 3 = 36)
    Create a program that determines whether or not a given array is a factor chain.

    Examples
    [1, 2, 4, 8, 16, 32] ➞ true
    [1, 1, 1, 1, 1, 1] ➞ true
    [2, 4, 6, 7, 12] ➞ false
    [10, 1] ➞ false
*/
function factorChain(arr) { 
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i+1] % arr[i] != 0) {
        return false;            
      }
    }
    return true;
  }
console.log(factorChain([1, 2, 4, 8, 16, 32] )); // true
console.log(factorChain([1, 1, 1, 1, 1, 1]));    // true
console.log(factorChain([2, 4, 6, 7, 12]));      // false
console.log(factorChain([10, 1]));              // false
