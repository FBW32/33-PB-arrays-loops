//Q1 Run Along

// let i = 2;

// while (i < 15) {
//    console.log(i *= 2);
// }

//Q2 City Names

// let cityArr = ["Paris", "Berlin", "EveryDisco", "I-Am-In"];

// let str = "";

// let i = 0;

// while (i < cityArr.length) {
//    str += cityArr[i];
//    if (i == cityArr.length - 1) {
//        str += "."
//    } else {
//        str += ", ";
//    }
//    i ++;
// }

// console.log(str);

//Q3 Odds and Evens

// let myArr = [1, 2, 3, 4];

// let newArr = [];

// let i = 0;

// let newInt;

// while (i < myArr.length) {
//    let newInt = myArr[i];
//    if (newInt % 2 !== 0) {
//        newInt ++;
//        newArr.push(newInt);
//    } else {
//        newInt --;
//        newArr.push(newInt);
//    }
//    i++;
// } 

// console.log(newArr);

// Do while loops

//1. Sum of Numbers

// let numArr = [32, 46, 2];

// let sum = 0;

// let i = 0;

// do {
//    sum+= numArr[i];
//    i ++;
// } while (i < numArr.length);

// console.log(sum);

//2 Add it up

// let i = 1;

// sum = 0;

// do {
//    sum += i;
//    i ++;
// } while (i<= 20);

// console.log(sum);

//3 Count Instances

//???


//4 capiTALize

// let myArray = ["itaMAR", "robert", "MartINA"];

// let i = 0;

// do {
//     myArray[i] = myArray[i][0].toUpperCase() + myArray[i].substr(1).toLowerCase();
//     i++;

// } while (i < myArray.length);

// console.log(myArray);

//5 No Duplicates

// let myArr1 = [1, 4, 4, 7, 7, 7];

// let myArr2 = [1, 6, 6, 9, 9];

// let myArr3 = [2, 2, 2, 2, 2, 2];

// let myArr4 = [5, 10, 15, 20, 25];

// let myArr = myArr4; // change this value to test different arrays

// let i = 0;

// do {
//     if (myArr[i] === myArr[i + 1]) {
//         do { 
//         myArr.splice(i, 1); 
//         } while (myArr[i] === myArr[i + 1]);
//     }
//     i ++;

// } while (i < myArr.length);

// console.log(myArr);

// Q6 Repeat It


