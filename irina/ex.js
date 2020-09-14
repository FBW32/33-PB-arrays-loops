// Programming Basics: Loops Using Arrays

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

/*
Loop Types:

FOR STATEMENT
A for loop repeats until a specified condition evaluates to false. 
for ([initialExpression]; [conditionExpression]; [incrementExpression]) {
  statement}

  DO...WHILE STATEMENT
 The do...while statement repeats until a specified condition evaluates to false.
 do {
  statement
 } while (condition);

 WHILE STATEMENT
 A while statement executes its statements as long as a specified condition evaluates to true. 
 while (condition) {
  statement }

FOR... IN STATEMENT
The for...in statement iterates a specified variable over all the enumerable properties of an object. For each distinct property, JavaScript executes the specified statements. 
for (variable in object) {
  statement }

FOR...OF STATEMENT
The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.
for (variable of object) {
  statement}
  */

// sumOfNumbers. Create a program that adds up the numbers in an array (of at least 3 numbers). Bonus: Print to screen both the sum and the product of these numbers.


let arr1 = [1, 2, 3, 4, 5];
let arr2 = [];
function sumOfNumbers(...array) {
  let   sum = 0;
  let product = 1;
for (let i = 0; i < arr1.length; i += 1) {
    sum += arr1[i];
    product *= arr1[i];
    arr2.push(sum, product);
    }
    return arr2.join(","), `Sum: ${sum}, Product: ${product} and New Array: ${arr2}`

  }
console.log(sumOfNumbers(...arr1)); //Sum: 15, Product: 120 and New Array: 1,1,3,2,6,6,10,24,15,120

// Hello Frien Create an array filled with your friends' and family's names. Loop over the array and greet each friend e.g. Hello Maria! Hello Mike! etc. Bonus: Print the indexes of each item in the array. Expected output example: Mike is at index 1 of my friends array.
let names = ['Anna', 'Jorge', 'Márcia', 'Isabelle', 'Cecilia', 'Ali', 'Christine', 'Maria'];

for (let i = 0; i < names.length; i++) {
        console.log(`Welcome ${names[i]}!  Index ${i}`);
};
/*
Welcome Anna!  Index 0
Welcome Jorge!  Index 1
Welcome Márcia!  Index 2
Welcome Isabelle!  Index 3
Welcome Cecilia!  Index 4
Welcome Ali!  Index 5
Welcome Christine!  Index 6
Welcome Maria!  Index 7 */

// City Names. Create an array of city names. Loop through the array and add the city names to a string. Example of expected output: "Berlin, Paris, Prague, Rome".


let arr3 = ['Berlin', 'Paris' , 'Prague', 'Rome', 'Lisbon'];
let arr4 = [];
function cityNames(...array) {
for (let i = 0; i < arr1.length; i++) {
    arr4.push(arr3[i]);
    arr4.join(" ");
    }
    return arr4.toString();
  }
console.log(cityNames(arr4)); //Berlin, Paris, Prague, Rome, Lisbon

// Odds and Evens. Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:

const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let odd =[];
let even = [];
function oddEven(...arr) {
  let result;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0){
       result = arr[i] -1 ;
        even.push(result);
        //console.log(even); //[ 1, 3, 5, 7, 9 ]
    }
    else {
      result = arr[i] +1 ;
        odd.push(result)
      //  console.log(odd); // [ 2, 4, 6, 8, 10 ]
    }
}
 return `Even: ${even} - Odd: ${odd}`;
}
console.log(oddEven(...arr5)); //Even: 1,3,5,7,9 - Odd: 2,4,6,8,10


// Capitalize. Create a program that capitalises the first letter of each element in an array of names. 

let arr6 = ["matt", "sara", "lara", "samuel"];
arr6 = ["samuel", "MARIA", "luke", "mary"];
//arr6 = ["Cynthia", "Karen", "Jane", "Carrie"];
let newArr = [];
let finalArr = [];
function firstLetter(...arr) {
    for(let i  = 0; i < arr.length; i++){
      newArr.push(arr[i].toLowerCase());
      finalArr.push(newArr[i].charAt(0).toUpperCase()+newArr[i].slice(1));
      finalArr.join(' ');
      
  }
  return finalArr;
}
console.log(firstLetter(...arr6)); //[ 'Samuel', 'Maria', 'Luke', 'Mary' ] 

//OR
function firstLetter2(...arr) {
  for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1).toLowerCase();
  }
 console.log(...arr6);
}

// No Duplicates! A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
//https://dev.to/mshin1995/back-to-basics-removing-duplicates-from-an-array-55he


let arr7 = [1, 4, 4, 7, 7, 7];
arr7 = [1, 6, 6, 9, 9];
arr7 = [2, 2, 2, 2, 2, 2];

function removeDuplicates(...array) {
  return array.filter((a, b) => array.indexOf(a) === b)
};
console.log(removeDuplicates(...arr7)); // [2]

//OR
function removeDuplicates2(...array) {
  let x = {};
  array.forEach(function(i) {
    if(!x[i]) {
      x[i] = true
    }
  })
  return Object.keys(x)
}; 
console.log(removeDuplicates2(...arr7));


// Repeat it. Create a program with two variables: "item" and "times". Create a program that repeats the "item" as many times as specified by "times". The first variable ("item") is the item that needs repeating while the second argument ("times") is the number of times the item is to be repeated. Print the result in an array.
// Example: ("example", 3) ➞ ["example", "example", "example"]
// Bonuses - Choose the loop

function repeat(item, times) {
  let result = [];
	for(let i = 0; i < times; i++) {
  	result.push(item)
  }
  return result;
}
console.log(repeat('example', 3)); //[ 'example', 'example', 'example' ]



// Factors. A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain: [3, 6, 12, 36]
// // 3 is a factor of 6 (3 * 2 = 6)
// // 6 is a factor of 12 (6 * 2 = 12)
// // 12 is a factor of 36 (12 * 3 = 36)


// Create a program that determines whether or not a given array is a factor chain.
let arr8 = [1, 2, 3]; //false
arr8 = [1, 2, 4, 8, 16, 32]; //true
function factorChain(...arr) { 
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i+1] % arr[i] != 0) {
      return false;            
    }
  }
  return true;
} console.log(factorChain(...arr8));



