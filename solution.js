// Q1 Sum of Numbers

// let myArr = [4, 3, 13, 2];
// let mySum = 0;
// let myProduct = 1;
// for (let i = 0; i < myArr.length; i ++) {
//    mySum += myArr[i];
//    myProduct *= myArr[i];
// }
// console.log(`The sum of the array is ${mySum}; the product of the array is ${myProduct}.`);

// // Q2 Hello Frien

// const friends = ["Becky", "Dan", "Rika", "Maria", "Kevin"];
// for (let i = 0; i < friends.length; i++) {
//    console.log(`Hello ${friends[i]}!`);
//    console.log(`${friends[i]} is at index ${i} of my friends array!`);
// }

// // Q3 City Names

// const cityArr = ["Paris", "Berlin", "EveryDisco", "I-Am-In"];

// function stringify(array) {
//     let str = "";
//     for (i = 0; i < array.length; i++) {
//        str += array[i];
//        if (i == array.length - 1) {
//            str += "."
//        } else {
//            str += ", ";
//        }

//     }

//     return str;
// }

// console.log(stringify(cityArr));

// // Q4 Odds and Evens

// const myArr = [1, 2, 3, 4];

// function oddEvenReverser(array) {
//     let newArr = [];

//     let newInt;

//     for (i = 0; i < array.length; i++) {
//         newInt = array[i];
//         if (newInt % 2 !== 0) {
//             newInt++;
//             newArr.push(newInt);
//         } else {
//             newInt--;
//             newArr.push(newInt);
//         }
//     }

//     return newArr;
// }

// console.log(oddEvenReverser(myArr));

// // Q5 capiTALize

// const myArray = ["itaMAR", "rOBert", "MartIna"];

// function correctCaps(array) {

//     for (i = 0; i < array.length; i++) {
//         array[i] = array[i][0].toUpperCase() + array[i].substr(1).toLowerCase();
//     }
//     return array;
// }

// console.log(correctCaps(myArray));

// // Q6 No Duplicates

// const myArr1 = [1, 4, 4, 7, 7, 7];

// const myArr2 = [1, 6, 6, 9, 9];

// const myArr3 = [2, 2, 2, 2, 2, 2];

// const myArr4 = [5, 10, 15, 20, 25];

// function setMaker(array) {
//     for (i = 0; i < array.length; i++) {
//         if (array[i] === array[i + 1]) {
//             do { 
//             array.splice(i, 1); 
//             } while (array[i] === array[i + 1]);
//         }
//     }
//     return array;
// }

// console.log(setMaker(myArr1));

// // Q7 Repeat It

// function repeatIt(item, times) {
//     let myArray = [];
//     for (let i = 0; i < times; i++) {
//         myArray.push(item);
//     }
//     return myArray;
// }

// console.log(repeatIt("oi", 3));

// // Bonuses

// // Factors

// const arr1 = [1, 2, 4, 8, 16, 32];

// const arr2 = [1, 1, 1, 1, 1, 1];

// const arr3 = [2, 4, 6, 7, 12];

// const arr4 = [10, 1];

// function isFactorChain(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (i === array.length - 1) {
//             return true;
//         } else if (array[i + 1] % array[i] !== 0) {
//             return false;
//         }
//     }
// }

// console.log(isFactorChain(arr1));
